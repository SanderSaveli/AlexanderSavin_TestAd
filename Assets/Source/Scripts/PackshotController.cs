using System;
using System.Reflection;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public sealed class PackshotController : MonoBehaviour
{
    [SerializeField] private CanvasGroup _group;
    [SerializeField] private Button _playNowButton;
    [SerializeField] private float _fadeDuration = 0.45f;

    private bool _shown;

    private void Awake()
    {
        if (_playNowButton != null)
        {
            _playNowButton.onClick.AddListener(InstallFullGame);
        }
    }

    public void Configure(CanvasGroup groupReference, Button buttonReference)
    {
        _group = groupReference;
        _playNowButton = buttonReference;
        if (_playNowButton != null)
        {
            _playNowButton.onClick.RemoveListener(InstallFullGame);
            _playNowButton.onClick.AddListener(InstallFullGame);
        }
    }

    private void Update()
    {
        if (_shown && Input.GetMouseButtonDown(0))
        {
            InstallFullGame();
        }
    }

    public void HideInstant()
    {
        _shown = false;
        if (_group == null)
        {
            return;
        }

        _group.alpha = 0f;
        _group.blocksRaycasts = false;
        _group.interactable = false;
    }

    public void Show()
    {
        _shown = true;
        gameObject.SetActive(true);
        if (_group != null)
        {
            _group.blocksRaycasts = true;
            _group.interactable = true;
            _group.DOFade(1f, _fadeDuration);
        }

        GameEnded();
    }

    private void GameEnded()
    {
        InvokeLunaStatic("Luna.Unity.LifeCycle", "GameEnded");
    }

    private void InstallFullGame()
    {
        InvokeLunaStatic("Luna.Unity.Playable", "InstallFullGame");
    }

    private static void InvokeLunaStatic(string typeName, string methodName)
    {
        Type type = FindType(typeName);
        if (type == null)
        {
            return;
        }

        MethodInfo[] methods = type.GetMethods(BindingFlags.Public | BindingFlags.Static);
        foreach (MethodInfo method in methods)
        {
            if (method.Name == methodName && method.GetParameters().Length == 0)
            {
                method.Invoke(null, null);
                return;
            }
        }
    }

    private static Type FindType(string fullName)
    {
        Type type = Type.GetType(fullName);
        if (type != null)
        {
            return type;
        }

        foreach (Assembly assembly in AppDomain.CurrentDomain.GetAssemblies())
        {
            type = assembly.GetType(fullName);
            if (type != null)
            {
                return type;
            }
        }

        return null;
    }
}
