import React, { useEffect, useRef, useState } from 'react';

import * as THREE from 'three';

export const Render = () => {
    const renderContainer = useRef();
    const [renderer] = useState(new THREE.WebGLRenderer());
    
    const [camera] = useState(new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500));
    const [scene] = useState(new THREE.Scene());

    const [geometry] = useState(new THREE.BoxGeometry(5, 25, 5));
    const [material] = useState(new THREE.MeshBasicMaterial( { color: 0x182f69 } ));
    const [cube] = useState(new THREE.Mesh( geometry, material ));
    
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
    }

    useEffect(() => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderContainer.current.appendChild(renderer.domElement);

        scene.add(cube);

        camera.position.set(50, 0, 25);
        camera.lookAt(0, 0, 0);

        window.addEventListener('resize', handleResize);
        animate();
    }, [renderer, camera, scene, geometry, material]);

    return (
        <div ref={renderContainer} />
    );
}

export default Render;