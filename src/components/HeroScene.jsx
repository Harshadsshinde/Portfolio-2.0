import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const group = useRef(null);
  const inner = useRef(null);
  const wire = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const px = state.pointer.x;
    const py = state.pointer.y;
    const scroll =
      typeof window !== "undefined" ? window.scrollY / 900 : 0;

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        px * 0.6 + t * 0.12,
        0.05
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -py * 0.4 + scroll * 0.6,
        0.05
      );
    }
    if (inner.current) inner.current.rotation.y += delta * 0.35;
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.18;
      wire.current.rotation.z += delta * 0.06;
    }
  });

  return (
    <group ref={group}>
      <Icosahedron ref={inner} args={[1.35, 1]}>
        <meshStandardMaterial
          color="#5e6ad2"
          metalness={0.75}
          roughness={0.22}
          flatShading
          emissive="#1a1e4d"
          emissiveIntensity={0.6}
        />
      </Icosahedron>

      <Icosahedron ref={wire} args={[2.05, 1]}>
        <meshBasicMaterial
          color="#5e6ad2"
          wireframe
          transparent
          opacity={0.16}
        />
      </Icosahedron>

      <Torus args={[2.9, 0.006, 12, 120]} rotation={[Math.PI / 2.4, 0.4, 0]}>
        <meshBasicMaterial color="#8a8f98" transparent opacity={0.35} />
      </Torus>
    </group>
  );
}

function Shards() {
  const group = useRef(null);
  const shards = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        pos: [
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4 - 1,
        ],
        size: 0.08 + Math.random() * 0.14,
        speed: 0.4 + Math.random() * 0.8,
        key: i,
      })),
    []
  );

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.04;
  });

  return (
    <group ref={group}>
      {shards.map((s) => (
        <Float
          key={s.key}
          speed={s.speed}
          rotationIntensity={1.4}
          floatIntensity={1.6}
        >
          <mesh position={s.pos}>
            <octahedronGeometry args={[s.size, 0]} />
            <meshStandardMaterial
              color="#c8cbd4"
              metalness={0.9}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={2.4} color="#cfd4ff" />
      <pointLight position={[-6, -3, -4]} intensity={60} color="#5e6ad2" />
      <pointLight position={[5, -4, 3]} intensity={30} color="#8a8f98" />
      <Core />
      <Shards />
    </Canvas>
  );
}
