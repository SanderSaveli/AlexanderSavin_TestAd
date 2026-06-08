var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i8618 = root || request.c( 'UnityEngine.JointSpring' )
  var i8619 = data
  i8618.spring = i8619[0]
  i8618.damper = i8619[1]
  i8618.targetPosition = i8619[2]
  return i8618
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i8620 = root || request.c( 'UnityEngine.JointMotor' )
  var i8621 = data
  i8620.m_TargetVelocity = i8621[0]
  i8620.m_Force = i8621[1]
  i8620.m_FreeSpin = i8621[2]
  return i8620
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i8622 = root || request.c( 'UnityEngine.JointLimits' )
  var i8623 = data
  i8622.m_Min = i8623[0]
  i8622.m_Max = i8623[1]
  i8622.m_Bounciness = i8623[2]
  i8622.m_BounceMinVelocity = i8623[3]
  i8622.m_ContactDistance = i8623[4]
  i8622.minBounce = i8623[5]
  i8622.maxBounce = i8623[6]
  return i8622
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i8624 = root || request.c( 'UnityEngine.JointDrive' )
  var i8625 = data
  i8624.m_PositionSpring = i8625[0]
  i8624.m_PositionDamper = i8625[1]
  i8624.m_MaximumForce = i8625[2]
  i8624.m_UseAcceleration = i8625[3]
  return i8624
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i8626 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i8627 = data
  i8626.m_Spring = i8627[0]
  i8626.m_Damper = i8627[1]
  return i8626
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i8628 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i8629 = data
  i8628.m_Limit = i8629[0]
  i8628.m_Bounciness = i8629[1]
  i8628.m_ContactDistance = i8629[2]
  return i8628
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i8630 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i8631 = data
  i8630.m_ExtremumSlip = i8631[0]
  i8630.m_ExtremumValue = i8631[1]
  i8630.m_AsymptoteSlip = i8631[2]
  i8630.m_AsymptoteValue = i8631[3]
  i8630.m_Stiffness = i8631[4]
  return i8630
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i8632 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i8633 = data
  i8632.m_LowerAngle = i8633[0]
  i8632.m_UpperAngle = i8633[1]
  return i8632
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i8634 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i8635 = data
  i8634.m_MotorSpeed = i8635[0]
  i8634.m_MaximumMotorTorque = i8635[1]
  return i8634
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i8636 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i8637 = data
  i8636.m_DampingRatio = i8637[0]
  i8636.m_Frequency = i8637[1]
  i8636.m_Angle = i8637[2]
  return i8636
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i8638 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i8639 = data
  i8638.m_LowerTranslation = i8639[0]
  i8638.m_UpperTranslation = i8639[1]
  return i8638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8641 = data
  i8640.name = i8641[0]
  i8640.halfPrecision = !!i8641[1]
  i8640.useSimplification = !!i8641[2]
  i8640.useUInt32IndexFormat = !!i8641[3]
  i8640.vertexCount = i8641[4]
  i8640.aabb = i8641[5]
  var i8643 = i8641[6]
  var i8642 = []
  for(var i = 0; i < i8643.length; i += 1) {
    i8642.push( !!i8643[i + 0] );
  }
  i8640.streams = i8642
  i8640.vertices = i8641[7]
  var i8645 = i8641[8]
  var i8644 = []
  for(var i = 0; i < i8645.length; i += 1) {
    i8644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8645[i + 0]) );
  }
  i8640.subMeshes = i8644
  var i8647 = i8641[9]
  var i8646 = []
  for(var i = 0; i < i8647.length; i += 16) {
    i8646.push( new pc.Mat4().setData(i8647[i + 0], i8647[i + 1], i8647[i + 2], i8647[i + 3],  i8647[i + 4], i8647[i + 5], i8647[i + 6], i8647[i + 7],  i8647[i + 8], i8647[i + 9], i8647[i + 10], i8647[i + 11],  i8647[i + 12], i8647[i + 13], i8647[i + 14], i8647[i + 15]) );
  }
  i8640.bindposes = i8646
  var i8649 = i8641[10]
  var i8648 = []
  for(var i = 0; i < i8649.length; i += 1) {
    i8648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8649[i + 0]) );
  }
  i8640.blendShapes = i8648
  return i8640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8655 = data
  i8654.triangles = i8655[0]
  return i8654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8661 = data
  i8660.name = i8661[0]
  var i8663 = i8661[1]
  var i8662 = []
  for(var i = 0; i < i8663.length; i += 1) {
    i8662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8663[i + 0]) );
  }
  i8660.frames = i8662
  return i8660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8664 = root || new pc.UnityMaterial()
  var i8665 = data
  i8664.name = i8665[0]
  request.r(i8665[1], i8665[2], 0, i8664, 'shader')
  i8664.renderQueue = i8665[3]
  i8664.enableInstancing = !!i8665[4]
  var i8667 = i8665[5]
  var i8666 = []
  for(var i = 0; i < i8667.length; i += 1) {
    i8666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8667[i + 0]) );
  }
  i8664.floatParameters = i8666
  var i8669 = i8665[6]
  var i8668 = []
  for(var i = 0; i < i8669.length; i += 1) {
    i8668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8669[i + 0]) );
  }
  i8664.colorParameters = i8668
  var i8671 = i8665[7]
  var i8670 = []
  for(var i = 0; i < i8671.length; i += 1) {
    i8670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8671[i + 0]) );
  }
  i8664.vectorParameters = i8670
  var i8673 = i8665[8]
  var i8672 = []
  for(var i = 0; i < i8673.length; i += 1) {
    i8672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8673[i + 0]) );
  }
  i8664.textureParameters = i8672
  var i8675 = i8665[9]
  var i8674 = []
  for(var i = 0; i < i8675.length; i += 1) {
    i8674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8675[i + 0]) );
  }
  i8664.materialFlags = i8674
  return i8664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8679 = data
  i8678.name = i8679[0]
  i8678.value = i8679[1]
  return i8678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8683 = data
  i8682.name = i8683[0]
  i8682.value = new pc.Color(i8683[1], i8683[2], i8683[3], i8683[4])
  return i8682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8687 = data
  i8686.name = i8687[0]
  i8686.value = new pc.Vec4( i8687[1], i8687[2], i8687[3], i8687[4] )
  return i8686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8691 = data
  i8690.name = i8691[0]
  request.r(i8691[1], i8691[2], 0, i8690, 'value')
  return i8690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8695 = data
  i8694.name = i8695[0]
  i8694.enabled = !!i8695[1]
  return i8694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8697 = data
  i8696.position = new pc.Vec3( i8697[0], i8697[1], i8697[2] )
  i8696.scale = new pc.Vec3( i8697[3], i8697[4], i8697[5] )
  i8696.rotation = new pc.Quat(i8697[6], i8697[7], i8697[8], i8697[9])
  return i8696
}

Deserializers["HexStack"] = function (request, data, root) {
  var i8698 = root || request.c( 'HexStack' )
  var i8699 = data
  request.r(i8699[0], i8699[1], 0, i8698, '_diskPrefab')
  var i8701 = i8699[2]
  var i8700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i8701.length; i += 2) {
  request.r(i8701[i + 0], i8701[i + 1], 1, i8700, '')
  }
  i8698._colorMaterials = i8700
  var i8703 = i8699[3]
  var i8702 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i8703.length; i += 1) {
    i8702.add(i8703[i + 0]);
  }
  i8698._initialColors = i8702
  i8698._diskHeight = i8699[4]
  i8698._diskScale = new pc.Vec3( i8699[5], i8699[6], i8699[7] )
  i8698._isOfferStack = !!i8699[8]
  i8698._isSolutionStack = !!i8699[9]
  return i8698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i8708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i8709 = data
  i8708.center = new pc.Vec3( i8709[0], i8709[1], i8709[2] )
  i8708.size = new pc.Vec3( i8709[3], i8709[4], i8709[5] )
  i8708.enabled = !!i8709[6]
  i8708.isTrigger = !!i8709[7]
  request.r(i8709[8], i8709[9], 0, i8708, 'material')
  return i8708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8711 = data
  i8710.name = i8711[0]
  i8710.tagId = i8711[1]
  i8710.enabled = !!i8711[2]
  i8710.isStatic = !!i8711[3]
  i8710.layer = i8711[4]
  return i8710
}

