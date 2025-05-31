import { Sparkles, Cloud, Zap, Sunrise, Cpu } from "lucide-react"; // Dùng icon đẹp, hoặc HeroIcons
import React from "react";

const icons = [
  { key: "codeRain", icon: <Sparkles />, label: "Digital Rain" },
  { key: "stardust", icon: <Cloud />, label: "Stardust" },
  { key: "firefly", icon: <Zap />, label: "Fireflies" },
  { key: "aurora", icon: <Sunrise />, label: "Aurora" },
  { key: "tech", icon: <Cpu />, label: "Tech Fragments" },
] as const;

export type EffectKey = typeof icons[number]["key"];

const ParticlesMenu: React.FC<{
  selected: EffectKey;
  onSelect: (key: EffectKey) => void;
}> = ({ selected, onSelect }) => (
  <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center pointer-events-auto">
    {icons.map(({ key, icon, label }) => (
      <button
        key={key}
        aria-label={label}
        title={label}
        onClick={() => onSelect(key)}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition 
          bg-black/60 shadow-xl border-2
          ${selected === key
            ? "border-cyan-400 ring-2 ring-cyan-400 scale-110"
            : "border-gray-700 hover:scale-105 hover:border-cyan-300"
          }`}
        style={{ pointerEvents: "auto" }}
      >
        <span className="text-2xl text-cyan-200">{icon}</span>
      </button>
    ))}
  </div>
);

export default ParticlesMenu;
