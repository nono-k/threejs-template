import * as THREE from 'three';

class Three  {
  public renderer: THREE.WebGLRenderer;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public time = { delta: 0, elapsed: 0 };

  private timer = new THREE.Timer();
  private resizeCallback?: () => void;

  constructor() {
    const { width, height, aspect } = this.size;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
  }
}

export const gl = new Three()