Deserializers["HexDisk"] = function (request, data, root) {
  var i8712 = root || request.c( 'HexDisk' )
  var i8713 = data
  i8712._color = i8713[0]
  var i8715 = i8713[1]
  var i8714 = []
  for(var i = 0; i < i8715.length; i += 2) {
  request.r(i8715[i + 0], i8715[i + 1], 2, i8714, '')
  }
  i8712._renderers = i8714
  return i8712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i8718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i8719 = data
  request.r(i8719[0], i8719[1], 0, i8718, 'sharedMesh')
  return i8718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i8720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i8721 = data
  request.r(i8721[0], i8721[1], 0, i8720, 'additionalVertexStreams')
  i8720.enabled = !!i8721[2]
  request.r(i8721[3], i8721[4], 0, i8720, 'sharedMaterial')
  var i8723 = i8721[5]
  var i8722 = []
  for(var i = 0; i < i8723.length; i += 2) {
  request.r(i8723[i + 0], i8723[i + 1], 2, i8722, '')
  }
  i8720.sharedMaterials = i8722
  i8720.receiveShadows = !!i8721[6]
  i8720.shadowCastingMode = i8721[7]
  i8720.sortingLayerID = i8721[8]
  i8720.sortingOrder = i8721[9]
  i8720.lightmapIndex = i8721[10]
  i8720.lightmapSceneIndex = i8721[11]
  i8720.lightmapScaleOffset = new pc.Vec4( i8721[12], i8721[13], i8721[14], i8721[15] )
  i8720.lightProbeUsage = i8721[16]
  i8720.reflectionProbeUsage = i8721[17]
  return i8720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8727 = data
  i8726.name = i8727[0]
  i8726.width = i8727[1]
  i8726.height = i8727[2]
  i8726.mipmapCount = i8727[3]
  i8726.anisoLevel = i8727[4]
  i8726.filterMode = i8727[5]
  i8726.hdr = !!i8727[6]
  i8726.format = i8727[7]
  i8726.wrapMode = i8727[8]
  i8726.alphaIsTransparency = !!i8727[9]
  i8726.alphaSource = i8727[10]
  i8726.graphicsFormat = i8727[11]
  i8726.sRGBTexture = !!i8727[12]
  i8726.desiredColorSpace = i8727[13]
  i8726.wrapU = i8727[14]
  i8726.wrapV = i8727[15]
  return i8726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8729 = data
  i8728.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8729[0], i8728.main)
  i8728.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8729[1], i8728.colorBySpeed)
  i8728.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8729[2], i8728.colorOverLifetime)
  i8728.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8729[3], i8728.emission)
  i8728.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8729[4], i8728.rotationBySpeed)
  i8728.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8729[5], i8728.rotationOverLifetime)
  i8728.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8729[6], i8728.shape)
  i8728.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8729[7], i8728.sizeBySpeed)
  i8728.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8729[8], i8728.sizeOverLifetime)
  i8728.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8729[9], i8728.textureSheetAnimation)
  i8728.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8729[10], i8728.velocityOverLifetime)
  i8728.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8729[11], i8728.noise)
  i8728.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8729[12], i8728.inheritVelocity)
  i8728.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8729[13], i8728.forceOverLifetime)
  i8728.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8729[14], i8728.limitVelocityOverLifetime)
  i8728.useAutoRandomSeed = !!i8729[15]
  i8728.randomSeed = i8729[16]
  return i8728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8730 = root || new pc.ParticleSystemMain()
  var i8731 = data
  i8730.duration = i8731[0]
  i8730.loop = !!i8731[1]
  i8730.prewarm = !!i8731[2]
  i8730.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[3], i8730.startDelay)
  i8730.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[4], i8730.startLifetime)
  i8730.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[5], i8730.startSpeed)
  i8730.startSize3D = !!i8731[6]
  i8730.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[7], i8730.startSizeX)
  i8730.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[8], i8730.startSizeY)
  i8730.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[9], i8730.startSizeZ)
  i8730.startRotation3D = !!i8731[10]
  i8730.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[11], i8730.startRotationX)
  i8730.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[12], i8730.startRotationY)
  i8730.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[13], i8730.startRotationZ)
  i8730.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8731[14], i8730.startColor)
  i8730.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8731[15], i8730.gravityModifier)
  i8730.simulationSpace = i8731[16]
  request.r(i8731[17], i8731[18], 0, i8730, 'customSimulationSpace')
  i8730.simulationSpeed = i8731[19]
  i8730.useUnscaledTime = !!i8731[20]
  i8730.scalingMode = i8731[21]
  i8730.playOnAwake = !!i8731[22]
  i8730.maxParticles = i8731[23]
  i8730.emitterVelocityMode = i8731[24]
  i8730.stopAction = i8731[25]
  return i8730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8732 = root || new pc.MinMaxCurve()
  var i8733 = data
  i8732.mode = i8733[0]
  i8732.curveMin = new pc.AnimationCurve( { keys_flow: i8733[1] } )
  i8732.curveMax = new pc.AnimationCurve( { keys_flow: i8733[2] } )
  i8732.curveMultiplier = i8733[3]
  i8732.constantMin = i8733[4]
  i8732.constantMax = i8733[5]
  return i8732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8734 = root || new pc.MinMaxGradient()
  var i8735 = data
  i8734.mode = i8735[0]
  i8734.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8735[1], i8734.gradientMin)
  i8734.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8735[2], i8734.gradientMax)
  i8734.colorMin = new pc.Color(i8735[3], i8735[4], i8735[5], i8735[6])
  i8734.colorMax = new pc.Color(i8735[7], i8735[8], i8735[9], i8735[10])
  return i8734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8737 = data
  i8736.mode = i8737[0]
  var i8739 = i8737[1]
  var i8738 = []
  for(var i = 0; i < i8739.length; i += 1) {
    i8738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8739[i + 0]) );
  }
  i8736.colorKeys = i8738
  var i8741 = i8737[2]
  var i8740 = []
  for(var i = 0; i < i8741.length; i += 1) {
    i8740.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8741[i + 0]) );
  }
  i8736.alphaKeys = i8740
  return i8736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8742 = root || new pc.ParticleSystemColorBySpeed()
  var i8743 = data
  i8742.enabled = !!i8743[0]
  i8742.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8743[1], i8742.color)
  i8742.range = new pc.Vec2( i8743[2], i8743[3] )
  return i8742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8747 = data
  i8746.color = new pc.Color(i8747[0], i8747[1], i8747[2], i8747[3])
  i8746.time = i8747[4]
  return i8746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8751 = data
  i8750.alpha = i8751[0]
  i8750.time = i8751[1]
  return i8750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8752 = root || new pc.ParticleSystemColorOverLifetime()
  var i8753 = data
  i8752.enabled = !!i8753[0]
  i8752.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8753[1], i8752.color)
  return i8752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8754 = root || new pc.ParticleSystemEmitter()
  var i8755 = data
  i8754.enabled = !!i8755[0]
  i8754.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[1], i8754.rateOverTime)
  i8754.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[2], i8754.rateOverDistance)
  var i8757 = i8755[3]
  var i8756 = []
  for(var i = 0; i < i8757.length; i += 1) {
    i8756.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8757[i + 0]) );
  }
  i8754.bursts = i8756
  return i8754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8760 = root || new pc.ParticleSystemBurst()
  var i8761 = data
  i8760.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8761[0], i8760.count)
  i8760.cycleCount = i8761[1]
  i8760.minCount = i8761[2]
  i8760.maxCount = i8761[3]
  i8760.repeatInterval = i8761[4]
  i8760.time = i8761[5]
  return i8760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8762 = root || new pc.ParticleSystemRotationBySpeed()
  var i8763 = data
  i8762.enabled = !!i8763[0]
  i8762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8763[1], i8762.x)
  i8762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8763[2], i8762.y)
  i8762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8763[3], i8762.z)
  i8762.separateAxes = !!i8763[4]
  i8762.range = new pc.Vec2( i8763[5], i8763[6] )
  return i8762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8764 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8765 = data
  i8764.enabled = !!i8765[0]
  i8764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8765[1], i8764.x)
  i8764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8765[2], i8764.y)
  i8764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8765[3], i8764.z)
  i8764.separateAxes = !!i8765[4]
  return i8764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8766 = root || new pc.ParticleSystemShape()
  var i8767 = data
  i8766.enabled = !!i8767[0]
  i8766.shapeType = i8767[1]
  i8766.randomDirectionAmount = i8767[2]
  i8766.sphericalDirectionAmount = i8767[3]
  i8766.randomPositionAmount = i8767[4]
  i8766.alignToDirection = !!i8767[5]
  i8766.radius = i8767[6]
  i8766.radiusMode = i8767[7]
  i8766.radiusSpread = i8767[8]
  i8766.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8767[9], i8766.radiusSpeed)
  i8766.radiusThickness = i8767[10]
  i8766.angle = i8767[11]
  i8766.length = i8767[12]
  i8766.boxThickness = new pc.Vec3( i8767[13], i8767[14], i8767[15] )
  i8766.meshShapeType = i8767[16]
  request.r(i8767[17], i8767[18], 0, i8766, 'mesh')
  request.r(i8767[19], i8767[20], 0, i8766, 'meshRenderer')
  request.r(i8767[21], i8767[22], 0, i8766, 'skinnedMeshRenderer')
  i8766.useMeshMaterialIndex = !!i8767[23]
  i8766.meshMaterialIndex = i8767[24]
  i8766.useMeshColors = !!i8767[25]
  i8766.normalOffset = i8767[26]
  i8766.arc = i8767[27]
  i8766.arcMode = i8767[28]
  i8766.arcSpread = i8767[29]
  i8766.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8767[30], i8766.arcSpeed)
  i8766.donutRadius = i8767[31]
  i8766.position = new pc.Vec3( i8767[32], i8767[33], i8767[34] )
  i8766.rotation = new pc.Vec3( i8767[35], i8767[36], i8767[37] )
  i8766.scale = new pc.Vec3( i8767[38], i8767[39], i8767[40] )
  return i8766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8768 = root || new pc.ParticleSystemSizeBySpeed()
  var i8769 = data
  i8768.enabled = !!i8769[0]
  i8768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8769[1], i8768.x)
  i8768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8769[2], i8768.y)
  i8768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8769[3], i8768.z)
  i8768.separateAxes = !!i8769[4]
  i8768.range = new pc.Vec2( i8769[5], i8769[6] )
  return i8768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8770 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8771 = data
  i8770.enabled = !!i8771[0]
  i8770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8771[1], i8770.x)
  i8770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8771[2], i8770.y)
  i8770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8771[3], i8770.z)
  i8770.separateAxes = !!i8771[4]
  return i8770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8772 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8773 = data
  i8772.enabled = !!i8773[0]
  i8772.mode = i8773[1]
  i8772.animation = i8773[2]
  i8772.numTilesX = i8773[3]
  i8772.numTilesY = i8773[4]
  i8772.useRandomRow = !!i8773[5]
  i8772.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8773[6], i8772.frameOverTime)
  i8772.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8773[7], i8772.startFrame)
  i8772.cycleCount = i8773[8]
  i8772.rowIndex = i8773[9]
  i8772.flipU = i8773[10]
  i8772.flipV = i8773[11]
  i8772.spriteCount = i8773[12]
  var i8775 = i8773[13]
  var i8774 = []
  for(var i = 0; i < i8775.length; i += 2) {
  request.r(i8775[i + 0], i8775[i + 1], 2, i8774, '')
  }
  i8772.sprites = i8774
  return i8772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8778 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8779 = data
  i8778.enabled = !!i8779[0]
  i8778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[1], i8778.x)
  i8778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[2], i8778.y)
  i8778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[3], i8778.z)
  i8778.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[4], i8778.radial)
  i8778.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[5], i8778.speedModifier)
  i8778.space = i8779[6]
  i8778.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[7], i8778.orbitalX)
  i8778.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[8], i8778.orbitalY)
  i8778.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[9], i8778.orbitalZ)
  i8778.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[10], i8778.orbitalOffsetX)
  i8778.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[11], i8778.orbitalOffsetY)
  i8778.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8779[12], i8778.orbitalOffsetZ)
  return i8778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8780 = root || new pc.ParticleSystemNoise()
  var i8781 = data
  i8780.enabled = !!i8781[0]
  i8780.separateAxes = !!i8781[1]
  i8780.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[2], i8780.strengthX)
  i8780.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[3], i8780.strengthY)
  i8780.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[4], i8780.strengthZ)
  i8780.frequency = i8781[5]
  i8780.damping = !!i8781[6]
  i8780.octaveCount = i8781[7]
  i8780.octaveMultiplier = i8781[8]
  i8780.octaveScale = i8781[9]
  i8780.quality = i8781[10]
  i8780.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[11], i8780.scrollSpeed)
  i8780.scrollSpeedMultiplier = i8781[12]
  i8780.remapEnabled = !!i8781[13]
  i8780.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[14], i8780.remapX)
  i8780.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[15], i8780.remapY)
  i8780.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[16], i8780.remapZ)
  i8780.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[17], i8780.positionAmount)
  i8780.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[18], i8780.rotationAmount)
  i8780.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8781[19], i8780.sizeAmount)
  return i8780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8782 = root || new pc.ParticleSystemInheritVelocity()
  var i8783 = data
  i8782.enabled = !!i8783[0]
  i8782.mode = i8783[1]
  i8782.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8783[2], i8782.curve)
  return i8782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8784 = root || new pc.ParticleSystemForceOverLifetime()
  var i8785 = data
  i8784.enabled = !!i8785[0]
  i8784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8785[1], i8784.x)
  i8784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8785[2], i8784.y)
  i8784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8785[3], i8784.z)
  i8784.space = i8785[4]
  i8784.randomized = !!i8785[5]
  return i8784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8786 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8787 = data
  i8786.enabled = !!i8787[0]
  i8786.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8787[1], i8786.limit)
  i8786.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8787[2], i8786.limitX)
  i8786.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8787[3], i8786.limitY)
  i8786.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8787[4], i8786.limitZ)
  i8786.dampen = i8787[5]
  i8786.separateAxes = !!i8787[6]
  i8786.space = i8787[7]
  i8786.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8787[8], i8786.drag)
  i8786.multiplyDragByParticleSize = !!i8787[9]
  i8786.multiplyDragByParticleVelocity = !!i8787[10]
  return i8786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8789 = data
  request.r(i8789[0], i8789[1], 0, i8788, 'mesh')
  i8788.meshCount = i8789[2]
  i8788.activeVertexStreamsCount = i8789[3]
  i8788.alignment = i8789[4]
  i8788.renderMode = i8789[5]
  i8788.sortMode = i8789[6]
  i8788.lengthScale = i8789[7]
  i8788.velocityScale = i8789[8]
  i8788.cameraVelocityScale = i8789[9]
  i8788.normalDirection = i8789[10]
  i8788.sortingFudge = i8789[11]
  i8788.minParticleSize = i8789[12]
  i8788.maxParticleSize = i8789[13]
  i8788.pivot = new pc.Vec3( i8789[14], i8789[15], i8789[16] )
  request.r(i8789[17], i8789[18], 0, i8788, 'trailMaterial')
  i8788.applyActiveColorSpace = !!i8789[19]
  i8788.enabled = !!i8789[20]
  request.r(i8789[21], i8789[22], 0, i8788, 'sharedMaterial')
  var i8791 = i8789[23]
  var i8790 = []
  for(var i = 0; i < i8791.length; i += 2) {
  request.r(i8791[i + 0], i8791[i + 1], 2, i8790, '')
  }
  i8788.sharedMaterials = i8790
  i8788.receiveShadows = !!i8789[24]
  i8788.shadowCastingMode = i8789[25]
  i8788.sortingLayerID = i8789[26]
  i8788.sortingOrder = i8789[27]
  i8788.lightmapIndex = i8789[28]
  i8788.lightmapSceneIndex = i8789[29]
  i8788.lightmapScaleOffset = new pc.Vec4( i8789[30], i8789[31], i8789[32], i8789[33] )
  i8788.lightProbeUsage = i8789[34]
  i8788.reflectionProbeUsage = i8789[35]
  return i8788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8793 = data
  i8792.name = i8793[0]
  i8792.atlasId = i8793[1]
  i8792.mipmapCount = i8793[2]
  i8792.hdr = !!i8793[3]
  i8792.size = i8793[4]
  i8792.anisoLevel = i8793[5]
  i8792.filterMode = i8793[6]
  var i8795 = i8793[7]
  var i8794 = []
  for(var i = 0; i < i8795.length; i += 4) {
    i8794.push( UnityEngine.Rect.MinMaxRect(i8795[i + 0], i8795[i + 1], i8795[i + 2], i8795[i + 3]) );
  }
  i8792.rects = i8794
  i8792.wrapU = i8793[8]
  i8792.wrapV = i8793[9]
  return i8792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8799 = data
  i8798.name = i8799[0]
  i8798.index = i8799[1]
  i8798.startup = !!i8799[2]
  return i8798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8801 = data
  i8800.aspect = i8801[0]
  i8800.orthographic = !!i8801[1]
  i8800.orthographicSize = i8801[2]
  i8800.backgroundColor = new pc.Color(i8801[3], i8801[4], i8801[5], i8801[6])
  i8800.nearClipPlane = i8801[7]
  i8800.farClipPlane = i8801[8]
  i8800.fieldOfView = i8801[9]
  i8800.depth = i8801[10]
  i8800.clearFlags = i8801[11]
  i8800.cullingMask = i8801[12]
  i8800.rect = i8801[13]
  request.r(i8801[14], i8801[15], 0, i8800, 'targetTexture')
  i8800.usePhysicalProperties = !!i8801[16]
  i8800.focalLength = i8801[17]
  i8800.sensorSize = new pc.Vec2( i8801[18], i8801[19] )
  i8800.lensShift = new pc.Vec2( i8801[20], i8801[21] )
  i8800.gateFit = i8801[22]
  i8800.commandBufferCount = i8801[23]
  i8800.cameraType = i8801[24]
  i8800.enabled = !!i8801[25]
  return i8800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i8802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i8803 = data
  i8802.type = i8803[0]
  i8802.color = new pc.Color(i8803[1], i8803[2], i8803[3], i8803[4])
  i8802.cullingMask = i8803[5]
  i8802.intensity = i8803[6]
  i8802.range = i8803[7]
  i8802.spotAngle = i8803[8]
  i8802.shadows = i8803[9]
  i8802.shadowNormalBias = i8803[10]
  i8802.shadowBias = i8803[11]
  i8802.shadowStrength = i8803[12]
  i8802.shadowResolution = i8803[13]
  i8802.lightmapBakeType = i8803[14]
  i8802.renderMode = i8803[15]
  request.r(i8803[16], i8803[17], 0, i8802, 'cookie')
  i8802.cookieSize = i8803[18]
  i8802.shadowNearPlane = i8803[19]
  i8802.occlusionMaskChannel = i8803[20]
  i8802.isBaked = !!i8803[21]
  i8802.mixedLightingMode = i8803[22]
  i8802.enabled = !!i8803[23]
  return i8802
}

