using System.Collections.Generic;
using UnityEngine;

public sealed class HexStack : MonoBehaviour
{
    [SerializeField] private Transform _diskPrefab;
    [SerializeField] private List<Material> _colorMaterials = new List<Material>();
    [SerializeField] private List<HexColorId> _initialColors = new List<HexColorId>();
    [SerializeField] private float _diskHeight = 0.12f;
    [SerializeField] private bool _isOfferStack;
    [SerializeField] private bool _isSolutionStack;

    private readonly List<HexDisk> _disks = new List<HexDisk>();
    private HexCell _currentCell;
    private Vector3 _homePosition;
    private Transform _homeParent;

    public bool IsOfferStack => _isOfferStack;
    public bool IsSolutionStack => _isSolutionStack;
    public bool IsEmpty => _disks.Count == 0;
    public int Count => _disks.Count;
    public HexCell CurrentCell => _currentCell;
    public Vector3 HomePosition => _homePosition;
    public Transform HomeParent => _homeParent;
    public HexColorId TopColor => _disks[_disks.Count - 1].Color;

    public void Configure(Transform prefab, List<Material> materials, List<HexColorId> colors, bool offer, bool solution)
    {
        _diskPrefab = prefab;
        _colorMaterials = materials;
        _initialColors = colors;
        _isOfferStack = offer;
        _isSolutionStack = solution;
    }

    public void BuildVisuals()
    {
        for (int i = transform.childCount - 1; i >= 0; i--)
        {
            if (Application.isPlaying)
            {
                Destroy(transform.GetChild(i).gameObject);
            }
            else
            {
                DestroyImmediate(transform.GetChild(i).gameObject);
            }
        }

        _disks.Clear();
        for (int i = 0; i < _initialColors.Count; i++)
        {
            CreateDisk(_initialColors[i], i);
        }

        StoreHome();
    }

    public void InitializeRuntime()
    {
        _disks.Clear();
        List<HexDisk> childDisks = new List<HexDisk>(GetComponentsInChildren<HexDisk>(true));
        childDisks.Sort((left, right) => left.transform.localPosition.y.CompareTo(right.transform.localPosition.y));

        for (int i = 0; i < childDisks.Count; i++)
        {
            HexDisk disk = childDisks[i];
            HexColorId color = i < _initialColors.Count ? _initialColors[i] : disk.Color;
            Material material = _colorMaterials.Count > 0 ? _colorMaterials[(int)color % _colorMaterials.Count] : null;
            if (material != null)
            {
                disk.Initialize(color, material);
            }
            else
            {
                disk.CacheRenderers();
            }

            _disks.Add(disk);
        }

        Reflow();
        StoreHome();
    }

    public void MarkAsPlacedOnBoard()
    {
        _isOfferStack = false;
        _isSolutionStack = false;
    }

    public void StoreHome()
    {
        _homeParent = transform.parent;
        _homePosition = transform.position;
    }

    public void AssignCell(HexCell cell)
    {
        _currentCell = cell;
    }

    public void DetachFromCell()
    {
        if (_currentCell != null)
        {
            _currentCell.ClearStack(this);
            _currentCell = null;
        }
    }

    public HexDisk PopTopDisk()
    {
        if (_disks.Count == 0)
        {
            return null;
        }

        int index = _disks.Count - 1;
        HexDisk disk = _disks[index];
        _disks.RemoveAt(index);
        disk.transform.SetParent(null, true);
        Reflow();
        return disk;
    }

    public void PushDisk(HexDisk disk)
    {
        disk.transform.SetParent(transform, true);
        _disks.Add(disk);
        disk.transform.localPosition = GetDiskLocalPosition(_disks.Count - 1);
        disk.transform.localRotation = Quaternion.identity;
    }

    public int CountTopColor(HexColorId color)
    {
        int count = 0;
        for (int i = _disks.Count - 1; i >= 0; i--)
        {
            if (_disks[i].Color != color)
            {
                break;
            }

            count++;
        }

        return count;
    }

    public bool IsSingleColorStack(int expectedCount)
    {
        if (_disks.Count != expectedCount || _disks.Count == 0)
        {
            return false;
        }

        HexColorId color = _disks[0].Color;
        for (int i = 1; i < _disks.Count; i++)
        {
            if (_disks[i].Color != color)
            {
                return false;
            }
        }

        return true;
    }

    public List<HexDisk> RemoveTopDisks(int amount)
    {
        List<HexDisk> removed = new List<HexDisk>(amount);
        for (int i = 0; i < amount && _disks.Count > 0; i++)
        {
            removed.Add(PopTopDisk());
        }

        return removed;
    }

    public Vector3 GetNextDiskWorldPosition()
    {
        return transform.TransformPoint(GetDiskLocalPosition(_disks.Count));
    }

    public Vector3 GetDiskWorldPositionAtIndex(int index)
    {
        return transform.TransformPoint(GetDiskLocalPosition(index));
    }

    public void Reflow()
    {
        for (int i = 0; i < _disks.Count; i++)
        {
            _disks[i].transform.localPosition = GetDiskLocalPosition(i);
            _disks[i].transform.localRotation = Quaternion.identity;
        }
    }

    private void CreateDisk(HexColorId color, int index)
    {
#if UNITY_EDITOR
        Transform diskTransform;
        if (!Application.isPlaying)
        {
            GameObject prefabInstance = (GameObject)UnityEditor.PrefabUtility.InstantiatePrefab(_diskPrefab.gameObject, transform);
            diskTransform = prefabInstance.transform;
        }
        else
        {
            diskTransform = Instantiate(_diskPrefab, transform);
        }
#else
        Transform diskTransform = Instantiate(_diskPrefab, transform);
#endif
        diskTransform.name = "HexDisk_" + color;
        diskTransform.gameObject.SetActive(true);
        diskTransform.localPosition = GetDiskLocalPosition(index);
        diskTransform.localRotation = Quaternion.identity;
        diskTransform.localScale = Vector3.one;

        HexDisk disk = diskTransform.GetComponent<HexDisk>();
        if (disk == null)
        {
            disk = diskTransform.gameObject.AddComponent<HexDisk>();
        }

        Material material = _colorMaterials[(int)color % _colorMaterials.Count];
        disk.Initialize(color, material);
        _disks.Add(disk);
    }

    private Vector3 GetDiskLocalPosition(int index)
    {
        return new Vector3(0f, index * _diskHeight, 0f);
    }
}
