import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


const BusinessCard = () => {
  const mountRef = useRef(null);
  

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true for transparent background
    const loader = new THREE.TextureLoader(); //there are different kinds of loaders (for when i want to do 3d stuff)
    renderer.setSize(window.innerWidth, window.innerHeight); //set the renderer to the limits of whatever element it's bound to
    mountRef.current.appendChild(renderer.domElement); //mount reference a domElement to render the threejs

    //declare jpg texture 
    const frontTexture = loader.load("./imgs/planeCard.png")
    // const backTexture = loader.load('imgs/planeCard.jpg')
   
    // Add card with jpg texutre applied
    const geometry = new THREE.PlaneGeometry(10,5); //the skeleton 
    const material = new THREE.MeshBasicMaterial({map: frontTexture}, () =>{
      frontTexture.wrapT = frontTexture.wrapS = THREE.RepeatWrapping;
      frontTexture.repeat.set(1,1);
    }); //what covers the skeleton, after img is loaded wrap it
    
    const card = new THREE.Mesh(geometry, material); //combine the geo and the material to make a textured object
    
    //add card to the scene to be rendered
    scene.add(card);

    // frontTexture.wrapT = THREE.RepeatWrapping;
    // frontTexture.wraps = THREE.RepeatWrapping;
    // frontTexture.repeat.set(1,1);

    //camera mods
    camera.position.z = 4.5; //kinda slef explanitory, needs experiementation 
    
    let xSpeed = .001; //rotation animation vars
    let ySpeed = .001; //^^^^^^^^^^^^^^^^^^^^^^^
    
    // Animation loop (try to keep this free of other loops: will crash browser easily)
    const animate = function () {
      requestAnimationFrame(animate);

      card.rotation.x += xSpeed;
      card.rotation.y += ySpeed;

      //roatational boundaries: 3js uses radians (convert to degrees w pi/? radians ) 
      //currently set to ~45 degrees both +/-
      if (card.rotation.x > Math.PI /4 || card.rotation.y < -Math.PI /4 ){
        xSpeed = -xSpeed
      }
      
      if (card.rotation.y > Math.PI /6 || card.rotation.y < -Math.PI /4 ){
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