Deserializers["BoardController"] = function (request, data, root) {
  var i8804 = root || request.c( 'BoardController' )
  var i8805 = data
  request.r(i8805[0], i8805[1], 0, i8804, '_grid')
  var i8807 = i8805[2]
  var i8806 = new (System.Collections.Generic.List$1(Bridge.ns('HexCell')))
  for(var i = 0; i < i8807.length; i += 2) {
  request.r(i8807[i + 0], i8807[i + 1], 1, i8806, '')
  }
  i8804._cells = i8806
  request.r(i8805[3], i8805[4], 0, i8804, '_stackPrefab')
  request.r(i8805[5], i8805[6], 0, i8804, '_diskPrefab')
  var i8809 = i8805[7]
  var i8808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i8809.length; i += 2) {
  request.r(i8809[i + 0], i8809[i + 1], 1, i8808, '')
  }
  i8804._colorMaterials = i8808
  i8804._snapRadius = i8805[8]
  return i8804
}

Deserializers["HexCell"] = function (request, data, root) {
  var i8812 = root || request.c( 'HexCell' )
  var i8813 = data
  var i8815 = i8813[0]
  var i8814 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i8815.length; i += 1) {
    i8814.add(i8815[i + 0]);
  }
  i8812._initialStackColors = i8814
  request.r(i8813[1], i8813[2], 0, i8812, '_currentStack')
  request.r(i8813[3], i8813[4], 0, i8812, '_ringRenderer')
  request.r(i8813[5], i8813[6], 0, i8812, '_highlightView')
  return i8812
}

