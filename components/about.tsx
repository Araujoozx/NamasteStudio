export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container animate-fade-in">
        <h2 className="section-title">Sobre o Namaste Studio</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              Desde 2016, o Namaste Studio tem sido um santuário para aqueles que buscam bem-estar físico e mental por
              meio do yoga. Nossos instrutores experientes guiam você por uma jornada transformadora de autodescoberta.
            </p>
            <p className="text-lg leading-relaxed">
              Hoje, o yoga se tornou uma ferramenta essencial para navegar mudanças e incertezas com facilidade. Por
              meio de técnicas simples, você estabelecerá uma conexão mais precisa e permanente com seu verdadeiro eu.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Benefícios da Prática Regular</h3>
            <ul className="space-y-4">
              {[
                "Corpo forte, flexível e saudável",
                "Melhor qualidade de vida",
                "Aumento de energia e vitalidade",
                "Capacidade de lidar com a incerteza",
                "Autoconfiança Inabalável",
                "Profundo senso de paz interior",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-pink-500 mr-3">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
