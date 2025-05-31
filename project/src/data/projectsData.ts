export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Immersive Product Configurator",
    description: "Interactive 3D product configurator allowing users to customize and view products in real-time with photorealistic rendering.",
    technologies: ["Three.js", "React", "GLSL", "WebGL"],
    imageUrl: "https://images.pexels.com/photos/8566440/pexels-photo-8566440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "WebXR Virtual Gallery",
    description: "Virtual art gallery experience allowing users to browse artwork in an immersive 3D environment, with support for VR headsets.",
    technologies: ["WebXR", "Three.js", "GSAP", "TypeScript"],
    imageUrl: "https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
    featured: true
  },
  {
    id: 3,
    title: "Interactive Data Visualization",
    description: "3D visualization of complex datasets, allowing users to explore and interact with information in an intuitive spatial interface.",
    technologies: ["D3.js", "Three.js", "React", "Node.js"],
    imageUrl: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 4,
    title: "Procedural Shader Demo",
    description: "Showcase of advanced GLSL shaders creating procedural textures and animations for real-time 3D applications.",
    technologies: ["GLSL", "WebGL", "Three.js"],
    imageUrl: "https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 5,
    title: "AR Product Visualization",
    description: "Augmented reality application allowing users to place and interact with virtual products in their real environment.",
    technologies: ["AR.js", "Three.js", "JavaScript"],
    imageUrl: "https://images.pexels.com/photos/6331209/pexels-photo-6331209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 6,
    title: "Real-time Character Customizer",
    description: "Web-based character creation and customization tool with real-time 3D preview and animation.",
    technologies: ["Three.js", "React", "TypeScript"],
    imageUrl: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  }
];