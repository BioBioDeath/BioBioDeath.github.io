import { Environment, MeshReflectorMaterial, PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';

const targets = [

];

export const Scene = ({ children }) => {
    const [currentRotation, setCurrentRotation] = useState([0, 0, 0]);

    return (
        <Canvas gl={{ alpha: false }} camera={{ fov: 70, position: [0, 2, 15] }}>
            <color attach="background" args={['#222222']} />
            <fog attach="fog" args={['#222222', 5, 35]} />
            <Environment preset="forest" />
            <PresentationControls
                global
                snap={{ mass: 1, tension: 50, friction: 26 }}
                rotation={currentRotation}
            >
                <group position={[0, -0.5, 0]}>
                    <mesh position={[0, 2.5, 0]}>
                        <boxGeometry args={[1, 5, 1]} />
                        <meshStandardMaterial color={"#34A478"} />
                    </mesh>
                    {children}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                        <planeGeometry args={[100, 100]} />
                        <MeshReflectorMaterial
                            blur={[300, 100]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={60}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#151515"
                            metalness={0.5}
                        />
                    </mesh>
                </group>
            </PresentationControls>
        </Canvas>
    );
}

export default Scene;