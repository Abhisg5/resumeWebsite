import React from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

function Hallway() {
  // Load textures
  const floorTexture = useLoader(TextureLoader, "/textures/floor2.png");
  const wallTexture = useLoader(TextureLoader, "/textures/redtrack.jpg");
  const ceilingTexture = useLoader(TextureLoader, "/textures/ceiling.jpg");


  return (
    <>
      {/* Floor */}
      <mesh position={[0, -0.101, 10]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6.01, 20.01]} /> {/* Slightly larger to cover gaps */}
        <meshStandardMaterial map={floorTexture} />
      </mesh>

      {/* Walls */}
      <mesh position={[-3.005, 1.5, 10]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20.01, 5.01]} /> {/* Slight overlap to connect */}
        <meshStandardMaterial map={wallTexture} />
      </mesh>
      <mesh position={[3.005, 1.5, 10]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20.01, 5.01]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 3.005, 10]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.01, 20.01]} /> {/* Slightly larger to cover gaps */}
        <meshStandardMaterial map={ceilingTexture} />
      </mesh>

      {/* Lights */}
      <pointLight position={[0, 2.5, 2]} intensity={1} distance={10} />
      <pointLight position={[0, 2.5, 12]} intensity={1} distance={10} />

      {/* Decorative Details */}
      <mesh position={[-1.95, 2, 5]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.3, 0.6]} />
        <meshStandardMaterial color="#ffffff" emissive="#fff" emissiveIntensity={1} />
      </mesh>
      <mesh position={[1.95, 2, 15]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[0.3, 0.6]} />
        <meshStandardMaterial color="#ffffff" emissive="#fff" emissiveIntensity={1} />
      </mesh>
    </>
  );
}

export default Hallway;