"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Sparkles, Stars, PerspectiveCamera, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";
import FloatingCards from "./FloatingCards";

type ViewState = "hub" | "character" | "frequency" | "story" | "civic" | "organizations";

function CameraController({ currentView }: { currentView: ViewState }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < viewport.height;
  
  const targetPositions: Record<ViewState, THREE.Vector3> = {
    hub: new THREE.Vector3(0, 0, isMobile ? 18 : 10),
    character: new THREE.Vector3(isMobile ? 0 : -5, isMobile ? 4 : 0, isMobile ? 8 : 4),
    frequency: new THREE.Vector3(isMobile ? 0 : 5, isMobile ? 5 : 5, isMobile ? 10 : 5),
    story: new THREE.Vector3(0, isMobile ? 3 : -5, isMobile ? 10 : 6),
    civic: new THREE.Vector3(isMobile ? 0 : 8, isMobile ? 4 : -2, isMobile ? 12 : 8),
    organizations: new THREE.Vector3(isMobile ? 0 : 0, isMobile ? 2 : -4, isMobile ? 10 : 8),
  };

  useFrame((state, delta) => {
    if (cameraRef.current) {
      const targetPos = targetPositions[currentView];
      cameraRef.current.position.lerp(targetPos, delta * 2);
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={45} />;
}

// The central Master Card (replacing the energy ball)
function DiscoveryCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load textures for the master card
  const [frontTexture, backTexture] = useTexture([
    "/cards/card-front.png",
    "/cards/card-back.png",
  ]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle, majestic spin for the master card
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Card geometry matching standard tarot/playing card aspect ratio
  const width = 3.0; // Twice as big as regular floating cards (1.5)
  const height = width * 1.4;
  const depth = 0.05;

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        {/* Right, Left, Top, Bottom, Front, Back */}
        <meshStandardMaterial attach="material-0" color="#E8D8C1" />
        <meshStandardMaterial attach="material-1" color="#E8D8C1" />
        <meshStandardMaterial attach="material-2" color="#E8D8C1" />
        <meshStandardMaterial attach="material-3" color="#E8D8C1" />
        <meshStandardMaterial attach="material-4" map={frontTexture} roughness={0.4} metalness={0.1} />
        <meshStandardMaterial attach="material-5" map={backTexture} roughness={0.4} metalness={0.1} />
      </mesh>
    </Float>
  );
}

export default function HubScene({ currentView, onViewChange }: { currentView: ViewState, onViewChange: (v: ViewState) => void }) {
  return (
    <Canvas gl={{ powerPreference: "high-performance", antialias: false }}>
      <color attach="background" args={["#151713"]} />
      <CameraController currentView={currentView} />
      
      <ambientLight intensity={0.5} color="#E8D8C1" />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#B46F6C" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#7E8768" />
      
      <Environment preset="city" />

      <DiscoveryCore />
      <FloatingCards currentView={currentView} />
      
      {/* Background Particles representing the 'Library/Discovery' dust motes */}
      <Sparkles count={200} scale={15} size={2} speed={0.4} opacity={0.2} color="#F1E7D8" />
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.4} mipmapBlur intensity={1.5} />
        <Noise opacity={0.04} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}
