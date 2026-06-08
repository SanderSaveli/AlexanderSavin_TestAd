var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i9438 = root || request.c( 'UnityEngine.JointSpring' )
  var i9439 = data
  i9438.spring = i9439[0]
  i9438.damper = i9439[1]
  i9438.targetPosition = i9439[2]
  return i9438
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i9440 = root || request.c( 'UnityEngine.JointMotor' )
  var i9441 = data
  i9440.m_TargetVelocity = i9441[0]
  i9440.m_Force = i9441[1]
  i9440.m_FreeSpin = i9441[2]
  return i9440
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i9442 = root || request.c( 'UnityEngine.JointLimits' )
  var i9443 = data
  i9442.m_Min = i9443[0]
  i9442.m_Max = i9443[1]
  i9442.m_Bounciness = i9443[2]
  i9442.m_BounceMinVelocity = i9443[3]
  i9442.m_ContactDistance = i9443[4]
  i9442.minBounce = i9443[5]
  i9442.maxBounce = i9443[6]
  return i9442
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i9444 = root || request.c( 'UnityEngine.JointDrive' )
  var i9445 = data
  i9444.m_PositionSpring = i9445[0]
  i9444.m_PositionDamper = i9445[1]
  i9444.m_MaximumForce = i9445[2]
  i9444.m_UseAcceleration = i9445[3]
  return i9444
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i9446 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i9447 = data
  i9446.m_Spring = i9447[0]
  i9446.m_Damper = i9447[1]
  return i9446
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i9448 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i9449 = data
  i9448.m_Limit = i9449[0]
  i9448.m_Bounciness = i9449[1]
  i9448.m_ContactDistance = i9449[2]
  return i9448
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i9450 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i9451 = data
  i9450.m_ExtremumSlip = i9451[0]
  i9450.m_ExtremumValue = i9451[1]
  i9450.m_AsymptoteSlip = i9451[2]
  i9450.m_AsymptoteValue = i9451[3]
  i9450.m_Stiffness = i9451[4]
  return i9450
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i9452 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i9453 = data
  i9452.m_LowerAngle = i9453[0]
  i9452.m_UpperAngle = i9453[1]
  return i9452
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i9454 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i9455 = data
  i9454.m_MotorSpeed = i9455[0]
  i9454.m_MaximumMotorTorque = i9455[1]
  return i9454
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i9456 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i9457 = data
  i9456.m_DampingRatio = i9457[0]
  i9456.m_Frequency = i9457[1]
  i9456.m_Angle = i9457[2]
  return i9456
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i9458 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i9459 = data
  i9458.m_LowerTranslation = i9459[0]
  i9458.m_UpperTranslation = i9459[1]
  return i9458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i9460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i9461 = data
  i9460.name = i9461[0]
  i9460.halfPrecision = !!i9461[1]
  i9460.useSimplification = !!i9461[2]
  i9460.useUInt32IndexFormat = !!i9461[3]
  i9460.vertexCount = i9461[4]
  i9460.aabb = i9461[5]
  var i9463 = i9461[6]
  var i9462 = []
  for(var i = 0; i < i9463.length; i += 1) {
    i9462.push( !!i9463[i + 0] );
  }
  i9460.streams = i9462
  i9460.vertices = i9461[7]
  var i9465 = i9461[8]
  var i9464 = []
  for(var i = 0; i < i9465.length; i += 1) {
    i9464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i9465[i + 0]) );
  }
  i9460.subMeshes = i9464
  var i9467 = i9461[9]
  var i9466 = []
  for(var i = 0; i < i9467.length; i += 16) {
    i9466.push( new pc.Mat4().setData(i9467[i + 0], i9467[i + 1], i9467[i + 2], i9467[i + 3],  i9467[i + 4], i9467[i + 5], i9467[i + 6], i9467[i + 7],  i9467[i + 8], i9467[i + 9], i9467[i + 10], i9467[i + 11],  i9467[i + 12], i9467[i + 13], i9467[i + 14], i9467[i + 15]) );
  }
  i9460.bindposes = i9466
  var i9469 = i9461[10]
  var i9468 = []
  for(var i = 0; i < i9469.length; i += 1) {
    i9468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i9469[i + 0]) );
  }
  i9460.blendShapes = i9468
  return i9460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i9474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i9475 = data
  i9474.triangles = i9475[0]
  return i9474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i9480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i9481 = data
  i9480.name = i9481[0]
  var i9483 = i9481[1]
  var i9482 = []
  for(var i = 0; i < i9483.length; i += 1) {
    i9482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i9483[i + 0]) );
  }
  i9480.frames = i9482
  return i9480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i9484 = root || new pc.UnityMaterial()
  var i9485 = data
  i9484.name = i9485[0]
  request.r(i9485[1], i9485[2], 0, i9484, 'shader')
  i9484.renderQueue = i9485[3]
  i9484.enableInstancing = !!i9485[4]
  var i9487 = i9485[5]
  var i9486 = []
  for(var i = 0; i < i9487.length; i += 1) {
    i9486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i9487[i + 0]) );
  }
  i9484.floatParameters = i9486
  var i9489 = i9485[6]
  var i9488 = []
  for(var i = 0; i < i9489.length; i += 1) {
    i9488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i9489[i + 0]) );
  }
  i9484.colorParameters = i9488
  var i9491 = i9485[7]
  var i9490 = []
  for(var i = 0; i < i9491.length; i += 1) {
    i9490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i9491[i + 0]) );
  }
  i9484.vectorParameters = i9490
  var i9493 = i9485[8]
  var i9492 = []
  for(var i = 0; i < i9493.length; i += 1) {
    i9492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i9493[i + 0]) );
  }
  i9484.textureParameters = i9492
  var i9495 = i9485[9]
  var i9494 = []
  for(var i = 0; i < i9495.length; i += 1) {
    i9494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i9495[i + 0]) );
  }
  i9484.materialFlags = i9494
  return i9484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i9498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i9499 = data
  i9498.name = i9499[0]
  i9498.value = i9499[1]
  return i9498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i9502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i9503 = data
  i9502.name = i9503[0]
  i9502.value = new pc.Color(i9503[1], i9503[2], i9503[3], i9503[4])
  return i9502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i9506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i9507 = data
  i9506.name = i9507[0]
  i9506.value = new pc.Vec4( i9507[1], i9507[2], i9507[3], i9507[4] )
  return i9506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i9510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i9511 = data
  i9510.name = i9511[0]
  request.r(i9511[1], i9511[2], 0, i9510, 'value')
  return i9510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i9514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i9515 = data
  i9514.name = i9515[0]
  i9514.enabled = !!i9515[1]
  return i9514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i9516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i9517 = data
  i9516.position = new pc.Vec3( i9517[0], i9517[1], i9517[2] )
  i9516.scale = new pc.Vec3( i9517[3], i9517[4], i9517[5] )
  i9516.rotation = new pc.Quat(i9517[6], i9517[7], i9517[8], i9517[9])
  return i9516
}

Deserializers["HexStack"] = function (request, data, root) {
  var i9518 = root || request.c( 'HexStack' )
  var i9519 = data
  request.r(i9519[0], i9519[1], 0, i9518, '_diskPrefab')
  var i9521 = i9519[2]
  var i9520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i9521.length; i += 2) {
  request.r(i9521[i + 0], i9521[i + 1], 1, i9520, '')
  }
  i9518._colorMaterials = i9520
  var i9523 = i9519[3]
  var i9522 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i9523.length; i += 1) {
    i9522.add(i9523[i + 0]);
  }
  i9518._initialColors = i9522
  i9518._diskHeight = i9519[4]
  i9518._diskScale = new pc.Vec3( i9519[5], i9519[6], i9519[7] )
  i9518._isOfferStack = !!i9519[8]
  i9518._isSolutionStack = !!i9519[9]
  return i9518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i9528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i9529 = data
  i9528.center = new pc.Vec3( i9529[0], i9529[1], i9529[2] )
  i9528.size = new pc.Vec3( i9529[3], i9529[4], i9529[5] )
  i9528.enabled = !!i9529[6]
  i9528.isTrigger = !!i9529[7]
  request.r(i9529[8], i9529[9], 0, i9528, 'material')
  return i9528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i9530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i9531 = data
  i9530.name = i9531[0]
  i9530.tagId = i9531[1]
  i9530.enabled = !!i9531[2]
  i9530.isStatic = !!i9531[3]
  i9530.layer = i9531[4]
  return i9530
}