Deserializers["CellHighlightView"] = function (request, data, root) {
  var i8816 = root || request.c( 'CellHighlightView' )
  var i8817 = data
  request.r(i8817[0], i8817[1], 0, i8816, '_normalMaterial')
  request.r(i8817[2], i8817[3], 0, i8816, '_highlightMaterial')
  return i8816
}

Deserializers["GameController"] = function (request, data, root) {
  var i8818 = root || request.c( 'GameController' )
  var i8819 = data
  request.r(i8819[0], i8819[1], 0, i8818, '_gameCamera')
  request.r(i8819[2], i8819[3], 0, i8818, '_board')
  request.r(i8819[4], i8819[5], 0, i8818, '_dragController')
  request.r(i8819[6], i8819[7], 0, i8818, '_reactionResolver')
  request.r(i8819[8], i8819[9], 0, i8818, '_tutorial')
  request.r(i8819[10], i8819[11], 0, i8818, '_packshot')
  return i8818
}

Deserializers["DragController"] = function (request, data, root) {
  var i8820 = root || request.c( 'DragController' )
  var i8821 = data
  i8820._draggableMask = UnityEngine.LayerMask.FromIntegerValue( i8821[0] )
  i8820._liftHeight = i8821[1]
  i8820._followLerp = i8821[2]
  return i8820
}

Deserializers["ReactionResolver"] = function (request, data, root) {
  var i8822 = root || request.c( 'ReactionResolver' )
  var i8823 = data
  request.r(i8823[0], i8823[1], 0, i8822, '_vanishFxPrefab')
  i8822._baseFlyDuration = i8823[2]
  i8822._vanishDiskScaleDuration = i8823[3]
  i8822._vanishDiskDelay = i8823[4]
  i8822._speedIncrease = i8823[5]
  i8822._maxReactionSpeedMultiplier = i8823[6]
  i8822._diskLaunchInterval = i8823[7]
  i8822._edgePivotOffset = i8823[8]
  i8822._rollDegrees = i8823[9]
  i8822._vanishStackSize = i8823[10]
  return i8822
}

