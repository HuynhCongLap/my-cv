import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid';
import Card from './Card';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  description: string[];
  achievements?: string[];
  isLeft?: boolean;
  glowColor?: 'cyan' | 'purple' | 'blue' | 'green';
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  description,
  achievements = [],
  isLeft = false,
  glowColor = 'cyan',
  className = ''
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const dotColor =
    glowColor === 'cyan' ? 'bg-accent-cyan' :
    glowColor === 'purple' ? 'bg-accent-purple' :
    glowColor === 'blue' ? 'bg-accent-blue' :
    'bg-accent-green';

  return (
    <div
      ref={wrapperRef}
      className={`timeline-item grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] gap-2 items-center mb-12 max-w-6xl mx-auto px-4 ${className}`}
    >
      {/* Left Column */}
      <div className="flex justify-end">
        {isLeft ? (
          achievements.length > 0 && (
            <Card
              glowColor={glowColor}
              className="w-full max-w-[440px] bg-gray-800 border border-gray-700"
            >
              <h4 className="text-sm text-accent-cyan font-semibold mb-2">Key Achievements</h4>
              <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                {achievements.map((a, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <StarIcon className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )
        ) : (
          <Card glowColor={glowColor} className="w-full max-w-[440px]">
            <div className="text-sm font-mono text-gray-400 mb-1">{date}</div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            {company && <div className="text-accent-cyan mb-3">{company}</div>}
            <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
              {description.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      {/* Dot in center */}
      <div className="relative flex justify-center items-center h-full">
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-700" />
        <div className={`relative z-10 w-4 h-4 rounded-full ${dotColor}`} />
      </div>

      {/* Right Column */}
      <div className="flex justify-start">
        {!isLeft ? (
          achievements.length > 0 && (
            <Card
              glowColor={glowColor}
              className="w-full max-w-[440px] bg-gray-800 border border-gray-700"
            >
              <h4 className="text-sm text-accent-cyan font-semibold mb-2">Key Achievements</h4>
              <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                {achievements.map((a, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <StarIcon className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )
        ) : (
          <Card glowColor={glowColor} className="w-full max-w-[440px]">
            <div className="text-sm font-mono text-gray-400 mb-1">{date}</div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            {company && <div className="text-accent-cyan mb-3">{company}</div>}
            <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
              {description.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
