import { Environment, ScrollControls, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { createRef } from 'react';

const Scene = ({ children }) => {

    return (
        <>
            <color attach="background" args={['#000000']} />
            {/* <fog attach="fog" args={['#000000', 5, 35]} /> */}
            <Environment preset="sunset" />
            <ScrollControls
                pages={React.Children.count(children)}
            >
                {React.Children.map(children, (child, index) =>
                    <ScrollGroup key={index} pages={React.Children.count(children)} >
                        {React.cloneElement(child, { index })}
                    </ScrollGroup>
                )}
            </ScrollControls>
        </>
    );
}

const ScrollGroup = ({ children, pages }) => {
    const data = useScroll();
    const ref = createRef();
    useFrame(() => {
        ref.current.rotateX((data.range(0, 1) * (Math.PI / 4) * (pages - 1)) - ref.current.rotation.x);
    });
    return (
        <group ref={ref} position={[0, 0, 0]} >
            {children}
        </group>
    );
}

export default Scene;