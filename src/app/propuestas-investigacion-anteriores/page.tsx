import Link from 'next/link';

export default function PropuestasInvestigacionAnterioresPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
          ← Volver al inicio
        </Link>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center section-title">
            Propuestas de investigación anteriores
          </h1>
          <p className="text-center text-muted mb-12 text-lg">
            Convocatoria 2025
          </p>

          <div className="p-8 md:p-10 mb-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 section-title">
              Propuesta general 2025
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              La propuesta de investigación del verano 2025 se articulo como un espacio de escucha, juego e indagacion
              en torno a la voz, el cuerpo, la palabra y el silencio en el campo de las Artes Vivas.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              El trabajo colectivo invito a explorar la presencia, la resonancia y la capacidad de crear nuevas
              cartografias para la expresion artistica desde la experiencia personal y compartida.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold mb-2 section-title">Los gestos del Alma</h3>
              <p className="text-sm text-accent mt-1 mb-4 font-semibold">de Yolanda Ulloa</p>
              <p className="text-sm leading-relaxed">
                Indagar en la conformacion de nuestros movimientos y disposiciones internas en relacion con uno mismo,
                con el otro y con lo otro. Observar como se yergue en el alma una respuesta al mundo y reconocer la
                naturaleza de la gesticulacion del alma y de su voz en nosotros.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold mb-2 section-title">Los gestos del Cuerpo</h3>
              <p className="text-sm text-accent mt-1 mb-4 font-semibold">de Prado Pinilla</p>
              <p className="text-sm leading-relaxed">
                Al modificar las estructuras de soporte-apoyo del cuerpo se transmite nueva informacion al resto de
                estructuras psicofisicas, dinamizando la aparicion y el descubrimiento de gestos internos diversos
                capaces de convocar otras voces.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl">
              <h3 className="text-2xl font-bold mb-2 section-title">El ritmo de la voz, la voz en movimiento</h3>
              <p className="text-sm text-accent mt-1 mb-4 font-semibold">de Jesus Aladren</p>
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-accent mb-1">El cuerpo y sus equilibrios</p>
                  <p>Centro energetico</p>
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
      </div>
    </div>
  );
}
