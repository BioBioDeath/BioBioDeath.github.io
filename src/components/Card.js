import { Image, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { OCTAGON_DISTANCE, CLOSE_SIDE_DISTANCE } from '../App';

const Card = ({ url, index, title, description, link }) => {
    const POSITION_FROM_INDEX = [
        [0, 0, -OCTAGON_DISTANCE],
        [0, -CLOSE_SIDE_DISTANCE, -CLOSE_SIDE_DISTANCE],
        [0, -OCTAGON_DISTANCE, 0],
        [0, -CLOSE_SIDE_DISTANCE, CLOSE_SIDE_DISTANCE],
        [0, 0, OCTAGON_DISTANCE],
        [0, CLOSE_SIDE_DISTANCE, CLOSE_SIDE_DISTANCE],
        [0, OCTAGON_DISTANCE, 0],
        [0, CLOSE_SIDE_DISTANCE, -CLOSE_SIDE_DISTANCE],
    ];

    const ROTATION_FROM_INDEX = [
        [0, 0, 0],
        [Math.PI * 1.75, 0, 0],
        [Math.PI * 1.5, 0, 0],
        [Math.PI * 1.25, 0, 0],
        [Math.PI, 0, 0],
        [Math.PI * 0.75, 0, 0],
        [Math.PI * 0.5, 0, 0],
        [Math.PI * 0.25, 0, 0],
    ];

    const { height } = useThree((state) => state.viewport);
    const image = useRef();
    const frame = useRef();
    const [isHovered, setIsHovered] = useState(false);

    useFrame(() => {
        if (isHovered) {
            frame.current.scale.x = 1.05;
            frame.current.scale.y = 1.05;
        }
        else {
            frame.current.scale.x = 1;
            frame.current.scale.y = 1;
        }
    })

    return (
        <group
            position={POSITION_FROM_INDEX[index]}
            rotation={ROTATION_FROM_INDEX[index]}
        >
            <mesh
                ref={frame}
                position={[0, 0, -0.1]}
                onClick={() => window.open(link)}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
            >
                <planeGeometry args={[15, 15]} />
                <meshBasicMaterial />
            </mesh>
            <Text position={[-9, 0, 0]} rotation={[0, 0, Math.PI / 2]} fontSize={1} font={'./assets/fonts/Bungee-Regular.ttf'}>{title}</Text>
            <Image ref={image} url={url} scale={height * 2} position={[0, 0, 0]} />
            <Text position={[9, 0, 0]} rotation={[0, 0, -Math.PI / 2]} fontSize={1} font={'./assets/fonts/Bungee-Regular.ttf'}>{description}</Text>
        </group>
    );
}

export default Card;