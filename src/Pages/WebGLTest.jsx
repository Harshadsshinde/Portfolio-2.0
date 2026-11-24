import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";

function Spinner() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.4;
    mesh.current.rotation.y += delta * 0.6;
  });
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1, 0.34, 220, 32]} />
        <meshStandardMaterial
          color="#5e6ad2"
          metalness={0.9}
          roughness={0.15}
          emissive="#2a2f6b"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

function detectWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

export default function WebGLTest() {
  const [supported, setSupported] = useState(null);
  const [rendered, setRendered] = useState(false);
  const glInfo = useMemo(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) return "none";
      const dbg = gl.getExtension("WEBGL_debug_renderer_info");
      return dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : "webgl ok";
    } catch {
      return "unknown";
    }
  }, []);

  useEffect(() => {
    setSupported(detectWebGL());
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "radial-gradient(circle at 50% 40%, #14162a, #08090a 70%)",
      }}
    >
      {supported && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]}
          onCreated={() => setRendered(true)}
          gl={{ antialias: true }}
        >
          <color attach="background" args={["#08090a"]} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={2} color="#a9b1ff" />
          <pointLight position={[-5, -3, -5]} intensity={40} color="#5e6ad2" />
          <Spinner />
          <Environment preset="city" />
          <OrbitControls enablePan={false} />
        </Canvas>
      )}

      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          fontFamily: "ui-monospace, monospace",
          fontSize: 13,
          lineHeight: 1.7,
          color: "#c8cbd4",
          background: "rgba(0,0,0,0.55)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12,
          padding: "14px 18px",
          backdropFilter: "blur(8px)",
          maxWidth: 360,
        }}
      >
        <div style={{ color: "#fff", fontWeight: 700, marginBottom: 6 }}>
          WebGL render test
        </div>
        <div>
          Support:{" "}
          <b style={{ color: supported ? "#7ee787" : "#ff7b72" }}>
            {supported === null ? "checking…" : supported ? "YES" : "NO"}
          </b>
        </div>
        <div>
          Canvas created:{" "}
          <b style={{ color: rendered ? "#7ee787" : "#e3b341" }}>
            {rendered ? "YES" : "…"}
          </b>
        </div>
        <div style={{ opacity: 0.7, wordBreak: "break-word" }}>
          Renderer: {glInfo}
        </div>
        <div style={{ marginTop: 8, opacity: 0.7 }}>
          You should see a spinning metallic knot. Drag to rotate.
        </div>
        <div style={{ marginTop: 8 }}>
          <b style={{ color: rendered ? "#7ee787" : "#e3b341" }}>
            {rendered
              ? "✓ Looks good — tell me to proceed."
              : "If you see nothing, tell me WebGL failed."}
          </b>
        </div>
      </div>
    </div>
  );
}
