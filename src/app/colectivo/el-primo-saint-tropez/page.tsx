"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ElPrimoSaintTropez() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border" style={{zIndex: 50}}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/Logo original.png" 
                alt="Qualia Logo" 
                width={80}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/#que-es-qualia" className="hover:text-accent transition-colors">Qué es Qualia</Link>
              <Link href="/colectivo" className="hover:text-accent transition-colors">Colectivo Qualia</Link>
              <Link href="/#propuesta-investigacion" className="hover:text-accent transition-colors">Propuesta de investigación</Link>
              <Link href="/#inscripcion" className="hover:text-accent transition-colors">Inscripción</Link>
              <Link href="/#conecta" className="hover:text-accent transition-colors">Conecta con Qualia</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block w-full h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-2 pt-4">
                <Link 
                  href="/#que-es-qualia" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Qué es Qualia
                </Link>
                <Link 
                  href="/colectivo" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Colectivo Qualia
                </Link>
                <Link 
                  href="/#propuesta-investigacion" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Propuesta de investigación
                </Link>
                <Link 
                  href="/#inscripcion" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inscripción
                </Link>
                <Link 
                  href="/#conecta" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Conecta con Qualia
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 mt-20">
        <Link href="/colectivo" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
          ← Volver al Colectivo
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/30">
              <Image 
                src="/primo.jpg" 
                alt="El Primo Saint Tropez" 
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 section-title">El Primo Saint Tropez</h1>
            <p className="text-lg md:text-xl text-accent mb-1">Actor e investigador en Artes Vivas</p>
            <p className="text-sm font-semibold text-accent mb-2">Cofundador</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#" 
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                Ver formación académica →
              </a>
              <a 
                href="#" 
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                Ver biografía completa
              </a>
            </div>
          </div>

          {/* Heterónimo */}
          <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 section-title">Heterónimo</h2>
            <p className="text-base md:text-lg">
              Heterónimo con el que el actor Jesús Barranco investiga y crea en el ámbito de las Artes Vivas en diálogo con largos retiros en monasterios Carmelitas.
            </p>
          </div>

          {/* Biografía Íntima */}
          <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 section-title">Biografía Íntima</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Estoy convencido de que la palabra es liturgia en cada acto y desde que nací como heterónimo de un actor en una roca de la costa azul francesa he sido siempre resonador: de los barcos del puerto, del pecho de la madre de Jesús Barranco, de los hombros lascivos de todos los marinos con cara cúbica y del hueco de la campana del ángelus.
              </p>
              <p>
                Estoy convencido de que mi diafragma ha soportado cada dolor y cada gozo y sobre esa memoria he podido cantar y gritar.
              </p>
              <p>
                Ahora en la mediana edad de la vida entiendo con temeridad que se puede entrenar el cuerpo como instrumento para lo inasible, ser un mercenario para la voz y la palabra en busca de tantas poéticas escénicas como diversidades para el conocimiento.
              </p>
            </div>
          </div>

          {/* Trayectoria */}
          <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 section-title">Trayectoria</h2>
            <div className="space-y-4">
              <p className="text-base md:text-lg">
                Actor en elencos de centros dramáticos estatales y en compañías independientes de creación contemporánea.
              </p>
              <p className="text-base md:text-lg">
                Su trabajo se caracteriza por la investigación y exploración de nuevas formas de expresión teatral, combinando elementos tradicionales con aproximaciones contemporáneas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 