"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AutumnScrollEffects: React.FC = () => {
  const effectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Crear partículas sutiles que responden al scroll
    const createScrollParticles = () => {
      const particles: HTMLElement[] = [];
      
      for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background-color: #d2691e;
          border-radius: 50%;
          opacity: 0.6;
          z-index: 2;
          pointer-events: none;
          left: ${20 + i * 30}%;
          top: 50%;
          box-shadow: 0 0 10px rgba(210, 105, 30, 0.6);
        `;
        
        document.body.appendChild(particle);
        particles.push(particle);

        // Movimiento suave basado en scroll
        gsap.to(particle, {
          y: "+=200",
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 2 + i,
          }
        });

        // Pulsación suave
        gsap.to(particle, {
          scale: 1.5,
          opacity: 0.8,
          duration: 2 + i * 0.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      return particles;
    };

    // Efecto de brillo en el scroll
    const createScrollGlow = () => {
      const handleScroll = () => {
        const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const glowIntensity = Math.sin(scrollPercent * Math.PI * 2) * 0.3 + 0.7;
        
        document.body.style.filter = `brightness(${glowIntensity})`;
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.filter = '';
      };
    };

    // Inicializar efectos
    const particles = createScrollParticles();
    const cleanupGlow = createScrollGlow();

    // Cleanup
    return () => {
      cleanupGlow();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={effectsRef}
      className="autumn-scroll-effects"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'hidden',
      }}
    />
  );
};

export default AutumnScrollEffects; 