Deserializers["TutorialController"] = function (request, data, root) {
  var i8824 = root || request.c( 'TutorialController' )
  var i8825 = data
  request.r(i8825[0], i8825[1], 0, i8824, '_hand')
  request.r(i8825[2], i8825[3], 0, i8824, '_canvas')
  request.r(i8825[4], i8825[5], 0, i8824, '_gameCamera')
  request.r(i8825[6], i8825[7], 0, i8824, '_sourceStack')
  i8824._replayDelay = i8825[8]
  i8824._pressOffset = new pc.Vec2( i8825[9], i8825[10] )
  i8824._releaseOffset = new pc.Vec2( i8825[11], i8825[12] )
  return i8824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8827 = data
  i8826.pivot = new pc.Vec2( i8827[0], i8827[1] )
  i8826.anchorMin = new pc.Vec2( i8827[2], i8827[3] )
  i8826.anchorMax = new pc.Vec2( i8827[4], i8827[5] )
  i8826.sizeDelta = new pc.Vec2( i8827[6], i8827[7] )
  i8826.anchoredPosition3D = new pc.Vec3( i8827[8], i8827[9], i8827[10] )
  i8826.rotation = new pc.Quat(i8827[11], i8827[12], i8827[13], i8827[14])
  i8826.scale = new pc.Vec3( i8827[15], i8827[16], i8827[17] )
  return i8826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8829 = data
  i8828.planeDistance = i8829[0]
  i8828.referencePixelsPerUnit = i8829[1]
  i8828.isFallbackOverlay = !!i8829[2]
  i8828.renderMode = i8829[3]
  i8828.renderOrder = i8829[4]
  i8828.sortingLayerName = i8829[5]
  i8828.sortingOrder = i8829[6]
  i8828.scaleFactor = i8829[7]
  request.r(i8829[8], i8829[9], 0, i8828, 'worldCamera')
  i8828.overrideSorting = !!i8829[10]
  i8828.pixelPerfect = !!i8829[11]
  i8828.targetDisplay = i8829[12]
  i8828.overridePixelPerfect = !!i8829[13]
  i8828.enabled = !!i8829[14]
  return i8828
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8830 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8831 = data
  i8830.m_UiScaleMode = i8831[0]
  i8830.m_ReferencePixelsPerUnit = i8831[1]
  i8830.m_ScaleFactor = i8831[2]
  i8830.m_ReferenceResolution = new pc.Vec2( i8831[3], i8831[4] )
  i8830.m_ScreenMatchMode = i8831[5]
  i8830.m_MatchWidthOrHeight = i8831[6]
  i8830.m_PhysicalUnit = i8831[7]
  i8830.m_FallbackScreenDPI = i8831[8]
  i8830.m_DefaultSpriteDPI = i8831[9]
  i8830.m_DynamicPixelsPerUnit = i8831[10]
  i8830.m_PresetInfoIsWorld = !!i8831[11]
  return i8830
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8832 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8833 = data
  i8832.m_IgnoreReversedGraphics = !!i8833[0]
  i8832.m_BlockingObjects = i8833[1]
  i8832.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8833[2] )
  return i8832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8835 = data
  i8834.cullTransparentMesh = !!i8835[0]
  return i8834
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8836 = root || request.c( 'UnityEngine.UI.Image' )
  var i8837 = data
  request.r(i8837[0], i8837[1], 0, i8836, 'm_Sprite')
  i8836.m_Type = i8837[2]
  i8836.m_PreserveAspect = !!i8837[3]
  i8836.m_FillCenter = !!i8837[4]
  i8836.m_FillMethod = i8837[5]
  i8836.m_FillAmount = i8837[6]
  i8836.m_FillClockwise = !!i8837[7]
  i8836.m_FillOrigin = i8837[8]
  i8836.m_UseSpriteMesh = !!i8837[9]
  i8836.m_PixelsPerUnitMultiplier = i8837[10]
  request.r(i8837[11], i8837[12], 0, i8836, 'm_Material')
  i8836.m_Maskable = !!i8837[13]
  i8836.m_Color = new pc.Color(i8837[14], i8837[15], i8837[16], i8837[17])
  i8836.m_RaycastTarget = !!i8837[18]
  i8836.m_RaycastPadding = new pc.Vec4( i8837[19], i8837[20], i8837[21], i8837[22] )
  return i8836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8839 = data
  i8838.m_Alpha = i8839[0]
  i8838.m_Interactable = !!i8839[1]
  i8838.m_BlocksRaycasts = !!i8839[2]
  i8838.m_IgnoreParentGroups = !!i8839[3]
  i8838.enabled = !!i8839[4]
  return i8838
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i8840 = root || request.c( 'PackshotController' )
  var i8841 = data
  request.r(i8841[0], i8841[1], 0, i8840, '_group')
  request.r(i8841[2], i8841[3], 0, i8840, '_playNowButton')
  request.r(i8841[4], i8841[5], 0, i8840, '_playButtonView')
  i8840._fadeDuration = i8841[6]
  return i8840
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i8842 = root || request.c( 'UnityEngine.UI.Text' )
  var i8843 = data
  i8842.m_FontData = request.d('UnityEngine.UI.FontData', i8843[0], i8842.m_FontData)
  i8842.m_Text = i8843[1]
  request.r(i8843[2], i8843[3], 0, i8842, 'm_Material')
  i8842.m_Maskable = !!i8843[4]
  i8842.m_Color = new pc.Color(i8843[5], i8843[6], i8843[7], i8843[8])
  i8842.m_RaycastTarget = !!i8843[9]
  i8842.m_RaycastPadding = new pc.Vec4( i8843[10], i8843[11], i8843[12], i8843[13] )
  return i8842
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i8844 = root || request.c( 'UnityEngine.UI.FontData' )
  var i8845 = data
  request.r(i8845[0], i8845[1], 0, i8844, 'm_Font')
  i8844.m_FontSize = i8845[2]
  i8844.m_FontStyle = i8845[3]
  i8844.m_BestFit = !!i8845[4]
  i8844.m_MinSize = i8845[5]
  i8844.m_MaxSize = i8845[6]
  i8844.m_Alignment = i8845[7]
  i8844.m_AlignByGeometry = !!i8845[8]
  i8844.m_RichText = !!i8845[9]
  i8844.m_HorizontalOverflow = i8845[10]
  i8844.m_VerticalOverflow = i8845[11]
  i8844.m_LineSpacing = i8845[12]
  return i8844
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8846 = root || request.c( 'UnityEngine.UI.Button' )
  var i8847 = data
  i8846.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8847[0], i8846.m_OnClick)
  i8846.m_Navigation = request.d('UnityEngine.UI.Navigation', i8847[1], i8846.m_Navigation)
  i8846.m_Transition = i8847[2]
  i8846.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8847[3], i8846.m_Colors)
  i8846.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8847[4], i8846.m_SpriteState)
  i8846.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8847[5], i8846.m_AnimationTriggers)
  i8846.m_Interactable = !!i8847[6]
  request.r(i8847[7], i8847[8], 0, i8846, 'm_TargetGraphic')
  return i8846
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8848 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8849 = data
  i8848.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8849[0], i8848.m_PersistentCalls)
  return i8848
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8850 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8851 = data
  var i8853 = i8851[0]
  var i8852 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8853.length; i += 1) {
    i8852.add(request.d('UnityEngine.Events.PersistentCall', i8853[i + 0]));
  }
  i8850.m_Calls = i8852
  return i8850
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8856 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8857 = data
  request.r(i8857[0], i8857[1], 0, i8856, 'm_Target')
  i8856.m_TargetAssemblyTypeName = i8857[2]
  i8856.m_MethodName = i8857[3]
  i8856.m_Mode = i8857[4]
  i8856.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8857[5], i8856.m_Arguments)
  i8856.m_CallState = i8857[6]
  return i8856
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8858 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8859 = data
  i8858.m_Mode = i8859[0]
  i8858.m_WrapAround = !!i8859[1]
  request.r(i8859[2], i8859[3], 0, i8858, 'm_SelectOnUp')
  request.r(i8859[4], i8859[5], 0, i8858, 'm_SelectOnDown')
  request.r(i8859[6], i8859[7], 0, i8858, 'm_SelectOnLeft')
  request.r(i8859[8], i8859[9], 0, i8858, 'm_SelectOnRight')
  return i8858
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8860 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8861 = data
  i8860.m_NormalColor = new pc.Color(i8861[0], i8861[1], i8861[2], i8861[3])
  i8860.m_HighlightedColor = new pc.Color(i8861[4], i8861[5], i8861[6], i8861[7])
  i8860.m_PressedColor = new pc.Color(i8861[8], i8861[9], i8861[10], i8861[11])
  i8860.m_SelectedColor = new pc.Color(i8861[12], i8861[13], i8861[14], i8861[15])
  i8860.m_DisabledColor = new pc.Color(i8861[16], i8861[17], i8861[18], i8861[19])
  i8860.m_ColorMultiplier = i8861[20]
  i8860.m_FadeDuration = i8861[21]
  return i8860
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8862 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8863 = data
  request.r(i8863[0], i8863[1], 0, i8862, 'm_HighlightedSprite')
  request.r(i8863[2], i8863[3], 0, i8862, 'm_PressedSprite')
  request.r(i8863[4], i8863[5], 0, i8862, 'm_SelectedSprite')
  request.r(i8863[6], i8863[7], 0, i8862, 'm_DisabledSprite')
  return i8862
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8864 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8865 = data
  i8864.m_NormalTrigger = i8865[0]
  i8864.m_HighlightedTrigger = i8865[1]
  i8864.m_PressedTrigger = i8865[2]
  i8864.m_SelectedTrigger = i8865[3]
  i8864.m_DisabledTrigger = i8865[4]
  return i8864
}

