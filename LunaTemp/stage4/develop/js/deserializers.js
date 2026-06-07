var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.JointSpring' )
  var i2041 = data
  i2040.spring = i2041[0]
  i2040.damper = i2041[1]
  i2040.targetPosition = i2041[2]
  return i2040
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.JointMotor' )
  var i2043 = data
  i2042.m_TargetVelocity = i2043[0]
  i2042.m_Force = i2043[1]
  i2042.m_FreeSpin = i2043[2]
  return i2042
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.JointLimits' )
  var i2045 = data
  i2044.m_Min = i2045[0]
  i2044.m_Max = i2045[1]
  i2044.m_Bounciness = i2045[2]
  i2044.m_BounceMinVelocity = i2045[3]
  i2044.m_ContactDistance = i2045[4]
  i2044.minBounce = i2045[5]
  i2044.maxBounce = i2045[6]
  return i2044
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.JointDrive' )
  var i2047 = data
  i2046.m_PositionSpring = i2047[0]
  i2046.m_PositionDamper = i2047[1]
  i2046.m_MaximumForce = i2047[2]
  i2046.m_UseAcceleration = i2047[3]
  return i2046
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2049 = data
  i2048.m_Spring = i2049[0]
  i2048.m_Damper = i2049[1]
  return i2048
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2051 = data
  i2050.m_Limit = i2051[0]
  i2050.m_Bounciness = i2051[1]
  i2050.m_ContactDistance = i2051[2]
  return i2050
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2053 = data
  i2052.m_ExtremumSlip = i2053[0]
  i2052.m_ExtremumValue = i2053[1]
  i2052.m_AsymptoteSlip = i2053[2]
  i2052.m_AsymptoteValue = i2053[3]
  i2052.m_Stiffness = i2053[4]
  return i2052
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2055 = data
  i2054.m_LowerAngle = i2055[0]
  i2054.m_UpperAngle = i2055[1]
  return i2054
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2057 = data
  i2056.m_MotorSpeed = i2057[0]
  i2056.m_MaximumMotorTorque = i2057[1]
  return i2056
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2059 = data
  i2058.m_DampingRatio = i2059[0]
  i2058.m_Frequency = i2059[1]
  i2058.m_Angle = i2059[2]
  return i2058
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2061 = data
  i2060.m_LowerTranslation = i2061[0]
  i2060.m_UpperTranslation = i2061[1]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2063 = data
  i2062.name = i2063[0]
  i2062.halfPrecision = !!i2063[1]
  i2062.useSimplification = !!i2063[2]
  i2062.useUInt32IndexFormat = !!i2063[3]
  i2062.vertexCount = i2063[4]
  i2062.aabb = i2063[5]
  var i2065 = i2063[6]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( !!i2065[i + 0] );
  }
  i2062.streams = i2064
  i2062.vertices = i2063[7]
  var i2067 = i2063[8]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2067[i + 0]) );
  }
  i2062.subMeshes = i2066
  var i2069 = i2063[9]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 16) {
    i2068.push( new pc.Mat4().setData(i2069[i + 0], i2069[i + 1], i2069[i + 2], i2069[i + 3],  i2069[i + 4], i2069[i + 5], i2069[i + 6], i2069[i + 7],  i2069[i + 8], i2069[i + 9], i2069[i + 10], i2069[i + 11],  i2069[i + 12], i2069[i + 13], i2069[i + 14], i2069[i + 15]) );
  }
  i2062.bindposes = i2068
  var i2071 = i2063[10]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2071[i + 0]) );
  }
  i2062.blendShapes = i2070
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2077 = data
  i2076.triangles = i2077[0]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2083 = data
  i2082.name = i2083[0]
  var i2085 = i2083[1]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2085[i + 0]) );
  }
  i2082.frames = i2084
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2086 = root || new pc.UnityMaterial()
  var i2087 = data
  i2086.name = i2087[0]
  request.r(i2087[1], i2087[2], 0, i2086, 'shader')
  i2086.renderQueue = i2087[3]
  i2086.enableInstancing = !!i2087[4]
  var i2089 = i2087[5]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2089[i + 0]) );
  }
  i2086.floatParameters = i2088
  var i2091 = i2087[6]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2091[i + 0]) );
  }
  i2086.colorParameters = i2090
  var i2093 = i2087[7]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2093[i + 0]) );
  }
  i2086.vectorParameters = i2092
  var i2095 = i2087[8]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2095[i + 0]) );
  }
  i2086.textureParameters = i2094
  var i2097 = i2087[9]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2097[i + 0]) );
  }
  i2086.materialFlags = i2096
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2101 = data
  i2100.name = i2101[0]
  i2100.value = i2101[1]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2105 = data
  i2104.name = i2105[0]
  i2104.value = new pc.Color(i2105[1], i2105[2], i2105[3], i2105[4])
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2109 = data
  i2108.name = i2109[0]
  i2108.value = new pc.Vec4( i2109[1], i2109[2], i2109[3], i2109[4] )
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2113 = data
  i2112.name = i2113[0]
  request.r(i2113[1], i2113[2], 0, i2112, 'value')
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2117 = data
  i2116.name = i2117[0]
  i2116.enabled = !!i2117[1]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2119 = data
  i2118.position = new pc.Vec3( i2119[0], i2119[1], i2119[2] )
  i2118.scale = new pc.Vec3( i2119[3], i2119[4], i2119[5] )
  i2118.rotation = new pc.Quat(i2119[6], i2119[7], i2119[8], i2119[9])
  return i2118
}

Deserializers["HexStack"] = function (request, data, root) {
  var i2120 = root || request.c( 'HexStack' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, '_diskPrefab')
  var i2123 = i2121[2]
  var i2122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 1, i2122, '')
  }
  i2120._colorMaterials = i2122
  var i2125 = i2121[3]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.add(i2125[i + 0]);
  }
  i2120._initialColors = i2124
  i2120._diskHeight = i2121[4]
  i2120._isOfferStack = !!i2121[5]
  i2120._isSolutionStack = !!i2121[6]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2131 = data
  i2130.center = new pc.Vec3( i2131[0], i2131[1], i2131[2] )
  i2130.size = new pc.Vec3( i2131[3], i2131[4], i2131[5] )
  i2130.enabled = !!i2131[6]
  i2130.isTrigger = !!i2131[7]
  request.r(i2131[8], i2131[9], 0, i2130, 'material')
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2133 = data
  i2132.name = i2133[0]
  i2132.tagId = i2133[1]
  i2132.enabled = !!i2133[2]
  i2132.isStatic = !!i2133[3]
  i2132.layer = i2133[4]
  return i2132
}

