using System.Collections.Generic;
using UnityEngine;

public sealed class BoardController : MonoBehaviour
{
    [SerializeField] private List<HexCell> _cells = new List<HexCell>();
    [SerializeField] private HexCell _targetCell;
    [SerializeField] private float _snapRadius = 0.95f;

    private static readonly Vector2Int[] NeighborOffsets =
    {
        new Vector2Int(1, 0),
        new Vector2Int(1, -1),
        new Vector2Int(0, -1),
        new Vector2Int(-1, 0),
        new Vector2Int(-1, 1),
        new Vector2Int(0, 1)
    };

    private readonly Dictionary<Vector2Int, HexCell> _cellByCoordinate = new Dictionary<Vector2Int, HexCell>();

    public HexCell TargetCell => _targetCell;
    public IReadOnlyList<HexCell> Cells => _cells;

    public void Initialize()
    {
        _cellByCoordinate.Clear();
        _cells.Clear();
        GetComponentsInChildren(true, _cells);

        foreach (HexCell cell in _cells)
        {
            cell.Initialize();
            _cellByCoordinate[cell.Coordinate] = cell;
            if (cell.IsTutorialTarget)
            {
                _targetCell = cell;
            }
        }
    }

    public bool TryGetDropCell(Vector3 worldPosition, HexStack stack, out HexCell cell)
    {
        cell = null;
        if (stack == null)
        {
            return false;
        }

        Vector2 pointerPosition = new Vector2(worldPosition.x, worldPosition.z);
        float bestDistance = _snapRadius;
        foreach (HexCell candidate in _cells)
        {
            if (candidate.CurrentStack != null)
            {
                continue;
            }

            Vector2 cellPosition = new Vector2(candidate.transform.position.x, candidate.transform.position.z);
            float distance = Vector2.Distance(pointerPosition, cellPosition);
            if (distance <= bestDistance)
            {
                bestDistance = distance;
                cell = candidate;
            }
        }

        return cell != null;
    }

    public List<HexCell> GetNeighbors(HexCell cell)
    {
        List<HexCell> neighbors = new List<HexCell>(6);
        foreach (Vector2Int offset in NeighborOffsets)
        {
            if (_cellByCoordinate.TryGetValue(cell.Coordinate + offset, out HexCell neighbor))
            {
                neighbors.Add(neighbor);
            }
        }

        return neighbors;
    }

}
