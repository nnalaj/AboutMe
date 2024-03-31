import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


const BusinessCard = () => {
  const mountRef = useRef(null);
  var i;

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add cube
    const geometry = new THREE.PlaneGeometry(4,2);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ee00 });
    const loader = new THREE.TextureLoader();
    const cube = new THREE.Mesh(geometry, material);
     scene.add(cube);

    const frontTexture = loader.load() //TODO: find/create cool card texture
    const backTexture = loader.load() //TODO: ^^^^^^^

    camera.position.z = 4.5;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.00;
      
      do{
          if(i < .01){  
                cube.rotation.y += 0.001;
                console.log("first if")
                //i + .001;
          }
          else if(i > .9)
                cube.rotation.y -= 0.001;
                console.log("elseif")
                //i - .001;
        }
        while(i < .9 && i >= 0)
         
      
     

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
