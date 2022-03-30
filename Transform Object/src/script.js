import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

//  ===== Position ============
// => x is going to the right
// => y is going to upward
// => z is going backward

// 1 is basically depend on you

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 2;

// mesh.position.set(0.7, -0.6, 1);

// //  ===== Scale ============
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
scene.add(mesh);

// // =======>> Rotation <<======
// mesh.rotation.reorder("YXZ");
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// // ==========> LookAt <=======

// //  Axes helper

// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const animate = () => {
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
};
animate();
