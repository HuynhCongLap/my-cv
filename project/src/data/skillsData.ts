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
      { name: "ThreeJS", level: 95, color: "accent-cyan" },
      { name: "WebGL", level: 90, color: "accent-blue" },
      { name: "GLSL Shaders", level: 85, color: "accent-purple" },
      { name: "Blender", level: 80, color: "accent-green" },
      { name: "Unity", level: 75, color: "accent-yellow" },
    ]
  },
  {
    name: "Programming",
    skills: [
      { name: "JavaScript", level: 95, color: "accent-yellow" },
      { name: "TypeScript", level: 90, color: "accent-blue" },
      { name: "React", level: 85, color: "accent-cyan" },
      { name: "Node.js", level: 75, color: "accent-green" },
      { name: "Python", level: 70, color: "accent-purple" },
    ]
  },
  {
    name: "Design & Animation",
    skills: [
      { name: "GSAP", level: 90, color: "accent-green" },
      { name: "Animation", level: 85, color: "accent-purple" },
      { name: "UI/UX Design", level: 80, color: "accent-cyan" },
      { name: "Adobe Suite", level: 75, color: "accent-red" },
      { name: "Motion Graphics", level: 70, color: "accent-blue" },
    ]
  },
  {
    name: "Other Technologies",
    skills: [
      { name: "Git", level: 90, color: "accent-red" },
      { name: "WebXR", level: 85, color: "accent-purple" },
      { name: "Performance Optimization", level: 85, color: "accent-cyan" },
      { name: "Responsive Design", level: 80, color: "accent-green" },
      { name: "Agile/Scrum", level: 75, color: "accent-yellow" },
    ]
  }
];