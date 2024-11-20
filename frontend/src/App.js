import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import EnvironmentSetup from "./components/EnvironmentSetup";
import CameraAnimation from "./components/CameraAnimation";
import { useGLTF } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          padding: "11px 20px",
          fontSize: "16px",
          backgroundColor: "#444",
          borderRadius: "8px",
          color: "white",
          marginTop: "63px",
        }}
      >
        Loading
      </div>
    </Html>
  );
}

function App() {
  const [start, setStart] = useState(false);
  const [walking, setWalking] = useState(true);
  const [sitting, setSitting] = useState(false);
  const [showNewDesk, setShowNewDesk] = useState(false); // Control which desk is visible
  const [zoom, setZoom] = useState(false); // Control zoom effect

  // Pre-load both desks
  const oldDesk = useGLTF("/assets/models/desk-setup.glb");
  const newDesk = useGLTF("/assets/models/dsk-nochair.glb");

  const handleChairClick = () => {
    console.log("Chair clicked! Transitioning to sitting position.");
    setWalking(false); // Stop walking animation
    setSitting(true); // Start sitting animation
    setShowNewDesk(true); // Show the new desk
    setZoom(true); // Enable zoom effect
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setStart(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      {!start && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Welcome to Abhi's Website
          </h1>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#444",
              border: "none",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setStart(true)}
          >
            Start
          </button>
        </div>
      )}

      <Canvas
        shadows
        camera={{
          position: [0, 1.5, 10], // Starting position
          fov: 50,
        }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <React.Suspense fallback={<Loader />}>
          <EnvironmentSetup />
          <Hallway />
          <Room />
          {/* Render both desks, but control their visibility */}
          <primitive
            object={oldDesk.scene}
            position={[0, -0.1, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1, 1, 1]}
            visible={!showNewDesk} // Show only if the new desk is not visible
          />
                <mesh
        position={[-0.25, 0, 0.7]} // Adjust to match the chair's position
        onClick={handleChairClick}
      >
        <boxGeometry args={[0.8, 2.1, 0.7]} />
        <meshStandardMaterial color="red" transparent opacity={0.0} />
      </mesh>
          <primitive
            object={newDesk.scene}
            position={[0, -0.1, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1, 1, 1]}
            visible={showNewDesk} // Show only if the new desk is visible
          />
          {start && (
            <CameraAnimation
              walking={walking}
              sittingPosition={sitting ? [0, 3.3, 3.8] : null} // Adjust as needed
              sittingLookAt={sitting ? [0, 105, 0] : null}
              zoom={zoom} // Apply zoom effect
            />
          )}
          <OrbitControls />
        </React.Suspense>
      </Canvas>
    </div>
  );
}

export default App;