var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointSpring' )
  var i409 = data
  i408.spring = i409[0]
  i408.damper = i409[1]
  i408.targetPosition = i409[2]
  return i408
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointMotor' )
  var i411 = data
  i410.m_TargetVelocity = i411[0]
  i410.m_Force = i411[1]
  i410.m_FreeSpin = i411[2]
  return i410
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointLimits' )
  var i413 = data
  i412.m_Min = i413[0]
  i412.m_Max = i413[1]
  i412.m_Bounciness = i413[2]
  i412.m_BounceMinVelocity = i413[3]
  i412.m_ContactDistance = i413[4]
  i412.minBounce = i413[5]
  i412.maxBounce = i413[6]
  return i412
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointDrive' )
  var i415 = data
  i414.m_PositionSpring = i415[0]
  i414.m_PositionDamper = i415[1]
  i414.m_MaximumForce = i415[2]
  i414.m_UseAcceleration = i415[3]
  return i414
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i417 = data
  i416.m_Spring = i417[0]
  i416.m_Damper = i417[1]
  return i416
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i419 = data
  i418.m_Limit = i419[0]
  i418.m_Bounciness = i419[1]
  i418.m_ContactDistance = i419[2]
  return i418
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i421 = data
  i420.m_ExtremumSlip = i421[0]
  i420.m_ExtremumValue = i421[1]
  i420.m_AsymptoteSlip = i421[2]
  i420.m_AsymptoteValue = i421[3]
  i420.m_Stiffness = i421[4]
  return i420
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i423 = data
  i422.m_LowerAngle = i423[0]
  i422.m_UpperAngle = i423[1]
  return i422
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i425 = data
  i424.m_MotorSpeed = i425[0]
  i424.m_MaximumMotorTorque = i425[1]
  return i424
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i427 = data
  i426.m_DampingRatio = i427[0]
  i426.m_Frequency = i427[1]
  i426.m_Angle = i427[2]
  return i426
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i429 = data
  i428.m_LowerTranslation = i429[0]
  i428.m_UpperTranslation = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i431 = data
  i430.name = i431[0]
  i430.halfPrecision = !!i431[1]
  i430.useSimplification = !!i431[2]
  i430.useUInt32IndexFormat = !!i431[3]
  i430.vertexCount = i431[4]
  i430.aabb = i431[5]
  var i433 = i431[6]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( !!i433[i + 0] );
  }
  i430.streams = i432
  i430.vertices = i431[7]
  var i435 = i431[8]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i435[i + 0]) );
  }
  i430.subMeshes = i434
  var i437 = i431[9]
  var i436 = []
  for(var i = 0; i < i437.length; i += 16) {
    i436.push( new pc.Mat4().setData(i437[i + 0], i437[i + 1], i437[i + 2], i437[i + 3],  i437[i + 4], i437[i + 5], i437[i + 6], i437[i + 7],  i437[i + 8], i437[i + 9], i437[i + 10], i437[i + 11],  i437[i + 12], i437[i + 13], i437[i + 14], i437[i + 15]) );
  }
  i430.bindposes = i436
  var i439 = i431[10]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i439[i + 0]) );
  }
  i430.blendShapes = i438
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i445 = data
  i444.triangles = i445[0]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i451 = data
  i450.name = i451[0]
  var i453 = i451[1]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i453[i + 0]) );
  }
  i450.frames = i452
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i454 = root || new pc.UnityMaterial()
  var i455 = data
  i454.name = i455[0]
  request.r(i455[1], i455[2], 0, i454, 'shader')
  i454.renderQueue = i455[3]
  i454.enableInstancing = !!i455[4]
  var i457 = i455[5]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i457[i + 0]) );
  }
  i454.floatParameters = i456
  var i459 = i455[6]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i459[i + 0]) );
  }
  i454.colorParameters = i458
  var i461 = i455[7]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i461[i + 0]) );
  }
  i454.vectorParameters = i460
  var i463 = i455[8]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i463[i + 0]) );
  }
  i454.textureParameters = i462
  var i465 = i455[9]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i465[i + 0]) );
  }
  i454.materialFlags = i464
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i469 = data
  i468.name = i469[0]
  i468.value = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = new pc.Color(i473[1], i473[2], i473[3], i473[4])
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i477 = data
  i476.name = i477[0]
  i476.value = new pc.Vec4( i477[1], i477[2], i477[3], i477[4] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i481 = data
  i480.name = i481[0]
  request.r(i481[1], i481[2], 0, i480, 'value')
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i485 = data
  i484.name = i485[0]
  i484.enabled = !!i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i487 = data
  i486.position = new pc.Vec3( i487[0], i487[1], i487[2] )
  i486.scale = new pc.Vec3( i487[3], i487[4], i487[5] )
  i486.rotation = new pc.Quat(i487[6], i487[7], i487[8], i487[9])
  return i486
}

Deserializers["HexStack"] = function (request, data, root) {
  var i488 = root || request.c( 'HexStack' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, '_diskPrefab')
  var i491 = i489[2]
  var i490 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i491.length; i += 2) {
  request.r(i491[i + 0], i491[i + 1], 1, i490, '')
  }
  i488._colorMaterials = i490
  var i493 = i489[3]
  var i492 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i493.length; i += 1) {
    i492.add(i493[i + 0]);
  }
  i488._initialColors = i492
  i488._diskHeight = i489[4]
  i488._isOfferStack = !!i489[5]
  i488._isSolutionStack = !!i489[6]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i499 = data
  i498.center = new pc.Vec3( i499[0], i499[1], i499[2] )
  i498.size = new pc.Vec3( i499[3], i499[4], i499[5] )
  i498.enabled = !!i499[6]
  i498.isTrigger = !!i499[7]
  request.r(i499[8], i499[9], 0, i498, 'material')
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i501 = data
  i500.name = i501[0]
  i500.tagId = i501[1]
  i500.enabled = !!i501[2]
  i500.isStatic = !!i501[3]
  i500.layer = i501[4]
  return i500
}

