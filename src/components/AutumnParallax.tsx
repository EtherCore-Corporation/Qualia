"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AutumnParallax: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Limpiar ScrollTriggers previos
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Crear hojas que caen completamente responsivas al scroll
    const createFallingLeaves = () => {
      const leafImages = ['3.png', '4.png', '5.png', '6.png', '7.png', '8.png'];
      const leaves: HTMLElement[] = [];
      const totalLeaves = 25; // Muchas más hojas
      
      // Crear múltiples instancias de hojas
      for (let i = 0; i < totalLeaves; i++) {
        const leafImage = leafImages[i % leafImages.length]; // Rotar entre las imágenes
        const index = i;
        
        // Crear elemento de hoja
        const leafElement = document.createElement('img');
        leafElement.src = `/${leafImage}`;
        
        // Posiciones iniciales más naturales (lados y arriba)
        const startSide = Math.random() > 0.5 ? 'left' : 'right'; // Lado de entrada
        let startX, startY;
        
        if (startSide === 'left') {
          startX = -20 + Math.random() * 30; // Entra desde la izquierda
        } else {
          startX = 90 + Math.random() * 30; // Entra desde la derecha
        }
        
        startY = -200 + Math.random() * 150; // Altura inicial más variable
        
        // HOJAS 5 VECES MÁS GRANDES
        const leafSize = 175 + Math.random() * 125; // 175-300px (era 35-60px)
        const windDirection = startSide === 'left' ? 1 : -1; // Dirección del viento
        const leafOpacity = 0.8 + Math.random() * 0.1; // Opacidad fija por hoja
        
        leafElement.style.cssText = `
          position: fixed;
          width: ${leafSize}px;
          height: ${leafSize}px;
          opacity: 0;
          z-index: 3;
          pointer-events: none;
          left: ${startX}%;
          top: ${startY}px;
          object-fit: contain;
        `;
        
        document.body.appendChild(leafElement);
        leaves.push(leafElement);

        // Verificar carga de imagen
        leafElement.onload = () => {
          // ScrollTrigger para toda la página
          ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2, // Ligeramente más suave
            onUpdate: (self) => {
              const progress = self.progress; // 0 a 1 basado en el scroll
              
              // Opacidad constante sin fade out
              const opacity = leafOpacity; // Usar la opacidad fija de la hoja
              
              // Movimiento vertical con variación natural
              const fallDistance = window.innerHeight + 400; // Más distancia para hojas grandes
              const baseY = startY + (progress * fallDistance);
              const verticalWobble = Math.sin(progress * Math.PI * (3 + index * 0.2)) * 25; // Más wobble
              const yPos = baseY + verticalWobble;
              
              // Movimiento horizontal como viento - más realista para hojas grandes
              const windStrength = 0.4 + (index * 0.05); // Intensidad variable
              const windFrequency = 1.2 + (index * 0.1); // Frecuencia variable
              
              // Viento principal (deriva general) - más fuerte para hojas grandes
              const mainWind = progress * windDirection * 50;
              
              // Ráfagas de viento (movimiento ondulante) - más pronunciado
              const windGusts = Math.sin(progress * Math.PI * windFrequency) * (35 * windStrength);
              
              // Turbulencias menores
              const turbulence = Math.sin(progress * Math.PI * (windFrequency * 3)) * (12 * windStrength);
              
              const finalX = startX + mainWind + windGusts + turbulence;
              
              // Rotación más natural - influenciada por el viento
              const baseRotation = progress * (80 + index * 15); // Rotación más lenta para hojas grandes
              const windRotation = Math.sin(progress * Math.PI * windFrequency) * 45;
              const rotation = baseRotation + windRotation;
              
              // Escala que varía ligeramente (perspectiva) - menos variación para hojas grandes
              const scale = 0.95 + Math.sin(progress * Math.PI * 1.5) * 0.1;
              
              // Aplicar transformaciones sin debug logs
              
              // Aplicar transformaciones
              gsap.set(leafElement, {
                y: yPos,
                x: `${finalX}%`,
                rotation: rotation,
                opacity: Math.max(0, Math.min(1, opacity)),
                scale: scale,
                ease: "none"
              });
            }
          });
        };

        leafElement.onerror = () => {
          // Error silencioso al cargar imagen
        };
      }

      return leaves;
    };

    // Crear hoja compañera que sigue el scroll suavemente
    const createCompanionLeaf = () => {
      const companionLeaf = document.createElement('img');
      companionLeaf.src = '/5.png';
      companionLeaf.style.cssText = `
        position: fixed;
        width: 60px;
        height: 60px;
        opacity: 0.9;
        z-index: 3;
        pointer-events: none;
        right: 8%;
        top: 50%;
        object-fit: contain;
      `;
      
      document.body.appendChild(companionLeaf);

      companionLeaf.onload = () => {
        // Animación de flotación suave
        gsap.to(companionLeaf, {
          y: "+=15",
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });

        // Seguimiento del scroll
        ScrollTrigger.create({
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Movimiento sutil basado en scroll
            const moveY = progress * 30 - 15; // Movimiento vertical sutil
            const moveX = Math.sin(progress * Math.PI * 3) * 8; // Movimiento horizontal sutil
            
            gsap.set(companionLeaf, {
              y: `+=${moveY * 0.1}`, // Movimiento muy sutil
              x: `+=${moveX * 0.1}`,
              rotation: progress * 20, // Rotación muy sutil
            });
          }
        });
      };

      return () => {
        companionLeaf.remove();
      };
    };

    // Ejecutar animaciones
    let cleanup: (() => void) | undefined;
    
    const initializeEffects = () => {
      const scrollLeaves = createFallingLeaves();
      cleanup = createCompanionLeaf();
      
      // Refrescar ScrollTrigger
      ScrollTrigger.refresh();
    };

    // Debug inicial
    console.log('🍂 AutumnParallax: Componente iniciado');
    
    // Inicializar después de que el DOM esté listo
    setTimeout(() => {
      initializeEffects();
    }, 100);

    // Cleanup general
    return () => {
      if (cleanup) cleanup();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // Limpiar hojas del DOM
      document.querySelectorAll('img[src*=".png"]').forEach(img => {
        const htmlImg = img as HTMLImageElement;
        if (htmlImg.style.position === 'fixed' && (htmlImg.style.zIndex === '6' || htmlImg.style.zIndex === '1' || htmlImg.style.zIndex === '3')) {
          htmlImg.remove();
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="autumn-parallax"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
    </div>
  );
};

export default AutumnParallax; 