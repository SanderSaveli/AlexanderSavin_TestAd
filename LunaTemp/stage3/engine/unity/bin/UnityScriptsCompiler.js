if ( TRACE ) { TRACE( JSON.parse( '["BoardController#init","BoardController#Cells#get","BoardController#init","BoardController#Initialize","BoardController#TryGetDropCell","BoardController#GetTutorialCell","BoardController#GetFirstEmptyCell","BoardController#GetNeighbors","BoardController#SpawnInitialStack","BoardController#BuildNeighborCache","BoardController#BuildWorldNeighborCache","BoardController#GetGridNeighborDistance","BoardController#GetWorldNeighborDistance","BoardController#GetLowestEmptyCell","CellHighlightView#Awake","CellHighlightView#SetHighlighted","CellHighlightView#SetMaterial","CellHighlightView#CacheRenderer","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","DragController#init","DragController#Initialize","DragController#Update","DragController#OnDisable","DragController#TryBeginDrag","DragController#UpdateDrag","DragController#EndDrag","DragController#GetWorldPoint","DragController#UpdateHighlightedCell","DragController#SetHighlightedCell","DragController#ClearHighlightedCell","GameController#IsInputEnabled#get","GameController#init","GameController#Configure","GameController#Awake","GameController#Start","GameController#NotifyStackGrabbed","GameController#NotifyDragCanceled","GameController#NotifyStackPlaced","GameController#EnterState","GameController#RunTurn","GameController#InitializeStacks","GameController#HasRemainingOfferStacks","GameController#HasRequiredReferences","HexCell#GridPosition#get","HexCell#InitialStackColors#get","HexCell#CurrentStack#get","HexCell#init","HexCell#Initialize","HexCell#Configure","HexCell#SetInitialStackColors","HexCell#SetRingRenderer","HexCell#SetHighlightView","HexCell#SetStack","HexCell#ClearStack","HexCell#SetHighlight","HexDisk#Color#get","HexDisk#Renderers#get","HexDisk#Initialize","HexDisk#CacheRenderers","HexDisk#SetAlpha","HexStack#IsOfferStack#get","HexStack#IsSolutionStack#get","HexStack#IsEmpty#get","HexStack#Count#get","HexStack#CurrentCell#get","HexStack#HomePosition#get","HexStack#HomeParent#get","HexStack#DiskScale#get","HexStack#TopColor#get","HexStack#init","HexStack#Configure","HexStack#BuildVisuals","HexStack#InitializeRuntime","HexStack#MarkAsPlacedOnBoard","HexStack#StoreHome","HexStack#AssignCell","HexStack#DetachFromCell","HexStack#PopTopDisk","HexStack#PushDisk","HexStack#CountTopColor","HexStack#IsSingleColorStack","HexStack#RemoveTopDisks","HexStack#CopyDisksTopToBottom","HexStack#GetNextDiskWorldPosition","HexStack#GetDiskWorldPositionAtIndex","HexStack#Reflow","HexStack#CreateDisk","HexStack#GetDiskLocalPosition","PackshotController#InvokeLunaStatic","PackshotController#GetDefaultValue","PackshotController#FindType","PackshotController#init","PackshotController#Awake","PackshotController#Configure","PackshotController#Update","PackshotController#HideInstant","PackshotController#Show","PackshotController#GameEnded","PackshotController#InstallFullGame","PlayButtonView#init","PlayButtonView#Awake","PlayButtonView#OnDisable","PlayButtonView#Play","PlayButtonView#Stop","ReactionResolver#init","ReactionResolver#init","ReactionResolver#Initialize","ReactionResolver#Configure","ReactionResolver#MergeFrom","ReactionResolver#CleanFullStacks","ReactionResolver#CanMerge","ReactionResolver#MergeStacks","ReactionResolver#GetMergeDiskCount","ReactionResolver#AnimateRollingDisk","ReactionResolver#VanishStack","ReactionResolver#PlayVanishFx","ReactionResolver#PushIfCheckable","ReactionResolver#GetScaledDuration","ReactionResolver.VanishingStack#getDefaultValue","ReactionResolver.VanishingStack#$ctor1","ReactionResolver.VanishingStack#ctor","ReactionResolver.VanishingStack#getHashCode","ReactionResolver.VanishingStack#equals","ReactionResolver.VanishingStack#$clone","TutorialController#init","TutorialController#Initialize","TutorialController#Configure","TutorialController#Play","TutorialController#Hide","TutorialController#ScheduleReplay","TutorialController#ReplayAfterDelay","TutorialController#WorldToCanvas"]' ) ); }
/**
 * @version 1.0.9655.34370
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BoardController start.*/
    Bridge.define("BoardController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                NEIGHBOR_DISTANCE_TOLERANCE: 0,
                CandidateNeighborOffsets: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BoardController#init", this ); }

                    this.NEIGHBOR_DISTANCE_TOLERANCE = 1.08;
                    this.CandidateNeighborOffsets = System.Array.init([
                        new UnityEngine.Vector3Int.$ctor1(-1, 0, 0), 
                        new UnityEngine.Vector3Int.$ctor1(1, 0, 0), 
                        new UnityEngine.Vector3Int.$ctor1(0, -1, 0), 
                        new UnityEngine.Vector3Int.$ctor1(0, 1, 0), 
                        new UnityEngine.Vector3Int.$ctor1(-1, -1, 0), 
                        new UnityEngine.Vector3Int.$ctor1(-1, 1, 0), 
                        new UnityEngine.Vector3Int.$ctor1(1, -1, 0), 
                        new UnityEngine.Vector3Int.$ctor1(1, 1, 0)
                    ], UnityEngine.Vector3Int);
                }
            }
        },
        fields: {
            _grid: null,
            _cells: null,
            _stackPrefab: null,
            _diskPrefab: null,
            _colorMaterials: null,
            _snapRadius: 0,
            _cellByGridPosition: null,
            _neighborsByCell: null
        },
        props: {
            Cells: {
                get: function () {
if ( TRACE ) { TRACE( "BoardController#Cells#get", this ); }

                    return this._cells;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BoardController#init", this ); }

                this._cells = new (System.Collections.Generic.List$1(HexCell)).ctor();
                this._colorMaterials = new (System.Collections.Generic.List$1(UnityEngine.Material)).ctor();
                this._snapRadius = 0.95;
                this._cellByGridPosition = new (System.Collections.Generic.Dictionary$2(UnityEngine.Vector3Int,HexCell)).ctor();
                this._neighborsByCell = new (System.Collections.Generic.Dictionary$2(HexCell,System.Collections.Generic.List$1(HexCell))).ctor();
            }
        },
        methods: {
            /*BoardController.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "BoardController#Initialize", this ); }

                var $t;
                this._cells.clear();
                this._cellByGridPosition.clear();
                this._neighborsByCell.clear();
                var sceneCells = new (System.Collections.Generic.List$1(HexCell)).ctor();
                this.GetComponentsInChildren$2(HexCell, true, sceneCells);

                $t = Bridge.getEnumerator(sceneCells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        var gridPosition = cell.GridPosition.$clone();
                        if (UnityEngine.Component.op_Inequality(this._grid, null)) {
                            gridPosition = this._grid.reportMethod( 'UnityEngine.GridLayout.WorldToCell', null );
                            cell.Configure(gridPosition);
                        }
                        cell.Initialize();
                        this.SpawnInitialStack(cell);
                        this._cells.add(cell);
                        this._cellByGridPosition.setItem(gridPosition, cell);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.BuildNeighborCache();
            },
            /*BoardController.Initialize end.*/

            /*BoardController.TryGetDropCell start.*/
            TryGetDropCell: function (worldPosition, stack, cell) {
if ( TRACE ) { TRACE( "BoardController#TryGetDropCell", this ); }

                var $t;
                cell.v = null;
                if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
                    return false;
                }

                var pointerPosition = new pc.Vec2( worldPosition.x, worldPosition.z );
                var bestDistance = this._snapRadius;
                $t = Bridge.getEnumerator(this._cells);
                try {
                    while ($t.moveNext()) {
                        var candidate = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(candidate.CurrentStack, null)) {
                            continue;
                        }

                        var cellPosition = new pc.Vec2( candidate.transform.position.x, candidate.transform.position.z );
                        var distance = pointerPosition.$clone().sub( cellPosition ).length();
                        if (distance <= bestDistance) {
                            bestDistance = distance;
                            cell.v = candidate;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return UnityEngine.MonoBehaviour.op_Inequality(cell.v, null);
            },
            /*BoardController.TryGetDropCell end.*/

            /*BoardController.GetTutorialCell start.*/
            GetTutorialCell: function () {
if ( TRACE ) { TRACE( "BoardController#GetTutorialCell", this ); }

                return this.GetFirstEmptyCell();
            },
            /*BoardController.GetTutorialCell end.*/

            /*BoardController.GetFirstEmptyCell start.*/
            GetFirstEmptyCell: function () {
if ( TRACE ) { TRACE( "BoardController#GetFirstEmptyCell", this ); }

                return this.GetLowestEmptyCell();
            },
            /*BoardController.GetFirstEmptyCell end.*/

            /*BoardController.GetNeighbors start.*/
            GetNeighbors: function (cell) {
if ( TRACE ) { TRACE( "BoardController#GetNeighbors", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(cell, null)) {
                    return new (System.Collections.Generic.List$1(HexCell)).$ctor2(0);
                }
                var neighbors = { };

                if (this._neighborsByCell.tryGetValue(cell, neighbors)) {
                    return neighbors.v;
                }

                return new (System.Collections.Generic.List$1(HexCell)).$ctor2(0);
            },
            /*BoardController.GetNeighbors end.*/

            /*BoardController.SpawnInitialStack start.*/
            SpawnInitialStack: function (cell) {
if ( TRACE ) { TRACE( "BoardController#SpawnInitialStack", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(cell.CurrentStack, null) || System.Array.getCount(cell.InitialStackColors, HexColorId) === 0) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this._stackPrefab, null) || UnityEngine.Component.op_Equality(this._diskPrefab, null) || this._colorMaterials.Count === 0) {
                    UnityEngine.Debug.LogError$2("BoardController cannot spawn initial stacks because stack prefab, disk prefab or color materials are missing.");
                    return;
                }

                var stack = UnityEngine.Object.Instantiate(HexStack, this._stackPrefab, cell.transform);
                stack.name = "Stack";
                stack.transform.localPosition = pc.Vec3.ZERO.clone();
                stack.transform.localRotation = pc.Quat.IDENTITY.clone();
                stack.Configure(this._diskPrefab, this._colorMaterials, new (System.Collections.Generic.List$1(HexColorId)).$ctor1(cell.InitialStackColors), false, false);
                stack.BuildVisuals();
                cell.SetStack(stack);
            },
            /*BoardController.SpawnInitialStack end.*/

            /*BoardController.BuildNeighborCache start.*/
            BuildNeighborCache: function () {
if ( TRACE ) { TRACE( "BoardController#BuildNeighborCache", this ); }

                var $t, $t1;
                if (UnityEngine.Component.op_Equality(this._grid, null)) {
                    this.BuildWorldNeighborCache();
                    return;
                }

                $t = Bridge.getEnumerator(this._cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        var neighbors = new (System.Collections.Generic.List$1(HexCell)).$ctor2(6);

                        var neighborDistance = this.GetGridNeighborDistance(cell);

                        $t1 = Bridge.getEnumerator(BoardController.CandidateNeighborOffsets);
                        try {
                            while ($t1.moveNext()) {
                                var offset = $t1.Current.$clone();
                                var neighborPosition = UnityEngine.Vector3Int.op_Addition(cell.GridPosition.$clone(), offset.$clone());
                                var neighbor = { };

                                if (!this._cellByGridPosition.tryGetValue(neighborPosition.$clone(), neighbor)) {
                                    continue;
                                }

                                var distance;

                                if (UnityEngine.Component.op_Inequality(this._grid, null)) {
                                    distance = pc.Vec3.distance( this._grid.reportMethod( 'UnityEngine.Grid.GetCellCenterWorld', null ), this._grid.reportMethod( 'UnityEngine.Grid.GetCellCenterWorld', null ) );
                                } else {
                                    distance = pc.Vec3.distance( cell.transform.position, neighbor.v.transform.position );
                                }

                                if (distance <= neighborDistance * BoardController.NEIGHBOR_DISTANCE_TOLERANCE) {
                                    neighbors.add(neighbor.v);
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }

                        this._neighborsByCell.setItem(cell, neighbors);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BoardController.BuildNeighborCache end.*/

            /*BoardController.BuildWorldNeighborCache start.*/
            BuildWorldNeighborCache: function () {
if ( TRACE ) { TRACE( "BoardController#BuildWorldNeighborCache", this ); }

                var $t, $t1;
                $t = Bridge.getEnumerator(this._cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        var neighbors = new (System.Collections.Generic.List$1(HexCell)).$ctor2(6);
                        var neighborDistance = this.GetWorldNeighborDistance(cell);
                        var maxNeighborDistance = neighborDistance * BoardController.NEIGHBOR_DISTANCE_TOLERANCE;

                        $t1 = Bridge.getEnumerator(this._cells);
                        try {
                            while ($t1.moveNext()) {
                                var other = $t1.Current;
                                if (UnityEngine.MonoBehaviour.op_Equality(other, cell)) {
                                    continue;
                                }

                                var distance = pc.Vec3.distance( cell.transform.position, other.transform.position );
                                if (distance <= maxNeighborDistance) {
                                    neighbors.add(other);
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }

                        this._neighborsByCell.setItem(cell, neighbors);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BoardController.BuildWorldNeighborCache end.*/

            /*BoardController.GetGridNeighborDistance start.*/
            GetGridNeighborDistance: function (cell) {
if ( TRACE ) { TRACE( "BoardController#GetGridNeighborDistance", this ); }

                var $t;
                var bestDistance = 3.40282347E+38;

                if (UnityEngine.Component.op_Inequality(this._grid, null)) {
                    var center = this._grid.reportMethod( 'UnityEngine.Grid.GetCellCenterWorld', null );

                    $t = Bridge.getEnumerator(BoardController.CandidateNeighborOffsets);
                    try {
                        while ($t.moveNext()) {
                            var offset = $t.Current.$clone();
                            var distance = pc.Vec3.distance( center, this._grid.reportMethod( 'UnityEngine.Grid.GetCellCenterWorld', null ) );

                            if (distance < bestDistance) {
                                bestDistance = distance;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                } else {
                    bestDistance = this.GetWorldNeighborDistance(cell);
                }

                return bestDistance;
            },
            /*BoardController.GetGridNeighborDistance end.*/

            /*BoardController.GetWorldNeighborDistance start.*/
            GetWorldNeighborDistance: function (cell) {
if ( TRACE ) { TRACE( "BoardController#GetWorldNeighborDistance", this ); }

                var $t;
                var bestDistance = 3.40282347E+38;

                $t = Bridge.getEnumerator(this._cells);
                try {
                    while ($t.moveNext()) {
                        var other = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(other, cell)) {
                            continue;
                        }

                        var distance = pc.Vec3.distance( cell.transform.position, other.transform.position );

                        if (distance > 0.01 && distance < bestDistance) {
                            bestDistance = distance;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return bestDistance;
            },
            /*BoardController.GetWorldNeighborDistance end.*/

            /*BoardController.GetLowestEmptyCell start.*/
            GetLowestEmptyCell: function () {
if ( TRACE ) { TRACE( "BoardController#GetLowestEmptyCell", this ); }

                var $t;
                var bestCell = null;
                var bestZ = 3.40282347E+38;
                var bestAbsX = 3.40282347E+38;

                $t = Bridge.getEnumerator(this._cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(cell.CurrentStack, null)) {
                            continue;
                        }

                        var z = cell.transform.position.z;
                        var absX = Math.abs(cell.transform.position.x);
                        if (z < bestZ || UnityEngine.Mathf.Approximately(z, bestZ) && absX < bestAbsX) {
                            bestCell = cell;
                            bestZ = z;
                            bestAbsX = absX;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return bestCell;
            },
            /*BoardController.GetLowestEmptyCell end.*/


        }
    });
    /*BoardController end.*/

    /*CellHighlightView start.*/
    Bridge.define("CellHighlightView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _normalMaterial: null,
            _highlightMaterial: null,
            _renderer: null
        },
        methods: {
            /*CellHighlightView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CellHighlightView#Awake", this ); }

                this.CacheRenderer();

                if (this._normalMaterial != null) {
                    this.SetMaterial(this._normalMaterial);
                }
            },
            /*CellHighlightView.Awake end.*/

            /*CellHighlightView.SetHighlighted start.*/
            SetHighlighted: function (isHighlighted) {
if ( TRACE ) { TRACE( "CellHighlightView#SetHighlighted", this ); }

                var material = isHighlighted ? this._highlightMaterial : this._normalMaterial;
                if (material == null) {
                    return;
                }

                this.SetMaterial(material);
            },
            /*CellHighlightView.SetHighlighted end.*/

            /*CellHighlightView.SetMaterial start.*/
            SetMaterial: function (material) {
if ( TRACE ) { TRACE( "CellHighlightView#SetMaterial", this ); }

                if (UnityEngine.Component.op_Equality(this._renderer, null)) {
                    this.CacheRenderer();
                }

                if (UnityEngine.Component.op_Inequality(this._renderer, null)) {
                    this._renderer.sharedMaterial = material;
                }
            },
            /*CellHighlightView.SetMaterial end.*/

            /*CellHighlightView.CacheRenderer start.*/
            CacheRenderer: function () {
if ( TRACE ) { TRACE( "CellHighlightView#CacheRenderer", this ); }

                this._renderer = this.GetComponent(UnityEngine.Renderer);
                if (UnityEngine.Component.op_Equality(this._renderer, null)) {
                    this._renderer = this.GetComponentInChildren(UnityEngine.Renderer, true);
                }
            },
            /*CellHighlightView.CacheRenderer end.*/


        }
    });
    /*CellHighlightView end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DragController start.*/
    Bridge.define("DragController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _draggableMask: null,
            _liftHeight: 0,
            _followLerp: 0,
            _gameController: null,
            _gameCamera: null,
            _board: null,
            _draggedStack: null,
            _highlightedCell: null,
            _dragOffset: null,
            _dragPlane: null,
            _pointerDown: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DragController#init", this ); }

                this._draggableMask = new UnityEngine.LayerMask();
                this._dragOffset = new UnityEngine.Vector3();
                this._dragPlane = new UnityEngine.Plane();
                this._draggableMask = UnityEngine.LayerMask.op_Implicit$1(-1);
                this._liftHeight = 0.9;
                this._followLerp = 24.0;
            }
        },
        methods: {
            /*DragController.Initialize start.*/
            Initialize: function (controller, cameraReference, boardReference) {
if ( TRACE ) { TRACE( "DragController#Initialize", this ); }

                this._gameController = controller;
                this._gameCamera = cameraReference;
                this._board = boardReference;
                this._dragPlane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), pc.Vec3.ZERO.clone());
            },
            /*DragController.Initialize end.*/

            /*DragController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DragController#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._gameController, null) || !this._gameController.IsInputEnabled) {
                    return;
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.TryBeginDrag(UnityEngine.Input.mousePosition);
                } else if (UnityEngine.Input.GetMouseButton(0) && this._pointerDown) {
                    this.UpdateDrag(UnityEngine.Input.mousePosition.$clone());
                } else if (UnityEngine.Input.GetMouseButtonUp(0) && this._pointerDown) {
                    this.EndDrag();
                }
            },
            /*DragController.Update end.*/

            /*DragController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "DragController#OnDisable", this ); }

                this.ClearHighlightedCell();
            },
            /*DragController.OnDisable end.*/

            /*DragController.TryBeginDrag start.*/
            TryBeginDrag: function (screenPosition) {
if ( TRACE ) { TRACE( "DragController#TryBeginDrag", this ); }

                var ray = this._gameCamera.ScreenPointToRay(screenPosition);
                var hit = { v : new UnityEngine.RaycastHit() };
                if (!UnityEngine.Physics.Raycast$1(ray, hit, 100.0, UnityEngine.LayerMask.op_Implicit(this._draggableMask.$clone()))) {
                    return;
                }

                var stack = hit.v.collider.GetComponentInParent(HexStack);
                if (UnityEngine.MonoBehaviour.op_Equality(stack, null) || !stack.IsOfferStack) {
                    return;
                }

                this._draggedStack = stack;
                this._pointerDown = true;
                this.ClearHighlightedCell();
                this._dragPlane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), pc.Vec3.ZERO.clone());
                var pointerWorld = this.GetWorldPoint(screenPosition);
                this._dragOffset = this._draggedStack.transform.position.$clone().sub( pointerWorld );
                this._draggedStack.DetachFromCell();
                DG.Tweening.ShortcutExtensions.DOKill(this._draggedStack.transform);
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMoveY(this._draggedStack.transform, this._liftHeight, 0.14), DG.Tweening.Ease.OutBack);
                this._gameController.NotifyStackGrabbed();
            },
            /*DragController.TryBeginDrag end.*/

            /*DragController.UpdateDrag start.*/
            UpdateDrag: function (screenPosition) {
if ( TRACE ) { TRACE( "DragController#UpdateDrag", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._draggedStack, null)) {
                    return;
                }

                var target = this.GetWorldPoint(screenPosition).add( this._dragOffset );
                target.y = this._liftHeight;
                this._draggedStack.transform.position = new pc.Vec3().lerp( this._draggedStack.transform.position, target, UnityEngine.Time.deltaTime * this._followLerp );
                this.UpdateHighlightedCell();
            },
            /*DragController.UpdateDrag end.*/

            /*DragController.EndDrag start.*/
            EndDrag: function () {
if ( TRACE ) { TRACE( "DragController#EndDrag", this ); }

                this._pointerDown = false;
                if (UnityEngine.MonoBehaviour.op_Equality(this._draggedStack, null)) {
                    return;
                }

                var stack = this._draggedStack;
                this._draggedStack = null;
                this.ClearHighlightedCell();
                var cell = { };

                if (this._board.TryGetDropCell(stack.transform.position, stack, cell)) {
                    stack.transform.SetParent(cell.v.transform, true);
                    var place = DG.Tweening.DOTween.Sequence();
                    DG.Tweening.TweenSettingsExtensions.Join(place, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(stack.transform, pc.Vec3.ZERO.clone(), 0.18), DG.Tweening.Ease.OutBack));
                    DG.Tweening.TweenSettingsExtensions.Join(place, DG.Tweening.ShortcutExtensions.DOLocalRotate(stack.transform, pc.Vec3.ZERO.clone(), 0.18));
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, place, Bridge.fn.bind(this, function () {
                        cell.v.SetStack(stack);
                        this._gameController.NotifyStackPlaced(stack, cell.v);
                    }));
                } else {
                    stack.transform.SetParent(stack.HomeParent, true);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(stack.transform, stack.HomePosition.$clone(), 0.24), DG.Tweening.Ease.OutBack), Bridge.fn.cacheBind(this._gameController, this._gameController.NotifyDragCanceled));
                }
            },
            /*DragController.EndDrag end.*/

            /*DragController.GetWorldPoint start.*/
            GetWorldPoint: function (screenPosition) {
if ( TRACE ) { TRACE( "DragController#GetWorldPoint", this ); }

                var ray = this._gameCamera.ScreenPointToRay(screenPosition);
                var distance = { };
                if (this._dragPlane.Raycast(ray, distance)) {
                    return ray.GetPoint(distance.v);
                }

                return pc.Vec3.ZERO.clone();
            },
            /*DragController.GetWorldPoint end.*/

            /*DragController.UpdateHighlightedCell start.*/
            UpdateHighlightedCell: function () {
if ( TRACE ) { TRACE( "DragController#UpdateHighlightedCell", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._draggedStack, null)) {
                    this.ClearHighlightedCell();
                    return;
                }
                var cell = { };

                this._board.TryGetDropCell(this._draggedStack.transform.position, this._draggedStack, cell);
                this.SetHighlightedCell(cell.v);
            },
            /*DragController.UpdateHighlightedCell end.*/

            /*DragController.SetHighlightedCell start.*/
            SetHighlightedCell: function (cell) {
if ( TRACE ) { TRACE( "DragController#SetHighlightedCell", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._highlightedCell, cell)) {
                    return;
                }

                this.ClearHighlightedCell();
                this._highlightedCell = cell;

                if (UnityEngine.MonoBehaviour.op_Inequality(this._highlightedCell, null)) {
                    this._highlightedCell.SetHighlight(true);
                }
            },
            /*DragController.SetHighlightedCell end.*/

            /*DragController.ClearHighlightedCell start.*/
            ClearHighlightedCell: function () {
if ( TRACE ) { TRACE( "DragController#ClearHighlightedCell", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._highlightedCell, null)) {
                    return;
                }

                this._highlightedCell.SetHighlight(false);
                this._highlightedCell = null;
            },
            /*DragController.ClearHighlightedCell end.*/


        }
    });
    /*DragController end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _gameCamera: null,
            _board: null,
            _dragController: null,
            _reactionResolver: null,
            _tutorial: null,
            _packshot: null,
            _tutorialCompleted: false,
            State: 0
        },
        props: {
            IsInputEnabled: {
                get: function () {
if ( TRACE ) { TRACE( "GameController#IsInputEnabled#get", this ); }

                    return this.State === GameState.Input;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameController#init", this ); }

                this.State = GameState.Initialization;
            }
        },
        methods: {
            /*GameController.Configure start.*/
            Configure: function (cameraReference, boardReference, dragReference, resolverReference, tutorialReference, packshotReference) {
if ( TRACE ) { TRACE( "GameController#Configure", this ); }

                this._gameCamera = cameraReference;
                this._board = boardReference;
                this._dragController = dragReference;
                this._reactionResolver = resolverReference;
                this._tutorial = tutorialReference;
                this._packshot = packshotReference;
            },
            /*GameController.Configure end.*/

            /*GameController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameController#Awake", this ); }

                this.EnterState(GameState.Initialization);

                if (!this.HasRequiredReferences()) {
                    UnityEngine.Debug.LogError$2("GameController is missing scene references. Rebuild Playable_main via Tools/TestAD/Rebuild Playable Scene.");
                    this.enabled = false;
                    return;
                }

                this.InitializeStacks();
                this._board.Initialize();
                this._dragController.Initialize(this, this._gameCamera, this._board);
                this._reactionResolver.Initialize(this._board);
                this._tutorial.Initialize(this._board);
                this._packshot.HideInstant();
            },
            /*GameController.Awake end.*/

            /*GameController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameController#Start", this ); }

                if (!this.enabled) {
                    return;
                }

                this.EnterState(GameState.Input);
            },
            /*GameController.Start end.*/

            /*GameController.NotifyStackGrabbed start.*/
            NotifyStackGrabbed: function () {
if ( TRACE ) { TRACE( "GameController#NotifyStackGrabbed", this ); }

                if (this.State !== GameState.Input) {
                    return;
                }

                this._tutorial.Hide();
            },
            /*GameController.NotifyStackGrabbed end.*/

            /*GameController.NotifyDragCanceled start.*/
            NotifyDragCanceled: function () {
if ( TRACE ) { TRACE( "GameController#NotifyDragCanceled", this ); }

                if (this.State === GameState.Input && !this._tutorialCompleted) {
                    this._tutorial.ScheduleReplay();
                }
            },
            /*GameController.NotifyDragCanceled end.*/

            /*GameController.NotifyStackPlaced start.*/
            NotifyStackPlaced: function (stack, cell) {
if ( TRACE ) { TRACE( "GameController#NotifyStackPlaced", this ); }

                if (this.State !== GameState.Input) {
                    return;
                }

                this._tutorialCompleted = true;
                stack.MarkAsPlacedOnBoard();
                this.EnterState(GameState.Merge);
                this.StartCoroutine$1(this.RunTurn(stack, cell));
            },
            /*GameController.NotifyStackPlaced end.*/

            /*GameController.EnterState start.*/
            EnterState: function (nextState) {
if ( TRACE ) { TRACE( "GameController#EnterState", this ); }

                UnityEngine.Debug.Log$1("Change Statee: " + System.Enum.toString(GameState, nextState));
                this.State = nextState;

                switch (this.State) {
                    case GameState.Initialization: 
                        break;
                    case GameState.Input: 
                        if (this._tutorialCompleted) {
                            UnityEngine.MonoBehaviour.op_Inequality(this._tutorial, null) ? this._tutorial.Hide() : null;
                        } else {
                            UnityEngine.MonoBehaviour.op_Inequality(this._tutorial, null) ? this._tutorial.Play() : null;
                        }
                        break;
                    case GameState.Merge: 
                    case GameState.Cleaning: 
                        UnityEngine.MonoBehaviour.op_Inequality(this._tutorial, null) ? this._tutorial.Hide() : null;
                        break;
                    case GameState.Finished: 
                        UnityEngine.MonoBehaviour.op_Inequality(this._tutorial, null) ? this._tutorial.Hide() : null;
                        UnityEngine.MonoBehaviour.op_Inequality(this._packshot, null) ? this._packshot.Show() : null;
                        break;
                }
            },
            /*GameController.EnterState end.*/

            /*GameController.RunTurn start.*/
            RunTurn: function (placedStack, placedCell) {
if ( TRACE ) { TRACE( "GameController#RunTurn", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this._reactionResolver.MergeFrom(placedCell);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.EnterState(GameState.Cleaning);
                                        $enumerator.current = this._reactionResolver.CleanFullStacks();
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (this.HasRemainingOfferStacks()) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    this.EnterState(GameState.Input);
                                        return false;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    this.EnterState(GameState.Finished);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameController.RunTurn end.*/

            /*GameController.InitializeStacks start.*/
            InitializeStacks: function () {
if ( TRACE ) { TRACE( "GameController#InitializeStacks", this ); }

                var $t;
                var stacks = UnityEngine.Object.FindObjectsOfType(HexStack);
                $t = Bridge.getEnumerator(stacks);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        stack.InitializeRuntime();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameController.InitializeStacks end.*/

            /*GameController.HasRemainingOfferStacks start.*/
            HasRemainingOfferStacks: function () {
if ( TRACE ) { TRACE( "GameController#HasRemainingOfferStacks", this ); }

                var $t;
                var stacks = UnityEngine.Object.FindObjectsOfType(HexStack);
                $t = Bridge.getEnumerator(stacks);
                try {
                    while ($t.moveNext()) {
                        var stack = $t.Current;
                        if (stack.IsOfferStack) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return false;
            },
            /*GameController.HasRemainingOfferStacks end.*/

            /*GameController.HasRequiredReferences start.*/
            HasRequiredReferences: function () {
if ( TRACE ) { TRACE( "GameController#HasRequiredReferences", this ); }

                return UnityEngine.Component.op_Inequality(this._gameCamera, null) && UnityEngine.MonoBehaviour.op_Inequality(this._board, null) && UnityEngine.MonoBehaviour.op_Inequality(this._dragController, null) && UnityEngine.MonoBehaviour.op_Inequality(this._reactionResolver, null) && UnityEngine.MonoBehaviour.op_Inequality(this._tutorial, null) && UnityEngine.MonoBehaviour.op_Inequality(this._packshot, null);
            },
            /*GameController.HasRequiredReferences end.*/


        }
    });
    /*GameController end.*/

    /*GameState start.*/
    Bridge.define("GameState", {
        $kind: 6,
        statics: {
            fields: {
                Initialization: 0,
                Input: 1,
                Merge: 2,
                Cleaning: 3,
                Finished: 4
            }
        }
    });
    /*GameState end.*/

    /*HexCell start.*/
    Bridge.define("HexCell", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _gridPosition: null,
            _initialStackColors: null,
            _currentStack: null,
            _ringRenderer: null,
            _highlightView: null
        },
        props: {
            GridPosition: {
                get: function () {
if ( TRACE ) { TRACE( "HexCell#GridPosition#get", this ); }

                    return this._gridPosition.$clone();
                }
            },
            InitialStackColors: {
                get: function () {
if ( TRACE ) { TRACE( "HexCell#InitialStackColors#get", this ); }

                    return this._initialStackColors;
                }
            },
            CurrentStack: {
                get: function () {
if ( TRACE ) { TRACE( "HexCell#CurrentStack#get", this ); }

                    return this._currentStack;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexCell#init", this ); }

                this._gridPosition = new UnityEngine.Vector3Int();
                this._initialStackColors = new (System.Collections.Generic.List$1(HexColorId)).ctor();
            }
        },
        methods: {
            /*HexCell.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "HexCell#Initialize", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._currentStack, null)) {
                    this._currentStack = this.GetComponentInChildren(HexStack);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._currentStack, null)) {
                    this.SetStack(this._currentStack);
                }
            },
            /*HexCell.Initialize end.*/

            /*HexCell.Configure start.*/
            Configure: function (gridPosition) {
if ( TRACE ) { TRACE( "HexCell#Configure", this ); }

                this._gridPosition = gridPosition.$clone();
            },
            /*HexCell.Configure end.*/

            /*HexCell.SetInitialStackColors start.*/
            SetInitialStackColors: function (colors) {
if ( TRACE ) { TRACE( "HexCell#SetInitialStackColors", this ); }

                this._initialStackColors = colors != null ? new (System.Collections.Generic.List$1(HexColorId)).$ctor1(colors) : new (System.Collections.Generic.List$1(HexColorId)).ctor();
            },
            /*HexCell.SetInitialStackColors end.*/

            /*HexCell.SetRingRenderer start.*/
            SetRingRenderer: function (renderer) {
if ( TRACE ) { TRACE( "HexCell#SetRingRenderer", this ); }

                this._ringRenderer = renderer;
            },
            /*HexCell.SetRingRenderer end.*/

            /*HexCell.SetHighlightView start.*/
            SetHighlightView: function (highlightView) {
if ( TRACE ) { TRACE( "HexCell#SetHighlightView", this ); }

                this._highlightView = highlightView;
            },
            /*HexCell.SetHighlightView end.*/

            /*HexCell.SetStack start.*/
            SetStack: function (stack) {
if ( TRACE ) { TRACE( "HexCell#SetStack", this ); }

                this._currentStack = stack;
                if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
                    return;
                }

                stack.AssignCell(this);
                stack.transform.SetParent(this.transform);
                stack.transform.localPosition = pc.Vec3.ZERO.clone();
            },
            /*HexCell.SetStack end.*/

            /*HexCell.ClearStack start.*/
            ClearStack: function (stack) {
if ( TRACE ) { TRACE( "HexCell#ClearStack", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._currentStack, stack)) {
                    this._currentStack = null;
                }
            },
            /*HexCell.ClearStack end.*/

            /*HexCell.SetHighlight start.*/
            SetHighlight: function (enabled) {
if ( TRACE ) { TRACE( "HexCell#SetHighlight", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._highlightView, null)) {
                    this._highlightView.SetHighlighted(enabled);
                }
            },
            /*HexCell.SetHighlight end.*/


        }
    });
    /*HexCell end.*/

    /*HexColorId start.*/
    Bridge.define("HexColorId", {
        $kind: 6,
        statics: {
            fields: {
                Red: 0,
                Blue: 1,
                Green: 2,
                Yellow: 3,
                Purple: 4
            }
        }
    });
    /*HexColorId end.*/

    /*HexDisk start.*/
    Bridge.define("HexDisk", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _color: 0,
            _renderers: null
        },
        props: {
            Color: {
                get: function () {
if ( TRACE ) { TRACE( "HexDisk#Color#get", this ); }

                    return this._color;
                }
            },
            Renderers: {
                get: function () {
if ( TRACE ) { TRACE( "HexDisk#Renderers#get", this ); }

                    return this._renderers;
                }
            }
        },
        methods: {
            /*HexDisk.Initialize start.*/
            Initialize: function (color, material) {
if ( TRACE ) { TRACE( "HexDisk#Initialize", this ); }

                var $t;
                this._color = color;
                this.CacheRenderers();
                $t = Bridge.getEnumerator(this._renderers);
                try {
                    while ($t.moveNext()) {
                        var diskRenderer = $t.Current;
                        diskRenderer.sharedMaterial = material;
                        diskRenderer.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.On;
                        diskRenderer.receiveShadows = true;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexDisk.Initialize end.*/

            /*HexDisk.CacheRenderers start.*/
            CacheRenderers: function () {
if ( TRACE ) { TRACE( "HexDisk#CacheRenderers", this ); }

                var $t;
                this._renderers = this.GetComponentsInChildren$1(UnityEngine.Renderer, true);
                $t = Bridge.getEnumerator(this._renderers);
                try {
                    while ($t.moveNext()) {
                        var diskRenderer = $t.Current;
                        diskRenderer.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.On;
                        diskRenderer.receiveShadows = true;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexDisk.CacheRenderers end.*/

            /*HexDisk.SetAlpha start.*/
            SetAlpha: function (alpha) {
if ( TRACE ) { TRACE( "HexDisk#SetAlpha", this ); }

                var $t;
                if (this._renderers == null || this._renderers.length === 0) {
                    this.CacheRenderers();
                }

                $t = Bridge.getEnumerator(this._renderers);
                try {
                    while ($t.moveNext()) {
                        var diskRenderer = $t.Current;
                        if (diskRenderer.material.HasProperty$1("_Color")) {
                            var color = diskRenderer.material.color.$clone();
                            color.a = alpha;
                            diskRenderer.material.color = color.$clone();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*HexDisk.SetAlpha end.*/


        }
    });
    /*HexDisk end.*/

    /*HexStack start.*/
    Bridge.define("HexStack", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _diskPrefab: null,
            _colorMaterials: null,
            _initialColors: null,
            _diskHeight: 0,
            _diskScale: null,
            _isOfferStack: false,
            _isSolutionStack: false,
            _disks: null,
            _currentCell: null,
            _homePosition: null,
            _homeParent: null
        },
        props: {
            IsOfferStack: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#IsOfferStack#get", this ); }

                    return this._isOfferStack;
                }
            },
            IsSolutionStack: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#IsSolutionStack#get", this ); }

                    return this._isSolutionStack;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#IsEmpty#get", this ); }

                    return this._disks.Count === 0;
                }
            },
            Count: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#Count#get", this ); }

                    return this._disks.Count;
                }
            },
            CurrentCell: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#CurrentCell#get", this ); }

                    return this._currentCell;
                }
            },
            HomePosition: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#HomePosition#get", this ); }

                    return this._homePosition.$clone();
                }
            },
            HomeParent: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#HomeParent#get", this ); }

                    return this._homeParent;
                }
            },
            DiskScale: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#DiskScale#get", this ); }

                    return this._diskScale.$clone();
                }
            },
            TopColor: {
                get: function () {
if ( TRACE ) { TRACE( "HexStack#TopColor#get", this ); }

                    return this._disks.getItem(((this._disks.Count - 1) | 0)).Color;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HexStack#init", this ); }

                this._diskScale = new UnityEngine.Vector3();
                this._homePosition = new UnityEngine.Vector3();
                this._colorMaterials = new (System.Collections.Generic.List$1(UnityEngine.Material)).ctor();
                this._initialColors = new (System.Collections.Generic.List$1(HexColorId)).ctor();
                this._diskHeight = 0.18;
                this._diskScale = new pc.Vec3( 1.0, 1.5, 1.0 );
                this._disks = new (System.Collections.Generic.List$1(HexDisk)).ctor();
            }
        },
        methods: {
            /*HexStack.Configure start.*/
            Configure: function (prefab, materials, colors, offer, solution) {
if ( TRACE ) { TRACE( "HexStack#Configure", this ); }

                this._diskPrefab = prefab;
                this._colorMaterials = materials;
                this._initialColors = colors;
                this._isOfferStack = offer;
                this._isSolutionStack = solution;
            },
            /*HexStack.Configure end.*/

            /*HexStack.BuildVisuals start.*/
            BuildVisuals: function () {
if ( TRACE ) { TRACE( "HexStack#BuildVisuals", this ); }

                for (var i = (this.transform.childCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.MonoBehaviour.Destroy(this.transform.GetChild(i).gameObject);
                    } else {
                        UnityEngine.Object.DestroyImmediate(this.transform.GetChild(i).gameObject);
                    }
                }

                this._disks.clear();
                for (var i1 = 0; i1 < this._initialColors.Count; i1 = (i1 + 1) | 0) {
                    this.CreateDisk(this._initialColors.getItem(i1), i1);
                }

                this.StoreHome();
            },
            /*HexStack.BuildVisuals end.*/

            /*HexStack.InitializeRuntime start.*/
            InitializeRuntime: function () {
if ( TRACE ) { TRACE( "HexStack#InitializeRuntime", this ); }

                if (this.transform.childCount === 0 && this._initialColors.Count > 0) {
                    this.BuildVisuals();
                    return;
                }

                this._disks.clear();
                var childDisks = new (System.Collections.Generic.List$1(HexDisk)).$ctor1(this.GetComponentsInChildren$1(HexDisk, true));
                childDisks.Sort$2(function (left, right) {
                    return Bridge.compare(left.transform.localPosition.y, right.transform.localPosition.y);
                });

                for (var i = 0; i < childDisks.Count; i = (i + 1) | 0) {
                    var disk = childDisks.getItem(i);
                    var color = i < this._initialColors.Count ? this._initialColors.getItem(i) : disk.Color;
                    var material = this._colorMaterials.Count > 0 ? this._colorMaterials.getItem(color % this._colorMaterials.Count) : null;
                    if (material != null) {
                        disk.Initialize(color, material);
                    } else {
                        disk.CacheRenderers();
                    }

                    this._disks.add(disk);
                }

                this.Reflow();
                this.StoreHome();
            },
            /*HexStack.InitializeRuntime end.*/

            /*HexStack.MarkAsPlacedOnBoard start.*/
            MarkAsPlacedOnBoard: function () {
if ( TRACE ) { TRACE( "HexStack#MarkAsPlacedOnBoard", this ); }

                this._isOfferStack = false;
                this._isSolutionStack = false;
            },
            /*HexStack.MarkAsPlacedOnBoard end.*/

            /*HexStack.StoreHome start.*/
            StoreHome: function () {
if ( TRACE ) { TRACE( "HexStack#StoreHome", this ); }

                this._homeParent = this.transform.parent;
                this._homePosition = this.transform.position.$clone();
            },
            /*HexStack.StoreHome end.*/

            /*HexStack.AssignCell start.*/
            AssignCell: function (cell) {
if ( TRACE ) { TRACE( "HexStack#AssignCell", this ); }

                this._currentCell = cell;
            },
            /*HexStack.AssignCell end.*/

            /*HexStack.DetachFromCell start.*/
            DetachFromCell: function () {
if ( TRACE ) { TRACE( "HexStack#DetachFromCell", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._currentCell, null)) {
                    this._currentCell.ClearStack(this);
                    this._currentCell = null;
                }
            },
            /*HexStack.DetachFromCell end.*/

            /*HexStack.PopTopDisk start.*/
            PopTopDisk: function () {
if ( TRACE ) { TRACE( "HexStack#PopTopDisk", this ); }

                if (this._disks.Count === 0) {
                    return null;
                }

                var index = (this._disks.Count - 1) | 0;
                var disk = this._disks.getItem(index);
                this._disks.removeAt(index);
                disk.transform.SetParent(null, true);
                this.Reflow();
                return disk;
            },
            /*HexStack.PopTopDisk end.*/

            /*HexStack.PushDisk start.*/
            PushDisk: function (disk) {
if ( TRACE ) { TRACE( "HexStack#PushDisk", this ); }

                disk.transform.SetParent(this.transform, true);
                this._disks.add(disk);
                disk.transform.localPosition = this.GetDiskLocalPosition(((this._disks.Count - 1) | 0));
                disk.transform.localRotation = pc.Quat.IDENTITY.clone();
                disk.transform.localScale = this._diskScale.$clone();
            },
            /*HexStack.PushDisk end.*/

            /*HexStack.CountTopColor start.*/
            CountTopColor: function (color) {
if ( TRACE ) { TRACE( "HexStack#CountTopColor", this ); }

                var count = 0;
                for (var i = (this._disks.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this._disks.getItem(i).Color !== color) {
                        break;
                    }

                    count = (count + 1) | 0;
                }

                return count;
            },
            /*HexStack.CountTopColor end.*/

            /*HexStack.IsSingleColorStack start.*/
            IsSingleColorStack: function (expectedCount) {
if ( TRACE ) { TRACE( "HexStack#IsSingleColorStack", this ); }

                if (this._disks.Count !== expectedCount || this._disks.Count === 0) {
                    return false;
                }

                var color = this._disks.getItem(0).Color;
                for (var i = 1; i < this._disks.Count; i = (i + 1) | 0) {
                    if (this._disks.getItem(i).Color !== color) {
                        return false;
                    }
                }

                return true;
            },
            /*HexStack.IsSingleColorStack end.*/

            /*HexStack.RemoveTopDisks start.*/
            RemoveTopDisks: function (amount) {
if ( TRACE ) { TRACE( "HexStack#RemoveTopDisks", this ); }

                var removed = new (System.Collections.Generic.List$1(HexDisk)).$ctor2(amount);
                for (var i = 0; i < amount && this._disks.Count > 0; i = (i + 1) | 0) {
                    removed.add(this.PopTopDisk());
                }

                return removed;
            },
            /*HexStack.RemoveTopDisks end.*/

            /*HexStack.CopyDisksTopToBottom start.*/
            CopyDisksTopToBottom: function () {
if ( TRACE ) { TRACE( "HexStack#CopyDisksTopToBottom", this ); }

                var disks = new (System.Collections.Generic.List$1(HexDisk)).$ctor2(this._disks.Count);
                for (var i = (this._disks.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    disks.add(this._disks.getItem(i));
                }

                return disks;
            },
            /*HexStack.CopyDisksTopToBottom end.*/

            /*HexStack.GetNextDiskWorldPosition start.*/
            GetNextDiskWorldPosition: function () {
if ( TRACE ) { TRACE( "HexStack#GetNextDiskWorldPosition", this ); }

                return this.transform.TransformPoint$1(this.GetDiskLocalPosition(this._disks.Count));
            },
            /*HexStack.GetNextDiskWorldPosition end.*/

            /*HexStack.GetDiskWorldPositionAtIndex start.*/
            GetDiskWorldPositionAtIndex: function (index) {
if ( TRACE ) { TRACE( "HexStack#GetDiskWorldPositionAtIndex", this ); }

                return this.transform.TransformPoint$1(this.GetDiskLocalPosition(index));
            },
            /*HexStack.GetDiskWorldPositionAtIndex end.*/

            /*HexStack.Reflow start.*/
            Reflow: function () {
if ( TRACE ) { TRACE( "HexStack#Reflow", this ); }

                for (var i = 0; i < this._disks.Count; i = (i + 1) | 0) {
                    this._disks.getItem(i).transform.localPosition = this.GetDiskLocalPosition(i);
                    this._disks.getItem(i).transform.localRotation = pc.Quat.IDENTITY.clone();
                    this._disks.getItem(i).transform.localScale = this._diskScale.$clone();
                }
            },
            /*HexStack.Reflow end.*/

            /*HexStack.CreateDisk start.*/
            CreateDisk: function (color, index) {
if ( TRACE ) { TRACE( "HexStack#CreateDisk", this ); }

                var diskTransform = UnityEngine.Object.Instantiate(UnityEngine.Transform, this._diskPrefab, this.transform);
                diskTransform.name = "HexDisk_" + System.Enum.toString(HexColorId, color);
                diskTransform.gameObject.SetActive(true);
                diskTransform.localPosition = this.GetDiskLocalPosition(index);
                diskTransform.localRotation = pc.Quat.IDENTITY.clone();
                diskTransform.localScale = this._diskScale.$clone();

                var disk = diskTransform.GetComponent(HexDisk);
                if (UnityEngine.MonoBehaviour.op_Equality(disk, null)) {
                    disk = diskTransform.gameObject.AddComponent(HexDisk);
                }

                var material = this._colorMaterials.getItem(color % this._colorMaterials.Count);
                disk.Initialize(color, material);
                this._disks.add(disk);
            },
            /*HexStack.CreateDisk end.*/

            /*HexStack.GetDiskLocalPosition start.*/
            GetDiskLocalPosition: function (index) {
if ( TRACE ) { TRACE( "HexStack#GetDiskLocalPosition", this ); }

                return new pc.Vec3( 0.0, index * this._diskHeight, 0.0 );
            },
            /*HexStack.GetDiskLocalPosition end.*/


        }
    });
    /*HexStack end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PackshotController start.*/
    Bridge.define("PackshotController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*PackshotController.InvokeLunaStatic:static start.*/
                InvokeLunaStatic: function (typeName, methodName) {
if ( TRACE ) { TRACE( "PackshotController#InvokeLunaStatic", this ); }

                    var $t;
                    var type = PackshotController.FindType(typeName);
                    if (type == null) {
                        return;
                    }

                    var methods = Bridge.Reflection.getMembers(type, 8, 24);
                    $t = Bridge.getEnumerator(methods);
                    try {
                        while ($t.moveNext()) {
                            var method = $t.Current;
                            if (Bridge.referenceEquals(method.n, methodName)) {
                                var parameters = (method.pi || []);
                                var $arguments = System.Array.init(parameters.length, null, System.Object);
                                for (var i = 0; i < parameters.length; i = (i + 1) | 0) {
                                    $arguments[i] = (parameters[i].o || false) ? parameters[i].dv : PackshotController.GetDefaultValue(parameters[i].pt);
                                }

                                Bridge.Reflection.midel(method, null).apply(null, Bridge.unbox($arguments));
                                return;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*PackshotController.InvokeLunaStatic:static end.*/

                /*PackshotController.GetDefaultValue:static start.*/
                GetDefaultValue: function (type) {
if ( TRACE ) { TRACE( "PackshotController#GetDefaultValue", this ); }

                    return Bridge.Reflection.isValueType(type) ? Bridge.createInstance(type) : null;
                },
                /*PackshotController.GetDefaultValue:static end.*/

                /*PackshotController.FindType:static start.*/
                FindType: function (fullName) {
if ( TRACE ) { TRACE( "PackshotController#FindType", this ); }

                    var $t;
                    var type = Bridge.Reflection.getType(fullName);
                    if (type != null) {
                        return type;
                    }

                    $t = Bridge.getEnumerator(System.AppDomain.getAssemblies());
                    try {
                        while ($t.moveNext()) {
                            var assembly = $t.Current;
                            type = Bridge.Reflection.getType(fullName, assembly);
                            if (type != null) {
                                return type;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    return null;
                },
                /*PackshotController.FindType:static end.*/


            }
        },
        fields: {
            _group: null,
            _playNowButton: null,
            _playButtonView: null,
            _fadeDuration: 0,
            _shown: false,
            _installRequested: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PackshotController#init", this ); }

                this._fadeDuration = 0.45;
            }
        },
        methods: {
            /*PackshotController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PackshotController#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._playNowButton, null)) {
                    this._playNowButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.InstallFullGame));
                }
            },
            /*PackshotController.Awake end.*/

            /*PackshotController.Configure start.*/
            Configure: function (groupReference, buttonReference) {
if ( TRACE ) { TRACE( "PackshotController#Configure", this ); }

                this._group = groupReference;
                this._playNowButton = buttonReference;
                this._playButtonView = UnityEngine.MonoBehaviour.op_Inequality(this._playNowButton, null) ? this._playNowButton.GetComponent(PlayButtonView) : null;
                if (UnityEngine.MonoBehaviour.op_Inequality(this._playNowButton, null)) {
                    this._playNowButton.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.InstallFullGame));
                    this._playNowButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.InstallFullGame));
                }
            },
            /*PackshotController.Configure end.*/

            /*PackshotController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PackshotController#Update", this ); }

                if (this._shown && UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.InstallFullGame();
                }
            },
            /*PackshotController.Update end.*/

            /*PackshotController.HideInstant start.*/
            HideInstant: function () {
if ( TRACE ) { TRACE( "PackshotController#HideInstant", this ); }

                this._shown = false;
                this._installRequested = false;
                if (UnityEngine.MonoBehaviour.op_Equality(this._group, null)) {
                    return;
                }

                this._group.alpha = 0.0;
                this._group.blocksRaycasts = false;
                this._group.interactable = false;
                UnityEngine.MonoBehaviour.op_Inequality(this._playButtonView, null) ? this._playButtonView.Stop() : null;
            },
            /*PackshotController.HideInstant end.*/

            /*PackshotController.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "PackshotController#Show", this ); }

                this._shown = true;
                this.gameObject.SetActive(true);
                if (UnityEngine.MonoBehaviour.op_Inequality(this._group, null)) {
                    this._group.blocksRaycasts = true;
                    this._group.interactable = true;
                    DG.Tweening.DOTweenModuleUI.DOFade(this._group, 1.0, this._fadeDuration);
                }

                UnityEngine.MonoBehaviour.op_Inequality(this._playButtonView, null) ? this._playButtonView.Play() : null;
                this.GameEnded();
            },
            /*PackshotController.Show end.*/

            /*PackshotController.GameEnded start.*/
            GameEnded: function () {
if ( TRACE ) { TRACE( "PackshotController#GameEnded", this ); }

                PackshotController.InvokeLunaStatic("Luna.Unity.LifeCycle", "GameEnded");
            },
            /*PackshotController.GameEnded end.*/

            /*PackshotController.InstallFullGame start.*/
            InstallFullGame: function () {
if ( TRACE ) { TRACE( "PackshotController#InstallFullGame", this ); }

                if (this._installRequested) {
                    return;
                }

                this._installRequested = true;
                PackshotController.InvokeLunaStatic("Luna.Unity.Playable", "InstallFullGame");
            },
            /*PackshotController.InstallFullGame end.*/


        }
    });
    /*PackshotController end.*/

    /*PlayButtonView start.*/
    Bridge.define("PlayButtonView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _target: null,
            _pulseScale: 0,
            _pulseDuration: 0,
            _pulse: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayButtonView#init", this ); }

                this._pulseScale = 1.08;
                this._pulseDuration = 0.58;
            }
        },
        methods: {
            /*PlayButtonView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayButtonView#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this._target, null)) {
                    this._target = Bridge.cast(this.transform, UnityEngine.RectTransform);
                }
            },
            /*PlayButtonView.Awake end.*/

            /*PlayButtonView.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PlayButtonView#OnDisable", this ); }

                this.Stop();
            },
            /*PlayButtonView.OnDisable end.*/

            /*PlayButtonView.Play start.*/
            Play: function () {
if ( TRACE ) { TRACE( "PlayButtonView#Play", this ); }

                if (UnityEngine.Component.op_Equality(this._target, null)) {
                    return;
                }

                this.Stop();
                this._target.localScale = new pc.Vec3( 1, 1, 1 );
                this._pulse = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Append(this._pulse, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this._target, this._pulseScale, this._pulseDuration), DG.Tweening.Ease.InOutSine));
                DG.Tweening.TweenSettingsExtensions.Append(this._pulse, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this._target, 1.0, this._pulseDuration), DG.Tweening.Ease.InOutSine));
                DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Sequence, this._pulse, -1);
            },
            /*PlayButtonView.Play end.*/

            /*PlayButtonView.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "PlayButtonView#Stop", this ); }

                this._pulse != null ? DG.Tweening.TweenExtensions.Kill(this._pulse) : null;
                this._pulse = null;
                if (UnityEngine.Component.op_Inequality(this._target, null)) {
                    this._target.localScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*PlayButtonView.Stop end.*/


        }
    });
    /*PlayButtonView end.*/

    /*ReactionResolver start.*/
    Bridge.define("ReactionResolver", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                ANIMATION_WAIT_TIMEOUT_PADDING: 0,
                PUNCH_SCALE_DURATION: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "ReactionResolver#init", this ); }

                    this.ANIMATION_WAIT_TIMEOUT_PADDING = 0.25;
                    this.PUNCH_SCALE_DURATION = 0.08;
                }
            }
        },
        fields: {
            _vanishFxPrefab: null,
            _baseFlyDuration: 0,
            _vanishDiskScaleDuration: 0,
            _vanishDiskDelay: 0,
            _speedIncrease: 0,
            _maxReactionSpeedMultiplier: 0,
            _diskLaunchInterval: 0,
            _edgePivotOffset: 0,
            _rollDegrees: 0,
            _vanishStackSize: 0,
            _cellsToCheck: null,
            _board: null,
            _reactionStep: 0,
            LastResolveHadReaction: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ReactionResolver#init", this ); }

                this._baseFlyDuration = 0.38;
                this._vanishDiskScaleDuration = 0.22;
                this._vanishDiskDelay = 0.035;
                this._speedIncrease = 1.18;
                this._maxReactionSpeedMultiplier = 2.2;
                this._diskLaunchInterval = 0.09;
                this._edgePivotOffset = 0.42;
                this._rollDegrees = 205.0;
                this._vanishStackSize = 10;
                this._cellsToCheck = new (System.Collections.Generic.Stack$1(HexCell)).ctor();
            }
        },
        methods: {
            /*ReactionResolver.Initialize start.*/
            Initialize: function (boardReference) {
if ( TRACE ) { TRACE( "ReactionResolver#Initialize", this ); }

                this._board = boardReference;
            },
            /*ReactionResolver.Initialize end.*/

            /*ReactionResolver.Configure start.*/
            Configure: function (fxPrefab, maxSpeedMultiplier) {
if ( TRACE ) { TRACE( "ReactionResolver#Configure", this ); }

                this._vanishFxPrefab = fxPrefab;
                this._maxReactionSpeedMultiplier = maxSpeedMultiplier;
            },
            /*ReactionResolver.Configure end.*/

            /*ReactionResolver.MergeFrom start.*/
            MergeFrom: function (placedCell) {
if ( TRACE ) { TRACE( "ReactionResolver#MergeFrom", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    cell,
                    moved,
                    $t,
                    neighbor,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._reactionStep = 0;
                                        this.LastResolveHadReaction = false;
                                        this._cellsToCheck.Clear();
                                        this.PushIfCheckable(placedCell);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( this._cellsToCheck.Count > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 2: {
                                    cell = this._cellsToCheck.Pop();
                                        if (UnityEngine.MonoBehaviour.op_Equality(cell, null) || UnityEngine.MonoBehaviour.op_Equality(cell.CurrentStack, null) || cell.CurrentStack.IsEmpty) {
                                            $step = 1;
                                            continue;
                                        }

                                        moved = false;
                                        $t = Bridge.getEnumerator(this._board.GetNeighbors(cell));
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ($t.moveNext()) {
                                            neighbor = $t.Current;
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 8;
                                    continue;
                                }
                                case 4: {
                                    if (this.CanMerge(cell, neighbor)) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    moved = true;
                                        $enumerator.current = this.MergeStacks(cell, neighbor);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this.PushIfCheckable(neighbor);
                                        this.PushIfCheckable(cell);
                                        $step = 8;
                                        continue;
                                }
                                case 7: {
                                    $step = 3;
                                    continue;
                                }
                                case 8: {
                                    if (moved) {
                                            $step = 9;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 9: {
                                    $enumerator.current = null;
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 12: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ReactionResolver.MergeFrom end.*/

            /*ReactionResolver.CleanFullStacks start.*/
            CleanFullStacks: function () {
if ( TRACE ) { TRACE( "ReactionResolver#CleanFullStacks", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    stacksToVanish,
                    cells,
                    $t,
                    cell,
                    stack,
                    runningAnimations,
                    duration,
                    $t1,
                    vanishingStack,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    stacksToVanish = new (System.Collections.Generic.List$1(ReactionResolver.VanishingStack)).ctor();
                                        cells = new (System.Collections.Generic.List$1(HexCell)).$ctor1(this._board.Cells);
                                        $t = Bridge.getEnumerator(cells);
                                        try {
                                            while ($t.moveNext()) {
                                                cell = $t.Current;
                                                stack = cell.CurrentStack;
                                                if (UnityEngine.MonoBehaviour.op_Inequality(stack, null) && stack.IsSingleColorStack(this._vanishStackSize)) {
                                                    stacksToVanish.add(new ReactionResolver.VanishingStack.$ctor1(cell, stack));
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        runningAnimations = stacksToVanish.Count;
                                        duration = this.GetScaledDuration(this._vanishDiskScaleDuration);
                                        $t1 = Bridge.getEnumerator(stacksToVanish);
                                        try {
                                            while ($t1.moveNext()) {
                                                vanishingStack = $t1.Current;
                                                this.VanishStack(vanishingStack.Cell, vanishingStack.Stack, duration, function () {
                                                    Bridge.identity(runningAnimations, ((runningAnimations = (runningAnimations - 1) | 0)));
                                                });
                                                this._reactionStep = (this._reactionStep + 1) | 0;
                                            }
                                        } finally {
                                            if (Bridge.is($t1, System.IDisposable)) {
                                                $t1.System$IDisposable$Dispose();
                                            }
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( runningAnimations > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ReactionResolver.CleanFullStacks end.*/

            /*ReactionResolver.CanMerge start.*/
            CanMerge: function (receiverCell, donorCell) {
if ( TRACE ) { TRACE( "ReactionResolver#CanMerge", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(receiverCell, null) || UnityEngine.MonoBehaviour.op_Equality(donorCell, null)) {
                    return false;
                }

                var receiver = receiverCell.CurrentStack;
                var donor = donorCell.CurrentStack;
                if (UnityEngine.MonoBehaviour.op_Equality(receiver, null) || UnityEngine.MonoBehaviour.op_Equality(donor, null) || receiver.IsEmpty || donor.IsEmpty) {
                    return false;
                }

                return this.GetMergeDiskCount(receiver, donor) > 0;
            },
            /*ReactionResolver.CanMerge end.*/

            /*ReactionResolver.MergeStacks start.*/
            MergeStacks: function (receiverCell, donorCell) {
if ( TRACE ) { TRACE( "ReactionResolver#MergeStacks", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    receiver,
                    donor,
                    color,
                    reservedReceiverCount,
                    disksToMove,
                    movedDisks,
                    runningAnimations,
                    animationWaitTimeout,
                    disk,
                    duration,
                    target,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    receiver = receiverCell.CurrentStack;
                                        donor = donorCell.CurrentStack;
                                        color = receiver.TopColor;
                                        reservedReceiverCount = receiver.Count;
                                        disksToMove = this.GetMergeDiskCount(receiver, donor);
                                        movedDisks = 0;
                                        runningAnimations = 0;
                                        animationWaitTimeout = disksToMove * (this._diskLaunchInterval + this.GetScaledDuration(this._baseFlyDuration) + ReactionResolver.PUNCH_SCALE_DURATION) + ReactionResolver.ANIMATION_WAIT_TIMEOUT_PADDING;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( !donor.IsEmpty && donor.TopColor === color && movedDisks < disksToMove ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 2: {
                                    this.LastResolveHadReaction = true;
                                        disk = donor.PopTopDisk();
                                        duration = this.GetScaledDuration(this._baseFlyDuration);
                                        target = receiver.GetDiskWorldPositionAtIndex(reservedReceiverCount);
                                        runningAnimations = (runningAnimations + 1) | 0;
                                        this.AnimateRollingDisk(disk, receiver, target.$clone(), duration, function () {
                                            Bridge.identity(runningAnimations, ((runningAnimations = (runningAnimations - 1) | 0)));
                                        });

                                        reservedReceiverCount = (reservedReceiverCount + 1) | 0;
                                        movedDisks = (movedDisks + 1) | 0;
                                        this._reactionStep = (this._reactionStep + 1) | 0;

                                        if (!donor.IsEmpty && donor.TopColor === color && movedDisks < disksToMove) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this._diskLaunchInterval);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 6: {
                                    if ( runningAnimations > 0 && animationWaitTimeout > 0.0 ) {
                                            $step = 7;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 7: {
                                    animationWaitTimeout -= UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    
                                        $step = 6;
                                        continue;
                                }
                                case 9: {
                                    if (donor.IsEmpty) {
                                            donorCell.ClearStack(donor);
                                            UnityEngine.MonoBehaviour.Destroy(donor.gameObject);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ReactionResolver.MergeStacks end.*/

            /*ReactionResolver.GetMergeDiskCount start.*/
            GetMergeDiskCount: function (receiver, donor) {
if ( TRACE ) { TRACE( "ReactionResolver#GetMergeDiskCount", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(receiver, null) || UnityEngine.MonoBehaviour.op_Equality(donor, null) || receiver.IsEmpty || donor.IsEmpty) {
                    return 0;
                }

                if (receiver.Count >= this._vanishStackSize || donor.IsSingleColorStack(this._vanishStackSize)) {
                    return 0;
                }

                var color = receiver.TopColor;
                if (donor.TopColor !== color) {
                    return 0;
                }

                var donorTopCount = donor.CountTopColor(color);
                var freeSpace = (this._vanishStackSize - receiver.Count) | 0;
                var movableCount = UnityEngine.Mathf.Min(donorTopCount, freeSpace);
                if (movableCount <= 0) {
                    return 0;
                }

                if (movableCount === donorTopCount) {
                    return movableCount;
                }

                var receiverWillBecomeSingleColorStack = receiver.CountTopColor(color) === receiver.Count && ((receiver.Count + movableCount) | 0) === this._vanishStackSize;
                return receiverWillBecomeSingleColorStack ? movableCount : 0;
            },
            /*ReactionResolver.GetMergeDiskCount end.*/

            /*ReactionResolver.AnimateRollingDisk start.*/
            AnimateRollingDisk: function (disk, receiver, target, duration, onComplete) {
if ( TRACE ) { TRACE( "ReactionResolver#AnimateRollingDisk", this ); }

                var start = disk.transform.position.$clone();
                var direction = target.$clone().sub( start );
                direction.y = 0.0;
                if (direction.lengthSq() < 0.001) {
                    direction = new pc.Vec3( 0, 0, 1 );
                }

                direction.normalize();
                var rotationAxis = new pc.Vec3().cross( pc.Vec3.UP.clone(), direction ).clone().normalize().$clone();
                var startPivot = start.$clone().add( direction.$clone().clone().scale( this._edgePivotOffset ) );
                var targetPivot = target.$clone().sub( direction.$clone().clone().scale( this._edgePivotOffset ) );
                var midPivot = (startPivot.$clone().add( targetPivot )).clone().scale( 0.5 ).add( pc.Vec3.UP.clone().clone().scale( 0.72 ) );

                var pivotObject = new UnityEngine.GameObject.$ctor2("RollingHexPivot");
                var pivot = pivotObject.transform;
                pivot.position = startPivot.$clone();
                pivot.rotation = pc.Quat.IDENTITY.clone();
                disk.transform.SetParent(pivot, true);

                var roll = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Append(roll, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.ShortcutExtensions.DOPath$1(pivot, System.Array.init([startPivot.$clone(), midPivot.$clone(), targetPivot.$clone()], UnityEngine.Vector3), duration, DG.Tweening.PathType.CatmullRom), DG.Tweening.Ease.InOutSine));
                DG.Tweening.TweenSettingsExtensions.Join(roll, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.DOVirtual.Float(0.0, this._rollDegrees, duration, function (angle) {
                    if (UnityEngine.Component.op_Inequality(pivot, null)) {
                        pivot.rotation = new pc.Quat().setFromAxisAngle( rotationAxis, angle );
                    }
                }), DG.Tweening.Ease.InOutSine));
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, roll, function () {
                    if (UnityEngine.MonoBehaviour.op_Inequality(disk, null)) {
                        disk.transform.SetParent(null, true);
                        receiver.PushDisk(disk);
                        var diskScale = receiver.DiskScale.$clone();
                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Tweener, DG.Tweening.ShortcutExtensions.DOPunchScale(disk.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( 0.08 ), ReactionResolver.PUNCH_SCALE_DURATION, 1, 0.4), function () {
                            disk.transform.localScale = diskScale.$clone();
                        });
                    } else {
                        !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                    }

                    if (UnityEngine.GameObject.op_Inequality(pivotObject, null)) {
                        UnityEngine.MonoBehaviour.Destroy(pivotObject);
                    }
                });
            },
            /*ReactionResolver.AnimateRollingDisk end.*/

            /*ReactionResolver.VanishStack start.*/
            VanishStack: function (cell, stack, duration, onComplete) {
if ( TRACE ) { TRACE( "ReactionResolver#VanishStack", this ); }

                var vanishPosition = stack.transform.position.$clone();
                var disks = stack.CopyDisksTopToBottom();
                var vanish = DG.Tweening.DOTween.Sequence();

                for (var i = 0; i < disks.Count; i = (i + 1) | 0) {
                    var disk = disks.getItem(i);
                    if (UnityEngine.MonoBehaviour.op_Inequality(disk, null)) {
                        DG.Tweening.TweenSettingsExtensions.Insert(vanish, i * this._vanishDiskDelay, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(disk.transform, pc.Vec3.ZERO.clone(), duration), DG.Tweening.Ease.Linear));
                    }
                }
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, vanish, Bridge.fn.bind(this, function () {
                    cell.ClearStack(stack);

                    if (UnityEngine.MonoBehaviour.op_Inequality(stack, null)) {
                        UnityEngine.MonoBehaviour.Destroy(stack.gameObject);
                    }

                    this.PlayVanishFx(vanishPosition);
                    !Bridge.staticEquals(onComplete, null) ? onComplete() : null;
                }));
            },
            /*ReactionResolver.VanishStack end.*/

            /*ReactionResolver.PlayVanishFx start.*/
            PlayVanishFx: function (vanishPosition) {
if ( TRACE ) { TRACE( "ReactionResolver#PlayVanishFx", this ); }

                if (UnityEngine.GameObject.op_Equality(this._vanishFxPrefab, null)) {
                    return;
                }

                var fx = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this._vanishFxPrefab, vanishPosition.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.35 ) ), pc.Quat.IDENTITY.clone());
                fx.SetActive(true);
                var particles = fx.GetComponent(UnityEngine.ParticleSystem);
                if (UnityEngine.Component.op_Inequality(particles, null)) {
                    particles.Play$1(true);
                }

                this.Destroy(fx, 1.1);
            },
            /*ReactionResolver.PlayVanishFx end.*/

            /*ReactionResolver.PushIfCheckable start.*/
            PushIfCheckable: function (cell) {
if ( TRACE ) { TRACE( "ReactionResolver#PushIfCheckable", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(cell, null) && UnityEngine.MonoBehaviour.op_Inequality(cell.CurrentStack, null) && !cell.CurrentStack.IsEmpty) {
                    this._cellsToCheck.Push(cell);
                }
            },
            /*ReactionResolver.PushIfCheckable end.*/

            /*ReactionResolver.GetScaledDuration start.*/
            GetScaledDuration: function (baseDuration) {
if ( TRACE ) { TRACE( "ReactionResolver#GetScaledDuration", this ); }

                var speed = UnityEngine.Mathf.Min(Math.pow(this._speedIncrease, this._reactionStep), this._maxReactionSpeedMultiplier);
                return baseDuration / speed;
            },
            /*ReactionResolver.GetScaledDuration end.*/


        }
    });
    /*ReactionResolver end.*/

    /*ReactionResolver+VanishingStack start.*/
    Bridge.define("ReactionResolver.VanishingStack", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "ReactionResolver.VanishingStack#getDefaultValue", this ); }
 return new ReactionResolver.VanishingStack(); }
            }
        },
        fields: {
            Cell: null,
            Stack: null
        },
        ctors: {
            $ctor1: function (cell, stack) {
if ( TRACE ) { TRACE( "ReactionResolver.VanishingStack#$ctor1", this ); }

                this.$initialize();
                this.Cell = cell;
                this.Stack = stack;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "ReactionResolver.VanishingStack#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "ReactionResolver.VanishingStack#getHashCode", this ); }

                var h = Bridge.addHash([5256284307, this.Cell, this.Stack]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "ReactionResolver.VanishingStack#equals", this ); }

                if (!Bridge.is(o, ReactionResolver.VanishingStack)) {
                    return false;
                }
                return Bridge.equals(this.Cell, o.Cell) && Bridge.equals(this.Stack, o.Stack);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "ReactionResolver.VanishingStack#$clone", this ); }

                var s = to || new ReactionResolver.VanishingStack();
                s.Cell = this.Cell;
                s.Stack = this.Stack;
                return s;
            }
        }
    });
    /*ReactionResolver+VanishingStack end.*/

    /*TutorialController start.*/
    Bridge.define("TutorialController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _hand: null,
            _canvas: null,
            _gameCamera: null,
            _sourceStack: null,
            _replayDelay: 0,
            _pressOffset: null,
            _releaseOffset: null,
            _board: null,
            _loop: null,
            _replayRoutine: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TutorialController#init", this ); }

                this._pressOffset = new UnityEngine.Vector2();
                this._releaseOffset = new UnityEngine.Vector2();
                this._replayDelay = 1.8;
                this._pressOffset = new pc.Vec2( 0.0, 54.0 );
                this._releaseOffset = new pc.Vec2( 0.0, 64.0 );
            }
        },
        methods: {
            /*TutorialController.Initialize start.*/
            Initialize: function (boardReference) {
if ( TRACE ) { TRACE( "TutorialController#Initialize", this ); }

                this._board = boardReference;
                if (UnityEngine.Component.op_Equality(this._gameCamera, null)) {
                    this._gameCamera = UnityEngine.Camera.main;
                }
            },
            /*TutorialController.Initialize end.*/

            /*TutorialController.Configure start.*/
            Configure: function (handReference, canvasReference, cameraReference, sourceReference) {
if ( TRACE ) { TRACE( "TutorialController#Configure", this ); }

                this._hand = handReference;
                this._canvas = canvasReference;
                this._gameCamera = cameraReference;
                this._sourceStack = sourceReference;
            },
            /*TutorialController.Configure end.*/

            /*TutorialController.Play start.*/
            Play: function () {
if ( TRACE ) { TRACE( "TutorialController#Play", this ); }

                var tutorialCell = this._board.GetTutorialCell();
                if (UnityEngine.Component.op_Equality(this._hand, null) || UnityEngine.Component.op_Equality(this._sourceStack, null) || UnityEngine.MonoBehaviour.op_Equality(tutorialCell, null)) {
                    return;
                }

                if (this._replayRoutine != null) {
                    this.StopCoroutine$2(this._replayRoutine);
                    this._replayRoutine = null;
                }

                this._loop != null ? DG.Tweening.TweenExtensions.Kill(this._loop) : null;
                this._hand.gameObject.SetActive(true);
                var from = this.WorldToCanvas(this._sourceStack.position.$clone().add( new pc.Vec3( 0.2, 0.2, 0.0 ) ));
                var to = this.WorldToCanvas(tutorialCell.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.1 ) ));
                var hoverFrom = from.$clone().add( this._pressOffset );
                var hoverTo = to.$clone().add( this._releaseOffset );
                this._hand.anchoredPosition = hoverFrom.$clone();
                this._hand.localScale = new pc.Vec3( 1, 1, 1 );

                this._loop = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Append(this._loop, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this._hand, from.$clone(), 0.18), DG.Tweening.Ease.OutQuad));
                DG.Tweening.TweenSettingsExtensions.Join(this._loop, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this._hand, 0.88, 0.18), DG.Tweening.Ease.OutQuad));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(this._loop, 0.08);
                DG.Tweening.TweenSettingsExtensions.Append(this._loop, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this._hand, to.$clone(), 0.78), DG.Tweening.Ease.InOutSine));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(this._loop, 0.08);
                DG.Tweening.TweenSettingsExtensions.Append(this._loop, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this._hand, hoverTo.$clone(), 0.18), DG.Tweening.Ease.OutQuad));
                DG.Tweening.TweenSettingsExtensions.Join(this._loop, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this._hand, 1.0, 0.18), DG.Tweening.Ease.OutBack));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(this._loop, 0.28);
                DG.Tweening.TweenSettingsExtensions.Append(this._loop, DG.Tweening.DOTweenModuleUI.DOAnchorPos(this._hand, hoverFrom.$clone(), 0.01));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(this._loop, 0.25);
                DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Sequence, this._loop, -1);
            },
            /*TutorialController.Play end.*/

            /*TutorialController.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "TutorialController#Hide", this ); }

                this._loop != null ? DG.Tweening.TweenExtensions.Kill(this._loop) : null;
                if (this._replayRoutine != null) {
                    this.StopCoroutine$2(this._replayRoutine);
                    this._replayRoutine = null;
                }

                if (UnityEngine.Component.op_Inequality(this._hand, null)) {
                    this._hand.gameObject.SetActive(false);
                }
            },
            /*TutorialController.Hide end.*/

            /*TutorialController.ScheduleReplay start.*/
            ScheduleReplay: function () {
if ( TRACE ) { TRACE( "TutorialController#ScheduleReplay", this ); }

                if (this._replayRoutine != null) {
                    this.StopCoroutine$2(this._replayRoutine);
                }

                this._replayRoutine = this.StartCoroutine$1(this.ReplayAfterDelay());
            },
            /*TutorialController.ScheduleReplay end.*/

            /*TutorialController.ReplayAfterDelay start.*/
            ReplayAfterDelay: function () {
if ( TRACE ) { TRACE( "TutorialController#ReplayAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this._replayDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Play();
                                        this._replayRoutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialController.ReplayAfterDelay end.*/

            /*TutorialController.WorldToCanvas start.*/
            WorldToCanvas: function (world) {
if ( TRACE ) { TRACE( "TutorialController#WorldToCanvas", this ); }

                var canvasRect = Bridge.cast(this._canvas.transform, UnityEngine.RectTransform);
                var screenPoint = UnityEngine.RectTransformUtility.WorldToScreenPoint(this._gameCamera, world);
                var local = { v : new UnityEngine.Vector2() };
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(canvasRect, screenPoint, this._canvas.worldCamera, local);
                return local.v.$clone();
            },
            /*TutorialController.WorldToCanvas end.*/


        }
    });
    /*TutorialController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections.Generic","UnityEngine","System.Collections","UnityEngine.UI","DG.Tweening","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*BoardController start.*/
    $m("BoardController", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BuildNeighborCache","t":8,"sn":"BuildNeighborCache","rt":$n[0].Void},{"a":1,"n":"BuildWorldNeighborCache","t":8,"sn":"BuildWorldNeighborCache","rt":$n[0].Void},{"a":2,"n":"GetFirstEmptyCell","t":8,"sn":"GetFirstEmptyCell","rt":HexCell},{"a":1,"n":"GetGridNeighborDistance","t":8,"pi":[{"n":"cell","pt":HexCell,"ps":0}],"sn":"GetGridNeighborDistance","rt":$n[0].Single,"p":[HexCell],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetLowestEmptyCell","t":8,"sn":"GetLowestEmptyCell","rt":HexCell},{"a":2,"n":"GetNeighbors","t":8,"pi":[{"n":"cell","pt":HexCell,"ps":0}],"sn":"GetNeighbors","rt":$n[1].List$1(HexCell),"p":[HexCell]},{"a":2,"n":"GetTutorialCell","t":8,"sn":"GetTutorialCell","rt":HexCell},{"a":1,"n":"GetWorldNeighborDistance","t":8,"pi":[{"n":"cell","pt":HexCell,"ps":0}],"sn":"GetWorldNeighborDistance","rt":$n[0].Single,"p":[HexCell],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":1,"n":"SpawnInitialStack","t":8,"pi":[{"n":"cell","pt":HexCell,"ps":0}],"sn":"SpawnInitialStack","rt":$n[0].Void,"p":[HexCell]},{"a":2,"n":"TryGetDropCell","t":8,"pi":[{"n":"worldPosition","pt":$n[2].Vector3,"ps":0},{"n":"stack","pt":HexStack,"ps":1},{"n":"cell","out":true,"pt":HexCell,"ps":2}],"sn":"TryGetDropCell","rt":$n[0].Boolean,"p":[$n[2].Vector3,HexStack,HexCell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Cells","t":16,"rt":$n[1].IReadOnlyList$1(HexCell),"g":{"a":2,"n":"get_Cells","t":8,"rt":$n[1].IReadOnlyList$1(HexCell),"fg":"Cells"},"fn":"Cells"},{"a":1,"n":"CandidateNeighborOffsets","is":true,"t":4,"rt":System.Array.type(UnityEngine.Vector3Int),"sn":"CandidateNeighborOffsets","ro":true},{"a":1,"n":"NEIGHBOR_DISTANCE_TOLERANCE","is":true,"t":4,"rt":$n[0].Single,"sn":"NEIGHBOR_DISTANCE_TOLERANCE","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_cellByGridPosition","t":4,"rt":$n[1].Dictionary$2(UnityEngine.Vector3Int,HexCell),"sn":"_cellByGridPosition","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cells","t":4,"rt":$n[1].List$1(HexCell),"sn":"_cells"},{"at":[new UnityEngine.HeaderAttribute("Parameters"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_colorMaterials","t":4,"rt":$n[1].List$1(UnityEngine.Material),"sn":"_colorMaterials"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_diskPrefab","t":4,"rt":$n[2].Transform,"sn":"_diskPrefab"},{"at":[new UnityEngine.HeaderAttribute("Components"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_grid","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Grid' ) ),"sn":"_grid"},{"a":1,"n":"_neighborsByCell","t":4,"rt":$n[1].Dictionary$2(HexCell,System.Collections.Generic.List$1(HexCell)),"sn":"_neighborsByCell","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_snapRadius","t":4,"rt":$n[0].Single,"sn":"_snapRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Prefabs"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_stackPrefab","t":4,"rt":HexStack,"sn":"_stackPrefab"}]}; }, $n);
    /*BoardController end.*/

    /*CellHighlightView start.*/
    $m("CellHighlightView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CacheRenderer","t":8,"sn":"CacheRenderer","rt":$n[0].Void},{"a":2,"n":"SetHighlighted","t":8,"pi":[{"n":"isHighlighted","pt":$n[0].Boolean,"ps":0}],"sn":"SetHighlighted","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"SetMaterial","t":8,"pi":[{"n":"material","pt":$n[2].Material,"ps":0}],"sn":"SetMaterial","rt":$n[0].Void,"p":[$n[2].Material]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_highlightMaterial","t":4,"rt":$n[2].Material,"sn":"_highlightMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_normalMaterial","t":4,"rt":$n[2].Material,"sn":"_normalMaterial"},{"a":1,"n":"_renderer","t":4,"rt":$n[2].Renderer,"sn":"_renderer"}]}; }, $n);
    /*CellHighlightView end.*/

    /*DragController start.*/
    $m("DragController", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClearHighlightedCell","t":8,"sn":"ClearHighlightedCell","rt":$n[0].Void},{"a":1,"n":"EndDrag","t":8,"sn":"EndDrag","rt":$n[0].Void},{"a":1,"n":"GetWorldPoint","t":8,"pi":[{"n":"screenPosition","pt":$n[2].Vector3,"ps":0}],"sn":"GetWorldPoint","rt":$n[2].Vector3,"p":[$n[2].Vector3]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"controller","pt":GameController,"ps":0},{"n":"cameraReference","pt":$n[2].Camera,"ps":1},{"n":"boardReference","pt":BoardController,"ps":2}],"sn":"Initialize","rt":$n[0].Void,"p":[GameController,$n[2].Camera,BoardController]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"SetHighlightedCell","t":8,"pi":[{"n":"cell","pt":HexCell,"ps":0}],"sn":"SetHighlightedCell","rt":$n[0].Void,"p":[HexCell]},{"a":1,"n":"TryBeginDrag","t":8,"pi":[{"n":"screenPosition","pt":$n[2].Vector3,"ps":0}],"sn":"TryBeginDrag","rt":$n[0].Void,"p":[$n[2].Vector3]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateDrag","t":8,"pi":[{"n":"screenPosition","pt":$n[2].Vector3,"ps":0}],"sn":"UpdateDrag","rt":$n[0].Void,"p":[$n[2].Vector3]},{"a":1,"n":"UpdateHighlightedCell","t":8,"sn":"UpdateHighlightedCell","rt":$n[0].Void},{"a":1,"n":"_board","t":4,"rt":BoardController,"sn":"_board"},{"a":1,"n":"_dragOffset","t":4,"rt":$n[2].Vector3,"sn":"_dragOffset"},{"a":1,"n":"_dragPlane","t":4,"rt":$n[2].Plane,"sn":"_dragPlane"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_draggableMask","t":4,"rt":$n[2].LayerMask,"sn":"_draggableMask"},{"a":1,"n":"_draggedStack","t":4,"rt":HexStack,"sn":"_draggedStack"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_followLerp","t":4,"rt":$n[0].Single,"sn":"_followLerp","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_gameCamera","t":4,"rt":$n[2].Camera,"sn":"_gameCamera"},{"a":1,"n":"_gameController","t":4,"rt":GameController,"sn":"_gameController"},{"a":1,"n":"_highlightedCell","t":4,"rt":HexCell,"sn":"_highlightedCell"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_liftHeight","t":4,"rt":$n[0].Single,"sn":"_liftHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_pointerDown","t":4,"rt":$n[0].Boolean,"sn":"_pointerDown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DragController end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Configure","t":8,"pi":[{"n":"cameraReference","pt":$n[2].Camera,"ps":0},{"n":"boardReference","pt":BoardController,"ps":1},{"n":"dragReference","pt":DragController,"ps":2},{"n":"resolverReference","pt":ReactionResolver,"ps":3},{"n":"tutorialReference","pt":TutorialController,"ps":4},{"n":"packshotReference","pt":PackshotController,"ps":5}],"sn":"Configure","rt":$n[0].Void,"p":[$n[2].Camera,BoardController,DragController,ReactionResolver,TutorialController,PackshotController]},{"a":1,"n":"EnterState","t":8,"pi":[{"n":"nextState","pt":GameState,"ps":0}],"sn":"EnterState","rt":$n[0].Void,"p":[GameState]},{"a":1,"n":"HasRemainingOfferStacks","t":8,"sn":"HasRemainingOfferStacks","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"HasRequiredReferences","t":8,"sn":"HasRequiredReferences","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"InitializeStacks","t":8,"sn":"InitializeStacks","rt":$n[0].Void},{"a":2,"n":"NotifyDragCanceled","t":8,"sn":"NotifyDragCanceled","rt":$n[0].Void},{"a":2,"n":"NotifyStackGrabbed","t":8,"sn":"NotifyStackGrabbed","rt":$n[0].Void},{"a":2,"n":"NotifyStackPlaced","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0},{"n":"cell","pt":HexCell,"ps":1}],"sn":"NotifyStackPlaced","rt":$n[0].Void,"p":[HexStack,HexCell]},{"a":1,"n":"RunTurn","t":8,"pi":[{"n":"placedStack","pt":HexStack,"ps":0},{"n":"placedCell","pt":HexCell,"ps":1}],"sn":"RunTurn","rt":$n[3].IEnumerator,"p":[HexStack,HexCell]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"IsInputEnabled","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsInputEnabled","t":8,"rt":$n[0].Boolean,"fg":"IsInputEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsInputEnabled"},{"a":2,"n":"State","t":16,"rt":GameState,"g":{"a":2,"n":"get_State","t":8,"rt":GameState,"fg":"State","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},"s":{"a":1,"n":"set_State","t":8,"p":[GameState],"rt":$n[0].Void,"fs":"State"},"fn":"State"},{"a":1,"n":"__Property__Initializer__State","t":4,"rt":GameState,"sn":"__Property__Initializer__State","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_board","t":4,"rt":BoardController,"sn":"_board"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_dragController","t":4,"rt":DragController,"sn":"_dragController"},{"at":[new UnityEngine.HeaderAttribute("Scene"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gameCamera","t":4,"rt":$n[2].Camera,"sn":"_gameCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_packshot","t":4,"rt":PackshotController,"sn":"_packshot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_reactionResolver","t":4,"rt":ReactionResolver,"sn":"_reactionResolver"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tutorial","t":4,"rt":TutorialController,"sn":"_tutorial"},{"a":1,"n":"_tutorialCompleted","t":4,"rt":$n[0].Boolean,"sn":"_tutorialCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<State>k__BackingField","t":4,"rt":GameState,"sn":"State","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}}]}; }, $n);
    /*GameController end.*/

    /*GameState start.*/
    $m("GameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Cleaning","is":true,"t":4,"rt":GameState,"sn":"Cleaning","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Finished","is":true,"t":4,"rt":GameState,"sn":"Finished","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Initialization","is":true,"t":4,"rt":GameState,"sn":"Initialization","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Input","is":true,"t":4,"rt":GameState,"sn":"Input","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}},{"a":2,"n":"Merge","is":true,"t":4,"rt":GameState,"sn":"Merge","box":function ($v) { return Bridge.box($v, GameState, System.Enum.toStringFn(GameState));}}]}; }, $n);
    /*GameState end.*/

    /*HexCell start.*/
    $m("HexCell", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ClearStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"ClearStack","rt":$n[0].Void,"p":[HexStack]},{"a":2,"n":"Configure","t":8,"pi":[{"n":"gridPosition","pt":$n[2].Vector3Int,"ps":0}],"sn":"Configure","rt":$n[0].Void,"p":[$n[2].Vector3Int]},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":2,"n":"SetHighlight","t":8,"pi":[{"n":"enabled","pt":$n[0].Boolean,"ps":0}],"sn":"SetHighlight","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetHighlightView","t":8,"pi":[{"n":"highlightView","pt":CellHighlightView,"ps":0}],"sn":"SetHighlightView","rt":$n[0].Void,"p":[CellHighlightView]},{"a":2,"n":"SetInitialStackColors","t":8,"pi":[{"n":"colors","pt":$n[1].List$1(HexColorId),"ps":0}],"sn":"SetInitialStackColors","rt":$n[0].Void,"p":[$n[1].List$1(HexColorId)]},{"a":2,"n":"SetRingRenderer","t":8,"pi":[{"n":"renderer","pt":$n[2].Renderer,"ps":0}],"sn":"SetRingRenderer","rt":$n[0].Void,"p":[$n[2].Renderer]},{"a":2,"n":"SetStack","t":8,"pi":[{"n":"stack","pt":HexStack,"ps":0}],"sn":"SetStack","rt":$n[0].Void,"p":[HexStack]},{"a":2,"n":"CurrentStack","t":16,"rt":HexStack,"g":{"a":2,"n":"get_CurrentStack","t":8,"rt":HexStack,"fg":"CurrentStack"},"fn":"CurrentStack"},{"a":2,"n":"GridPosition","t":16,"rt":$n[2].Vector3Int,"g":{"a":2,"n":"get_GridPosition","t":8,"rt":$n[2].Vector3Int,"fg":"GridPosition"},"fn":"GridPosition"},{"a":2,"n":"InitialStackColors","t":16,"rt":$n[1].IReadOnlyList$1(HexColorId),"g":{"a":2,"n":"get_InitialStackColors","t":8,"rt":$n[1].IReadOnlyList$1(HexColorId),"fg":"InitialStackColors"},"fn":"InitialStackColors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_currentStack","t":4,"rt":HexStack,"sn":"_currentStack"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gridPosition","t":4,"rt":$n[2].Vector3Int,"sn":"_gridPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_highlightView","t":4,"rt":CellHighlightView,"sn":"_highlightView"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_initialStackColors","t":4,"rt":$n[1].List$1(HexColorId),"sn":"_initialStackColors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ringRenderer","t":4,"rt":$n[2].Renderer,"sn":"_ringRenderer"}]}; }, $n);
    /*HexCell end.*/

    /*HexColorId start.*/
    $m("HexColorId", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blue","is":true,"t":4,"rt":HexColorId,"sn":"Blue","box":function ($v) { return Bridge.box($v, HexColorId, System.Enum.toStringFn(HexColorId));}},{"a":2,"n":"Green","is":true,"t":4,"rt":HexColorId,"sn":"Green","box":function ($v) { return Bridge.box($v, HexColorId, System.Enum.toStringFn(HexColorId));}},{"a":2,"n":"Purple","is":true,"t":4,"rt":HexColorId,"sn":"Purple","box":function ($v) { return Bridge.box($v, HexColorId, System.Enum.toStringFn(HexColorId));}},{"a":2,"n":"Red","is":true,"t":4,"rt":HexColorId,"sn":"Red","box":function ($v) { return Bridge.box($v, HexColorId, System.Enum.toStringFn(HexColorId));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":HexColorId,"sn":"Yellow","box":function ($v) { return Bridge.box($v, HexColorId, System.Enum.toStringFn(HexColorId));}}]}; }, $n);
    /*HexColorId end.*/

    /*HexDisk start.*/
    $m("HexDisk", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CacheRenderers","t":8,"sn":"CacheRenderers","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"color","pt":HexColorId,"ps":0},{"n":"material","pt":$n[2].Material,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[HexColorId,$n[2].Material]},{"a":2,"n":"SetAlpha","t":8,"pi":[{"n":"alpha","pt":$n[0].Single,"ps":0}],"sn":"SetAlpha","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"Color","t":16,"rt":HexColorId,"g":{"a":2,"n":"get_Color","t":8,"rt":HexColorId,"fg":"Color","box":function ($v) { return Bridge.box($v, HexColorId, System.Enum.toStringFn(HexColorId));}},"fn":"Color"},{"a":2,"n":"Renderers","t":16,"rt":System.Array.type(UnityEngine.Renderer),"g":{"a":2,"n":"get_Renderers","t":8,"rt":System.Array.type(UnityEngine.Renderer),"fg":"Renderers"},"fn":"Renderers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_color","t":4,"rt":HexColorId,"sn":"_color","box":function ($v) { return Bridge.box($v, HexColorId, System.Enum.toStringFn(HexColorId));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_renderers","t":4,"rt":System.Array.type(UnityEngine.Renderer),"sn":"_renderers"}]}; }, $n);
    /*HexDisk end.*/

    /*HexStack start.*/
    $m("HexStack", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AssignCell","t":8,"pi":[{"n":"cell","pt":HexCell,"ps":0}],"sn":"AssignCell","rt":$n[0].Void,"p":[HexCell]},{"a":2,"n":"BuildVisuals","t":8,"sn":"BuildVisuals","rt":$n[0].Void},{"a":2,"n":"Configure","t":8,"pi":[{"n":"prefab","pt":$n[2].Transform,"ps":0},{"n":"materials","pt":$n[1].List$1(UnityEngine.Material),"ps":1},{"n":"colors","pt":$n[1].List$1(HexColorId),"ps":2},{"n":"offer","pt":$n[0].Boolean,"ps":3},{"n":"solution","pt":$n[0].Boolean,"ps":4}],"sn":"Configure","rt":$n[0].Void,"p":[$n[2].Transform,$n[1].List$1(UnityEngine.Material),$n[1].List$1(HexColorId),$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"CopyDisksTopToBottom","t":8,"sn":"CopyDisksTopToBottom","rt":$n[1].List$1(HexDisk)},{"a":2,"n":"CountTopColor","t":8,"pi":[{"n":"color","pt":HexColorId,"ps":0}],"sn":"CountTopColor","rt":$n[0].Int32,"p":[HexColorId],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"CreateDisk","t":8,"pi":[{"n":"color","pt":HexColorId,"ps":0},{"n":"index","pt":$n[0].Int32,"ps":1}],"sn":"CreateDisk","rt":$n[0].Void,"p":[HexColorId,$n[0].Int32]},{"a":2,"n":"DetachFromCell","t":8,"sn":"DetachFromCell","rt":$n[0].Void},{"a":1,"n":"GetDiskLocalPosition","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetDiskLocalPosition","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetDiskWorldPositionAtIndex","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetDiskWorldPositionAtIndex","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetNextDiskWorldPosition","t":8,"sn":"GetNextDiskWorldPosition","rt":$n[2].Vector3},{"a":2,"n":"InitializeRuntime","t":8,"sn":"InitializeRuntime","rt":$n[0].Void},{"a":2,"n":"IsSingleColorStack","t":8,"pi":[{"n":"expectedCount","pt":$n[0].Int32,"ps":0}],"sn":"IsSingleColorStack","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"MarkAsPlacedOnBoard","t":8,"sn":"MarkAsPlacedOnBoard","rt":$n[0].Void},{"a":2,"n":"PopTopDisk","t":8,"sn":"PopTopDisk","rt":HexDisk},{"a":2,"n":"PushDisk","t":8,"pi":[{"n":"disk","pt":HexDisk,"ps":0}],"sn":"PushDisk","rt":$n[0].Void,"p":[HexDisk]},{"a":2,"n":"Reflow","t":8,"sn":"Reflow","rt":$n[0].Void},{"a":2,"n":"RemoveTopDisks","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"RemoveTopDisks","rt":$n[1].List$1(HexDisk),"p":[$n[0].Int32]},{"a":2,"n":"StoreHome","t":8,"sn":"StoreHome","rt":$n[0].Void},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"CurrentCell","t":16,"rt":HexCell,"g":{"a":2,"n":"get_CurrentCell","t":8,"rt":HexCell,"fg":"CurrentCell"},"fn":"CurrentCell"},{"a":2,"n":"DiskScale","t":16,"rt":$n[2].Vector3,"g":{"a":2,"n":"get_DiskScale","t":8,"rt":$n[2].Vector3,"fg":"DiskScale"},"fn":"DiskScale"},{"a":2,"n":"HomeParent","t":16,"rt":$n[2].Transform,"g":{"a":2,"n":"get_HomeParent","t":8,"rt":$n[2].Transform,"fg":"HomeParent"},"fn":"HomeParent"},{"a":2,"n":"HomePosition","t":16,"rt":$n[2].Vector3,"g":{"a":2,"n":"get_HomePosition","t":8,"rt":$n[2].Vector3,"fg":"HomePosition"},"fn":"HomePosition"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"IsOfferStack","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsOfferStack","t":8,"rt":$n[0].Boolean,"fg":"IsOfferStack","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsOfferStack"},{"a":2,"n":"IsSolutionStack","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsSolutionStack","t":8,"rt":$n[0].Boolean,"fg":"IsSolutionStack","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsSolutionStack"},{"a":2,"n":"TopColor","t":16,"rt":HexColorId,"g":{"a":2,"n":"get_TopColor","t":8,"rt":HexColorId,"fg":"TopColor","box":function ($v) { return Bridge.box($v, HexColorId, System.Enum.toStringFn(HexColorId));}},"fn":"TopColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_colorMaterials","t":4,"rt":$n[1].List$1(UnityEngine.Material),"sn":"_colorMaterials"},{"a":1,"n":"_currentCell","t":4,"rt":HexCell,"sn":"_currentCell"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_diskHeight","t":4,"rt":$n[0].Single,"sn":"_diskHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_diskPrefab","t":4,"rt":$n[2].Transform,"sn":"_diskPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_diskScale","t":4,"rt":$n[2].Vector3,"sn":"_diskScale"},{"a":1,"n":"_disks","t":4,"rt":$n[1].List$1(HexDisk),"sn":"_disks","ro":true},{"a":1,"n":"_homeParent","t":4,"rt":$n[2].Transform,"sn":"_homeParent"},{"a":1,"n":"_homePosition","t":4,"rt":$n[2].Vector3,"sn":"_homePosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_initialColors","t":4,"rt":$n[1].List$1(HexColorId),"sn":"_initialColors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_isOfferStack","t":4,"rt":$n[0].Boolean,"sn":"_isOfferStack","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_isSolutionStack","t":4,"rt":$n[0].Boolean,"sn":"_isSolutionStack","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*HexStack end.*/

    /*PackshotController start.*/
    $m("PackshotController", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Configure","t":8,"pi":[{"n":"groupReference","pt":$n[2].CanvasGroup,"ps":0},{"n":"buttonReference","pt":$n[4].Button,"ps":1}],"sn":"Configure","rt":$n[0].Void,"p":[$n[2].CanvasGroup,$n[4].Button]},{"a":1,"n":"FindType","is":true,"t":8,"pi":[{"n":"fullName","pt":$n[0].String,"ps":0}],"sn":"FindType","rt":$n[0].Type,"p":[$n[0].String]},{"a":1,"n":"GameEnded","t":8,"sn":"GameEnded","rt":$n[0].Void},{"a":1,"n":"GetDefaultValue","is":true,"t":8,"pi":[{"n":"type","pt":$n[0].Type,"ps":0}],"sn":"GetDefaultValue","rt":$n[0].Object,"p":[$n[0].Type]},{"a":2,"n":"HideInstant","t":8,"sn":"HideInstant","rt":$n[0].Void},{"a":1,"n":"InstallFullGame","t":8,"sn":"InstallFullGame","rt":$n[0].Void},{"a":1,"n":"InvokeLunaStatic","is":true,"t":8,"pi":[{"n":"typeName","pt":$n[0].String,"ps":0},{"n":"methodName","pt":$n[0].String,"ps":1}],"sn":"InvokeLunaStatic","rt":$n[0].Void,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fadeDuration","t":4,"rt":$n[0].Single,"sn":"_fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_group","t":4,"rt":$n[2].CanvasGroup,"sn":"_group"},{"a":1,"n":"_installRequested","t":4,"rt":$n[0].Boolean,"sn":"_installRequested","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_playButtonView","t":4,"rt":PlayButtonView,"sn":"_playButtonView"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_playNowButton","t":4,"rt":$n[4].Button,"sn":"_playNowButton"},{"a":1,"n":"_shown","t":4,"rt":$n[0].Boolean,"sn":"_shown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PackshotController end.*/

    /*PlayButtonView start.*/
    $m("PlayButtonView", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"Play","t":8,"sn":"Play","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"_pulse","t":4,"rt":$n[5].Sequence,"sn":"_pulse"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pulseDuration","t":4,"rt":$n[0].Single,"sn":"_pulseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pulseScale","t":4,"rt":$n[0].Single,"sn":"_pulseScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_target","t":4,"rt":$n[2].RectTransform,"sn":"_target"}]}; }, $n);
    /*PlayButtonView end.*/

    /*ReactionResolver start.*/
    $m("ReactionResolver", function () { return {"nested":[ReactionResolver.VanishingStack],"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateRollingDisk","t":8,"pi":[{"n":"disk","pt":HexDisk,"ps":0},{"n":"receiver","pt":HexStack,"ps":1},{"n":"target","pt":$n[2].Vector3,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"onComplete","pt":Function,"ps":4}],"sn":"AnimateRollingDisk","rt":$n[0].Void,"p":[HexDisk,HexStack,$n[2].Vector3,$n[0].Single,Function]},{"a":1,"n":"CanMerge","t":8,"pi":[{"n":"receiverCell","pt":HexCell,"ps":0},{"n":"donorCell","pt":HexCell,"ps":1}],"sn":"CanMerge","rt":$n[0].Boolean,"p":[HexCell,HexCell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CleanFullStacks","t":8,"sn":"CleanFullStacks","rt":$n[3].IEnumerator},{"a":2,"n":"Configure","t":8,"pi":[{"n":"fxPrefab","pt":$n[2].GameObject,"ps":0},{"n":"maxSpeedMultiplier","pt":$n[0].Single,"ps":1}],"sn":"Configure","rt":$n[0].Void,"p":[$n[2].GameObject,$n[0].Single]},{"a":1,"n":"GetMergeDiskCount","t":8,"pi":[{"n":"receiver","pt":HexStack,"ps":0},{"n":"donor","pt":HexStack,"ps":1}],"sn":"GetMergeDiskCount","rt":$n[0].Int32,"p":[HexStack,HexStack],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetScaledDuration","t":8,"pi":[{"n":"baseDuration","pt":$n[0].Single,"ps":0}],"sn":"GetScaledDuration","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"boardReference","pt":BoardController,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[BoardController]},{"a":2,"n":"MergeFrom","t":8,"pi":[{"n":"placedCell","pt":HexCell,"ps":0}],"sn":"MergeFrom","rt":$n[3].IEnumerator,"p":[HexCell]},{"a":1,"n":"MergeStacks","t":8,"pi":[{"n":"receiverCell","pt":HexCell,"ps":0},{"n":"donorCell","pt":HexCell,"ps":1}],"sn":"MergeStacks","rt":$n[3].IEnumerator,"p":[HexCell,HexCell]},{"a":1,"n":"PlayVanishFx","t":8,"pi":[{"n":"vanishPosition","pt":$n[2].Vector3,"ps":0}],"sn":"PlayVanishFx","rt":$n[0].Void,"p":[$n[2].Vector3]},{"a":1,"n":"PushIfCheckable","t":8,"pi":[{"n":"cell","pt":HexCell,"ps":0}],"sn":"PushIfCheckable","rt":$n[0].Void,"p":[HexCell]},{"a":1,"n":"VanishStack","t":8,"pi":[{"n":"cell","pt":HexCell,"ps":0},{"n":"stack","pt":HexStack,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"onComplete","pt":Function,"ps":3}],"sn":"VanishStack","rt":$n[0].Void,"p":[HexCell,HexStack,$n[0].Single,Function]},{"a":2,"n":"LastResolveHadReaction","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_LastResolveHadReaction","t":8,"rt":$n[0].Boolean,"fg":"LastResolveHadReaction","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_LastResolveHadReaction","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"LastResolveHadReaction"},"fn":"LastResolveHadReaction"},{"a":1,"n":"ANIMATION_WAIT_TIMEOUT_PADDING","is":true,"t":4,"rt":$n[0].Single,"sn":"ANIMATION_WAIT_TIMEOUT_PADDING","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"PUNCH_SCALE_DURATION","is":true,"t":4,"rt":$n[0].Single,"sn":"PUNCH_SCALE_DURATION","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_baseFlyDuration","t":4,"rt":$n[0].Single,"sn":"_baseFlyDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_board","t":4,"rt":BoardController,"sn":"_board"},{"a":1,"n":"_cellsToCheck","t":4,"rt":$n[1].Stack$1(HexCell),"sn":"_cellsToCheck","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_diskLaunchInterval","t":4,"rt":$n[0].Single,"sn":"_diskLaunchInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_edgePivotOffset","t":4,"rt":$n[0].Single,"sn":"_edgePivotOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_maxReactionSpeedMultiplier","t":4,"rt":$n[0].Single,"sn":"_maxReactionSpeedMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_reactionStep","t":4,"rt":$n[0].Int32,"sn":"_reactionStep","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rollDegrees","t":4,"rt":$n[0].Single,"sn":"_rollDegrees","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speedIncrease","t":4,"rt":$n[0].Single,"sn":"_speedIncrease","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_vanishDiskDelay","t":4,"rt":$n[0].Single,"sn":"_vanishDiskDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_vanishDiskScaleDuration","t":4,"rt":$n[0].Single,"sn":"_vanishDiskScaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_vanishFxPrefab","t":4,"rt":$n[2].GameObject,"sn":"_vanishFxPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_vanishStackSize","t":4,"rt":$n[0].Int32,"sn":"_vanishStackSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<LastResolveHadReaction>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"LastResolveHadReaction","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*ReactionResolver end.*/

    /*ReactionResolver+VanishingStack start.*/
    $m("ReactionResolver.VanishingStack", function () { return {"td":ReactionResolver,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[HexCell,HexStack],"pi":[{"n":"cell","pt":HexCell,"ps":0},{"n":"stack","pt":HexStack,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"Cell","t":4,"rt":HexCell,"sn":"Cell","ro":true},{"a":2,"n":"Stack","t":4,"rt":HexStack,"sn":"Stack","ro":true}]}; }, $n);
    /*ReactionResolver+VanishingStack end.*/

    /*TutorialController start.*/
    $m("TutorialController", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Configure","t":8,"pi":[{"n":"handReference","pt":$n[2].RectTransform,"ps":0},{"n":"canvasReference","pt":$n[2].Canvas,"ps":1},{"n":"cameraReference","pt":$n[2].Camera,"ps":2},{"n":"sourceReference","pt":$n[2].Transform,"ps":3}],"sn":"Configure","rt":$n[0].Void,"p":[$n[2].RectTransform,$n[2].Canvas,$n[2].Camera,$n[2].Transform]},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"boardReference","pt":BoardController,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[BoardController]},{"a":2,"n":"Play","t":8,"sn":"Play","rt":$n[0].Void},{"a":1,"n":"ReplayAfterDelay","t":8,"sn":"ReplayAfterDelay","rt":$n[3].IEnumerator},{"a":2,"n":"ScheduleReplay","t":8,"sn":"ScheduleReplay","rt":$n[0].Void},{"a":1,"n":"WorldToCanvas","t":8,"pi":[{"n":"world","pt":$n[2].Vector3,"ps":0}],"sn":"WorldToCanvas","rt":$n[2].Vector2,"p":[$n[2].Vector3]},{"a":1,"n":"_board","t":4,"rt":BoardController,"sn":"_board"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_canvas","t":4,"rt":$n[2].Canvas,"sn":"_canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_gameCamera","t":4,"rt":$n[2].Camera,"sn":"_gameCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_hand","t":4,"rt":$n[2].RectTransform,"sn":"_hand"},{"a":1,"n":"_loop","t":4,"rt":$n[5].Sequence,"sn":"_loop"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pressOffset","t":4,"rt":$n[2].Vector2,"sn":"_pressOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_releaseOffset","t":4,"rt":$n[2].Vector2,"sn":"_releaseOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_replayDelay","t":4,"rt":$n[0].Single,"sn":"_replayDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_replayRoutine","t":4,"rt":$n[2].Coroutine,"sn":"_replayRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_sourceStack","t":4,"rt":$n[2].Transform,"sn":"_sourceStack"}]}; }, $n);
    /*TutorialController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[5].Sequence,"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"towards","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[5].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[5].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[5].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[5].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[5].Sequence,"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[8].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[5].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[5].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[5].PathType,$n[5].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[5].Tweener,"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[2].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[5].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[5].Tweener,"p":[$n[4].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[5].Tweener,"p":[$n[4].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[5].Tweener,"p":[$n[4].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[9].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[7].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[4].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[9].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[4].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[5].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[5].Sequence,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[5].Tweener,"p":[$n[4].ScrollRect,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"punch","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[5].Tweener,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Outline,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[5].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[5].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[5].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[2].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[5].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[5].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[2].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[5].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"center","pt":$n[2].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[5].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[7].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[4].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[5].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[5].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[5].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[2].RectTransform,"ps":0},{"n":"to","pt":$n[2].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[2].Vector2,"p":[$n[2].RectTransform,$n[2].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[5].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[2].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[2].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[2].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[2].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[2].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[2].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[5].DOTweenCYInstruction.WaitForCompletion,$n[5].DOTweenCYInstruction.WaitForRewind,$n[5].DOTweenCYInstruction.WaitForKill,$n[5].DOTweenCYInstruction.WaitForElapsedLoops,$n[5].DOTweenCYInstruction.WaitForPosition,$n[5].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[5].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[5].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[8].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[5].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[10].PathOptions,"ps":0},{"n":"t","pt":$n[5].Tween,"ps":1},{"n":"newRot","pt":$n[2].Quaternion,"ps":2},{"n":"trans","pt":$n[2].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[10].PathOptions,$n[5].Tween,$n[2].Quaternion,$n[2].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
