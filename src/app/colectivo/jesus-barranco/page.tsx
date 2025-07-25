"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function JesusBarranco() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <Link href="/colectivo" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
          ← Volver al Colectivo
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/30">
              <Image 
                src="/primo.jpg" 
                alt="Jesús Barranco" 
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 section-title">Jesús Barranco</h1>
            <p className="text-xl text-accent mb-2">Actor e investigador en Artes Vivas</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.accademiaspagna.org/portfolio/jesus-barranco/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                Academia de España →
              </a>
              <a 
                href="https://colectivoarmadillo.blogspot.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                Colectivo Armadillo →
              </a>
            </div>
          </div>

          {/* Formación y Trayectoria */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formación */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Formación</h2>
              <ul className="space-y-4">
                <li>Formado en el Teatro de Cámara de Madrid</li>
                <li>Practicante de Yoga Iyengar desde 2004</li>
                <li>Doctorando en Artes Vivas</li>
              </ul>
            </div>

            {/* Docencia */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Docencia</h2>
              <ul className="space-y-4">
                <li>Profesor de entrenamiento actoral en universidades de Madrid</li>
                <li>Docente en centros independientes</li>
              </ul>
            </div>
          </div>

          {/* Colectivos */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Colectivos Artísticos</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">Miembro Activo</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://colectivoarmadillo.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                      Colectivo Armadillo
                    </a>
                  </li>
                  <li>
                    <a href="https://losnumerosimaginarios.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                      Números Imaginarios
                    </a>
                  </li>
                  <li>
                    <a href="https://losbarbaros.es/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                      Los Bárbaros
                    </a> - Trilogía recién finalizada
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">Proyecto Fedón</h3>
                <p className="mb-4">
                  Coordinó un proyecto multidisciplinar entre los años 2004 y 2010 bajo el heterónimo Fedón.
                </p>
                <a href="https://www.ophelia.es/fedon/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                  Ver archivo del proyecto →
                </a>
              </div>
            </div>
          </div>

          {/* El Primo de Saint Tropez */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">El Primo de Saint Tropez</h2>
            <div className="space-y-6">
              <p className="text-lg">
                Heterónimo con el que el actor Jesús Barranco investiga y crea en el ámbito de las Artes Vivas desde 2016 en diálogo con largos retiros en monasterios Carmelitas Descalzos.
              </p>
              <p className="text-lg">
                Ha participado en 9 proyectos junto a otras creadoras contemporáneas, tanto laicas como religiosas, para espacios no convencionales entre lo sacro y lo profano, lo devocional y lo queer, lo político y lo contemplativo.
              </p>
              <a 
                href="https://www.instagram.com/el_primo_de_saint_tropez/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-4 text-accent hover:text-accent/80"
              >
                Seguir en Instagram →
              </a>
            </div>
          </div>

          {/* Trayectoria */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Trayectoria Artística</h2>
            <div className="space-y-4">
              <p>
                Actor en elencos de centros dramáticos estatales y en compañías independientes de creación contemporánea.
              </p>
              <p>
                Su trabajo se caracteriza por la investigación y exploración de nuevas formas de expresión teatral, combinando elementos tradicionales con aproximaciones contemporáneas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 