import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


const BusinessCard = () => {
  const mountRef = useRef(null);
  

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight); //set the renderer to the limits of whatever element it's bound to
    mountRef.current.appendChild(renderer.domElement); //mount reference a domElement to render the threejs

    // Add cube
    const geometry = new THREE.PlaneGeometry(4,2); //the skeleton 
    const material = new THREE.MeshBasicMaterial({ color: 0x00ee00, opacity: 110, }); //what covers the skeleton
    const loader = new THREE.TextureLoader(); //there are different kinds of loaders (for when i want to do 3d stuff)
    const cube = new THREE.Mesh(geometry, material); //combine the geo and the material to make a textured object
     scene.add(cube);

    const frontTexture = loader.load() //TODO: find/create cool card texture
    const backTexture = loader.load() //TODO: ^^^^^^^

    camera.position.z = 4.5; //kinda slef explanitory, needs experiementation 
    
    let xSpeed = .001; //rotation animation vars
    let ySpeed = .001; //^^^^^^^^^^^^^^^^^^^^^^^
    
    // Animation loop (try to keep this free of other loops: will crash browser easily)
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += xSpeed;
      cube.rotation.y += ySpeed;

      //roatational boundaries: 3js uses radians (convert to degrees w pi/? radians ) 
      //currently set to ~45 degrees both +/-
      if (cube.rotation.x > Math.PI /4 || cube.rotation.y < -Math.PI /4 ){
        xSpeed = -xSpeed
      }
      
      if (cube.rotation.y > Math.PI /6 || cube.rotation.y < -Math.PI /4 ){
        ySpeed = -ySpeed
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{ position: 'fixed', top: '10%', left: '50%', color: 'black', zIndex: 1 }}>
        
      </div>
    </div>
  );
};

export default BusinessCard
