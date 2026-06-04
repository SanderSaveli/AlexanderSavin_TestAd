using System.Collections;
using UnityEngine;

public sealed class GameController : MonoBehaviour
{
    [Header("Scene")]
    [SerializeField] private Camera _gameCamera;
    [SerializeField] private BoardController _board;
    [SerializeField] private DragController _dragController;
    [SerializeField] private ReactionResolver _reactionResolver;
    [SerializeField] private TutorialController _tutorial;
    [SerializeField] private PackshotController _packshot;

    private bool _tutorialCompleted;

    public GameState State { get; private set; } = GameState.Initialization;
    public bool IsInputEnabled => State == GameState.Input;

    public void Configure(
        Camera cameraReference,
        BoardController boardReference,
        DragController dragReference,
        ReactionResolver resolverReference,
        TutorialController tutorialReference,
        PackshotController packshotReference)
    {
        _gameCamera = cameraReference;
        _board = boardReference;
        _dragController = dragReference;
        _reactionResolver = resolverReference;
        _tutorial = tutorialReference;
        _packshot = packshotReference;
    }

    private void Awake()
    {
        EnterState(GameState.Initialization);
        ResolveSceneReferences();

        if (!HasRequiredReferences())
        {
            Debug.LogError("GameController is missing scene references. Rebuild Playable_main via Tools/TestAD/Rebuild Playable Scene.");
            enabled = false;
            return;
        }

        InitializeStacks();
        _board.Initialize();
        _dragController.Initialize(this, _gameCamera, _board);
        _reactionResolver.Initialize(_board);
        _tutorial.Initialize(_board);
        _packshot.HideInstant();
    }

    private void Start()
    {
        if (!enabled)
        {
            return;
        }

        EnterState(GameState.Input);
    }

    public void NotifyStackGrabbed()
    {
        if (State != GameState.Input)
        {
            return;
        }

        _tutorial.Hide();
    }

    public void NotifyDragCanceled()
    {
        if (State == GameState.Input && !_tutorialCompleted)
        {
            _tutorial.ScheduleReplay();
        }
    }

    public void NotifyStackPlaced(HexStack stack, HexCell cell)
    {
        if (State != GameState.Input)
        {
            return;
        }

        _tutorialCompleted = true;
        stack.MarkAsPlacedOnBoard();
        EnterState(GameState.Merge);
        StartCoroutine(RunTurn(stack, cell));
    }

    private void EnterState(GameState nextState)
    {
        State = nextState;

        switch (State)
        {
            case GameState.Initialization:
                break;
            case GameState.Input:
                if (_tutorialCompleted)
                {
                    _tutorial?.Hide();
                }
                else
                {
                    _tutorial?.Play();
                }

                break;
            case GameState.Merge:
            case GameState.Cleaning:
                _tutorial?.Hide();
                break;
            case GameState.Finished:
                _tutorial?.Hide();
                _packshot?.Show();
                break;
        }
    }

    private IEnumerator RunTurn(HexStack placedStack, HexCell placedCell)
    {
        yield return _reactionResolver.MergeFrom(placedCell);
        EnterState(GameState.Cleaning);
        yield return _reactionResolver.CleanFullStacks();

        if (HasRemainingOfferStacks())
        {
            EnterState(GameState.Input);
            yield break;
        }

        EnterState(GameState.Finished);
    }

    private void ResolveSceneReferences()
    {
        if (_gameCamera == null)
        {
            _gameCamera = Camera.main;
        }

        if (_board == null)
        {
            _board = FindObjectOfType<BoardController>();
        }

        if (_dragController == null)
        {
            _dragController = GetComponent<DragController>();
        }

        if (_reactionResolver == null)
        {
            _reactionResolver = GetComponent<ReactionResolver>();
        }

        if (_tutorial == null)
        {
            _tutorial = GetComponent<TutorialController>();
        }

        if (_packshot == null)
        {
            _packshot = FindObjectOfType<PackshotController>(true);
        }
    }

    private void InitializeStacks()
    {
        HexStack[] stacks = FindObjectsOfType<HexStack>(true);
        foreach (HexStack stack in stacks)
        {
            stack.InitializeRuntime();
        }
    }

    private bool HasRemainingOfferStacks()
    {
        HexStack[] stacks = FindObjectsOfType<HexStack>(true);
        foreach (HexStack stack in stacks)
        {
            if (stack.IsOfferStack)
            {
                return true;
            }
        }

        return false;
    }

    private bool HasRequiredReferences()
    {
        return _gameCamera != null
            && _board != null
            && _dragController != null
            && _reactionResolver != null
            && _tutorial != null
            && _packshot != null;
    }
}
