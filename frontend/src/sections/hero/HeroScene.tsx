import { Canvas } from "@react-three/fiber";

import { OrbitControls, useGLTF } from "@react-three/drei";

function GolemModel() {
  const { scene } = useGLTF("/models/golemModelPortfolio-transformed.glb");

  return (
    <primitive
      object={scene}
      scale={9.5}
      position={[0, -5.4, 0]}
      rotation={[0, Math.PI / 24, 0]}
    />
  );
}
useGLTF.preload("/models/golemModelPortfolio-transformed.glb");

const HeroScene = () => {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={1.2} />

      <directionalLight position={[5, 5, 5]} intensity={3} color="#ff6b00" />

      <GolemModel />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default HeroScene;
