"use client";

import Link from 'next/link';

export default function YolandaUlloa() {
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
                src="/yolanda.jpg" 
                alt="Yolanda Ulloa" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 section-title">Yolanda Ulloa</h1>
            <p className="text-xl text-accent mb-2">Actriz, terapeuta biográfica y profesional del Arte de la Palabra</p>
            <a 
              href="https://www.yolandaulloa.es" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-accent hover:text-accent/80 underline"
            >
              www.yolandaulloa.es →
            </a>
          </div>

          {/* Formación */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formación Académica */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Formación Académica</h2>
              <ul className="space-y-4">
                <li>Licenciada en Arte Dramático y Arte de la Palabra, Chrysalis Theatre School of Speech and Drama, Londres</li>
                <li>Primera Promoción del Teatro de la Abadía, Madrid</li>
                <li>Premio Cibeles de Teatro</li>
                <li>Premio Mayte de Teatro</li>
                <li>Miembro fundador de la Academia de las Artes Escénicas de España (AAEE)</li>
              </ul>
            </div>

            {/* Formación Especializada */}
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 section-title">Formación Especializada</h2>
              <ul className="space-y-4">
                <li>Certificada como especialista en Terapia de Sonido por el ITIEE</li>
                <li>Estudios con maestros como:
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>• Barbara Bridgmont</li>
                    <li>• Maisie Jones</li>
                    <li>• Jill Purce</li>
                    <li>• Tomás Clemens</li>
                    <li>• Eva Julián</li>
                  </ul>
                </li>
                <li>Formación terapéutica en RUDOLF STEINER HOUSE, London</li>
              </ul>
            </div>
          </div>

          {/* Experiencia Docente */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Experiencia Docente</h2>
            <div className="space-y-6">
              <p className="text-lg mb-6">
                Ha impartido seminarios sobre El Arte de la Palabra CREATIVA -disciplina de trabajo con la voz que versa sobre la capacidad formativa del habla acorde con las enseñanzas de R. Steiner y M. Chejov- en:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="p-3 bg-white/10 rounded-lg">Madrid</li>
                <li className="p-3 bg-white/10 rounded-lg">Huesca</li>
                <li className="p-3 bg-white/10 rounded-lg">Barcelona</li>
                <li className="p-3 bg-white/10 rounded-lg">Las Palmas</li>
                <li className="p-3 bg-white/10 rounded-lg">Santander</li>
                <li className="p-3 bg-white/10 rounded-lg">Bilbao</li>
                <li className="p-3 bg-white/10 rounded-lg">Zaragoza</li>
                <li className="p-3 bg-white/10 rounded-lg">Chantada (Ribeira Sacra)</li>
                <li className="p-3 bg-white/10 rounded-lg">Birmingham (BE FESTIVAL)</li>
              </ul>
            </div>
          </div>

          {/* Trayectoria Profesional */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Trayectoria Profesional</h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 text-accent">Experiencia como Profesora de Voz</h3>
              <ul className="space-y-4">
                <li>Escuela Micael (trabajo con jóvenes y adultos)</li>
                <li>Escuela Británica del Actor - bajo la dirección de Enmanuel Cini</li>
                <li>Escuela de Teatro del Gesto</li>
                <li>Palacio de Festivales de Santander</li>
                <li>TeatroLab - bajo la dirección de Gabriel Olivares</li>
                <li>Taller Permanente de Teatro "El Tapete" - vinculado al Aula de Teatro de la Complutense y a la RESAD</li>
              </ul>

              <h3 className="text-xl font-bold mb-4 text-accent">Profesora de Interpretación</h3>
              <p>
                Profesora de Interpretación en la ECAM (Escuela de Cinematografía y del Audiovisual de la Comunidad de Madrid) durante los 3 últimos años de Formación de Actores bajo la dirección de Fernando Méndez Leite, llevando también su trabajo a la voz del actor.
              </p>
            </div>
          </div>

          {/* Metodología */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Metodología y Enfoque</h2>
            <div className="space-y-4">
              <p>
                Su acercamiento al trabajo pedagógico es una amalgama de muy diversas fuentes. Ha trabajado técnicas desarrolladas por grandes maestros del trabajo con la voz como Cicely Berry, Maisie Jones, Agustín García Calvo, Jesús Aladrén, Rudolf Laban, Rudolf Steiner, entre otros.
              </p>
              <p>
                Como filtro, y según su propia experiencia, ha llegado a una comprensión muy personal del arte de la palabra. Le gusta hablar de:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>La fisicidad de la palabra</li>
                <li>Su carga volitiva</li>
                <li>Su luz, su color, su temperatura</li>
                <li>Su trazo en el espacio</li>
                <li>La acción de la energía sobre la forma</li>
                <li>El trabajo sobre la intención</li>
                <li>La comprensión de la palabra como experiencia vital</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 