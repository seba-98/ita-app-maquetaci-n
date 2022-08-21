//import "./styles.css";
//import * as THREE from "three";

const container = document.querySelector("#app");
//const localEarth = "../images/planeta/earthmap1k.jpg";
const localEarth = "../../static/images/planeta/earthmap1k.png";

const externalEarth =
  "http://s3-us-west-2.amazonaws.com/s.cdpn.io/1206469/earthmap1k.jpg";

const texture = new THREE.TextureLoader().load(localEarth);


//Scene
const scene = new THREE.Scene();
//scene.background = new THREE.Color(0xccddff);
//scene.background = new THREE.Color(0x080755);
//scene.background = new THREE.Color(0xf5f5f5);
scene.background = new THREE.Color(0xffffff);

//const width = window.innerWidth;
//const height = window.innerHeight;

//const width = 180;
//const height = 180;
const width = 280;
const height = 280;

//LIGHTS
const ambient = new THREE.AmbientLight(0xffffff);
scene.add(ambient);

// Objects
//const sphereGeometry = new THREE.SphereGeometry(10, 128, 128, 0, Math.PI*2 , 0, Math.PI);
const sphereGeometry = new THREE.SphereGeometry(15, 32, 32 );
//const sphereGeometry = new THREE.SphereGeometry(5, 32, 32); // (radius, widthSegments, heightSegments)
const planetEarthMaterial = new THREE.MeshPhongMaterial({ map: texture , overdraw: 0.1});
const planetEarth = new THREE.Mesh(sphereGeometry, planetEarthMaterial);

scene.add(planetEarth);

//Camera
const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
camera.position.z = 26.7;
camera.position.y = 0;
camera.position.x = 0;
//camera.aspect = width / height;
//camera.lookAt(0, 0, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);



//Renderer
const renderer = new THREE.WebGLRenderer();
container.appendChild(renderer.domElement);
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

//LOOP
const loop = () => {
  planetEarth.rotation.y += 0.005;
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};

loop();