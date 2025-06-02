import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { projectsData } from '../../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  link,
  featured
}) => {
  return (
    <Card
      glowColor={featured ? 'purple' : 'blue'}
      className="overflow-hidden group h-full flex flex-col"
    >
      <div className="relative overflow-hidden mb-4 h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-mono bg-dark-200 rounded-md text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <a href={link} className="inline-block mt-auto" target="_blank" rel="noopener noreferrer">
        <Button
          size="sm"
          variant="outline"
          glowColor={featured ? 'purple' : 'blue'}
          className="w-full"
        >
          View Project
        </Button>
      </a>
    </Card>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!projectsRef.current) return;

    const projects = projectsRef.current.querySelectorAll('.project-card');

    gsap.fromTo(
      projects,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          delay: 0.2,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const featuredProjects = projectsData.filter((project) => project.featured);
  const regularProjects = projectsData.filter((project) => !project.featured);

  return (
    <section id="projects" ref={sectionRef} className="section relative z-10 bg-dark-300/50">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title">
          <span className="text-accent-cyan glow-text">Selected</span> Projects
        </h2>

        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 ref={subtitleRef} className="text-xl font-mono mb-6 text-center text-gray-400">
              Featured Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {featuredProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <ProjectCard {...project} featured />
                </div>
              ))}
            </div>
          </div>
        )}

        <div ref={projectsRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project) => (
              <div key={project.id} className="project-card">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
