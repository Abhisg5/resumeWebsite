import React from "react";

function EnvironmentSetup() {
  return (
    <>
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.3} />

      {/* Directional light for shadows */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />


    </>
  );
}

export default EnvironmentSetup;