Deserializers["HexDisk"] = function (request, data, root) {
  var i2134 = root || request.c( 'HexDisk' )
  var i2135 = data
  i2134._color = i2135[0]
  var i2137 = i2135[1]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 2, i2136, '')
  }
  i2134._renderers = i2136
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'sharedMesh')
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'additionalVertexStreams')
  i2142.enabled = !!i2143[2]
  request.r(i2143[3], i2143[4], 0, i2142, 'sharedMaterial')
  var i2145 = i2143[5]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2142.sharedMaterials = i2144
  i2142.receiveShadows = !!i2143[6]
  i2142.shadowCastingMode = i2143[7]
  i2142.sortingLayerID = i2143[8]
  i2142.sortingOrder = i2143[9]
  i2142.lightmapIndex = i2143[10]
  i2142.lightmapSceneIndex = i2143[11]
  i2142.lightmapScaleOffset = new pc.Vec4( i2143[12], i2143[13], i2143[14], i2143[15] )
  i2142.lightProbeUsage = i2143[16]
  i2142.reflectionProbeUsage = i2143[17]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2149 = data
  i2148.name = i2149[0]
  i2148.width = i2149[1]
  i2148.height = i2149[2]
  i2148.mipmapCount = i2149[3]
  i2148.anisoLevel = i2149[4]
  i2148.filterMode = i2149[5]
  i2148.hdr = !!i2149[6]
  i2148.format = i2149[7]
  i2148.wrapMode = i2149[8]
  i2148.alphaIsTransparency = !!i2149[9]
  i2148.alphaSource = i2149[10]
  i2148.graphicsFormat = i2149[11]
  i2148.sRGBTexture = !!i2149[12]
  i2148.desiredColorSpace = i2149[13]
  i2148.wrapU = i2149[14]
  i2148.wrapV = i2149[15]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2151 = data
  i2150.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2151[0], i2150.main)
  i2150.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2151[1], i2150.colorBySpeed)
  i2150.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2151[2], i2150.colorOverLifetime)
  i2150.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2151[3], i2150.emission)
  i2150.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2151[4], i2150.rotationBySpeed)
  i2150.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2151[5], i2150.rotationOverLifetime)
  i2150.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2151[6], i2150.shape)
  i2150.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2151[7], i2150.sizeBySpeed)
  i2150.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2151[8], i2150.sizeOverLifetime)
  i2150.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2151[9], i2150.textureSheetAnimation)
  i2150.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2151[10], i2150.velocityOverLifetime)
  i2150.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2151[11], i2150.noise)
  i2150.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2151[12], i2150.inheritVelocity)
  i2150.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2151[13], i2150.forceOverLifetime)
  i2150.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2151[14], i2150.limitVelocityOverLifetime)
  i2150.useAutoRandomSeed = !!i2151[15]
  i2150.randomSeed = i2151[16]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2152 = root || new pc.ParticleSystemMain()
  var i2153 = data
  i2152.duration = i2153[0]
  i2152.loop = !!i2153[1]
  i2152.prewarm = !!i2153[2]
  i2152.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[3], i2152.startDelay)
  i2152.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[4], i2152.startLifetime)
  i2152.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[5], i2152.startSpeed)
  i2152.startSize3D = !!i2153[6]
  i2152.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[7], i2152.startSizeX)
  i2152.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[8], i2152.startSizeY)
  i2152.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[9], i2152.startSizeZ)
  i2152.startRotation3D = !!i2153[10]
  i2152.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[11], i2152.startRotationX)
  i2152.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[12], i2152.startRotationY)
  i2152.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[13], i2152.startRotationZ)
  i2152.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2153[14], i2152.startColor)
  i2152.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[15], i2152.gravityModifier)
  i2152.simulationSpace = i2153[16]
  request.r(i2153[17], i2153[18], 0, i2152, 'customSimulationSpace')
  i2152.simulationSpeed = i2153[19]
  i2152.useUnscaledTime = !!i2153[20]
  i2152.scalingMode = i2153[21]
  i2152.playOnAwake = !!i2153[22]
  i2152.maxParticles = i2153[23]
  i2152.emitterVelocityMode = i2153[24]
  i2152.stopAction = i2153[25]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2154 = root || new pc.MinMaxCurve()
  var i2155 = data
  i2154.mode = i2155[0]
  i2154.curveMin = new pc.AnimationCurve( { keys_flow: i2155[1] } )
  i2154.curveMax = new pc.AnimationCurve( { keys_flow: i2155[2] } )
  i2154.curveMultiplier = i2155[3]
  i2154.constantMin = i2155[4]
  i2154.constantMax = i2155[5]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2156 = root || new pc.MinMaxGradient()
  var i2157 = data
  i2156.mode = i2157[0]
  i2156.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2157[1], i2156.gradientMin)
  i2156.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2157[2], i2156.gradientMax)
  i2156.colorMin = new pc.Color(i2157[3], i2157[4], i2157[5], i2157[6])
  i2156.colorMax = new pc.Color(i2157[7], i2157[8], i2157[9], i2157[10])
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2159 = data
  i2158.mode = i2159[0]
  var i2161 = i2159[1]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2161[i + 0]) );
  }
  i2158.colorKeys = i2160
  var i2163 = i2159[2]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2163[i + 0]) );
  }
  i2158.alphaKeys = i2162
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2164 = root || new pc.ParticleSystemColorBySpeed()
  var i2165 = data
  i2164.enabled = !!i2165[0]
  i2164.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2165[1], i2164.color)
  i2164.range = new pc.Vec2( i2165[2], i2165[3] )
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2169 = data
  i2168.color = new pc.Color(i2169[0], i2169[1], i2169[2], i2169[3])
  i2168.time = i2169[4]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2173 = data
  i2172.alpha = i2173[0]
  i2172.time = i2173[1]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2174 = root || new pc.ParticleSystemColorOverLifetime()
  var i2175 = data
  i2174.enabled = !!i2175[0]
  i2174.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2175[1], i2174.color)
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2176 = root || new pc.ParticleSystemEmitter()
  var i2177 = data
  i2176.enabled = !!i2177[0]
  i2176.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[1], i2176.rateOverTime)
  i2176.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[2], i2176.rateOverDistance)
  var i2179 = i2177[3]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2179[i + 0]) );
  }
  i2176.bursts = i2178
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2182 = root || new pc.ParticleSystemBurst()
  var i2183 = data
  i2182.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[0], i2182.count)
  i2182.cycleCount = i2183[1]
  i2182.minCount = i2183[2]
  i2182.maxCount = i2183[3]
  i2182.repeatInterval = i2183[4]
  i2182.time = i2183[5]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2184 = root || new pc.ParticleSystemRotationBySpeed()
  var i2185 = data
  i2184.enabled = !!i2185[0]
  i2184.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[1], i2184.x)
  i2184.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[2], i2184.y)
  i2184.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[3], i2184.z)
  i2184.separateAxes = !!i2185[4]
  i2184.range = new pc.Vec2( i2185[5], i2185[6] )
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2186 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2187 = data
  i2186.enabled = !!i2187[0]
  i2186.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[1], i2186.x)
  i2186.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[2], i2186.y)
  i2186.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[3], i2186.z)
  i2186.separateAxes = !!i2187[4]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemShape()
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.shapeType = i2189[1]
  i2188.randomDirectionAmount = i2189[2]
  i2188.sphericalDirectionAmount = i2189[3]
  i2188.randomPositionAmount = i2189[4]
  i2188.alignToDirection = !!i2189[5]
  i2188.radius = i2189[6]
  i2188.radiusMode = i2189[7]
  i2188.radiusSpread = i2189[8]
  i2188.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[9], i2188.radiusSpeed)
  i2188.radiusThickness = i2189[10]
  i2188.angle = i2189[11]
  i2188.length = i2189[12]
  i2188.boxThickness = new pc.Vec3( i2189[13], i2189[14], i2189[15] )
  i2188.meshShapeType = i2189[16]
  request.r(i2189[17], i2189[18], 0, i2188, 'mesh')
  request.r(i2189[19], i2189[20], 0, i2188, 'meshRenderer')
  request.r(i2189[21], i2189[22], 0, i2188, 'skinnedMeshRenderer')
  i2188.useMeshMaterialIndex = !!i2189[23]
  i2188.meshMaterialIndex = i2189[24]
  i2188.useMeshColors = !!i2189[25]
  i2188.normalOffset = i2189[26]
  i2188.arc = i2189[27]
  i2188.arcMode = i2189[28]
  i2188.arcSpread = i2189[29]
  i2188.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[30], i2188.arcSpeed)
  i2188.donutRadius = i2189[31]
  i2188.position = new pc.Vec3( i2189[32], i2189[33], i2189[34] )
  i2188.rotation = new pc.Vec3( i2189[35], i2189[36], i2189[37] )
  i2188.scale = new pc.Vec3( i2189[38], i2189[39], i2189[40] )
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2190 = root || new pc.ParticleSystemSizeBySpeed()
  var i2191 = data
  i2190.enabled = !!i2191[0]
  i2190.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[1], i2190.x)
  i2190.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[2], i2190.y)
  i2190.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[3], i2190.z)
  i2190.separateAxes = !!i2191[4]
  i2190.range = new pc.Vec2( i2191[5], i2191[6] )
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2192 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2193 = data
  i2192.enabled = !!i2193[0]
  i2192.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[1], i2192.x)
  i2192.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[2], i2192.y)
  i2192.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[3], i2192.z)
  i2192.separateAxes = !!i2193[4]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.mode = i2195[1]
  i2194.animation = i2195[2]
  i2194.numTilesX = i2195[3]
  i2194.numTilesY = i2195[4]
  i2194.useRandomRow = !!i2195[5]
  i2194.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[6], i2194.frameOverTime)
  i2194.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[7], i2194.startFrame)
  i2194.cycleCount = i2195[8]
  i2194.rowIndex = i2195[9]
  i2194.flipU = i2195[10]
  i2194.flipV = i2195[11]
  i2194.spriteCount = i2195[12]
  var i2197 = i2195[13]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 2, i2196, '')
  }
  i2194.sprites = i2196
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[1], i2200.x)
  i2200.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[2], i2200.y)
  i2200.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[3], i2200.z)
  i2200.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[4], i2200.radial)
  i2200.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[5], i2200.speedModifier)
  i2200.space = i2201[6]
  i2200.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[7], i2200.orbitalX)
  i2200.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[8], i2200.orbitalY)
  i2200.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[9], i2200.orbitalZ)
  i2200.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[10], i2200.orbitalOffsetX)
  i2200.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[11], i2200.orbitalOffsetY)
  i2200.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[12], i2200.orbitalOffsetZ)
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemNoise()
  var i2203 = data
  i2202.enabled = !!i2203[0]
  i2202.separateAxes = !!i2203[1]
  i2202.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[2], i2202.strengthX)
  i2202.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[3], i2202.strengthY)
  i2202.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[4], i2202.strengthZ)
  i2202.frequency = i2203[5]
  i2202.damping = !!i2203[6]
  i2202.octaveCount = i2203[7]
  i2202.octaveMultiplier = i2203[8]
  i2202.octaveScale = i2203[9]
  i2202.quality = i2203[10]
  i2202.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[11], i2202.scrollSpeed)
  i2202.scrollSpeedMultiplier = i2203[12]
  i2202.remapEnabled = !!i2203[13]
  i2202.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[14], i2202.remapX)
  i2202.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[15], i2202.remapY)
  i2202.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[16], i2202.remapZ)
  i2202.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[17], i2202.positionAmount)
  i2202.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[18], i2202.rotationAmount)
  i2202.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[19], i2202.sizeAmount)
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2204 = root || new pc.ParticleSystemInheritVelocity()
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.mode = i2205[1]
  i2204.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[2], i2204.curve)
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemForceOverLifetime()
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[1], i2206.x)
  i2206.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[2], i2206.y)
  i2206.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[3], i2206.z)
  i2206.space = i2207[4]
  i2206.randomized = !!i2207[5]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[1], i2208.limit)
  i2208.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[2], i2208.limitX)
  i2208.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[3], i2208.limitY)
  i2208.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[4], i2208.limitZ)
  i2208.dampen = i2209[5]
  i2208.separateAxes = !!i2209[6]
  i2208.space = i2209[7]
  i2208.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[8], i2208.drag)
  i2208.multiplyDragByParticleSize = !!i2209[9]
  i2208.multiplyDragByParticleVelocity = !!i2209[10]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'mesh')
  i2210.meshCount = i2211[2]
  i2210.activeVertexStreamsCount = i2211[3]
  i2210.alignment = i2211[4]
  i2210.renderMode = i2211[5]
  i2210.sortMode = i2211[6]
  i2210.lengthScale = i2211[7]
  i2210.velocityScale = i2211[8]
  i2210.cameraVelocityScale = i2211[9]
  i2210.normalDirection = i2211[10]
  i2210.sortingFudge = i2211[11]
  i2210.minParticleSize = i2211[12]
  i2210.maxParticleSize = i2211[13]
  i2210.pivot = new pc.Vec3( i2211[14], i2211[15], i2211[16] )
  request.r(i2211[17], i2211[18], 0, i2210, 'trailMaterial')
  i2210.applyActiveColorSpace = !!i2211[19]
  i2210.enabled = !!i2211[20]
  request.r(i2211[21], i2211[22], 0, i2210, 'sharedMaterial')
  var i2213 = i2211[23]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 2) {
  request.r(i2213[i + 0], i2213[i + 1], 2, i2212, '')
  }
  i2210.sharedMaterials = i2212
  i2210.receiveShadows = !!i2211[24]
  i2210.shadowCastingMode = i2211[25]
  i2210.sortingLayerID = i2211[26]
  i2210.sortingOrder = i2211[27]
  i2210.lightmapIndex = i2211[28]
  i2210.lightmapSceneIndex = i2211[29]
  i2210.lightmapScaleOffset = new pc.Vec4( i2211[30], i2211[31], i2211[32], i2211[33] )
  i2210.lightProbeUsage = i2211[34]
  i2210.reflectionProbeUsage = i2211[35]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2215 = data
  i2214.name = i2215[0]
  i2214.atlasId = i2215[1]
  i2214.mipmapCount = i2215[2]
  i2214.hdr = !!i2215[3]
  i2214.size = i2215[4]
  i2214.anisoLevel = i2215[5]
  i2214.filterMode = i2215[6]
  var i2217 = i2215[7]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 4) {
    i2216.push( UnityEngine.Rect.MinMaxRect(i2217[i + 0], i2217[i + 1], i2217[i + 2], i2217[i + 3]) );
  }
  i2214.rects = i2216
  i2214.wrapU = i2215[8]
  i2214.wrapV = i2215[9]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2221 = data
  i2220.name = i2221[0]
  i2220.index = i2221[1]
  i2220.startup = !!i2221[2]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2223 = data
  i2222.aspect = i2223[0]
  i2222.orthographic = !!i2223[1]
  i2222.orthographicSize = i2223[2]
  i2222.backgroundColor = new pc.Color(i2223[3], i2223[4], i2223[5], i2223[6])
  i2222.nearClipPlane = i2223[7]
  i2222.farClipPlane = i2223[8]
  i2222.fieldOfView = i2223[9]
  i2222.depth = i2223[10]
  i2222.clearFlags = i2223[11]
  i2222.cullingMask = i2223[12]
  i2222.rect = i2223[13]
  request.r(i2223[14], i2223[15], 0, i2222, 'targetTexture')
  i2222.usePhysicalProperties = !!i2223[16]
  i2222.focalLength = i2223[17]
  i2222.sensorSize = new pc.Vec2( i2223[18], i2223[19] )
  i2222.lensShift = new pc.Vec2( i2223[20], i2223[21] )
  i2222.gateFit = i2223[22]
  i2222.commandBufferCount = i2223[23]
  i2222.cameraType = i2223[24]
  i2222.enabled = !!i2223[25]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2225 = data
  i2224.type = i2225[0]
  i2224.color = new pc.Color(i2225[1], i2225[2], i2225[3], i2225[4])
  i2224.cullingMask = i2225[5]
  i2224.intensity = i2225[6]
  i2224.range = i2225[7]
  i2224.spotAngle = i2225[8]
  i2224.shadows = i2225[9]
  i2224.shadowNormalBias = i2225[10]
  i2224.shadowBias = i2225[11]
  i2224.shadowStrength = i2225[12]
  i2224.shadowResolution = i2225[13]
  i2224.lightmapBakeType = i2225[14]
  i2224.renderMode = i2225[15]
  request.r(i2225[16], i2225[17], 0, i2224, 'cookie')
  i2224.cookieSize = i2225[18]
  i2224.shadowNearPlane = i2225[19]
  i2224.occlusionMaskChannel = i2225[20]
  i2224.isBaked = !!i2225[21]
  i2224.mixedLightingMode = i2225[22]
  i2224.enabled = !!i2225[23]
  return i2224
}