Deserializers["HexDisk"] = function (request, data, root) {
  var i9532 = root || request.c( 'HexDisk' )
  var i9533 = data
  i9532._color = i9533[0]
  var i9535 = i9533[1]
  var i9534 = []
  for(var i = 0; i < i9535.length; i += 2) {
  request.r(i9535[i + 0], i9535[i + 1], 2, i9534, '')
  }
  i9532._renderers = i9534
  return i9532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i9538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i9539 = data
  request.r(i9539[0], i9539[1], 0, i9538, 'sharedMesh')
  return i9538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i9540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i9541 = data
  request.r(i9541[0], i9541[1], 0, i9540, 'additionalVertexStreams')
  i9540.enabled = !!i9541[2]
  request.r(i9541[3], i9541[4], 0, i9540, 'sharedMaterial')
  var i9543 = i9541[5]
  var i9542 = []
  for(var i = 0; i < i9543.length; i += 2) {
  request.r(i9543[i + 0], i9543[i + 1], 2, i9542, '')
  }
  i9540.sharedMaterials = i9542
  i9540.receiveShadows = !!i9541[6]
  i9540.shadowCastingMode = i9541[7]
  i9540.sortingLayerID = i9541[8]
  i9540.sortingOrder = i9541[9]
  i9540.lightmapIndex = i9541[10]
  i9540.lightmapSceneIndex = i9541[11]
  i9540.lightmapScaleOffset = new pc.Vec4( i9541[12], i9541[13], i9541[14], i9541[15] )
  i9540.lightProbeUsage = i9541[16]
  i9540.reflectionProbeUsage = i9541[17]
  return i9540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i9546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i9547 = data
  i9546.name = i9547[0]
  i9546.width = i9547[1]
  i9546.height = i9547[2]
  i9546.mipmapCount = i9547[3]
  i9546.anisoLevel = i9547[4]
  i9546.filterMode = i9547[5]
  i9546.hdr = !!i9547[6]
  i9546.format = i9547[7]
  i9546.wrapMode = i9547[8]
  i9546.alphaIsTransparency = !!i9547[9]
  i9546.alphaSource = i9547[10]
  i9546.graphicsFormat = i9547[11]
  i9546.sRGBTexture = !!i9547[12]
  i9546.desiredColorSpace = i9547[13]
  i9546.wrapU = i9547[14]
  i9546.wrapV = i9547[15]
  return i9546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i9548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i9549 = data
  i9548.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i9549[0], i9548.main)
  i9548.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i9549[1], i9548.colorBySpeed)
  i9548.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i9549[2], i9548.colorOverLifetime)
  i9548.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i9549[3], i9548.emission)
  i9548.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i9549[4], i9548.rotationBySpeed)
  i9548.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i9549[5], i9548.rotationOverLifetime)
  i9548.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i9549[6], i9548.shape)
  i9548.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i9549[7], i9548.sizeBySpeed)
  i9548.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i9549[8], i9548.sizeOverLifetime)
  i9548.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i9549[9], i9548.textureSheetAnimation)
  i9548.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i9549[10], i9548.velocityOverLifetime)
  i9548.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i9549[11], i9548.noise)
  i9548.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i9549[12], i9548.inheritVelocity)
  i9548.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i9549[13], i9548.forceOverLifetime)
  i9548.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i9549[14], i9548.limitVelocityOverLifetime)
  i9548.useAutoRandomSeed = !!i9549[15]
  i9548.randomSeed = i9549[16]
  return i9548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i9550 = root || new pc.ParticleSystemMain()
  var i9551 = data
  i9550.duration = i9551[0]
  i9550.loop = !!i9551[1]
  i9550.prewarm = !!i9551[2]
  i9550.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[3], i9550.startDelay)
  i9550.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[4], i9550.startLifetime)
  i9550.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[5], i9550.startSpeed)
  i9550.startSize3D = !!i9551[6]
  i9550.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[7], i9550.startSizeX)
  i9550.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[8], i9550.startSizeY)
  i9550.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[9], i9550.startSizeZ)
  i9550.startRotation3D = !!i9551[10]
  i9550.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[11], i9550.startRotationX)
  i9550.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[12], i9550.startRotationY)
  i9550.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[13], i9550.startRotationZ)
  i9550.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i9551[14], i9550.startColor)
  i9550.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9551[15], i9550.gravityModifier)
  i9550.simulationSpace = i9551[16]
  request.r(i9551[17], i9551[18], 0, i9550, 'customSimulationSpace')
  i9550.simulationSpeed = i9551[19]
  i9550.useUnscaledTime = !!i9551[20]
  i9550.scalingMode = i9551[21]
  i9550.playOnAwake = !!i9551[22]
  i9550.maxParticles = i9551[23]
  i9550.emitterVelocityMode = i9551[24]
  i9550.stopAction = i9551[25]
  return i9550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i9552 = root || new pc.MinMaxCurve()
  var i9553 = data
  i9552.mode = i9553[0]
  i9552.curveMin = new pc.AnimationCurve( { keys_flow: i9553[1] } )
  i9552.curveMax = new pc.AnimationCurve( { keys_flow: i9553[2] } )
  i9552.curveMultiplier = i9553[3]
  i9552.constantMin = i9553[4]
  i9552.constantMax = i9553[5]
  return i9552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i9554 = root || new pc.MinMaxGradient()
  var i9555 = data
  i9554.mode = i9555[0]
  i9554.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i9555[1], i9554.gradientMin)
  i9554.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i9555[2], i9554.gradientMax)
  i9554.colorMin = new pc.Color(i9555[3], i9555[4], i9555[5], i9555[6])
  i9554.colorMax = new pc.Color(i9555[7], i9555[8], i9555[9], i9555[10])
  return i9554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i9556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i9557 = data
  i9556.mode = i9557[0]
  var i9559 = i9557[1]
  var i9558 = []
  for(var i = 0; i < i9559.length; i += 1) {
    i9558.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i9559[i + 0]) );
  }
  i9556.colorKeys = i9558
  var i9561 = i9557[2]
  var i9560 = []
  for(var i = 0; i < i9561.length; i += 1) {
    i9560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i9561[i + 0]) );
  }
  i9556.alphaKeys = i9560
  return i9556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i9562 = root || new pc.ParticleSystemColorBySpeed()
  var i9563 = data
  i9562.enabled = !!i9563[0]
  i9562.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i9563[1], i9562.color)
  i9562.range = new pc.Vec2( i9563[2], i9563[3] )
  return i9562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i9566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i9567 = data
  i9566.color = new pc.Color(i9567[0], i9567[1], i9567[2], i9567[3])
  i9566.time = i9567[4]
  return i9566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i9570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i9571 = data
  i9570.alpha = i9571[0]
  i9570.time = i9571[1]
  return i9570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i9572 = root || new pc.ParticleSystemColorOverLifetime()
  var i9573 = data
  i9572.enabled = !!i9573[0]
  i9572.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i9573[1], i9572.color)
  return i9572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i9574 = root || new pc.ParticleSystemEmitter()
  var i9575 = data
  i9574.enabled = !!i9575[0]
  i9574.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9575[1], i9574.rateOverTime)
  i9574.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9575[2], i9574.rateOverDistance)
  var i9577 = i9575[3]
  var i9576 = []
  for(var i = 0; i < i9577.length; i += 1) {
    i9576.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i9577[i + 0]) );
  }
  i9574.bursts = i9576
  return i9574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i9580 = root || new pc.ParticleSystemBurst()
  var i9581 = data
  i9580.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9581[0], i9580.count)
  i9580.cycleCount = i9581[1]
  i9580.minCount = i9581[2]
  i9580.maxCount = i9581[3]
  i9580.repeatInterval = i9581[4]
  i9580.time = i9581[5]
  return i9580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i9582 = root || new pc.ParticleSystemRotationBySpeed()
  var i9583 = data
  i9582.enabled = !!i9583[0]
  i9582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9583[1], i9582.x)
  i9582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9583[2], i9582.y)
  i9582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9583[3], i9582.z)
  i9582.separateAxes = !!i9583[4]
  i9582.range = new pc.Vec2( i9583[5], i9583[6] )
  return i9582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i9584 = root || new pc.ParticleSystemRotationOverLifetime()
  var i9585 = data
  i9584.enabled = !!i9585[0]
  i9584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9585[1], i9584.x)
  i9584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9585[2], i9584.y)
  i9584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9585[3], i9584.z)
  i9584.separateAxes = !!i9585[4]
  return i9584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i9586 = root || new pc.ParticleSystemShape()
  var i9587 = data
  i9586.enabled = !!i9587[0]
  i9586.shapeType = i9587[1]
  i9586.randomDirectionAmount = i9587[2]
  i9586.sphericalDirectionAmount = i9587[3]
  i9586.randomPositionAmount = i9587[4]
  i9586.alignToDirection = !!i9587[5]
  i9586.radius = i9587[6]
  i9586.radiusMode = i9587[7]
  i9586.radiusSpread = i9587[8]
  i9586.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9587[9], i9586.radiusSpeed)
  i9586.radiusThickness = i9587[10]
  i9586.angle = i9587[11]
  i9586.length = i9587[12]
  i9586.boxThickness = new pc.Vec3( i9587[13], i9587[14], i9587[15] )
  i9586.meshShapeType = i9587[16]
  request.r(i9587[17], i9587[18], 0, i9586, 'mesh')
  request.r(i9587[19], i9587[20], 0, i9586, 'meshRenderer')
  request.r(i9587[21], i9587[22], 0, i9586, 'skinnedMeshRenderer')
  i9586.useMeshMaterialIndex = !!i9587[23]
  i9586.meshMaterialIndex = i9587[24]
  i9586.useMeshColors = !!i9587[25]
  i9586.normalOffset = i9587[26]
  i9586.arc = i9587[27]
  i9586.arcMode = i9587[28]
  i9586.arcSpread = i9587[29]
  i9586.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9587[30], i9586.arcSpeed)
  i9586.donutRadius = i9587[31]
  i9586.position = new pc.Vec3( i9587[32], i9587[33], i9587[34] )
  i9586.rotation = new pc.Vec3( i9587[35], i9587[36], i9587[37] )
  i9586.scale = new pc.Vec3( i9587[38], i9587[39], i9587[40] )
  return i9586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i9588 = root || new pc.ParticleSystemSizeBySpeed()
  var i9589 = data
  i9588.enabled = !!i9589[0]
  i9588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9589[1], i9588.x)
  i9588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9589[2], i9588.y)
  i9588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9589[3], i9588.z)
  i9588.separateAxes = !!i9589[4]
  i9588.range = new pc.Vec2( i9589[5], i9589[6] )
  return i9588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i9590 = root || new pc.ParticleSystemSizeOverLifetime()
  var i9591 = data
  i9590.enabled = !!i9591[0]
  i9590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9591[1], i9590.x)
  i9590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9591[2], i9590.y)
  i9590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9591[3], i9590.z)
  i9590.separateAxes = !!i9591[4]
  return i9590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i9592 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i9593 = data
  i9592.enabled = !!i9593[0]
  i9592.mode = i9593[1]
  i9592.animation = i9593[2]
  i9592.numTilesX = i9593[3]
  i9592.numTilesY = i9593[4]
  i9592.useRandomRow = !!i9593[5]
  i9592.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9593[6], i9592.frameOverTime)
  i9592.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9593[7], i9592.startFrame)
  i9592.cycleCount = i9593[8]
  i9592.rowIndex = i9593[9]
  i9592.flipU = i9593[10]
  i9592.flipV = i9593[11]
  i9592.spriteCount = i9593[12]
  var i9595 = i9593[13]
  var i9594 = []
  for(var i = 0; i < i9595.length; i += 2) {
  request.r(i9595[i + 0], i9595[i + 1], 2, i9594, '')
  }
  i9592.sprites = i9594
  return i9592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i9598 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i9599 = data
  i9598.enabled = !!i9599[0]
  i9598.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[1], i9598.x)
  i9598.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[2], i9598.y)
  i9598.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[3], i9598.z)
  i9598.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[4], i9598.radial)
  i9598.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[5], i9598.speedModifier)
  i9598.space = i9599[6]
  i9598.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[7], i9598.orbitalX)
  i9598.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[8], i9598.orbitalY)
  i9598.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[9], i9598.orbitalZ)
  i9598.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[10], i9598.orbitalOffsetX)
  i9598.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[11], i9598.orbitalOffsetY)
  i9598.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9599[12], i9598.orbitalOffsetZ)
  return i9598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i9600 = root || new pc.ParticleSystemNoise()
  var i9601 = data
  i9600.enabled = !!i9601[0]
  i9600.separateAxes = !!i9601[1]
  i9600.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[2], i9600.strengthX)
  i9600.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[3], i9600.strengthY)
  i9600.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[4], i9600.strengthZ)
  i9600.frequency = i9601[5]
  i9600.damping = !!i9601[6]
  i9600.octaveCount = i9601[7]
  i9600.octaveMultiplier = i9601[8]
  i9600.octaveScale = i9601[9]
  i9600.quality = i9601[10]
  i9600.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[11], i9600.scrollSpeed)
  i9600.scrollSpeedMultiplier = i9601[12]
  i9600.remapEnabled = !!i9601[13]
  i9600.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[14], i9600.remapX)
  i9600.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[15], i9600.remapY)
  i9600.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[16], i9600.remapZ)
  i9600.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[17], i9600.positionAmount)
  i9600.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[18], i9600.rotationAmount)
  i9600.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9601[19], i9600.sizeAmount)
  return i9600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i9602 = root || new pc.ParticleSystemInheritVelocity()
  var i9603 = data
  i9602.enabled = !!i9603[0]
  i9602.mode = i9603[1]
  i9602.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9603[2], i9602.curve)
  return i9602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i9604 = root || new pc.ParticleSystemForceOverLifetime()
  var i9605 = data
  i9604.enabled = !!i9605[0]
  i9604.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9605[1], i9604.x)
  i9604.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9605[2], i9604.y)
  i9604.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9605[3], i9604.z)
  i9604.space = i9605[4]
  i9604.randomized = !!i9605[5]
  return i9604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i9606 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i9607 = data
  i9606.enabled = !!i9607[0]
  i9606.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9607[1], i9606.limit)
  i9606.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9607[2], i9606.limitX)
  i9606.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9607[3], i9606.limitY)
  i9606.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9607[4], i9606.limitZ)
  i9606.dampen = i9607[5]
  i9606.separateAxes = !!i9607[6]
  i9606.space = i9607[7]
  i9606.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9607[8], i9606.drag)
  i9606.multiplyDragByParticleSize = !!i9607[9]
  i9606.multiplyDragByParticleVelocity = !!i9607[10]
  return i9606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i9608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i9609 = data
  request.r(i9609[0], i9609[1], 0, i9608, 'mesh')
  i9608.meshCount = i9609[2]
  i9608.activeVertexStreamsCount = i9609[3]
  i9608.alignment = i9609[4]
  i9608.renderMode = i9609[5]
  i9608.sortMode = i9609[6]
  i9608.lengthScale = i9609[7]
  i9608.velocityScale = i9609[8]
  i9608.cameraVelocityScale = i9609[9]
  i9608.normalDirection = i9609[10]
  i9608.sortingFudge = i9609[11]
  i9608.minParticleSize = i9609[12]
  i9608.maxParticleSize = i9609[13]
  i9608.pivot = new pc.Vec3( i9609[14], i9609[15], i9609[16] )
  request.r(i9609[17], i9609[18], 0, i9608, 'trailMaterial')
  i9608.applyActiveColorSpace = !!i9609[19]
  i9608.enabled = !!i9609[20]
  request.r(i9609[21], i9609[22], 0, i9608, 'sharedMaterial')
  var i9611 = i9609[23]
  var i9610 = []
  for(var i = 0; i < i9611.length; i += 2) {
  request.r(i9611[i + 0], i9611[i + 1], 2, i9610, '')
  }
  i9608.sharedMaterials = i9610
  i9608.receiveShadows = !!i9609[24]
  i9608.shadowCastingMode = i9609[25]
  i9608.sortingLayerID = i9609[26]
  i9608.sortingOrder = i9609[27]
  i9608.lightmapIndex = i9609[28]
  i9608.lightmapSceneIndex = i9609[29]
  i9608.lightmapScaleOffset = new pc.Vec4( i9609[30], i9609[31], i9609[32], i9609[33] )
  i9608.lightProbeUsage = i9609[34]
  i9608.reflectionProbeUsage = i9609[35]
  return i9608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i9612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i9613 = data
  i9612.name = i9613[0]
  i9612.atlasId = i9613[1]
  i9612.mipmapCount = i9613[2]
  i9612.hdr = !!i9613[3]
  i9612.size = i9613[4]
  i9612.anisoLevel = i9613[5]
  i9612.filterMode = i9613[6]
  var i9615 = i9613[7]
  var i9614 = []
  for(var i = 0; i < i9615.length; i += 4) {
    i9614.push( UnityEngine.Rect.MinMaxRect(i9615[i + 0], i9615[i + 1], i9615[i + 2], i9615[i + 3]) );
  }
  i9612.rects = i9614
  i9612.wrapU = i9613[8]
  i9612.wrapV = i9613[9]
  return i9612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i9618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i9619 = data
  i9618.name = i9619[0]
  i9618.index = i9619[1]
  i9618.startup = !!i9619[2]
  return i9618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i9620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i9621 = data
  i9620.aspect = i9621[0]
  i9620.orthographic = !!i9621[1]
  i9620.orthographicSize = i9621[2]
  i9620.backgroundColor = new pc.Color(i9621[3], i9621[4], i9621[5], i9621[6])
  i9620.nearClipPlane = i9621[7]
  i9620.farClipPlane = i9621[8]
  i9620.fieldOfView = i9621[9]
  i9620.depth = i9621[10]
  i9620.clearFlags = i9621[11]
  i9620.cullingMask = i9621[12]
  i9620.rect = i9621[13]
  request.r(i9621[14], i9621[15], 0, i9620, 'targetTexture')
  i9620.usePhysicalProperties = !!i9621[16]
  i9620.focalLength = i9621[17]
  i9620.sensorSize = new pc.Vec2( i9621[18], i9621[19] )
  i9620.lensShift = new pc.Vec2( i9621[20], i9621[21] )
  i9620.gateFit = i9621[22]
  i9620.commandBufferCount = i9621[23]
  i9620.cameraType = i9621[24]
  i9620.enabled = !!i9621[25]
  return i9620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i9622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i9623 = data
  i9622.type = i9623[0]
  i9622.color = new pc.Color(i9623[1], i9623[2], i9623[3], i9623[4])
  i9622.cullingMask = i9623[5]
  i9622.intensity = i9623[6]
  i9622.range = i9623[7]
  i9622.spotAngle = i9623[8]
  i9622.shadows = i9623[9]
  i9622.shadowNormalBias = i9623[10]
  i9622.shadowBias = i9623[11]
  i9622.shadowStrength = i9623[12]
  i9622.shadowResolution = i9623[13]
  i9622.lightmapBakeType = i9623[14]
  i9622.renderMode = i9623[15]
  request.r(i9623[16], i9623[17], 0, i9622, 'cookie')
  i9622.cookieSize = i9623[18]
  i9622.shadowNearPlane = i9623[19]
  i9622.occlusionMaskChannel = i9623[20]
  i9622.isBaked = !!i9623[21]
  i9622.mixedLightingMode = i9623[22]
  i9622.enabled = !!i9623[23]
  return i9622
}

