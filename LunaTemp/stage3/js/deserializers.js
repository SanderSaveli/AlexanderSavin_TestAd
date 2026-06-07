var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3672 = root || request.c( 'UnityEngine.JointSpring' )
  var i3673 = data
  i3672.spring = i3673[0]
  i3672.damper = i3673[1]
  i3672.targetPosition = i3673[2]
  return i3672
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3674 = root || request.c( 'UnityEngine.JointMotor' )
  var i3675 = data
  i3674.m_TargetVelocity = i3675[0]
  i3674.m_Force = i3675[1]
  i3674.m_FreeSpin = i3675[2]
  return i3674
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3676 = root || request.c( 'UnityEngine.JointLimits' )
  var i3677 = data
  i3676.m_Min = i3677[0]
  i3676.m_Max = i3677[1]
  i3676.m_Bounciness = i3677[2]
  i3676.m_BounceMinVelocity = i3677[3]
  i3676.m_ContactDistance = i3677[4]
  i3676.minBounce = i3677[5]
  i3676.maxBounce = i3677[6]
  return i3676
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3678 = root || request.c( 'UnityEngine.JointDrive' )
  var i3679 = data
  i3678.m_PositionSpring = i3679[0]
  i3678.m_PositionDamper = i3679[1]
  i3678.m_MaximumForce = i3679[2]
  i3678.m_UseAcceleration = i3679[3]
  return i3678
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3680 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3681 = data
  i3680.m_Spring = i3681[0]
  i3680.m_Damper = i3681[1]
  return i3680
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3682 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3683 = data
  i3682.m_Limit = i3683[0]
  i3682.m_Bounciness = i3683[1]
  i3682.m_ContactDistance = i3683[2]
  return i3682
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3685 = data
  i3684.m_ExtremumSlip = i3685[0]
  i3684.m_ExtremumValue = i3685[1]
  i3684.m_AsymptoteSlip = i3685[2]
  i3684.m_AsymptoteValue = i3685[3]
  i3684.m_Stiffness = i3685[4]
  return i3684
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3686 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3687 = data
  i3686.m_LowerAngle = i3687[0]
  i3686.m_UpperAngle = i3687[1]
  return i3686
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3688 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3689 = data
  i3688.m_MotorSpeed = i3689[0]
  i3688.m_MaximumMotorTorque = i3689[1]
  return i3688
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3690 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3691 = data
  i3690.m_DampingRatio = i3691[0]
  i3690.m_Frequency = i3691[1]
  i3690.m_Angle = i3691[2]
  return i3690
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3692 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3693 = data
  i3692.m_LowerTranslation = i3693[0]
  i3692.m_UpperTranslation = i3693[1]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3695 = data
  i3694.name = i3695[0]
  i3694.halfPrecision = !!i3695[1]
  i3694.useSimplification = !!i3695[2]
  i3694.useUInt32IndexFormat = !!i3695[3]
  i3694.vertexCount = i3695[4]
  i3694.aabb = i3695[5]
  var i3697 = i3695[6]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.push( !!i3697[i + 0] );
  }
  i3694.streams = i3696
  i3694.vertices = i3695[7]
  var i3699 = i3695[8]
  var i3698 = []
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3699[i + 0]) );
  }
  i3694.subMeshes = i3698
  var i3701 = i3695[9]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 16) {
    i3700.push( new pc.Mat4().setData(i3701[i + 0], i3701[i + 1], i3701[i + 2], i3701[i + 3],  i3701[i + 4], i3701[i + 5], i3701[i + 6], i3701[i + 7],  i3701[i + 8], i3701[i + 9], i3701[i + 10], i3701[i + 11],  i3701[i + 12], i3701[i + 13], i3701[i + 14], i3701[i + 15]) );
  }
  i3694.bindposes = i3700
  var i3703 = i3695[10]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3703[i + 0]) );
  }
  i3694.blendShapes = i3702
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3709 = data
  i3708.triangles = i3709[0]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3715 = data
  i3714.name = i3715[0]
  var i3717 = i3715[1]
  var i3716 = []
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3717[i + 0]) );
  }
  i3714.frames = i3716
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3718 = root || new pc.UnityMaterial()
  var i3719 = data
  i3718.name = i3719[0]
  request.r(i3719[1], i3719[2], 0, i3718, 'shader')
  i3718.renderQueue = i3719[3]
  i3718.enableInstancing = !!i3719[4]
  var i3721 = i3719[5]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3721[i + 0]) );
  }
  i3718.floatParameters = i3720
  var i3723 = i3719[6]
  var i3722 = []
  for(var i = 0; i < i3723.length; i += 1) {
    i3722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3723[i + 0]) );
  }
  i3718.colorParameters = i3722
  var i3725 = i3719[7]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3725[i + 0]) );
  }
  i3718.vectorParameters = i3724
  var i3727 = i3719[8]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3727[i + 0]) );
  }
  i3718.textureParameters = i3726
  var i3729 = i3719[9]
  var i3728 = []
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3729[i + 0]) );
  }
  i3718.materialFlags = i3728
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3733 = data
  i3732.name = i3733[0]
  i3732.value = i3733[1]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3737 = data
  i3736.name = i3737[0]
  i3736.value = new pc.Color(i3737[1], i3737[2], i3737[3], i3737[4])
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3741 = data
  i3740.name = i3741[0]
  i3740.value = new pc.Vec4( i3741[1], i3741[2], i3741[3], i3741[4] )
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3745 = data
  i3744.name = i3745[0]
  request.r(i3745[1], i3745[2], 0, i3744, 'value')
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3749 = data
  i3748.name = i3749[0]
  i3748.enabled = !!i3749[1]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3751 = data
  i3750.position = new pc.Vec3( i3751[0], i3751[1], i3751[2] )
  i3750.scale = new pc.Vec3( i3751[3], i3751[4], i3751[5] )
  i3750.rotation = new pc.Quat(i3751[6], i3751[7], i3751[8], i3751[9])
  return i3750
}

Deserializers["HexStack"] = function (request, data, root) {
  var i3752 = root || request.c( 'HexStack' )
  var i3753 = data
  request.r(i3753[0], i3753[1], 0, i3752, '_diskPrefab')
  var i3755 = i3753[2]
  var i3754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i3755.length; i += 2) {
  request.r(i3755[i + 0], i3755[i + 1], 1, i3754, '')
  }
  i3752._colorMaterials = i3754
  var i3757 = i3753[3]
  var i3756 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i3757.length; i += 1) {
    i3756.add(i3757[i + 0]);
  }
  i3752._initialColors = i3756
  i3752._diskHeight = i3753[4]
  i3752._isOfferStack = !!i3753[5]
  i3752._isSolutionStack = !!i3753[6]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3763 = data
  i3762.center = new pc.Vec3( i3763[0], i3763[1], i3763[2] )
  i3762.size = new pc.Vec3( i3763[3], i3763[4], i3763[5] )
  i3762.enabled = !!i3763[6]
  i3762.isTrigger = !!i3763[7]
  request.r(i3763[8], i3763[9], 0, i3762, 'material')
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3765 = data
  i3764.name = i3765[0]
  i3764.tagId = i3765[1]
  i3764.enabled = !!i3765[2]
  i3764.isStatic = !!i3765[3]
  i3764.layer = i3765[4]
  return i3764
}