Deserializers["BoardController"] = function (request, data, root) {
  var i2226 = root || request.c( 'BoardController' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, '_grid')
  var i2229 = i2227[2]
  var i2228 = new (System.Collections.Generic.List$1(Bridge.ns('HexCell')))
  for(var i = 0; i < i2229.length; i += 2) {
  request.r(i2229[i + 0], i2229[i + 1], 1, i2228, '')
  }
  i2226._cells = i2228
  request.r(i2227[3], i2227[4], 0, i2226, '_stackPrefab')
  request.r(i2227[5], i2227[6], 0, i2226, '_diskPrefab')
  var i2231 = i2227[7]
  var i2230 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 1, i2230, '')
  }
  i2226._colorMaterials = i2230
  i2226._snapRadius = i2227[8]
  return i2226
}

Deserializers["HexCell"] = function (request, data, root) {
  var i2234 = root || request.c( 'HexCell' )
  var i2235 = data
  var i2237 = i2235[0]
  var i2236 = new (System.Collections.Generic.List$1(Bridge.ns('HexColorId')))
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.add(i2237[i + 0]);
  }
  i2234._initialStackColors = i2236
  request.r(i2235[1], i2235[2], 0, i2234, '_currentStack')
  request.r(i2235[3], i2235[4], 0, i2234, '_ringRenderer')
  return i2234
}