Deserializers["BoardController"] = function (request, data, root) {
  var i9624 = root || request.c( 'BoardController' )
  var i9625 = data
  request.r(i9625[0], i9625[1], 0, i9624, '_grid')
  var i9627 = i9625[2]
  var i9626 = new (System.Collections.Generic.List$1(Bridge.ns('HexCell')))
  for(var i = 0; i < i9627.length; i += 2) {
  request.r(i9627[i + 0], i9627[i + 1], 1, i9626, '')
  }
  i9624._cells = i9626
  request.r(i9625[3], i9625[4], 0, i9624, '_stackPrefab')
  request.r(i9625[5], i9625[6], 0, i9624, '_diskPrefab')
  var i9629 = i9625[7]
  var i9628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i9629.length; i += 2) {
  request.r(i9629[i + 0], i9629[i + 1], 1, i9628, '')
  }
  i9624._colorMaterials = i9628
  i9624._snapRadius = i9625[8]
  return i9624
}

Deserializers["HexCell"] = function (request, data, root) {
  var i9632 = root || request.c( 'HexCell' )
  var i9633 = data
  var i9635 = i9633[0]
  var i9634 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i9635.length; i += 1) {
    i9634.add(i9635[i + 0]);
  }
  i9632._initialStackColors = i9634
  request.r(i9633[1], i9633[2], 0, i9632, '_currentStack')
  request.r(i9633[3], i9633[4], 0, i9632, '_ringRenderer')
  request.r(i9633[5], i9633[6], 0, i9632, '_highlightView')
  return i9632
}

