import Image from "next/image"

const steps = [
  {
    number: "01",
    name: "Parada",
    image: "/photos/preparacion.jpg",
    description: ""
  },
  {
    number: "02",
    name: "Colocacion de la Flecha (Nocking)",
    description:
      "Coloca la flecha en el reposaflechas y engancha el culatín en la cuerda en el punto de montaje. Asegúrate de que las plumas esten orientadas correctamente. Los dedos deben sujetar la cuerda con un agarre relajado pero seguro.",
    image: "/images/nocking.jpg",
  },
  {
    number: "03",
    name: "Agarre del Arco (Grip)",
    description:
      "El arco debe descansar en la base del pulgar, en el área carnosa de la mano. La muñeca permanece baja y relajada. Los dedos no deben agarrar el arco; simplemente lo sostienen. Un agarre correcto evita la torsion del arco al soltar.",
    image: "/images/grip.jpg",
  },
  {
    number: "04",
    name: "Tension (Draw)",
    description:
      "Eleva el arco hacia el objetivo mientras comienzas a tensar la cuerda. El brazo del arco debe extenderse completamente, con el codo ligeramente rotado hacia afuera. Usa los musculos de la espalda para realizar la tension, no solo el brazo.",
    image: "/images/draw.jpg",
  },
  {
    number: "05",
    name: "Anclaje (Anchor)",
    description:
      "Lleva la mano de la cuerda a un punto de referencia consistente en tu rostro. Tipicamente, los dedos tocan el menton y la mandibula, mientras la cuerda roza la nariz y los labios. Este punto debe ser identico en cada disparo.",
    image: "/images/anchor.jpg",
  },
  {
    number: "06",
    name: "Apuntado (Aiming)",
    description:
      "Alinea el visor con el centro del objetivo. Mantén ambos ojos abiertos si es posible. El ojo dominante debe mirar a traves del visor. Respira de manera controlada y mantén el foco mientras continuas expandiendo con los musculos de la espalda.",
    image: "/images/aim.jpg",
  },
  {
    number: "07",
    name: "Liberacion (Release)",
    description:
      "La liberacion debe ser una continuación natural de la expansion. Los dedos se abren relajadamente, permitiendo que la cuerda escape. No tires de la cuerda hacia atras ni empujes hacia adelante. La pronacion del brazo del arco debe ser natural.",
    image: "/images/release.jpg",
  },
  {
    number: "08",
    name: "Seguimiento (Follow-through)",
    description:
      "Mantén la posicion despues de soltar. El brazo del arco permanece extendido, la mano de la cuerda se relaja hacia atras naturalmente. Observa el vuelo de la flecha hasta que impacte. Un buen seguimiento indica una ejecucion correcta.",
    image: "/images/follow-through.jpg",
  },
]

export function TechniqueSteps() {
  return (
    <section id="pasos" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Paso a Paso
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            La Secuencia del Tiro Olimpico
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada fase del tiro es crucial para lograr precision y consistencia.
            Domina cada paso antes de avanzar al siguiente.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card">
                  <Image
                    src={step.image}
                    alt={step.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-6xl font-bold text-primary/30">
                    {step.number}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 lg:px-8">
                <span className="text-primary font-mono text-sm">
                  Paso {step.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                  {step.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
