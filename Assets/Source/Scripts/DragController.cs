using DG.Tweening;
using UnityEngine;

public sealed class DragController : MonoBehaviour
{
    [SerializeField] private LayerMask _draggableMask = -1;
    [SerializeField] private float _liftHeight = 0.9f;
    [SerializeField] private float _followLerp = 24f;

    private GameController _gameController;
    private Camera _gameCamera;
    private BoardController _board;
    private HexStack _draggedStack;
    private HexCell _highlightedCell;
    private Vector3 _dragOffset;
    private Plane _dragPlane;
    private bool _pointerDown;

    public void Initialize(GameController controller, Camera cameraReference, BoardController boardReference)
    {
        _gameController = controller;
        _gameCamera = cameraReference;
        _board = boardReference;
        _dragPlane = new Plane(Vector3.up, Vector3.zero);
    }

    private void Update()
    {
        if (_gameController == null || !_gameController.IsInputEnabled)
        {
            return;
        }

        if (Input.GetMouseButtonDown(0))
        {
            TryBeginDrag(Input.mousePosition);
        }
        else if (Input.GetMouseButton(0) && _pointerDown)
        {
            UpdateDrag(Input.mousePosition);
        }
        else if (Input.GetMouseButtonUp(0) && _pointerDown)
        {
            EndDrag();
        }
    }

    private void OnDisable()
    {
        ClearHighlightedCell();
    }

    private void TryBeginDrag(Vector3 screenPosition)
    {
        Ray ray = _gameCamera.ScreenPointToRay(screenPosition);
        if (!Physics.Raycast(ray, out RaycastHit hit, 100f, _draggableMask))
        {
            return;
        }

        HexStack stack = hit.collider.GetComponentInParent<HexStack>();
        if (stack == null || !stack.IsOfferStack)
        {
            return;
        }

        _draggedStack = stack;
        _pointerDown = true;
        ClearHighlightedCell();
        _dragPlane = new Plane(Vector3.up, Vector3.zero);
        Vector3 pointerWorld = GetWorldPoint(screenPosition);
        _dragOffset = _draggedStack.transform.position - pointerWorld;
        _draggedStack.DetachFromCell();
        _draggedStack.transform.DOKill();
        _draggedStack.transform.DOMoveY(_liftHeight, 0.14f).SetEase(Ease.OutBack);
        _gameController.NotifyStackGrabbed();
    }

    private void UpdateDrag(Vector3 screenPosition)
    {
        if (_draggedStack == null)
        {
            return;
        }

        Vector3 target = GetWorldPoint(screenPosition) + _dragOffset;
        target.y = _liftHeight;
        _draggedStack.transform.position = Vector3.Lerp(_draggedStack.transform.position, target, Time.deltaTime * _followLerp);
        UpdateHighlightedCell();
    }

    private void EndDrag()
    {
        _pointerDown = false;
        if (_draggedStack == null)
        {
            return;
        }

        HexStack stack = _draggedStack;
        _draggedStack = null;
        ClearHighlightedCell();

        if (_board.TryGetDropCell(stack.transform.position, stack, out HexCell cell))
        {
            stack.transform.SetParent(cell.transform, true);
            Sequence place = DOTween.Sequence();
            place.Join(stack.transform.DOLocalMove(Vector3.zero, 0.18f).SetEase(Ease.OutBack));
            place.Join(stack.transform.DOLocalRotate(Vector3.zero, 0.18f));
            place.OnComplete(() =>
            {
                cell.SetStack(stack);
                _gameController.NotifyStackPlaced(stack, cell);
            });
        }
        else
        {
            stack.transform.SetParent(stack.HomeParent, true);
            stack.transform
                .DOMove(stack.HomePosition, 0.24f)
                .SetEase(Ease.OutBack)
                .OnComplete(_gameController.NotifyDragCanceled);
        }
    }

    private Vector3 GetWorldPoint(Vector3 screenPosition)
    {
        Ray ray = _gameCamera.ScreenPointToRay(screenPosition);
        if (_dragPlane.Raycast(ray, out float distance))
        {
            return ray.GetPoint(distance);
        }

        return Vector3.zero;
    }

    private void UpdateHighlightedCell()
    {
        if (_draggedStack == null)
        {
            ClearHighlightedCell();
            return;
        }

        _board.TryGetDropCell(_draggedStack.transform.position, _draggedStack, out HexCell cell);
        SetHighlightedCell(cell);
    }

    private void SetHighlightedCell(HexCell cell)
    {
        if (_highlightedCell == cell)
        {
            return;
        }

        ClearHighlightedCell();
        _highlightedCell = cell;

        if (_highlightedCell != null)
        {
            _highlightedCell.SetHighlight(true);
        }
    }

    private void ClearHighlightedCell()
    {
        if (_highlightedCell == null)
        {
            return;
        }

        _highlightedCell.SetHighlight(false);
        _highlightedCell = null;
    }
}
