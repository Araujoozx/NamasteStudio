import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.ibb.co/Q3cNXDfH/herobanner.png')",
      }}
    >
      <div className="text-center px-4 animate-fade-in">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Encontre seu verdadeiro Eu</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Comece sua jornada para a paz interior e bem-estar físico
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#classes" className="cta-button">
            Comece sua Jornada
          </Link>
          <Link href="/sobre" className="cta-button-outline">
            Conheça Nossa História
          </Link>
        </div>
      </div>
    </section>
  )
}