Deserializers["GameController"] = function (request, data, root) {
  var i2238 = root || request.c( 'GameController' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, '_gameCamera')
  request.r(i2239[2], i2239[3], 0, i2238, '_board')
  request.r(i2239[4], i2239[5], 0, i2238, '_dragController')
  request.r(i2239[6], i2239[7], 0, i2238, '_reactionResolver')
  request.r(i2239[8], i2239[9], 0, i2238, '_tutorial')
  request.r(i2239[10], i2239[11], 0, i2238, '_packshot')
  return i2238
}

Deserializers["DragController"] = function (request, data, root) {
  var i2240 = root || request.c( 'DragController' )
  var i2241 = data
  i2240._draggableMask = UnityEngine.LayerMask.FromIntegerValue( i2241[0] )
  i2240._liftHeight = i2241[1]
  i2240._followLerp = i2241[2]
  return i2240
}

Deserializers["ReactionResolver"] = function (request, data, root) {
  var i2242 = root || request.c( 'ReactionResolver' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, '_vanishFxPrefab')
  i2242._baseFlyDuration = i2243[2]
  i2242._baseVanishDuration = i2243[3]
  i2242._speedIncrease = i2243[4]
  i2242._maxReactionSpeedMultiplier = i2243[5]
  i2242._diskLaunchInterval = i2243[6]
  i2242._edgePivotOffset = i2243[7]
  i2242._rollDegrees = i2243[8]
  i2242._vanishStackSize = i2243[9]
  return i2242
}

