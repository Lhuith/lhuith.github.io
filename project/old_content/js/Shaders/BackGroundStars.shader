BackGroundStars = {
	uniforms: {
		"resolution":{type:"2fv", value:""},
		"_Time": {type:"f", value : ""},
		"FlowMap": {type:"t", value : ""},
		"NoiseTex": {type:"t", value : ""},
	},
	vertexShader: [
		"varying vec2 vUv;",
		"void main() {",
			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
		"}"
	].join( "\n" ),
	fragmentShader: [
	"uniform vec2 resolution;",
	"uniform float _Time;",
	"uniform sampler2D NoiseTex;",
	"varying vec2 vUv;",


	"void main() ",
	"{",
	"}",
	].join( "\n" )
};