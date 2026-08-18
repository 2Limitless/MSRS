"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type ViewState = "hub" | "character" | "frequency" | "story" | "civic" | "organizations";

export default function FloatingCards({ currentView }: { currentView: ViewState }) {
  const groupRef = useRef<THREE.Group>(null);
  const isCharacterView = currentView === "character";

  // Load the textures
  const [frontTexture, backTexture] = useTexture([
    "/cards/card-front.png",
    "/cards/card-back.png",
  ]);

  // Card Material Setup - Double Sided
  const materials = useMemo(() => {
    const front = new THREE.MeshStandardMaterial({
      map: frontTexture,
      roughness: 0.4,
      metalness: 0.1,
    });
    const back = new THREE.MeshStandardMaterial({
      map: backTexture,
      roughness: 0.4,
      metalness: 0.1,
    });
    const side = new THREE.MeshStandardMaterial({ color: "#E8D8C1" });
    
    // For a BoxGeometry: right, left, top, bottom, front, back
    return [side, side, side, side, front, back];
  }, [frontTexture, backTexture]);

  // Generate random initial states for 20 cards
  const cards = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      // Random starting positions (drifting in the background)
      startX: (Math.random() - 0.5) * 30,
      startY: (Math.random() - 0.5) * 20,
      startZ: (Math.random() - 0.5) * 20 - 10,
      // Random rotation speeds
      rotSpeedX: (Math.random() - 0.5) * 0.5,
      rotSpeedY: (Math.random() - 0.5) * 0.5,
      rotSpeedZ: (Math.random() - 0.5) * 0.5,
      // Deck target positions (forming a deck near the character camera)
      // Camera is at (-5, 0, 4), looking at (0,0,0)
      targetX: -6 + i * 0.02,
      targetY: -0.5,
      targetZ: 2 + i * 0.01,
      targetRotX: -0.2,
      targetRotY: 0.4,
      targetRotZ: 0.1,
    }));
  }, []);

  // Refs for each card mesh
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    
    cards.forEach((card, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;

      if (isCharacterView) {
        // Form a deck
        mesh.position.lerp(
          new THREE.Vector3(card.targetX, card.targetY, card.targetZ),
          delta * 2
        );
        mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, card.targetRotX, delta * 2);
        mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, card.targetRotY, delta * 2);
        mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, card.targetRotZ, delta * 2);
      } else {
        // Drift organically
        const driftX = card.startX + Math.sin(time * 0.2 + i) * 2;
        const driftY = card.startY + Math.cos(time * 0.3 + i) * 2;
        const driftZ = card.startZ + Math.sin(time * 0.1 + i) * 2;

        mesh.position.lerp(new THREE.Vector3(driftX, driftY, driftZ), delta * 1);
        mesh.rotation.x += card.rotSpeedX * delta;
        mesh.rotation.y += card.rotSpeedY * delta;
        mesh.rotation.z += card.rotSpeedZ * delta;
      }
    });
  });

  // Card geometry matching standard tarot/playing card aspect ratio (2.5 x 3.5 inches)
  const width = 1.5;
  const height = width * 1.4;
  const depth = 0.02;

  return (
    <group ref={groupRef}>
      {cards.map((card, i) => (
        <mesh
          key={card.id}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
          geometry={new THREE.BoxGeometry(width, height, depth)}
          material={materials}
          castShadow
          receiveShadow
        />
      ))}
    </group>
  );
}
