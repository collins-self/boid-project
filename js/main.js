import * as THREE from '../node_modules/three/build/three.modules.js'
import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
const renderer = new THREE.WebGLRenderer({antialias: true});

// render base color and set the size
renderer.setClearColor("#233143");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// window resizes
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

// create a creature in a scene