Deserializers["HexDisk"] = function (request, data, root) {
  var i3766 = root || request.c( 'HexDisk' )
  var i3767 = data
  i3766._color = i3767[0]
  var i3769 = i3767[1]
  var i3768 = []
  for(var i = 0; i < i3769.length; i += 2) {
  request.r(i3769[i + 0], i3769[i + 1], 2, i3768, '')
  }
  i3766._renderers = i3768
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3773 = data
  request.r(i3773[0], i3773[1], 0, i3772, 'sharedMesh')
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'additionalVertexStreams')
  i3774.enabled = !!i3775[2]
  request.r(i3775[3], i3775[4], 0, i3774, 'sharedMaterial')
  var i3777 = i3775[5]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 2) {
  request.r(i3777[i + 0], i3777[i + 1], 2, i3776, '')
  }
  i3774.sharedMaterials = i3776
  i3774.receiveShadows = !!i3775[6]
  i3774.shadowCastingMode = i3775[7]
  i3774.sortingLayerID = i3775[8]
  i3774.sortingOrder = i3775[9]
  i3774.lightmapIndex = i3775[10]
  i3774.lightmapSceneIndex = i3775[11]
  i3774.lightmapScaleOffset = new pc.Vec4( i3775[12], i3775[13], i3775[14], i3775[15] )
  i3774.lightProbeUsage = i3775[16]
  i3774.reflectionProbeUsage = i3775[17]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3781 = data
  i3780.name = i3781[0]
  i3780.width = i3781[1]
  i3780.height = i3781[2]
  i3780.mipmapCount = i3781[3]
  i3780.anisoLevel = i3781[4]
  i3780.filterMode = i3781[5]
  i3780.hdr = !!i3781[6]
  i3780.format = i3781[7]
  i3780.wrapMode = i3781[8]
  i3780.alphaIsTransparency = !!i3781[9]
  i3780.alphaSource = i3781[10]
  i3780.graphicsFormat = i3781[11]
  i3780.sRGBTexture = !!i3781[12]
  i3780.desiredColorSpace = i3781[13]
  i3780.wrapU = i3781[14]
  i3780.wrapV = i3781[15]
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3783 = data
  i3782.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3783[0], i3782.main)
  i3782.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3783[1], i3782.colorBySpeed)
  i3782.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3783[2], i3782.colorOverLifetime)
  i3782.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3783[3], i3782.emission)
  i3782.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3783[4], i3782.rotationBySpeed)
  i3782.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3783[5], i3782.rotationOverLifetime)
  i3782.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3783[6], i3782.shape)
  i3782.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3783[7], i3782.sizeBySpeed)
  i3782.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3783[8], i3782.sizeOverLifetime)
  i3782.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3783[9], i3782.textureSheetAnimation)
  i3782.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3783[10], i3782.velocityOverLifetime)
  i3782.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3783[11], i3782.noise)
  i3782.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3783[12], i3782.inheritVelocity)
  i3782.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3783[13], i3782.forceOverLifetime)
  i3782.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3783[14], i3782.limitVelocityOverLifetime)
  i3782.useAutoRandomSeed = !!i3783[15]
  i3782.randomSeed = i3783[16]
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3784 = root || new pc.ParticleSystemMain()
  var i3785 = data
  i3784.duration = i3785[0]
  i3784.loop = !!i3785[1]
  i3784.prewarm = !!i3785[2]
  i3784.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[3], i3784.startDelay)
  i3784.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[4], i3784.startLifetime)
  i3784.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[5], i3784.startSpeed)
  i3784.startSize3D = !!i3785[6]
  i3784.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[7], i3784.startSizeX)
  i3784.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[8], i3784.startSizeY)
  i3784.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[9], i3784.startSizeZ)
  i3784.startRotation3D = !!i3785[10]
  i3784.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[11], i3784.startRotationX)
  i3784.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[12], i3784.startRotationY)
  i3784.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[13], i3784.startRotationZ)
  i3784.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3785[14], i3784.startColor)
  i3784.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3785[15], i3784.gravityModifier)
  i3784.simulationSpace = i3785[16]
  request.r(i3785[17], i3785[18], 0, i3784, 'customSimulationSpace')
  i3784.simulationSpeed = i3785[19]
  i3784.useUnscaledTime = !!i3785[20]
  i3784.scalingMode = i3785[21]
  i3784.playOnAwake = !!i3785[22]
  i3784.maxParticles = i3785[23]
  i3784.emitterVelocityMode = i3785[24]
  i3784.stopAction = i3785[25]
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3786 = root || new pc.MinMaxCurve()
  var i3787 = data
  i3786.mode = i3787[0]
  i3786.curveMin = new pc.AnimationCurve( { keys_flow: i3787[1] } )
  i3786.curveMax = new pc.AnimationCurve( { keys_flow: i3787[2] } )
  i3786.curveMultiplier = i3787[3]
  i3786.constantMin = i3787[4]
  i3786.constantMax = i3787[5]
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3788 = root || new pc.MinMaxGradient()
  var i3789 = data
  i3788.mode = i3789[0]
  i3788.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3789[1], i3788.gradientMin)
  i3788.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3789[2], i3788.gradientMax)
  i3788.colorMin = new pc.Color(i3789[3], i3789[4], i3789[5], i3789[6])
  i3788.colorMax = new pc.Color(i3789[7], i3789[8], i3789[9], i3789[10])
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3791 = data
  i3790.mode = i3791[0]
  var i3793 = i3791[1]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3793[i + 0]) );
  }
  i3790.colorKeys = i3792
  var i3795 = i3791[2]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3795[i + 0]) );
  }
  i3790.alphaKeys = i3794
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3796 = root || new pc.ParticleSystemColorBySpeed()
  var i3797 = data
  i3796.enabled = !!i3797[0]
  i3796.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3797[1], i3796.color)
  i3796.range = new pc.Vec2( i3797[2], i3797[3] )
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3801 = data
  i3800.color = new pc.Color(i3801[0], i3801[1], i3801[2], i3801[3])
  i3800.time = i3801[4]
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3805 = data
  i3804.alpha = i3805[0]
  i3804.time = i3805[1]
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3806 = root || new pc.ParticleSystemColorOverLifetime()
  var i3807 = data
  i3806.enabled = !!i3807[0]
  i3806.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3807[1], i3806.color)
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3808 = root || new pc.ParticleSystemEmitter()
  var i3809 = data
  i3808.enabled = !!i3809[0]
  i3808.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3809[1], i3808.rateOverTime)
  i3808.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3809[2], i3808.rateOverDistance)
  var i3811 = i3809[3]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 1) {
    i3810.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3811[i + 0]) );
  }
  i3808.bursts = i3810
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3814 = root || new pc.ParticleSystemBurst()
  var i3815 = data
  i3814.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3815[0], i3814.count)
  i3814.cycleCount = i3815[1]
  i3814.minCount = i3815[2]
  i3814.maxCount = i3815[3]
  i3814.repeatInterval = i3815[4]
  i3814.time = i3815[5]
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3816 = root || new pc.ParticleSystemRotationBySpeed()
  var i3817 = data
  i3816.enabled = !!i3817[0]
  i3816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3817[1], i3816.x)
  i3816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3817[2], i3816.y)
  i3816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3817[3], i3816.z)
  i3816.separateAxes = !!i3817[4]
  i3816.range = new pc.Vec2( i3817[5], i3817[6] )
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3818 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3819 = data
  i3818.enabled = !!i3819[0]
  i3818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3819[1], i3818.x)
  i3818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3819[2], i3818.y)
  i3818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3819[3], i3818.z)
  i3818.separateAxes = !!i3819[4]
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3820 = root || new pc.ParticleSystemShape()
  var i3821 = data
  i3820.enabled = !!i3821[0]
  i3820.shapeType = i3821[1]
  i3820.randomDirectionAmount = i3821[2]
  i3820.sphericalDirectionAmount = i3821[3]
  i3820.randomPositionAmount = i3821[4]
  i3820.alignToDirection = !!i3821[5]
  i3820.radius = i3821[6]
  i3820.radiusMode = i3821[7]
  i3820.radiusSpread = i3821[8]
  i3820.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3821[9], i3820.radiusSpeed)
  i3820.radiusThickness = i3821[10]
  i3820.angle = i3821[11]
  i3820.length = i3821[12]
  i3820.boxThickness = new pc.Vec3( i3821[13], i3821[14], i3821[15] )
  i3820.meshShapeType = i3821[16]
  request.r(i3821[17], i3821[18], 0, i3820, 'mesh')
  request.r(i3821[19], i3821[20], 0, i3820, 'meshRenderer')
  request.r(i3821[21], i3821[22], 0, i3820, 'skinnedMeshRenderer')
  i3820.useMeshMaterialIndex = !!i3821[23]
  i3820.meshMaterialIndex = i3821[24]
  i3820.useMeshColors = !!i3821[25]
  i3820.normalOffset = i3821[26]
  i3820.arc = i3821[27]
  i3820.arcMode = i3821[28]
  i3820.arcSpread = i3821[29]
  i3820.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3821[30], i3820.arcSpeed)
  i3820.donutRadius = i3821[31]
  i3820.position = new pc.Vec3( i3821[32], i3821[33], i3821[34] )
  i3820.rotation = new pc.Vec3( i3821[35], i3821[36], i3821[37] )
  i3820.scale = new pc.Vec3( i3821[38], i3821[39], i3821[40] )
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3822 = root || new pc.ParticleSystemSizeBySpeed()
  var i3823 = data
  i3822.enabled = !!i3823[0]
  i3822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3823[1], i3822.x)
  i3822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3823[2], i3822.y)
  i3822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3823[3], i3822.z)
  i3822.separateAxes = !!i3823[4]
  i3822.range = new pc.Vec2( i3823[5], i3823[6] )
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3824 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3825 = data
  i3824.enabled = !!i3825[0]
  i3824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3825[1], i3824.x)
  i3824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3825[2], i3824.y)
  i3824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3825[3], i3824.z)
  i3824.separateAxes = !!i3825[4]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3826 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3827 = data
  i3826.enabled = !!i3827[0]
  i3826.mode = i3827[1]
  i3826.animation = i3827[2]
  i3826.numTilesX = i3827[3]
  i3826.numTilesY = i3827[4]
  i3826.useRandomRow = !!i3827[5]
  i3826.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3827[6], i3826.frameOverTime)
  i3826.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3827[7], i3826.startFrame)
  i3826.cycleCount = i3827[8]
  i3826.rowIndex = i3827[9]
  i3826.flipU = i3827[10]
  i3826.flipV = i3827[11]
  i3826.spriteCount = i3827[12]
  var i3829 = i3827[13]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 2) {
  request.r(i3829[i + 0], i3829[i + 1], 2, i3828, '')
  }
  i3826.sprites = i3828
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3832 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3833 = data
  i3832.enabled = !!i3833[0]
  i3832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[1], i3832.x)
  i3832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[2], i3832.y)
  i3832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[3], i3832.z)
  i3832.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[4], i3832.radial)
  i3832.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[5], i3832.speedModifier)
  i3832.space = i3833[6]
  i3832.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[7], i3832.orbitalX)
  i3832.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[8], i3832.orbitalY)
  i3832.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[9], i3832.orbitalZ)
  i3832.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[10], i3832.orbitalOffsetX)
  i3832.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[11], i3832.orbitalOffsetY)
  i3832.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[12], i3832.orbitalOffsetZ)
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3834 = root || new pc.ParticleSystemNoise()
  var i3835 = data
  i3834.enabled = !!i3835[0]
  i3834.separateAxes = !!i3835[1]
  i3834.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[2], i3834.strengthX)
  i3834.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[3], i3834.strengthY)
  i3834.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[4], i3834.strengthZ)
  i3834.frequency = i3835[5]
  i3834.damping = !!i3835[6]
  i3834.octaveCount = i3835[7]
  i3834.octaveMultiplier = i3835[8]
  i3834.octaveScale = i3835[9]
  i3834.quality = i3835[10]
  i3834.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[11], i3834.scrollSpeed)
  i3834.scrollSpeedMultiplier = i3835[12]
  i3834.remapEnabled = !!i3835[13]
  i3834.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[14], i3834.remapX)
  i3834.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[15], i3834.remapY)
  i3834.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[16], i3834.remapZ)
  i3834.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[17], i3834.positionAmount)
  i3834.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[18], i3834.rotationAmount)
  i3834.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[19], i3834.sizeAmount)
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3836 = root || new pc.ParticleSystemInheritVelocity()
  var i3837 = data
  i3836.enabled = !!i3837[0]
  i3836.mode = i3837[1]
  i3836.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3837[2], i3836.curve)
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3838 = root || new pc.ParticleSystemForceOverLifetime()
  var i3839 = data
  i3838.enabled = !!i3839[0]
  i3838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3839[1], i3838.x)
  i3838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3839[2], i3838.y)
  i3838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3839[3], i3838.z)
  i3838.space = i3839[4]
  i3838.randomized = !!i3839[5]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3840 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3841 = data
  i3840.enabled = !!i3841[0]
  i3840.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3841[1], i3840.limit)
  i3840.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3841[2], i3840.limitX)
  i3840.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3841[3], i3840.limitY)
  i3840.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3841[4], i3840.limitZ)
  i3840.dampen = i3841[5]
  i3840.separateAxes = !!i3841[6]
  i3840.space = i3841[7]
  i3840.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3841[8], i3840.drag)
  i3840.multiplyDragByParticleSize = !!i3841[9]
  i3840.multiplyDragByParticleVelocity = !!i3841[10]
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3843 = data
  request.r(i3843[0], i3843[1], 0, i3842, 'mesh')
  i3842.meshCount = i3843[2]
  i3842.activeVertexStreamsCount = i3843[3]
  i3842.alignment = i3843[4]
  i3842.renderMode = i3843[5]
  i3842.sortMode = i3843[6]
  i3842.lengthScale = i3843[7]
  i3842.velocityScale = i3843[8]
  i3842.cameraVelocityScale = i3843[9]
  i3842.normalDirection = i3843[10]
  i3842.sortingFudge = i3843[11]
  i3842.minParticleSize = i3843[12]
  i3842.maxParticleSize = i3843[13]
  i3842.pivot = new pc.Vec3( i3843[14], i3843[15], i3843[16] )
  request.r(i3843[17], i3843[18], 0, i3842, 'trailMaterial')
  i3842.applyActiveColorSpace = !!i3843[19]
  i3842.enabled = !!i3843[20]
  request.r(i3843[21], i3843[22], 0, i3842, 'sharedMaterial')
  var i3845 = i3843[23]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 2) {
  request.r(i3845[i + 0], i3845[i + 1], 2, i3844, '')
  }
  i3842.sharedMaterials = i3844
  i3842.receiveShadows = !!i3843[24]
  i3842.shadowCastingMode = i3843[25]
  i3842.sortingLayerID = i3843[26]
  i3842.sortingOrder = i3843[27]
  i3842.lightmapIndex = i3843[28]
  i3842.lightmapSceneIndex = i3843[29]
  i3842.lightmapScaleOffset = new pc.Vec4( i3843[30], i3843[31], i3843[32], i3843[33] )
  i3842.lightProbeUsage = i3843[34]
  i3842.reflectionProbeUsage = i3843[35]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3847 = data
  i3846.name = i3847[0]
  i3846.atlasId = i3847[1]
  i3846.mipmapCount = i3847[2]
  i3846.hdr = !!i3847[3]
  i3846.size = i3847[4]
  i3846.anisoLevel = i3847[5]
  i3846.filterMode = i3847[6]
  var i3849 = i3847[7]
  var i3848 = []
  for(var i = 0; i < i3849.length; i += 4) {
    i3848.push( UnityEngine.Rect.MinMaxRect(i3849[i + 0], i3849[i + 1], i3849[i + 2], i3849[i + 3]) );
  }
  i3846.rects = i3848
  i3846.wrapU = i3847[8]
  i3846.wrapV = i3847[9]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3853 = data
  i3852.name = i3853[0]
  i3852.index = i3853[1]
  i3852.startup = !!i3853[2]
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3855 = data
  i3854.aspect = i3855[0]
  i3854.orthographic = !!i3855[1]
  i3854.orthographicSize = i3855[2]
  i3854.backgroundColor = new pc.Color(i3855[3], i3855[4], i3855[5], i3855[6])
  i3854.nearClipPlane = i3855[7]
  i3854.farClipPlane = i3855[8]
  i3854.fieldOfView = i3855[9]
  i3854.depth = i3855[10]
  i3854.clearFlags = i3855[11]
  i3854.cullingMask = i3855[12]
  i3854.rect = i3855[13]
  request.r(i3855[14], i3855[15], 0, i3854, 'targetTexture')
  i3854.usePhysicalProperties = !!i3855[16]
  i3854.focalLength = i3855[17]
  i3854.sensorSize = new pc.Vec2( i3855[18], i3855[19] )
  i3854.lensShift = new pc.Vec2( i3855[20], i3855[21] )
  i3854.gateFit = i3855[22]
  i3854.commandBufferCount = i3855[23]
  i3854.cameraType = i3855[24]
  i3854.enabled = !!i3855[25]
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3857 = data
  i3856.type = i3857[0]
  i3856.color = new pc.Color(i3857[1], i3857[2], i3857[3], i3857[4])
  i3856.cullingMask = i3857[5]
  i3856.intensity = i3857[6]
  i3856.range = i3857[7]
  i3856.spotAngle = i3857[8]
  i3856.shadows = i3857[9]
  i3856.shadowNormalBias = i3857[10]
  i3856.shadowBias = i3857[11]
  i3856.shadowStrength = i3857[12]
  i3856.shadowResolution = i3857[13]
  i3856.lightmapBakeType = i3857[14]
  i3856.renderMode = i3857[15]
  request.r(i3857[16], i3857[17], 0, i3856, 'cookie')
  i3856.cookieSize = i3857[18]
  i3856.shadowNearPlane = i3857[19]
  i3856.occlusionMaskChannel = i3857[20]
  i3856.isBaked = !!i3857[21]
  i3856.mixedLightingMode = i3857[22]
  i3856.enabled = !!i3857[23]
  return i3856
}

