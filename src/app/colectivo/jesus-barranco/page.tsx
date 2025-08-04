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
                alt="El Primo Saint Tropez" 
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 section-title">El Primo Saint Tropez</h1>
            <p className="text-lg md:text-xl text-accent mb-2">Actor e investigador en Artes Vivas</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#" 
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                Ver formación académica →
              </a>
              <a 
                href="#" 
                className="text-sm text-accent hover:text-accent/80 underline"
              >
                Ver biografía completa
              </a>
            </div>
          </div>

          {/* Heterónimo */}
          <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 section-title">Heterónimo</h2>
            <p className="text-base md:text-lg">
              Heterónimo con el que el actor El Primo Saint Tropez investiga y crea en el ámbito de las Artes Vivas en diálogo con largos retiros en monasterios Carmelitas.
            </p>
          </div>

          {/* Propuesta de Investigación - Otoño 2025 */}
          <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 section-title break-words">
              <span className="hidden sm:inline">Propuesta de investigación</span>
              <span className="sm:hidden">Propuesta de investigación</span>
              <br className="sm:hidden" />
              <span className="sm:hidden">- Otoño 2025</span>
              <span className="hidden sm:inline"> - Otoño 2025</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">&ldquo;Oye cómo va&rdquo;</h3>
                <p className="text-base md:text-lg mb-4">
                  &ldquo;Oye cómo va&rdquo; es la primera propuesta que surge desde el Colectivo Qualia atendiendo a los cinco modos de pensarla en sus prácticas artísticas y pedagógicas.
                </p>
                <p className="text-base md:text-lg mb-6">
                  Una propuesta abierta, dirigida principalmente a creadores y creadoras que deseen preguntarse su VOZ ó la VOZ en el campo de las Artes Vivas: actores, performers, directores, dramaturgos, escritores. Y, por supuesto, también a todo aquel interesado en esta aventura.
                </p>
              </div>

              {/* Taller de artes vivas */}
              <div>
                <h4 className="text-base md:text-lg font-bold mb-4 text-accent">Taller de artes vivas</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-bold mb-2 text-sm md:text-base">Fechas</h5>
                    <p className="text-sm md:text-base">Recepción e inicio: Lunes 1 de septiembre (17:00h)</p>
                    <p className="text-sm md:text-base">Recapitulación y cierre: Viernes 5 de septiembre (13:00h)</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2 text-sm md:text-base">Participación</h5>
                    <p className="text-sm md:text-base">Mínimo: 12 personas</p>
                    <p className="text-sm md:text-base">Máximo: 21 personas</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold mb-2 text-sm md:text-base">Horarios diarios</h5>
                  <ul className="space-y-1 text-sm md:text-base">
                    <li>9:30 – Cuerpo</li>
                    <li>10:30 – Ritmo</li>
                    <li>11:30 - 12:00 – Descanso</li>
                    <li>12:00 – Andar. Hablar. Pensar</li>
                    <li>13:00 - 17:00 – Comida / Tiempo libre</li>
                    <li>17:00 – Las pequeñas cosas</li>
                    <li>18:00 – Silencio</li>
                    <li>19:00 – Reflexión conjunta</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Propuestas de investigación del colectivo */}
          <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 section-title break-words">
              <span className="hidden sm:inline">Propuestas de investigación</span>
              <span className="sm:hidden">Propuestas de investigación</span>
            </h2>
            <div className="space-y-8">
              
              {/* Cuerpo para la voz */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">Cuerpo para la voz - el cuerpo de la voz</h3>
                <p className="text-sm text-accent/80 mb-3">Por Prado Pinilla</p>
                <div className="space-y-3">
                  <p className="text-sm md:text-base">¿Qué sucede cuando la vibración es capaz de viajar libremente y multiplicarse en el cuerpo a través de canales que, previamente, se han dispuesto para ello? ¿Puede ese hecho afectar a las funciones interoceptivas y propioceptivas del individuo?</p>
                  <p className="text-sm md:text-base">¿Es posible que la voz se impregne de esas nuevas sensaciones y ser vehículo portador de las experiencias más profundas de nuestros órganos, vísceras y tejidos? ¿Cómo es fonar desde esa consciencia?</p>
                  <p className="italic text-accent/80 text-sm md:text-base">&ldquo;Las palabras sólo sellan lo que el cuerpo ya sabe&rdquo; - Pablo d&rsquo;Ors</p>
                </div>
              </div>

              {/* Ritmo - Centro del corazón */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">Ritmo - Centro del corazón</h3>
                <p className="text-sm text-accent/80 mb-3">Por Jesús Aladrén</p>
                <p className="text-sm md:text-base">Investigación del ritmo desde el centro del corazón. El corazón como único centro de nuestro ser que resuena. El movimiento debe estar en armonía con el ritmo del corazón. Nuestro trabajo consistirá en establecer el cuerpo del ritmo y profundizar en su movimiento.</p>
              </div>

              {/* Andar, hablar, pensar */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">Andar, hablar, pensar</h3>
                <p className="text-sm text-accent/80 mb-3">Por Begoña Frutos</p>
                <div className="space-y-3">
                  <p className="text-sm md:text-base">Planteo el estudio consciente de este recorrido en concreto como base o fundamento para el desarrollo de todo proceso artístico y creativo. Y planteo así mismo un ejercicio de investigación sobre la correlación de estas tres facultades humanas y sobre el asombroso sentido del lugar intermedio que ocupa el habla.</p>
                  <p className="italic text-accent/80 text-sm md:text-base">&ldquo;La energía creativa del verbo es un poder formativo que construye incluso nuestros cuerpos físicos&rdquo; - Rudolf Steiner</p>
                </div>
              </div>

              {/* Los actos pequeños */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">Los actos pequeños</h3>
                <p className="text-sm text-accent/80 mb-3">Por Yolanda Ulloa</p>
                <p className="text-sm md:text-base">Después del silencio, del segundo silencio, surge de nuevo la palabra. El anhelo sería entrenar desde el misterio y descubrir lo que surge cuando se quiere decir lo inefable.</p>
                <p className="text-sm md:text-base">La idea es descubrir cómo se habla desde el instante que deja de ser inefable para, sin la conciencia del instrumento, hallar actos del lenguaje a tiempo real.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 