Deserializers["TutorialController"] = function (request, data, root) {
  var i2244 = root || request.c( 'TutorialController' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, '_hand')
  request.r(i2245[2], i2245[3], 0, i2244, '_canvas')
  request.r(i2245[4], i2245[5], 0, i2244, '_gameCamera')
  request.r(i2245[6], i2245[7], 0, i2244, '_sourceStack')
  i2244._replayDelay = i2245[8]
  i2244._pressOffset = new pc.Vec2( i2245[9], i2245[10] )
  i2244._releaseOffset = new pc.Vec2( i2245[11], i2245[12] )
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2247 = data
  i2246.pivot = new pc.Vec2( i2247[0], i2247[1] )
  i2246.anchorMin = new pc.Vec2( i2247[2], i2247[3] )
  i2246.anchorMax = new pc.Vec2( i2247[4], i2247[5] )
  i2246.sizeDelta = new pc.Vec2( i2247[6], i2247[7] )
  i2246.anchoredPosition3D = new pc.Vec3( i2247[8], i2247[9], i2247[10] )
  i2246.rotation = new pc.Quat(i2247[11], i2247[12], i2247[13], i2247[14])
  i2246.scale = new pc.Vec3( i2247[15], i2247[16], i2247[17] )
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2249 = data
  i2248.planeDistance = i2249[0]
  i2248.referencePixelsPerUnit = i2249[1]
  i2248.isFallbackOverlay = !!i2249[2]
  i2248.renderMode = i2249[3]
  i2248.renderOrder = i2249[4]
  i2248.sortingLayerName = i2249[5]
  i2248.sortingOrder = i2249[6]
  i2248.scaleFactor = i2249[7]
  request.r(i2249[8], i2249[9], 0, i2248, 'worldCamera')
  i2248.overrideSorting = !!i2249[10]
  i2248.pixelPerfect = !!i2249[11]
  i2248.targetDisplay = i2249[12]
  i2248.overridePixelPerfect = !!i2249[13]
  i2248.enabled = !!i2249[14]
  return i2248
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2251 = data
  i2250.m_UiScaleMode = i2251[0]
  i2250.m_ReferencePixelsPerUnit = i2251[1]
  i2250.m_ScaleFactor = i2251[2]
  i2250.m_ReferenceResolution = new pc.Vec2( i2251[3], i2251[4] )
  i2250.m_ScreenMatchMode = i2251[5]
  i2250.m_MatchWidthOrHeight = i2251[6]
  i2250.m_PhysicalUnit = i2251[7]
  i2250.m_FallbackScreenDPI = i2251[8]
  i2250.m_DefaultSpriteDPI = i2251[9]
  i2250.m_DynamicPixelsPerUnit = i2251[10]
  i2250.m_PresetInfoIsWorld = !!i2251[11]
  return i2250
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2253 = data
  i2252.m_IgnoreReversedGraphics = !!i2253[0]
  i2252.m_BlockingObjects = i2253[1]
  i2252.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2253[2] )
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2255 = data
  i2254.cullTransparentMesh = !!i2255[0]
  return i2254
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.UI.Image' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'm_Sprite')
  i2256.m_Type = i2257[2]
  i2256.m_PreserveAspect = !!i2257[3]
  i2256.m_FillCenter = !!i2257[4]
  i2256.m_FillMethod = i2257[5]
  i2256.m_FillAmount = i2257[6]
  i2256.m_FillClockwise = !!i2257[7]
  i2256.m_FillOrigin = i2257[8]
  i2256.m_UseSpriteMesh = !!i2257[9]
  i2256.m_PixelsPerUnitMultiplier = i2257[10]
  request.r(i2257[11], i2257[12], 0, i2256, 'm_Material')
  i2256.m_Maskable = !!i2257[13]
  i2256.m_Color = new pc.Color(i2257[14], i2257[15], i2257[16], i2257[17])
  i2256.m_RaycastTarget = !!i2257[18]
  i2256.m_RaycastPadding = new pc.Vec4( i2257[19], i2257[20], i2257[21], i2257[22] )
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2259 = data
  i2258.m_Alpha = i2259[0]
  i2258.m_Interactable = !!i2259[1]
  i2258.m_BlocksRaycasts = !!i2259[2]
  i2258.m_IgnoreParentGroups = !!i2259[3]
  i2258.enabled = !!i2259[4]
  return i2258
}

Deserializers["PackshotController"] = function (request, data, root) {
  var i2260 = root || request.c( 'PackshotController' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, '_group')
  request.r(i2261[2], i2261[3], 0, i2260, '_playNowButton')
  request.r(i2261[4], i2261[5], 0, i2260, '_playButtonView')
  i2260._fadeDuration = i2261[6]
  return i2260
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.UI.Text' )
  var i2263 = data
  i2262.m_FontData = request.d('UnityEngine.UI.FontData', i2263[0], i2262.m_FontData)
  i2262.m_Text = i2263[1]
  request.r(i2263[2], i2263[3], 0, i2262, 'm_Material')
  i2262.m_Maskable = !!i2263[4]
  i2262.m_Color = new pc.Color(i2263[5], i2263[6], i2263[7], i2263[8])
  i2262.m_RaycastTarget = !!i2263[9]
  i2262.m_RaycastPadding = new pc.Vec4( i2263[10], i2263[11], i2263[12], i2263[13] )
  return i2262
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2265 = data
  request.r(i2265[0], i2265[1], 0, i2264, 'm_Font')
  i2264.m_FontSize = i2265[2]
  i2264.m_FontStyle = i2265[3]
  i2264.m_BestFit = !!i2265[4]
  i2264.m_MinSize = i2265[5]
  i2264.m_MaxSize = i2265[6]
  i2264.m_Alignment = i2265[7]
  i2264.m_AlignByGeometry = !!i2265[8]
  i2264.m_RichText = !!i2265[9]
  i2264.m_HorizontalOverflow = i2265[10]
  i2264.m_VerticalOverflow = i2265[11]
  i2264.m_LineSpacing = i2265[12]
  return i2264
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.UI.Button' )
  var i2267 = data
  i2266.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2267[0], i2266.m_OnClick)
  i2266.m_Navigation = request.d('UnityEngine.UI.Navigation', i2267[1], i2266.m_Navigation)
  i2266.m_Transition = i2267[2]
  i2266.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2267[3], i2266.m_Colors)
  i2266.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2267[4], i2266.m_SpriteState)
  i2266.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2267[5], i2266.m_AnimationTriggers)
  i2266.m_Interactable = !!i2267[6]
  request.r(i2267[7], i2267[8], 0, i2266, 'm_TargetGraphic')
  return i2266
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2269 = data
  i2268.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2269[0], i2268.m_PersistentCalls)
  return i2268
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2271 = data
  var i2273 = i2271[0]
  var i2272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.add(request.d('UnityEngine.Events.PersistentCall', i2273[i + 0]));
  }
  i2270.m_Calls = i2272
  return i2270
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'm_Target')
  i2276.m_TargetAssemblyTypeName = i2277[2]
  i2276.m_MethodName = i2277[3]
  i2276.m_Mode = i2277[4]
  i2276.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2277[5], i2276.m_Arguments)
  i2276.m_CallState = i2277[6]
  return i2276
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2279 = data
  i2278.m_Mode = i2279[0]
  i2278.m_WrapAround = !!i2279[1]
  request.r(i2279[2], i2279[3], 0, i2278, 'm_SelectOnUp')
  request.r(i2279[4], i2279[5], 0, i2278, 'm_SelectOnDown')
  request.r(i2279[6], i2279[7], 0, i2278, 'm_SelectOnLeft')
  request.r(i2279[8], i2279[9], 0, i2278, 'm_SelectOnRight')
  return i2278
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2281 = data
  i2280.m_NormalColor = new pc.Color(i2281[0], i2281[1], i2281[2], i2281[3])
  i2280.m_HighlightedColor = new pc.Color(i2281[4], i2281[5], i2281[6], i2281[7])
  i2280.m_PressedColor = new pc.Color(i2281[8], i2281[9], i2281[10], i2281[11])
  i2280.m_SelectedColor = new pc.Color(i2281[12], i2281[13], i2281[14], i2281[15])
  i2280.m_DisabledColor = new pc.Color(i2281[16], i2281[17], i2281[18], i2281[19])
  i2280.m_ColorMultiplier = i2281[20]
  i2280.m_FadeDuration = i2281[21]
  return i2280
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'm_HighlightedSprite')
  request.r(i2283[2], i2283[3], 0, i2282, 'm_PressedSprite')
  request.r(i2283[4], i2283[5], 0, i2282, 'm_SelectedSprite')
  request.r(i2283[6], i2283[7], 0, i2282, 'm_DisabledSprite')
  return i2282
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2285 = data
  i2284.m_NormalTrigger = i2285[0]
  i2284.m_HighlightedTrigger = i2285[1]
  i2284.m_PressedTrigger = i2285[2]
  i2284.m_SelectedTrigger = i2285[3]
  i2284.m_DisabledTrigger = i2285[4]
  return i2284
}

