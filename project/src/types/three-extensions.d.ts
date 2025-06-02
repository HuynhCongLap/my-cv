import 'three';

declare module 'three' {
  interface ShaderMaterial {
    isTechGlow?: boolean;
  }
}
