import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TimelineItem from '../ui/TimelineItem';
import { experienceData } from '../../data/experienceData';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !itemsRef.current) return;

    // Animate title
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
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate timeline items
    const items = itemsRef.current.querySelectorAll('.timeline-item');

    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: itemsRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section relative z-10">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="section-title">
          <span className="text-accent-purple glow-text">Work</span> Experience
        </h2>

        <div ref={itemsRef} className="max-w-4xl mx-auto">
          {experienceData.map((job) => (
            <TimelineItem
              key={job.id}
              date={job.date}
              title={job.title}
              company={job.company}
              description={job.description}
              achievements={job.achievements}
              isLeft={job.isLeft}
              glowColor={job.glowColor}
              className="timeline-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
