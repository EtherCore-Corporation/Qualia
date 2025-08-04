"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function JesusBarranco() {
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
              <a href="/#que-es-qualia" className="hover:text-accent transition-colors">Qué es Qualia</a>
              <a href="/colectivo" className="hover:text-accent transition-colors">Colectivo Qualia</a>
              <a href="/#propuesta-investigacion" className="hover:text-accent transition-colors">Propuesta de investigación</a>
              <a href="/#inscripcion" className="hover:text-accent transition-colors">Inscripción</a>
              <a href="/#conecta" className="hover:text-accent transition-colors">Conecta con Qualia</a>
            </div>
          </div>
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
            <p className="text-lg md:text-xl text-accent mb-2">Actor e investigador en Artes Vivas</p>
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
              Heterónimo con el que El Primo Saint Tropez investiga y crea en el ámbito de las Artes Vivas en diálogo con largos retiros en monasterios Carmelitas.
            </p>
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