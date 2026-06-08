using System.Collections.Generic;
using UnityEngine;

public sealed class HexCell : MonoBehaviour
{
    [SerializeField] private Vector3Int _gridPosition;
    [SerializeField] private List<HexColorId> _initialStackColors = new List<HexColorId>();
    [SerializeField] private HexStack _currentStack;
    [SerializeField] private Renderer _ringRenderer;
    [SerializeField] private CellHighlightView _highlightView;

    public Vector3Int GridPosition => _gridPosition;
    public IReadOnlyList<HexColorId> InitialStackColors => _initialStackColors;
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

    public void Configure([Bridge.Ref] Vector3Int gridPosition)
    {
        _gridPosition = gridPosition;
    }

    public void SetInitialStackColors(List<HexColorId> colors)
    {
        _initialStackColors = colors != null
            ? new List<HexColorId>(colors)
            : new List<HexColorId>();
    }

    public void SetRingRenderer(Renderer renderer)
    {
        _ringRenderer = renderer;
    }

    public void SetHighlightView(CellHighlightView highlightView)
    {
        _highlightView = highlightView;
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
        if (_highlightView != null)
        {
            _highlightView.SetHighlighted(enabled);
        }
    }
}
