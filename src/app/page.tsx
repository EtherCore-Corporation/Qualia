"use client";

import React, { useState } from 'react';
import AutumnParallax from '../components/AutumnParallax';
import TextAnimations from '../components/TextAnimations';
import ContactForm from '../components/ContactForm';
import { submitContactForm } from '../services/contact';
import Image from 'next/image';
import Link from 'next/link';
import { ContactFormData } from '../types/contact';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleContactSubmit = async (formData: ContactFormData) => {
    try {
      setIsSubmitting(true);
      await submitContactForm(formData);
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground parallax-container">
      {/* Autumn Parallax Effects */}
      <AutumnParallax />
      <TextAnimations />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border" style={{zIndex: 50}}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="/Logo original.png" 
                alt="Qualia Logo" 
                width={80}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#que-es-qualia" className="hover:text-accent transition-colors">Qué es Qualia</a>
              <a href="/colectivo" className="hover:text-accent transition-colors">Colectivo Qualia</a>
              <a href="#propuesta-investigacion" className="hover:text-accent transition-colors">Propuesta de investigación</a>
              <a href="#inscripcion" className="hover:text-accent transition-colors">Inscripción</a>
              <a href="#conecta" className="hover:text-accent transition-colors">Conecta con Qualia</a>
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
                <a 
                  href="#que-es-qualia" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Qué es Qualia
                </a>
                <Link 
                  href="/colectivo" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Colectivo Qualia
                </Link>
                <a 
                  href="#propuesta-investigacion" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Propuesta de investigación
                </a>
                <a 
                  href="#inscripcion" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inscripción
                </a>
                <a 
                  href="#conecta" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Conecta con Qualia
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen pt-16 pb-12 overflow-hidden" style={{zIndex: 10}}>
        {/* Árboles de otoño - ocupando toda la altura desde abajo hasta arriba */}
        <div className="absolute inset-y-0 left-0 w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] opacity-80" style={{zIndex: 2}}>
          <Image 
            src="/10.png" 
            alt="Autumn tree left" 
            width={500}
            height={800}
            className="w-full h-full object-contain object-bottom"
          />
        </div>
        <div className="hidden md:block absolute inset-y-0 right-0 w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] opacity-80 transform scale-x-[-1]" style={{zIndex: 2}}>
          <Image 
            src="/10.png" 
            alt="Autumn tree right" 
            width={500}
            height={800}
            className="w-full h-full object-contain object-bottom"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative h-full flex flex-col justify-center items-center" style={{zIndex: 5}}>
          <div className="mb-6 mt-16 md:mt-20">
            <Image 
              src="/Logo original.png" 
              alt="Qualia Logo" 
              width={400}
              height={200}
              priority
              className="h-32 md:h-44 lg:h-52 w-auto drop-shadow-lg"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Tagline */}
            <p className="text-lg md:text-2xl mb-3 autumn-text tracking-widest uppercase font-light">
              Voz · Silencio · Cuerpo · Palabra
            </p>
            <p className="text-base md:text-lg text-muted mb-8">
              Colectivo de investigación y creación en las <span className="qualia-text font-semibold">Artes Vivas</span>
            </p>

            {/* Quote */}
            <div className="mb-10 max-w-xl mx-auto">
              <blockquote className="text-lg md:text-xl italic text-muted" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>
                &ldquo;Parece que la experiencia íntima de las cosas concretas requiere una especie de coraje&rdquo;
                <footer className="text-sm mt-2 not-italic font-semibold text-accent">— Aristóteles</footer>
              </blockquote>
            </div>

            {/* Convocatoria badge */}
            <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-accent/40 bg-white/30 backdrop-blur-sm px-5 py-3">
              <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white" style={{backgroundColor: '#8b4513'}}>Convocatoria abierta</span>
              <span className="font-semibold text-foreground text-sm md:text-base">Los Gestos del Alma · 20–24 Julio 2026</span>
              <span className="text-sm text-muted">La Algueña, Alicante</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#inscripcion"
                className="inline-block px-8 py-3 rounded-full font-bold text-background text-lg transition-all hover:opacity-90 hover:scale-105 shadow-lg"
                style={{backgroundColor: '#8b4513'}}
              >
                Reserva tu plaza →
              </a>
              <a
                href="#propuesta-investigacion"
                className="inline-block px-6 py-3 rounded-full font-semibold border-2 border-accent/50 text-accent hover:bg-accent/10 transition-all text-base"
              >
                Conoce la propuesta ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-16 bg-background/85">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-secondary/90 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 font-serif">Cuerpo</h3>
              <p className="text-muted">El primer instrumento de conocimiento</p>
            </div>
            <div className="text-center p-8 bg-secondary/90 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 font-serif">Voz</h3>
              <p className="text-muted">La resonancia del ser en el espacio</p>
            </div>
            <div className="text-center p-8 bg-secondary/90 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 font-serif">Silencio</h3>
              <p className="text-muted">El territorio donde nacen las palabras</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <div className="bg-accent text-background py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="font-bold text-lg">Los Gestos del Alma</span>
              <span className="opacity-70">·</span>
              <span>20–24 Julio 2026</span>
              <span className="opacity-70">·</span>
              <span>La Algueña, Alicante</span>
              <span className="opacity-70">·</span>
              <span className="font-semibold">De 9 a 21 plazas</span>
            </div>
            <a
              href="#inscripcion"
              className="flex-shrink-0 bg-background text-accent font-bold px-5 py-2 rounded-full hover:bg-background/90 transition-colors text-sm"
            >
              Inscríbete ahora
            </a>
          </div>
        </div>
      </div>

      {/* About QUALIA */}
      <section id="que-es-qualia" className="py-16 bg-secondary/85">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center section-title">Qué es Qualia</h2>
            
            {/* Introducción principal */}
            <div className="mb-12 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <p className="text-xl leading-relaxed mb-6 animate-slide-in text-center">
                Es el espacio de la pregunta.. del juego.. de la indagación.. de la resonancia.. de la presencia. 
                Donde esas <strong>sensaciones únicas y singulares</strong> que cada uno siente de manera particular 
                tras una experiencia consciente, que involucran una especie de &lsquo;fenomenología&rsquo;, que hacen 
                referencia a <strong>cualidades subjetivas y cualitativas</strong> de la propia experiencia, y que no 
                siempre se pueden describir, puedan ser contempladas y resignificadas.
              </p>
              <p className="text-lg leading-relaxed animate-slide-in text-center italic">
                Para crear un espacio de escucha, <span className="qualia-text">Qualia</span>, en donde el silencio pueda desvelarnos sus 
                secretos desde las voces que somos, iniciamos, con mucho cariño y alegría, este proyecto de 
                encuentros con la voz propia. Un encuentro puntual y veraniego.
              </p>
            </div>

            {/* El Colectivo */}
            <div id="colectivo" className="mb-12">
              <h3 className="text-3xl font-bold mb-8 text-center section-title">Colectivo Qualia</h3>
              <div className="mb-12 p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/15 rounded-3xl">
                <p className="text-lg leading-relaxed animate-slide-in mb-6">
                  El Colectivo <span className="qualia-text">Qualia</span> se conforma inicialmente como un <strong>proyecto de creación y experimentación</strong> con la 
                  Voz y la Palabra desde cinco trayectorias y estéticas diferentes -con recorridos profesionales 
                  y vitales vinculados al arte de la escena- que desean consolidar un <strong>entrenamiento vocal 
                  para las Artes Vivas</strong>.
                </p>
                <p className="text-lg leading-relaxed animate-slide-in">
                  Reúne a <strong>cinco individualidades</strong>, que se abren a la investigación de la escucha entre 
                  el sonido y el silencio, proponiendo cinco búsquedas entrelazadas con el propósito de dibujar
                  <strong> nuevas cartografías del territorio de la voz</strong> y del uso de la palabra…
                </p>
              </div>

              {/* Miembros del Colectivo - Nueva disposición */}
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Jesús Aladrén */}
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                      <Image 
                        src="/jesus.jpg" 
                        alt="Jesús Aladrén" 
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 section-title">Jesús Aladrén</h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      Investigador de las dimensiones rítmicas y temporales en la expresión artística.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a href="https://www.example.com/jesus-aladren" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                        Ver formación académica →
                      </a>
                      <a href="/colectivo/jesus-aladren" className="inline-block bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
                        Ver biografía completa
                      </a>
                    </div>
                  </div>
                </div>

                {/* Begoña Frutos */}
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                      <Image 
                        src="/begona.jpg" 
                        alt="Begoña Frutos" 
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 section-title">Begoña Frutos</h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      Actriz y docente que transita entre el escenario, el aula y la investigación, para construir un legado de sensibilidad hacia la palabra hablada.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a href="https://www.resad.es/voz-lenguaje.html" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                        Ver formación académica →
                      </a>
                      <a href="/colectivo/begona-frutos" className="inline-block bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
                        Ver biografía completa
                      </a>
                    </div>
                    <p className="text-sm font-semibold text-accent mt-2">Cofundador</p>
                  </div>
                </div>

                {/* Prado Pinilla */}
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                      <Image 
                        src="/prado.jpg" 
                        alt="Prado Pinilla" 
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 section-title">Prado Pinilla</h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      En la actualidad, una mujer empeñada en transmitir a sus alumnas/os la pasión o, mejor dicho, la necesidad de encontrar en la expresión sonora una genuina condición de libertad. Actriz y docente.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a href="https://taiarts.com/claustro/prado-pinilla/" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                        Ver formación académica →
                      </a>
                      <a href="/colectivo/prado-pinilla" className="inline-block bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
                        Ver biografía completa
                      </a>
                    </div>
                    <p className="text-sm font-semibold text-accent mt-2">Cofundador</p>
                  </div>
                </div>

                {/* Yolanda Ulloa */}
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                      <Image 
                        src="/Yolanda.jpg" 
                        alt="Yolanda Ulloa" 
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 section-title">Yolanda Ulloa</h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      Madre, actriz (según la escuela de Rudolf Steiner y Michael Chejov) y terapeuta biográfica. Profesional del Arte de la Palabra o Sprachgestaltung y creadora de la Escuela de voz del Arte de la Palabra Creativa.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a href="https://www.yolandaulloa.es" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                        Ver formación académica →
                      </a>
                      <a href="/colectivo/yolanda-ulloa" className="inline-block bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
                        Ver biografía completa
                      </a>
                    </div>
                    <p className="text-sm font-semibold text-accent mt-2">Fundadora de Espacio Qualia</p>
                  </div>
                </div>

                {/* El Primo Saint Tropez */}
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                      <Image 
                        src="/primo.jpg" 
                        alt="El Primo Saint Tropez" 
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 section-title">El Primo Saint Tropez</h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      Heterónimo con el que el actor El Primo Saint Tropez investiga y crea en el ámbito de las Artes Vivas en diálogo con largos retiros en monasterios Carmelitas.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                        Ver formación académica →
                      </a>
                      <a href="/colectivo/el-primo-saint-tropez" className="inline-block bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
                        Ver biografía completa
                      </a>
                    </div>
                    <p className="text-sm font-semibold text-accent mt-2">Cofundador</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section id="propuesta-investigacion" className="py-16 bg-background/85">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center section-title break-words">
            <span className="hidden sm:inline">Propuesta de Investigación Verano 2026</span>
            <span className="sm:hidden">Propuesta de Investigación Verano 2026</span>
          </h2>

          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 section-title">Los gestos del Alma</h3>
              <p className="text-sm text-accent mt-1 mb-4 font-semibold">de Yolanda Ulloa</p>
              <p className="text-sm leading-relaxed">
                Indagar en la conformación de nuestros movimientos y disposiciones internas en relación con uno mismo, con el otro y con lo otro. Poder observar cómo se yergue en el alma una respuesta al mundo, cómo entra en conversación con cuanto le rodea por fuera, con cuanto emerge en su interior. Reconocer y contemplar la naturaleza de la gesticulación del alma y de su voz en nosotros.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 section-title">Los gestos del Cuerpo</h3>
              <p className="text-sm text-accent mt-1 mb-4 font-semibold">de Prado Pinilla</p>
              <p className="text-sm leading-relaxed">
                Al modificar las estructuras de soporte-apoyo del cuerpo se transmite nueva información al resto de estructuras psicofísicas, dinamizando la aparición y el descubrimiento de gestos internos diversos capaces de convocar otras voces…
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 section-title">El ritmo de la voz, la voz en movimiento</h3>
              <p className="text-sm text-accent mt-1 mb-4 font-semibold">de Jesús Aladrén</p>
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-accent mb-1">El cuerpo y sus equilibrios</p>
                  <p>Centro energético</p>
                  <p>El eje corporal</p>
                  <p>Lateralidades</p>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-1">Elementos de la voz interaccionados</p>
                  <p>Aparato respiratorio</p>
                  <p>Aparato fonador</p>
                  <p>Aparato resonador</p>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-1">Propiedades del sonido</p>
                  <p>Tono</p>
                  <p>Timbre</p>
                  <p>Cantidad</p>
                  <p>Intensidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dónde Section */}
      <section className="py-16 bg-secondary/85">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center section-title">Dónde</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* La Algueña */}
            <div className="mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 section-title">La Algueña, Alicante</h3>
                  <p className="text-xl text-accent mb-4">Sede de la convocatoria Verano 2026</p>
                  <p className="text-lg text-muted">
                    Un pueblo con encanto especial donde confluyen la tradición y la creatividad
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Image 
                    src="/1320190343-cor-016-casa-musica-music-house-alguena-39.jpg" 
                    alt="La Algueña - Espacio de trabajo"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                  <Image 
                    src="/cor_016_hq_casa_musica_music_house_alguena_11.jpg" 
                    alt="La Algueña - Ambiente del taller"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inscripción Section */}
      <section id="inscripcion" className="py-20 bg-background/85 relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 section-title">Inscripción</h2>
            <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-accent/30 bg-white/40 px-4 py-3 backdrop-blur-sm">
              <span className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white" style={{backgroundColor: '#8b4513'}}>Convocatoria 2026 abierta</span>
              <span className="text-sm text-muted">Plazas limitadas · Confirmación por orden de reserva</span>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a href="#conecta" className="inline-flex items-center rounded-lg border border-accent/30 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/10 transition-colors">
                Resolver dudas antes de inscribirte
              </a>
              <Link href="/alojamiento" className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
                Ver alojamiento y comida
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Detalles del Taller */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">📅</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center section-title">Detalles del Taller</h3>
                <div className="mb-6 overflow-hidden rounded-xl border border-white/20">
                  <Image
                    src="/1320190343-cor-016-casa-musica-music-house-alguena-39.jpg"
                    alt="La Algueña, sede de la convocatoria 2026"
                    width={800}
                    height={360}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Sede:</span>
                    <span className="text-accent">La Algueña, Alicante</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Fechas:</span>
                    <span className="text-accent">20 Jul - 24 Jul 2026</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Recepción e inicio:</span>
                    <span className="text-accent">20 Jul 17:00h</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Recapitulación y cierre:</span>
                    <span className="text-accent">24 Jul 13:30h</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Precio total:</span>
                    <span className="text-accent">240€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Reserva (50%):</span>
                    <span className="text-accent font-bold">120€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Plazas:</span>
                    <span className="text-accent">de 9 a 21 personas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cómo inscribirse */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">✍️</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center section-title">Cómo inscribirse</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-accent font-bold">1</span>
                    </div>
                    <p className="text-sm">Realiza el pago de <strong>120€</strong> para reservar tu plaza</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <p className="text-sm">Envía el comprobante a <strong>contacto@espacioqualia.com</strong> o por WhatsApp</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-accent font-bold">3</span>
                    </div>
                    <p className="text-sm">Completar el pago <strong>en metálico el primer día del taller</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Forma de pago */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">💳</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center section-title">Forma de pago</h3>
                
                {/* Bizum */}
                <div className="mb-6 p-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl border border-accent/30">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📱</span>
                    <h4 className="text-lg font-bold font-serif">Bizum</h4>
                  </div>
                  <p className="text-sm text-muted mb-2">Pago rápido y seguro</p>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="font-mono text-accent font-bold text-lg text-center">
                      629 307 684
                    </p>
                  </div>
                </div>

                {/* Transferencia */}
                <div className="p-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl border border-accent/30">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🏦</span>
                    <h4 className="text-lg font-bold font-serif">Transferencia Bancaria</h4>
                  </div>
                  <p className="text-sm text-muted mb-3">Para reservas y pagos completos</p>
                  <div className="bg-white/20 rounded-lg p-3 space-y-2">
                    <div className="text-center">
                      <p className="text-xs text-muted">Titular:</p>
                      <p className="font-mono text-accent font-bold">
                        Yolanda Alvarez Ulloa
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted">Banco:</p>
                      <p className="font-mono text-accent font-bold">
                        Caixabank
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted">IBAN:</p>
                      <p className="font-mono text-accent font-bold">
                        ES43 2100 3392 7013 0043 7984
                      </p>
                    </div>
                    <div className="text-center pt-2 border-t border-white/20">
                      <p className="text-xs text-muted">Concepto:</p>
                      <p className="font-semibold text-sm">Qualia - [Tu Nombre]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alojamiento y Comida */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">🏡</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center section-title">Alojamiento y Comida</h3>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  El precio del taller (240€) <strong>no incluye alojamiento ni comidas</strong>. 
                  Deberás gestionar tu reserva directamente con el establecimiento elegido.
                </p>
                <p className="text-sm text-muted mb-6">
                  Hemos preparado información detallada sobre todas las opciones de alojamiento y comida disponibles.
                </p>
                <div className="flex flex-col items-center gap-4">
                  <Link 
                    href="/alojamiento" 
                    className="inline-flex items-center gap-2 bg-accent text-background px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    🏡 Ver opciones de alojamiento
                  </Link>
                  <p className="text-sm text-accent">
                    Para más información, contacta con nosotros por correo o WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA puente hacia testimonios */}
      <div className="py-12 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-serif italic text-foreground mb-4">
            &ldquo;Una experiencia que no se olvida. Que sigue creciendo dentro de ti.&rdquo;
          </p>
          <p className="text-muted mb-6">Esto es lo que dicen quienes ya vivieron Qualia en La Algueña.</p>
          <a
            href="#inscripcion"
            className="inline-block px-8 py-3 rounded-full font-bold text-background transition-all hover:opacity-90"
            style={{backgroundColor: '#8b4513'}}
          >
            Quiero vivir esta experiencia →
          </a>
        </div>
      </div>

      {/* Testimonios */}
      <section className="py-16 bg-secondary/60">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center font-serif">Voces de Qualia</h2>
          <p className="text-center text-muted text-lg mb-12">Testimonios de participantes — La Algueña, verano 2025</p>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

            <div className="p-8 bg-white/60 border border-border rounded-3xl">
              <p className="text-lg leading-relaxed mb-6 italic">
                &ldquo;Esos días siguen con la misma frescura en mí cada día. Siento que, sin darme cuenta, desarrollé un sentimiento más profundo de mí misma, es como que me siento más cerca de mi alma, mi esencia, mi algo en mí. Y me siento muy feliz cada día. Un sentido de bienestar que es difícil de explicar. Soy más consciente, sobre todo de lo que no se ve, mi voz, un gesto, una sonrisa interior, la entonación, el comienzo de un movimiento, los silencios entre palabras, lo sutil&hellip;&rdquo;
              </p>
              <p className="font-semibold text-accent">Toñi Aragosa</p>
            </div>

            <div className="p-8 bg-white/60 border border-border rounded-3xl">
              <p className="text-lg leading-relaxed mb-6 italic">
                &ldquo;La experiencia de Qualia en La Algueña el verano del 25 fue como un reconstituyente, me alegró por dentro y fue como revisitar mis años de formación en la ESAD de Valencia pero en otra dimensión. Se reavivó el gusto por el trabajo bien hecho y dio nuevos bríos a la labor en torno al método sistémico que vengo desarrollando desde hace ya muchos años.&rdquo;
              </p>
              <p className="font-semibold text-accent">Sebastián Antón</p>
              <p className="text-sm text-muted">Asesor sistémico</p>
            </div>

            <div className="p-8 bg-white/60 border border-border rounded-3xl">
              <p className="text-lg leading-relaxed mb-6 italic">
                &ldquo;Qualia ha sido para mí una experiencia de expansión y exploración interior que me ha llevado a confiar más en el misterio que me habita y me rodea. Se ha instalado en mi interior como una semilla que germina y crece cada día dándome el impulso necesario para instalarme en el mundo desde lo que soy. Me ha abierto la voz, el movimiento y la expresión desde la fluidez, la expansión, la presencia, la observación y el silencio.&rdquo;
              </p>
              <p className="font-semibold text-accent">Ariane Gómez</p>
            </div>

            <div className="p-8 bg-white/60 border border-border rounded-3xl">
              <p className="text-lg leading-relaxed mb-6 italic">
                &ldquo;A nivel profesional me ha permitido incorporar el concepto de &lsquo;caminar la palabra&rsquo; a mis entrenamientos de hablar en público. Eso supone disfrutar más de cada paso, ser conscientes de qué estamos haciendo en cada momento&hellip; Yo he aplicado la técnica y el concepto de &lsquo;caminar la palabra&rsquo; para tomar conciencia y disfrutar más cada paso del camino. Lo he aplicado conmigo misma y con todas las personas que se forman conmigo.&rdquo;
              </p>
              <p className="font-semibold text-accent">Marisa Pico</p>
              <p className="text-sm text-muted">Directora de la Escuela Oratoria Training Camp</p>
            </div>

            <div className="p-8 bg-white/60 border border-border rounded-3xl md:col-span-2">
              <p className="text-lg leading-relaxed mb-6 italic">
                &ldquo;Además de la impecable organización del evento&hellip; cada artista-pedagogo transformó este lugar en un espacio de libertad compartida, nos propuso un tránsito de conocimiento creativo, en el cual íbamos escalando el espíritu de la palabra, y a partir de su altura, trabajar el poema que cada compañera, compañero traía en el alma&hellip; La voz saliendo en un fino y elegante río, que brilla mediante las sutiles cuerdas vocales, ahora bronco volcán, ahora vuelo de mariposa, ahora filigrana. La voz, ese misterioso instrumento.&rdquo;
              </p>
              <p className="font-bold text-accent text-lg italic mt-4">&ldquo;Entré, miedosa semilla / Salí, sonriente flor&rdquo;</p>
              <p className="font-semibold text-accent mt-2">Carlos Elizalde</p>
              <p className="text-sm text-muted">Actor</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="conecta" className="py-16 bg-secondary/85">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in font-serif">Conecta con Qualia</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestras propuestas? ¿Te interesa participar en nuestros encuentros? 
            Nos encantaría conocerte y compartir contigo este camino de exploración artística.
          </p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-background/90 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 font-serif">Información de contacto</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:contacto@espacioqualia.com" className="text-accent hover:underline">
                    contacto@espacioqualia.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">WhatsApp:</span>
                  <a href="https://wa.me/34629307684" className="text-accent hover:underline">
                    +34 629 307 684
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Ubicación:</span>
                  <span>Madrid, España</span>
                </p>
              </div>
            </div>
            
            <div className="bg-background/90 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 font-serif">Envíanos un mensaje</h3>
              <ContactForm onSubmit={handleContactSubmit} isSubmitting={isSubmitting} />
            </div>
          </div>
        </div>
      </section>

      {/* Agradecimientos */}
      <section className="py-16 bg-background/85">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in font-serif">Agradecimientos</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ayuntamiento de La Algueña */}
              <div className="text-center p-6 bg-secondary/90 rounded-lg">
                <h3 className="text-lg font-bold mb-2 font-serif">Ayuntamiento de La Algueña</h3>
                <p className="text-sm text-muted">Por su apoyo institucional</p>
              </div>
              
              {/* Casa Rural La Bodega de Barbarroja */}
              <div className="text-center p-6 bg-secondary/90 rounded-lg">
                <h3 className="text-lg font-bold mb-2 font-serif">Casa Rural La Bodega de Barbarroja</h3>
                <p className="text-sm text-muted">Alojamiento en Barbarroja</p>
              </div>
              
              {/* Hostal Jardín de las Eras */}
              <div className="text-center p-6 bg-secondary/90 rounded-lg">
                <h3 className="text-lg font-bold mb-2 font-serif">Hostal Jardín de las Eras</h3>
                <p className="text-sm text-muted">Alojamiento en La Algueña</p>
              </div>
              
              {/* Casa de comidas */}
              <div className="text-center p-6 bg-secondary/90 rounded-lg">
                <h3 className="text-lg font-bold mb-2 font-serif">El Rincón de María Jesús</h3>
                <p className="text-sm text-muted">Casa de comidas</p>
              </div>
              
              {/* Lola Fernández */}
              <div className="text-center p-6 bg-secondary/90 rounded-lg">
                <h3 className="text-lg font-bold mb-2 font-serif">Lola Fernández</h3>
                <a href="https://www.boanuno.org" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">
                  www.boanuno.org
                </a>
              </div>
              
              {/* Patricia Verdú */}
              <div className="text-center p-6 bg-secondary/90 rounded-lg">
                <h3 className="text-lg font-bold mb-2 font-serif">Patricia Verdú</h3>
                <p className="text-sm text-muted">Colaboradora</p>
              </div>
              
              {/* Diseño web */}
              <div className="text-center p-6 bg-secondary/90 rounded-lg">
                <h3 className="text-lg font-bold mb-2 font-serif">Diseño Web</h3>
                <p className="text-sm text-muted">Ibai San Millan Gomez [EtherCore] <a href="https://ether-core.com" target="_blank" rel="noopener noreferrer" className="text-accent text-sm hover:underline">ether-core.com</a></p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl text-muted italic">
                Gracias a todas las personas y organizaciones que hacen posible este proyecto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donación y Colaboración */}
      <section className="py-16 bg-secondary/60">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-serif" style={{color: '#8b4513'}}>Colabora con Qualia</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              El Colectivo Qualia es un proyecto independiente sostenido por la pasión y el compromiso de sus miembros.
              Si quieres apoyar nuestro trabajo e investigación en las Artes Vivas, puedes hacerlo a través de una donación o colaboración.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white/60 border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-2 font-serif" style={{color: '#8b4513'}}>Donación</h3>
                <p className="text-muted text-sm">
                  Tu aportación, grande o pequeña, contribuye directamente a hacer posibles nuestras propuestas de investigación y formación.
                </p>
              </div>
              <div className="p-6 bg-white/60 border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-2 font-serif" style={{color: '#8b4513'}}>Colaboración</h3>
                <p className="text-muted text-sm">
                  Si eres una institución, espacio cultural o artista y deseas colaborar con Qualia, ponte en contacto con nosotros.
                </p>
              </div>
            </div>
            <Link
              href="/#conecta"
              className="inline-block px-8 py-3 rounded-full font-semibold text-background transition-all hover:opacity-90"
              style={{backgroundColor: '#8b4513'}}
            >
              Contactar con Qualia
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Image 
                src="/logo_footer1.png" 
                alt="El arte de la palabra creativa" 
                width={180}
                height={180}
                className="w-auto h-48"
              />
              <h3 className="text-2xl font-bold font-playfair">Qualia</h3>
            </div>
            <p className="text-background/80">
              El arte de la palabra creativa, Escuela de Voz.
            </p>
            <p className="text-background/60 mt-4">
              © {currentYear} Qualia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
