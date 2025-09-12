// Selecciona el canvas del DOM
const canvas = document.getElementById('canvas');

// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1, 
  1000
);
camera.position.z = 5;

// Renderizador
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Función para obtener un color aleatorio
function getRandomColor() {
  return new THREE.Color(Math.random(), Math.random(), Math.random());
}

// Lista de materiales aleatorios
const materials = [
  () => new THREE.MeshBasicMaterial({ color: getRandomColor() }),
  () => new THREE.MeshStandardMaterial({ color: getRandomColor(), metalness: 0.5, roughness: 0.5 }),
  () => new THREE.MeshPhongMaterial({ color: getRandomColor(), shininess: 100 }),
  () => new THREE.MeshLambertMaterial({ color: getRandomColor() }),
  () => new THREE.MeshNormalMaterial(),
];

// Geometría y primer material
const geometry = new THREE.BoxGeometry();
let material = materials[Math.floor(Math.random() * materials.length)]();
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 2);
scene.add(light);

// Evento de redimensionamiento
window.addEventListener('resize', () => {
  // Ajustar el tamaño del renderizador y cámara
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Eliminar el material anterior (liberar memoria)
  cube.material.dispose();

  // Asignar un nuevo material aleatorio
  cube.material = materials[Math.floor(Math.random() * materials.length)]();
});

// Animación
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
