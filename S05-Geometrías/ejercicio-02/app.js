console.log('sesión 05. Geometrías 3D');
console.log(THREE);


const canvas = document.getElementById('lienzo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//escena

const scene = new THREE.Scene();

//camara
//const camera = new THREE.Camera(fov, SVGPreserveAspectRatio, near, far)
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);

//mesh

//2 GEOMETRIAS Y UN MATERIAL

const geometry = new THREE.TorusKnotGeometry();

const material = new THREE.MeshToonMaterial({flatShading:true,
    specular: "#ffffff",
    shininess: 10,
    color: "blue",
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

mesh.position.z = -5;

//renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas});
renderer.setSize(canvas.width, canvas.height);

//imprimir primer frame

renderer.render(scene, camera);


function animate() {
    requestAnimationFrame(animate);
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
 
    renderer.render(scene, camera);
 }

 const topLight = new THREE.PointLight("purple", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("red", 100, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);

 animate();
 