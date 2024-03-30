import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BusinessCard = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add cube
    const geometry = new THREE.PlaneGeometry(5,3);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const loader = new THREE.TextureLoader();
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    const frontTexture = loader.load("/public/imgs/THE WORLD IS YOURS.png") //TODO: find/create cool card texture
    const backTexture = loader.load("/public/imgs/THE WORLD IS YOURS.png") //TODO: ^^^^^^^

    camera.position.z = 5;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      frontTexture.rotation.x += 0.01;
      backTexture.rotation.y += 0.01;

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
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', zIndex: 1 }}>
        <h1>Your Content Here</h1>
      </div>
    </div>
  );
};

export default BusinessCard
