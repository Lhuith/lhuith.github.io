
uniform vec3 palette[8];
uniform int paletteSize;
const float lightnessSteps=3.;

uniform float indexMatrix16x16[16];
const int num=9;

float lightnessStep(float l)
{
	/* Quantize the lightness to one of `lightnessSteps` values */
	return floor((.5+l*lightnessSteps))/lightnessSteps;
}

float indexValue()
{
	float x=(mod(gl_FragCoord.x,4.));
	float y=(mod(gl_FragCoord.y,4.));
	
	float grabby=0.;
	
	for(int i=0;i<16;i++)
	{
		if(i==int(x+(y*4.)))
		{
			grabby=indexMatrix16x16[i];
			break;
		}
	}
	
	return grabby/16.;
}

float ditherMap(float color)
{
	float closestColor=(color<=.5)?0.:1.;
	float secondClosestColor=1.-closestColor;
	float d=indexValue();
	float distance=abs(closestColor-color);
	return(distance<d)?closestColor:secondClosestColor;
}

vec3 hslToRgb(vec3 c)
{
	vec3 rgb=clamp(abs(mod(c.x*6.+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.);
	return c.z+c.y*(rgb-.5)*(1.-abs(2.*c.z-1.));
}

vec3 rgbToHsl(vec3 c)
{
	float h=0.;
	float s=0.;
	float l=0.;
	
	float r=c.r;
	float g=c.g;
	float b=c.b;
	
	float cMin=min(r,min(g,b));
	float cMax=max(r,max(g,b));
	
	l=(cMax+cMin)/2.;
	if(cMax>cMin){
		float cDelta=cMax-cMin;
		
		//s = l < .05 ? cDelta / ( cMax + cMin ) : cDelta / ( 2.0 - ( cMax + cMin ) ); Original
		s=l<.0?cDelta/(cMax+cMin):cDelta/
		(2.-(cMax+cMin));
		
		if(r==cMax){
			h=(g-b)/cDelta;
		}else if(g==cMax){
			h=2.+(b-r)/cDelta;
		}else{
			h=4.+(r-g)/cDelta;
		}
		
		if(h<0.){
			h+=6.;
		}
		h=h/6.;
	}
	return vec3(h,s,l);
}

float hueDistance(float h1,float h2)
{
	float diff=abs((h1-h2));
	return min(abs((1.-diff)),diff);
}

vec3 dither(vec3 color)
{
	vec3 hsl=rgbToHsl(color);
	
	vec3 ret[2];
	vec3 closest=vec3(0,0,0);
	vec3 secondClosest=vec3(0,0,0);
	vec3 temp;
	
	for(int i=0;i<8;++i)
	{
		temp=palette[i];
		float tempDistance=hueDistance(temp.x,hsl.x);
		
		if(tempDistance<hueDistance(closest.x,hsl.x))
		{
			secondClosest=closest;
			closest=temp;
		}
		else
		{
			if(tempDistance<hueDistance(secondClosest.x,hsl.x))
			{
				secondClosest=temp;
			}
		}
	}
	ret[0]=closest;
	ret[1]=secondClosest;
	
	float d=indexValue();
	float hueDiff=hueDistance(hsl.x,ret[0].x)/hueDistance(ret[1].x,ret[0].x);
	
	float l1=lightnessStep(max((hsl.z-.125),0.));
	float l2=lightnessStep(min((hsl.z+.124),1.));
	float lightnessDiff=(hsl.z-l1)/(l2-l1);
	
	vec3 resultColor=(hueDiff<d)?ret[0]:ret[1];
	resultColor.z=(lightnessDiff<d)?l1:l2;
	return hslToRgb(resultColor);
}
