using UnityEngine;

public sealed class HexCell : MonoBehaviour
{
    [SerializeField] private Vector2Int _coordinate;
    [SerializeField] private bool _isTutorialTarget;
    [SerializeField] private HexStack _currentStack;
    [SerializeField] private Renderer _ringRenderer;

    public Vector2Int Coordinate => _coordinate;
    public bool IsTutorialTarget => _isTutorialTarget;
    public HexStack CurrentStack => _currentStack;

    public void Initialize()
    {
        if (_currentStack == null)
        {
            _currentStack = GetComponentInChildren<HexStack>();
        }

        if (_currentStack != null)
        {
            SetStack(_currentStack);
        }
    }

    public void Configure(Vector2Int value, bool tutorialTarget)
    {
        _coordinate = value;
        _isTutorialTarget = tutorialTarget;
    }

    public void SetRingRenderer(Renderer renderer)
    {
        _ringRenderer = renderer;
    }

    public void SetStack(HexStack stack)
    {
        _currentStack = stack;
        if (stack == null)
        {
            return;
        }

        stack.AssignCell(this);
        stack.transform.SetParent(transform);
        stack.transform.localPosition = Vector3.zero;
    }

    public void ClearStack(HexStack stack)
    {
        if (_currentStack == stack)
        {
            _currentStack = null;
        }
    }

    public void SetHighlight(bool enabled)
    {
        if (_ringRenderer == null)
        {
            return;
        }

        _ringRenderer.enabled = true;
        if (!Application.isPlaying)
        {
            return;
        }

        if (_ringRenderer.material.HasProperty("_Color"))
        {
            _ringRenderer.material.color = enabled
                ? new Color(0.42f, 0.64f, 0.95f, 1f)
                : new Color(0.18f, 0.2f, 0.23f, 1f);
        }
    }
}
