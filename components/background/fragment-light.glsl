uniform vec3 iResolution;
uniform float iTime;

#define DISCO 0
#define time iTime*.5+300.
#define tau 6.2831
vec2 hash( vec2 p )
{
  p = vec2(dot(p,vec2(127.1,311.7)),
  dot(p,vec2(269.5,183.3)));

  return fract(sin(p)*18.5453);
}

float n2D(vec2 p){
  const vec2 s = vec2(1, 113);
  vec2 ip = floor(p); p -= ip;
  vec4 h = vec4(0., s.x, s.y, s.x + s.y) + dot(ip, s);
  p = p*p*(3. - 2.*p);
  h = fract(sin(h)*43758.5453);
  h.xy = mix(h.xy, h.zw, p.y);
  return mix(h.x, h.y, p.x);
}

float fbm(vec2 p){ return n2D(p)*.533 + n2D(p*2.)*.267 + n2D(p*4.)*.133 + n2D(p*8.)*.067; }

vec2 voronoi( in vec2 x )
{
  vec2 n = floor( x );
  vec2 f = fract( x );

  vec3 m = vec3( 8.0 );
  for( int j=-1; j<=1; j++ )
  for( int i=-1; i<=1; i++ )
  {
    vec2  g = vec2( float(i), float(j) );
    vec2  o = hash( n + g );
    vec2  r = g - f + (0.5+0.5*sin(time+tau*o));
    float d = dot( r, r );
    if( d<m.x )
    m = vec3( d, o );
  }

  return vec2( sqrt(m.x), m.y+m.z );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 p = fragCoord.xy / max(iResolution.x, iResolution.y);
  p -= 6.0;
  p.y += 0.15;
  vec2 c = p / 20.0 * voronoi((8.0 + 2.0 * sin(0.2 * time)) * p * fbm(p));

  vec2 stt = vec2(atan(c.x, p.y), length(p));
  #if DISCO
  stt = stt + voronoi((1.0 + 2.0 * sin(0.2 * time)) * p * fbm(p));
  #endif
  vec3 col = 0.5 + 0.5 * cos(stt.y * stt.x * 6.2831 + vec3(0.0, smoothstep(0.08, 0.7, fbm(stt)), smoothstep(0.7, 0.9, fbm(stt))));
  col.r = pow(col.r, 3.0 / 2.0);
  col.g = pow(col.g, 4.0 / 5.0);
  col.g = pow(col.g, 3.0 / 2.0);

  col = mix(vec3(1.0, 0.5, 0.0), vec3(1.0), col.b);

  fragColor = vec4(col, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}