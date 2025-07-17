"use client";

import React, { useState } from 'react';
import AutumnParallax from '../components/AutumnParallax';
import TextAnimations from '../components/TextAnimations';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground parallax-container">
      {/* Autumn Parallax Effects */}
      <AutumnParallax />
      <TextAnimations />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border" style={{zIndex: 50}}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-serif">QUALIA</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="hover:text-accent transition-colors">Inicio</a>
              <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
              <a href="#taller" className="hover:text-accent transition-colors">Taller</a>
              <a href="#investigadores" className="hover:text-accent transition-colors">Investigadores</a>
              <a href="#contacto" className="hover:text-accent transition-colors">Contacto</a>
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
                  href="#inicio" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
          </a>
          <a
                  href="#sobre" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sobre
                </a>
                <a 
                  href="#taller" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Taller
        </a>
        <a
                  href="#investigadores" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Investigadores
        </a>
        <a
                  href="#contacto" 
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen pt-20 pb-12 overflow-hidden" style={{zIndex: 10}}>
        {/* Árboles de otoño - ocupando toda la altura desde abajo hasta arriba */}
        <div className="absolute inset-y-0 left-0 w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] opacity-80" style={{zIndex: 2}}>
          <img 
            src="/10.png" 
            alt="Autumn tree left" 
            className="w-full h-full object-contain object-bottom"
          />
        </div>
        <div className="hidden md:block absolute inset-y-0 right-0 w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] opacity-80 transform scale-x-[-1]" style={{zIndex: 2}}>
          <img 
            src="/10.png" 
            alt="Autumn tree right" 
            className="w-full h-full object-contain object-bottom"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative h-full flex flex-col justify-center items-center" style={{zIndex: 5}}>
          {/* Título principal con margen superior */}
          <div className="mb-8 mt-16 md:mt-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold autumn-text font-serif">QUALIA</h1>
          </div>
          
          {/* Tarjeta transparente para el contenido */}
          <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white/20 backdrop-blur-sm">
            <p className="text-xl md:text-2xl mb-8 autumn-text">
              Colectivo de investigación y creación de forma y no de silencie, al cuerpo y la palabra en las artes vivas
            </p>
            <blockquote className="text-lg md:text-xl mb-8 italic text-muted" style={{textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.8)'}}>
              &ldquo;Donde no llega la voz, llega la resonancia; donde no llega la resonancia, llega el silencio; donde no llega el silencio, llega el cuerpo y donde no llega el cuerpo, llega la palabra&rdquo;
              <footer className="text-sm mt-2 text-accent" style={{textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(255, 255, 255, 0.8)'}}>— Aristóteles</footer>
            </blockquote>
            
            <p className="text-lg mb-8 max-w-3xl mx-auto autumn-text">
              Queda que la experiencia íntima de las cosas concretas, esa cualidad fenomenológica que emerge cuando el arte se convierte en conocimiento encarnado.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-16 bg-background/85">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-secondary/90 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 font-serif">Voz</h3>
              <p className="text-muted">La resonancia del ser en el espacio</p>
            </div>
            <div className="text-center p-8 bg-secondary/90 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 font-serif">Silencio</h3>
              <p className="text-muted">El territorio donde nacen las palabras</p>
            </div>
            <div className="text-center p-8 bg-secondary/90 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 font-serif">Cuerpo</h3>
              <p className="text-muted">El primer instrumento de conocimiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* About QUALIA */}
      <section id="sobre" className="py-16 bg-secondary/85">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in font-serif">Qué es QUALIA</h2>
            <div className="space-y-6 text-lg">
              <p className="animate-slide-in">
                QUALIA surge como un territorio de exploración donde convergen diferentes disciplinas artísticas 
                en torno a la investigación de la voz, el silencio, el cuerpo y la palabra.
              </p>
              <p className="animate-slide-in">
                Nos interesa la experiencia íntima de las cosas concretas, esa cualidad fenomenológica que emerge 
                cuando el arte se convierte en conocimiento encarnado.
              </p>
              <p className="animate-slide-in">
                Cada encuentro es una oportunidad para profundizar en las dimensiones más sutiles de la expresión 
                humana, donde la investigación teórica se encuentra con la práctica artística.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section id="taller" className="py-16 bg-background/85">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in font-serif">&ldquo;Oye cómo va&rdquo;</h2>
          <p className="text-xl text-center mb-12 text-muted">Primera propuesta del colectivo QUALIA</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/90 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 font-serif">Taller de artes vivas</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 font-serif">Fechas</h4>
                  <p className="mb-2">Lunes 1 de septiembre (inicio 17:00h)</p>
                  <p className="mb-4">Viernes 5 de septiembre (finalización 13:00h)</p>
                  
                  <h4 className="text-xl font-semibold mb-4 font-serif">Participación</h4>
                  <p className="mb-2">Mínimo: 12 personas</p>
                  <p className="mb-2">Máximo: 21 personas</p>
                  <p className="mb-4">Precio: 240€ (más alojamiento y comida)</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 font-serif">Horarios diarios</h4>
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
              
              <div className="text-center mt-8">
                <button className="bg-accent text-background px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors">
                  Consultar inscripción
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Researchers Section */}
      <section id="investigadores" className="py-16 bg-secondary/85">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in font-serif">Investigadores QUALIA</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Begoña Frutos */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                  <img 
                    src="/begona.jpg" 
                    alt="Begoña Frutos" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Begoña Frutos</h3>
                <p className="text-accent mb-4 italic">&ldquo;El silencio&rdquo;</p>
                <p className="text-sm text-muted leading-relaxed">
                  Actriz y docente especializada en la investigación del silencio como lenguaje escénico.
                </p>
              </div>
            </div>

            {/* Prado Pinilla */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                  <img 
                    src="/prado.jpg" 
                    alt="Prado Pinilla" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Prado Pinilla</h3>
                <p className="text-accent mb-4 italic">&ldquo;El cuerpo&rdquo;</p>
                <p className="text-sm text-muted leading-relaxed">
                  Actriz y docente especializada en la expresión corporal y vibración sonora.
                </p>
              </div>
            </div>

            {/* Jesús Aladrén */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                  <img 
                    src="/jesus.jpg" 
                    alt="Jesús Aladrén" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Jesús Aladrén</h3>
                <p className="text-accent mb-4 italic">&ldquo;El ritmo&rdquo;</p>
                <p className="text-sm text-muted leading-relaxed">
                  Investigador de las dimensiones rítmicas y temporales en la expresión artística.
                </p>
              </div>
            </div>

            {/* El Primo de Saint Tropez */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                  <img 
                    src="/primo.jpg" 
                    alt="El Primo de Saint Tropez" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">El Primo de Saint Tropez</h3>
                <p className="text-accent mb-4 italic">&ldquo;Los actos pequeños&rdquo;</p>
                <p className="text-sm text-muted leading-relaxed">
                  Heterónimo artístico que explora lo sacro y lo profano en las artes vivas.
                      </p>
                    </div>
            </div>

            {/* Yolanda Ulloa */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                  <img 
                    src="/yolanda.jpg" 
                    alt="Yolanda Ulloa" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">Yolanda Ulloa</h3>
                <p className="text-accent mb-4 italic">&ldquo;Andar, hablar, pensar&rdquo;</p>
                <p className="text-sm text-muted leading-relaxed">
                  Terapeuta biográfica y profesional del Arte de la Palabra (Sprachgestaltung).
                      </p>
                    </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inscripción Section */}
      <section className="py-20 bg-background/85 relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent font-serif">
              Inscripción al Taller
            </h2>
            <p className="text-xl text-muted leading-relaxed mb-4">
              &ldquo;Oye cómo va&rdquo; - Primera propuesta del colectivo QUALIA
            </p>
            <div className="flex items-center justify-center gap-2 text-lg mb-2">
              <span className="text-2xl">📍</span>
              <span className="font-semibold">La Algueña, Alicante</span>
            </div>
            <p className="text-muted mb-4">
              Trabajaremos en <strong>El Muca</strong>, un espacio único para la exploración artística
            </p>
            <a 
              href="https://www.alguenya.es/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors underline"
            >
              🌐 Más información sobre La Algueña
            </a>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Información del Taller */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">📅</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center font-serif">Detalles del Taller</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="font-semibold">Fechas:</span>
                    <span className="text-accent">1-5 Sept 2025</span>
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

            {/* Métodos de Pago */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">💳</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center font-serif">Formas de Pago</h3>
                
                {/* Bizum */}
                <div className="mb-6 p-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl border border-accent/30">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📱</span>
                    <h4 className="text-lg font-bold font-serif">Bizum</h4>
                  </div>
                  <p className="text-sm text-muted mb-2">Pago rápido y seguro</p>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="font-mono text-accent font-bold text-lg text-center">
                      +34 123 456 789
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
                      <p className="text-xs text-muted">IBAN:</p>
                      <p className="font-mono text-accent font-bold">
                        ES12 3456 7890 1234 5678 9012
                      </p>
                    </div>
                    <div className="text-center pt-2 border-t border-white/20">
                      <p className="text-xs text-muted">Concepto:</p>
                      <p className="font-semibold text-sm">QUALIA - [Tu Nombre]</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Instrucciones */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/15 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center font-serif">¿Cómo inscribirte?</h3>
                <div className="grid md:grid-cols-3 gap-6">
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
                    <p className="text-sm">Envía el comprobante por email o WhatsApp</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-accent font-bold">3</span>
                    </div>
                    <p className="text-sm">Completa el pago restante antes del taller</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* El Muca - Lugar del Taller */}
          <div className="max-w-4xl mx-auto mt-16 mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl text-white">🎭</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 font-serif">El Muca - Casa de Música</h3>
                  <p className="text-lg text-muted">
                    Espacio único donde realizaremos nuestro encuentro artístico
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <img 
                    src="/1320190343-cor-016-casa-musica-music-house-alguena-39.jpg" 
                    alt="El Muca - Casa de Música - Espacio interior"
                    className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/cor_016_hq_casa_musica_music_house_alguena_11.jpg" 
                    alt="El Muca - Casa de Música - Ambiente acogedor"
                    className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <span className="text-2xl">🎨</span>
                    <span className="text-sm">Espacio creativo optimizado</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <span className="text-2xl">🎵</span>
                    <span className="text-sm">Acústica profesional</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <span className="text-2xl">🤝</span>
                    <span className="text-sm">Ambiente colaborativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opciones de Alojamiento */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent font-serif">
                Alojamiento
              </h3>
              <p className="text-xl text-muted">
                Dos opciones excepcionales para tu estancia en La Algueña
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Casa Rural La Bodega de Barbarroja */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl text-white">🏡</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-center font-serif">Casa Rural La Bodega de Barbarroja</h4>
                  
                  {/* Galería de imágenes */}
                  <div className="grid grid-cols-2 gap-2 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src="/Fotos de la casa rural La Bodega de Barbarroja.jpeg" 
                      alt="Casa Rural La Bodega de Barbarroja - Interior"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src="/Fotos de la casa rural La Bodega de Barbarroja 2.jpeg" 
                      alt="Casa Rural La Bodega de Barbarroja - Baño"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src="/Fotos de la casa rural La Bodega de Barbarroja 3.jpeg" 
                      alt="Casa Rural La Bodega de Barbarroja - Habitación"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src="/Fotos de la casa rural La Bodega de Barbarroja 4.jpeg" 
                      alt="Casa Rural La Bodega de Barbarroja - Cocina"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-xl">🛏️</span>
                      <span className="text-sm">Ambiente acogedor y tradicional</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-xl">🍽️</span>
                      <span className="text-sm">Cocina completamente equipada</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-xl">🌿</span>
                      <span className="text-sm">Entorno rural tranquilo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hostal Jardín de las Eras */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl text-white">🏨</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-center font-serif">Hostal Jardín de las Eras</h4>
                  
                  {/* Galería de imágenes */}
                  <div className="grid grid-cols-2 gap-2 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src="/Fotos del Hostal Jardín de las Eras, en La Algueña.jpeg" 
                      alt="Hostal Jardín de las Eras - Habitación"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src="/Fotos del Hostal Jardín de las Eras, en La Algueña 2.jpeg" 
                      alt="Hostal Jardín de las Eras - Suite"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src="/Fotos del Hostal Jardín de las Eras, en La Algueña 3.jpeg" 
                      alt="Hostal Jardín de las Eras - Habitación moderna"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src="/Fotos de la casa rural La Bodega de Barbarroja 5.jpeg" 
                      alt="Ambiente acogedor"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
            </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-xl">✨</span>
                      <span className="text-sm">Habitaciones modernas y confortables</span>
                </div>
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-xl">🛁</span>
                      <span className="text-sm">Baños privados equipados</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-xl">🌸</span>
                      <span className="text-sm">Jardines y espacios comunes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nota importante */}
            <div className="max-w-4xl mx-auto mt-8">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent/15 to-accent/5 border border-accent/30 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">💰</span>
                  <div>
                    <h4 className="font-bold mb-2 font-serif">Importante sobre el alojamiento</h4>
                    <p className="text-sm text-muted leading-relaxed">
                      El precio del taller (240€) <strong>no incluye alojamiento ni comidas</strong>. 
                      Deberás gestionar tu reserva directamente con el establecimiento elegido. 
                      Te ayudaremos con la información de contacto una vez confirmes tu participación.
                    </p>
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-secondary/85">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in font-serif">Conecta con QUALIA</h2>
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
                  <a href="mailto:hola@qualia-colectivo.es" className="text-accent hover:underline">
                    hola@qualia-colectivo.es
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Teléfono:</span>
                  <a href="tel:+34600123456" className="text-accent hover:underline">
                    +34 600 123 456
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
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="+34 600 000 000"
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <textarea
                  placeholder="Cuéntanos qué te interesa de QUALIA..."
                  rows={4}
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="w-full bg-accent text-background py-3 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 font-serif">QUALIA</h3>
            <p className="text-background/80">
              Colectivo de investigación y creación en torno a la voz, el silencio, el cuerpo y la palabra
            </p>
            <p className="text-background/60 mt-4">
              © 2024 QUALIA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
