"use client";

import Link from 'next/link';

export default function Profesores() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center section-title">Profesores</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Jesús Aladrén */}
          <Link 
            href="/profesores/jesus-aladren" 
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer"
          >
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                <img 
                  src="/jesus.jpg" 
                  alt="Jesús Aladrén" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 section-title">Jesús Aladrén</h3>
              <p className="text-sm text-muted leading-relaxed">
                Investigador de las dimensiones rítmicas y temporales en la expresión artística.
              </p>
            </div>
          </Link>

          {/* Begoña Frutos */}
          <Link 
            href="/profesores/begona-frutos" 
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer"
          >
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                <img 
                  src="/begona.jpg" 
                  alt="Begoña Frutos" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 section-title">Begoña Frutos</h3>
              <p className="text-sm text-muted leading-relaxed">
                Actriz y docente que transita entre el escenario, el aula y la investigación.
              </p>
            </div>
          </Link>

          {/* Prado Pinilla */}
          <Link 
            href="/profesores/prado-pinilla" 
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer"
          >
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                <img 
                  src="/prado.jpg" 
                  alt="Prado Pinilla" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 section-title">Prado Pinilla</h3>
              <p className="text-sm text-muted leading-relaxed">
                Docente de la Escuela de Artes TAI, especialista en voz y cuerpo.
              </p>
            </div>
          </Link>

          {/* Yolanda Ulloa */}
          <Link 
            href="/profesores/yolanda-ulloa" 
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer"
          >
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                <img 
                  src="/yolanda.jpg" 
                  alt="Yolanda Ulloa" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 section-title">Yolanda Ulloa</h3>
              <p className="text-sm text-muted leading-relaxed">
                Actriz, terapeuta biográfica y profesional del Arte de la Palabra.
              </p>
            </div>
          </Link>

          {/* Jesús Barranco */}
          <Link 
            href="/profesores/jesus-barranco" 
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer"
          >
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-accent/30 transition-all duration-500">
                <img 
                  src="/primo.jpg" 
                  alt="Jesús Barranco" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 section-title">Jesús Barranco</h3>
              <p className="text-sm text-muted leading-relaxed">
                Actor e investigador en Artes Vivas, miembro de diversos colectivos artísticos.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 