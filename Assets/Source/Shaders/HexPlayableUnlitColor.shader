Shader "HexPlayable/UnlitColor"
{
    Properties
    {
        _Color ("Color", Color) = (1, 1, 1, 1)
    }

    SubShader
    {
        Tags
        {
            "RenderType" = "Opaque"
            "Queue" = "Geometry"
        }
        LOD 100

        Pass
        {
            CGPROGRAM
            #pragma vertex Vert
            #pragma fragment Frag
            #pragma target 2.0

            #include "UnityCG.cginc"

            fixed4 _Color;

            struct AppData
            {
                float4 vertex : POSITION;
            };

            struct V2F
            {
                float4 vertex : SV_POSITION;
            };

            V2F Vert(AppData input)
            {
                V2F output;
                output.vertex = UnityObjectToClipPos(input.vertex);
                return output;
            }

            fixed4 Frag(V2F input) : SV_Target
            {
                return _Color;
            }
            ENDCG
        }
    }
}