Deserializers["BoardController"] = function (request, data, root) {
  var i3858 = root || request.c( 'BoardController' )
  var i3859 = data
  request.r(i3859[0], i3859[1], 0, i3858, '_grid')
  var i3861 = i3859[2]
  var i3860 = new (System.Collections.Generic.List$1(Bridge.ns('HexCell')))
  for(var i = 0; i < i3861.length; i += 2) {
  request.r(i3861[i + 0], i3861[i + 1], 1, i3860, '')
  }
  i3858._cells = i3860
  request.r(i3859[3], i3859[4], 0, i3858, '_stackPrefab')
  request.r(i3859[5], i3859[6], 0, i3858, '_diskPrefab')
  var i3863 = i3859[7]
  var i3862 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i3863.length; i += 2) {
  request.r(i3863[i + 0], i3863[i + 1], 1, i3862, '')
  }
  i3858._colorMaterials = i3862
  i3858._snapRadius = i3859[8]
  return i3858
}

Deserializers["HexCell"] = function (request, data, root) {
  var i3866 = root || request.c( 'HexCell' )
  var i3867 = data
  var i3869 = i3867[0]
  var i3868 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.add(i3869[i + 0]);
  }
  i3866._initialStackColors = i3868
  request.r(i3867[1], i3867[2], 0, i3866, '_currentStack')
  request.r(i3867[3], i3867[4], 0, i3866, '_ringRenderer')
  return i3866
}

