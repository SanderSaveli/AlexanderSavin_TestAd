using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public sealed class ReactionResolver : MonoBehaviour
{
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
                yield return VanishStack(cell, stack);
            }
        }
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

        HexColorId color = receiver.TopColor;
        return donor.TopColor == color && receiver.CountTopColor(color) < _vanishStackSize;
    }

    private IEnumerator MergeStacks(HexCell receiverCell, HexCell donorCell)
    {
        HexStack receiver = receiverCell.CurrentStack;
        HexStack donor = donorCell.CurrentStack;
        HexColorId color = receiver.TopColor;
        int reservedReceiverCount = receiver.Count;
        int reservedTopColorCount = receiver.CountTopColor(color);
        int runningAnimations = 0;

        while (!donor.IsEmpty && donor.TopColor == color && reservedTopColorCount < _vanishStackSize)
        {
            LastResolveHadReaction = true;
            HexDisk disk = donor.PopTopDisk();
            float duration = GetScaledDuration(_baseFlyDuration);
            Vector3 target = receiver.GetDiskWorldPositionAtIndex(reservedReceiverCount);
            runningAnimations++;
            AnimateRollingDisk(disk, receiver, target, duration, () => runningAnimations--);

            reservedReceiverCount++;
            reservedTopColorCount++;
            _reactionStep++;

            if (!donor.IsEmpty && donor.TopColor == color && reservedTopColorCount < _vanishStackSize)
            {
                yield return new WaitForSeconds(_diskLaunchInterval);
            }
        }

        yield return new WaitUntil(() => runningAnimations == 0);

        if (donor.IsEmpty)
        {
            donorCell.ClearStack(donor);
            Destroy(donor.gameObject);
        }
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
                disk.transform
                    .DOPunchScale(Vector3.one * 0.08f, 0.08f, 1, 0.4f)
                    .OnComplete(() =>
                    {
                        disk.transform.localScale = Vector3.one;
                        onComplete?.Invoke();
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

    private IEnumerator VanishStack(HexCell cell, HexStack stack)
    {
        List<HexDisk> disks = stack.RemoveTopDisks(_vanishStackSize);
        if (_vanishFxPrefab != null)
        {
            GameObject fx = Instantiate(_vanishFxPrefab, stack.transform.position + Vector3.up * 0.35f, Quaternion.identity);
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

        yield return vanish.WaitForCompletion();

        foreach (HexDisk disk in disks)
        {
            if (disk != null)
            {
                Destroy(disk.gameObject);
            }
        }

        _reactionStep++;
        cell.ClearStack(stack);
        Destroy(stack.gameObject);
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
