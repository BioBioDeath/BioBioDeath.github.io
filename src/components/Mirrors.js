import { useThree } from '@react-three/fiber';
import { MeshReflectorMaterial } from '@react-three/drei';
import { OCTAGON_DISTANCE } from '../App';

const Mirrors = () => {
    const { width } = useThree((state) => state.viewport);
    if (width <= 9) return null;
    return (
        <>
            <mesh rotation={[0, 1.4, 0]} position={[-10, 0, -OCTAGON_DISTANCE]}>
                <planeGeometry args={[150, 150]} />
                <MeshReflectorMaterial
                    blur={[300, 300]}
                    resolution={512}
                    mixBlur={2}
                    mixStrength={40}
                    roughness={2}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#030303"
                    metalness={0.5}
                />
            </mesh>
            <ambientLight intensity={0.1} />
            <mesh rotation={[0, -1.4, 0]} position={[10, 0, -OCTAGON_DISTANCE]}>
                <planeGeometry args={[150, 150]} />
                <MeshReflectorMaterial
                    blur={[300, 300]}
                    resolution={512}
                    mixBlur={2}
                    mixStrength={40}
                    roughness={2}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                />
            </mesh>
        </>
    );
}

export default Mirrors;
