import React, { useRef } from 'react';
import TimelineItem from '../ui/TimelineItem';
import { experienceData } from '../../data/experienceData';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section id="experience" ref={sectionRef} className="section relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-accent-purple glow-text">Work</span> Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((job) => (
            <TimelineItem
              key={job.id}
              date={job.date}
              title={job.title}
              company={job.company}
              description={job.description}
              isLeft={job.isLeft}
              glowColor={job.glowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;