Deserializers["CellHighlightView"] = function (request, data, root) {
  var i9636 = root || request.c( 'CellHighlightView' )
  var i9637 = data
  request.r(i9637[0], i9637[1], 0, i9636, '_normalMaterial')
  request.r(i9637[2], i9637[3], 0, i9636, '_highlightMaterial')
  return i9636
}

Deserializers["GameController"] = function (request, data, root) {
  var i9638 = root || request.c( 'GameController' )
  var i9639 = data
  request.r(i9639[0], i9639[1], 0, i9638, '_gameCamera')
  request.r(i9639[2], i9639[3], 0, i9638, '_board')
  request.r(i9639[4], i9639[5], 0, i9638, '_dragController')
  request.r(i9639[6], i9639[7], 0, i9638, '_reactionResolver')
  request.r(i9639[8], i9639[9], 0, i9638, '_tutorial')
  request.r(i9639[10], i9639[11], 0, i9638, '_packshot')
  return i9638
}

Deserializers["DragController"] = function (request, data, root) {
  var i9640 = root || request.c( 'DragController' )
  var i9641 = data
  i9640._draggableMask = UnityEngine.LayerMask.FromIntegerValue( i9641[0] )
  i9640._liftHeight = i9641[1]
  i9640._followLerp = i9641[2]
  return i9640
}

Deserializers["ReactionResolver"] = function (request, data, root) {
  var i9642 = root || request.c( 'ReactionResolver' )
  var i9643 = data
  request.r(i9643[0], i9643[1], 0, i9642, '_vanishFxPrefab')
  i9642._baseFlyDuration = i9643[2]
  i9642._vanishDiskScaleDuration = i9643[3]
  i9642._vanishDiskDelay = i9643[4]
  i9642._speedIncrease = i9643[5]
  i9642._maxReactionSpeedMultiplier = i9643[6]
  i9642._diskLaunchInterval = i9643[7]
  i9642._edgePivotOffset = i9643[8]
  i9642._rollDegrees = i9643[9]
  i9642._vanishStackSize = i9643[10]
  return i9642
}

