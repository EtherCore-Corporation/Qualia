"use client";

import React from 'react';
import Link from 'next/link';

export default function AlojamientoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/logo1.png" 
                alt="QUALIA Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <Link 
              href="/" 
              className="bg-accent text-background px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-accent/20 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 font-playfair">Alojamiento y Comida</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Opciones completas para tu estancia durante el taller QUALIA en La Algueña
          </p>
          <div className="flex items-center justify-center gap-2 text-lg mt-4">
            <span className="text-2xl">📍</span>
            <span className="font-semibold">La Algueña, Alicante</span>
          </div>
        </div>
      </section>

      {/* Información General */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent/15 to-accent/5 border border-accent/30 p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">💰</span>
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-serif">Información Importante</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    El precio del taller (240€) <strong>no incluye alojamiento ni comidas</strong>. 
                    Deberás gestionar tu reserva directamente con el establecimiento elegido.
                  </p>
                  <p className="text-lg leading-relaxed">
                    A continuación encontrarás todas las opciones disponibles con contactos directos 
                    para hacer tu reserva.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Alojamientos Concertados */}
          <div className="max-w-7xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center font-serif">Alojamientos Concertados</h2>
            <p className="text-xl text-center mb-12 text-muted">
              2 opciones concertadas en régimen abierto de compartir habitación (con precios asequibles por persona y noche)
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* El Jardín de las Eras */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 transition-all duration-500">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl text-white">🏨</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-serif">El Jardín de las Eras</h3>
                  <p className="text-center text-accent mb-6 font-semibold">La Algueña</p>
                  
                  {/* Galería de imágenes */}
                  <div className="grid grid-cols-2 gap-4 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src="/Fotos del Hostal Jardín de las Eras, en La Algueña.jpeg" 
                      alt="Hostal Jardín de las Eras - Habitación principal"
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
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300 col-span-2"
                    />
                  </div>

                  <div className="space-y-3 mb-6">
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
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-xl">🏪</span>
                      <span className="text-sm">En el centro de La Algueña</span>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-accent/20 rounded-lg">
                    <h4 className="font-bold mb-2">Contacto para reservas</h4>
                    <p className="text-lg font-bold text-accent">María Dolores</p>
                    <a 
                      href="https://wa.me/34652092337" 
                      className="inline-flex items-center gap-2 mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <span>📱</span>
                      652 092 337 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              {/* Casa Rural La Bodega */}
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 transition-all duration-500">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl text-white">🏡</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-serif">Casa Rural La Bodega</h3>
                  <p className="text-center text-accent mb-6 font-semibold">Barbarroja (12 min en coche desde La Algueña)</p>
                  
                  {/* Galería de imágenes */}
                  <div className="grid grid-cols-2 gap-4 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src="/Fotos de la casa rural La Bodega de Barbarroja.jpeg" 
                      alt="Casa Rural La Bodega - Interior principal"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src="/Fotos de la casa rural La Bodega de Barbarroja 2.jpeg" 
                      alt="Casa Rural La Bodega - Baño completo"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src="/Fotos de la casa rural La Bodega de Barbarroja 3.jpeg" 
                      alt="Casa Rural La Bodega - Habitación acogedora"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src="/Fotos de la casa rural La Bodega de Barbarroja 4.jpeg" 
                      alt="Casa Rural La Bodega - Cocina equipada"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-3 mb-6">
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
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <span className="text-xl">🚗</span>
                      <span className="text-sm">12 minutos en coche hasta El MUCA</span>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-accent/20 rounded-lg">
                    <h4 className="font-bold mb-2">Contacto para reservas</h4>
                    <p className="text-lg font-bold text-accent">Consuelo</p>
                    <a 
                      href="https://wa.me/34658979072" 
                      className="inline-flex items-center gap-2 mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <span>📱</span>
                      658 979 072 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Otras Opciones */}
          <div className="max-w-7xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center font-serif">Otras Opciones de Alojamiento</h2>
            <p className="text-xl text-center mb-12 text-muted">
              Otras posibilidades por el pueblo y alrededores
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Cuevas de Las Mariposas */}
              <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/15 rounded-3xl">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl text-white">🏘️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center font-serif">Cuevas de Las Mariposas</h3>
                <p className="text-center text-accent mb-4 font-semibold">Casa-cueva en La Algueña</p>
                <p className="text-sm text-muted text-center mb-6">
                  Una experiencia única en casas-cueva tradicionales de la zona
                </p>
                <div className="text-center">
                  <a 
                    href="https://www.airbnb.mx/rooms/1255692497846957247" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-background px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors text-sm"
                  >
                    🌐 Ver en Airbnb
                  </a>
                </div>
              </div>

              {/* Casa La Curiosa */}
              <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/15 rounded-3xl">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl text-white">🏔️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center font-serif">Casa La Curiosa</h3>
                <p className="text-center text-accent mb-4 font-semibold">Sierra del Carche (17 min en coche desde La Algueña)</p>
                <p className="text-sm text-muted text-center mb-6">
                  Casa rural en un entorno natural privilegiado
                </p>
                <div className="text-center">
                  <a 
                    href="https://casalacuriosa.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-background px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors text-sm"
                  >
                    🌐 Visitar web oficial
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Comida */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center font-serif">Manutención</h2>
            
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl text-white">🍽️</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-serif">El Rincón de María Jesús</h3>
                <p className="text-xl text-accent mb-6">Casa de comidas</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xl font-bold font-serif">Menú diario disponible</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                      <span className="text-2xl">🥗</span>
                      <span>Una ensalada</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                      <span className="text-2xl">🍽️</span>
                      <span>Plato principal</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                      <span className="text-2xl">🥤</span>
                      <span>Bebida</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                      <span className="text-2xl">🍰</span>
                      <span>Postre</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center p-6 bg-accent/20 rounded-lg">
                    <h4 className="text-2xl font-bold mb-2 text-accent">10€</h4>
                    <p className="text-sm text-muted">por persona y comida</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-green-100/20 rounded-lg">
                      <span className="text-2xl">🌱</span>
                      <span>Opciones vegetarianas disponibles</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                      <span className="text-2xl">🕐</span>
                      <span>Servicio a la hora de la comida</span>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-accent/20 rounded-lg">
                    <h4 className="font-bold mb-2">Reservas e información</h4>
                    <p className="text-lg font-bold text-accent mb-2">Yolanda</p>
                    <a 
                      href="https://wa.me/34629307684" 
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <span>📱</span>
                      629 307 684 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Servicios Adicionales */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-serif">Servicios Adicionales</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Piscina Municipal */}
              <div className="p-8 bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur-md border border-blue-500/20 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">🏊‍♀️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center font-serif">Piscina Municipal</h3>
                <p className="text-center text-muted mb-6">
                  Para relajarte después de las sesiones del taller
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                    <span className="text-xl">📍</span>
                    <span className="text-sm">Ubicada en La Algueña</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                    <span className="text-xl">🕐</span>
                    <span className="text-sm">Consultar horarios de apertura</span>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://www.google.com/search?q=piscina+municipal+la+algue%C3%B1a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    🌐 Ver información
                  </a>
                </div>
              </div>

              {/* Información General */}
              <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/15 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">ℹ️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center font-serif">Recomendaciones</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-white/10 rounded-lg">
                    <span className="text-xl flex-shrink-0">📅</span>
                    <div>
                      <p className="font-semibold">Reserva con antelación</p>
                      <p className="text-sm text-muted">Especialmente durante septiembre</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/10 rounded-lg">
                    <span className="text-xl flex-shrink-0">🚗</span>
                    <div>
                      <p className="font-semibold">Transporte</p>
                      <p className="text-sm text-muted">Considera compartir coche para opciones más alejadas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/10 rounded-lg">
                    <span className="text-xl flex-shrink-0">💬</span>
                    <div>
                      <p className="font-semibold">Contacto directo</p>
                      <p className="text-sm text-muted">Usa WhatsApp para reservas más rápidas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 font-playfair">QUALIA</h3>
          <p className="text-background/80 mb-6">
            Colectivo de investigación y creación en torno a la voz, el silencio, el cuerpo y la palabra
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-background text-accent px-6 py-3 rounded-lg hover:bg-background/90 transition-colors font-semibold"
          >
            ← Volver a la página principal
          </Link>
        </div>
      </footer>
    </div>
  );
} 