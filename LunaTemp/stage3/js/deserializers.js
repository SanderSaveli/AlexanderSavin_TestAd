var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2662 = root || request.c( 'UnityEngine.JointSpring' )
  var i2663 = data
  i2662.spring = i2663[0]
  i2662.damper = i2663[1]
  i2662.targetPosition = i2663[2]
  return i2662
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.JointMotor' )
  var i2665 = data
  i2664.m_TargetVelocity = i2665[0]
  i2664.m_Force = i2665[1]
  i2664.m_FreeSpin = i2665[2]
  return i2664
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.JointLimits' )
  var i2667 = data
  i2666.m_Min = i2667[0]
  i2666.m_Max = i2667[1]
  i2666.m_Bounciness = i2667[2]
  i2666.m_BounceMinVelocity = i2667[3]
  i2666.m_ContactDistance = i2667[4]
  i2666.minBounce = i2667[5]
  i2666.maxBounce = i2667[6]
  return i2666
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2668 = root || request.c( 'UnityEngine.JointDrive' )
  var i2669 = data
  i2668.m_PositionSpring = i2669[0]
  i2668.m_PositionDamper = i2669[1]
  i2668.m_MaximumForce = i2669[2]
  i2668.m_UseAcceleration = i2669[3]
  return i2668
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2671 = data
  i2670.m_Spring = i2671[0]
  i2670.m_Damper = i2671[1]
  return i2670
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2673 = data
  i2672.m_Limit = i2673[0]
  i2672.m_Bounciness = i2673[1]
  i2672.m_ContactDistance = i2673[2]
  return i2672
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2674 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2675 = data
  i2674.m_ExtremumSlip = i2675[0]
  i2674.m_ExtremumValue = i2675[1]
  i2674.m_AsymptoteSlip = i2675[2]
  i2674.m_AsymptoteValue = i2675[3]
  i2674.m_Stiffness = i2675[4]
  return i2674
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2677 = data
  i2676.m_LowerAngle = i2677[0]
  i2676.m_UpperAngle = i2677[1]
  return i2676
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2679 = data
  i2678.m_MotorSpeed = i2679[0]
  i2678.m_MaximumMotorTorque = i2679[1]
  return i2678
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2681 = data
  i2680.m_DampingRatio = i2681[0]
  i2680.m_Frequency = i2681[1]
  i2680.m_Angle = i2681[2]
  return i2680
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2683 = data
  i2682.m_LowerTranslation = i2683[0]
  i2682.m_UpperTranslation = i2683[1]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2685 = data
  i2684.name = i2685[0]
  i2684.halfPrecision = !!i2685[1]
  i2684.useSimplification = !!i2685[2]
  i2684.useUInt32IndexFormat = !!i2685[3]
  i2684.vertexCount = i2685[4]
  i2684.aabb = i2685[5]
  var i2687 = i2685[6]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( !!i2687[i + 0] );
  }
  i2684.streams = i2686
  i2684.vertices = i2685[7]
  var i2689 = i2685[8]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2689[i + 0]) );
  }
  i2684.subMeshes = i2688
  var i2691 = i2685[9]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 16) {
    i2690.push( new pc.Mat4().setData(i2691[i + 0], i2691[i + 1], i2691[i + 2], i2691[i + 3],  i2691[i + 4], i2691[i + 5], i2691[i + 6], i2691[i + 7],  i2691[i + 8], i2691[i + 9], i2691[i + 10], i2691[i + 11],  i2691[i + 12], i2691[i + 13], i2691[i + 14], i2691[i + 15]) );
  }
  i2684.bindposes = i2690
  var i2693 = i2685[10]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2693[i + 0]) );
  }
  i2684.blendShapes = i2692
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2699 = data
  i2698.triangles = i2699[0]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2705 = data
  i2704.name = i2705[0]
  var i2707 = i2705[1]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2707[i + 0]) );
  }
  i2704.frames = i2706
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2708 = root || new pc.UnityMaterial()
  var i2709 = data
  i2708.name = i2709[0]
  request.r(i2709[1], i2709[2], 0, i2708, 'shader')
  i2708.renderQueue = i2709[3]
  i2708.enableInstancing = !!i2709[4]
  var i2711 = i2709[5]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2711[i + 0]) );
  }
  i2708.floatParameters = i2710
  var i2713 = i2709[6]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2713[i + 0]) );
  }
  i2708.colorParameters = i2712
  var i2715 = i2709[7]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2715[i + 0]) );
  }
  i2708.vectorParameters = i2714
  var i2717 = i2709[8]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2717[i + 0]) );
  }
  i2708.textureParameters = i2716
  var i2719 = i2709[9]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2719[i + 0]) );
  }
  i2708.materialFlags = i2718
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2723 = data
  i2722.name = i2723[0]
  i2722.value = i2723[1]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2727 = data
  i2726.name = i2727[0]
  i2726.value = new pc.Color(i2727[1], i2727[2], i2727[3], i2727[4])
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2731 = data
  i2730.name = i2731[0]
  i2730.value = new pc.Vec4( i2731[1], i2731[2], i2731[3], i2731[4] )
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2735 = data
  i2734.name = i2735[0]
  request.r(i2735[1], i2735[2], 0, i2734, 'value')
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2739 = data
  i2738.name = i2739[0]
  i2738.enabled = !!i2739[1]
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2741 = data
  i2740.name = i2741[0]
  i2740.width = i2741[1]
  i2740.height = i2741[2]
  i2740.mipmapCount = i2741[3]
  i2740.anisoLevel = i2741[4]
  i2740.filterMode = i2741[5]
  i2740.hdr = !!i2741[6]
  i2740.format = i2741[7]
  i2740.wrapMode = i2741[8]
  i2740.alphaIsTransparency = !!i2741[9]
  i2740.alphaSource = i2741[10]
  i2740.graphicsFormat = i2741[11]
  i2740.sRGBTexture = !!i2741[12]
  i2740.desiredColorSpace = i2741[13]
  i2740.wrapU = i2741[14]
  i2740.wrapV = i2741[15]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2743 = data
  i2742.name = i2743[0]
  i2742.atlasId = i2743[1]
  i2742.mipmapCount = i2743[2]
  i2742.hdr = !!i2743[3]
  i2742.size = i2743[4]
  i2742.anisoLevel = i2743[5]
  i2742.filterMode = i2743[6]
  var i2745 = i2743[7]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 4) {
    i2744.push( UnityEngine.Rect.MinMaxRect(i2745[i + 0], i2745[i + 1], i2745[i + 2], i2745[i + 3]) );
  }
  i2742.rects = i2744
  i2742.wrapU = i2743[8]
  i2742.wrapV = i2743[9]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2749 = data
  i2748.name = i2749[0]
  i2748.index = i2749[1]
  i2748.startup = !!i2749[2]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2751 = data
  i2750.aspect = i2751[0]
  i2750.orthographic = !!i2751[1]
  i2750.orthographicSize = i2751[2]
  i2750.backgroundColor = new pc.Color(i2751[3], i2751[4], i2751[5], i2751[6])
  i2750.nearClipPlane = i2751[7]
  i2750.farClipPlane = i2751[8]
  i2750.fieldOfView = i2751[9]
  i2750.depth = i2751[10]
  i2750.clearFlags = i2751[11]
  i2750.cullingMask = i2751[12]
  i2750.rect = i2751[13]
  request.r(i2751[14], i2751[15], 0, i2750, 'targetTexture')
  i2750.usePhysicalProperties = !!i2751[16]
  i2750.focalLength = i2751[17]
  i2750.sensorSize = new pc.Vec2( i2751[18], i2751[19] )
  i2750.lensShift = new pc.Vec2( i2751[20], i2751[21] )
  i2750.gateFit = i2751[22]
  i2750.commandBufferCount = i2751[23]
  i2750.cameraType = i2751[24]
  i2750.enabled = !!i2751[25]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2753 = data
  i2752.name = i2753[0]
  i2752.tagId = i2753[1]
  i2752.enabled = !!i2753[2]
  i2752.isStatic = !!i2753[3]
  i2752.layer = i2753[4]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2755 = data
  i2754.type = i2755[0]
  i2754.color = new pc.Color(i2755[1], i2755[2], i2755[3], i2755[4])
  i2754.cullingMask = i2755[5]
  i2754.intensity = i2755[6]
  i2754.range = i2755[7]
  i2754.spotAngle = i2755[8]
  i2754.shadows = i2755[9]
  i2754.shadowNormalBias = i2755[10]
  i2754.shadowBias = i2755[11]
  i2754.shadowStrength = i2755[12]
  i2754.shadowResolution = i2755[13]
  i2754.lightmapBakeType = i2755[14]
  i2754.renderMode = i2755[15]
  request.r(i2755[16], i2755[17], 0, i2754, 'cookie')
  i2754.cookieSize = i2755[18]
  i2754.shadowNearPlane = i2755[19]
  i2754.occlusionMaskChannel = i2755[20]
  i2754.isBaked = !!i2755[21]
  i2754.mixedLightingMode = i2755[22]
  i2754.enabled = !!i2755[23]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'sharedMesh')
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2759 = data
  request.r(i2759[0], i2759[1], 0, i2758, 'additionalVertexStreams')
  i2758.enabled = !!i2759[2]
  request.r(i2759[3], i2759[4], 0, i2758, 'sharedMaterial')
  var i2761 = i2759[5]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 2) {
  request.r(i2761[i + 0], i2761[i + 1], 2, i2760, '')
  }
  i2758.sharedMaterials = i2760
  i2758.receiveShadows = !!i2759[6]
  i2758.shadowCastingMode = i2759[7]
  i2758.sortingLayerID = i2759[8]
  i2758.sortingOrder = i2759[9]
  i2758.lightmapIndex = i2759[10]
  i2758.lightmapSceneIndex = i2759[11]
  i2758.lightmapScaleOffset = new pc.Vec4( i2759[12], i2759[13], i2759[14], i2759[15] )
  i2758.lightProbeUsage = i2759[16]
  i2758.reflectionProbeUsage = i2759[17]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2765 = data
  i2764.center = new pc.Vec3( i2765[0], i2765[1], i2765[2] )
  i2764.size = new pc.Vec3( i2765[3], i2765[4], i2765[5] )
  i2764.enabled = !!i2765[6]
  i2764.isTrigger = !!i2765[7]
  request.r(i2765[8], i2765[9], 0, i2764, 'material')
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2767 = data
  i2766.ambientIntensity = i2767[0]
  i2766.reflectionIntensity = i2767[1]
  i2766.ambientMode = i2767[2]
  i2766.ambientLight = new pc.Color(i2767[3], i2767[4], i2767[5], i2767[6])
  i2766.ambientSkyColor = new pc.Color(i2767[7], i2767[8], i2767[9], i2767[10])
  i2766.ambientGroundColor = new pc.Color(i2767[11], i2767[12], i2767[13], i2767[14])
  i2766.ambientEquatorColor = new pc.Color(i2767[15], i2767[16], i2767[17], i2767[18])
  i2766.fogColor = new pc.Color(i2767[19], i2767[20], i2767[21], i2767[22])
  i2766.fogEndDistance = i2767[23]
  i2766.fogStartDistance = i2767[24]
  i2766.fogDensity = i2767[25]
  i2766.fog = !!i2767[26]
  request.r(i2767[27], i2767[28], 0, i2766, 'skybox')
  i2766.fogMode = i2767[29]
  var i2769 = i2767[30]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2769[i + 0]) );
  }
  i2766.lightmaps = i2768
  i2766.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2767[31], i2766.lightProbes)
  i2766.lightmapsMode = i2767[32]
  i2766.mixedBakeMode = i2767[33]
  i2766.environmentLightingMode = i2767[34]
  i2766.ambientProbe = new pc.SphericalHarmonicsL2(i2767[35])
  request.r(i2767[36], i2767[37], 0, i2766, 'customReflection')
  request.r(i2767[38], i2767[39], 0, i2766, 'defaultReflection')
  i2766.defaultReflectionMode = i2767[40]
  i2766.defaultReflectionResolution = i2767[41]
  i2766.sunLightObjectId = i2767[42]
  i2766.pixelLightCount = i2767[43]
  i2766.defaultReflectionHDR = !!i2767[44]
  i2766.hasLightDataAsset = !!i2767[45]
  i2766.hasManualGenerate = !!i2767[46]
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2773 = data
  request.r(i2773[0], i2773[1], 0, i2772, 'lightmapColor')
  request.r(i2773[2], i2773[3], 0, i2772, 'lightmapDirection')
  request.r(i2773[4], i2773[5], 0, i2772, 'shadowMask')
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2774 = root || new UnityEngine.LightProbes()
  var i2775 = data
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2783 = data
  var i2785 = i2783[0]
  var i2784 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2785[i + 0]));
  }
  i2782.ShaderCompilationErrors = i2784
  i2782.name = i2783[1]
  i2782.guid = i2783[2]
  var i2787 = i2783[3]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( i2787[i + 0] );
  }
  i2782.shaderDefinedKeywords = i2786
  var i2789 = i2783[4]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2789[i + 0]) );
  }
  i2782.passes = i2788
  var i2791 = i2783[5]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2791[i + 0]) );
  }
  i2782.usePasses = i2790
  var i2793 = i2783[6]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2793[i + 0]) );
  }
  i2782.defaultParameterValues = i2792
  request.r(i2783[7], i2783[8], 0, i2782, 'unityFallbackShader')
  i2782.readDepth = !!i2783[9]
  i2782.hasDepthOnlyPass = !!i2783[10]
  i2782.isCreatedByShaderGraph = !!i2783[11]
  i2782.disableBatching = !!i2783[12]
  i2782.compiled = !!i2783[13]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2797 = data
  i2796.shaderName = i2797[0]
  i2796.errorMessage = i2797[1]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2802 = root || new pc.UnityShaderPass()
  var i2803 = data
  i2802.id = i2803[0]
  i2802.subShaderIndex = i2803[1]
  i2802.name = i2803[2]
  i2802.passType = i2803[3]
  i2802.grabPassTextureName = i2803[4]
  i2802.usePass = !!i2803[5]
  i2802.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2803[6], i2802.zTest)
  i2802.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2803[7], i2802.zWrite)
  i2802.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2803[8], i2802.culling)
  i2802.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2803[9], i2802.blending)
  i2802.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2803[10], i2802.alphaBlending)
  i2802.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2803[11], i2802.colorWriteMask)
  i2802.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2803[12], i2802.offsetUnits)
  i2802.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2803[13], i2802.offsetFactor)
  i2802.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2803[14], i2802.stencilRef)
  i2802.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2803[15], i2802.stencilReadMask)
  i2802.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2803[16], i2802.stencilWriteMask)
  i2802.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2803[17], i2802.stencilOp)
  i2802.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2803[18], i2802.stencilOpFront)
  i2802.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2803[19], i2802.stencilOpBack)
  var i2805 = i2803[20]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2805[i + 0]) );
  }
  i2802.tags = i2804
  var i2807 = i2803[21]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( i2807[i + 0] );
  }
  i2802.passDefinedKeywords = i2806
  var i2809 = i2803[22]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2809[i + 0]) );
  }
  i2802.passDefinedKeywordGroups = i2808
  var i2811 = i2803[23]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2811[i + 0]) );
  }
  i2802.variants = i2810
  var i2813 = i2803[24]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2813[i + 0]) );
  }
  i2802.excludedVariants = i2812
  i2802.hasDepthReader = !!i2803[25]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2815 = data
  i2814.val = i2815[0]
  i2814.name = i2815[1]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2817 = data
  i2816.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[0], i2816.src)
  i2816.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[1], i2816.dst)
  i2816.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[2], i2816.op)
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2819 = data
  i2818.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2819[0], i2818.pass)
  i2818.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2819[1], i2818.fail)
  i2818.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2819[2], i2818.zFail)
  i2818.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2819[3], i2818.comp)
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2823 = data
  i2822.name = i2823[0]
  i2822.value = i2823[1]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2827 = data
  var i2829 = i2827[0]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( i2829[i + 0] );
  }
  i2826.keywords = i2828
  i2826.hasDiscard = !!i2827[1]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2833 = data
  i2832.passId = i2833[0]
  i2832.subShaderIndex = i2833[1]
  var i2835 = i2833[2]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( i2835[i + 0] );
  }
  i2832.keywords = i2834
  i2832.vertexProgram = i2833[3]
  i2832.fragmentProgram = i2833[4]
  i2832.exportedForWebGl2 = !!i2833[5]
  i2832.readDepth = !!i2833[6]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, 'shader')
  i2838.pass = i2839[2]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2843 = data
  i2842.name = i2843[0]
  i2842.type = i2843[1]
  i2842.value = new pc.Vec4( i2843[2], i2843[3], i2843[4], i2843[5] )
  i2842.textureValue = i2843[6]
  i2842.shaderPropertyFlag = i2843[7]
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2845 = data
  var i2847 = i2845[0]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2847[i + 0]) );
  }
  i2844.files = i2846
  i2844.componentToPrefabIds = i2845[1]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2851 = data
  i2850.path = i2851[0]
  request.r(i2851[1], i2851[2], 0, i2850, 'unityObject')
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2853 = data
  var i2855 = i2853[0]
  var i2854 = []
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2855[i + 0]) );
  }
  i2852.scriptsExecutionOrder = i2854
  var i2857 = i2853[1]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2857[i + 0]) );
  }
  i2852.sortingLayers = i2856
  var i2859 = i2853[2]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2859[i + 0]) );
  }
  i2852.cullingLayers = i2858
  i2852.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2853[3], i2852.timeSettings)
  i2852.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2853[4], i2852.physicsSettings)
  i2852.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2853[5], i2852.physics2DSettings)
  i2852.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2853[6], i2852.qualitySettings)
  i2852.enableRealtimeShadows = !!i2853[7]
  i2852.enableAutoInstancing = !!i2853[8]
  i2852.enableStaticBatching = !!i2853[9]
  i2852.enableDynamicBatching = !!i2853[10]
  i2852.usePreservativeDynamicBatching = !!i2853[11]
  i2852.lightmapEncodingQuality = i2853[12]
  i2852.desiredColorSpace = i2853[13]
  var i2861 = i2853[14]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( i2861[i + 0] );
  }
  i2852.allTags = i2860
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2865 = data
  i2864.name = i2865[0]
  i2864.value = i2865[1]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2869 = data
  i2868.id = i2869[0]
  i2868.name = i2869[1]
  i2868.value = i2869[2]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2873 = data
  i2872.id = i2873[0]
  i2872.name = i2873[1]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2875 = data
  i2874.fixedDeltaTime = i2875[0]
  i2874.maximumDeltaTime = i2875[1]
  i2874.timeScale = i2875[2]
  i2874.maximumParticleTimestep = i2875[3]
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2877 = data
  i2876.gravity = new pc.Vec3( i2877[0], i2877[1], i2877[2] )
  i2876.defaultSolverIterations = i2877[3]
  i2876.bounceThreshold = i2877[4]
  i2876.autoSyncTransforms = !!i2877[5]
  i2876.autoSimulation = !!i2877[6]
  var i2879 = i2877[7]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2879[i + 0]) );
  }
  i2876.collisionMatrix = i2878
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2883 = data
  i2882.enabled = !!i2883[0]
  i2882.layerId = i2883[1]
  i2882.otherLayerId = i2883[2]
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2885 = data
  request.r(i2885[0], i2885[1], 0, i2884, 'material')
  i2884.gravity = new pc.Vec2( i2885[2], i2885[3] )
  i2884.positionIterations = i2885[4]
  i2884.velocityIterations = i2885[5]
  i2884.velocityThreshold = i2885[6]
  i2884.maxLinearCorrection = i2885[7]
  i2884.maxAngularCorrection = i2885[8]
  i2884.maxTranslationSpeed = i2885[9]
  i2884.maxRotationSpeed = i2885[10]
  i2884.baumgarteScale = i2885[11]
  i2884.baumgarteTOIScale = i2885[12]
  i2884.timeToSleep = i2885[13]
  i2884.linearSleepTolerance = i2885[14]
  i2884.angularSleepTolerance = i2885[15]
  i2884.defaultContactOffset = i2885[16]
  i2884.autoSimulation = !!i2885[17]
  i2884.queriesHitTriggers = !!i2885[18]
  i2884.queriesStartInColliders = !!i2885[19]
  i2884.callbacksOnDisable = !!i2885[20]
  i2884.reuseCollisionCallbacks = !!i2885[21]
  i2884.autoSyncTransforms = !!i2885[22]
  var i2887 = i2885[23]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2887[i + 0]) );
  }
  i2884.collisionMatrix = i2886
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2891 = data
  i2890.enabled = !!i2891[0]
  i2890.layerId = i2891[1]
  i2890.otherLayerId = i2891[2]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2893 = data
  var i2895 = i2893[0]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2895[i + 0]) );
  }
  i2892.qualityLevels = i2894
  var i2897 = i2893[1]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( i2897[i + 0] );
  }
  i2892.names = i2896
  i2892.shadows = i2893[2]
  i2892.anisotropicFiltering = i2893[3]
  i2892.antiAliasing = i2893[4]
  i2892.lodBias = i2893[5]
  i2892.shadowCascades = i2893[6]
  i2892.shadowDistance = i2893[7]
  i2892.shadowmaskMode = i2893[8]
  i2892.shadowProjection = i2893[9]
  i2892.shadowResolution = i2893[10]
  i2892.softParticles = !!i2893[11]
  i2892.softVegetation = !!i2893[12]
  i2892.activeColorSpace = i2893[13]
  i2892.desiredColorSpace = i2893[14]
  i2892.masterTextureLimit = i2893[15]
  i2892.maxQueuedFrames = i2893[16]
  i2892.particleRaycastBudget = i2893[17]
  i2892.pixelLightCount = i2893[18]
  i2892.realtimeReflectionProbes = !!i2893[19]
  i2892.shadowCascade2Split = i2893[20]
  i2892.shadowCascade4Split = new pc.Vec3( i2893[21], i2893[22], i2893[23] )
  i2892.streamingMipmapsActive = !!i2893[24]
  i2892.vSyncCount = i2893[25]
  i2892.asyncUploadBufferSize = i2893[26]
  i2892.asyncUploadTimeSlice = i2893[27]
  i2892.billboardsFaceCameraPosition = !!i2893[28]
  i2892.shadowNearPlaneOffset = i2893[29]
  i2892.streamingMipmapsMemoryBudget = i2893[30]
  i2892.maximumLODLevel = i2893[31]
  i2892.streamingMipmapsAddAllCameras = !!i2893[32]
  i2892.streamingMipmapsMaxLevelReduction = i2893[33]
  i2892.streamingMipmapsRenderersPerFrame = i2893[34]
  i2892.resolutionScalingFixedDPIFactor = i2893[35]
  i2892.streamingMipmapsMaxFileIORequests = i2893[36]
  i2892.currentQualityLevel = i2893[37]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2903 = data
  i2902.weight = i2903[0]
  i2902.vertices = i2903[1]
  i2902.normals = i2903[2]
  i2902.tangents = i2903[3]
  return i2902
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"10":[11],"12":[11],"13":[11],"14":[11],"15":[11],"16":[11],"17":[18],"19":[1],"20":[21],"22":[21],"23":[21],"24":[21],"25":[21],"26":[21],"27":[21],"28":[29],"30":[29],"31":[29],"32":[29],"33":[29],"34":[29],"35":[29],"36":[29],"37":[29],"38":[29],"39":[29],"40":[29],"41":[29],"42":[1],"43":[6],"44":[45],"46":[45],"47":[48],"49":[48],"50":[48],"51":[47],"52":[53,48],"54":[48],"55":[47],"56":[48],"57":[48],"58":[48],"59":[48],"60":[48],"61":[48],"62":[48],"63":[48],"64":[48],"65":[53,48],"66":[48],"67":[48],"68":[48],"69":[48],"70":[53,48],"71":[48],"72":[73],"74":[73],"75":[73],"76":[73],"77":[1],"78":[1],"79":[48],"80":[6,48],"81":[48,53],"82":[48],"83":[53,48],"84":[6],"85":[53,48],"86":[48],"87":[88],"89":[88],"90":[88]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "AlexanderSavin_TestAD";

Deserializers.lunaInitializationTime = "06/03/2026 19:31:39";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "Test";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "47f55c0ddddb01a4cad6616ad56cb0f2";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1836";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3098";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.AlexanderSavin-TestAD";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "ef9a4d21-bf05-4c08-aac9-64d092f4c5b1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

