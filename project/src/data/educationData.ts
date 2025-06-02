export interface Education {
  id: number;
  degree: string;
  institution: string;
  date: string;
  description: string;
  glowColor: 'cyan' | 'purple' | 'blue' | 'green';
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Master in Computer Graphics and 3D Interaction (ID3D)",
    institution: "Université Claude Bernard Lyon 1",
    date: "2017 – 2019",
    description: "Specialized in 3D computer graphics, real-time rendering, and interactive systems. Covered topics such as WebGL, OpenGL, shader programming, C++ simulation engines, VR/AR development, and procedural generation.",
    glowColor: "cyan"
    },
  {
    id: 2,
    degree: "Bachelor's Degree in Computer Science",
    institution: "Université Claude Bernard Lyon 1",
    date: "2016 – 2018",
    description: "Focused on software development, algorithms, and system architecture. Built strong foundations in programming (C++, Java, Python), databases, and web development, preparing for advanced studies in 3D and real-time technologies.",
    glowColor: "purple"
  },
  {
    id: 3,
    degree: "Computer Science Program",
    institution: "University of Science - VNUHCM",
    date: "2014 – 2016",
    description: "Completed core coursework in computer science, including data structures, algorithms, and programming fundamentals. Built a strong technical foundation before transferring to continue studies in France.",
    glowColor: "blue"
  }
];