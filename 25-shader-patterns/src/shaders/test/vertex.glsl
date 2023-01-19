
varying vec2 uUv;

void main()
{

    uUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}