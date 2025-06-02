export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

export const skillsData: SkillCategory[] = [
  {
    name: "3D & Graphics",
    skills: [
      { name: "Animating", level: 95, color: "bg-accent-cyan" },
      { name: "Rigging", level: 90, color: "bg-accent-blue" },
      { name: "Texturing", level: 85, color: "bg-accent-purple" },
      { name: "Modeling", level: 80, color: "bg-accent-green" },
      { name: "Skinning", level: 75, color: "bg-accent-yellow" },
      { name: "Sculpting", level: 95, color: "bg-accent-cyan" },
      { name: "3D Scanning", level: 90, color: "bg-accent-blue" },
      { name: "Scripting", level: 85, color: "bg-accent-purple" },
      { name: "Compositing", level: 80, color: "bg-accent-green" },
      { name: "VFX", level: 75, color: "bg-accent-yellow" },
    ]
  },
  {
    name: "Programming",
    skills: [
      { name: "JavaScript", level: 95, color: "bg-accent-yellow" },
      { name: "TypeScript", level: 90, color: "bg-accent-blue" },
      { name: "Python", level: 85, color: "bg-accent-cyan" },
      { name: "C++", level: 75, color: "bg-accent-green" },
      { name: "Webgl", level: 70, color: "bg-accent-purple" },
      { name: "Shader and GLSL", level: 95, color: "bg-accent-yellow" },
      { name: "React", level: 90, color: "bg-accent-blue" },
      { name: "Tailwind", level: 85, color: "bg-accent-cyan" },
      { name: "Gsap", level: 75, color: "bg-accent-green" },
      { name: "Figma", level: 70, color: "bg-accent-purple" },
    ]
  },
  {
    name: "Software",
    skills: [
      { name: "Blender", level: 100, color: "bg-accent-green" },
      { name: "Unreal engine", level: 85, color: "bg-accent-purple" },
      { name: "Substance Painter", level: 80, color: "bg-accent-cyan" },
      { name: "Substance Sampler", level: 75, color: "bg-accent-red" },
      { name: "Marvelous Designer", level: 70, color: "bg-accent-blue" },
      { name: "DaVinci Resolve", level: 90, color: "bg-accent-green" },
      { name: "Zbrush", level: 85, color: "bg-accent-purple" },
      { name: "Photoshop", level: 80, color: "bg-accent-cyan" },
      { name: "After Effect", level: 75, color: "bg-accent-red" },
      { name: "HDR Studio", level: 70, color: "bg-accent-blue" },
    ]
  },
  {
    name: "Other Technologies",
    skills: [
      { name: "Git", level: 90, color: "bg-accent-red" },
      { name: "WebXR", level: 85, color: "bg-accent-purple" },
      { name: "Performance Optimization", level: 85, color: "bg-accent-cyan" },
      { name: "Responsive Design", level: 80, color: "bg-accent-green" },
      { name: "Agile/Scrum", level: 75, color: "bg-accent-yellow" },
      { name: "CI/CD & Deployment", level: 75, color: "bg-accent-blue" },
      { name: "Unit Testing & Storybook", level: 70, color: "bg-accent-green" },
      { name: "npm / Yarn / pnpm", level: 80, color: "bg-accent-purple" },
      { name: "Vite / Webpack", level: 85, color: "bg-accent-cyan" },
      { name: "Figma to Code", level: 75, color: "bg-accent-yellow" }
    ]
  }
];
