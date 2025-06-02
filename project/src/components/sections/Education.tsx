import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../ui/Card';
import { educationData } from '../../data/educationData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EducationCard: React.FC<{
  degree: string;
  institution: string;
  date: string;
  description: string;
  glowColor: 'cyan' | 'purple' | 'blue' | 'green';
}> = ({ degree, institution, date, description, glowColor }) => {
  return (
    <Card glowColor={glowColor} className="h-full transform hover:-translate-y-2 transition-transform duration-300">
      <div className="flex flex-col h-full">
        <div className={`w-12 h-12 rounded-xl bg-${glowColor}/10 flex items-center justify-center mb-4`}>
          <GraduationCap className={`text-${glowColor}`} size={24} />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{degree}</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <Award size={16} className="text-gray-400" />
          <span className="text-accent-cyan">{institution}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        
        <p className="text-gray-300 flex-grow">{description}</p>
        
        <div className={`h-1 w-full mt-6 rounded-full bg-gradient-to-r ${
          glowColor === 'cyan' ? 'from-accent-cyan to-accent-blue' :
          glowColor === 'purple' ? 'from-accent-purple to-accent-blue' :
          glowColor === 'blue' ? 'from-accent-blue to-accent-cyan' :
          'from-accent-green to-accent-cyan'
        }`}></div>
      </div>
    </Card>
  );
};

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null); // NEW

  useEffect(() => {
    if (!cardsRef.current || !titleRef.current) return;

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Card animation
    const cards = cardsRef.current.querySelectorAll('.education-card');
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
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="education" ref={sectionRef} className="section relative z-10 bg-dark-300/50">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title"> {/* <- Add ref */}
          <span className="text-accent-cyan glow-text">Education</span> & Certifications
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <EducationCard {...edu} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
