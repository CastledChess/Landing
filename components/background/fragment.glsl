uniform vec3 iResolution;
uniform float iTime;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 q=7.0*(fragCoord.xy-0.5*iResolution.xy)/max(iResolution.x,iResolution.y);

  for(float i=1.0;i<40.0;i*=1.1)
  {
    vec2 o=q;
    o.x+=(0.5/i)*cos(i*q.y+iTime*0.297+0.03*i)+1.3;
    o.y+=(0.5/i)*cos(i*q.x+iTime*0.414+0.03*(i+10.0))+1.9;
    q=o;
  }

  vec3 col=vec3(0.5*sin(3.0*q.x)+0.5,0.5*sin(3.0*q.y)+0.5,sin(1.3*q.x+1.7*q.y));
  float f=0.43*(col.x+col.y+col.z);
  float alpha=smoothstep(0.0,2.0,f);

  vec4 color = vec4(f-0.9,0.3+0.75*f,0.2,alpha);

  // Radial gradient mask
  vec2 center = iResolution.xy * 0.5;
  float dist = distance(fragCoord.xy, center);
  float maxDist = length(iResolution.xy * 0.5);
  float mask = smoothstep(maxDist, maxDist * 0.1, dist);

  fragColor = mix(color, vec4(1.0, 1.0, 1.0, 0.0), mask);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}