Deserializers["GameController"] = function (request, data, root) {
  var i3870 = root || request.c( 'GameController' )
  var i3871 = data
  request.r(i3871[0], i3871[1], 0, i3870, '_gameCamera')
  request.r(i3871[2], i3871[3], 0, i3870, '_board')
  request.r(i3871[4], i3871[5], 0, i3870, '_dragController')
  request.r(i3871[6], i3871[7], 0, i3870, '_reactionResolver')
  request.r(i3871[8], i3871[9], 0, i3870, '_tutorial')
  request.r(i3871[10], i3871[11], 0, i3870, '_packshot')
  return i3870
}

Deserializers["DragController"] = function (request, data, root) {
  var i3872 = root || request.c( 'DragController' )
  var i3873 = data
  i3872._draggableMask = UnityEngine.LayerMask.FromIntegerValue( i3873[0] )
  i3872._liftHeight = i3873[1]
  i3872._followLerp = i3873[2]
  return i3872
}

Deserializers["ReactionResolver"] = function (request, data, root) {
  var i3874 = root || request.c( 'ReactionResolver' )
  var i3875 = data
  request.r(i3875[0], i3875[1], 0, i3874, '_vanishFxPrefab')
  i3874._baseFlyDuration = i3875[2]
  i3874._baseVanishDuration = i3875[3]
  i3874._speedIncrease = i3875[4]
  i3874._maxReactionSpeedMultiplier = i3875[5]
  i3874._diskLaunchInterval = i3875[6]
  i3874._edgePivotOffset = i3875[7]
  i3874._rollDegrees = i3875[8]
  i3874._vanishStackSize = i3875[9]
  return i3874
}