Deserializers["HexDisk"] = function (request, data, root) {
  var i502 = root || request.c( 'HexDisk' )
  var i503 = data
  i502._color = i503[0]
  var i505 = i503[1]
  var i504 = []
  for(var i = 0; i < i505.length; i += 2) {
  request.r(i505[i + 0], i505[i + 1], 2, i504, '')
  }
  i502._renderers = i504
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'sharedMesh')
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'additionalVertexStreams')
  i510.enabled = !!i511[2]
  request.r(i511[3], i511[4], 0, i510, 'sharedMaterial')
  var i513 = i511[5]
  var i512 = []
  for(var i = 0; i < i513.length; i += 2) {
  request.r(i513[i + 0], i513[i + 1], 2, i512, '')
  }
  i510.sharedMaterials = i512
  i510.receiveShadows = !!i511[6]
  i510.shadowCastingMode = i511[7]
  i510.sortingLayerID = i511[8]
  i510.sortingOrder = i511[9]
  i510.lightmapIndex = i511[10]
  i510.lightmapSceneIndex = i511[11]
  i510.lightmapScaleOffset = new pc.Vec4( i511[12], i511[13], i511[14], i511[15] )
  i510.lightProbeUsage = i511[16]
  i510.reflectionProbeUsage = i511[17]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i517 = data
  i516.name = i517[0]
  i516.width = i517[1]
  i516.height = i517[2]
  i516.mipmapCount = i517[3]
  i516.anisoLevel = i517[4]
  i516.filterMode = i517[5]
  i516.hdr = !!i517[6]
  i516.format = i517[7]
  i516.wrapMode = i517[8]
  i516.alphaIsTransparency = !!i517[9]
  i516.alphaSource = i517[10]
  i516.graphicsFormat = i517[11]
  i516.sRGBTexture = !!i517[12]
  i516.desiredColorSpace = i517[13]
  i516.wrapU = i517[14]
  i516.wrapV = i517[15]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i519 = data
  i518.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i519[0], i518.main)
  i518.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i519[1], i518.colorBySpeed)
  i518.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i519[2], i518.colorOverLifetime)
  i518.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i519[3], i518.emission)
  i518.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i519[4], i518.rotationBySpeed)
  i518.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i519[5], i518.rotationOverLifetime)
  i518.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i519[6], i518.shape)
  i518.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i519[7], i518.sizeBySpeed)
  i518.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i519[8], i518.sizeOverLifetime)
  i518.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i519[9], i518.textureSheetAnimation)
  i518.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i519[10], i518.velocityOverLifetime)
  i518.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i519[11], i518.noise)
  i518.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i519[12], i518.inheritVelocity)
  i518.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i519[13], i518.forceOverLifetime)
  i518.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i519[14], i518.limitVelocityOverLifetime)
  i518.useAutoRandomSeed = !!i519[15]
  i518.randomSeed = i519[16]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemMain()
  var i521 = data
  i520.duration = i521[0]
  i520.loop = !!i521[1]
  i520.prewarm = !!i521[2]
  i520.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.startDelay)
  i520.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[4], i520.startLifetime)
  i520.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[5], i520.startSpeed)
  i520.startSize3D = !!i521[6]
  i520.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[7], i520.startSizeX)
  i520.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[8], i520.startSizeY)
  i520.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[9], i520.startSizeZ)
  i520.startRotation3D = !!i521[10]
  i520.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[11], i520.startRotationX)
  i520.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[12], i520.startRotationY)
  i520.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[13], i520.startRotationZ)
  i520.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i521[14], i520.startColor)
  i520.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[15], i520.gravityModifier)
  i520.simulationSpace = i521[16]
  request.r(i521[17], i521[18], 0, i520, 'customSimulationSpace')
  i520.simulationSpeed = i521[19]
  i520.useUnscaledTime = !!i521[20]
  i520.scalingMode = i521[21]
  i520.playOnAwake = !!i521[22]
  i520.maxParticles = i521[23]
  i520.emitterVelocityMode = i521[24]
  i520.stopAction = i521[25]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i522 = root || new pc.MinMaxCurve()
  var i523 = data
  i522.mode = i523[0]
  i522.curveMin = new pc.AnimationCurve( { keys_flow: i523[1] } )
  i522.curveMax = new pc.AnimationCurve( { keys_flow: i523[2] } )
  i522.curveMultiplier = i523[3]
  i522.constantMin = i523[4]
  i522.constantMax = i523[5]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i524 = root || new pc.MinMaxGradient()
  var i525 = data
  i524.mode = i525[0]
  i524.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i525[1], i524.gradientMin)
  i524.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i525[2], i524.gradientMax)
  i524.colorMin = new pc.Color(i525[3], i525[4], i525[5], i525[6])
  i524.colorMax = new pc.Color(i525[7], i525[8], i525[9], i525[10])
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i527 = data
  i526.mode = i527[0]
  var i529 = i527[1]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i529[i + 0]) );
  }
  i526.colorKeys = i528
  var i531 = i527[2]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i531[i + 0]) );
  }
  i526.alphaKeys = i530
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i532 = root || new pc.ParticleSystemColorBySpeed()
  var i533 = data
  i532.enabled = !!i533[0]
  i532.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i533[1], i532.color)
  i532.range = new pc.Vec2( i533[2], i533[3] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i537 = data
  i536.color = new pc.Color(i537[0], i537[1], i537[2], i537[3])
  i536.time = i537[4]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i541 = data
  i540.alpha = i541[0]
  i540.time = i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemColorOverLifetime()
  var i543 = data
  i542.enabled = !!i543[0]
  i542.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i543[1], i542.color)
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemEmitter()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[1], i544.rateOverTime)
  i544.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[2], i544.rateOverDistance)
  var i547 = i545[3]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i547[i + 0]) );
  }
  i544.bursts = i546
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemBurst()
  var i551 = data
  i550.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[0], i550.count)
  i550.cycleCount = i551[1]
  i550.minCount = i551[2]
  i550.maxCount = i551[3]
  i550.repeatInterval = i551[4]
  i550.time = i551[5]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemRotationBySpeed()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[1], i552.x)
  i552.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[2], i552.y)
  i552.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[3], i552.z)
  i552.separateAxes = !!i553[4]
  i552.range = new pc.Vec2( i553[5], i553[6] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemRotationOverLifetime()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[1], i554.x)
  i554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[2], i554.y)
  i554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.z)
  i554.separateAxes = !!i555[4]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemShape()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.shapeType = i557[1]
  i556.randomDirectionAmount = i557[2]
  i556.sphericalDirectionAmount = i557[3]
  i556.randomPositionAmount = i557[4]
  i556.alignToDirection = !!i557[5]
  i556.radius = i557[6]
  i556.radiusMode = i557[7]
  i556.radiusSpread = i557[8]
  i556.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[9], i556.radiusSpeed)
  i556.radiusThickness = i557[10]
  i556.angle = i557[11]
  i556.length = i557[12]
  i556.boxThickness = new pc.Vec3( i557[13], i557[14], i557[15] )
  i556.meshShapeType = i557[16]
  request.r(i557[17], i557[18], 0, i556, 'mesh')
  request.r(i557[19], i557[20], 0, i556, 'meshRenderer')
  request.r(i557[21], i557[22], 0, i556, 'skinnedMeshRenderer')
  i556.useMeshMaterialIndex = !!i557[23]
  i556.meshMaterialIndex = i557[24]
  i556.useMeshColors = !!i557[25]
  i556.normalOffset = i557[26]
  i556.arc = i557[27]
  i556.arcMode = i557[28]
  i556.arcSpread = i557[29]
  i556.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[30], i556.arcSpeed)
  i556.donutRadius = i557[31]
  i556.position = new pc.Vec3( i557[32], i557[33], i557[34] )
  i556.rotation = new pc.Vec3( i557[35], i557[36], i557[37] )
  i556.scale = new pc.Vec3( i557[38], i557[39], i557[40] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemSizeBySpeed()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[1], i558.x)
  i558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.y)
  i558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.z)
  i558.separateAxes = !!i559[4]
  i558.range = new pc.Vec2( i559[5], i559[6] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemSizeOverLifetime()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[1], i560.x)
  i560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.y)
  i560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[3], i560.z)
  i560.separateAxes = !!i561[4]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.mode = i563[1]
  i562.animation = i563[2]
  i562.numTilesX = i563[3]
  i562.numTilesY = i563[4]
  i562.useRandomRow = !!i563[5]
  i562.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[6], i562.frameOverTime)
  i562.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[7], i562.startFrame)
  i562.cycleCount = i563[8]
  i562.rowIndex = i563[9]
  i562.flipU = i563[10]
  i562.flipV = i563[11]
  i562.spriteCount = i563[12]
  var i565 = i563[13]
  var i564 = []
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 2, i564, '')
  }
  i562.sprites = i564
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[1], i568.x)
  i568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[2], i568.y)
  i568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[3], i568.z)
  i568.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[4], i568.radial)
  i568.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[5], i568.speedModifier)
  i568.space = i569[6]
  i568.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[7], i568.orbitalX)
  i568.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[8], i568.orbitalY)
  i568.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[9], i568.orbitalZ)
  i568.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[10], i568.orbitalOffsetX)
  i568.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[11], i568.orbitalOffsetY)
  i568.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[12], i568.orbitalOffsetZ)
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemNoise()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.separateAxes = !!i571[1]
  i570.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.strengthX)
  i570.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[3], i570.strengthY)
  i570.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[4], i570.strengthZ)
  i570.frequency = i571[5]
  i570.damping = !!i571[6]
  i570.octaveCount = i571[7]
  i570.octaveMultiplier = i571[8]
  i570.octaveScale = i571[9]
  i570.quality = i571[10]
  i570.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[11], i570.scrollSpeed)
  i570.scrollSpeedMultiplier = i571[12]
  i570.remapEnabled = !!i571[13]
  i570.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[14], i570.remapX)
  i570.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[15], i570.remapY)
  i570.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[16], i570.remapZ)
  i570.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[17], i570.positionAmount)
  i570.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[18], i570.rotationAmount)
  i570.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[19], i570.sizeAmount)
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemInheritVelocity()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.mode = i573[1]
  i572.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.curve)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemForceOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.space = i575[4]
  i574.randomized = !!i575[5]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.limit)
  i576.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.limitX)
  i576.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.limitY)
  i576.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[4], i576.limitZ)
  i576.dampen = i577[5]
  i576.separateAxes = !!i577[6]
  i576.space = i577[7]
  i576.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[8], i576.drag)
  i576.multiplyDragByParticleSize = !!i577[9]
  i576.multiplyDragByParticleVelocity = !!i577[10]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'mesh')
  i578.meshCount = i579[2]
  i578.activeVertexStreamsCount = i579[3]
  i578.alignment = i579[4]
  i578.renderMode = i579[5]
  i578.sortMode = i579[6]
  i578.lengthScale = i579[7]
  i578.velocityScale = i579[8]
  i578.cameraVelocityScale = i579[9]
  i578.normalDirection = i579[10]
  i578.sortingFudge = i579[11]
  i578.minParticleSize = i579[12]
  i578.maxParticleSize = i579[13]
  i578.pivot = new pc.Vec3( i579[14], i579[15], i579[16] )
  request.r(i579[17], i579[18], 0, i578, 'trailMaterial')
  i578.applyActiveColorSpace = !!i579[19]
  i578.enabled = !!i579[20]
  request.r(i579[21], i579[22], 0, i578, 'sharedMaterial')
  var i581 = i579[23]
  var i580 = []
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 2, i580, '')
  }
  i578.sharedMaterials = i580
  i578.receiveShadows = !!i579[24]
  i578.shadowCastingMode = i579[25]
  i578.sortingLayerID = i579[26]
  i578.sortingOrder = i579[27]
  i578.lightmapIndex = i579[28]
  i578.lightmapSceneIndex = i579[29]
  i578.lightmapScaleOffset = new pc.Vec4( i579[30], i579[31], i579[32], i579[33] )
  i578.lightProbeUsage = i579[34]
  i578.reflectionProbeUsage = i579[35]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i583 = data
  i582.name = i583[0]
  i582.atlasId = i583[1]
  i582.mipmapCount = i583[2]
  i582.hdr = !!i583[3]
  i582.size = i583[4]
  i582.anisoLevel = i583[5]
  i582.filterMode = i583[6]
  var i585 = i583[7]
  var i584 = []
  for(var i = 0; i < i585.length; i += 4) {
    i584.push( UnityEngine.Rect.MinMaxRect(i585[i + 0], i585[i + 1], i585[i + 2], i585[i + 3]) );
  }
  i582.rects = i584
  i582.wrapU = i583[8]
  i582.wrapV = i583[9]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i589 = data
  i588.name = i589[0]
  i588.index = i589[1]
  i588.startup = !!i589[2]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i591 = data
  i590.aspect = i591[0]
  i590.orthographic = !!i591[1]
  i590.orthographicSize = i591[2]
  i590.backgroundColor = new pc.Color(i591[3], i591[4], i591[5], i591[6])
  i590.nearClipPlane = i591[7]
  i590.farClipPlane = i591[8]
  i590.fieldOfView = i591[9]
  i590.depth = i591[10]
  i590.clearFlags = i591[11]
  i590.cullingMask = i591[12]
  i590.rect = i591[13]
  request.r(i591[14], i591[15], 0, i590, 'targetTexture')
  i590.usePhysicalProperties = !!i591[16]
  i590.focalLength = i591[17]
  i590.sensorSize = new pc.Vec2( i591[18], i591[19] )
  i590.lensShift = new pc.Vec2( i591[20], i591[21] )
  i590.gateFit = i591[22]
  i590.commandBufferCount = i591[23]
  i590.cameraType = i591[24]
  i590.enabled = !!i591[25]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i593 = data
  i592.type = i593[0]
  i592.color = new pc.Color(i593[1], i593[2], i593[3], i593[4])
  i592.cullingMask = i593[5]
  i592.intensity = i593[6]
  i592.range = i593[7]
  i592.spotAngle = i593[8]
  i592.shadows = i593[9]
  i592.shadowNormalBias = i593[10]
  i592.shadowBias = i593[11]
  i592.shadowStrength = i593[12]
  i592.shadowResolution = i593[13]
  i592.lightmapBakeType = i593[14]
  i592.renderMode = i593[15]
  request.r(i593[16], i593[17], 0, i592, 'cookie')
  i592.cookieSize = i593[18]
  i592.shadowNearPlane = i593[19]
  i592.occlusionMaskChannel = i593[20]
  i592.isBaked = !!i593[21]
  i592.mixedLightingMode = i593[22]
  i592.enabled = !!i593[23]
  return i592
}

