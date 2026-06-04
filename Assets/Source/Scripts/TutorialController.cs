using System.Collections;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public sealed class TutorialController : MonoBehaviour
{
    [SerializeField] private RectTransform _hand;
    [SerializeField] private Canvas _canvas;
    [SerializeField] private Camera _gameCamera;
    [SerializeField] private Transform _sourceStack;
    [SerializeField] private float _replayDelay = 1.8f;

    private BoardController _board;
    private Sequence _loop;
    private Coroutine _replayRoutine;

    public void Initialize(BoardController boardReference)
    {
        _board = boardReference;
        if (_gameCamera == null)
        {
            _gameCamera = Camera.main;
        }
    }

    public void Configure(RectTransform handReference, Canvas canvasReference, Camera cameraReference, Transform sourceReference)
    {
        _hand = handReference;
        _canvas = canvasReference;
        _gameCamera = cameraReference;
        _sourceStack = sourceReference;
    }

    public void Play()
    {
        if (_hand == null || _sourceStack == null || _board.TargetCell == null)
        {
            return;
        }

        if (_replayRoutine != null)
        {
            StopCoroutine(_replayRoutine);
            _replayRoutine = null;
        }

        _loop?.Kill();
        _hand.gameObject.SetActive(true);
        Vector2 from = WorldToCanvas(_sourceStack.position + new Vector3(0.2f, 0.2f, 0f));
        Vector2 to = WorldToCanvas(_board.TargetCell.transform.position + Vector3.up * 0.1f);
        _hand.anchoredPosition = from;
        _hand.localScale = Vector3.one;

        _loop = DOTween.Sequence();
        _loop.Append(_hand.DOAnchorPos(to, 0.9f).SetEase(Ease.InOutSine));
        _loop.AppendInterval(0.18f);
        _loop.Append(_hand.DOScale(0.9f, 0.12f).SetLoops(2, LoopType.Yoyo));
        _loop.AppendInterval(0.35f);
        _loop.Append(_hand.DOAnchorPos(from, 0.01f));
        _loop.AppendInterval(0.25f);
        _loop.SetLoops(-1);
    }

    public void Hide()
    {
        _loop?.Kill();
        if (_replayRoutine != null)
        {
            StopCoroutine(_replayRoutine);
            _replayRoutine = null;
        }

        if (_hand != null)
        {
            _hand.gameObject.SetActive(false);
        }
    }

    public void ScheduleReplay()
    {
        if (_replayRoutine != null)
        {
            StopCoroutine(_replayRoutine);
        }

        _replayRoutine = StartCoroutine(ReplayAfterDelay());
    }

    private IEnumerator ReplayAfterDelay()
    {
        yield return new WaitForSeconds(_replayDelay);
        Play();
        _replayRoutine = null;
    }

    private Vector2 WorldToCanvas(Vector3 world)
    {
        RectTransform canvasRect = (RectTransform)_canvas.transform;
        Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(_gameCamera, world);
        RectTransformUtility.ScreenPointToLocalPointInRectangle(canvasRect, screenPoint, _canvas.worldCamera, out Vector2 local);
        return local;
    }
}
