"use client";

import Link from 'next/link';

export default function PradoPinilla() {
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
              <img 
                src="/prado.jpg" 
                alt="Prado Pinilla" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 section-title">Prado Pinilla</h1>
            <p className="text-xl text-accent mb-2">Docente de la Escuela de Artes TAI</p>
            <a 
              href="https://taiarts.com/claustro/prado-pinilla/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-accent hover:text-accent/80 underline"
            >
              Ver perfil académico completo →
            </a>
          </div>

          {/* Biografía Íntima */}
          <div className="mb-16 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8 section-title">Biografía Íntima</h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-lg">
                Intento escribir una biografía sin apuntar lo académico, aun sabiendo que lo académico ha sido un reflejo escrupuloso de la desesperada búsqueda de mí.
              </p>
              <p className="mb-6 text-lg">
                A los 19 años, cuando frecuentaba la Universidad Politécnica de Arquitectura, una pregunta, y sus derivadas, comenzó a golpearme por dentro, y decidí atenderla: ¿Quién soy realmente? ¿Cómo he llegado hasta aquí? ¿Qué inercia ha dibujado el sendero que me ha traído y no reconozco como propio?
              </p>
              <p className="mb-6 text-lg">
                Esa voz fue tomando forma y fuerza dentro y fuera de mí.
              </p>
              <p className="mb-6 text-lg">
                Esa voz, mi voz, se convirtió en el Hilo de Ariadna que iba de mí al mundo y desde el mundo a mí…
              </p>
              <p className="mb-6 text-lg">
                Hoy sigo buscando formas aún desconocidas, primitivas, en las que la voz sigue siendo la expresión misteriosa y sagrada de la existencia…
              </p>
            </div>
          </div>

          {/* Formación y Trayectoria */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formación */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Formación</h2>
              <ul className="space-y-4">
                <li>Graduada en Artes Escénicas por la Universidad Rey Juan Carlos - Escuela Universitaria de Artes TAI</li>
                <li>Maestra acreditada en el Método Linklater - Linklater Center for Voice and Language</li>
                <li>Diplomada en Arte Dramático por la Scuola Internazionale di Teatro "Circo a Vapore"</li>
                <li>Curso de especialización para profesionales de la actuación en la Fundación Teatro de La Abadía</li>
              </ul>
            </div>

            {/* Especialidad y Asignaturas */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Especialidad y Docencia</h2>
              <h3 className="text-xl font-bold mb-4 text-accent">Especialidad</h3>
              <p className="mb-6">Profesora de voz y cuerpo titulada en el Método Linklater (EE.UU)</p>
              
              <h3 className="text-xl font-bold mb-4 text-accent">Asignaturas</h3>
              <ul className="space-y-2">
                <li><strong>Máster Universitario en Interpretación Audiovisual</strong>
                  <ul className="ml-4 mt-2">
                    <li>• Herramientas vocales aplicadas a la interpretación audiovisual</li>
                  </ul>
                </li>
                <li><strong>Grado en Artes Escénicas e Interpretación Audiovisual</strong>
                  <ul className="ml-4 mt-2">
                    <li>• Técnica vocal II</li>
                    <li>• Entrenamiento vocal</li>
                  </ul>
                </li>
                <li><strong>Diplomatura en Interpretación Audiovisual y Escénica</strong>
                  <ul className="ml-4 mt-2">
                    <li>• Expresión oral y voz II</li>
                    <li>• Módulo III. Escenas realistas</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Trayectoria Profesional */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Trayectoria Profesional</h2>
            <div className="space-y-6">
              <p>Ha participado en múltiples montajes de diferentes y diversos estilos y autores teatrales, entre los que destacan:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Y tú, ¿a quien traes? (dir. Alicia Soto)</li>
                <li>El Renacimiento de Iniesta (dir. musical Jesús Izquierdo; dir. artística Prado Pinilla)</li>
                <li>A saco (dir. Juan J.Afonso)</li>
                <li>Fisterra (dir. Patricia Torrero)</li>
                <li>Orfeo y Eurídice (dir. Marta Bautista)</li>
                <li>La Buena Persona de Sezuán (dir. Luis Blat)</li>
              </ul>

              <p>En el terreno de la relación música, poesía y escena, realiza espectáculos como:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>La luz de Dreyer, con composiciones de Sergio Blardony sobre la obra de Pilar Martín Gila</li>
                <li>La geometría y el temblor, con obras musicales de Blardony y Edith Alonso</li>
                <li>De la Belleza y la Locura, con la Cía. Hexacordo</li>
              </ul>
            </div>
          </div>

          {/* Reconocimientos */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Premios y Reconocimientos</h2>
            <ul className="space-y-4">
              <li>Nominada a los Premios de la Unión de Actores en la categoría de mejor actriz secundaria por Sargento Garzón en "A Saco"</li>
              <li>Nominada a los Premios Max como mejor actriz secundaria por Mi-Tzú en "La Buena Persona de Sezuán"</li>
              <li>Nominada a los Premios Max como mejor actriz de reparto por Madame Pimentón en "La Mujer de la Sinmemoria"</li>
            </ul>
          </div>

          {/* Otros Méritos */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Otros Méritos</h2>
            <ul className="space-y-4">
              <li>Cofundadora de la sociación cultural y artística La nave de los locos.</li>
              <li>Coordinadora y profesora de El Tapete (Taller Permanente de Teatro) en la UCM (1999-2007).</li>
              <li>Colaboradora del proyecto Integrarte (2004-2007), dirigido por David Ojeda.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 