Deserializers["PlayButtonView"] = function (request, data, root) {
  var i2286 = root || request.c( 'PlayButtonView' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, '_target')
  i2286._pulseScale = i2287[2]
  i2286._pulseDuration = i2287[3]
  return i2286
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'm_FirstSelected')
  i2288.m_sendNavigationEvents = !!i2289[2]
  i2288.m_DragThreshold = i2289[3]
  return i2288
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2291 = data
  i2290.m_HorizontalAxis = i2291[0]
  i2290.m_VerticalAxis = i2291[1]
  i2290.m_SubmitButton = i2291[2]
  i2290.m_CancelButton = i2291[3]
  i2290.m_InputActionsPerSecond = i2291[4]
  i2290.m_RepeatDelay = i2291[5]
  i2290.m_ForceModuleActive = !!i2291[6]
  i2290.m_SendPointerHoverToParent = !!i2291[7]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2293 = data
  i2292.ambientIntensity = i2293[0]
  i2292.reflectionIntensity = i2293[1]
  i2292.ambientMode = i2293[2]
  i2292.ambientLight = new pc.Color(i2293[3], i2293[4], i2293[5], i2293[6])
  i2292.ambientSkyColor = new pc.Color(i2293[7], i2293[8], i2293[9], i2293[10])
  i2292.ambientGroundColor = new pc.Color(i2293[11], i2293[12], i2293[13], i2293[14])
  i2292.ambientEquatorColor = new pc.Color(i2293[15], i2293[16], i2293[17], i2293[18])
  i2292.fogColor = new pc.Color(i2293[19], i2293[20], i2293[21], i2293[22])
  i2292.fogEndDistance = i2293[23]
  i2292.fogStartDistance = i2293[24]
  i2292.fogDensity = i2293[25]
  i2292.fog = !!i2293[26]
  request.r(i2293[27], i2293[28], 0, i2292, 'skybox')
  i2292.fogMode = i2293[29]
  var i2295 = i2293[30]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2295[i + 0]) );
  }
  i2292.lightmaps = i2294
  i2292.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2293[31], i2292.lightProbes)
  i2292.lightmapsMode = i2293[32]
  i2292.mixedBakeMode = i2293[33]
  i2292.environmentLightingMode = i2293[34]
  i2292.ambientProbe = new pc.SphericalHarmonicsL2(i2293[35])
  request.r(i2293[36], i2293[37], 0, i2292, 'customReflection')
  request.r(i2293[38], i2293[39], 0, i2292, 'defaultReflection')
  i2292.defaultReflectionMode = i2293[40]
  i2292.defaultReflectionResolution = i2293[41]
  i2292.sunLightObjectId = i2293[42]
  i2292.pixelLightCount = i2293[43]
  i2292.defaultReflectionHDR = !!i2293[44]
  i2292.hasLightDataAsset = !!i2293[45]
  i2292.hasManualGenerate = !!i2293[46]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'lightmapColor')
  request.r(i2299[2], i2299[3], 0, i2298, 'lightmapDirection')
  request.r(i2299[4], i2299[5], 0, i2298, 'shadowMask')
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2300 = root || new UnityEngine.LightProbes()
  var i2301 = data
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2309 = data
  var i2311 = i2309[0]
  var i2310 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2311[i + 0]));
  }
  i2308.ShaderCompilationErrors = i2310
  i2308.name = i2309[1]
  i2308.guid = i2309[2]
  var i2313 = i2309[3]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( i2313[i + 0] );
  }
  i2308.shaderDefinedKeywords = i2312
  var i2315 = i2309[4]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2315[i + 0]) );
  }
  i2308.passes = i2314
  var i2317 = i2309[5]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2317[i + 0]) );
  }
  i2308.usePasses = i2316
  var i2319 = i2309[6]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2319[i + 0]) );
  }
  i2308.defaultParameterValues = i2318
  request.r(i2309[7], i2309[8], 0, i2308, 'unityFallbackShader')
  i2308.readDepth = !!i2309[9]
  i2308.hasDepthOnlyPass = !!i2309[10]
  i2308.isCreatedByShaderGraph = !!i2309[11]
  i2308.disableBatching = !!i2309[12]
  i2308.compiled = !!i2309[13]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2323 = data
  i2322.shaderName = i2323[0]
  i2322.errorMessage = i2323[1]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2328 = root || new pc.UnityShaderPass()
  var i2329 = data
  i2328.id = i2329[0]
  i2328.subShaderIndex = i2329[1]
  i2328.name = i2329[2]
  i2328.passType = i2329[3]
  i2328.grabPassTextureName = i2329[4]
  i2328.usePass = !!i2329[5]
  i2328.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2329[6], i2328.zTest)
  i2328.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2329[7], i2328.zWrite)
  i2328.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2329[8], i2328.culling)
  i2328.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2329[9], i2328.blending)
  i2328.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2329[10], i2328.alphaBlending)
  i2328.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2329[11], i2328.colorWriteMask)
  i2328.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2329[12], i2328.offsetUnits)
  i2328.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2329[13], i2328.offsetFactor)
  i2328.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2329[14], i2328.stencilRef)
  i2328.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2329[15], i2328.stencilReadMask)
  i2328.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2329[16], i2328.stencilWriteMask)
  i2328.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2329[17], i2328.stencilOp)
  i2328.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2329[18], i2328.stencilOpFront)
  i2328.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2329[19], i2328.stencilOpBack)
  var i2331 = i2329[20]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2331[i + 0]) );
  }
  i2328.tags = i2330
  var i2333 = i2329[21]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( i2333[i + 0] );
  }
  i2328.passDefinedKeywords = i2332
  var i2335 = i2329[22]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2335[i + 0]) );
  }
  i2328.passDefinedKeywordGroups = i2334
  var i2337 = i2329[23]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2337[i + 0]) );
  }
  i2328.variants = i2336
  var i2339 = i2329[24]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2339[i + 0]) );
  }
  i2328.excludedVariants = i2338
  i2328.hasDepthReader = !!i2329[25]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2341 = data
  i2340.val = i2341[0]
  i2340.name = i2341[1]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2343 = data
  i2342.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2343[0], i2342.src)
  i2342.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2343[1], i2342.dst)
  i2342.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2343[2], i2342.op)
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2345 = data
  i2344.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2345[0], i2344.pass)
  i2344.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2345[1], i2344.fail)
  i2344.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2345[2], i2344.zFail)
  i2344.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2345[3], i2344.comp)
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2349 = data
  i2348.name = i2349[0]
  i2348.value = i2349[1]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2353 = data
  var i2355 = i2353[0]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( i2355[i + 0] );
  }
  i2352.keywords = i2354
  i2352.hasDiscard = !!i2353[1]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2359 = data
  i2358.passId = i2359[0]
  i2358.subShaderIndex = i2359[1]
  var i2361 = i2359[2]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( i2361[i + 0] );
  }
  i2358.keywords = i2360
  i2358.vertexProgram = i2359[3]
  i2358.fragmentProgram = i2359[4]
  i2358.exportedForWebGl2 = !!i2359[5]
  i2358.readDepth = !!i2359[6]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'shader')
  i2364.pass = i2365[2]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2369 = data
  i2368.name = i2369[0]
  i2368.type = i2369[1]
  i2368.value = new pc.Vec4( i2369[2], i2369[3], i2369[4], i2369[5] )
  i2368.textureValue = i2369[6]
  i2368.shaderPropertyFlag = i2369[7]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2371 = data
  i2370.name = i2371[0]
  request.r(i2371[1], i2371[2], 0, i2370, 'texture')
  i2370.aabb = i2371[3]
  i2370.vertices = i2371[4]
  i2370.triangles = i2371[5]
  i2370.textureRect = UnityEngine.Rect.MinMaxRect(i2371[6], i2371[7], i2371[8], i2371[9])
  i2370.packedRect = UnityEngine.Rect.MinMaxRect(i2371[10], i2371[11], i2371[12], i2371[13])
  i2370.border = new pc.Vec4( i2371[14], i2371[15], i2371[16], i2371[17] )
  i2370.transparency = i2371[18]
  i2370.bounds = i2371[19]
  i2370.pixelsPerUnit = i2371[20]
  i2370.textureWidth = i2371[21]
  i2370.textureHeight = i2371[22]
  i2370.nativeSize = new pc.Vec2( i2371[23], i2371[24] )
  i2370.pivot = new pc.Vec2( i2371[25], i2371[26] )
  i2370.textureRectOffset = new pc.Vec2( i2371[27], i2371[28] )
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2373 = data
  i2372.name = i2373[0]
  i2372.ascent = i2373[1]
  i2372.originalLineHeight = i2373[2]
  i2372.fontSize = i2373[3]
  var i2375 = i2373[4]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2375[i + 0]) );
  }
  i2372.characterInfo = i2374
  request.r(i2373[5], i2373[6], 0, i2372, 'texture')
  i2372.originalFontSize = i2373[7]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2379 = data
  i2378.index = i2379[0]
  i2378.advance = i2379[1]
  i2378.bearing = i2379[2]
  i2378.glyphWidth = i2379[3]
  i2378.glyphHeight = i2379[4]
  i2378.minX = i2379[5]
  i2378.maxX = i2379[6]
  i2378.minY = i2379[7]
  i2378.maxY = i2379[8]
  i2378.uvBottomLeftX = i2379[9]
  i2378.uvBottomLeftY = i2379[10]
  i2378.uvBottomRightX = i2379[11]
  i2378.uvBottomRightY = i2379[12]
  i2378.uvTopLeftX = i2379[13]
  i2378.uvTopLeftY = i2379[14]
  i2378.uvTopRightX = i2379[15]
  i2378.uvTopRightY = i2379[16]
  return i2378
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2380 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2381 = data
  i2380.useSafeMode = !!i2381[0]
  i2380.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2381[1], i2380.safeModeOptions)
  i2380.timeScale = i2381[2]
  i2380.unscaledTimeScale = i2381[3]
  i2380.useSmoothDeltaTime = !!i2381[4]
  i2380.maxSmoothUnscaledTime = i2381[5]
  i2380.rewindCallbackMode = i2381[6]
  i2380.showUnityEditorReport = !!i2381[7]
  i2380.logBehaviour = i2381[8]
  i2380.drawGizmos = !!i2381[9]
  i2380.defaultRecyclable = !!i2381[10]
  i2380.defaultAutoPlay = i2381[11]
  i2380.defaultUpdateType = i2381[12]
  i2380.defaultTimeScaleIndependent = !!i2381[13]
  i2380.defaultEaseType = i2381[14]
  i2380.defaultEaseOvershootOrAmplitude = i2381[15]
  i2380.defaultEasePeriod = i2381[16]
  i2380.defaultAutoKill = !!i2381[17]
  i2380.defaultLoopType = i2381[18]
  i2380.debugMode = !!i2381[19]
  i2380.debugStoreTargetId = !!i2381[20]
  i2380.showPreviewPanel = !!i2381[21]
  i2380.storeSettingsLocation = i2381[22]
  i2380.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2381[23], i2380.modules)
  i2380.createASMDEF = !!i2381[24]
  i2380.showPlayingTweens = !!i2381[25]
  i2380.showPausedTweens = !!i2381[26]
  return i2380
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2382 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2383 = data
  i2382.logBehaviour = i2383[0]
  i2382.nestedTweenFailureBehaviour = i2383[1]
  return i2382
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2384 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2385 = data
  i2384.showPanel = !!i2385[0]
  i2384.audioEnabled = !!i2385[1]
  i2384.physicsEnabled = !!i2385[2]
  i2384.physics2DEnabled = !!i2385[3]
  i2384.spriteEnabled = !!i2385[4]
  i2384.uiEnabled = !!i2385[5]
  i2384.textMeshProEnabled = !!i2385[6]
  i2384.tk2DEnabled = !!i2385[7]
  i2384.deAudioEnabled = !!i2385[8]
  i2384.deUnityExtendedEnabled = !!i2385[9]
  i2384.epoOutlineEnabled = !!i2385[10]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2387 = data
  var i2389 = i2387[0]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2389[i + 0]) );
  }
  i2386.files = i2388
  i2386.componentToPrefabIds = i2387[1]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2393 = data
  i2392.path = i2393[0]
  request.r(i2393[1], i2393[2], 0, i2392, 'unityObject')
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2395 = data
  var i2397 = i2395[0]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2397[i + 0]) );
  }
  i2394.scriptsExecutionOrder = i2396
  var i2399 = i2395[1]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2399[i + 0]) );
  }
  i2394.sortingLayers = i2398
  var i2401 = i2395[2]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2401[i + 0]) );
  }
  i2394.cullingLayers = i2400
  i2394.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2395[3], i2394.timeSettings)
  i2394.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2395[4], i2394.physicsSettings)
  i2394.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2395[5], i2394.physics2DSettings)
  i2394.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2395[6], i2394.qualitySettings)
  i2394.enableRealtimeShadows = !!i2395[7]
  i2394.enableAutoInstancing = !!i2395[8]
  i2394.enableStaticBatching = !!i2395[9]
  i2394.enableDynamicBatching = !!i2395[10]
  i2394.usePreservativeDynamicBatching = !!i2395[11]
  i2394.lightmapEncodingQuality = i2395[12]
  i2394.desiredColorSpace = i2395[13]
  var i2403 = i2395[14]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( i2403[i + 0] );
  }
  i2394.allTags = i2402
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2407 = data
  i2406.name = i2407[0]
  i2406.value = i2407[1]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2411 = data
  i2410.id = i2411[0]
  i2410.name = i2411[1]
  i2410.value = i2411[2]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2415 = data
  i2414.id = i2415[0]
  i2414.name = i2415[1]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2417 = data
  i2416.fixedDeltaTime = i2417[0]
  i2416.maximumDeltaTime = i2417[1]
  i2416.timeScale = i2417[2]
  i2416.maximumParticleTimestep = i2417[3]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2419 = data
  i2418.gravity = new pc.Vec3( i2419[0], i2419[1], i2419[2] )
  i2418.defaultSolverIterations = i2419[3]
  i2418.bounceThreshold = i2419[4]
  i2418.autoSyncTransforms = !!i2419[5]
  i2418.autoSimulation = !!i2419[6]
  var i2421 = i2419[7]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2421[i + 0]) );
  }
  i2418.collisionMatrix = i2420
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2425 = data
  i2424.enabled = !!i2425[0]
  i2424.layerId = i2425[1]
  i2424.otherLayerId = i2425[2]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'material')
  i2426.gravity = new pc.Vec2( i2427[2], i2427[3] )
  i2426.positionIterations = i2427[4]
  i2426.velocityIterations = i2427[5]
  i2426.velocityThreshold = i2427[6]
  i2426.maxLinearCorrection = i2427[7]
  i2426.maxAngularCorrection = i2427[8]
  i2426.maxTranslationSpeed = i2427[9]
  i2426.maxRotationSpeed = i2427[10]
  i2426.baumgarteScale = i2427[11]
  i2426.baumgarteTOIScale = i2427[12]
  i2426.timeToSleep = i2427[13]
  i2426.linearSleepTolerance = i2427[14]
  i2426.angularSleepTolerance = i2427[15]
  i2426.defaultContactOffset = i2427[16]
  i2426.autoSimulation = !!i2427[17]
  i2426.queriesHitTriggers = !!i2427[18]
  i2426.queriesStartInColliders = !!i2427[19]
  i2426.callbacksOnDisable = !!i2427[20]
  i2426.reuseCollisionCallbacks = !!i2427[21]
  i2426.autoSyncTransforms = !!i2427[22]
  var i2429 = i2427[23]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2429[i + 0]) );
  }
  i2426.collisionMatrix = i2428
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2433 = data
  i2432.enabled = !!i2433[0]
  i2432.layerId = i2433[1]
  i2432.otherLayerId = i2433[2]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2435 = data
  var i2437 = i2435[0]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2437[i + 0]) );
  }
  i2434.qualityLevels = i2436
  var i2439 = i2435[1]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( i2439[i + 0] );
  }
  i2434.names = i2438
  i2434.shadows = i2435[2]
  i2434.anisotropicFiltering = i2435[3]
  i2434.antiAliasing = i2435[4]
  i2434.lodBias = i2435[5]
  i2434.shadowCascades = i2435[6]
  i2434.shadowDistance = i2435[7]
  i2434.shadowmaskMode = i2435[8]
  i2434.shadowProjection = i2435[9]
  i2434.shadowResolution = i2435[10]
  i2434.softParticles = !!i2435[11]
  i2434.softVegetation = !!i2435[12]
  i2434.activeColorSpace = i2435[13]
  i2434.desiredColorSpace = i2435[14]
  i2434.masterTextureLimit = i2435[15]
  i2434.maxQueuedFrames = i2435[16]
  i2434.particleRaycastBudget = i2435[17]
  i2434.pixelLightCount = i2435[18]
  i2434.realtimeReflectionProbes = !!i2435[19]
  i2434.shadowCascade2Split = i2435[20]
  i2434.shadowCascade4Split = new pc.Vec3( i2435[21], i2435[22], i2435[23] )
  i2434.streamingMipmapsActive = !!i2435[24]
  i2434.vSyncCount = i2435[25]
  i2434.asyncUploadBufferSize = i2435[26]
  i2434.asyncUploadTimeSlice = i2435[27]
  i2434.billboardsFaceCameraPosition = !!i2435[28]
  i2434.shadowNearPlaneOffset = i2435[29]
  i2434.streamingMipmapsMemoryBudget = i2435[30]
  i2434.maximumLODLevel = i2435[31]
  i2434.streamingMipmapsAddAllCameras = !!i2435[32]
  i2434.streamingMipmapsMaxLevelReduction = i2435[33]
  i2434.streamingMipmapsRenderersPerFrame = i2435[34]
  i2434.resolutionScalingFixedDPIFactor = i2435[35]
  i2434.streamingMipmapsMaxFileIORequests = i2435[36]
  i2434.currentQualityLevel = i2435[37]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2445 = data
  i2444.weight = i2445[0]
  i2444.vertices = i2445[1]
  i2444.normals = i2445[2]
  i2444.tangents = i2445[3]
  return i2444
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'm_ObjectArgument')
  i2446.m_ObjectArgumentAssemblyTypeName = i2447[2]
  i2446.m_IntArgument = i2447[3]
  i2446.m_FloatArgument = i2447[4]
  i2446.m_StringArgument = i2447[5]
  i2446.m_BoolArgument = !!i2447[6]
  return i2446
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

Deserializers.buildID = "0877f30e-370a-4164-8093-580baa850236";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

