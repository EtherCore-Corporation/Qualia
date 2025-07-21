"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger, SplitText);

const TextAnimations: React.FC = () => {
  useEffect(() => {
    console.log('📝 TextAnimations: Iniciando animaciones de texto...');

    // Limpiar animaciones previas
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id && trigger.vars.id.includes('text-')) {
        trigger.kill();
      }
    });

    // Función para dividir texto manualmente (fallback para SplitText)
    const splitTextManually = (element: HTMLElement, type: 'chars' | 'words' | 'lines') => {
      const text = element.textContent || '';
      let splitArray: string[] = [];
      
      if (type === 'chars') {
        splitArray = text.split('');
      } else if (type === 'words') {
        splitArray = text.split(' ');
      } else if (type === 'lines') {
        // Para líneas, dividimos por saltos de línea o cada ~40 caracteres
        const words = text.split(' ');
        let currentLine = '';
        splitArray = [];
        
        words.forEach((word, index) => {
          if (currentLine.length + word.length < 60) {
            currentLine += (currentLine ? ' ' : '') + word;
          } else {
            if (currentLine) splitArray.push(currentLine);
            currentLine = word;
          }
          
          if (index === words.length - 1 && currentLine) {
            splitArray.push(currentLine);
          }
        });
      }
      
      // Limpiar elemento y crear spans
      element.innerHTML = '';
      const spans: HTMLElement[] = [];
      
      splitArray.forEach((part, index) => {
        const span = document.createElement('span');
        span.textContent = part;
        span.className = type === 'chars' ? 'char-animate' : 
                        type === 'words' ? 'word-animate' : 'line-animate';
        
        if (type === 'words' && index < splitArray.length - 1) {
          span.textContent += ' '; // Añadir espacio entre palabras
        }
        
        element.appendChild(span);
        spans.push(span);
      });
      
      return spans;
    };

    // Función para animar títulos principales (H1, H2)
    const animateMainTitles = () => {
      const mainTitles = document.querySelectorAll('h1, h2');
      
      mainTitles.forEach((title, index) => {
        const titleElement = title as HTMLElement;
        
        // Evitar elementos ya procesados
        if (titleElement.classList.contains('text-animated')) return;
        titleElement.classList.add('text-animated');
        
        let chars: HTMLElement[] = [];
        
        try {
          // Intentar usar SplitText
          const split = new SplitText(titleElement, {
            type: "chars",
            charsClass: "char-animate"
          });
          chars = Array.from(split.chars) as HTMLElement[];
        } catch {
          // Fallback manual
          console.log('🔄 SplitText no disponible, usando división manual');
          chars = splitTextManually(titleElement, 'chars');
        }

        // Configurar estado inicial
        gsap.set(chars, {
          opacity: 0,
          y: 100,
          rotationX: -90,
          transformOrigin: "0% 50% -50px"
        });

        // Crear animación con ScrollTrigger
        ScrollTrigger.create({
          trigger: titleElement,
          start: "top 80%",
          end: "bottom 20%",
          id: `text-main-title-${index}`,
          onEnter: () => {
            gsap.to(chars, {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              stagger: {
                amount: 0.6,
                from: "start"
              }
            });
          },
          onLeave: () => {
            gsap.to(chars, {
              opacity: 0.3,
              duration: 0.3
            });
          },
          onEnterBack: () => {
            gsap.to(chars, {
              opacity: 1,
              duration: 0.3
            });
          }
        });
      });
    };

    // Función para animar subtítulos (H3, H4)
    const animateSubtitles = () => {
      const subtitles = document.querySelectorAll('h3, h4');
      
      subtitles.forEach((subtitle, index) => {
        const subtitleElement = subtitle as HTMLElement;
        
        // Evitar elementos ya procesados
        if (subtitleElement.classList.contains('text-animated')) return;
        subtitleElement.classList.add('text-animated');
        
        let words: HTMLElement[] = [];
        
        try {
          // Intentar usar SplitText
          const split = new SplitText(subtitleElement, {
            type: "words",
            wordsClass: "word-animate"
          });
          words = Array.from(split.words) as HTMLElement[];
        } catch {
          // Fallback manual
          words = splitTextManually(subtitleElement, 'words');
        }

        // Configurar estado inicial
        gsap.set(words, {
          opacity: 0,
          y: 50,
          scale: 0.8
        });

        // Crear animación con ScrollTrigger
        ScrollTrigger.create({
          trigger: subtitleElement,
          start: "top 85%",
          id: `text-subtitle-${index}`,
          onEnter: () => {
            gsap.to(words, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.1
            });
          }
        });
      });
    };

    // Función para animar párrafos (simplificada)
    const animateParagraphs = () => {
      const paragraphs = document.querySelectorAll('p:not(.no-animate)');
      
      paragraphs.forEach((paragraph, index) => {
        const paragraphElement = paragraph as HTMLElement;
        
        // Saltar si ya tiene animación o es muy pequeño
        if (paragraphElement.textContent && paragraphElement.textContent.length < 20) return;
        if (paragraphElement.classList.contains('text-animated')) return;
        paragraphElement.classList.add('text-animated');
        
        // Configurar estado inicial simple
        gsap.set(paragraphElement, {
          opacity: 0,
          y: 30
        });

        // Crear animación con ScrollTrigger
        ScrollTrigger.create({
          trigger: paragraphElement,
          start: "top 90%",
          id: `text-paragraph-${index}`,
          onEnter: () => {
            gsap.to(paragraphElement, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out"
            });
          }
        });
      });
    };

    // Función para animar blockquotes especiales
    const animateBlockquotes = () => {
      const blockquotes = document.querySelectorAll('blockquote');
      
      blockquotes.forEach((blockquote, index) => {
        const blockquoteElement = blockquote as HTMLElement;
        
        // Evitar elementos ya procesados
        if (blockquoteElement.classList.contains('text-animated')) return;
        blockquoteElement.classList.add('text-animated');
        
        let words: HTMLElement[] = [];
        
        try {
          // Intentar usar SplitText
          const split = new SplitText(blockquoteElement, {
            type: "words",
            wordsClass: "word-animate"
          });
          words = Array.from(split.words) as HTMLElement[];
        } catch {
          // Fallback: animar el elemento completo
          gsap.set(blockquoteElement, {
            opacity: 0,
            y: 50,
            filter: "blur(5px)"
          });

          ScrollTrigger.create({
            trigger: blockquoteElement,
            start: "top 75%",
            id: `text-blockquote-${index}`,
            onEnter: () => {
              gsap.to(blockquoteElement, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power2.out"
              });
            }
          });
          return;
        }

        // Configurar estado inicial para palabras
        gsap.set(words, {
          opacity: 0,
          y: 30,
          filter: "blur(10px)"
        });

        // Crear animación con ScrollTrigger
        ScrollTrigger.create({
          trigger: blockquoteElement,
          start: "top 75%",
          id: `text-blockquote-${index}`,
          onEnter: () => {
            gsap.to(words, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power2.out",
              stagger: {
                amount: 1.5,
                from: "start"
              }
            });
          }
        });
      });
    };

    // Función para animar elementos de lista y cards
    const animateCards = () => {
      const cards = document.querySelectorAll('.animate-fade-in, .animate-slide-in');
      
      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        
        // Evitar elementos ya procesados
        if (cardElement.classList.contains('text-animated')) return;
        cardElement.classList.add('text-animated');
        
        // Configurar estado inicial
        gsap.set(cardElement, {
          opacity: 0,
          y: 60,
          scale: 0.95
        });

        // Crear animación con ScrollTrigger
        ScrollTrigger.create({
          trigger: cardElement,
          start: "top 85%",
          id: `text-card-${index}`,
          onEnter: () => {
            gsap.to(cardElement, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: index * 0.1
            });
          }
        });
      });
    };

    // Ejecutar todas las animaciones después de un breve delay
    setTimeout(() => {
      animateMainTitles();
      animateSubtitles();
      animateParagraphs();
      animateBlockquotes();
      animateCards();
      
      // Refrescar ScrollTrigger
      ScrollTrigger.refresh();
      
      console.log('✨ TextAnimations: Todas las animaciones configuradas');
    }, 200);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.includes('text-')) {
          trigger.kill();
        }
      });
    };
  }, []);

  return null;
};

export default TextAnimations; 