Deserializers["TutorialController"] = function (request, data, root) {
  var i3876 = root || request.c( 'TutorialController' )
  var i3877 = data
  request.r(i3877[0], i3877[1], 0, i3876, '_hand')
  request.r(i3877[2], i3877[3], 0, i3876, '_canvas')
  request.r(i3877[4], i3877[5], 0, i3876, '_gameCamera')
  request.r(i3877[6], i3877[7], 0, i3876, '_sourceStack')
  i3876._replayDelay = i3877[8]
  i3876._pressOffset = new pc.Vec2( i3877[9], i3877[10] )
  i3876._releaseOffset = new pc.Vec2( i3877[11], i3877[12] )
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3879 = data
  i3878.pivot = new pc.Vec2( i3879[0], i3879[1] )
  i3878.anchorMin = new pc.Vec2( i3879[2], i3879[3] )
  i3878.anchorMax = new pc.Vec2( i3879[4], i3879[5] )
  i3878.sizeDelta = new pc.Vec2( i3879[6], i3879[7] )
  i3878.anchoredPosition3D = new pc.Vec3( i3879[8], i3879[9], i3879[10] )
  i3878.rotation = new pc.Quat(i3879[11], i3879[12], i3879[13], i3879[14])
  i3878.scale = new pc.Vec3( i3879[15], i3879[16], i3879[17] )
  return i3878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3881 = data
  i3880.planeDistance = i3881[0]
  i3880.referencePixelsPerUnit = i3881[1]
  i3880.isFallbackOverlay = !!i3881[2]
  i3880.renderMode = i3881[3]
  i3880.renderOrder = i3881[4]
  i3880.sortingLayerName = i3881[5]
  i3880.sortingOrder = i3881[6]
  i3880.scaleFactor = i3881[7]
  request.r(i3881[8], i3881[9], 0, i3880, 'worldCamera')
  i3880.overrideSorting = !!i3881[10]
  i3880.pixelPerfect = !!i3881[11]
  i3880.targetDisplay = i3881[12]
  i3880.overridePixelPerfect = !!i3881[13]
  i3880.enabled = !!i3881[14]
  return i3880
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3882 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3883 = data
  i3882.m_UiScaleMode = i3883[0]
  i3882.m_ReferencePixelsPerUnit = i3883[1]
  i3882.m_ScaleFactor = i3883[2]
  i3882.m_ReferenceResolution = new pc.Vec2( i3883[3], i3883[4] )
  i3882.m_ScreenMatchMode = i3883[5]
  i3882.m_MatchWidthOrHeight = i3883[6]
  i3882.m_PhysicalUnit = i3883[7]
  i3882.m_FallbackScreenDPI = i3883[8]
  i3882.m_DefaultSpriteDPI = i3883[9]
  i3882.m_DynamicPixelsPerUnit = i3883[10]
  i3882.m_PresetInfoIsWorld = !!i3883[11]
  return i3882
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3884 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3885 = data
  i3884.m_IgnoreReversedGraphics = !!i3885[0]
  i3884.m_BlockingObjects = i3885[1]
  i3884.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3885[2] )
  return i3884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3887 = data
  i3886.cullTransparentMesh = !!i3887[0]
  return i3886
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3888 = root || request.c( 'UnityEngine.UI.Image' )
  var i3889 = data
  request.r(i3889[0], i3889[1], 0, i3888, 'm_Sprite')
  i3888.m_Type = i3889[2]
  i3888.m_PreserveAspect = !!i3889[3]
  i3888.m_FillCenter = !!i3889[4]
  i3888.m_FillMethod = i3889[5]
  i3888.m_FillAmount = i3889[6]
  i3888.m_FillClockwise = !!i3889[7]
  i3888.m_FillOrigin = i3889[8]
  i3888.m_UseSpriteMesh = !!i3889[9]
  i3888.m_PixelsPerUnitMultiplier = i3889[10]
  request.r(i3889[11], i3889[12], 0, i3888, 'm_Material')
  i3888.m_Maskable = !!i3889[13]
  i3888.m_Color = new pc.Color(i3889[14], i3889[15], i3889[16], i3889[17])
  i3888.m_RaycastTarget = !!i3889[18]
  i3888.m_RaycastPadding = new pc.Vec4( i3889[19], i3889[20], i3889[21], i3889[22] )
  return i3888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3891 = data
  i3890.m_Alpha = i3891[0]
  i3890.m_Interactable = !!i3891[1]
  i3890.m_BlocksRaycasts = !!i3891[2]
  i3890.m_IgnoreParentGroups = !!i3891[3]
  i3890.enabled = !!i3891[4]
  return i3890
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i3892 = root || request.c( 'PackshotController' )
  var i3893 = data
  request.r(i3893[0], i3893[1], 0, i3892, '_group')
  request.r(i3893[2], i3893[3], 0, i3892, '_playNowButton')
  request.r(i3893[4], i3893[5], 0, i3892, '_playButtonView')
  i3892._fadeDuration = i3893[6]
  return i3892
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3894 = root || request.c( 'UnityEngine.UI.Text' )
  var i3895 = data
  i3894.m_FontData = request.d('UnityEngine.UI.FontData', i3895[0], i3894.m_FontData)
  i3894.m_Text = i3895[1]
  request.r(i3895[2], i3895[3], 0, i3894, 'm_Material')
  i3894.m_Maskable = !!i3895[4]
  i3894.m_Color = new pc.Color(i3895[5], i3895[6], i3895[7], i3895[8])
  i3894.m_RaycastTarget = !!i3895[9]
  i3894.m_RaycastPadding = new pc.Vec4( i3895[10], i3895[11], i3895[12], i3895[13] )
  return i3894
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3896 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3897 = data
  request.r(i3897[0], i3897[1], 0, i3896, 'm_Font')
  i3896.m_FontSize = i3897[2]
  i3896.m_FontStyle = i3897[3]
  i3896.m_BestFit = !!i3897[4]
  i3896.m_MinSize = i3897[5]
  i3896.m_MaxSize = i3897[6]
  i3896.m_Alignment = i3897[7]
  i3896.m_AlignByGeometry = !!i3897[8]
  i3896.m_RichText = !!i3897[9]
  i3896.m_HorizontalOverflow = i3897[10]
  i3896.m_VerticalOverflow = i3897[11]
  i3896.m_LineSpacing = i3897[12]
  return i3896
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3898 = root || request.c( 'UnityEngine.UI.Button' )
  var i3899 = data
  i3898.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3899[0], i3898.m_OnClick)
  i3898.m_Navigation = request.d('UnityEngine.UI.Navigation', i3899[1], i3898.m_Navigation)
  i3898.m_Transition = i3899[2]
  i3898.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3899[3], i3898.m_Colors)
  i3898.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3899[4], i3898.m_SpriteState)
  i3898.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3899[5], i3898.m_AnimationTriggers)
  i3898.m_Interactable = !!i3899[6]
  request.r(i3899[7], i3899[8], 0, i3898, 'm_TargetGraphic')
  return i3898
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3900 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3901 = data
  i3900.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3901[0], i3900.m_PersistentCalls)
  return i3900
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3902 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3903 = data
  var i3905 = i3903[0]
  var i3904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3905.length; i += 1) {
    i3904.add(request.d('UnityEngine.Events.PersistentCall', i3905[i + 0]));
  }
  i3902.m_Calls = i3904
  return i3902
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3908 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3909 = data
  request.r(i3909[0], i3909[1], 0, i3908, 'm_Target')
  i3908.m_TargetAssemblyTypeName = i3909[2]
  i3908.m_MethodName = i3909[3]
  i3908.m_Mode = i3909[4]
  i3908.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3909[5], i3908.m_Arguments)
  i3908.m_CallState = i3909[6]
  return i3908
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3910 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3911 = data
  i3910.m_Mode = i3911[0]
  i3910.m_WrapAround = !!i3911[1]
  request.r(i3911[2], i3911[3], 0, i3910, 'm_SelectOnUp')
  request.r(i3911[4], i3911[5], 0, i3910, 'm_SelectOnDown')
  request.r(i3911[6], i3911[7], 0, i3910, 'm_SelectOnLeft')
  request.r(i3911[8], i3911[9], 0, i3910, 'm_SelectOnRight')
  return i3910
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3912 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3913 = data
  i3912.m_NormalColor = new pc.Color(i3913[0], i3913[1], i3913[2], i3913[3])
  i3912.m_HighlightedColor = new pc.Color(i3913[4], i3913[5], i3913[6], i3913[7])
  i3912.m_PressedColor = new pc.Color(i3913[8], i3913[9], i3913[10], i3913[11])
  i3912.m_SelectedColor = new pc.Color(i3913[12], i3913[13], i3913[14], i3913[15])
  i3912.m_DisabledColor = new pc.Color(i3913[16], i3913[17], i3913[18], i3913[19])
  i3912.m_ColorMultiplier = i3913[20]
  i3912.m_FadeDuration = i3913[21]
  return i3912
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3914 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3915 = data
  request.r(i3915[0], i3915[1], 0, i3914, 'm_HighlightedSprite')
  request.r(i3915[2], i3915[3], 0, i3914, 'm_PressedSprite')
  request.r(i3915[4], i3915[5], 0, i3914, 'm_SelectedSprite')
  request.r(i3915[6], i3915[7], 0, i3914, 'm_DisabledSprite')
  return i3914
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3916 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3917 = data
  i3916.m_NormalTrigger = i3917[0]
  i3916.m_HighlightedTrigger = i3917[1]
  i3916.m_PressedTrigger = i3917[2]
  i3916.m_SelectedTrigger = i3917[3]
  i3916.m_DisabledTrigger = i3917[4]
  return i3916
}

