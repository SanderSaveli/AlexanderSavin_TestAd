var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.JointSpring' )
  var i2179 = data
  i2178.spring = i2179[0]
  i2178.damper = i2179[1]
  i2178.targetPosition = i2179[2]
  return i2178
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.JointMotor' )
  var i2181 = data
  i2180.m_TargetVelocity = i2181[0]
  i2180.m_Force = i2181[1]
  i2180.m_FreeSpin = i2181[2]
  return i2180
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.JointLimits' )
  var i2183 = data
  i2182.m_Min = i2183[0]
  i2182.m_Max = i2183[1]
  i2182.m_Bounciness = i2183[2]
  i2182.m_BounceMinVelocity = i2183[3]
  i2182.m_ContactDistance = i2183[4]
  i2182.minBounce = i2183[5]
  i2182.maxBounce = i2183[6]
  return i2182
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.JointDrive' )
  var i2185 = data
  i2184.m_PositionSpring = i2185[0]
  i2184.m_PositionDamper = i2185[1]
  i2184.m_MaximumForce = i2185[2]
  i2184.m_UseAcceleration = i2185[3]
  return i2184
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2187 = data
  i2186.m_Spring = i2187[0]
  i2186.m_Damper = i2187[1]
  return i2186
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2189 = data
  i2188.m_Limit = i2189[0]
  i2188.m_Bounciness = i2189[1]
  i2188.m_ContactDistance = i2189[2]
  return i2188
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2191 = data
  i2190.m_ExtremumSlip = i2191[0]
  i2190.m_ExtremumValue = i2191[1]
  i2190.m_AsymptoteSlip = i2191[2]
  i2190.m_AsymptoteValue = i2191[3]
  i2190.m_Stiffness = i2191[4]
  return i2190
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2193 = data
  i2192.m_LowerAngle = i2193[0]
  i2192.m_UpperAngle = i2193[1]
  return i2192
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2195 = data
  i2194.m_MotorSpeed = i2195[0]
  i2194.m_MaximumMotorTorque = i2195[1]
  return i2194
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2197 = data
  i2196.m_DampingRatio = i2197[0]
  i2196.m_Frequency = i2197[1]
  i2196.m_Angle = i2197[2]
  return i2196
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2199 = data
  i2198.m_LowerTranslation = i2199[0]
  i2198.m_UpperTranslation = i2199[1]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2201 = data
  i2200.name = i2201[0]
  i2200.halfPrecision = !!i2201[1]
  i2200.useSimplification = !!i2201[2]
  i2200.useUInt32IndexFormat = !!i2201[3]
  i2200.vertexCount = i2201[4]
  i2200.aabb = i2201[5]
  var i2203 = i2201[6]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( !!i2203[i + 0] );
  }
  i2200.streams = i2202
  i2200.vertices = i2201[7]
  var i2205 = i2201[8]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2205[i + 0]) );
  }
  i2200.subMeshes = i2204
  var i2207 = i2201[9]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 16) {
    i2206.push( new pc.Mat4().setData(i2207[i + 0], i2207[i + 1], i2207[i + 2], i2207[i + 3],  i2207[i + 4], i2207[i + 5], i2207[i + 6], i2207[i + 7],  i2207[i + 8], i2207[i + 9], i2207[i + 10], i2207[i + 11],  i2207[i + 12], i2207[i + 13], i2207[i + 14], i2207[i + 15]) );
  }
  i2200.bindposes = i2206
  var i2209 = i2201[10]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2209[i + 0]) );
  }
  i2200.blendShapes = i2208
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2215 = data
  i2214.triangles = i2215[0]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2221 = data
  i2220.name = i2221[0]
  var i2223 = i2221[1]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2223[i + 0]) );
  }
  i2220.frames = i2222
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2224 = root || new pc.UnityMaterial()
  var i2225 = data
  i2224.name = i2225[0]
  request.r(i2225[1], i2225[2], 0, i2224, 'shader')
  i2224.renderQueue = i2225[3]
  i2224.enableInstancing = !!i2225[4]
  var i2227 = i2225[5]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2227[i + 0]) );
  }
  i2224.floatParameters = i2226
  var i2229 = i2225[6]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2229[i + 0]) );
  }
  i2224.colorParameters = i2228
  var i2231 = i2225[7]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2231[i + 0]) );
  }
  i2224.vectorParameters = i2230
  var i2233 = i2225[8]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2233[i + 0]) );
  }
  i2224.textureParameters = i2232
  var i2235 = i2225[9]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2235[i + 0]) );
  }
  i2224.materialFlags = i2234
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2239 = data
  i2238.name = i2239[0]
  i2238.value = i2239[1]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2243 = data
  i2242.name = i2243[0]
  i2242.value = new pc.Color(i2243[1], i2243[2], i2243[3], i2243[4])
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2247 = data
  i2246.name = i2247[0]
  i2246.value = new pc.Vec4( i2247[1], i2247[2], i2247[3], i2247[4] )
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2251 = data
  i2250.name = i2251[0]
  request.r(i2251[1], i2251[2], 0, i2250, 'value')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2255 = data
  i2254.name = i2255[0]
  i2254.enabled = !!i2255[1]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2257 = data
  i2256.name = i2257[0]
  i2256.width = i2257[1]
  i2256.height = i2257[2]
  i2256.mipmapCount = i2257[3]
  i2256.anisoLevel = i2257[4]
  i2256.filterMode = i2257[5]
  i2256.hdr = !!i2257[6]
  i2256.format = i2257[7]
  i2256.wrapMode = i2257[8]
  i2256.alphaIsTransparency = !!i2257[9]
  i2256.alphaSource = i2257[10]
  i2256.graphicsFormat = i2257[11]
  i2256.sRGBTexture = !!i2257[12]
  i2256.desiredColorSpace = i2257[13]
  i2256.wrapU = i2257[14]
  i2256.wrapV = i2257[15]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.atlasId = i2259[1]
  i2258.mipmapCount = i2259[2]
  i2258.hdr = !!i2259[3]
  i2258.size = i2259[4]
  i2258.anisoLevel = i2259[5]
  i2258.filterMode = i2259[6]
  var i2261 = i2259[7]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 4) {
    i2260.push( UnityEngine.Rect.MinMaxRect(i2261[i + 0], i2261[i + 1], i2261[i + 2], i2261[i + 3]) );
  }
  i2258.rects = i2260
  i2258.wrapU = i2259[8]
  i2258.wrapV = i2259[9]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.index = i2265[1]
  i2264.startup = !!i2265[2]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2267 = data
  i2266.aspect = i2267[0]
  i2266.orthographic = !!i2267[1]
  i2266.orthographicSize = i2267[2]
  i2266.backgroundColor = new pc.Color(i2267[3], i2267[4], i2267[5], i2267[6])
  i2266.nearClipPlane = i2267[7]
  i2266.farClipPlane = i2267[8]
  i2266.fieldOfView = i2267[9]
  i2266.depth = i2267[10]
  i2266.clearFlags = i2267[11]
  i2266.cullingMask = i2267[12]
  i2266.rect = i2267[13]
  request.r(i2267[14], i2267[15], 0, i2266, 'targetTexture')
  i2266.usePhysicalProperties = !!i2267[16]
  i2266.focalLength = i2267[17]
  i2266.sensorSize = new pc.Vec2( i2267[18], i2267[19] )
  i2266.lensShift = new pc.Vec2( i2267[20], i2267[21] )
  i2266.gateFit = i2267[22]
  i2266.commandBufferCount = i2267[23]
  i2266.cameraType = i2267[24]
  i2266.enabled = !!i2267[25]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2269 = data
  i2268.name = i2269[0]
  i2268.tagId = i2269[1]
  i2268.enabled = !!i2269[2]
  i2268.isStatic = !!i2269[3]
  i2268.layer = i2269[4]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2271 = data
  i2270.type = i2271[0]
  i2270.color = new pc.Color(i2271[1], i2271[2], i2271[3], i2271[4])
  i2270.cullingMask = i2271[5]
  i2270.intensity = i2271[6]
  i2270.range = i2271[7]
  i2270.spotAngle = i2271[8]
  i2270.shadows = i2271[9]
  i2270.shadowNormalBias = i2271[10]
  i2270.shadowBias = i2271[11]
  i2270.shadowStrength = i2271[12]
  i2270.shadowResolution = i2271[13]
  i2270.lightmapBakeType = i2271[14]
  i2270.renderMode = i2271[15]
  request.r(i2271[16], i2271[17], 0, i2270, 'cookie')
  i2270.cookieSize = i2271[18]
  i2270.shadowNearPlane = i2271[19]
  i2270.occlusionMaskChannel = i2271[20]
  i2270.isBaked = !!i2271[21]
  i2270.mixedLightingMode = i2271[22]
  i2270.enabled = !!i2271[23]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'sharedMesh')
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'additionalVertexStreams')
  i2274.enabled = !!i2275[2]
  request.r(i2275[3], i2275[4], 0, i2274, 'sharedMaterial')
  var i2277 = i2275[5]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 2) {
  request.r(i2277[i + 0], i2277[i + 1], 2, i2276, '')
  }
  i2274.sharedMaterials = i2276
  i2274.receiveShadows = !!i2275[6]
  i2274.shadowCastingMode = i2275[7]
  i2274.sortingLayerID = i2275[8]
  i2274.sortingOrder = i2275[9]
  i2274.lightmapIndex = i2275[10]
  i2274.lightmapSceneIndex = i2275[11]
  i2274.lightmapScaleOffset = new pc.Vec4( i2275[12], i2275[13], i2275[14], i2275[15] )
  i2274.lightProbeUsage = i2275[16]
  i2274.reflectionProbeUsage = i2275[17]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2281 = data
  i2280.center = new pc.Vec3( i2281[0], i2281[1], i2281[2] )
  i2280.size = new pc.Vec3( i2281[3], i2281[4], i2281[5] )
  i2280.enabled = !!i2281[6]
  i2280.isTrigger = !!i2281[7]
  request.r(i2281[8], i2281[9], 0, i2280, 'material')
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2283 = data
  i2282.ambientIntensity = i2283[0]
  i2282.reflectionIntensity = i2283[1]
  i2282.ambientMode = i2283[2]
  i2282.ambientLight = new pc.Color(i2283[3], i2283[4], i2283[5], i2283[6])
  i2282.ambientSkyColor = new pc.Color(i2283[7], i2283[8], i2283[9], i2283[10])
  i2282.ambientGroundColor = new pc.Color(i2283[11], i2283[12], i2283[13], i2283[14])
  i2282.ambientEquatorColor = new pc.Color(i2283[15], i2283[16], i2283[17], i2283[18])
  i2282.fogColor = new pc.Color(i2283[19], i2283[20], i2283[21], i2283[22])
  i2282.fogEndDistance = i2283[23]
  i2282.fogStartDistance = i2283[24]
  i2282.fogDensity = i2283[25]
  i2282.fog = !!i2283[26]
  request.r(i2283[27], i2283[28], 0, i2282, 'skybox')
  i2282.fogMode = i2283[29]
  var i2285 = i2283[30]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2285[i + 0]) );
  }
  i2282.lightmaps = i2284
  i2282.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2283[31], i2282.lightProbes)
  i2282.lightmapsMode = i2283[32]
  i2282.mixedBakeMode = i2283[33]
  i2282.environmentLightingMode = i2283[34]
  i2282.ambientProbe = new pc.SphericalHarmonicsL2(i2283[35])
  request.r(i2283[36], i2283[37], 0, i2282, 'customReflection')
  request.r(i2283[38], i2283[39], 0, i2282, 'defaultReflection')
  i2282.defaultReflectionMode = i2283[40]
  i2282.defaultReflectionResolution = i2283[41]
  i2282.sunLightObjectId = i2283[42]
  i2282.pixelLightCount = i2283[43]
  i2282.defaultReflectionHDR = !!i2283[44]
  i2282.hasLightDataAsset = !!i2283[45]
  i2282.hasManualGenerate = !!i2283[46]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'lightmapColor')
  request.r(i2289[2], i2289[3], 0, i2288, 'lightmapDirection')
  request.r(i2289[4], i2289[5], 0, i2288, 'shadowMask')
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2290 = root || new UnityEngine.LightProbes()
  var i2291 = data
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2299 = data
  var i2301 = i2299[0]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2301[i + 0]));
  }
  i2298.ShaderCompilationErrors = i2300
  i2298.name = i2299[1]
  i2298.guid = i2299[2]
  var i2303 = i2299[3]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( i2303[i + 0] );
  }
  i2298.shaderDefinedKeywords = i2302
  var i2305 = i2299[4]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2305[i + 0]) );
  }
  i2298.passes = i2304
  var i2307 = i2299[5]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2307[i + 0]) );
  }
  i2298.usePasses = i2306
  var i2309 = i2299[6]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2309[i + 0]) );
  }
  i2298.defaultParameterValues = i2308
  request.r(i2299[7], i2299[8], 0, i2298, 'unityFallbackShader')
  i2298.readDepth = !!i2299[9]
  i2298.hasDepthOnlyPass = !!i2299[10]
  i2298.isCreatedByShaderGraph = !!i2299[11]
  i2298.disableBatching = !!i2299[12]
  i2298.compiled = !!i2299[13]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2313 = data
  i2312.shaderName = i2313[0]
  i2312.errorMessage = i2313[1]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2318 = root || new pc.UnityShaderPass()
  var i2319 = data
  i2318.id = i2319[0]
  i2318.subShaderIndex = i2319[1]
  i2318.name = i2319[2]
  i2318.passType = i2319[3]
  i2318.grabPassTextureName = i2319[4]
  i2318.usePass = !!i2319[5]
  i2318.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[6], i2318.zTest)
  i2318.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[7], i2318.zWrite)
  i2318.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[8], i2318.culling)
  i2318.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2319[9], i2318.blending)
  i2318.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2319[10], i2318.alphaBlending)
  i2318.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[11], i2318.colorWriteMask)
  i2318.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[12], i2318.offsetUnits)
  i2318.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[13], i2318.offsetFactor)
  i2318.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[14], i2318.stencilRef)
  i2318.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[15], i2318.stencilReadMask)
  i2318.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2319[16], i2318.stencilWriteMask)
  i2318.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2319[17], i2318.stencilOp)
  i2318.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2319[18], i2318.stencilOpFront)
  i2318.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2319[19], i2318.stencilOpBack)
  var i2321 = i2319[20]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2321[i + 0]) );
  }
  i2318.tags = i2320
  var i2323 = i2319[21]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( i2323[i + 0] );
  }
  i2318.passDefinedKeywords = i2322
  var i2325 = i2319[22]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2325[i + 0]) );
  }
  i2318.passDefinedKeywordGroups = i2324
  var i2327 = i2319[23]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2327[i + 0]) );
  }
  i2318.variants = i2326
  var i2329 = i2319[24]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2329[i + 0]) );
  }
  i2318.excludedVariants = i2328
  i2318.hasDepthReader = !!i2319[25]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2331 = data
  i2330.val = i2331[0]
  i2330.name = i2331[1]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2333 = data
  i2332.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2333[0], i2332.src)
  i2332.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2333[1], i2332.dst)
  i2332.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2333[2], i2332.op)
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2335 = data
  i2334.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[0], i2334.pass)
  i2334.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[1], i2334.fail)
  i2334.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[2], i2334.zFail)
  i2334.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[3], i2334.comp)
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2339 = data
  i2338.name = i2339[0]
  i2338.value = i2339[1]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2343 = data
  var i2345 = i2343[0]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( i2345[i + 0] );
  }
  i2342.keywords = i2344
  i2342.hasDiscard = !!i2343[1]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2349 = data
  i2348.passId = i2349[0]
  i2348.subShaderIndex = i2349[1]
  var i2351 = i2349[2]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( i2351[i + 0] );
  }
  i2348.keywords = i2350
  i2348.vertexProgram = i2349[3]
  i2348.fragmentProgram = i2349[4]
  i2348.exportedForWebGl2 = !!i2349[5]
  i2348.readDepth = !!i2349[6]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'shader')
  i2354.pass = i2355[2]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2359 = data
  i2358.name = i2359[0]
  i2358.type = i2359[1]
  i2358.value = new pc.Vec4( i2359[2], i2359[3], i2359[4], i2359[5] )
  i2358.textureValue = i2359[6]
  i2358.shaderPropertyFlag = i2359[7]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2361 = data
  var i2363 = i2361[0]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2363[i + 0]) );
  }
  i2360.files = i2362
  i2360.componentToPrefabIds = i2361[1]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2367 = data
  i2366.path = i2367[0]
  request.r(i2367[1], i2367[2], 0, i2366, 'unityObject')
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2369 = data
  var i2371 = i2369[0]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2371[i + 0]) );
  }
  i2368.scriptsExecutionOrder = i2370
  var i2373 = i2369[1]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2373[i + 0]) );
  }
  i2368.sortingLayers = i2372
  var i2375 = i2369[2]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2375[i + 0]) );
  }
  i2368.cullingLayers = i2374
  i2368.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2369[3], i2368.timeSettings)
  i2368.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2369[4], i2368.physicsSettings)
  i2368.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2369[5], i2368.physics2DSettings)
  i2368.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2369[6], i2368.qualitySettings)
  i2368.enableRealtimeShadows = !!i2369[7]
  i2368.enableAutoInstancing = !!i2369[8]
  i2368.enableStaticBatching = !!i2369[9]
  i2368.enableDynamicBatching = !!i2369[10]
  i2368.usePreservativeDynamicBatching = !!i2369[11]
  i2368.lightmapEncodingQuality = i2369[12]
  i2368.desiredColorSpace = i2369[13]
  var i2377 = i2369[14]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( i2377[i + 0] );
  }
  i2368.allTags = i2376
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2381 = data
  i2380.name = i2381[0]
  i2380.value = i2381[1]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2385 = data
  i2384.id = i2385[0]
  i2384.name = i2385[1]
  i2384.value = i2385[2]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2389 = data
  i2388.id = i2389[0]
  i2388.name = i2389[1]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2391 = data
  i2390.fixedDeltaTime = i2391[0]
  i2390.maximumDeltaTime = i2391[1]
  i2390.timeScale = i2391[2]
  i2390.maximumParticleTimestep = i2391[3]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2393 = data
  i2392.gravity = new pc.Vec3( i2393[0], i2393[1], i2393[2] )
  i2392.defaultSolverIterations = i2393[3]
  i2392.bounceThreshold = i2393[4]
  i2392.autoSyncTransforms = !!i2393[5]
  i2392.autoSimulation = !!i2393[6]
  var i2395 = i2393[7]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2395[i + 0]) );
  }
  i2392.collisionMatrix = i2394
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.layerId = i2399[1]
  i2398.otherLayerId = i2399[2]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'material')
  i2400.gravity = new pc.Vec2( i2401[2], i2401[3] )
  i2400.positionIterations = i2401[4]
  i2400.velocityIterations = i2401[5]
  i2400.velocityThreshold = i2401[6]
  i2400.maxLinearCorrection = i2401[7]
  i2400.maxAngularCorrection = i2401[8]
  i2400.maxTranslationSpeed = i2401[9]
  i2400.maxRotationSpeed = i2401[10]
  i2400.baumgarteScale = i2401[11]
  i2400.baumgarteTOIScale = i2401[12]
  i2400.timeToSleep = i2401[13]
  i2400.linearSleepTolerance = i2401[14]
  i2400.angularSleepTolerance = i2401[15]
  i2400.defaultContactOffset = i2401[16]
  i2400.autoSimulation = !!i2401[17]
  i2400.queriesHitTriggers = !!i2401[18]
  i2400.queriesStartInColliders = !!i2401[19]
  i2400.callbacksOnDisable = !!i2401[20]
  i2400.reuseCollisionCallbacks = !!i2401[21]
  i2400.autoSyncTransforms = !!i2401[22]
  var i2403 = i2401[23]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2403[i + 0]) );
  }
  i2400.collisionMatrix = i2402
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.layerId = i2407[1]
  i2406.otherLayerId = i2407[2]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2409 = data
  var i2411 = i2409[0]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2411[i + 0]) );
  }
  i2408.qualityLevels = i2410
  var i2413 = i2409[1]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( i2413[i + 0] );
  }
  i2408.names = i2412
  i2408.shadows = i2409[2]
  i2408.anisotropicFiltering = i2409[3]
  i2408.antiAliasing = i2409[4]
  i2408.lodBias = i2409[5]
  i2408.shadowCascades = i2409[6]
  i2408.shadowDistance = i2409[7]
  i2408.shadowmaskMode = i2409[8]
  i2408.shadowProjection = i2409[9]
  i2408.shadowResolution = i2409[10]
  i2408.softParticles = !!i2409[11]
  i2408.softVegetation = !!i2409[12]
  i2408.activeColorSpace = i2409[13]
  i2408.desiredColorSpace = i2409[14]
  i2408.masterTextureLimit = i2409[15]
  i2408.maxQueuedFrames = i2409[16]
  i2408.particleRaycastBudget = i2409[17]
  i2408.pixelLightCount = i2409[18]
  i2408.realtimeReflectionProbes = !!i2409[19]
  i2408.shadowCascade2Split = i2409[20]
  i2408.shadowCascade4Split = new pc.Vec3( i2409[21], i2409[22], i2409[23] )
  i2408.streamingMipmapsActive = !!i2409[24]
  i2408.vSyncCount = i2409[25]
  i2408.asyncUploadBufferSize = i2409[26]
  i2408.asyncUploadTimeSlice = i2409[27]
  i2408.billboardsFaceCameraPosition = !!i2409[28]
  i2408.shadowNearPlaneOffset = i2409[29]
  i2408.streamingMipmapsMemoryBudget = i2409[30]
  i2408.maximumLODLevel = i2409[31]
  i2408.streamingMipmapsAddAllCameras = !!i2409[32]
  i2408.streamingMipmapsMaxLevelReduction = i2409[33]
  i2408.streamingMipmapsRenderersPerFrame = i2409[34]
  i2408.resolutionScalingFixedDPIFactor = i2409[35]
  i2408.streamingMipmapsMaxFileIORequests = i2409[36]
  i2408.currentQualityLevel = i2409[37]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2419 = data
  i2418.weight = i2419[0]
  i2418.vertices = i2419[1]
  i2418.normals = i2419[2]
  i2418.tangents = i2419[3]
  return i2418
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

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1848";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3092";

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

Deserializers.buildID = "b48c7f85-5ca9-42a8-85dc-52e40056d8f0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