Deserializers["PlayButtonView"] = function (request, data, root) {
  var i8866 = root || request.c( 'PlayButtonView' )
  var i8867 = data
  request.r(i8867[0], i8867[1], 0, i8866, '_target')
  i8866._pulseScale = i8867[2]
  i8866._pulseDuration = i8867[3]
  return i8866
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8868 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8869 = data
  request.r(i8869[0], i8869[1], 0, i8868, 'm_FirstSelected')
  i8868.m_sendNavigationEvents = !!i8869[2]
  i8868.m_DragThreshold = i8869[3]
  return i8868
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8870 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8871 = data
  i8870.m_HorizontalAxis = i8871[0]
  i8870.m_VerticalAxis = i8871[1]
  i8870.m_SubmitButton = i8871[2]
  i8870.m_CancelButton = i8871[3]
  i8870.m_InputActionsPerSecond = i8871[4]
  i8870.m_RepeatDelay = i8871[5]
  i8870.m_ForceModuleActive = !!i8871[6]
  i8870.m_SendPointerHoverToParent = !!i8871[7]
  return i8870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8873 = data
  i8872.ambientIntensity = i8873[0]
  i8872.reflectionIntensity = i8873[1]
  i8872.ambientMode = i8873[2]
  i8872.ambientLight = new pc.Color(i8873[3], i8873[4], i8873[5], i8873[6])
  i8872.ambientSkyColor = new pc.Color(i8873[7], i8873[8], i8873[9], i8873[10])
  i8872.ambientGroundColor = new pc.Color(i8873[11], i8873[12], i8873[13], i8873[14])
  i8872.ambientEquatorColor = new pc.Color(i8873[15], i8873[16], i8873[17], i8873[18])
  i8872.fogColor = new pc.Color(i8873[19], i8873[20], i8873[21], i8873[22])
  i8872.fogEndDistance = i8873[23]
  i8872.fogStartDistance = i8873[24]
  i8872.fogDensity = i8873[25]
  i8872.fog = !!i8873[26]
  request.r(i8873[27], i8873[28], 0, i8872, 'skybox')
  i8872.fogMode = i8873[29]
  var i8875 = i8873[30]
  var i8874 = []
  for(var i = 0; i < i8875.length; i += 1) {
    i8874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8875[i + 0]) );
  }
  i8872.lightmaps = i8874
  i8872.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8873[31], i8872.lightProbes)
  i8872.lightmapsMode = i8873[32]
  i8872.mixedBakeMode = i8873[33]
  i8872.environmentLightingMode = i8873[34]
  i8872.ambientProbe = new pc.SphericalHarmonicsL2(i8873[35])
  request.r(i8873[36], i8873[37], 0, i8872, 'customReflection')
  request.r(i8873[38], i8873[39], 0, i8872, 'defaultReflection')
  i8872.defaultReflectionMode = i8873[40]
  i8872.defaultReflectionResolution = i8873[41]
  i8872.sunLightObjectId = i8873[42]
  i8872.pixelLightCount = i8873[43]
  i8872.defaultReflectionHDR = !!i8873[44]
  i8872.hasLightDataAsset = !!i8873[45]
  i8872.hasManualGenerate = !!i8873[46]
  return i8872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8879 = data
  request.r(i8879[0], i8879[1], 0, i8878, 'lightmapColor')
  request.r(i8879[2], i8879[3], 0, i8878, 'lightmapDirection')
  request.r(i8879[4], i8879[5], 0, i8878, 'shadowMask')
  return i8878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8880 = root || new UnityEngine.LightProbes()
  var i8881 = data
  return i8880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8889 = data
  var i8891 = i8889[0]
  var i8890 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8891.length; i += 1) {
    i8890.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8891[i + 0]));
  }
  i8888.ShaderCompilationErrors = i8890
  i8888.name = i8889[1]
  i8888.guid = i8889[2]
  var i8893 = i8889[3]
  var i8892 = []
  for(var i = 0; i < i8893.length; i += 1) {
    i8892.push( i8893[i + 0] );
  }
  i8888.shaderDefinedKeywords = i8892
  var i8895 = i8889[4]
  var i8894 = []
  for(var i = 0; i < i8895.length; i += 1) {
    i8894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8895[i + 0]) );
  }
  i8888.passes = i8894
  var i8897 = i8889[5]
  var i8896 = []
  for(var i = 0; i < i8897.length; i += 1) {
    i8896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8897[i + 0]) );
  }
  i8888.usePasses = i8896
  var i8899 = i8889[6]
  var i8898 = []
  for(var i = 0; i < i8899.length; i += 1) {
    i8898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8899[i + 0]) );
  }
  i8888.defaultParameterValues = i8898
  request.r(i8889[7], i8889[8], 0, i8888, 'unityFallbackShader')
  i8888.readDepth = !!i8889[9]
  i8888.hasDepthOnlyPass = !!i8889[10]
  i8888.isCreatedByShaderGraph = !!i8889[11]
  i8888.disableBatching = !!i8889[12]
  i8888.compiled = !!i8889[13]
  return i8888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8903 = data
  i8902.shaderName = i8903[0]
  i8902.errorMessage = i8903[1]
  return i8902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8908 = root || new pc.UnityShaderPass()
  var i8909 = data
  i8908.id = i8909[0]
  i8908.subShaderIndex = i8909[1]
  i8908.name = i8909[2]
  i8908.passType = i8909[3]
  i8908.grabPassTextureName = i8909[4]
  i8908.usePass = !!i8909[5]
  i8908.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8909[6], i8908.zTest)
  i8908.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8909[7], i8908.zWrite)
  i8908.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8909[8], i8908.culling)
  i8908.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8909[9], i8908.blending)
  i8908.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8909[10], i8908.alphaBlending)
  i8908.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8909[11], i8908.colorWriteMask)
  i8908.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8909[12], i8908.offsetUnits)
  i8908.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8909[13], i8908.offsetFactor)
  i8908.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8909[14], i8908.stencilRef)
  i8908.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8909[15], i8908.stencilReadMask)
  i8908.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8909[16], i8908.stencilWriteMask)
  i8908.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8909[17], i8908.stencilOp)
  i8908.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8909[18], i8908.stencilOpFront)
  i8908.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8909[19], i8908.stencilOpBack)
  var i8911 = i8909[20]
  var i8910 = []
  for(var i = 0; i < i8911.length; i += 1) {
    i8910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8911[i + 0]) );
  }
  i8908.tags = i8910
  var i8913 = i8909[21]
  var i8912 = []
  for(var i = 0; i < i8913.length; i += 1) {
    i8912.push( i8913[i + 0] );
  }
  i8908.passDefinedKeywords = i8912
  var i8915 = i8909[22]
  var i8914 = []
  for(var i = 0; i < i8915.length; i += 1) {
    i8914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8915[i + 0]) );
  }
  i8908.passDefinedKeywordGroups = i8914
  var i8917 = i8909[23]
  var i8916 = []
  for(var i = 0; i < i8917.length; i += 1) {
    i8916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8917[i + 0]) );
  }
  i8908.variants = i8916
  var i8919 = i8909[24]
  var i8918 = []
  for(var i = 0; i < i8919.length; i += 1) {
    i8918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8919[i + 0]) );
  }
  i8908.excludedVariants = i8918
  i8908.hasDepthReader = !!i8909[25]
  return i8908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8921 = data
  i8920.val = i8921[0]
  i8920.name = i8921[1]
  return i8920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8923 = data
  i8922.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8923[0], i8922.src)
  i8922.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8923[1], i8922.dst)
  i8922.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8923[2], i8922.op)
  return i8922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8925 = data
  i8924.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8925[0], i8924.pass)
  i8924.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8925[1], i8924.fail)
  i8924.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8925[2], i8924.zFail)
  i8924.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8925[3], i8924.comp)
  return i8924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8929 = data
  i8928.name = i8929[0]
  i8928.value = i8929[1]
  return i8928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8933 = data
  var i8935 = i8933[0]
  var i8934 = []
  for(var i = 0; i < i8935.length; i += 1) {
    i8934.push( i8935[i + 0] );
  }
  i8932.keywords = i8934
  i8932.hasDiscard = !!i8933[1]
  return i8932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8939 = data
  i8938.passId = i8939[0]
  i8938.subShaderIndex = i8939[1]
  var i8941 = i8939[2]
  var i8940 = []
  for(var i = 0; i < i8941.length; i += 1) {
    i8940.push( i8941[i + 0] );
  }
  i8938.keywords = i8940
  i8938.vertexProgram = i8939[3]
  i8938.fragmentProgram = i8939[4]
  i8938.exportedForWebGl2 = !!i8939[5]
  i8938.readDepth = !!i8939[6]
  return i8938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8945 = data
  request.r(i8945[0], i8945[1], 0, i8944, 'shader')
  i8944.pass = i8945[2]
  return i8944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8949 = data
  i8948.name = i8949[0]
  i8948.type = i8949[1]
  i8948.value = new pc.Vec4( i8949[2], i8949[3], i8949[4], i8949[5] )
  i8948.textureValue = i8949[6]
  i8948.shaderPropertyFlag = i8949[7]
  return i8948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8951 = data
  i8950.name = i8951[0]
  request.r(i8951[1], i8951[2], 0, i8950, 'texture')
  i8950.aabb = i8951[3]
  i8950.vertices = i8951[4]
  i8950.triangles = i8951[5]
  i8950.textureRect = UnityEngine.Rect.MinMaxRect(i8951[6], i8951[7], i8951[8], i8951[9])
  i8950.packedRect = UnityEngine.Rect.MinMaxRect(i8951[10], i8951[11], i8951[12], i8951[13])
  i8950.border = new pc.Vec4( i8951[14], i8951[15], i8951[16], i8951[17] )
  i8950.transparency = i8951[18]
  i8950.bounds = i8951[19]
  i8950.pixelsPerUnit = i8951[20]
  i8950.textureWidth = i8951[21]
  i8950.textureHeight = i8951[22]
  i8950.nativeSize = new pc.Vec2( i8951[23], i8951[24] )
  i8950.pivot = new pc.Vec2( i8951[25], i8951[26] )
  i8950.textureRectOffset = new pc.Vec2( i8951[27], i8951[28] )
  return i8950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8953 = data
  i8952.name = i8953[0]
  i8952.ascent = i8953[1]
  i8952.originalLineHeight = i8953[2]
  i8952.fontSize = i8953[3]
  var i8955 = i8953[4]
  var i8954 = []
  for(var i = 0; i < i8955.length; i += 1) {
    i8954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8955[i + 0]) );
  }
  i8952.characterInfo = i8954
  request.r(i8953[5], i8953[6], 0, i8952, 'texture')
  i8952.originalFontSize = i8953[7]
  return i8952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8959 = data
  i8958.index = i8959[0]
  i8958.advance = i8959[1]
  i8958.bearing = i8959[2]
  i8958.glyphWidth = i8959[3]
  i8958.glyphHeight = i8959[4]
  i8958.minX = i8959[5]
  i8958.maxX = i8959[6]
  i8958.minY = i8959[7]
  i8958.maxY = i8959[8]
  i8958.uvBottomLeftX = i8959[9]
  i8958.uvBottomLeftY = i8959[10]
  i8958.uvBottomRightX = i8959[11]
  i8958.uvBottomRightY = i8959[12]
  i8958.uvTopLeftX = i8959[13]
  i8958.uvTopLeftY = i8959[14]
  i8958.uvTopRightX = i8959[15]
  i8958.uvTopRightY = i8959[16]
  return i8958
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8960 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8961 = data
  i8960.useSafeMode = !!i8961[0]
  i8960.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8961[1], i8960.safeModeOptions)
  i8960.timeScale = i8961[2]
  i8960.unscaledTimeScale = i8961[3]
  i8960.useSmoothDeltaTime = !!i8961[4]
  i8960.maxSmoothUnscaledTime = i8961[5]
  i8960.rewindCallbackMode = i8961[6]
  i8960.showUnityEditorReport = !!i8961[7]
  i8960.logBehaviour = i8961[8]
  i8960.drawGizmos = !!i8961[9]
  i8960.defaultRecyclable = !!i8961[10]
  i8960.defaultAutoPlay = i8961[11]
  i8960.defaultUpdateType = i8961[12]
  i8960.defaultTimeScaleIndependent = !!i8961[13]
  i8960.defaultEaseType = i8961[14]
  i8960.defaultEaseOvershootOrAmplitude = i8961[15]
  i8960.defaultEasePeriod = i8961[16]
  i8960.defaultAutoKill = !!i8961[17]
  i8960.defaultLoopType = i8961[18]
  i8960.debugMode = !!i8961[19]
  i8960.debugStoreTargetId = !!i8961[20]
  i8960.showPreviewPanel = !!i8961[21]
  i8960.storeSettingsLocation = i8961[22]
  i8960.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8961[23], i8960.modules)
  i8960.createASMDEF = !!i8961[24]
  i8960.showPlayingTweens = !!i8961[25]
  i8960.showPausedTweens = !!i8961[26]
  return i8960
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8962 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8963 = data
  i8962.logBehaviour = i8963[0]
  i8962.nestedTweenFailureBehaviour = i8963[1]
  return i8962
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8964 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8965 = data
  i8964.showPanel = !!i8965[0]
  i8964.audioEnabled = !!i8965[1]
  i8964.physicsEnabled = !!i8965[2]
  i8964.physics2DEnabled = !!i8965[3]
  i8964.spriteEnabled = !!i8965[4]
  i8964.uiEnabled = !!i8965[5]
  i8964.textMeshProEnabled = !!i8965[6]
  i8964.tk2DEnabled = !!i8965[7]
  i8964.deAudioEnabled = !!i8965[8]
  i8964.deUnityExtendedEnabled = !!i8965[9]
  i8964.epoOutlineEnabled = !!i8965[10]
  return i8964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8967 = data
  var i8969 = i8967[0]
  var i8968 = []
  for(var i = 0; i < i8969.length; i += 1) {
    i8968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8969[i + 0]) );
  }
  i8966.files = i8968
  i8966.componentToPrefabIds = i8967[1]
  return i8966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8973 = data
  i8972.path = i8973[0]
  request.r(i8973[1], i8973[2], 0, i8972, 'unityObject')
  return i8972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8975 = data
  var i8977 = i8975[0]
  var i8976 = []
  for(var i = 0; i < i8977.length; i += 1) {
    i8976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8977[i + 0]) );
  }
  i8974.scriptsExecutionOrder = i8976
  var i8979 = i8975[1]
  var i8978 = []
  for(var i = 0; i < i8979.length; i += 1) {
    i8978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8979[i + 0]) );
  }
  i8974.sortingLayers = i8978
  var i8981 = i8975[2]
  var i8980 = []
  for(var i = 0; i < i8981.length; i += 1) {
    i8980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8981[i + 0]) );
  }
  i8974.cullingLayers = i8980
  i8974.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8975[3], i8974.timeSettings)
  i8974.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8975[4], i8974.physicsSettings)
  i8974.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8975[5], i8974.physics2DSettings)
  i8974.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8975[6], i8974.qualitySettings)
  i8974.enableRealtimeShadows = !!i8975[7]
  i8974.enableAutoInstancing = !!i8975[8]
  i8974.enableStaticBatching = !!i8975[9]
  i8974.enableDynamicBatching = !!i8975[10]
  i8974.usePreservativeDynamicBatching = !!i8975[11]
  i8974.lightmapEncodingQuality = i8975[12]
  i8974.desiredColorSpace = i8975[13]
  var i8983 = i8975[14]
  var i8982 = []
  for(var i = 0; i < i8983.length; i += 1) {
    i8982.push( i8983[i + 0] );
  }
  i8974.allTags = i8982
  return i8974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8987 = data
  i8986.name = i8987[0]
  i8986.value = i8987[1]
  return i8986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8991 = data
  i8990.id = i8991[0]
  i8990.name = i8991[1]
  i8990.value = i8991[2]
  return i8990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8995 = data
  i8994.id = i8995[0]
  i8994.name = i8995[1]
  return i8994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8997 = data
  i8996.fixedDeltaTime = i8997[0]
  i8996.maximumDeltaTime = i8997[1]
  i8996.timeScale = i8997[2]
  i8996.maximumParticleTimestep = i8997[3]
  return i8996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8999 = data
  i8998.gravity = new pc.Vec3( i8999[0], i8999[1], i8999[2] )
  i8998.defaultSolverIterations = i8999[3]
  i8998.bounceThreshold = i8999[4]
  i8998.autoSyncTransforms = !!i8999[5]
  i8998.autoSimulation = !!i8999[6]
  var i9001 = i8999[7]
  var i9000 = []
  for(var i = 0; i < i9001.length; i += 1) {
    i9000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9001[i + 0]) );
  }
  i8998.collisionMatrix = i9000
  return i8998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9005 = data
  i9004.enabled = !!i9005[0]
  i9004.layerId = i9005[1]
  i9004.otherLayerId = i9005[2]
  return i9004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9007 = data
  request.r(i9007[0], i9007[1], 0, i9006, 'material')
  i9006.gravity = new pc.Vec2( i9007[2], i9007[3] )
  i9006.positionIterations = i9007[4]
  i9006.velocityIterations = i9007[5]
  i9006.velocityThreshold = i9007[6]
  i9006.maxLinearCorrection = i9007[7]
  i9006.maxAngularCorrection = i9007[8]
  i9006.maxTranslationSpeed = i9007[9]
  i9006.maxRotationSpeed = i9007[10]
  i9006.baumgarteScale = i9007[11]
  i9006.baumgarteTOIScale = i9007[12]
  i9006.timeToSleep = i9007[13]
  i9006.linearSleepTolerance = i9007[14]
  i9006.angularSleepTolerance = i9007[15]
  i9006.defaultContactOffset = i9007[16]
  i9006.autoSimulation = !!i9007[17]
  i9006.queriesHitTriggers = !!i9007[18]
  i9006.queriesStartInColliders = !!i9007[19]
  i9006.callbacksOnDisable = !!i9007[20]
  i9006.reuseCollisionCallbacks = !!i9007[21]
  i9006.autoSyncTransforms = !!i9007[22]
  var i9009 = i9007[23]
  var i9008 = []
  for(var i = 0; i < i9009.length; i += 1) {
    i9008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9009[i + 0]) );
  }
  i9006.collisionMatrix = i9008
  return i9006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9013 = data
  i9012.enabled = !!i9013[0]
  i9012.layerId = i9013[1]
  i9012.otherLayerId = i9013[2]
  return i9012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9015 = data
  var i9017 = i9015[0]
  var i9016 = []
  for(var i = 0; i < i9017.length; i += 1) {
    i9016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9017[i + 0]) );
  }
  i9014.qualityLevels = i9016
  var i9019 = i9015[1]
  var i9018 = []
  for(var i = 0; i < i9019.length; i += 1) {
    i9018.push( i9019[i + 0] );
  }
  i9014.names = i9018
  i9014.shadows = i9015[2]
  i9014.anisotropicFiltering = i9015[3]
  i9014.antiAliasing = i9015[4]
  i9014.lodBias = i9015[5]
  i9014.shadowCascades = i9015[6]
  i9014.shadowDistance = i9015[7]
  i9014.shadowmaskMode = i9015[8]
  i9014.shadowProjection = i9015[9]
  i9014.shadowResolution = i9015[10]
  i9014.softParticles = !!i9015[11]
  i9014.softVegetation = !!i9015[12]
  i9014.activeColorSpace = i9015[13]
  i9014.desiredColorSpace = i9015[14]
  i9014.masterTextureLimit = i9015[15]
  i9014.maxQueuedFrames = i9015[16]
  i9014.particleRaycastBudget = i9015[17]
  i9014.pixelLightCount = i9015[18]
  i9014.realtimeReflectionProbes = !!i9015[19]
  i9014.shadowCascade2Split = i9015[20]
  i9014.shadowCascade4Split = new pc.Vec3( i9015[21], i9015[22], i9015[23] )
  i9014.streamingMipmapsActive = !!i9015[24]
  i9014.vSyncCount = i9015[25]
  i9014.asyncUploadBufferSize = i9015[26]
  i9014.asyncUploadTimeSlice = i9015[27]
  i9014.billboardsFaceCameraPosition = !!i9015[28]
  i9014.shadowNearPlaneOffset = i9015[29]
  i9014.streamingMipmapsMemoryBudget = i9015[30]
  i9014.maximumLODLevel = i9015[31]
  i9014.streamingMipmapsAddAllCameras = !!i9015[32]
  i9014.streamingMipmapsMaxLevelReduction = i9015[33]
  i9014.streamingMipmapsRenderersPerFrame = i9015[34]
  i9014.resolutionScalingFixedDPIFactor = i9015[35]
  i9014.streamingMipmapsMaxFileIORequests = i9015[36]
  i9014.currentQualityLevel = i9015[37]
  return i9014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i9024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i9025 = data
  i9024.weight = i9025[0]
  i9024.vertices = i9025[1]
  i9024.normals = i9025[2]
  i9024.tangents = i9025[3]
  return i9024
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i9026 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i9027 = data
  request.r(i9027[0], i9027[1], 0, i9026, 'm_ObjectArgument')
  i9026.m_ObjectArgumentAssemblyTypeName = i9027[2]
  i9026.m_IntArgument = i9027[3]
  i9026.m_FloatArgument = i9027[4]
  i9026.m_StringArgument = i9027[5]
  i9026.m_BoolArgument = !!i9027[6]
  return i9026
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

Deserializers.buildID = "b7bc95a3-769f-43a9-9386-ce4e824166ba";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

