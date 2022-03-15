import { Image } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React from 'react';
import { OCTAGON_DISTANCE, CLOSE_SIDE_DISTANCE } from '../App';

const Card = ({ url, index }) => {
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
    return (
        <Image url={url} position={POSITION_FROM_INDEX[index]} rotation={ROTATION_FROM_INDEX[index]} scale={height*2} />
    );
}

export default Card;