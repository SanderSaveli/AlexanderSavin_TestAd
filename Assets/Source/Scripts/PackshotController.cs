using System;
using System.Reflection;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public sealed class PackshotController : MonoBehaviour
{
    [SerializeField] private CanvasGroup _group;
    [SerializeField] private Button _playNowButton;
    [SerializeField] private PlayButtonView _playButtonView;
    [SerializeField] private float _fadeDuration = 0.45f;

    private bool _shown;
    private bool _installRequested;

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
        _playButtonView = _playNowButton != null ? _playNowButton.GetComponent<PlayButtonView>() : null;
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
        _installRequested = false;
        if (_group == null)
        {
            return;
        }

        _group.alpha = 0f;
        _group.blocksRaycasts = false;
        _group.interactable = false;
        _playButtonView?.Stop();
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

        _playButtonView?.Play();
        GameEnded();
    }

    private void GameEnded()
    {
        InvokeLunaStatic("Luna.Unity.LifeCycle", "GameEnded");
    }

    private void InstallFullGame()
    {
        if (_installRequested)
        {
            return;
        }

        _installRequested = true;
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
            if (method.Name == methodName)
            {
                ParameterInfo[] parameters = method.GetParameters();
                object[] arguments = new object[parameters.Length];
                for (int i = 0; i < parameters.Length; i++)
                {
                    arguments[i] = parameters[i].HasDefaultValue ? parameters[i].DefaultValue : GetDefaultValue(parameters[i].ParameterType);
                }

                method.Invoke(null, arguments);
                return;
            }
        }
    }

    private static object GetDefaultValue(Type type)
    {
        return type.IsValueType ? Activator.CreateInstance(type) : null;
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
