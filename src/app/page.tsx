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
                <a 
                  href="#colectivo-qualia" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Colectivo Qualia
                </a>
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
          {/* Título principal con margen superior */}
          <div className="mb-8 mt-16 md:mt-20">
            <div className="flex items-center justify-center mb-4">
              <Image 
                src="/Logo original.png" 
                alt="Qualia Logo" 
                width={400}
                height={200}
                priority
                className="h-32 md:h-40 lg:h-48 w-auto"
              />
            </div>
          </div>
          
          {/* Tarjeta transparente para el contenido */}
          <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white/20 backdrop-blur-sm">
            <p className="text-xl md:text-2xl mb-8 autumn-text">
              Colectivo de investigación y creación en torno a la voz, el silencio, el cuerpo y la palabra en las <span className="qualia-text">Artes Vivas</span>
            </p>
            <blockquote className="text-lg md:text-xl mb-8 italic text-muted" style={{textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.8)'}}>
              &ldquo;Parece que la experiencia íntima de las cosas concretas requiere una especie de coraje&rdquo;
              <footer className="text-sm mt-2 text-accent" style={{textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.8)'}}>— Aristóteles</footer>
            </blockquote>
            
            <p className="text-lg mb-8 max-w-3xl mx-auto autumn-text">
              Qualia es un espacio de encuentro donde la investigación artística se convierte en experiencia viva. Exploramos las dimensiones más sutiles de la expresión humana, donde el silencio habla y el cuerpo piensa.
            </p>
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
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-8 text-center section-title">Colectivo Qualia</h3>
              <div className="mb-12 p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/15 rounded-3xl">
                <p className="text-lg leading-relaxed animate-slide-in mb-6">
                  El Colectivo <span className="qualia-text">Qualia</span> se conforma como un <strong>proyecto de creación y experimentación</strong> con la 
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
                      <a href="/colectivo/jesus-barranco" className="inline-block bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
                        Ver biografía completa
                      </a>
                    </div>
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
                      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center section-title">
              <span className="hidden sm:inline">Propuesta de investigación</span>
              <span className="sm:hidden">Propuesta de investigación</span> - Otoño 2025
            </h2>
          <div className="max-w-4xl mx-auto mb-12 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 text-center section-title">&ldquo;Oye cómo va&rdquo;</h3>
            <p className="text-lg leading-relaxed text-center">
              &ldquo;Oye cómo va&rdquo; es la primera propuesta que surge desde el Colectivo <span className="qualia-text">Qualia</span> atendiendo a los cinco modos de pensarla en sus prácticas artísticas y pedagógicas.
            </p>
            <p className="text-lg leading-relaxed text-center mt-4">
              Una propuesta abierta, dirigida principalmente a <strong>creadores y creadoras</strong> que deseen preguntarse su VOZ ó la VOZ en el campo de las Artes Vivas: actores, performers, directores, dramaturgos, escritores. Y, por supuesto, también a todo aquel interesado en esta aventura.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/90 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 section-title">Taller de artes vivas</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 section-title">Fechas</h4>
                  <p className="mb-2">Recepción e inicio: Lunes 1 de septiembre (17:00h)</p>
                  <p className="mb-4">Recapitulación y cierre: Viernes 5 de septiembre (13:00h)</p>
                  
                  <h4 className="text-xl font-semibold mb-4 section-title">Participación</h4>
                  <p className="mb-2">Mínimo: 12 personas</p>
                  <p className="mb-4">Máximo: 21 personas</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 section-title">Horarios diarios</h4>
                  <div className="space-y-2">
                    <p>9:30 – Cuerpo</p>
                    <p>10:30 – Ritmo</p>
                    <p>11:30 - 12:00 – Descanso</p>
                    <p>12:00 – Andar. Hablar. Pensar</p>
                    <p>13:00 - 17:00 – Comida / Tiempo libre</p>
                    <p>17:00 – Las pequeñas cosas</p>
                    <p>18:00 – Silencio</p>
                    <p>19:00 – Reflexión conjunta</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Propuestas de Investigación */}
            <div className="max-w-6xl mx-auto mt-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center section-title">
              <span className="hidden sm:inline">Propuesta de investigación</span>
              <span className="sm:hidden">Propuesta de investigación</span>
            </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Cuerpo */}
                <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <Image src="/3.png" alt="Leaf icon" width={48} height={48} className="w-12 h-12 mr-4" />
                                          <div>
                        <h4 className="text-lg md:text-2xl font-bold section-title">Cuerpo para la voz - el cuerpo de la voz</h4>
                        <p className="text-sm text-accent mt-1">Por Prado Pinilla</p>
                      </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    ¿Qué sucede cuando la vibración es capaz de viajar libremente y multiplicarse en el cuerpo a través de canales que, previamente, se han dispuesto para ello? ¿Puede ese hecho afectar a las funciones interoceptivas y propioceptivas del individuo?
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    ¿Es posible que la voz se impregne de esas nuevas sensaciones y ser vehículo portador de las experiencias más profundas de nuestros órganos, vísceras y tejidos? ¿Cómo es fonar desde esa consciencia?
                  </p>
                  <p className="text-sm italic">
                    &ldquo;Las palabras sólo sellan lo que el cuerpo ya sabe&rdquo; - Pablo d&rsquo;Ors
                  </p>
                </div>

                {/* Ritmo */}
                <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <Image src="/4.png" alt="Leaf icon" width={48} height={48} className="w-12 h-12 mr-4" />
                                          <div>
                        <h4 className="text-lg md:text-2xl font-bold section-title">Ritmo - Centro del corazón</h4>
                        <p className="text-sm text-accent mt-1">Por Jesús Aladrén</p>
                      </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    Investigación del ritmo desde el centro del corazón. El corazón como único centro de nuestro ser que resuena. El movimiento debe estar en armonía con el ritmo del corazón. Nuestro trabajo consistirá en establecer el cuerpo del ritmo y profundizar en su movimiento.
                  </p>
                </div>

                {/* Andar, Hablar, Pensar */}
                <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <Image src="/5.png" alt="Leaf icon" width={48} height={48} className="w-12 h-12 mr-4" />
                                          <div>
                        <h4 className="text-lg md:text-2xl font-bold section-title">Andar, hablar, pensar</h4>
                        <p className="text-sm text-accent mt-1">Por Yolanda Ulloa</p>
                      </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    Planteo el estudio consciente de este recorrido en concreto como base o fundamento para el desarrollo de todo proceso artístico y creativo. Y planteo así mismo un ejercicio de investigación sobre la correlación de estas tres facultades humanas y sobre el asombroso sentido del lugar intermedio que ocupa el habla.
                  </p>
                  <p className="text-xs italic">
                    &ldquo;La energía creativa del verbo es un poder formativo que construye incluso nuestros cuerpos físicos&rdquo; - Rudolf Steiner
                  </p>
                </div>

                {/* Los actos pequeños */}
                <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
                  <div className="flex items-center mb-6">
                    <Image src="/6.png" alt="Leaf icon" width={48} height={48} className="w-12 h-12 mr-4" />
                                          <div>
                        <h4 className="text-lg md:text-2xl font-bold section-title">Los actos pequeños</h4>
                        <p className="text-sm text-accent mt-1">Por El Primo Saint Tropez</p>
                      </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4">
                    Después del silencio, del segundo silencio, surge de nuevo la palabra. El anhelo sería entrenar desde el misterio y descubrir lo que surge cuando se quiere decir lo inefable.
                  </p>
                  <p className="text-sm leading-relaxed">
                    La idea es descubrir cómo se habla desde el instante que deja de ser inefable para, sin la conciencia del instrumento, hallar actos del lenguaje a tiempo real.
                  </p>
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
            {/* El MUCA */}
            <div className="mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 section-title">El MUCA</h3>
                  <p className="text-xl text-accent mb-4">Casa de la Música, la Cultura y las Artes</p>
                  <p className="text-lg text-muted">
                    Trabajaremos en El Muca, un espacio único para la exploración artística
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Image 
                    src="/1320190343-cor-016-casa-musica-music-house-alguena-39.jpg" 
                    alt="El Muca - Casa de Música - Espacio interior"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                  <Image 
                    src="/cor_016_hq_casa_musica_music_house_alguena_11.jpg" 
                    alt="El Muca - Casa de Música - Ambiente acogedor"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <span className="text-sm">Espacio creativo optimizado</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <span className="text-sm">Acústica profesional</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <span className="text-sm">Ambiente colaborativo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* La Algueña */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/15 p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 section-title">La Algueña, Alicante</h3>
                <p className="text-lg text-muted mb-6">
                  Un pueblo con encanto especial donde confluyen la tradición y la creatividad
                </p>
                <a 
                  href="https://www.alguenya.es/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors underline text-lg"
                >
                  Descubre más sobre La Algueña
                </a>
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
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Fechas:</span>
                    <span className="text-accent">1-5 Sept 2025</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Recepción e inicio:</span>
                    <span className="text-accent">1 Sept 17:00h</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Recapitulación y cierre:</span>
                    <span className="text-accent">5 Sept 13:00h</span>
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
                    <span className="text-accent">12-21 personas</span>
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
                    <p className="text-sm">Realiza el pago de <strong>120€</strong> para reservar tu plaza <strong>antes del 15 de Agosto</strong></p>
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
              
              {/* Pedro Moreno */}
              <div className="text-center p-6 bg-secondary/90 rounded-lg">
                <h3 className="text-lg font-bold mb-2 font-serif">Pedro Moreno</h3>
                <p className="text-sm text-muted">Propuesta artística</p>
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
              © 2025 Qualia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
