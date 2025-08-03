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
                alt="Jesús Barranco" 
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 section-title">El Primo Saint Tropez</h1>
            <p className="text-xl text-accent mb-2">Actor e investigador en Artes Vivas</p>
            <div className="flex justify-center gap-4">
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
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Heterónimo</h2>
            <p className="text-lg">
              Heterónimo con el que el actor El Primo Saint Tropez investiga y crea en el ámbito de las Artes Vivas en diálogo con largos retiros en monasterios Carmelitas.
            </p>
          </div>

          {/* Propuesta de Investigación - Otoño 2025 */}
          <div className="mt-8 p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 section-title">Propuesta de investigación - Otoño 2025</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">"Oye cómo va"</h3>
                <p className="text-lg mb-4">
                  "Oye cómo va" es la primera propuesta que surge desde el Colectivo Qualia atendiendo a los cinco modos de pensarla en sus prácticas artísticas y pedagógicas.
                </p>
                <p className="text-lg mb-6">
                  Una propuesta abierta, dirigida principalmente a creadores y creadoras que deseen preguntarse su VOZ ó la VOZ en el campo de las Artes Vivas: actores, performers, directores, dramaturgos, escritores. Y, por supuesto, también a todo aquel interesado en esta aventura.
                </p>
              </div>

              {/* Taller de artes vivas */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-accent">Taller de artes vivas</h4>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-bold mb-2">Fechas</h5>
                    <p>Recepción e inicio: Lunes 1 de septiembre (17:00h)</p>
                    <p>Recapitulación y cierre: Viernes 5 de septiembre (13:00h)</p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Participación</h5>
                    <p>Mínimo: 12 personas</p>
                    <p>Máximo: 21 personas</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold mb-2">Horarios diarios</h5>
                  <ul className="space-y-1">
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
        </div>
      </div>
    </div>
  );
} 