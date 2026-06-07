using DG.Tweening;
using UnityEngine;

public sealed class PlayButtonView : MonoBehaviour
{
    [SerializeField] private RectTransform _target;
    [SerializeField] private float _pulseScale = 1.08f;
    [SerializeField] private float _pulseDuration = 0.58f;

    private Sequence _pulse;

    private void Awake()
    {
        if (_target == null)
        {
            _target = (RectTransform)transform;
        }
    }

    private void OnDisable()
    {
        Stop();
    }

    public void Play()
    {
        if (_target == null)
        {
            return;
        }

        Stop();
        _target.localScale = Vector3.one;
        _pulse = DOTween.Sequence();
        _pulse.Append(_target.DOScale(_pulseScale, _pulseDuration).SetEase(Ease.InOutSine));
        _pulse.Append(_target.DOScale(1f, _pulseDuration).SetEase(Ease.InOutSine));
        _pulse.SetLoops(-1);
    }

    public void Stop()
    {
        _pulse?.Kill();
        _pulse = null;
        if (_target != null)
        {
            _target.localScale = Vector3.one;
        }
    }
}
