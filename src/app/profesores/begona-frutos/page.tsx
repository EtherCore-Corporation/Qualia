"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function BegonaFrutos() {
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
                src="/begona.jpg" 
                alt="Begoña Frutos" 
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 section-title">Begoña Frutos Fuentes</h1>
            <p className="text-xl text-accent mb-2">Docente en el Departamento de Música, Voz y Lenguaje - RESAD</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.resad.es/voz-lenguaje.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                RESAD →
              </a>
              <a 
                href="https://eceactores.es/portfolio-item/begona-frutos/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                ECE Actores →
              </a>
            </div>
          </div>

          {/* Formación y Trayectoria */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formación */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Formación</h2>
              <ul className="space-y-4">
                <li>Licenciada en Interpretación por la RESAD</li>
                <li>Doctora en Fundamentos del Habla Escénica por la Universidad Carlos III de Madrid</li>
                <li>Estudios con maestros como:
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>• Eugenio Barba</li>
                    <li>• Vicente Fuentes</li>
                    <li>• Cicely Berry</li>
                    <li>• Kristin Linklater</li>
                    <li>• Sarah Kane</li>
                    <li>• Still Voice Craft I, II</li>
                    <li>• Serge Wilfar</li>
                    <li>• Pantheatre</li>
                    <li>• Teresa Berganza</li>
                    <li>• Maria Luisa Castellanos</li>
                    <li>• Gemma Reguant</li>
                    <li>• Carles Castillo</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Docencia */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Experiencia Docente</h2>
              <ul className="space-y-4">
                <li>Docente en el Departamento de Música, Voz y Lenguaje - RESAD</li>
                <li>Docente en la Escuela de Creación Escénica de Madrid</li>
                <li>Profesora Técnica Vocal - Universidad Europea de Madrid</li>
                <li>Profesora de Dicción Castellana - ESADIB</li>
                <li>Formación permanente para profesorado - Universidad Autónoma de Madrid</li>
                <li>Clases de Hablar en público para ONG, productoras y empresas privadas</li>
                <li>Asesora vocal en diversas compañías</li>
              </ul>
            </div>
          </div>

          {/* Publicaciones */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Publicaciones</h2>
            <ul className="space-y-4">
              <li>&ldquo;La enseñanza de la voz&rdquo; en el Eco de las voces - Centro de Documentación Teatral</li>
              <li>Colaboración en la grabación sonora de Don Juan de Tirso de Molina - Editorial Bolchiro</li>
              <li>Cuadernos de investigación escénica &ldquo;El actor del arte a la ciencia&rdquo; - Editorial Esadib</li>
              <li>Artículo &ldquo;La evolución del habla escénica contemporánea&rdquo; - Universidad de Barcelona</li>
              <li>Críticas teatrales para la revista Teatro Magazine Connecticut College</li>
              <li>Prólogos para manuales de voz y novelas</li>
            </ul>
          </div>

          {/* Trayectoria Artística */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Trayectoria Artística</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">Televisión y Medios</h3>
                <p>Ha trabajado en diversos cortos y documentales de televisión para TVE y A3MEDIA</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">Teatro</h3>
                <p className="mb-4">Producciones teatrales destacadas:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>La ópera de &ldquo;La Celestina&rdquo; - Teatro de la Zarzuela</li>
                  <li>&ldquo;La ópera de cuatro cuartos&rdquo; - Dir. Charo Amador</li>
                  <li>&ldquo;Después de la lluvia&rdquo; - Teatro Al Vuelo</li>
                  <li>&ldquo;Cinco mujeres con el mismo vestido&rdquo; - Dir. Celia León</li>
                  <li>&ldquo;La casa de Bernarda Alba&rdquo; - Dir. Óscar Miranda</li>
                  <li>&ldquo;Historias de la Vagina&rdquo; - Dir. Leyre Juan</li>
                  <li>&ldquo;Luces de Bohemia&rdquo;</li>
                  <li>&ldquo;La lengua en pedazos&rdquo; - Juan Mayorga</li>
                  <li>&ldquo;Muñecas de Cristal&rdquo;</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">Compañías</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Teatro Al Vuelo</li>
                  <li>Descalzo Producciones</li>
                  <li>ECE Compañía</li>
                  <li>La Boria Teatro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 