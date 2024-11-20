import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

function DeskSetup({ onChairClick }) {
  const { scene } = useGLTF("/assets/models/desk-setup.glb");

  useEffect(() => {
    // Traverse the scene to find the chair and make it interactive
    scene.traverse((child) => {
      console.log("Node name:", child.name); // Log node names to confirm
      if (child.name === "Officechair1228C6_StaticMeshComponent0") {
        child.userData.clickable = true; // Mark the chair as clickable
        console.log("Chair found and made clickable!");
      }
    });
  }, [scene]);

  return (
    <group>
      <primitive
        object={scene}
        position={[0, -0.1, 0]}
        rotation={[0, Math.PI / 2, 0]} // Rotate the desk 90 degrees
        scale={[1, 1, 1]}
      />
      {/* Transparent box for debugging (can be removed later) */}
      <mesh
        position={[-0.25, 0, 0.7]} // Adjust to match the chair's position
        onClick={onChairClick}
      >
        <boxGeometry args={[0.8, 2.1, 0.7]} />
        <meshStandardMaterial color="red" transparent opacity={0.0} />
      </mesh>
    </group>
  );
}

export default DeskSetup;