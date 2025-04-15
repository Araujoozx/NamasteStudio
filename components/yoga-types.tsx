import YogaImage from "./yoga-image"

const yogaTypes = [
  {
    id: 1,
    title: "Hatha Yoga",
    description: [
      "Esta prática apresenta os ensinamentos tradicionais do Yoga voltados para a saúde integral e vitalidade.",
      "É constituída de ásanas (posturas), permanência, alinhamento, técnicas de respiração e de purificação interna, relaxamento e meditação.",
      "Indicada a todos os níveis de praticantes.",
    ],
    image: "https://i.postimg.cc/CK39VxN2/image-remini-enhanced.jpg",
    fallbackImage: "https://via.placeholder.com/600x400/c673df/ffffff?text=Hatha+Yoga",
  },
  {
    id: 2,
    title: "Yoga Restaurativa",
    description: [
      "O yoga restaurativa tem como foco o relaxamento profundo e a redução da ansiedade e estresse.",
      "Poucas posturas são executadas com longas permanências e com o uso de acessórios – mantas, bolsters, blocos e fitas – que proporcionam apoio e segurança ao corpo estimulando o sistema nervoso parassimpático.",
      "O SNP é responsável por diminuir a frequência cardíaca e a respiração e aumentar o fluxo sanguíneo para os órgãos vitais, entre outras coisas.",
      "Indicada a todos os níveis de praticantes.",
    ],
    image: "https://i.postimg.cc/BQyTSNLf/2f862a54-0c81-426c-97d7-47f200366a1f.jpg",
    fallbackImage: "https://via.placeholder.com/600x400/c673df/ffffff?text=Yoga+Restaurativa",
  },
  {
    id: 3,
    title: "Yoga na Kurunta",
    description: [
      "Leve sua prática de yoga para as alturas e use a força da gravidade para influenciar o seu corpo.",
      'Com o uso extensivo dos kuruntas ("cordas" fixas na parede) esta prática oferece inúmeros benefícios terapêuticos, além de construir força e mobilidade por todo o corpo.',
      "Indicada aos praticantes iniciantes.",
    ],
    image: "https://i.postimg.cc/CK39VxN2/image-remini-enhanced.jpg",
    fallbackImage: "https://via.placeholder.com/600x400/c673df/ffffff?text=Yoga+na+Kurunta",
  },
  {
    id: 4,
    title: "Meditação",
    description: [
      "Variedades de técnicas de meditação que proporcionam níveis profundos de concentração, atenção e auto-consciência.",
      "Traz paz mental, favorece o alívio da ansiedade e combate ao stress.",
      "Indicada a todos os níveis de praticantes.",
    ],
    image: "https://i.postimg.cc/CK39VxN2/image-remini-enhanced.jpg",
    fallbackImage: "https://via.placeholder.com/600x400/c673df/ffffff?text=Meditação",
  },
]

export default function YogaTypes() {
  return (
    <section id="yoga-types" className="py-20 bg-gray-50">
      <div className="container animate-fade-in">
        <h2 className="section-title">Tipos de Yoga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {yogaTypes.map((type) => (
            <div
              key={type.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <YogaImage
                  src={type.image}
                  alt={type.title}
                  fallbackImage={type.fallbackImage}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-pink-500">{type.title}</h3>
                {type.description.map((paragraph, idx) => (
                  <p key={idx} className="text-sm mb-2 leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