Deserializers["BoardController"] = function (request, data, root) {
  var i594 = root || request.c( 'BoardController' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, '_grid')
  var i597 = i595[2]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('HexCell')))
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 1, i596, '')
  }
  i594._cells = i596
  request.r(i595[3], i595[4], 0, i594, '_stackPrefab')
  request.r(i595[5], i595[6], 0, i594, '_diskPrefab')
  var i599 = i595[7]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 1, i598, '')
  }
  i594._colorMaterials = i598
  i594._snapRadius = i595[8]
  return i594
}

Deserializers["HexCell"] = function (request, data, root) {
  var i602 = root || request.c( 'HexCell' )
  var i603 = data
  var i605 = i603[0]
  var i604 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i605.length; i += 1) {
    i604.add(i605[i + 0]);
  }
  i602._initialStackColors = i604
  request.r(i603[1], i603[2], 0, i602, '_currentStack')
  request.r(i603[3], i603[4], 0, i602, '_ringRenderer')
  return i602
}

Deserializers["GameController"] = function (request, data, root) {
  var i606 = root || request.c( 'GameController' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, '_gameCamera')
  request.r(i607[2], i607[3], 0, i606, '_board')
  request.r(i607[4], i607[5], 0, i606, '_dragController')
  request.r(i607[6], i607[7], 0, i606, '_reactionResolver')
  request.r(i607[8], i607[9], 0, i606, '_tutorial')
  request.r(i607[10], i607[11], 0, i606, '_packshot')
  return i606
}

