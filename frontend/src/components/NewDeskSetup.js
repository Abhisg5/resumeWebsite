import React from "react";
import { useGLTF } from "@react-three/drei";

function NewDeskSetup() {
  const { scene } = useGLTF("/assets/models/dsk-nochair.glb"); // Path to the new model

  return (
    <primitive
      object={scene}
      position={[0, -0.1, 0]}
      rotation={[0, Math.PI / 2, 0]} // Rotate the desk 90 degrees
      scale={[1, 1, 1]}
    />
  );
}

export default NewDeskSetup;