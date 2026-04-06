import type * as THREE from 'three';

export class App {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  constructor(private canvas: HTMLCanvasElement) {

  }
}

