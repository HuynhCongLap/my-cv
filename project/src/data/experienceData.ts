export interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string[]; // <--- thay vì string
  achievements?: string[];
  isLeft: boolean;
  glowColor: 'cyan' | 'purple' | 'blue' | 'green';
}

export const experienceData: Experience[] = [
    {
    id: 1,
    title: "3D Front End Developer",
    company: "Metav.rs",
    date: "2022 - Present",
    description: [
      "Built high-quality 3D models, animations, shaders, and real-time renders in collaboration with the 3D team.",
      "Integrated AI technologies into the company's 3D viewer platform and improved its rendering performance",
      "Developed and optimized interactive 3D viewers using Three.js for Web, VR, and AR.",
      "Enhanced product experiences with custom shaders and visual effects.",
      "Automated Blender workflows using Python scripts.",
      "Delivered premium 3D visuals for luxury fashion and jewelry brands."
    ],
    achievements: [
      "Integrated 3D and VR product experiences for major brands (Vanessa Bruno, Maje, LVMH, YSL, Michelin, FC Bordeaux), driving increased user interaction and conversion.",
      "Developed 10+ internal Blender automation tools to streamline asset preparation for real-time rendering; select tools are being commercialized on BlenderMarket.",
      "Built an end-to-end pipeline to convert physical products into optimized 3D assets for WebGL, ensuring seamless deployment and high-performance visualization in browser and VR"
    ],
    isLeft: false,
    glowColor: "cyan"
  },
  {
    id: 2,
    title: "3D Developer",
    company: "Abys Medical",
    date: "2020 - 2022",
    description: [ "Developed advanced Python algorithms to generate patient-specific 3D bone models from medical scans, enabling real-time surgical planning and immersive VR visualization.",
      "Built a custom object-oriented 3D toolkit in Python to streamline mesh generation, editing, and optimization for surgical applications, reducing dev time and increasing workflow efficiency.",
      "Contributed to the front-end development of the surgical planning app using React and JavaScript, ensuring a smooth and intuitive user experience for surgeons."
    ],
    achievements: [
      "Contributed to a clinically tested surgical planning app validated in preclinical animal trials.",
      "Application featured in top media outlets such as Les Echos and Challenges – 100 Startups to Invest In.",
      "Secured medical certification and patent approval, enabling real-world clinical use in hospitals and surgical centers."
    ],
    isLeft: true,
    glowColor: "purple"
  },
  {
    id: 3,
    title: "Internship",
    company: "Eric Lab",
    date: "2019 - 2020",
    description: ["Developed a custom physical simulation environment using C++ for character–environment interaction testing.",
      "Researched force dynamics and collision responses between animated characters and simulated surroundings.",
      "Analyzed simulation data and proposed algorithms to improve stability and smoothness of physical interactions."
    ],
    achievements: [
      "Reduced noise and instability in foot-ground contact simulation.",
      "Improved overall simulator performance through algorithmic optimization.",
      "Enhanced character motion smoothness using derivative-based filtering techniques."
    ],
    isLeft: false,
    glowColor: "green"
  },
  {
    id: 4,
    title: "3D Generalist",
    company: "Freelancer",
    date: "2020 - Present",
    description: ["Delivered high-quality 3D assets for games, including modeling, texturing, rigging, and animation.",
      "Created stylized and realistic 3D animations, music videos, and cinematic sequences using Blender and industry-standard tools.",
      "Produced immersive 3D environments for virtual exhibitions, showrooms, and interactive experiences.",
      "Adapted to a wide range of 3D projects across games, marketing, art, and VR, collaborating closely with clients to meet visual and technical goals."
    ],
    achievements: [],
    isLeft: true,
    glowColor: "blue"
  }
];