Deserializers["TutorialController"] = function (request, data, root) {
  var i9644 = root || request.c( 'TutorialController' )
  var i9645 = data
  request.r(i9645[0], i9645[1], 0, i9644, '_hand')
  request.r(i9645[2], i9645[3], 0, i9644, '_canvas')
  request.r(i9645[4], i9645[5], 0, i9644, '_gameCamera')
  request.r(i9645[6], i9645[7], 0, i9644, '_sourceStack')
  i9644._replayDelay = i9645[8]
  i9644._pressOffset = new pc.Vec2( i9645[9], i9645[10] )
  i9644._releaseOffset = new pc.Vec2( i9645[11], i9645[12] )
  return i9644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i9646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i9647 = data
  i9646.pivot = new pc.Vec2( i9647[0], i9647[1] )
  i9646.anchorMin = new pc.Vec2( i9647[2], i9647[3] )
  i9646.anchorMax = new pc.Vec2( i9647[4], i9647[5] )
  i9646.sizeDelta = new pc.Vec2( i9647[6], i9647[7] )
  i9646.anchoredPosition3D = new pc.Vec3( i9647[8], i9647[9], i9647[10] )
  i9646.rotation = new pc.Quat(i9647[11], i9647[12], i9647[13], i9647[14])
  i9646.scale = new pc.Vec3( i9647[15], i9647[16], i9647[17] )
  return i9646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i9648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i9649 = data
  i9648.planeDistance = i9649[0]
  i9648.referencePixelsPerUnit = i9649[1]
  i9648.isFallbackOverlay = !!i9649[2]
  i9648.renderMode = i9649[3]
  i9648.renderOrder = i9649[4]
  i9648.sortingLayerName = i9649[5]
  i9648.sortingOrder = i9649[6]
  i9648.scaleFactor = i9649[7]
  request.r(i9649[8], i9649[9], 0, i9648, 'worldCamera')
  i9648.overrideSorting = !!i9649[10]
  i9648.pixelPerfect = !!i9649[11]
  i9648.targetDisplay = i9649[12]
  i9648.overridePixelPerfect = !!i9649[13]
  i9648.enabled = !!i9649[14]
  return i9648
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i9650 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i9651 = data
  i9650.m_UiScaleMode = i9651[0]
  i9650.m_ReferencePixelsPerUnit = i9651[1]
  i9650.m_ScaleFactor = i9651[2]
  i9650.m_ReferenceResolution = new pc.Vec2( i9651[3], i9651[4] )
  i9650.m_ScreenMatchMode = i9651[5]
  i9650.m_MatchWidthOrHeight = i9651[6]
  i9650.m_PhysicalUnit = i9651[7]
  i9650.m_FallbackScreenDPI = i9651[8]
  i9650.m_DefaultSpriteDPI = i9651[9]
  i9650.m_DynamicPixelsPerUnit = i9651[10]
  i9650.m_PresetInfoIsWorld = !!i9651[11]
  return i9650
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i9652 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i9653 = data
  i9652.m_IgnoreReversedGraphics = !!i9653[0]
  i9652.m_BlockingObjects = i9653[1]
  i9652.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i9653[2] )
  return i9652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i9654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i9655 = data
  i9654.cullTransparentMesh = !!i9655[0]
  return i9654
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i9656 = root || request.c( 'UnityEngine.UI.Image' )
  var i9657 = data
  request.r(i9657[0], i9657[1], 0, i9656, 'm_Sprite')
  i9656.m_Type = i9657[2]
  i9656.m_PreserveAspect = !!i9657[3]
  i9656.m_FillCenter = !!i9657[4]
  i9656.m_FillMethod = i9657[5]
  i9656.m_FillAmount = i9657[6]
  i9656.m_FillClockwise = !!i9657[7]
  i9656.m_FillOrigin = i9657[8]
  i9656.m_UseSpriteMesh = !!i9657[9]
  i9656.m_PixelsPerUnitMultiplier = i9657[10]
  request.r(i9657[11], i9657[12], 0, i9656, 'm_Material')
  i9656.m_Maskable = !!i9657[13]
  i9656.m_Color = new pc.Color(i9657[14], i9657[15], i9657[16], i9657[17])
  i9656.m_RaycastTarget = !!i9657[18]
  i9656.m_RaycastPadding = new pc.Vec4( i9657[19], i9657[20], i9657[21], i9657[22] )
  return i9656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i9658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i9659 = data
  i9658.m_Alpha = i9659[0]
  i9658.m_Interactable = !!i9659[1]
  i9658.m_BlocksRaycasts = !!i9659[2]
  i9658.m_IgnoreParentGroups = !!i9659[3]
  i9658.enabled = !!i9659[4]
  return i9658
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i9660 = root || request.c( 'PackshotController' )
  var i9661 = data
  request.r(i9661[0], i9661[1], 0, i9660, '_group')
  request.r(i9661[2], i9661[3], 0, i9660, '_playNowButton')
  request.r(i9661[4], i9661[5], 0, i9660, '_playButtonView')
  i9660._fadeDuration = i9661[6]
  return i9660
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i9662 = root || request.c( 'UnityEngine.UI.Text' )
  var i9663 = data
  i9662.m_FontData = request.d('UnityEngine.UI.FontData', i9663[0], i9662.m_FontData)
  i9662.m_Text = i9663[1]
  request.r(i9663[2], i9663[3], 0, i9662, 'm_Material')
  i9662.m_Maskable = !!i9663[4]
  i9662.m_Color = new pc.Color(i9663[5], i9663[6], i9663[7], i9663[8])
  i9662.m_RaycastTarget = !!i9663[9]
  i9662.m_RaycastPadding = new pc.Vec4( i9663[10], i9663[11], i9663[12], i9663[13] )
  return i9662
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i9664 = root || request.c( 'UnityEngine.UI.FontData' )
  var i9665 = data
  request.r(i9665[0], i9665[1], 0, i9664, 'm_Font')
  i9664.m_FontSize = i9665[2]
  i9664.m_FontStyle = i9665[3]
  i9664.m_BestFit = !!i9665[4]
  i9664.m_MinSize = i9665[5]
  i9664.m_MaxSize = i9665[6]
  i9664.m_Alignment = i9665[7]
  i9664.m_AlignByGeometry = !!i9665[8]
  i9664.m_RichText = !!i9665[9]
  i9664.m_HorizontalOverflow = i9665[10]
  i9664.m_VerticalOverflow = i9665[11]
  i9664.m_LineSpacing = i9665[12]
  return i9664
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i9666 = root || request.c( 'UnityEngine.UI.Button' )
  var i9667 = data
  i9666.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i9667[0], i9666.m_OnClick)
  i9666.m_Navigation = request.d('UnityEngine.UI.Navigation', i9667[1], i9666.m_Navigation)
  i9666.m_Transition = i9667[2]
  i9666.m_Colors = request.d('UnityEngine.UI.ColorBlock', i9667[3], i9666.m_Colors)
  i9666.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i9667[4], i9666.m_SpriteState)
  i9666.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i9667[5], i9666.m_AnimationTriggers)
  i9666.m_Interactable = !!i9667[6]
  request.r(i9667[7], i9667[8], 0, i9666, 'm_TargetGraphic')
  return i9666
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i9668 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i9669 = data
  i9668.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9669[0], i9668.m_PersistentCalls)
  return i9668
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i9670 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i9671 = data
  var i9673 = i9671[0]
  var i9672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i9673.length; i += 1) {
    i9672.add(request.d('UnityEngine.Events.PersistentCall', i9673[i + 0]));
  }
  i9670.m_Calls = i9672
  return i9670
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i9676 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i9677 = data
  request.r(i9677[0], i9677[1], 0, i9676, 'm_Target')
  i9676.m_TargetAssemblyTypeName = i9677[2]
  i9676.m_MethodName = i9677[3]
  i9676.m_Mode = i9677[4]
  i9676.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i9677[5], i9676.m_Arguments)
  i9676.m_CallState = i9677[6]
  return i9676
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i9678 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i9679 = data
  i9678.m_Mode = i9679[0]
  i9678.m_WrapAround = !!i9679[1]
  request.r(i9679[2], i9679[3], 0, i9678, 'm_SelectOnUp')
  request.r(i9679[4], i9679[5], 0, i9678, 'm_SelectOnDown')
  request.r(i9679[6], i9679[7], 0, i9678, 'm_SelectOnLeft')
  request.r(i9679[8], i9679[9], 0, i9678, 'm_SelectOnRight')
  return i9678
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i9680 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i9681 = data
  i9680.m_NormalColor = new pc.Color(i9681[0], i9681[1], i9681[2], i9681[3])
  i9680.m_HighlightedColor = new pc.Color(i9681[4], i9681[5], i9681[6], i9681[7])
  i9680.m_PressedColor = new pc.Color(i9681[8], i9681[9], i9681[10], i9681[11])
  i9680.m_SelectedColor = new pc.Color(i9681[12], i9681[13], i9681[14], i9681[15])
  i9680.m_DisabledColor = new pc.Color(i9681[16], i9681[17], i9681[18], i9681[19])
  i9680.m_ColorMultiplier = i9681[20]
  i9680.m_FadeDuration = i9681[21]
  return i9680
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i9682 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i9683 = data
  request.r(i9683[0], i9683[1], 0, i9682, 'm_HighlightedSprite')
  request.r(i9683[2], i9683[3], 0, i9682, 'm_PressedSprite')
  request.r(i9683[4], i9683[5], 0, i9682, 'm_SelectedSprite')
  request.r(i9683[6], i9683[7], 0, i9682, 'm_DisabledSprite')
  return i9682
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i9684 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i9685 = data
  i9684.m_NormalTrigger = i9685[0]
  i9684.m_HighlightedTrigger = i9685[1]
  i9684.m_PressedTrigger = i9685[2]
  i9684.m_SelectedTrigger = i9685[3]
  i9684.m_DisabledTrigger = i9685[4]
  return i9684
}

