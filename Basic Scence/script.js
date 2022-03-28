const sizes = {
  width: 800,
  height: 600,
};

const canvas = document.querySelector("canvas");

// scence

const scene = new THREE.Scene();

// Objects

//=>  Mesh is the Combination of Geometry and Materials

// ==> Geometry is the Shape of the Object

const geometry = new THREE.BoxGeometry(1, 1, 1);

//  ==> Materials is the How its look

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = -3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
