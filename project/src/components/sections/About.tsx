import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Card from '../ui/Card';
import { Code, Cpu, Palette, Globe } from 'lucide-react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);
  const aboutIntroRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animate heading
    if (aboutHeadingRef.current) {
      gsap.fromTo(
        aboutHeadingRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: aboutHeadingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Animate intro text
    if (aboutIntroRef.current) {
      gsap.fromTo(
        aboutIntroRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: aboutIntroRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Animate cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.about-card');
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section relative z-10">
      <div className="container mx-auto px-4">
        <h2 ref={aboutHeadingRef} className="section-title">
          <span className="text-accent-green glow-text">About</span> Me
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p
            ref={aboutIntroRef}
            className="text-lg text-center text-gray-300"
          >
            I'm a passionate 3D Generalist and WebGL Developer with over 6 years of experience
            creating immersive digital experiences. My expertise lies at the intersection of art and technology,
            where I blend creative vision with technical precision.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card glowColor="cyan" className="about-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-200 mb-4">
                <Code size={24} className="text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-2">WebGL Development</h3>
              <p className="text-gray-400">
                Building high-performance 3D web applications with ThreeJS and React.
              </p>
            </div>
          </Card>

          <Card glowColor="purple" className="about-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-200 mb-4">
                <Palette size={24} className="text-accent-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">3D Generalist</h3>
              <p className="text-gray-400">
                Creating optimized 3D assets and environments for real-time applications.
              </p>
            </div>
          </Card>

          <Card glowColor="blue" className="about-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-200 mb-4">
                <Cpu size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Direction</h3>
              <p className="text-gray-400">
                Leading technical implementation of creative visions and solving complex problems.
              </p>
            </div>
          </Card>

          <Card glowColor="green" className="about-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-200 mb-4">
                <Globe size={24} className="text-accent-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">AR/VR Development</h3>
              <p className="text-gray-400">
                Creating immersive experiences for augmented and virtual reality platforms.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
