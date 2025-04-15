import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <section
        className="about-hero bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.postimg.cc/CK39VxN2/image-remini-enhanced.jpg')",
        }}
      >
        <div className="container mx-auto px-4 md:px-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa História</h1>
          <p className="text-xl opacity-90">Conheça a jornada do Studio Namaste</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="about-text">
              <h2 className="text-3xl font-bold mb-6 text-left">Nossa Missão</h2>
              <p className="mb-8 text-lg leading-relaxed">
                O Studio Namaste nasceu do sonho de criar um espaço acolhedor e transformador, onde as pessoas pudessem
                encontrar equilíbrio entre corpo e mente através das práticas de yoga e pilates.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-left">Nossa História</h2>
              <p className="mb-8 text-lg leading-relaxed">
                Desde 2016, temos servido à comunidade com dedicação e amor. Começamos com uma pequena unidade em São
                Vicente e, graças ao apoio de nossos alunos, expandimos para Praia Grande em 2020.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-left">Nossos Valores</h2>
              <ul className="mb-8">
                {[
                  "Excelência no ensino",
                  "Respeito à individualidade",
                  "Ambiente acolhedor",
                  "Compromisso com o bem-estar",
                  "Comunidade unida",
                ].map((value, index) => (
                  <li
                    key={index}
                    className="mb-4 pl-6 relative text-lg before:content-['•'] before:text-pink-500 before:absolute before:left-0"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-image">
              <Image
                src="https://i.postimg.cc/CK39VxN2/image-remini-enhanced.jpg"
                alt="Studio Namaste Interior"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
