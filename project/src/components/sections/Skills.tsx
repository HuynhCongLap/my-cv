import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Card from '../ui/Card';
import { skillsData } from '../../data/skillsData';

const SkillBar: React.FC<{ name: string; level: number; color: string }> = ({ 
  name, 
  level, 
  color 
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!barRef.current) return;
    
    gsap.fromTo(
      barRef.current,
      { width: 0 },
      {
        width: `${level}%`,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: barRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [level]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-mono text-sm text-gray-300">{name}</span>
        <span className="font-mono text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div
          ref={barRef}
          className={`h-full rounded-full bg-${color}`}
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section id="skills" ref={sectionRef} className="section relative z-10 bg-dark-300/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-accent-blue glow-text">Technical</span> Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillsData.map((category, index) => (
            <Card 
              key={category.name} 
              glowColor={index % 4 === 0 ? 'cyan' : index % 4 === 1 ? 'purple' : index % 4 === 2 ? 'blue' : 'green'}
              className="skill-category"
            >
              <h3 className="text-xl font-bold mb-6">{category.name}</h3>
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;