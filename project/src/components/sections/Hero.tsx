import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AVATAR_SIZE = 150;

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(avatarRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    })
      .from(
        headingRef.current,
        {
          y: 26,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.42'
      )
      .from(
        subtitleRef.current,
        {
          y: 18,
          opacity: 0,
          duration: 0.65,
          ease: 'power3.out',
        },
        '-=0.33'
      )
      .set(
        [avatarRef.current, headingRef.current, subtitleRef.current],
        { opacity: 1 }
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="top" className="relative h-screen flex items-center justify-center px-4 z-40">
      <div className="relative max-w-2xl mx-auto text-center z-50 flex flex-col items-center">
        <div className="bg-black/95 backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl border border-white/10 w-full flex flex-col items-center relative overflow-hidden">

          {/* Avatar */}
          <div ref={avatarRef} className="flex justify-center mb-3">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              width={AVATAR_SIZE}
              height={AVATAR_SIZE}
              className="rounded-full border-4 border-cyan-400 object-cover shadow-md bg-zinc-900"
              style={{
                boxShadow: "0 0 0 4px #131a22, 0 2px 18px #01fff8a8",
              }}
            />
          </div>

          {/* 3D character on side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none select-none">
            {/* Add your 3D avatar here if needed */}
          </div>

          {/* Title */}
          <h1
            ref={headingRef}
            className="text-3xl md:text-5xl font-extrabold mb-2 font-mono text-accent-cyan tracking-tight glow-text"
          >
            Cong Lap HUYNH
          </h1>

          {/* Job */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-2xl mb-3 text-white font-semibold"
          >
            3D Generalist & WebGL Developer
          </p>

          {/* Subtitle */}
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Creating immersive digital experiences at the intersection of art and technology.
            <br />
            Specializing in real-time 3D graphics, WebGL, and creative coding.
          </p>

          <a
            href="https://fallingibex9.artstation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-fuchsia-500 hover:text-fuchsia-400 transition-colors text-sm font-mono"
          >
            View Artstation Portfolio →
          </a>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 w-screen flex justify-center z-50">
        <div className="flex flex-col items-center animate-bounce">
          <p className="text-sm text-gray-400 mb-2 font-mono">Scroll Down</p>
          <div className="w-5 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
