import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Avatar from "./components/3d/Avatar";
import Education from "./components/sections/Education";
// Các hiệu ứng particles
import CodeRainParticles from "./components/3d/CodeRainParticles";
import StardustParticles from "./components/3d/StardustParticles";
import FireflyParticles from "./components/3d/FireflyParticles";
import AuroraParticles from "./components/3d/AuroraParticles";
import ParticlesMenu from "./components/ui/ParticlesMenu";

// Type cho các hiệu ứng
export type EffectKey =
  | "codeRain"
  | "stardust"
  | "firefly"
  | "aurora"

// Function map, cho phép truyền props đặc biệt vào từng effect
const effectMap: Record<EffectKey, (props?: any) => JSX.Element> = {
  codeRain: (props) => <CodeRainParticles {...props} />,
  stardust: (props) => (
    <StardustParticles count={1800} {...props} />
    // có thể truyền texture, màu, v.v ở đây
  ),
  firefly: (props) => <FireflyParticles {...props} />,
  aurora: (props) => <AuroraParticles {...props} />,
};

function App() {
  const [effect, setEffect] = useState<EffectKey>("codeRain");
  const ParticleEffect = effectMap[effect];

  return (
    <div className="relative min-h-screen bg-black text-gray-100 font-sans overflow-hidden">
      {/* Particles background */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ width: "100vw", height: "100vh" }}
          gl={{ antialias: true, alpha: true }}
        >
          {/* Truyền props cho từng hiệu ứng nếu muốn */}
          {ParticleEffect()}
        </Canvas>
      </div>

      {/* Avatar 3D nổi phía trước UI */}
      <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none flex items-center justify-center">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ width: "100vw", height: "100vh", pointerEvents: "none" }}
        >
          <Avatar />
        </Canvas>
      </div>

      {/* Menu chọn hiệu ứng */}
      <ParticlesMenu selected={effect} onSelect={setEffect} />

      {/* Nội dung chính */}
      <Layout>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
