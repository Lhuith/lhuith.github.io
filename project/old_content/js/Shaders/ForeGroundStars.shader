ForeGroundStars = {
	uniforms: {
		"resolution":{type:"2fv", value:""},
		"_Time": {type:"f", value : ""},
	},
	vertexShader: [
		"varying vec2 vUv;",
		"void main() {",
			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
		"}"
	].join( "\n" ),
	fragmentShader: [

	"varying vec2 vUv;",
	"uniform vec2 resolution;",
	"uniform float _Time;",
	"const vec3 SKY = vec3(1.,1., 1.);",
	"vec2 nc (in vec2 uv) {",
	"	return (uv / resolution) * 2.0 - 1.0;",
	"}",
	"float random (in vec2 uv, in vec3 seed) {",
		"return fract(sin(dot(uv.xy, vec2(seed.x,seed.y))) * seed.z);",
	"}",

	"void main() ",
	"{",

	"vec2 uv =  ( gl_FragCoord.xy / resolution.xy ) * 2.0 - 1.0;",
	"vec2 ipos = (vUv);",

	"vec2 x = gl_FragCoord.xy;",

	"vec3 a = vec3(max((fract(dot(sin(x ),x)) -.99)*1390.,.0)); ",
	"vec3 a2 = vec3(max((fract(dot(sin(x ),x))-.998)*1390.,.0));",

	"vec3 starA = vec3( random(ipos,a), random(ipos,a), random(ipos,a));",
	"vec3 starB = vec3( random(ipos,a2), random(ipos,a2), random(ipos,a2));",


	"vec4 starABMix = vec4(starA * starB, 1.0);",



	"if(starABMix.r > 0.5 && starABMix.g > 0.5 && starABMix.b > 0.5)",
	"{",
		"starABMix.rgb += vec3(0.741, 0.576, 0.701);",
	"}",
	"else if(starABMix.r > 0.7 && starABMix.g > 0.7 && starABMix.b > 0.7)",
	"{",
		"starABMix.rgb = vec3(0.674, 0.984, 0.996);",
	"}",
	"else if(starABMix.r > 0.6 && starABMix.g > 0.6 && starABMix.b > 0.6)",
	"{",
		"starABMix.rgb = vec3(0.976, 0.949, 0.556);",
	"}",

	"vec4 colLerp = mix(vec4(0.976, 0.705, 0.917, 1.0), vec4(0.325, 0.650, 0.917, 1.0), smoothstep(0.0, 1.0 , ((vUv.x))));",
	
	"vec4 FadeLerp = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0), smoothstep(0.55, 1.0 , ((vUv.y))));",
	"starABMix.rgb *= (1.0 - FadeLerp.rgb) * colLerp.rgb;",
	
	"gl_FragColor = (vec4( starABMix.rgb, 1.0));",
	"}",
	].join( "\n" )
};