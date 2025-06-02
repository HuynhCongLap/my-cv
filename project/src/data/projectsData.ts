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
    title: "Maje 3D Web Platform",
    description: "Developed and deployed an immersive 3D WebGL platform for Maje, integrating high-quality handbag models into a real-time viewer. Enabled VR and AR support for seamless product interaction directly on their website.",
    technologies: ["Three.js", "React", "GLSL", "WebXR", "WebGL"],
    imageUrl: "/projects/Maje.jpg", // ← đúng chuẩn khi ảnh nằm trong public/
    link: "https://fr.maje.com/fr/cabas-en-toile-imprimee-clover/3661601907753.html", // nếu bạn có link viewer cụ thể thì thay thế
    featured: true
  },
  {
    id: 2,
    title: "Vanessa Bruno 3D Experience",
    description: "Built a custom 3D web platform for Vanessa Bruno, showcasing interactive product models in real-time. Integrated VR/AR support for cross-device accessibility and a premium e-commerce experience.",
    technologies: ["Three.js", "React", "GLSL", "WebGL", "glTF", "VR", "AR"],
    imageUrl: "/projects/VanessaBruno.jpg", // ← bạn thay bằng đường dẫn thật
    link: "https://www.linkedin.com/posts/power-xyz_vanessa-bruno-x-powerxyz-check-out-our-activity-7245080754425106435-OfSZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbQMEkBx9ddnVFwQ79LkdUEN4Po3_E87Lo", // ← thay bằng link thật nếu có
    featured: true
  },
  {
    id: 3,
    title: "Ami Paris Interactive 3D Showcase",
    description: "Engineered a high-performance 3D viewer for Ami Paris, enabling real-time exploration of fashion accessories. Integrated with WebXR to support VR and AR modes, providing customers with an immersive shopping experience across web and mobile platforms.",
    technologies: ["D3.js", "Three.js", "React", "Node.js"],
    imageUrl: "/projects/ami.png",
    link: "https://www.linkedin.com/posts/power-xyz_powerxyz-for-ami-paris-very-glad-to-activity-7295335937050316800-wIBq?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbQMEkBx9ddnVFwQ79LkdUEN4Po3_E87Lo",
    featured: true
  },
  {
    id: 4,
    title: "Zadig & Voltaire 3D Commerce Platform",
    description: "Reshaped the e-commerce experience by integrating photorealistic 3D viewers directly on product pages. Developed reusable master 3D assets enabling multiple use cases such as AR previews, real-time configurators, and dynamic content generation for marketing visuals.",
    technologies: ["Three.js", "GLTF", "WebXR", "React", "GSAP", "Draco Compression"],
    imageUrl: "/projects/zadig.jpg",
    link: "https://www.linkedin.com/posts/clementfoucher_zadigvoltaire-and-powerxyz-are-reshaping-ugcPost-7273227160272715776--0gO?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbQMEkBx9ddnVFwQ79LkdUEN4Po3_E87Lo", // hoặc link đến viewer nếu có
    featured: true
  },
  {
    id: 6,
    title: "Surgiverse – Virtual Surgery Platform",
    description: "Built a high-fidelity virtual surgery simulation platform featuring real-time 3D interaction with anatomical models. Integrated WebGL, enabling surgeons and students to explore surgical procedures in an immersive and interactive environment.",
    technologies: ["Python", "React", "WebGL", "Medical Simulation", "VR"],
    imageUrl: "/projects/sugi.png", // thay thế bằng ảnh đặt trong public
    link: "https://surgiverse.ai/",
  },
  {
    id: 7,
    title: "3D Audio Visualizer – Web Music Player",
    description: "Developed a WebGL-powered online music player with real-time 3D audio visualizations. Integrated YouTube streaming, playlist management, and adaptive particle effects synced to music. Designed for performance on both desktop and mobile devices.",
    technologies: ["Three.js", "React", "WebGL", "GSAP", "Web Audio API", "Vite", "Tailwind CSS"],
    imageUrl: "/projects/musix.png", // đặt ảnh trong public
    link: "https://pinnymusixplayer.vercel.app/", // hoặc project link thật
  },
  {
    id: 8,
    title: "Pinny Audition – Rhythm Dance Web Game",
    description: "Built a rhythm-based 3D dance game inspired by Audition. Players hit arrow key combos in sync with the music to trigger dance animations. Developed with Three.js and React, featuring character animations, combo scoring, and mobile optimization.",
    technologies: ["Three.js", "React", "GLTF", "GSAP", "Web Audio API", "Vite", "Tailwind CSS"],
    imageUrl: "/projects/dance.png", // bạn để ảnh ở public folder
    link: "https://pinny-audition.vercel.app/",
  }
];