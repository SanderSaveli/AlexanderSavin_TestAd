using System.Collections.Generic;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public static class PlayableSceneBuilder
{
    private const string ScenePath = "Assets/Source/Scenes/Playable_main.unity";
    private const string DiskPrefabPath = "Assets/HexAssets/hex smooth 1.fbx";
    private const string HandSpritePath = "Assets/HexAssets/tutorial hand.png";
    private const string HexFxPath = "Assets/_HexTest/HexFx.prefab";
    private const string MaterialFolder = "Assets/Source/Materials";
    private const string PrefabFolder = "Assets/Source/Prefabs";
    private const string ColorShaderPath = "Assets/Source/Shaders/HexPlayableUnlitColor.shader";

    [MenuItem("Tools/TestAD/Rebuild Playable Scene")]
    public static void RebuildPlayableScene()
    {
        EnsureFolder("Assets/Source", "Materials");
        EnsureFolder("Assets/Source", "Prefabs");

        Scene scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
        scene.name = "Playable_main";

        Camera camera = CreateCamera();
        CreateLight();

        List<Material> materials = CreateMaterials();
        GameObject diskPrefabAsset = CreateDiskPrefab(materials[0]);
        GameObject cellPrefabAsset = CreateCellPrefab();
        GameObject stackPrefabAsset = CreateStackPrefab(diskPrefabAsset.transform, materials);
        GameObject fxPrefab = CreateVanishFxPrefab();

        GameObject root = new GameObject("PlayableRoot");
        BoardController board = CreateBoard(root.transform, cellPrefabAsset, stackPrefabAsset.GetComponent<HexStack>(), diskPrefabAsset.transform, materials);
        List<HexStack> offers = CreateOfferStacks(root.transform, diskPrefabAsset.transform, materials);

        GameObject systems = new GameObject("Systems");
        GameController game = systems.AddComponent<GameController>();
        DragController drag = systems.AddComponent<DragController>();
        ReactionResolver resolver = systems.AddComponent<ReactionResolver>();
        TutorialController tutorial = systems.AddComponent<TutorialController>();
        PackshotController packshot = CreateUi(camera, offers[0].transform, tutorial);

        SetSerialized(game, "_gameCamera", camera);
        SetSerialized(game, "_board", board);
        SetSerialized(game, "_dragController", drag);
        SetSerialized(game, "_reactionResolver", resolver);
        SetSerialized(game, "_tutorial", tutorial);
        SetSerialized(game, "_packshot", packshot);
        SetSerialized(resolver, "_vanishFxPrefab", fxPrefab);

        CreateEventSystem();
        EditorSceneManager.SaveScene(scene, ScenePath);
        AssetDatabase.SaveAssets();
        Debug.Log("Playable scene rebuilt at " + ScenePath);
    }

    private static Camera CreateCamera()
    {
        GameObject cameraObject = new GameObject("Main Camera");
        cameraObject.tag = "MainCamera";
        cameraObject.transform.position = new Vector3(0f, 7.7f, -7.6f);
        cameraObject.transform.rotation = Quaternion.Euler(58f, 0f, 0f);

        Camera camera = cameraObject.AddComponent<Camera>();
        camera.clearFlags = CameraClearFlags.SolidColor;
        camera.backgroundColor = new Color(0.75f, 0.91f, 1f);
        camera.orthographic = true;
        camera.orthographicSize = 6.6f;
        camera.nearClipPlane = 0.1f;
        camera.farClipPlane = 100f;
        return camera;
    }

    private static void CreateLight()
    {
        GameObject lightObject = new GameObject("Key Light");
        lightObject.transform.rotation = Quaternion.Euler(45f, -25f, 12f);
        Light light = lightObject.AddComponent<Light>();
        light.type = LightType.Directional;
        light.intensity = 1.08f;

        GameObject fillObject = new GameObject("Soft Fill Light");
        fillObject.transform.position = new Vector3(0f, 5f, -4f);
        Light fill = fillObject.AddComponent<Light>();
        fill.type = LightType.Point;
        fill.range = 9f;
        fill.intensity = 1.35f;
        fill.color = new Color(0.78f, 0.91f, 1f);
    }

    private static BoardController CreateBoard(Transform root, GameObject cellPrefab, HexStack stackPrefab, Transform diskPrefab, List<Material> materials)
    {
        GameObject boardObject = new GameObject("Board");
        boardObject.transform.SetParent(root);
        boardObject.transform.rotation = Quaternion.Euler(90f, 0f, 0f);
        Grid grid = boardObject.AddComponent<Grid>();
        grid.cellLayout = GridLayout.CellLayout.Hexagon;
        grid.cellSize = new Vector3(1.8f, 2.08f, 1f);
        grid.cellSwizzle = GridLayout.CellSwizzle.YXZ;

        BoardController board = boardObject.AddComponent<BoardController>();
        SetSerialized(board, "_grid", grid);
        SetSerialized(board, "_stackPrefab", stackPrefab);
        SetSerialized(board, "_diskPrefab", diskPrefab);
        SetSerializedMaterials(board, "_colorMaterials", materials);

        GameObject cellsObject = new GameObject("BoardCells");
        cellsObject.transform.SetParent(boardObject.transform, false);

        Dictionary<int, List<HexColorId>> stacks = CreateBoardStacks();
        List<CellPlacement> placements = CreateCellPlacements(grid);
        foreach (CellPlacement placement in placements)
        {
            stacks.TryGetValue(placement.Id, out List<HexColorId> colors);
            CreateCell(cellsObject.transform, cellPrefab, placement, colors);
        }

        return board;
    }

    private static List<CellPlacement> CreateCellPlacements(Grid grid)
    {
        return new List<CellPlacement>
        {
            new CellPlacement(0, grid.GetCellCenterWorld(new Vector3Int(-2, 0, 0))),
            new CellPlacement(1, grid.GetCellCenterWorld(new Vector3Int(-2, 1, 0))),
            new CellPlacement(2, grid.GetCellCenterWorld(new Vector3Int(-2, 2, 0))),
            new CellPlacement(3, grid.GetCellCenterWorld(new Vector3Int(-1, -1, 0))),
            new CellPlacement(4, grid.GetCellCenterWorld(new Vector3Int(-1, 0, 0))),
            new CellPlacement(5, grid.GetCellCenterWorld(new Vector3Int(-1, 1, 0))),
            new CellPlacement(6, grid.GetCellCenterWorld(new Vector3Int(-1, 2, 0))),
            new CellPlacement(7, grid.GetCellCenterWorld(new Vector3Int(0, -2, 0))),
            new CellPlacement(8, grid.GetCellCenterWorld(new Vector3Int(0, -1, 0))),
            new CellPlacement(9, grid.GetCellCenterWorld(new Vector3Int(0, 0, 0))),
            new CellPlacement(10, grid.GetCellCenterWorld(new Vector3Int(0, 1, 0))),
            new CellPlacement(11, grid.GetCellCenterWorld(new Vector3Int(0, 2, 0))),
            new CellPlacement(12, grid.GetCellCenterWorld(new Vector3Int(1, -2, 0))),
            new CellPlacement(13, grid.GetCellCenterWorld(new Vector3Int(1, -1, 0))),
            new CellPlacement(14, grid.GetCellCenterWorld(new Vector3Int(1, 0, 0))),
            new CellPlacement(15, grid.GetCellCenterWorld(new Vector3Int(1, 1, 0))),
            new CellPlacement(16, grid.GetCellCenterWorld(new Vector3Int(2, -2, 0))),
            new CellPlacement(17, grid.GetCellCenterWorld(new Vector3Int(2, -1, 0))),
            new CellPlacement(18, grid.GetCellCenterWorld(new Vector3Int(2, 0, 0)))
        };
    }

    private static Dictionary<int, List<HexColorId>> CreateBoardStacks()
    {
        return new Dictionary<int, List<HexColorId>>
        {
            { 1, Repeat(HexColorId.Red, 5) },
            { 2, StackWithTop(HexColorId.Red, HexColorId.Yellow, HexColorId.Blue, 3) },
            { 3, StackWithTop(HexColorId.Green, HexColorId.Purple, HexColorId.Blue, 4) },
            { 4, Repeat(HexColorId.Green, 5) },
            { 5, Repeat(HexColorId.Blue, 5) },
            { 6, StackWithTop(HexColorId.Red, HexColorId.Blue, HexColorId.Purple, 4) },
            { 7, StackWithTop(HexColorId.Green, HexColorId.Yellow, HexColorId.Blue, 3) },
            { 8, LayeredStack(HexColorId.Yellow, 5, HexColorId.Blue, 5) },
            { 9, Repeat(HexColorId.Yellow, 5) },
            { 10, StackWithTop(HexColorId.Purple, HexColorId.Green, HexColorId.Yellow, 4) },
            { 11, StackWithTop(HexColorId.Yellow, HexColorId.Red, HexColorId.Green, 3) },
            { 12, LayeredStack(HexColorId.Red, 5, HexColorId.Purple, 5) },
            { 13, Repeat(HexColorId.Red, 5) },
            { 14, StackWithTop(HexColorId.Green, HexColorId.Blue, HexColorId.Red, 4) },
            { 15, StackWithTop(HexColorId.Red, HexColorId.Purple, HexColorId.Yellow, 3) },
            { 16, StackWithTop(HexColorId.Yellow, HexColorId.Red, HexColorId.Blue, 3) },
            { 17, StackWithTop(HexColorId.Blue, HexColorId.Green, HexColorId.Purple, 4) },
            { 18, StackWithTop(HexColorId.Yellow, HexColorId.Blue, HexColorId.Green, 3) }
        };
    }

    private static HexCell CreateCell(Transform parent, GameObject cellPrefab, CellPlacement placement, List<HexColorId> colors)
    {
        GameObject cellObject = (GameObject)PrefabUtility.InstantiatePrefab(cellPrefab, parent);
        cellObject.name = "Cell";
        cellObject.transform.SetParent(parent);
        cellObject.transform.position = placement.Position;
        cellObject.transform.rotation = Quaternion.identity;

        HexCell cell = cellObject.GetComponent<HexCell>();
        if (cell == null)
        {
            cell = cellObject.AddComponent<HexCell>();
        }

        cell.Configure(Vector3Int.zero);
        Renderer baseRenderer = cellObject.GetComponentInChildren<Renderer>(true);
        baseRenderer.sharedMaterial = AssetDatabase.LoadAssetAtPath<Material>(MaterialFolder + "/CellBase.mat");
        cell.SetRingRenderer(baseRenderer);

        cell.SetInitialStackColors(colors);

        return cell;
    }

    private static List<HexStack> CreateOfferStacks(Transform root, Transform diskPrefab, List<Material> materials)
    {
        GameObject offersObject = new GameObject("OfferStacks");
        offersObject.transform.SetParent(root);

        List<HexStack> offers = new List<HexStack>
        {
            CreateStack("Offer_Red", offersObject.transform, new Vector3(-2.45f, 0f, -6.35f), diskPrefab, materials, Repeat(HexColorId.Red, 5), true, true),
            CreateStack("Offer_Blue", offersObject.transform, new Vector3(0f, 0f, -6.35f), diskPrefab, materials, Repeat(HexColorId.Blue, 5), true, false),
            CreateStack("Offer_Green", offersObject.transform, new Vector3(2.45f, 0f, -6.35f), diskPrefab, materials, Repeat(HexColorId.Green, 5), true, false)
        };

        foreach (HexStack stack in offers)
        {
            BoxCollider collider = stack.gameObject.AddComponent<BoxCollider>();
            collider.center = new Vector3(0f, 0.22f, 0f);
            collider.size = new Vector3(1f, 0.8f, 1f);

            for (int i = stack.transform.childCount - 1; i >= 0; i--)
            {
                Object.DestroyImmediate(stack.transform.GetChild(i).gameObject);
            }
        }

        return offers;
    }

    private static HexStack CreateStack(string name, Transform parent, Vector3 position, Transform diskPrefab, List<Material> materials, List<HexColorId> colors, bool offer, bool solution)
    {
        GameObject stackObject = new GameObject(name);
        stackObject.transform.SetParent(parent);
        stackObject.transform.position = position;
        HexStack stack = stackObject.AddComponent<HexStack>();
        stack.Configure(diskPrefab, materials, colors, offer, solution);
        stack.BuildVisuals();
        return stack;
    }

    private static GameObject CreateDiskPrefab(Material previewMaterial)
    {
        string path = PrefabFolder + "/HexDisk.prefab";
        GameObject existingPrefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
        if (existingPrefab != null)
        {
            EnsureHexDiskComponent(path);
            return AssetDatabase.LoadAssetAtPath<GameObject>(path);
        }

        GameObject sourceModel = AssetDatabase.LoadAssetAtPath<GameObject>(DiskPrefabPath);
        GameObject root = new GameObject("HexDisk");
        root.AddComponent<HexDisk>();

        if (sourceModel != null)
        {
            GameObject model = (GameObject)PrefabUtility.InstantiatePrefab(sourceModel);
            model.name = "Model";
            model.transform.SetParent(root.transform, false);
        }
        else
        {
            GameObject fallback = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            fallback.name = "Model";
            fallback.transform.SetParent(root.transform, false);
            fallback.transform.localScale = new Vector3(0.72f, 0.035f, 0.72f);
        }

        foreach (Renderer renderer in root.GetComponentsInChildren<Renderer>(true))
        {
            renderer.sharedMaterial = previewMaterial;
        }

        GameObject prefab = PrefabUtility.SaveAsPrefabAsset(root, path);
        Object.DestroyImmediate(root);
        return prefab;
    }

    private static void EnsureHexDiskComponent(string prefabPath)
    {
        GameObject root = PrefabUtility.LoadPrefabContents(prefabPath);
        if (root.GetComponent<HexDisk>() == null)
        {
            root.AddComponent<HexDisk>();
            PrefabUtility.SaveAsPrefabAsset(root, prefabPath);
        }

        PrefabUtility.UnloadPrefabContents(root);
    }

    private static GameObject CreateCellPrefab()
    {
        string path = PrefabFolder + "/Cell.prefab";
        GameObject root = new GameObject("Cell");
        HexCell cell = root.AddComponent<HexCell>();
        cell.Configure(Vector3Int.zero);

        GameObject baseObject = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
        baseObject.name = "CellBase";
        baseObject.transform.SetParent(root.transform, false);
        baseObject.transform.localPosition = new Vector3(0f, -0.055f, 0f);
        baseObject.transform.localScale = new Vector3(0.9f, 0.018f, 0.9f);
        Object.DestroyImmediate(baseObject.GetComponent<Collider>());
        Renderer renderer = baseObject.GetComponent<Renderer>();
        renderer.sharedMaterial = AssetDatabase.LoadAssetAtPath<Material>(MaterialFolder + "/CellBase.mat");
        cell.SetRingRenderer(renderer);

        GameObject prefab = PrefabUtility.SaveAsPrefabAsset(root, path);
        Object.DestroyImmediate(root);
        return prefab;
    }

    private static GameObject CreateStackPrefab(Transform diskPrefab, List<Material> materials)
    {
        string path = PrefabFolder + "/HexStack.prefab";
        GameObject root = new GameObject("HexStack");
        HexStack stack = root.AddComponent<HexStack>();
        stack.Configure(diskPrefab, materials, new List<HexColorId>(), false, false);
        BoxCollider collider = root.AddComponent<BoxCollider>();
        collider.center = new Vector3(0f, 0.22f, 0f);
        collider.size = new Vector3(1f, 0.8f, 1f);

        GameObject prefab = PrefabUtility.SaveAsPrefabAsset(root, path);
        Object.DestroyImmediate(root);
        return prefab;
    }

    private static GameObject CreateVanishFxPrefab()
    {
        string path = PrefabFolder + "/HexVanishFx.prefab";
        GameObject source = AssetDatabase.LoadAssetAtPath<GameObject>(HexFxPath);
        if (source != null)
        {
            AssetDatabase.CopyAsset(HexFxPath, path);
            AssetDatabase.ImportAsset(path);
            return AssetDatabase.LoadAssetAtPath<GameObject>(path);
        }

        GameObject root = new GameObject("HexVanishFx");
        ParticleSystem particles = root.AddComponent<ParticleSystem>();
        particles.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
        ParticleSystem.MainModule main = particles.main;
        main.playOnAwake = false;
        main.duration = 0.45f;
        main.startLifetime = 0.45f;
        main.startSpeed = 1.8f;
        main.startSize = 0.09f;
        main.loop = false;
        ParticleSystem.EmissionModule emission = particles.emission;
        emission.SetBursts(new[] { new ParticleSystem.Burst(0f, 22) });

        GameObject prefab = PrefabUtility.SaveAsPrefabAsset(root, path);
        Object.DestroyImmediate(root);
        return prefab;
    }

    private static PackshotController CreateUi(Camera camera, Transform tutorialSource, TutorialController tutorial)
    {
        GameObject canvasObject = new GameObject("UI Canvas", typeof(RectTransform));
        Canvas canvas = canvasObject.AddComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvasObject.AddComponent<CanvasScaler>().uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        canvasObject.GetComponent<CanvasScaler>().referenceResolution = new Vector2(1080f, 1920f);
        canvasObject.AddComponent<GraphicRaycaster>();

        RectTransform canvasRect = (RectTransform)canvasObject.transform;

        Image hand = CreateImage("TutorialHand", canvasRect, AssetDatabase.LoadAssetAtPath<Sprite>(HandSpritePath), new Vector2(112f, 112f));
        hand.rectTransform.anchorMin = new Vector2(0.5f, 0.5f);
        hand.rectTransform.anchorMax = new Vector2(0.5f, 0.5f);
        hand.rectTransform.pivot = new Vector2(0.2f, 0.85f);

        SetSerialized(tutorial, "_hand", hand.rectTransform);
        SetSerialized(tutorial, "_canvas", canvas);
        SetSerialized(tutorial, "_gameCamera", camera);
        SetSerialized(tutorial, "_sourceStack", tutorialSource);

        GameObject packshotObject = new GameObject("Packshot");
        packshotObject.transform.SetParent(canvasRect, false);
        RectTransform packshotRect = packshotObject.AddComponent<RectTransform>();
        Stretch(packshotRect);
        CanvasGroup group = packshotObject.AddComponent<CanvasGroup>();
        Image background = packshotObject.AddComponent<Image>();
        background.color = new Color(0.58f, 0.82f, 1f, 0.94f);

        Text logo = CreateText("Logo", packshotRect, "HEX STACK", 96, FontStyle.Bold, new Color(0.12f, 0.2f, 0.38f));
        logo.rectTransform.anchorMin = new Vector2(0.08f, 0.58f);
        logo.rectTransform.anchorMax = new Vector2(0.92f, 0.72f);
        logo.alignment = TextAnchor.MiddleCenter;

        Text subtitle = CreateText("Subtitle", packshotRect, "Build the chain reaction", 38, FontStyle.Normal, new Color(0.22f, 0.34f, 0.54f));
        subtitle.rectTransform.anchorMin = new Vector2(0.08f, 0.51f);
        subtitle.rectTransform.anchorMax = new Vector2(0.92f, 0.58f);
        subtitle.alignment = TextAnchor.MiddleCenter;

        Button button = CreateButton(packshotRect);
        PackshotController packshot = packshotObject.AddComponent<PackshotController>();
        SetSerialized(packshot, "_group", group);
        SetSerialized(packshot, "_playNowButton", button);
        SetSerialized(packshot, "_playButtonView", button.GetComponent<PlayButtonView>());
        return packshot;
    }

    private static Image CreateImage(string name, RectTransform parent, Sprite sprite, Vector2 size)
    {
        GameObject imageObject = new GameObject(name, typeof(RectTransform));
        imageObject.transform.SetParent(parent, false);
        Image image = imageObject.AddComponent<Image>();
        image.sprite = sprite;
        image.raycastTarget = false;
        image.SetNativeSize();
        image.rectTransform.sizeDelta = size;
        return image;
    }

    private static Text CreateText(string name, RectTransform parent, string value, int fontSize, FontStyle style, Color color)
    {
        GameObject textObject = new GameObject(name, typeof(RectTransform));
        textObject.transform.SetParent(parent, false);
        Text text = textObject.AddComponent<Text>();
        text.text = value;
        text.font = GetUiFont();
        text.fontSize = fontSize;
        text.fontStyle = style;
        text.color = color;
        text.horizontalOverflow = HorizontalWrapMode.Wrap;
        text.verticalOverflow = VerticalWrapMode.Truncate;
        return text;
    }

    private static Button CreateButton(RectTransform parent)
    {
        GameObject buttonObject = new GameObject("PlayNowButton", typeof(RectTransform));
        buttonObject.transform.SetParent(parent, false);
        RectTransform rect = buttonObject.GetComponent<RectTransform>();
        rect.anchorMin = new Vector2(0.2f, 0.27f);
        rect.anchorMax = new Vector2(0.8f, 0.36f);
        rect.offsetMin = Vector2.zero;
        rect.offsetMax = Vector2.zero;

        Image image = buttonObject.AddComponent<Image>();
        image.color = new Color(1f, 0.72f, 0.16f);
        Button button = buttonObject.AddComponent<Button>();
        button.targetGraphic = image;
        buttonObject.AddComponent<PlayButtonView>();

        Text label = CreateText("Label", rect, "PLAY NOW", 44, FontStyle.Bold, new Color(0.08f, 0.06f, 0.04f));
        Stretch(label.rectTransform);
        label.alignment = TextAnchor.MiddleCenter;
        return button;
    }

    private static Font GetUiFont()
    {
        try
        {
            Font font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
            if (font != null)
            {
                return font;
            }
        }
        catch (System.ArgumentException)
        {
        }

        return Font.CreateDynamicFontFromOSFont(new[] { "Arial", "Liberation Sans", "Verdana" }, 32);
    }

    private static void CreateEventSystem()
    {
        GameObject eventSystem = new GameObject("EventSystem");
        eventSystem.AddComponent<EventSystem>();
        eventSystem.AddComponent<StandaloneInputModule>();
    }

    private static List<Material> CreateMaterials()
    {
        return new List<Material>
        {
            CreateMaterial("Hex_Red", new Color(1f, 0.34f, 0.38f)),
            CreateMaterial("Hex_Blue", new Color(0.25f, 0.62f, 1f)),
            CreateMaterial("Hex_Green", new Color(0.3f, 0.9f, 0.58f)),
            CreateMaterial("Hex_Yellow", new Color(1f, 0.86f, 0.25f)),
            CreateMaterial("Hex_Purple", new Color(0.74f, 0.46f, 1f)),
            CreateMaterial("CellBase", new Color(0.9f, 0.97f, 1f))
        };
    }

    private static Material CreateMaterial(string name, Color color)
    {
        string path = MaterialFolder + "/" + name + ".mat";
        Material material = AssetDatabase.LoadAssetAtPath<Material>(path);
        if (material == null)
        {
            material = new Material(GetColorShader());
            AssetDatabase.CreateAsset(material, path);
        }
        else
        {
            material.shader = GetColorShader();
        }

        material.color = color;
        EditorUtility.SetDirty(material);
        return material;
    }

    private static Shader GetColorShader()
    {
        Shader shader = AssetDatabase.LoadAssetAtPath<Shader>(ColorShaderPath);
        if (shader != null)
        {
            return shader;
        }

        shader = Shader.Find("Unlit/Color");
        return shader != null ? shader : Shader.Find("Standard");
    }

    private static List<HexColorId> Repeat(HexColorId color, int amount)
    {
        List<HexColorId> colors = new List<HexColorId>(amount);
        for (int i = 0; i < amount; i++)
        {
            colors.Add(color);
        }

        return colors;
    }

    private static List<HexColorId> StackWithTop(HexColorId topColor, HexColorId lowerA, HexColorId lowerB, int amount)
    {
        List<HexColorId> colors = new List<HexColorId>(amount);
        for (int i = 0; i < amount - 1; i++)
        {
            colors.Add(i % 2 == 0 ? lowerA : lowerB);
        }

        colors.Add(topColor);
        return colors;
    }

    private static List<HexColorId> LayeredStack(HexColorId lowerColor, int lowerAmount, HexColorId topColor, int topAmount)
    {
        List<HexColorId> colors = Repeat(lowerColor, lowerAmount);
        colors.AddRange(Repeat(topColor, topAmount));
        return colors;
    }

    private readonly struct CellPlacement
    {
        public readonly int Id;
        public readonly Vector3 Position;

        public CellPlacement(int id, Vector3 position)
        {
            Id = id;
            Position = position;
        }
    }

    private static void Stretch(RectTransform rect)
    {
        rect.anchorMin = Vector2.zero;
        rect.anchorMax = Vector2.one;
        rect.offsetMin = Vector2.zero;
        rect.offsetMax = Vector2.zero;
    }

    private static void EnsureFolder(string parent, string child)
    {
        string path = parent + "/" + child;
        if (!AssetDatabase.IsValidFolder(path))
        {
            AssetDatabase.CreateFolder(parent, child);
        }
    }

    private static void SetSerialized(Object target, string propertyName, Object value)
    {
        SerializedObject serializedObject = new SerializedObject(target);
        serializedObject.FindProperty(propertyName).objectReferenceValue = value;
        serializedObject.ApplyModifiedPropertiesWithoutUndo();
        EditorUtility.SetDirty(target);
    }

    private static void SetSerializedMaterials(Object target, string propertyName, List<Material> materials)
    {
        SerializedObject serializedObject = new SerializedObject(target);
        SerializedProperty property = serializedObject.FindProperty(propertyName);
        property.arraySize = materials.Count;
        for (int i = 0; i < materials.Count; i++)
        {
            property.GetArrayElementAtIndex(i).objectReferenceValue = materials[i];
        }

        serializedObject.ApplyModifiedPropertiesWithoutUndo();
        EditorUtility.SetDirty(target);
    }
}