Deserializers["PlayButtonView"] = function (request, data, root) {
  var i9686 = root || request.c( 'PlayButtonView' )
  var i9687 = data
  request.r(i9687[0], i9687[1], 0, i9686, '_target')
  i9686._pulseScale = i9687[2]
  i9686._pulseDuration = i9687[3]
  return i9686
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i9688 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i9689 = data
  request.r(i9689[0], i9689[1], 0, i9688, 'm_FirstSelected')
  i9688.m_sendNavigationEvents = !!i9689[2]
  i9688.m_DragThreshold = i9689[3]
  return i9688
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i9690 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i9691 = data
  i9690.m_HorizontalAxis = i9691[0]
  i9690.m_VerticalAxis = i9691[1]
  i9690.m_SubmitButton = i9691[2]
  i9690.m_CancelButton = i9691[3]
  i9690.m_InputActionsPerSecond = i9691[4]
  i9690.m_RepeatDelay = i9691[5]
  i9690.m_ForceModuleActive = !!i9691[6]
  i9690.m_SendPointerHoverToParent = !!i9691[7]
  return i9690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i9692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i9693 = data
  i9692.ambientIntensity = i9693[0]
  i9692.reflectionIntensity = i9693[1]
  i9692.ambientMode = i9693[2]
  i9692.ambientLight = new pc.Color(i9693[3], i9693[4], i9693[5], i9693[6])
  i9692.ambientSkyColor = new pc.Color(i9693[7], i9693[8], i9693[9], i9693[10])
  i9692.ambientGroundColor = new pc.Color(i9693[11], i9693[12], i9693[13], i9693[14])
  i9692.ambientEquatorColor = new pc.Color(i9693[15], i9693[16], i9693[17], i9693[18])
  i9692.fogColor = new pc.Color(i9693[19], i9693[20], i9693[21], i9693[22])
  i9692.fogEndDistance = i9693[23]
  i9692.fogStartDistance = i9693[24]
  i9692.fogDensity = i9693[25]
  i9692.fog = !!i9693[26]
  request.r(i9693[27], i9693[28], 0, i9692, 'skybox')
  i9692.fogMode = i9693[29]
  var i9695 = i9693[30]
  var i9694 = []
  for(var i = 0; i < i9695.length; i += 1) {
    i9694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i9695[i + 0]) );
  }
  i9692.lightmaps = i9694
  i9692.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i9693[31], i9692.lightProbes)
  i9692.lightmapsMode = i9693[32]
  i9692.mixedBakeMode = i9693[33]
  i9692.environmentLightingMode = i9693[34]
  i9692.ambientProbe = new pc.SphericalHarmonicsL2(i9693[35])
  request.r(i9693[36], i9693[37], 0, i9692, 'customReflection')
  request.r(i9693[38], i9693[39], 0, i9692, 'defaultReflection')
  i9692.defaultReflectionMode = i9693[40]
  i9692.defaultReflectionResolution = i9693[41]
  i9692.sunLightObjectId = i9693[42]
  i9692.pixelLightCount = i9693[43]
  i9692.defaultReflectionHDR = !!i9693[44]
  i9692.hasLightDataAsset = !!i9693[45]
  i9692.hasManualGenerate = !!i9693[46]
  return i9692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i9698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i9699 = data
  request.r(i9699[0], i9699[1], 0, i9698, 'lightmapColor')
  request.r(i9699[2], i9699[3], 0, i9698, 'lightmapDirection')
  request.r(i9699[4], i9699[5], 0, i9698, 'shadowMask')
  return i9698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i9700 = root || new UnityEngine.LightProbes()
  var i9701 = data
  return i9700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i9708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i9709 = data
  var i9711 = i9709[0]
  var i9710 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i9711.length; i += 1) {
    i9710.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i9711[i + 0]));
  }
  i9708.ShaderCompilationErrors = i9710
  i9708.name = i9709[1]
  i9708.guid = i9709[2]
  var i9713 = i9709[3]
  var i9712 = []
  for(var i = 0; i < i9713.length; i += 1) {
    i9712.push( i9713[i + 0] );
  }
  i9708.shaderDefinedKeywords = i9712
  var i9715 = i9709[4]
  var i9714 = []
  for(var i = 0; i < i9715.length; i += 1) {
    i9714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i9715[i + 0]) );
  }
  i9708.passes = i9714
  var i9717 = i9709[5]
  var i9716 = []
  for(var i = 0; i < i9717.length; i += 1) {
    i9716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i9717[i + 0]) );
  }
  i9708.usePasses = i9716
  var i9719 = i9709[6]
  var i9718 = []
  for(var i = 0; i < i9719.length; i += 1) {
    i9718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i9719[i + 0]) );
  }
  i9708.defaultParameterValues = i9718
  request.r(i9709[7], i9709[8], 0, i9708, 'unityFallbackShader')
  i9708.readDepth = !!i9709[9]
  i9708.hasDepthOnlyPass = !!i9709[10]
  i9708.isCreatedByShaderGraph = !!i9709[11]
  i9708.disableBatching = !!i9709[12]
  i9708.compiled = !!i9709[13]
  return i9708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i9722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i9723 = data
  i9722.shaderName = i9723[0]
  i9722.errorMessage = i9723[1]
  return i9722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i9728 = root || new pc.UnityShaderPass()
  var i9729 = data
  i9728.id = i9729[0]
  i9728.subShaderIndex = i9729[1]
  i9728.name = i9729[2]
  i9728.passType = i9729[3]
  i9728.grabPassTextureName = i9729[4]
  i9728.usePass = !!i9729[5]
  i9728.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[6], i9728.zTest)
  i9728.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[7], i9728.zWrite)
  i9728.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[8], i9728.culling)
  i9728.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9729[9], i9728.blending)
  i9728.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9729[10], i9728.alphaBlending)
  i9728.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[11], i9728.colorWriteMask)
  i9728.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[12], i9728.offsetUnits)
  i9728.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[13], i9728.offsetFactor)
  i9728.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[14], i9728.stencilRef)
  i9728.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[15], i9728.stencilReadMask)
  i9728.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9729[16], i9728.stencilWriteMask)
  i9728.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9729[17], i9728.stencilOp)
  i9728.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9729[18], i9728.stencilOpFront)
  i9728.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9729[19], i9728.stencilOpBack)
  var i9731 = i9729[20]
  var i9730 = []
  for(var i = 0; i < i9731.length; i += 1) {
    i9730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i9731[i + 0]) );
  }
  i9728.tags = i9730
  var i9733 = i9729[21]
  var i9732 = []
  for(var i = 0; i < i9733.length; i += 1) {
    i9732.push( i9733[i + 0] );
  }
  i9728.passDefinedKeywords = i9732
  var i9735 = i9729[22]
  var i9734 = []
  for(var i = 0; i < i9735.length; i += 1) {
    i9734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i9735[i + 0]) );
  }
  i9728.passDefinedKeywordGroups = i9734
  var i9737 = i9729[23]
  var i9736 = []
  for(var i = 0; i < i9737.length; i += 1) {
    i9736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9737[i + 0]) );
  }
  i9728.variants = i9736
  var i9739 = i9729[24]
  var i9738 = []
  for(var i = 0; i < i9739.length; i += 1) {
    i9738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9739[i + 0]) );
  }
  i9728.excludedVariants = i9738
  i9728.hasDepthReader = !!i9729[25]
  return i9728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i9740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i9741 = data
  i9740.val = i9741[0]
  i9740.name = i9741[1]
  return i9740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i9742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i9743 = data
  i9742.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9743[0], i9742.src)
  i9742.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9743[1], i9742.dst)
  i9742.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9743[2], i9742.op)
  return i9742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i9744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i9745 = data
  i9744.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9745[0], i9744.pass)
  i9744.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9745[1], i9744.fail)
  i9744.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9745[2], i9744.zFail)
  i9744.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9745[3], i9744.comp)
  return i9744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i9748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i9749 = data
  i9748.name = i9749[0]
  i9748.value = i9749[1]
  return i9748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i9752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i9753 = data
  var i9755 = i9753[0]
  var i9754 = []
  for(var i = 0; i < i9755.length; i += 1) {
    i9754.push( i9755[i + 0] );
  }
  i9752.keywords = i9754
  i9752.hasDiscard = !!i9753[1]
  return i9752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i9758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i9759 = data
  i9758.passId = i9759[0]
  i9758.subShaderIndex = i9759[1]
  var i9761 = i9759[2]
  var i9760 = []
  for(var i = 0; i < i9761.length; i += 1) {
    i9760.push( i9761[i + 0] );
  }
  i9758.keywords = i9760
  i9758.vertexProgram = i9759[3]
  i9758.fragmentProgram = i9759[4]
  i9758.exportedForWebGl2 = !!i9759[5]
  i9758.readDepth = !!i9759[6]
  return i9758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i9764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i9765 = data
  request.r(i9765[0], i9765[1], 0, i9764, 'shader')
  i9764.pass = i9765[2]
  return i9764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i9768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i9769 = data
  i9768.name = i9769[0]
  i9768.type = i9769[1]
  i9768.value = new pc.Vec4( i9769[2], i9769[3], i9769[4], i9769[5] )
  i9768.textureValue = i9769[6]
  i9768.shaderPropertyFlag = i9769[7]
  return i9768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i9770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i9771 = data
  i9770.name = i9771[0]
  request.r(i9771[1], i9771[2], 0, i9770, 'texture')
  i9770.aabb = i9771[3]
  i9770.vertices = i9771[4]
  i9770.triangles = i9771[5]
  i9770.textureRect = UnityEngine.Rect.MinMaxRect(i9771[6], i9771[7], i9771[8], i9771[9])
  i9770.packedRect = UnityEngine.Rect.MinMaxRect(i9771[10], i9771[11], i9771[12], i9771[13])
  i9770.border = new pc.Vec4( i9771[14], i9771[15], i9771[16], i9771[17] )
  i9770.transparency = i9771[18]
  i9770.bounds = i9771[19]
  i9770.pixelsPerUnit = i9771[20]
  i9770.textureWidth = i9771[21]
  i9770.textureHeight = i9771[22]
  i9770.nativeSize = new pc.Vec2( i9771[23], i9771[24] )
  i9770.pivot = new pc.Vec2( i9771[25], i9771[26] )
  i9770.textureRectOffset = new pc.Vec2( i9771[27], i9771[28] )
  return i9770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i9772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i9773 = data
  i9772.name = i9773[0]
  i9772.ascent = i9773[1]
  i9772.originalLineHeight = i9773[2]
  i9772.fontSize = i9773[3]
  var i9775 = i9773[4]
  var i9774 = []
  for(var i = 0; i < i9775.length; i += 1) {
    i9774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i9775[i + 0]) );
  }
  i9772.characterInfo = i9774
  request.r(i9773[5], i9773[6], 0, i9772, 'texture')
  i9772.originalFontSize = i9773[7]
  return i9772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i9778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i9779 = data
  i9778.index = i9779[0]
  i9778.advance = i9779[1]
  i9778.bearing = i9779[2]
  i9778.glyphWidth = i9779[3]
  i9778.glyphHeight = i9779[4]
  i9778.minX = i9779[5]
  i9778.maxX = i9779[6]
  i9778.minY = i9779[7]
  i9778.maxY = i9779[8]
  i9778.uvBottomLeftX = i9779[9]
  i9778.uvBottomLeftY = i9779[10]
  i9778.uvBottomRightX = i9779[11]
  i9778.uvBottomRightY = i9779[12]
  i9778.uvTopLeftX = i9779[13]
  i9778.uvTopLeftY = i9779[14]
  i9778.uvTopRightX = i9779[15]
  i9778.uvTopRightY = i9779[16]
  return i9778
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i9780 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i9781 = data
  i9780.useSafeMode = !!i9781[0]
  i9780.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i9781[1], i9780.safeModeOptions)
  i9780.timeScale = i9781[2]
  i9780.unscaledTimeScale = i9781[3]
  i9780.useSmoothDeltaTime = !!i9781[4]
  i9780.maxSmoothUnscaledTime = i9781[5]
  i9780.rewindCallbackMode = i9781[6]
  i9780.showUnityEditorReport = !!i9781[7]
  i9780.logBehaviour = i9781[8]
  i9780.drawGizmos = !!i9781[9]
  i9780.defaultRecyclable = !!i9781[10]
  i9780.defaultAutoPlay = i9781[11]
  i9780.defaultUpdateType = i9781[12]
  i9780.defaultTimeScaleIndependent = !!i9781[13]
  i9780.defaultEaseType = i9781[14]
  i9780.defaultEaseOvershootOrAmplitude = i9781[15]
  i9780.defaultEasePeriod = i9781[16]
  i9780.defaultAutoKill = !!i9781[17]
  i9780.defaultLoopType = i9781[18]
  i9780.debugMode = !!i9781[19]
  i9780.debugStoreTargetId = !!i9781[20]
  i9780.showPreviewPanel = !!i9781[21]
  i9780.storeSettingsLocation = i9781[22]
  i9780.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i9781[23], i9780.modules)
  i9780.createASMDEF = !!i9781[24]
  i9780.showPlayingTweens = !!i9781[25]
  i9780.showPausedTweens = !!i9781[26]
  return i9780
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i9782 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i9783 = data
  i9782.logBehaviour = i9783[0]
  i9782.nestedTweenFailureBehaviour = i9783[1]
  return i9782
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i9784 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i9785 = data
  i9784.showPanel = !!i9785[0]
  i9784.audioEnabled = !!i9785[1]
  i9784.physicsEnabled = !!i9785[2]
  i9784.physics2DEnabled = !!i9785[3]
  i9784.spriteEnabled = !!i9785[4]
  i9784.uiEnabled = !!i9785[5]
  i9784.textMeshProEnabled = !!i9785[6]
  i9784.tk2DEnabled = !!i9785[7]
  i9784.deAudioEnabled = !!i9785[8]
  i9784.deUnityExtendedEnabled = !!i9785[9]
  i9784.epoOutlineEnabled = !!i9785[10]
  return i9784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i9786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i9787 = data
  var i9789 = i9787[0]
  var i9788 = []
  for(var i = 0; i < i9789.length; i += 1) {
    i9788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i9789[i + 0]) );
  }
  i9786.files = i9788
  i9786.componentToPrefabIds = i9787[1]
  return i9786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i9792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i9793 = data
  i9792.path = i9793[0]
  request.r(i9793[1], i9793[2], 0, i9792, 'unityObject')
  return i9792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i9794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i9795 = data
  var i9797 = i9795[0]
  var i9796 = []
  for(var i = 0; i < i9797.length; i += 1) {
    i9796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i9797[i + 0]) );
  }
  i9794.scriptsExecutionOrder = i9796
  var i9799 = i9795[1]
  var i9798 = []
  for(var i = 0; i < i9799.length; i += 1) {
    i9798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i9799[i + 0]) );
  }
  i9794.sortingLayers = i9798
  var i9801 = i9795[2]
  var i9800 = []
  for(var i = 0; i < i9801.length; i += 1) {
    i9800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i9801[i + 0]) );
  }
  i9794.cullingLayers = i9800
  i9794.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i9795[3], i9794.timeSettings)
  i9794.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i9795[4], i9794.physicsSettings)
  i9794.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i9795[5], i9794.physics2DSettings)
  i9794.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9795[6], i9794.qualitySettings)
  i9794.enableRealtimeShadows = !!i9795[7]
  i9794.enableAutoInstancing = !!i9795[8]
  i9794.enableStaticBatching = !!i9795[9]
  i9794.enableDynamicBatching = !!i9795[10]
  i9794.usePreservativeDynamicBatching = !!i9795[11]
  i9794.lightmapEncodingQuality = i9795[12]
  i9794.desiredColorSpace = i9795[13]
  var i9803 = i9795[14]
  var i9802 = []
  for(var i = 0; i < i9803.length; i += 1) {
    i9802.push( i9803[i + 0] );
  }
  i9794.allTags = i9802
  return i9794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i9806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i9807 = data
  i9806.name = i9807[0]
  i9806.value = i9807[1]
  return i9806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i9810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i9811 = data
  i9810.id = i9811[0]
  i9810.name = i9811[1]
  i9810.value = i9811[2]
  return i9810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i9814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i9815 = data
  i9814.id = i9815[0]
  i9814.name = i9815[1]
  return i9814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i9816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i9817 = data
  i9816.fixedDeltaTime = i9817[0]
  i9816.maximumDeltaTime = i9817[1]
  i9816.timeScale = i9817[2]
  i9816.maximumParticleTimestep = i9817[3]
  return i9816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i9818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i9819 = data
  i9818.gravity = new pc.Vec3( i9819[0], i9819[1], i9819[2] )
  i9818.defaultSolverIterations = i9819[3]
  i9818.bounceThreshold = i9819[4]
  i9818.autoSyncTransforms = !!i9819[5]
  i9818.autoSimulation = !!i9819[6]
  var i9821 = i9819[7]
  var i9820 = []
  for(var i = 0; i < i9821.length; i += 1) {
    i9820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9821[i + 0]) );
  }
  i9818.collisionMatrix = i9820
  return i9818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9825 = data
  i9824.enabled = !!i9825[0]
  i9824.layerId = i9825[1]
  i9824.otherLayerId = i9825[2]
  return i9824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9827 = data
  request.r(i9827[0], i9827[1], 0, i9826, 'material')
  i9826.gravity = new pc.Vec2( i9827[2], i9827[3] )
  i9826.positionIterations = i9827[4]
  i9826.velocityIterations = i9827[5]
  i9826.velocityThreshold = i9827[6]
  i9826.maxLinearCorrection = i9827[7]
  i9826.maxAngularCorrection = i9827[8]
  i9826.maxTranslationSpeed = i9827[9]
  i9826.maxRotationSpeed = i9827[10]
  i9826.baumgarteScale = i9827[11]
  i9826.baumgarteTOIScale = i9827[12]
  i9826.timeToSleep = i9827[13]
  i9826.linearSleepTolerance = i9827[14]
  i9826.angularSleepTolerance = i9827[15]
  i9826.defaultContactOffset = i9827[16]
  i9826.autoSimulation = !!i9827[17]
  i9826.queriesHitTriggers = !!i9827[18]
  i9826.queriesStartInColliders = !!i9827[19]
  i9826.callbacksOnDisable = !!i9827[20]
  i9826.reuseCollisionCallbacks = !!i9827[21]
  i9826.autoSyncTransforms = !!i9827[22]
  var i9829 = i9827[23]
  var i9828 = []
  for(var i = 0; i < i9829.length; i += 1) {
    i9828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9829[i + 0]) );
  }
  i9826.collisionMatrix = i9828
  return i9826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9833 = data
  i9832.enabled = !!i9833[0]
  i9832.layerId = i9833[1]
  i9832.otherLayerId = i9833[2]
  return i9832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9835 = data
  var i9837 = i9835[0]
  var i9836 = []
  for(var i = 0; i < i9837.length; i += 1) {
    i9836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9837[i + 0]) );
  }
  i9834.qualityLevels = i9836
  var i9839 = i9835[1]
  var i9838 = []
  for(var i = 0; i < i9839.length; i += 1) {
    i9838.push( i9839[i + 0] );
  }
  i9834.names = i9838
  i9834.shadows = i9835[2]
  i9834.anisotropicFiltering = i9835[3]
  i9834.antiAliasing = i9835[4]
  i9834.lodBias = i9835[5]
  i9834.shadowCascades = i9835[6]
  i9834.shadowDistance = i9835[7]
  i9834.shadowmaskMode = i9835[8]
  i9834.shadowProjection = i9835[9]
  i9834.shadowResolution = i9835[10]
  i9834.softParticles = !!i9835[11]
  i9834.softVegetation = !!i9835[12]
  i9834.activeColorSpace = i9835[13]
  i9834.desiredColorSpace = i9835[14]
  i9834.masterTextureLimit = i9835[15]
  i9834.maxQueuedFrames = i9835[16]
  i9834.particleRaycastBudget = i9835[17]
  i9834.pixelLightCount = i9835[18]
  i9834.realtimeReflectionProbes = !!i9835[19]
  i9834.shadowCascade2Split = i9835[20]
  i9834.shadowCascade4Split = new pc.Vec3( i9835[21], i9835[22], i9835[23] )
  i9834.streamingMipmapsActive = !!i9835[24]
  i9834.vSyncCount = i9835[25]
  i9834.asyncUploadBufferSize = i9835[26]
  i9834.asyncUploadTimeSlice = i9835[27]
  i9834.billboardsFaceCameraPosition = !!i9835[28]
  i9834.shadowNearPlaneOffset = i9835[29]
  i9834.streamingMipmapsMemoryBudget = i9835[30]
  i9834.maximumLODLevel = i9835[31]
  i9834.streamingMipmapsAddAllCameras = !!i9835[32]
  i9834.streamingMipmapsMaxLevelReduction = i9835[33]
  i9834.streamingMipmapsRenderersPerFrame = i9835[34]
  i9834.resolutionScalingFixedDPIFactor = i9835[35]
  i9834.streamingMipmapsMaxFileIORequests = i9835[36]
  i9834.currentQualityLevel = i9835[37]
  return i9834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i9844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i9845 = data
  i9844.weight = i9845[0]
  i9844.vertices = i9845[1]
  i9844.normals = i9845[2]
  i9844.tangents = i9845[3]
  return i9844
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i9846 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i9847 = data
  request.r(i9847[0], i9847[1], 0, i9846, 'm_ObjectArgument')
  i9846.m_ObjectArgumentAssemblyTypeName = i9847[2]
  i9846.m_IntArgument = i9847[3]
  i9846.m_FloatArgument = i9847[4]
  i9846.m_StringArgument = i9847[5]
  i9846.m_BoolArgument = !!i9847[6]
  return i9846
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[13],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[13],"77":[9],"17":[16],"78":[16],"28":[27],"79":[27],"80":[27],"31":[28],"33":[32,27],"81":[27],"30":[28],"82":[27],"83":[27],"84":[27],"85":[27],"86":[27],"87":[27],"88":[27],"89":[27],"90":[27],"91":[32,27],"92":[27],"93":[27],"94":[27],"95":[27],"38":[32,27],"96":[27],"97":[40],"98":[40],"41":[40],"99":[40],"100":[13],"101":[13],"102":[27],"103":[9,27],"104":[27,32],"105":[27],"106":[32,27],"107":[9],"108":[32,27],"109":[27],"110":[111],"112":[111],"113":[111]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","HexStack","UnityEngine.Material","UnityEngine.BoxCollider","HexDisk","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.Light","UnityEngine.Grid","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapRenderer","BoardController","HexCell","CellHighlightView","GameController","DragController","ReactionResolver","TutorialController","PackshotController","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.UI.Button","PlayButtonView","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "AlexanderSavin_TestAD";

Deserializers.lunaInitializationTime = "06/03/2026 19:31:39";

Deserializers.lunaDaysRunning = "4.9";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1791";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4014";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.AlexanderSavin-TestAD";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "38ada84d-76f5-4f43-a6c2-e4467ec4e347";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