Deserializers["DragController"] = function (request, data, root) {
  var i608 = root || request.c( 'DragController' )
  var i609 = data
  i608._draggableMask = UnityEngine.LayerMask.FromIntegerValue( i609[0] )
  i608._liftHeight = i609[1]
  i608._followLerp = i609[2]
  return i608
}

Deserializers["ReactionResolver"] = function (request, data, root) {
  var i610 = root || request.c( 'ReactionResolver' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, '_vanishFxPrefab')
  i610._baseFlyDuration = i611[2]
  i610._baseVanishDuration = i611[3]
  i610._speedIncrease = i611[4]
  i610._maxReactionSpeedMultiplier = i611[5]
  i610._diskLaunchInterval = i611[6]
  i610._edgePivotOffset = i611[7]
  i610._rollDegrees = i611[8]
  i610._vanishStackSize = i611[9]
  return i610
}

Deserializers["TutorialController"] = function (request, data, root) {
  var i612 = root || request.c( 'TutorialController' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, '_hand')
  request.r(i613[2], i613[3], 0, i612, '_canvas')
  request.r(i613[4], i613[5], 0, i612, '_gameCamera')
  request.r(i613[6], i613[7], 0, i612, '_sourceStack')
  i612._replayDelay = i613[8]
  i612._pressOffset = new pc.Vec2( i613[9], i613[10] )
  i612._releaseOffset = new pc.Vec2( i613[11], i613[12] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i615 = data
  i614.pivot = new pc.Vec2( i615[0], i615[1] )
  i614.anchorMin = new pc.Vec2( i615[2], i615[3] )
  i614.anchorMax = new pc.Vec2( i615[4], i615[5] )
  i614.sizeDelta = new pc.Vec2( i615[6], i615[7] )
  i614.anchoredPosition3D = new pc.Vec3( i615[8], i615[9], i615[10] )
  i614.rotation = new pc.Quat(i615[11], i615[12], i615[13], i615[14])
  i614.scale = new pc.Vec3( i615[15], i615[16], i615[17] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i617 = data
  i616.planeDistance = i617[0]
  i616.referencePixelsPerUnit = i617[1]
  i616.isFallbackOverlay = !!i617[2]
  i616.renderMode = i617[3]
  i616.renderOrder = i617[4]
  i616.sortingLayerName = i617[5]
  i616.sortingOrder = i617[6]
  i616.scaleFactor = i617[7]
  request.r(i617[8], i617[9], 0, i616, 'worldCamera')
  i616.overrideSorting = !!i617[10]
  i616.pixelPerfect = !!i617[11]
  i616.targetDisplay = i617[12]
  i616.overridePixelPerfect = !!i617[13]
  i616.enabled = !!i617[14]
  return i616
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i619 = data
  i618.m_UiScaleMode = i619[0]
  i618.m_ReferencePixelsPerUnit = i619[1]
  i618.m_ScaleFactor = i619[2]
  i618.m_ReferenceResolution = new pc.Vec2( i619[3], i619[4] )
  i618.m_ScreenMatchMode = i619[5]
  i618.m_MatchWidthOrHeight = i619[6]
  i618.m_PhysicalUnit = i619[7]
  i618.m_FallbackScreenDPI = i619[8]
  i618.m_DefaultSpriteDPI = i619[9]
  i618.m_DynamicPixelsPerUnit = i619[10]
  i618.m_PresetInfoIsWorld = !!i619[11]
  return i618
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i621 = data
  i620.m_IgnoreReversedGraphics = !!i621[0]
  i620.m_BlockingObjects = i621[1]
  i620.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i621[2] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i623 = data
  i622.cullTransparentMesh = !!i623[0]
  return i622
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Image' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'm_Sprite')
  i624.m_Type = i625[2]
  i624.m_PreserveAspect = !!i625[3]
  i624.m_FillCenter = !!i625[4]
  i624.m_FillMethod = i625[5]
  i624.m_FillAmount = i625[6]
  i624.m_FillClockwise = !!i625[7]
  i624.m_FillOrigin = i625[8]
  i624.m_UseSpriteMesh = !!i625[9]
  i624.m_PixelsPerUnitMultiplier = i625[10]
  request.r(i625[11], i625[12], 0, i624, 'm_Material')
  i624.m_Maskable = !!i625[13]
  i624.m_Color = new pc.Color(i625[14], i625[15], i625[16], i625[17])
  i624.m_RaycastTarget = !!i625[18]
  i624.m_RaycastPadding = new pc.Vec4( i625[19], i625[20], i625[21], i625[22] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i627 = data
  i626.m_Alpha = i627[0]
  i626.m_Interactable = !!i627[1]
  i626.m_BlocksRaycasts = !!i627[2]
  i626.m_IgnoreParentGroups = !!i627[3]
  i626.enabled = !!i627[4]
  return i626
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i628 = root || request.c( 'PackshotController' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, '_group')
  request.r(i629[2], i629[3], 0, i628, '_playNowButton')
  request.r(i629[4], i629[5], 0, i628, '_playButtonView')
  i628._fadeDuration = i629[6]
  return i628
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Text' )
  var i631 = data
  i630.m_FontData = request.d('UnityEngine.UI.FontData', i631[0], i630.m_FontData)
  i630.m_Text = i631[1]
  request.r(i631[2], i631[3], 0, i630, 'm_Material')
  i630.m_Maskable = !!i631[4]
  i630.m_Color = new pc.Color(i631[5], i631[6], i631[7], i631[8])
  i630.m_RaycastTarget = !!i631[9]
  i630.m_RaycastPadding = new pc.Vec4( i631[10], i631[11], i631[12], i631[13] )
  return i630
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.FontData' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_Font')
  i632.m_FontSize = i633[2]
  i632.m_FontStyle = i633[3]
  i632.m_BestFit = !!i633[4]
  i632.m_MinSize = i633[5]
  i632.m_MaxSize = i633[6]
  i632.m_Alignment = i633[7]
  i632.m_AlignByGeometry = !!i633[8]
  i632.m_RichText = !!i633[9]
  i632.m_HorizontalOverflow = i633[10]
  i632.m_VerticalOverflow = i633[11]
  i632.m_LineSpacing = i633[12]
  return i632
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Button' )
  var i635 = data
  i634.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i635[0], i634.m_OnClick)
  i634.m_Navigation = request.d('UnityEngine.UI.Navigation', i635[1], i634.m_Navigation)
  i634.m_Transition = i635[2]
  i634.m_Colors = request.d('UnityEngine.UI.ColorBlock', i635[3], i634.m_Colors)
  i634.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i635[4], i634.m_SpriteState)
  i634.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i635[5], i634.m_AnimationTriggers)
  i634.m_Interactable = !!i635[6]
  request.r(i635[7], i635[8], 0, i634, 'm_TargetGraphic')
  return i634
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i637 = data
  i636.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i637[0], i636.m_PersistentCalls)
  return i636
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i639 = data
  var i641 = i639[0]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i641.length; i += 1) {
    i640.add(request.d('UnityEngine.Events.PersistentCall', i641[i + 0]));
  }
  i638.m_Calls = i640
  return i638
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_Target')
  i644.m_TargetAssemblyTypeName = i645[2]
  i644.m_MethodName = i645[3]
  i644.m_Mode = i645[4]
  i644.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i645[5], i644.m_Arguments)
  i644.m_CallState = i645[6]
  return i644
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i647 = data
  i646.m_Mode = i647[0]
  i646.m_WrapAround = !!i647[1]
  request.r(i647[2], i647[3], 0, i646, 'm_SelectOnUp')
  request.r(i647[4], i647[5], 0, i646, 'm_SelectOnDown')
  request.r(i647[6], i647[7], 0, i646, 'm_SelectOnLeft')
  request.r(i647[8], i647[9], 0, i646, 'm_SelectOnRight')
  return i646
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i649 = data
  i648.m_NormalColor = new pc.Color(i649[0], i649[1], i649[2], i649[3])
  i648.m_HighlightedColor = new pc.Color(i649[4], i649[5], i649[6], i649[7])
  i648.m_PressedColor = new pc.Color(i649[8], i649[9], i649[10], i649[11])
  i648.m_SelectedColor = new pc.Color(i649[12], i649[13], i649[14], i649[15])
  i648.m_DisabledColor = new pc.Color(i649[16], i649[17], i649[18], i649[19])
  i648.m_ColorMultiplier = i649[20]
  i648.m_FadeDuration = i649[21]
  return i648
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_HighlightedSprite')
  request.r(i651[2], i651[3], 0, i650, 'm_PressedSprite')
  request.r(i651[4], i651[5], 0, i650, 'm_SelectedSprite')
  request.r(i651[6], i651[7], 0, i650, 'm_DisabledSprite')
  return i650
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i653 = data
  i652.m_NormalTrigger = i653[0]
  i652.m_HighlightedTrigger = i653[1]
  i652.m_PressedTrigger = i653[2]
  i652.m_SelectedTrigger = i653[3]
  i652.m_DisabledTrigger = i653[4]
  return i652
}

