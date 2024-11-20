import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";

function CameraAnimation({ walking, sittingPosition, sittingLookAt, zoom }) {
  const { camera } = useThree();

  useEffect(() => {
    if (walking) {
      const timeline = gsap.timeline();

      timeline.to(camera.position, {
        z: 3, // Move forward in the hallway
        duration: 7,
        ease: "none",
        onUpdate: () => {
          const progress = timeline.time();
          const walkingFrequency = 2;
          const verticalAmplitude = 0.03;
          const horizontalAmplitude = 0.02;

          camera.position.y = 1.2 + Math.sin(progress * Math.PI * walkingFrequency) * verticalAmplitude;
          camera.position.x = Math.sin(progress * Math.PI * walkingFrequency * 0.5) * horizontalAmplitude;
        },
      });
    } else if (sittingPosition) {
      // Move closer to the desk
      gsap.to(camera.position, {
        x: sittingPosition[0],
        y: sittingPosition[1],
        z: sittingPosition[2],
        duration: 1.5,
        ease: "power2.inOut",
      });

      gsap.to(camera.rotation, {
        duration: 1.5,
        onUpdate: () => {
          camera.lookAt(...sittingLookAt); // Ensure the camera looks at the table
        },
      });

      // Apply zoom by adjusting FOV
      if (zoom) {
        gsap.to(camera, {
          fov: 30, // Reduce FOV for zoom
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            camera.updateProjectionMatrix(); // Update camera projection
          },
        });
      }
    }
  }, [camera, walking, sittingPosition, sittingLookAt, zoom]);

  return null;
}

export default CameraAnimation;