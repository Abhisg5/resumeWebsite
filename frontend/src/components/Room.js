import React from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

function Room() {
  // Load the backdrop texture
  const backdropTexture = useLoader(TextureLoader, "/textures/skyline2.png");
  const floorTexture = useLoader(TextureLoader, "/textures/floor2.png");
  const wallTexture  = useLoader(TextureLoader, "textures/redtrack.jpg")



  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial map={floorTexture}  />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 1.5, -3]} rotation={[0, 0, 0]}>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial map={backdropTexture} />
      </mesh>
  
      <mesh position={[3, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>
      <mesh position={[-3, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 10]} />
        <meshStandardMaterial color="#555" />
      </mesh>
    </>
  );
}

export default Room;