Deserializers["PlayButtonView"] = function (request, data, root) {
  var i3918 = root || request.c( 'PlayButtonView' )
  var i3919 = data
  request.r(i3919[0], i3919[1], 0, i3918, '_target')
  i3918._pulseScale = i3919[2]
  i3918._pulseDuration = i3919[3]
  return i3918
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3920 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3921 = data
  request.r(i3921[0], i3921[1], 0, i3920, 'm_FirstSelected')
  i3920.m_sendNavigationEvents = !!i3921[2]
  i3920.m_DragThreshold = i3921[3]
  return i3920
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3922 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3923 = data
  i3922.m_HorizontalAxis = i3923[0]
  i3922.m_VerticalAxis = i3923[1]
  i3922.m_SubmitButton = i3923[2]
  i3922.m_CancelButton = i3923[3]
  i3922.m_InputActionsPerSecond = i3923[4]
  i3922.m_RepeatDelay = i3923[5]
  i3922.m_ForceModuleActive = !!i3923[6]
  i3922.m_SendPointerHoverToParent = !!i3923[7]
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3925 = data
  i3924.ambientIntensity = i3925[0]
  i3924.reflectionIntensity = i3925[1]
  i3924.ambientMode = i3925[2]
  i3924.ambientLight = new pc.Color(i3925[3], i3925[4], i3925[5], i3925[6])
  i3924.ambientSkyColor = new pc.Color(i3925[7], i3925[8], i3925[9], i3925[10])
  i3924.ambientGroundColor = new pc.Color(i3925[11], i3925[12], i3925[13], i3925[14])
  i3924.ambientEquatorColor = new pc.Color(i3925[15], i3925[16], i3925[17], i3925[18])
  i3924.fogColor = new pc.Color(i3925[19], i3925[20], i3925[21], i3925[22])
  i3924.fogEndDistance = i3925[23]
  i3924.fogStartDistance = i3925[24]
  i3924.fogDensity = i3925[25]
  i3924.fog = !!i3925[26]
  request.r(i3925[27], i3925[28], 0, i3924, 'skybox')
  i3924.fogMode = i3925[29]
  var i3927 = i3925[30]
  var i3926 = []
  for(var i = 0; i < i3927.length; i += 1) {
    i3926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3927[i + 0]) );
  }
  i3924.lightmaps = i3926
  i3924.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3925[31], i3924.lightProbes)
  i3924.lightmapsMode = i3925[32]
  i3924.mixedBakeMode = i3925[33]
  i3924.environmentLightingMode = i3925[34]
  i3924.ambientProbe = new pc.SphericalHarmonicsL2(i3925[35])
  request.r(i3925[36], i3925[37], 0, i3924, 'customReflection')
  request.r(i3925[38], i3925[39], 0, i3924, 'defaultReflection')
  i3924.defaultReflectionMode = i3925[40]
  i3924.defaultReflectionResolution = i3925[41]
  i3924.sunLightObjectId = i3925[42]
  i3924.pixelLightCount = i3925[43]
  i3924.defaultReflectionHDR = !!i3925[44]
  i3924.hasLightDataAsset = !!i3925[45]
  i3924.hasManualGenerate = !!i3925[46]
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3931 = data
  request.r(i3931[0], i3931[1], 0, i3930, 'lightmapColor')
  request.r(i3931[2], i3931[3], 0, i3930, 'lightmapDirection')
  request.r(i3931[4], i3931[5], 0, i3930, 'shadowMask')
  return i3930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3932 = root || new UnityEngine.LightProbes()
  var i3933 = data
  return i3932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3941 = data
  var i3943 = i3941[0]
  var i3942 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3943[i + 0]));
  }
  i3940.ShaderCompilationErrors = i3942
  i3940.name = i3941[1]
  i3940.guid = i3941[2]
  var i3945 = i3941[3]
  var i3944 = []
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.push( i3945[i + 0] );
  }
  i3940.shaderDefinedKeywords = i3944
  var i3947 = i3941[4]
  var i3946 = []
  for(var i = 0; i < i3947.length; i += 1) {
    i3946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3947[i + 0]) );
  }
  i3940.passes = i3946
  var i3949 = i3941[5]
  var i3948 = []
  for(var i = 0; i < i3949.length; i += 1) {
    i3948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3949[i + 0]) );
  }
  i3940.usePasses = i3948
  var i3951 = i3941[6]
  var i3950 = []
  for(var i = 0; i < i3951.length; i += 1) {
    i3950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3951[i + 0]) );
  }
  i3940.defaultParameterValues = i3950
  request.r(i3941[7], i3941[8], 0, i3940, 'unityFallbackShader')
  i3940.readDepth = !!i3941[9]
  i3940.hasDepthOnlyPass = !!i3941[10]
  i3940.isCreatedByShaderGraph = !!i3941[11]
  i3940.disableBatching = !!i3941[12]
  i3940.compiled = !!i3941[13]
  return i3940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3955 = data
  i3954.shaderName = i3955[0]
  i3954.errorMessage = i3955[1]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3960 = root || new pc.UnityShaderPass()
  var i3961 = data
  i3960.id = i3961[0]
  i3960.subShaderIndex = i3961[1]
  i3960.name = i3961[2]
  i3960.passType = i3961[3]
  i3960.grabPassTextureName = i3961[4]
  i3960.usePass = !!i3961[5]
  i3960.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3961[6], i3960.zTest)
  i3960.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3961[7], i3960.zWrite)
  i3960.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3961[8], i3960.culling)
  i3960.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3961[9], i3960.blending)
  i3960.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3961[10], i3960.alphaBlending)
  i3960.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3961[11], i3960.colorWriteMask)
  i3960.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3961[12], i3960.offsetUnits)
  i3960.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3961[13], i3960.offsetFactor)
  i3960.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3961[14], i3960.stencilRef)
  i3960.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3961[15], i3960.stencilReadMask)
  i3960.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3961[16], i3960.stencilWriteMask)
  i3960.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3961[17], i3960.stencilOp)
  i3960.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3961[18], i3960.stencilOpFront)
  i3960.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3961[19], i3960.stencilOpBack)
  var i3963 = i3961[20]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3963[i + 0]) );
  }
  i3960.tags = i3962
  var i3965 = i3961[21]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.push( i3965[i + 0] );
  }
  i3960.passDefinedKeywords = i3964
  var i3967 = i3961[22]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3967[i + 0]) );
  }
  i3960.passDefinedKeywordGroups = i3966
  var i3969 = i3961[23]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3969[i + 0]) );
  }
  i3960.variants = i3968
  var i3971 = i3961[24]
  var i3970 = []
  for(var i = 0; i < i3971.length; i += 1) {
    i3970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3971[i + 0]) );
  }
  i3960.excludedVariants = i3970
  i3960.hasDepthReader = !!i3961[25]
  return i3960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3973 = data
  i3972.val = i3973[0]
  i3972.name = i3973[1]
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3975 = data
  i3974.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3975[0], i3974.src)
  i3974.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3975[1], i3974.dst)
  i3974.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3975[2], i3974.op)
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3977 = data
  i3976.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3977[0], i3976.pass)
  i3976.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3977[1], i3976.fail)
  i3976.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3977[2], i3976.zFail)
  i3976.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3977[3], i3976.comp)
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3981 = data
  i3980.name = i3981[0]
  i3980.value = i3981[1]
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3985 = data
  var i3987 = i3985[0]
  var i3986 = []
  for(var i = 0; i < i3987.length; i += 1) {
    i3986.push( i3987[i + 0] );
  }
  i3984.keywords = i3986
  i3984.hasDiscard = !!i3985[1]
  return i3984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3991 = data
  i3990.passId = i3991[0]
  i3990.subShaderIndex = i3991[1]
  var i3993 = i3991[2]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( i3993[i + 0] );
  }
  i3990.keywords = i3992
  i3990.vertexProgram = i3991[3]
  i3990.fragmentProgram = i3991[4]
  i3990.exportedForWebGl2 = !!i3991[5]
  i3990.readDepth = !!i3991[6]
  return i3990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3997 = data
  request.r(i3997[0], i3997[1], 0, i3996, 'shader')
  i3996.pass = i3997[2]
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4001 = data
  i4000.name = i4001[0]
  i4000.type = i4001[1]
  i4000.value = new pc.Vec4( i4001[2], i4001[3], i4001[4], i4001[5] )
  i4000.textureValue = i4001[6]
  i4000.shaderPropertyFlag = i4001[7]
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4003 = data
  i4002.name = i4003[0]
  request.r(i4003[1], i4003[2], 0, i4002, 'texture')
  i4002.aabb = i4003[3]
  i4002.vertices = i4003[4]
  i4002.triangles = i4003[5]
  i4002.textureRect = UnityEngine.Rect.MinMaxRect(i4003[6], i4003[7], i4003[8], i4003[9])
  i4002.packedRect = UnityEngine.Rect.MinMaxRect(i4003[10], i4003[11], i4003[12], i4003[13])
  i4002.border = new pc.Vec4( i4003[14], i4003[15], i4003[16], i4003[17] )
  i4002.transparency = i4003[18]
  i4002.bounds = i4003[19]
  i4002.pixelsPerUnit = i4003[20]
  i4002.textureWidth = i4003[21]
  i4002.textureHeight = i4003[22]
  i4002.nativeSize = new pc.Vec2( i4003[23], i4003[24] )
  i4002.pivot = new pc.Vec2( i4003[25], i4003[26] )
  i4002.textureRectOffset = new pc.Vec2( i4003[27], i4003[28] )
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4005 = data
  i4004.name = i4005[0]
  i4004.ascent = i4005[1]
  i4004.originalLineHeight = i4005[2]
  i4004.fontSize = i4005[3]
  var i4007 = i4005[4]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4007[i + 0]) );
  }
  i4004.characterInfo = i4006
  request.r(i4005[5], i4005[6], 0, i4004, 'texture')
  i4004.originalFontSize = i4005[7]
  return i4004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4011 = data
  i4010.index = i4011[0]
  i4010.advance = i4011[1]
  i4010.bearing = i4011[2]
  i4010.glyphWidth = i4011[3]
  i4010.glyphHeight = i4011[4]
  i4010.minX = i4011[5]
  i4010.maxX = i4011[6]
  i4010.minY = i4011[7]
  i4010.maxY = i4011[8]
  i4010.uvBottomLeftX = i4011[9]
  i4010.uvBottomLeftY = i4011[10]
  i4010.uvBottomRightX = i4011[11]
  i4010.uvBottomRightY = i4011[12]
  i4010.uvTopLeftX = i4011[13]
  i4010.uvTopLeftY = i4011[14]
  i4010.uvTopRightX = i4011[15]
  i4010.uvTopRightY = i4011[16]
  return i4010
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4013 = data
  i4012.useSafeMode = !!i4013[0]
  i4012.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4013[1], i4012.safeModeOptions)
  i4012.timeScale = i4013[2]
  i4012.unscaledTimeScale = i4013[3]
  i4012.useSmoothDeltaTime = !!i4013[4]
  i4012.maxSmoothUnscaledTime = i4013[5]
  i4012.rewindCallbackMode = i4013[6]
  i4012.showUnityEditorReport = !!i4013[7]
  i4012.logBehaviour = i4013[8]
  i4012.drawGizmos = !!i4013[9]
  i4012.defaultRecyclable = !!i4013[10]
  i4012.defaultAutoPlay = i4013[11]
  i4012.defaultUpdateType = i4013[12]
  i4012.defaultTimeScaleIndependent = !!i4013[13]
  i4012.defaultEaseType = i4013[14]
  i4012.defaultEaseOvershootOrAmplitude = i4013[15]
  i4012.defaultEasePeriod = i4013[16]
  i4012.defaultAutoKill = !!i4013[17]
  i4012.defaultLoopType = i4013[18]
  i4012.debugMode = !!i4013[19]
  i4012.debugStoreTargetId = !!i4013[20]
  i4012.showPreviewPanel = !!i4013[21]
  i4012.storeSettingsLocation = i4013[22]
  i4012.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4013[23], i4012.modules)
  i4012.createASMDEF = !!i4013[24]
  i4012.showPlayingTweens = !!i4013[25]
  i4012.showPausedTweens = !!i4013[26]
  return i4012
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4014 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4015 = data
  i4014.logBehaviour = i4015[0]
  i4014.nestedTweenFailureBehaviour = i4015[1]
  return i4014
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4016 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4017 = data
  i4016.showPanel = !!i4017[0]
  i4016.audioEnabled = !!i4017[1]
  i4016.physicsEnabled = !!i4017[2]
  i4016.physics2DEnabled = !!i4017[3]
  i4016.spriteEnabled = !!i4017[4]
  i4016.uiEnabled = !!i4017[5]
  i4016.textMeshProEnabled = !!i4017[6]
  i4016.tk2DEnabled = !!i4017[7]
  i4016.deAudioEnabled = !!i4017[8]
  i4016.deUnityExtendedEnabled = !!i4017[9]
  i4016.epoOutlineEnabled = !!i4017[10]
  return i4016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4019 = data
  var i4021 = i4019[0]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 1) {
    i4020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4021[i + 0]) );
  }
  i4018.files = i4020
  i4018.componentToPrefabIds = i4019[1]
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4025 = data
  i4024.path = i4025[0]
  request.r(i4025[1], i4025[2], 0, i4024, 'unityObject')
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4027 = data
  var i4029 = i4027[0]
  var i4028 = []
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4029[i + 0]) );
  }
  i4026.scriptsExecutionOrder = i4028
  var i4031 = i4027[1]
  var i4030 = []
  for(var i = 0; i < i4031.length; i += 1) {
    i4030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4031[i + 0]) );
  }
  i4026.sortingLayers = i4030
  var i4033 = i4027[2]
  var i4032 = []
  for(var i = 0; i < i4033.length; i += 1) {
    i4032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4033[i + 0]) );
  }
  i4026.cullingLayers = i4032
  i4026.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4027[3], i4026.timeSettings)
  i4026.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4027[4], i4026.physicsSettings)
  i4026.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4027[5], i4026.physics2DSettings)
  i4026.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4027[6], i4026.qualitySettings)
  i4026.enableRealtimeShadows = !!i4027[7]
  i4026.enableAutoInstancing = !!i4027[8]
  i4026.enableStaticBatching = !!i4027[9]
  i4026.enableDynamicBatching = !!i4027[10]
  i4026.usePreservativeDynamicBatching = !!i4027[11]
  i4026.lightmapEncodingQuality = i4027[12]
  i4026.desiredColorSpace = i4027[13]
  var i4035 = i4027[14]
  var i4034 = []
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.push( i4035[i + 0] );
  }
  i4026.allTags = i4034
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4039 = data
  i4038.name = i4039[0]
  i4038.value = i4039[1]
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4043 = data
  i4042.id = i4043[0]
  i4042.name = i4043[1]
  i4042.value = i4043[2]
  return i4042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4047 = data
  i4046.id = i4047[0]
  i4046.name = i4047[1]
  return i4046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4049 = data
  i4048.fixedDeltaTime = i4049[0]
  i4048.maximumDeltaTime = i4049[1]
  i4048.timeScale = i4049[2]
  i4048.maximumParticleTimestep = i4049[3]
  return i4048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4051 = data
  i4050.gravity = new pc.Vec3( i4051[0], i4051[1], i4051[2] )
  i4050.defaultSolverIterations = i4051[3]
  i4050.bounceThreshold = i4051[4]
  i4050.autoSyncTransforms = !!i4051[5]
  i4050.autoSimulation = !!i4051[6]
  var i4053 = i4051[7]
  var i4052 = []
  for(var i = 0; i < i4053.length; i += 1) {
    i4052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4053[i + 0]) );
  }
  i4050.collisionMatrix = i4052
  return i4050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4057 = data
  i4056.enabled = !!i4057[0]
  i4056.layerId = i4057[1]
  i4056.otherLayerId = i4057[2]
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4059 = data
  request.r(i4059[0], i4059[1], 0, i4058, 'material')
  i4058.gravity = new pc.Vec2( i4059[2], i4059[3] )
  i4058.positionIterations = i4059[4]
  i4058.velocityIterations = i4059[5]
  i4058.velocityThreshold = i4059[6]
  i4058.maxLinearCorrection = i4059[7]
  i4058.maxAngularCorrection = i4059[8]
  i4058.maxTranslationSpeed = i4059[9]
  i4058.maxRotationSpeed = i4059[10]
  i4058.baumgarteScale = i4059[11]
  i4058.baumgarteTOIScale = i4059[12]
  i4058.timeToSleep = i4059[13]
  i4058.linearSleepTolerance = i4059[14]
  i4058.angularSleepTolerance = i4059[15]
  i4058.defaultContactOffset = i4059[16]
  i4058.autoSimulation = !!i4059[17]
  i4058.queriesHitTriggers = !!i4059[18]
  i4058.queriesStartInColliders = !!i4059[19]
  i4058.callbacksOnDisable = !!i4059[20]
  i4058.reuseCollisionCallbacks = !!i4059[21]
  i4058.autoSyncTransforms = !!i4059[22]
  var i4061 = i4059[23]
  var i4060 = []
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4061[i + 0]) );
  }
  i4058.collisionMatrix = i4060
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4065 = data
  i4064.enabled = !!i4065[0]
  i4064.layerId = i4065[1]
  i4064.otherLayerId = i4065[2]
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4067 = data
  var i4069 = i4067[0]
  var i4068 = []
  for(var i = 0; i < i4069.length; i += 1) {
    i4068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4069[i + 0]) );
  }
  i4066.qualityLevels = i4068
  var i4071 = i4067[1]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.push( i4071[i + 0] );
  }
  i4066.names = i4070
  i4066.shadows = i4067[2]
  i4066.anisotropicFiltering = i4067[3]
  i4066.antiAliasing = i4067[4]
  i4066.lodBias = i4067[5]
  i4066.shadowCascades = i4067[6]
  i4066.shadowDistance = i4067[7]
  i4066.shadowmaskMode = i4067[8]
  i4066.shadowProjection = i4067[9]
  i4066.shadowResolution = i4067[10]
  i4066.softParticles = !!i4067[11]
  i4066.softVegetation = !!i4067[12]
  i4066.activeColorSpace = i4067[13]
  i4066.desiredColorSpace = i4067[14]
  i4066.masterTextureLimit = i4067[15]
  i4066.maxQueuedFrames = i4067[16]
  i4066.particleRaycastBudget = i4067[17]
  i4066.pixelLightCount = i4067[18]
  i4066.realtimeReflectionProbes = !!i4067[19]
  i4066.shadowCascade2Split = i4067[20]
  i4066.shadowCascade4Split = new pc.Vec3( i4067[21], i4067[22], i4067[23] )
  i4066.streamingMipmapsActive = !!i4067[24]
  i4066.vSyncCount = i4067[25]
  i4066.asyncUploadBufferSize = i4067[26]
  i4066.asyncUploadTimeSlice = i4067[27]
  i4066.billboardsFaceCameraPosition = !!i4067[28]
  i4066.shadowNearPlaneOffset = i4067[29]
  i4066.streamingMipmapsMemoryBudget = i4067[30]
  i4066.maximumLODLevel = i4067[31]
  i4066.streamingMipmapsAddAllCameras = !!i4067[32]
  i4066.streamingMipmapsMaxLevelReduction = i4067[33]
  i4066.streamingMipmapsRenderersPerFrame = i4067[34]
  i4066.resolutionScalingFixedDPIFactor = i4067[35]
  i4066.streamingMipmapsMaxFileIORequests = i4067[36]
  i4066.currentQualityLevel = i4067[37]
  return i4066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4077 = data
  i4076.weight = i4077[0]
  i4076.vertices = i4077[1]
  i4076.normals = i4077[2]
  i4076.tangents = i4077[3]
  return i4076
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4078 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4079 = data
  request.r(i4079[0], i4079[1], 0, i4078, 'm_ObjectArgument')
  i4078.m_ObjectArgumentAssemblyTypeName = i4079[2]
  i4078.m_IntArgument = i4079[3]
  i4078.m_FloatArgument = i4079[4]
  i4078.m_StringArgument = i4079[5]
  i4078.m_BoolArgument = !!i4079[6]
  return i4078
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[13],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[13],"76":[9],"17":[16],"77":[16],"27":[26],"78":[79],"80":[26],"81":[26],"30":[27],"32":[31,26],"82":[26],"29":[27],"83":[26],"84":[26],"85":[26],"86":[26],"87":[26],"88":[26],"89":[26],"90":[26],"91":[26],"92":[31,26],"93":[26],"94":[26],"95":[26],"96":[26],"37":[31,26],"97":[26],"98":[39],"99":[39],"40":[39],"100":[39],"101":[13],"102":[13],"103":[79],"104":[26],"105":[9,26],"106":[26,31],"107":[26],"108":[31,26],"109":[9],"110":[31,26],"111":[26],"112":[79]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","HexStack","UnityEngine.Material","UnityEngine.BoxCollider","HexDisk","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.Light","UnityEngine.Grid","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapRenderer","BoardController","HexCell","GameController","DragController","ReactionResolver","TutorialController","PackshotController","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.UI.Button","PlayButtonView","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "AlexanderSavin_TestAD";

Deserializers.lunaInitializationTime = "06/03/2026 19:31:39";

Deserializers.lunaDaysRunning = "3.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "Test";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "47f55c0ddddb01a4cad6616ad56cb0f2";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1792";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3933";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.AlexanderSavin-TestAD";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "67b6ffb7-1ec4-4a87-ac1c-1c200cc0b90f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

