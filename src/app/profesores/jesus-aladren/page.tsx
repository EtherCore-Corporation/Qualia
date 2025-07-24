"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function JesusAladren() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <Link href="/profesores" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
          ← Volver a Profesores
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/30">
              <Image 
                src="/jesus.jpg" 
                alt="Jesús Aladrén" 
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 section-title">Jesús Aladrén</h1>
            <p className="text-xl text-accent mb-2">Especialista en Ortofonía y Dicción</p>
          </div>

          {/* Formación */}
          <div className="mb-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Formación</h2>
            <div className="space-y-4">
              <p className="text-lg">
                En 1973 comienza sus estudios vocales en la disciplina de &ldquo;Ortofonía y Dicción&rdquo;, bajo la dirección de Pilar Francés y posteriormente con Eva Ader y Agustín García calvo.
              </p>
              <p className="text-lg">
                Su trabajo con el Doctor López Rico, especialista en otorrinolaringología, le llevará a una especialización en el tratamiento de patologías vocales.
              </p>
            </div>
          </div>

          {/* Experiencia Pedagógica */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Experiencia Pedagógica como Ortofonista</h2>
              <ul className="space-y-4">
                <li>Centro de estudios musicales y teatrales &ldquo;Musicvox&rdquo;</li>
                <li>Real Escuela Superior de Arte Dramático</li>
                <li>Escuela de Música y Teatro &ldquo;Orfeo&rdquo; (Director y fundador)</li>
                <li>Taller de teatro &ldquo;Tántara&rdquo;, en Madrid y Santiago de Compostela (director y fundador)</li>
                <li>Gabinete de investigación de la voz &ldquo;Tántara&rdquo; (director)</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Cursos de Ortofonía y Dicción</h2>
              <ul className="space-y-4">
                <li>Escuela Teatro Denok - Vitoria</li>
                <li>Masters de voz en:
                  <ul className="ml-4 mt-2">
                    <li>• Facultad de Ciencias de la información de Salamanca</li>
                    <li>• Universidad Autónoma de Madrid</li>
                  </ul>
                </li>
                <li>Instituto Británico</li>
                <li>Teatro Español</li>
                <li>Fundación &ldquo;AISGE&rdquo; Madrid</li>
                <li>Circulo de Bellas Artes Madrid</li>
                <li>Estudios de doblaje &ldquo;El Moro&rdquo; en Santiago de Compostela</li>
                <li>&ldquo;UR Teatro&rdquo; Rentería</li>
                <li>Cursos para actores, dobladores y locutores (INEM - Santiago de Compostela)</li>
                <li>Curso de oratoria para un grupo político</li>
              </ul>
            </div>
          </div>

          {/* Proyectos Destacados */}
          <div className="mt-8 space-y-8">
            {/* Teatro Español */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 section-title">Teatro Español</h3>
              <p className="mb-4">
                Curso de interpretación, dirección escénica y ortofonía abierto a profesionales de la escena Española.
              </p>
              <p className="mb-4">
                Impartido por:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>José Luis Gómez (dirección)</li>
                <li>Martín Adjemián (Interpretación)</li>
                <li>Jesús Aladrén (voz)</li>
              </ul>
              <p className="mt-4">
                El curso se impartió como enseñanza integral, ajustando el programa a las necesidades técnicas individuales del alumnado.
              </p>
            </div>

            {/* Instituto Británico */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 section-title">Instituto Británico</h3>
              <p className="mb-4">
                Curso intensivo dirigido a profesionales de la escena, centrado exclusivamente en textos de Shakespeare.
              </p>
              <p className="mb-4">
                Impartido por:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>David Perrin (director de la Royal Shakespeare)</li>
                <li>Jesús Aladrén (ortofonista)</li>
              </ul>
              <p className="mt-4">
                Entre los asistentes destacaron: Marisa Paredes, Jannine Mestre, Julieta Serrano y Carmen Maura.
              </p>
            </div>

            {/* El Moro */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 section-title">Empresa de doblaje &ldquo;El Moro&rdquo;</h3>
              <p className="mb-4">
                Durante los inicios del doblaje en Galicia, participó en la formación de profesionales.
              </p>
              <p className="mb-4">
                Los cursos fueron impartidos por:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>D. Daniel Dicenta</li>
                <li>Jesús Aladrén (ortofonista)</li>
              </ul>
              <p className="mt-4">
                El trabajo de Voz consistía en la enseñanza del acento y ritmo de la lengua Castellana, ya que en aquella época, el doblaje en Galicia se realizaba en Castellano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 