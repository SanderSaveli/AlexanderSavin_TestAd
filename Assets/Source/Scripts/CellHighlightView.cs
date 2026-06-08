using UnityEngine;

public sealed class CellHighlightView : MonoBehaviour
{
    [SerializeField] private Material _normalMaterial;
    [SerializeField] private Material _highlightMaterial;

    private Renderer _renderer;

    private void Awake()
    {
        CacheRenderer();

        if (_normalMaterial != null)
        {
            SetMaterial(_normalMaterial);
        }
    }

    public void SetHighlighted(bool isHighlighted)
    {
        Material material = isHighlighted ? _highlightMaterial : _normalMaterial;
        if (material == null)
        {
            return;
        }

        SetMaterial(material);
    }

    private void SetMaterial(Material material)
    {
        if (_renderer == null)
        {
            CacheRenderer();
        }

        if (_renderer != null)
        {
            _renderer.sharedMaterial = material;
        }
    }

    private void CacheRenderer()
    {
        _renderer = GetComponent<Renderer>();
        if (_renderer == null)
        {
            _renderer = GetComponentInChildren<Renderer>(true);
        }
    }
}
