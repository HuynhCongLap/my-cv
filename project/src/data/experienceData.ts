export interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  isLeft: boolean;
  glowColor: 'cyan' | 'purple' | 'blue' | 'green';
}

export const experienceData: Experience[] = [
  {
    id: 1,
    title: "Senior 3D Technical Artist",
    company: "TechVision Studios",
    date: "2022 - Present",
    description: "Leading the technical implementation of 3D experiences for major clients. Developed WebGL-based interactive product configurators and AR experiences that increased user engagement by 45%.",
    isLeft: false,
    glowColor: "cyan"
  },
  {
    id: 2,
    title: "WebGL Developer",
    company: "Interactive Labs",
    date: "2020 - 2022",
    description: "Created high-performance 3D web applications using Three.js and custom GLSL shaders. Optimized 3D assets for web delivery, improving load times by 60% while maintaining visual quality.",
    isLeft: true,
    glowColor: "purple"
  },
  {
    id: 3,
    title: "Technical Artist",
    company: "GameCraft Studios",
    date: "2018 - 2020",
    description: "Bridged the gap between artists and developers, creating tools and workflows to streamline asset creation. Developed shaders and visual effects for real-time game environments.",
    isLeft: false,
    glowColor: "blue"
  },
  {
    id: 4,
    title: "3D Modeler & Animator",
    company: "Digital Design Co.",
    date: "2016 - 2018",
    description: "Created detailed 3D models and animations for various media projects. Specialized in character modeling and rigging for real-time applications.",
    isLeft: true,
    glowColor: "green"
  }
];