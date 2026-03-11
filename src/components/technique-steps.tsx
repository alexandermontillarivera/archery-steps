import Image from "next/image"

const steps = [
  {
    number: "01",
    name: "Parada",
    image: "/photos/preparacion.jpg",
    description: "La parada es el primer paso fundamental en la técnica básica del tiro con arco. Consiste en adoptar una posición estable y equilibrada, con los pies separados a la anchura de los hombros y el cuerpo alineado hacia el objetivo. Esta postura proporciona una base sólida para ejecutar los siguientes pasos de manera efectiva."
  },
  {
    number: "02",
    name: "Agarre de cuerda y arco",
    image: "/photos/pronacion.jpg",
    description: "El agarre de la cuerda y el arco es crucial para garantizar un tiro preciso. La mano que sostiene la cuerda debe hacerlo con un agarre firme pero relajado, utilizando los dedos indice, medio y anular para sujetar la cuerda. La mano que sostiene el arco debe mantener un agarre estable, con los dedos envueltos alrededor del mango del arco, asegurando que el arco esté alineado correctamente con el objetivo."
  },
  {
    number: "03",
    name: "Elevación y mirar el objetivo",
    image: "/photos/elevacion.jpg",
    description: "La elevación implica levantar el arco hacia el objetivo, asegurándose de mantener una postura estable y controlada. Al mismo tiempo, es fundamental dirigir la mirada hacia el objetivo, enfocándose en el punto de impacto deseado. Esta combinación de elevación y enfoque visual ayuda a mejorar la precisión del tiro."
  },
  {
    number: "04",
    name: "Halar y anclaje",
    image: "/photos/anclaje.jpg",
    description: "El halar consiste en tirar de la cuerda hacia atrás, utilizando los músculos de la espalda y los brazos para generar la fuerza necesaria para el disparo. El anclaje es el punto debajo del mentón donde la mano que sostiene la cuerda se posiciona de manera consistente en cada tiro."
  },
  {
    number: "05",
    name: "Liberación",
    image: "/photos/liberacion.jpg",
    description: "La liberación es el momento en que se suelta la cuerda para disparar la flecha hacia el objetivo. Aquí se hace un movimiento suave y controlado de la mano que sostiene la cuerda hacia atrás y abriendo los dedos para liberar la cuerda."
  }
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
            Técnica Básica
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A continuación, se presentan los pasos fundamentales para ejecutar la técnica básica del tiro con arco.
            Cada paso es crucial para garantizar una ejecución precisa y efectiva.
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card">
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
