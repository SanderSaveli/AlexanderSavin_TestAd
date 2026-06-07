using System.Collections.Generic;
using UnityEngine;

public sealed class BoardController : MonoBehaviour
{
    private const float NEIGHBOR_DISTANCE_TOLERANCE = 1.08f;

    [Header("Components")]
    [SerializeField] private Grid _grid;
    [SerializeField] private List<HexCell> _cells = new List<HexCell>();

    [Header("Prefabs")]
    [SerializeField] private HexStack _stackPrefab;
    [SerializeField] private Transform _diskPrefab;

    [Header("Parameters")]
    [SerializeField] private List<Material> _colorMaterials = new List<Material>();
    [SerializeField] private float _snapRadius = 0.95f;

    private static readonly Vector3Int[] CandidateNeighborOffsets =
    {
        new Vector3Int(-1, 0, 0),
        new Vector3Int(1, 0, 0),
        new Vector3Int(0, -1, 0),
        new Vector3Int(0, 1, 0),
        new Vector3Int(-1, -1, 0),
        new Vector3Int(-1, 1, 0),
        new Vector3Int(1, -1, 0),
        new Vector3Int(1, 1, 0)
    };

    private readonly Dictionary<Vector3Int, HexCell> _cellByGridPosition = new Dictionary<Vector3Int, HexCell>();
    private readonly Dictionary<HexCell, List<HexCell>> _neighborsByCell = new Dictionary<HexCell, List<HexCell>>();

    public IReadOnlyList<HexCell> Cells => _cells;

    public void Initialize()
    {
        if (_grid == null)
        {
            Debug.LogError("BoardController has no Grid reference.");
            return;
        }

        _cells.Clear();
        _cellByGridPosition.Clear();
        _neighborsByCell.Clear();
        List<HexCell> sceneCells = new List<HexCell>();
        GetComponentsInChildren(true, sceneCells);

        foreach (HexCell cell in sceneCells)
        {
            Vector3Int gridPosition = _grid.WorldToCell(cell.transform.position);
            cell.Configure(gridPosition);
            cell.Initialize();
            SpawnInitialStack(cell);
            _cells.Add(cell);
            _cellByGridPosition[gridPosition] = cell;
        }

        BuildNeighborCache();
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

    public HexCell GetTutorialCell()
    {
        return GetFirstEmptyCell();
    }

    public HexCell GetFirstEmptyCell()
    {
        return GetLowestEmptyCell();
    }

    public List<HexCell> GetNeighbors(HexCell cell)
    {
        if (cell == null)
        {
            return new List<HexCell>(0);
        }

        if (_neighborsByCell.TryGetValue(cell, out List<HexCell> neighbors))
        {
            return neighbors;
        }

        return new List<HexCell>(0);
    }

    private void SpawnInitialStack(HexCell cell)
    {
        if (cell.CurrentStack != null || cell.InitialStackColors.Count == 0)
        {
            return;
        }

        if (_stackPrefab == null || _diskPrefab == null || _colorMaterials.Count == 0)
        {
            Debug.LogError("BoardController cannot spawn initial stacks because stack prefab, disk prefab or color materials are missing.");
            return;
        }

        HexStack stack = Instantiate(_stackPrefab, cell.transform);
        stack.name = "Stack";
        stack.transform.localPosition = Vector3.zero;
        stack.transform.localRotation = Quaternion.identity;
        stack.Configure(_diskPrefab, _colorMaterials, new List<HexColorId>(cell.InitialStackColors), false, false);
        stack.BuildVisuals();
        cell.SetStack(stack);
    }

    private void BuildNeighborCache()
    {
        foreach (HexCell cell in _cells)
        {
            List<HexCell> neighbors = new List<HexCell>(6);
            float neighborDistance = GetGridNeighborDistance(cell.GridPosition);

            foreach (Vector3Int offset in CandidateNeighborOffsets)
            {
                Vector3Int neighborPosition = cell.GridPosition + offset;
                if (!_cellByGridPosition.TryGetValue(neighborPosition, out HexCell neighbor))
                {
                    continue;
                }

                float distance = Vector3.Distance(
                    _grid.GetCellCenterWorld(cell.GridPosition),
                    _grid.GetCellCenterWorld(neighborPosition));

                if (distance <= neighborDistance * NEIGHBOR_DISTANCE_TOLERANCE)
                {
                    neighbors.Add(neighbor);
                }
            }

            _neighborsByCell[cell] = neighbors;
        }
    }

    private float GetGridNeighborDistance(Vector3Int gridPosition)
    {
        float bestDistance = float.MaxValue;
        Vector3 center = _grid.GetCellCenterWorld(gridPosition);

        foreach (Vector3Int offset in CandidateNeighborOffsets)
        {
            float distance = Vector3.Distance(center, _grid.GetCellCenterWorld(gridPosition + offset));
            if (distance < bestDistance)
            {
                bestDistance = distance;
            }
        }

        return bestDistance;
    }

    private HexCell GetLowestEmptyCell()
    {
        HexCell bestCell = null;
        float bestZ = float.MaxValue;
        float bestAbsX = float.MaxValue;

        foreach (HexCell cell in _cells)
        {
            if (cell.CurrentStack != null)
            {
                continue;
            }

            float z = cell.transform.position.z;
            float absX = Mathf.Abs(cell.transform.position.x);
            if (z < bestZ || Mathf.Approximately(z, bestZ) && absX < bestAbsX)
            {
                bestCell = cell;
                bestZ = z;
                bestAbsX = absX;
            }
        }

        return bestCell;
    }
}
