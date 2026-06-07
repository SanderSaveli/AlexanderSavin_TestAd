using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public sealed class ReactionResolver : MonoBehaviour
{
    private const float ANIMATION_WAIT_TIMEOUT_PADDING = 0.25f;
    private const float PUNCH_SCALE_DURATION = 0.08f;

    [SerializeField] private GameObject _vanishFxPrefab;
    [SerializeField] private float _baseFlyDuration = 0.38f;
    [SerializeField] private float _baseVanishDuration = 0.22f;
    [SerializeField] private float _speedIncrease = 1.18f;
    [SerializeField] private float _maxReactionSpeedMultiplier = 2.2f;
    [SerializeField] private float _diskLaunchInterval = 0.09f;
    [SerializeField] private float _edgePivotOffset = 0.42f;
    [SerializeField] private float _rollDegrees = 205f;
    [SerializeField] private int _vanishStackSize = 10;

    private readonly Stack<HexCell> _cellsToCheck = new Stack<HexCell>();
    private BoardController _board;
    private int _reactionStep;

    public bool LastResolveHadReaction { get; private set; }

    public void Initialize(BoardController boardReference)
    {
        _board = boardReference;
    }

    public void Configure(GameObject fxPrefab, float maxSpeedMultiplier)
    {
        _vanishFxPrefab = fxPrefab;
        _maxReactionSpeedMultiplier = maxSpeedMultiplier;
    }

    public IEnumerator MergeFrom(HexCell placedCell)
    {
        _reactionStep = 0;
        LastResolveHadReaction = false;
        _cellsToCheck.Clear();
        PushIfCheckable(placedCell);

        while (_cellsToCheck.Count > 0)
        {
            HexCell cell = _cellsToCheck.Pop();
            if (cell == null || cell.CurrentStack == null || cell.CurrentStack.IsEmpty)
            {
                continue;
            }

            bool moved = false;
            foreach (HexCell neighbor in _board.GetNeighbors(cell))
            {
                if (CanMerge(cell, neighbor))
                {
                    moved = true;
                    yield return MergeStacks(cell, neighbor);
                    PushIfCheckable(neighbor);
                    PushIfCheckable(cell);
                    break;
                }
            }

            if (moved)
            {
                yield return null;
            }
        }
    }

    public IEnumerator CleanFullStacks()
    {
        List<HexCell> cells = new List<HexCell>(_board.Cells);
        foreach (HexCell cell in cells)
        {
            HexStack stack = cell.CurrentStack;
            if (stack != null && stack.IsSingleColorStack(_vanishStackSize))
            {
                VanishStack(cell, stack);
            }
        }

        yield return null;
    }

    private bool CanMerge(HexCell receiverCell, HexCell donorCell)
    {
        if (receiverCell == null || donorCell == null)
        {
            return false;
        }

        HexStack receiver = receiverCell.CurrentStack;
        HexStack donor = donorCell.CurrentStack;
        if (receiver == null || donor == null || receiver.IsEmpty || donor.IsEmpty)
        {
            return false;
        }

        return GetMergeDiskCount(receiver, donor) > 0;
    }

    private IEnumerator MergeStacks(HexCell receiverCell, HexCell donorCell)
    {
        HexStack receiver = receiverCell.CurrentStack;
        HexStack donor = donorCell.CurrentStack;
        HexColorId color = receiver.TopColor;
        int reservedReceiverCount = receiver.Count;
        int disksToMove = GetMergeDiskCount(receiver, donor);
        int movedDisks = 0;
        int runningAnimations = 0;
        float animationWaitTimeout = disksToMove * (_diskLaunchInterval + GetScaledDuration(_baseFlyDuration) + PUNCH_SCALE_DURATION) + ANIMATION_WAIT_TIMEOUT_PADDING;

        while (!donor.IsEmpty && donor.TopColor == color && movedDisks < disksToMove)
        {
            LastResolveHadReaction = true;
            HexDisk disk = donor.PopTopDisk();
            float duration = GetScaledDuration(_baseFlyDuration);
            Vector3 target = receiver.GetDiskWorldPositionAtIndex(reservedReceiverCount);
            runningAnimations++;
            AnimateRollingDisk(disk, receiver, target, duration, () => runningAnimations--);

            reservedReceiverCount++;
            movedDisks++;
            _reactionStep++;

            if (!donor.IsEmpty && donor.TopColor == color && movedDisks < disksToMove)
            {
                yield return new WaitForSeconds(_diskLaunchInterval);
            }
        }

        while (runningAnimations > 0 && animationWaitTimeout > 0f)
        {
            animationWaitTimeout -= Time.deltaTime;
            yield return null;
        }

        if (donor.IsEmpty)
        {
            donorCell.ClearStack(donor);
            Destroy(donor.gameObject);
        }
    }

    private int GetMergeDiskCount(HexStack receiver, HexStack donor)
    {
        if (receiver == null || donor == null || receiver.IsEmpty || donor.IsEmpty)
        {
            return 0;
        }

        if (receiver.Count >= _vanishStackSize || donor.IsSingleColorStack(_vanishStackSize))
        {
            return 0;
        }

        HexColorId color = receiver.TopColor;
        if (donor.TopColor != color)
        {
            return 0;
        }

        int donorTopCount = donor.CountTopColor(color);
        int freeSpace = _vanishStackSize - receiver.Count;
        int movableCount = Mathf.Min(donorTopCount, freeSpace);
        if (movableCount <= 0)
        {
            return 0;
        }

        if (movableCount == donorTopCount)
        {
            return movableCount;
        }

        bool receiverWillBecomeSingleColorStack = receiver.CountTopColor(color) == receiver.Count
            && receiver.Count + movableCount == _vanishStackSize;
        return receiverWillBecomeSingleColorStack ? movableCount : 0;
    }

    private void AnimateRollingDisk(HexDisk disk, HexStack receiver, Vector3 target, float duration, System.Action onComplete)
    {
        Vector3 start = disk.transform.position;
        Vector3 direction = target - start;
        direction.y = 0f;
        if (direction.sqrMagnitude < 0.001f)
        {
            direction = Vector3.forward;
        }

        direction.Normalize();
        Vector3 rotationAxis = Vector3.Cross(Vector3.up, direction).normalized;
        Vector3 startPivot = start + direction * _edgePivotOffset;
        Vector3 targetPivot = target - direction * _edgePivotOffset;
        Vector3 midPivot = (startPivot + targetPivot) * 0.5f + Vector3.up * 0.72f;

        GameObject pivotObject = new GameObject("RollingHexPivot");
        Transform pivot = pivotObject.transform;
        pivot.position = startPivot;
        pivot.rotation = Quaternion.identity;
        disk.transform.SetParent(pivot, true);

        Sequence roll = DOTween.Sequence();
        roll.Append(pivot.DOPath(new[] { startPivot, midPivot, targetPivot }, duration, PathType.CatmullRom).SetEase(Ease.InOutSine));
        roll.Join(DOVirtual.Float(0f, _rollDegrees, duration, angle =>
        {
            if (pivot != null)
            {
                pivot.rotation = Quaternion.AngleAxis(angle, rotationAxis);
            }
        }).SetEase(Ease.InOutSine));

        roll.OnComplete(() =>
        {
            if (disk != null)
            {
                disk.transform.SetParent(null, true);
                receiver.PushDisk(disk);
                onComplete?.Invoke();
                disk.transform
                    .DOPunchScale(Vector3.one * 0.08f, PUNCH_SCALE_DURATION, 1, 0.4f)
                    .OnComplete(() =>
                    {
                        disk.transform.localScale = Vector3.one;
                    });
            }
            else
            {
                onComplete?.Invoke();
            }

            if (pivotObject != null)
            {
                Destroy(pivotObject);
            }
        });
    }

    private void VanishStack(HexCell cell, HexStack stack)
    {
        Vector3 vanishPosition = stack.transform.position;
        List<HexDisk> disks = stack.RemoveTopDisks(_vanishStackSize);
        _reactionStep++;
        cell.ClearStack(stack);
        Destroy(stack.gameObject);

        if (_vanishFxPrefab != null)
        {
            GameObject fx = Instantiate(_vanishFxPrefab, vanishPosition + Vector3.up * 0.35f, Quaternion.identity);
            fx.SetActive(true);
            ParticleSystem particles = fx.GetComponent<ParticleSystem>();
            if (particles != null)
            {
                particles.Play(true);
            }

            Destroy(fx, 1.1f);
        }

        float duration = GetScaledDuration(_baseVanishDuration);
        Sequence vanish = DOTween.Sequence();
        foreach (HexDisk disk in disks)
        {
            vanish.Join(disk.transform.DOScale(Vector3.zero, duration).SetEase(Ease.InBack));
        }

        vanish.OnComplete(() => DestroyDisks(disks));
    }

    private void DestroyDisks(List<HexDisk> disks)
    {
        foreach (HexDisk disk in disks)
        {
            if (disk != null)
            {
                Destroy(disk.gameObject);
            }
        }
    }

    private void PushIfCheckable(HexCell cell)
    {
        if (cell != null && cell.CurrentStack != null && !cell.CurrentStack.IsEmpty)
        {
            _cellsToCheck.Push(cell);
        }
    }

    private float GetScaledDuration(float baseDuration)
    {
        float speed = Mathf.Min(Mathf.Pow(_speedIncrease, _reactionStep), _maxReactionSpeedMultiplier);
        return baseDuration / speed;
    }
}