Deserializers["PlayButtonView"] = function (request, data, root) {
  var i654 = root || request.c( 'PlayButtonView' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, '_target')
  i654._pulseScale = i655[2]
  i654._pulseDuration = i655[3]
  return i654
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_FirstSelected')
  i656.m_sendNavigationEvents = !!i657[2]
  i656.m_DragThreshold = i657[3]
  return i656
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i659 = data
  i658.m_HorizontalAxis = i659[0]
  i658.m_VerticalAxis = i659[1]
  i658.m_SubmitButton = i659[2]
  i658.m_CancelButton = i659[3]
  i658.m_InputActionsPerSecond = i659[4]
  i658.m_RepeatDelay = i659[5]
  i658.m_ForceModuleActive = !!i659[6]
  i658.m_SendPointerHoverToParent = !!i659[7]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i661 = data
  i660.ambientIntensity = i661[0]
  i660.reflectionIntensity = i661[1]
  i660.ambientMode = i661[2]
  i660.ambientLight = new pc.Color(i661[3], i661[4], i661[5], i661[6])
  i660.ambientSkyColor = new pc.Color(i661[7], i661[8], i661[9], i661[10])
  i660.ambientGroundColor = new pc.Color(i661[11], i661[12], i661[13], i661[14])
  i660.ambientEquatorColor = new pc.Color(i661[15], i661[16], i661[17], i661[18])
  i660.fogColor = new pc.Color(i661[19], i661[20], i661[21], i661[22])
  i660.fogEndDistance = i661[23]
  i660.fogStartDistance = i661[24]
  i660.fogDensity = i661[25]
  i660.fog = !!i661[26]
  request.r(i661[27], i661[28], 0, i660, 'skybox')
  i660.fogMode = i661[29]
  var i663 = i661[30]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i663[i + 0]) );
  }
  i660.lightmaps = i662
  i660.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i661[31], i660.lightProbes)
  i660.lightmapsMode = i661[32]
  i660.mixedBakeMode = i661[33]
  i660.environmentLightingMode = i661[34]
  i660.ambientProbe = new pc.SphericalHarmonicsL2(i661[35])
  request.r(i661[36], i661[37], 0, i660, 'customReflection')
  request.r(i661[38], i661[39], 0, i660, 'defaultReflection')
  i660.defaultReflectionMode = i661[40]
  i660.defaultReflectionResolution = i661[41]
  i660.sunLightObjectId = i661[42]
  i660.pixelLightCount = i661[43]
  i660.defaultReflectionHDR = !!i661[44]
  i660.hasLightDataAsset = !!i661[45]
  i660.hasManualGenerate = !!i661[46]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'lightmapColor')
  request.r(i667[2], i667[3], 0, i666, 'lightmapDirection')
  request.r(i667[4], i667[5], 0, i666, 'shadowMask')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i668 = root || new UnityEngine.LightProbes()
  var i669 = data
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i677 = data
  var i679 = i677[0]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i679.length; i += 1) {
    i678.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i679[i + 0]));
  }
  i676.ShaderCompilationErrors = i678
  i676.name = i677[1]
  i676.guid = i677[2]
  var i681 = i677[3]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i676.shaderDefinedKeywords = i680
  var i683 = i677[4]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i683[i + 0]) );
  }
  i676.passes = i682
  var i685 = i677[5]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i685[i + 0]) );
  }
  i676.usePasses = i684
  var i687 = i677[6]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i687[i + 0]) );
  }
  i676.defaultParameterValues = i686
  request.r(i677[7], i677[8], 0, i676, 'unityFallbackShader')
  i676.readDepth = !!i677[9]
  i676.hasDepthOnlyPass = !!i677[10]
  i676.isCreatedByShaderGraph = !!i677[11]
  i676.disableBatching = !!i677[12]
  i676.compiled = !!i677[13]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i691 = data
  i690.shaderName = i691[0]
  i690.errorMessage = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i696 = root || new pc.UnityShaderPass()
  var i697 = data
  i696.id = i697[0]
  i696.subShaderIndex = i697[1]
  i696.name = i697[2]
  i696.passType = i697[3]
  i696.grabPassTextureName = i697[4]
  i696.usePass = !!i697[5]
  i696.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[6], i696.zTest)
  i696.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[7], i696.zWrite)
  i696.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[8], i696.culling)
  i696.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[9], i696.blending)
  i696.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[10], i696.alphaBlending)
  i696.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[11], i696.colorWriteMask)
  i696.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[12], i696.offsetUnits)
  i696.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[13], i696.offsetFactor)
  i696.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[14], i696.stencilRef)
  i696.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[15], i696.stencilReadMask)
  i696.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[16], i696.stencilWriteMask)
  i696.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[17], i696.stencilOp)
  i696.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[18], i696.stencilOpFront)
  i696.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[19], i696.stencilOpBack)
  var i699 = i697[20]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i699[i + 0]) );
  }
  i696.tags = i698
  var i701 = i697[21]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.passDefinedKeywords = i700
  var i703 = i697[22]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i703[i + 0]) );
  }
  i696.passDefinedKeywordGroups = i702
  var i705 = i697[23]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i705[i + 0]) );
  }
  i696.variants = i704
  var i707 = i697[24]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i707[i + 0]) );
  }
  i696.excludedVariants = i706
  i696.hasDepthReader = !!i697[25]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i709 = data
  i708.val = i709[0]
  i708.name = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i711 = data
  i710.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[0], i710.src)
  i710.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[1], i710.dst)
  i710.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[2], i710.op)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i713 = data
  i712.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[0], i712.pass)
  i712.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[1], i712.fail)
  i712.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[2], i712.zFail)
  i712.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[3], i712.comp)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i717 = data
  i716.name = i717[0]
  i716.value = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i721 = data
  var i723 = i721[0]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( i723[i + 0] );
  }
  i720.keywords = i722
  i720.hasDiscard = !!i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i727 = data
  i726.passId = i727[0]
  i726.subShaderIndex = i727[1]
  var i729 = i727[2]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i726.keywords = i728
  i726.vertexProgram = i727[3]
  i726.fragmentProgram = i727[4]
  i726.exportedForWebGl2 = !!i727[5]
  i726.readDepth = !!i727[6]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'shader')
  i732.pass = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i737 = data
  i736.name = i737[0]
  i736.type = i737[1]
  i736.value = new pc.Vec4( i737[2], i737[3], i737[4], i737[5] )
  i736.textureValue = i737[6]
  i736.shaderPropertyFlag = i737[7]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i739 = data
  i738.name = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'texture')
  i738.aabb = i739[3]
  i738.vertices = i739[4]
  i738.triangles = i739[5]
  i738.textureRect = UnityEngine.Rect.MinMaxRect(i739[6], i739[7], i739[8], i739[9])
  i738.packedRect = UnityEngine.Rect.MinMaxRect(i739[10], i739[11], i739[12], i739[13])
  i738.border = new pc.Vec4( i739[14], i739[15], i739[16], i739[17] )
  i738.transparency = i739[18]
  i738.bounds = i739[19]
  i738.pixelsPerUnit = i739[20]
  i738.textureWidth = i739[21]
  i738.textureHeight = i739[22]
  i738.nativeSize = new pc.Vec2( i739[23], i739[24] )
  i738.pivot = new pc.Vec2( i739[25], i739[26] )
  i738.textureRectOffset = new pc.Vec2( i739[27], i739[28] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i741 = data
  i740.name = i741[0]
  i740.ascent = i741[1]
  i740.originalLineHeight = i741[2]
  i740.fontSize = i741[3]
  var i743 = i741[4]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i743[i + 0]) );
  }
  i740.characterInfo = i742
  request.r(i741[5], i741[6], 0, i740, 'texture')
  i740.originalFontSize = i741[7]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i747 = data
  i746.index = i747[0]
  i746.advance = i747[1]
  i746.bearing = i747[2]
  i746.glyphWidth = i747[3]
  i746.glyphHeight = i747[4]
  i746.minX = i747[5]
  i746.maxX = i747[6]
  i746.minY = i747[7]
  i746.maxY = i747[8]
  i746.uvBottomLeftX = i747[9]
  i746.uvBottomLeftY = i747[10]
  i746.uvBottomRightX = i747[11]
  i746.uvBottomRightY = i747[12]
  i746.uvTopLeftX = i747[13]
  i746.uvTopLeftY = i747[14]
  i746.uvTopRightX = i747[15]
  i746.uvTopRightY = i747[16]
  return i746
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i748 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i749 = data
  i748.useSafeMode = !!i749[0]
  i748.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i749[1], i748.safeModeOptions)
  i748.timeScale = i749[2]
  i748.unscaledTimeScale = i749[3]
  i748.useSmoothDeltaTime = !!i749[4]
  i748.maxSmoothUnscaledTime = i749[5]
  i748.rewindCallbackMode = i749[6]
  i748.showUnityEditorReport = !!i749[7]
  i748.logBehaviour = i749[8]
  i748.drawGizmos = !!i749[9]
  i748.defaultRecyclable = !!i749[10]
  i748.defaultAutoPlay = i749[11]
  i748.defaultUpdateType = i749[12]
  i748.defaultTimeScaleIndependent = !!i749[13]
  i748.defaultEaseType = i749[14]
  i748.defaultEaseOvershootOrAmplitude = i749[15]
  i748.defaultEasePeriod = i749[16]
  i748.defaultAutoKill = !!i749[17]
  i748.defaultLoopType = i749[18]
  i748.debugMode = !!i749[19]
  i748.debugStoreTargetId = !!i749[20]
  i748.showPreviewPanel = !!i749[21]
  i748.storeSettingsLocation = i749[22]
  i748.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i749[23], i748.modules)
  i748.createASMDEF = !!i749[24]
  i748.showPlayingTweens = !!i749[25]
  i748.showPausedTweens = !!i749[26]
  return i748
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i750 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i751 = data
  i750.logBehaviour = i751[0]
  i750.nestedTweenFailureBehaviour = i751[1]
  return i750
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i753 = data
  i752.showPanel = !!i753[0]
  i752.audioEnabled = !!i753[1]
  i752.physicsEnabled = !!i753[2]
  i752.physics2DEnabled = !!i753[3]
  i752.spriteEnabled = !!i753[4]
  i752.uiEnabled = !!i753[5]
  i752.textMeshProEnabled = !!i753[6]
  i752.tk2DEnabled = !!i753[7]
  i752.deAudioEnabled = !!i753[8]
  i752.deUnityExtendedEnabled = !!i753[9]
  i752.epoOutlineEnabled = !!i753[10]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i755 = data
  var i757 = i755[0]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i757[i + 0]) );
  }
  i754.files = i756
  i754.componentToPrefabIds = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i761 = data
  i760.path = i761[0]
  request.r(i761[1], i761[2], 0, i760, 'unityObject')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i763 = data
  var i765 = i763[0]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i765[i + 0]) );
  }
  i762.scriptsExecutionOrder = i764
  var i767 = i763[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i767[i + 0]) );
  }
  i762.sortingLayers = i766
  var i769 = i763[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i769[i + 0]) );
  }
  i762.cullingLayers = i768
  i762.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i763[3], i762.timeSettings)
  i762.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i763[4], i762.physicsSettings)
  i762.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i763[5], i762.physics2DSettings)
  i762.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i763[6], i762.qualitySettings)
  i762.enableRealtimeShadows = !!i763[7]
  i762.enableAutoInstancing = !!i763[8]
  i762.enableStaticBatching = !!i763[9]
  i762.enableDynamicBatching = !!i763[10]
  i762.usePreservativeDynamicBatching = !!i763[11]
  i762.lightmapEncodingQuality = i763[12]
  i762.desiredColorSpace = i763[13]
  var i771 = i763[14]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i762.allTags = i770
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i775 = data
  i774.name = i775[0]
  i774.value = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i779 = data
  i778.id = i779[0]
  i778.name = i779[1]
  i778.value = i779[2]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i783 = data
  i782.id = i783[0]
  i782.name = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i785 = data
  i784.fixedDeltaTime = i785[0]
  i784.maximumDeltaTime = i785[1]
  i784.timeScale = i785[2]
  i784.maximumParticleTimestep = i785[3]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i787 = data
  i786.gravity = new pc.Vec3( i787[0], i787[1], i787[2] )
  i786.defaultSolverIterations = i787[3]
  i786.bounceThreshold = i787[4]
  i786.autoSyncTransforms = !!i787[5]
  i786.autoSimulation = !!i787[6]
  var i789 = i787[7]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i789[i + 0]) );
  }
  i786.collisionMatrix = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i793 = data
  i792.enabled = !!i793[0]
  i792.layerId = i793[1]
  i792.otherLayerId = i793[2]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'material')
  i794.gravity = new pc.Vec2( i795[2], i795[3] )
  i794.positionIterations = i795[4]
  i794.velocityIterations = i795[5]
  i794.velocityThreshold = i795[6]
  i794.maxLinearCorrection = i795[7]
  i794.maxAngularCorrection = i795[8]
  i794.maxTranslationSpeed = i795[9]
  i794.maxRotationSpeed = i795[10]
  i794.baumgarteScale = i795[11]
  i794.baumgarteTOIScale = i795[12]
  i794.timeToSleep = i795[13]
  i794.linearSleepTolerance = i795[14]
  i794.angularSleepTolerance = i795[15]
  i794.defaultContactOffset = i795[16]
  i794.autoSimulation = !!i795[17]
  i794.queriesHitTriggers = !!i795[18]
  i794.queriesStartInColliders = !!i795[19]
  i794.callbacksOnDisable = !!i795[20]
  i794.reuseCollisionCallbacks = !!i795[21]
  i794.autoSyncTransforms = !!i795[22]
  var i797 = i795[23]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i797[i + 0]) );
  }
  i794.collisionMatrix = i796
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i801 = data
  i800.enabled = !!i801[0]
  i800.layerId = i801[1]
  i800.otherLayerId = i801[2]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i803 = data
  var i805 = i803[0]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i805[i + 0]) );
  }
  i802.qualityLevels = i804
  var i807 = i803[1]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i802.names = i806
  i802.shadows = i803[2]
  i802.anisotropicFiltering = i803[3]
  i802.antiAliasing = i803[4]
  i802.lodBias = i803[5]
  i802.shadowCascades = i803[6]
  i802.shadowDistance = i803[7]
  i802.shadowmaskMode = i803[8]
  i802.shadowProjection = i803[9]
  i802.shadowResolution = i803[10]
  i802.softParticles = !!i803[11]
  i802.softVegetation = !!i803[12]
  i802.activeColorSpace = i803[13]
  i802.desiredColorSpace = i803[14]
  i802.masterTextureLimit = i803[15]
  i802.maxQueuedFrames = i803[16]
  i802.particleRaycastBudget = i803[17]
  i802.pixelLightCount = i803[18]
  i802.realtimeReflectionProbes = !!i803[19]
  i802.shadowCascade2Split = i803[20]
  i802.shadowCascade4Split = new pc.Vec3( i803[21], i803[22], i803[23] )
  i802.streamingMipmapsActive = !!i803[24]
  i802.vSyncCount = i803[25]
  i802.asyncUploadBufferSize = i803[26]
  i802.asyncUploadTimeSlice = i803[27]
  i802.billboardsFaceCameraPosition = !!i803[28]
  i802.shadowNearPlaneOffset = i803[29]
  i802.streamingMipmapsMemoryBudget = i803[30]
  i802.maximumLODLevel = i803[31]
  i802.streamingMipmapsAddAllCameras = !!i803[32]
  i802.streamingMipmapsMaxLevelReduction = i803[33]
  i802.streamingMipmapsRenderersPerFrame = i803[34]
  i802.resolutionScalingFixedDPIFactor = i803[35]
  i802.streamingMipmapsMaxFileIORequests = i803[36]
  i802.currentQualityLevel = i803[37]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i813 = data
  i812.weight = i813[0]
  i812.vertices = i813[1]
  i812.normals = i813[2]
  i812.tangents = i813[3]
  return i812
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_ObjectArgument')
  i814.m_ObjectArgumentAssemblyTypeName = i815[2]
  i814.m_IntArgument = i815[3]
  i814.m_FloatArgument = i815[4]
  i814.m_StringArgument = i815[5]
  i814.m_BoolArgument = !!i815[6]
  return i814
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[13],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[60],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[13],"74":[9],"75":[76],"77":[76],"25":[24],"78":[79],"80":[24],"81":[24],"28":[25],"30":[29,24],"82":[24],"27":[25],"83":[24],"84":[24],"85":[24],"86":[24],"87":[24],"88":[24],"89":[24],"90":[24],"91":[24],"92":[29,24],"93":[24],"94":[24],"95":[24],"96":[24],"35":[29,24],"97":[24],"98":[37],"99":[37],"38":[37],"100":[37],"101":[13],"102":[13],"103":[79],"104":[24],"105":[9,24],"106":[24,29],"107":[24],"108":[29,24],"109":[9],"110":[29,24],"111":[24],"112":[79]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","HexStack","UnityEngine.Material","UnityEngine.BoxCollider","HexDisk","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.Light","UnityEngine.Grid","BoardController","HexCell","GameController","DragController","ReactionResolver","TutorialController","PackshotController","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.UI.Button","PlayButtonView","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "AlexanderSavin_TestAD";

Deserializers.lunaInitializationTime = "06/03/2026 19:31:39";

Deserializers.lunaDaysRunning = "3.6";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1827";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3873";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.AlexanderSavin-TestAD";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "e6ea2d66-75c7-4dbc-9a9e-110ef5f84c4e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

