console.log('sesión 05. Tareas - MATCAPS');
console.log(THREE);

// Obtener canvas
const canvas = document.getElementById('lienzo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 10;

// Texturas
const textureLoader = new THREE.TextureLoader();

// Materiales y geometrías
let trunkMesh, crownMesh;

const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32); // Tronco
const crownGeometry = new THREE.BoxGeometry(2, 2, 2);

// Cargar textura para el tronco (matcap2)
textureLoader.load('./assets/matcap2.png', function (matcapTexture2) {
    const trunkMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture2 });

    trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunkMesh.position.y = -1.5; // Colocar parte inferior (tronco)
    scene.add(trunkMesh);

    // Ahora cargamos la copa
    textureLoader.load('./assets/matcap3.png', function (matcapTexture3) {
        const crownMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture3 });

        crownMesh = new THREE.Mesh(crownGeometry, crownMaterial);
        crownMesh.position.y = 1.5; // Colocar encima del tronco
        scene.add(crownMesh);

        // Iniciar animación cuando ambos objetos estén listos
        animate();
    },
    undefined,
    function (error) {
        console.error('Error cargando matcap3.png:', error);
    });

},
undefined,
function (error) {
    console.error('Error cargando matcap2.png:', error);
});

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);

// Animación
function animate() {
    requestAnimationFrame(animate);

    // Rotar ambas partes del "árbol"
    if (trunkMesh) {
        trunkMesh.rotation.y += 0.01;
    }
    if (crownMesh) {
        crownMesh.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}
