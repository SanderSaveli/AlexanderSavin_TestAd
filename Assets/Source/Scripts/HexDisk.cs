using UnityEngine;
using UnityEngine.Rendering;

public sealed class HexDisk : MonoBehaviour
{
    [SerializeField] private HexColorId _color;
    [SerializeField] private Renderer[] _renderers;

    public HexColorId Color => _color;
    public Renderer[] Renderers => _renderers;

    public void Initialize(HexColorId color, Material material)
    {
        _color = color;
        CacheRenderers();
        foreach (Renderer diskRenderer in _renderers)
        {
            diskRenderer.sharedMaterial = material;
            diskRenderer.shadowCastingMode = ShadowCastingMode.On;
            diskRenderer.receiveShadows = true;
        }
    }

    public void CacheRenderers()
    {
        _renderers = GetComponentsInChildren<Renderer>(true);
        foreach (Renderer diskRenderer in _renderers)
        {
            diskRenderer.shadowCastingMode = ShadowCastingMode.On;
            diskRenderer.receiveShadows = true;
        }
    }

    public void SetAlpha(float alpha)
    {
        if (_renderers == null || _renderers.Length == 0)
        {
            CacheRenderers();
        }

        foreach (Renderer diskRenderer in _renderers)
        {
            if (diskRenderer.material.HasProperty("_Color"))
            {
                Color color = diskRenderer.material.color;
                color.a = alpha;
                diskRenderer.material.color = color;
            }
        }
    }
}
