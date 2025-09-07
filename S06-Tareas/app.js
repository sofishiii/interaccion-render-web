console.log('sesión 05. Tareas - MATCAPS');
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

const geometry = new THREE.CylinderGeometry();
const material = new THREE.MeshNormalMaterial({flatShading:true});

const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;
var matcapMap = textureLoader.load(
  // Textura URL
  './assets/matcap2.png',
  // on Load callback
  function (texture) {
      matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
      // Mesh.
      mesh = new THREE.Mesh( geometry, matcapMaterial );
      // 3. Poner objeto en la escena.
      scene.add(mesh);
      mesh.position.z = -8;
      // 4. Activar animación.
      animate();
  },
  // on Progress (no funciona por ahora)
  undefined,
  // on Error callback
  function (error) { console.error("Algo salio mal con la textura,", error); }
);
var matcapMap = textureLoader.load('./assets/matcap2.png', function (texture) {
    matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: texture });
    mesh = new THREE.Mesh(geometry, matcapMaterial);
    scene.add(mesh);
    mesh.position.z = -5;
    console.log(texture);
});

const geometry1 = new THREE.BoxBufferGeometry();
const material1 = new THREE.MeshNormalMaterial({flatShading:true});
var matcapMap = textureLoader.load(
    // Textura URL
    './assets/matcap3.png',
function (texture) {
    matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
    // Mesh.
    mesh = new THREE.Mesh( geometry1, matcapMaterial );
    // 3. Poner objeto en la escena.
    scene.add(mesh);
    mesh.position.z = -3;
    // 4. Activar animación.
    animate();
},
// on Progress (no funciona por ahora)
undefined,
// on Error callback
function (error) { console.error("Algo salio mal con la textura,", error); }
);

var matcapMap = textureLoader.load('./assets/matcap3.png', function (texture) {
    matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: texture });
    mesh = new THREE.Mesh(geometry, matcapMaterial);
    scene.add(mesh);
    mesh.position.z = -5;
    console.log(texture);
});


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


 //animate();
 