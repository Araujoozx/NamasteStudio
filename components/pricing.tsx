"use client"

import { useState } from "react"
import Link from "next/link"

// Pricing data
const pricingData = {
  "sv-prices": {
    mensal: [
      { id: 1, title: "Pilates - 1x por semana", price: "R$ 200,00", type: "pilates", phone: "551333954022" },
      { id: 2, title: "Pilates - 2x por semana", price: "R$ 270,00", type: "pilates", phone: "551333954022" },
      { id: 3, title: "Pilates - 3x por semana", price: "R$ 310,00", type: "pilates", phone: "551333954022" },
      { id: 4, title: "Yoga - 1x por semana", price: "R$ 200,00", type: "yoga", phone: "551333954022" },
      { id: 5, title: "Yoga - 2x por semana", price: "R$ 270,00", type: "yoga", phone: "551333954022" },
      { id: 6, title: "Yoga - 3x por semana", price: "R$ 310,00", type: "yoga", phone: "551333954022" },
      { id: 7, title: "Crosstraining", price: "R$ 250,00", type: "fisio", phone: "551333954022" },
    ],
    trimestral: [
      { id: 1, title: "Pilates - 1x por semana", price: "R$ 180,00", type: "pilates", phone: "551333954022" },
      { id: 2, title: "Pilates - 2x por semana", price: "R$ 250,00", type: "pilates", phone: "551333954022" },
      { id: 3, title: "Pilates - 3x por semana", price: "R$ 290,00", type: "pilates", phone: "551333954022" },
      { id: 4, title: "Yoga - 1x por semana", price: "R$ 180,00", type: "yoga", phone: "551333954022" },
      { id: 5, title: "Yoga - 2x por semana", price: "R$ 250,00", type: "yoga", phone: "551333954022" },
      { id: 6, title: "Yoga - 3x por semana", price: "R$ 290,00", type: "yoga", phone: "551333954022" },
      { id: 7, title: "Crosstraining", price: "R$ 230,00", type: "fisio", phone: "551333954022" },
    ],
    semestral: [
      { id: 1, title: "Pilates - 1x por semana", price: "R$ 160,00", type: "pilates", phone: "551333954022" },
      { id: 2, title: "Pilates - 2x por semana", price: "R$ 230,00", type: "pilates", phone: "551333954022" },
      { id: 3, title: "Pilates - 3x por semana", price: "R$ 270,00", type: "pilates", phone: "551333954022" },
      { id: 4, title: "Yoga - 1x por semana", price: "R$ 160,00", type: "yoga", phone: "551333954022" },
      { id: 5, title: "Yoga - 2x por semana", price: "R$ 230,00", type: "yoga", phone: "551333954022" },
      { id: 6, title: "Yoga - 3x por semana", price: "R$ 270,00", type: "yoga", phone: "551333954022" },
      { id: 7, title: "Crosstraining", price: "R$ 210,00", type: "fisio", phone: "551333954022" },
    ],
    anual: [
      { id: 1, title: "Pilates - 1x por semana", price: "R$ 140,00", type: "pilates", phone: "551333954022" },
      { id: 2, title: "Pilates - 2x por semana", price: "R$ 210,00", type: "pilates", phone: "551333954022" },
      { id: 3, title: "Pilates - 3x por semana", price: "R$ 240,00", type: "pilates", phone: "551333954022" },
      { id: 4, title: "Yoga - 1x por semana", price: "R$ 140,00", type: "yoga", phone: "551333954022" },
      { id: 5, title: "Yoga - 2x por semana", price: "R$ 210,00", type: "yoga", phone: "551333954022" },
      { id: 6, title: "Yoga - 3x por semana", price: "R$ 240,00", type: "yoga", phone: "551333954022" },
      { id: 7, title: "Crosstraining", price: "R$ 180,00", type: "fisio", phone: "551333954022" },
    ],
  },
  "pg-prices": {
    mensal: [
      { id: 1, title: "Pilates - 1x por semana", price: "R$ 200,00", type: "pilates", phone: "551334913344" },
      { id: 2, title: "Pilates - 2x por semana", price: "R$ 270,00", type: "pilates", phone: "551334913344" },
      { id: 3, title: "Pilates - 3x por semana", price: "R$ 310,00", type: "pilates", phone: "551334913344" },
      { id: 4, title: "Yoga - 1x por semana", price: "R$ 200,00", type: "yoga", phone: "551334913344" },
      { id: 5, title: "Yoga - 2x por semana", price: "R$ 270,00", type: "yoga", phone: "551334913344" },
      { id: 6, title: "Yoga - 3x por semana", price: "R$ 310,00", type: "yoga", phone: "551334913344" },
      { id: 7, title: "Fisioterapia - 1 Sessão", price: "R$ 100,00", type: "fisio", phone: "551334913344" },
      { id: 8, title: "Fisioterapia - 5 Sessões", price: "R$ 400,00", type: "fisio", phone: "551334913344" },
      { id: 9, title: "Fisioterapia - 10 Sessões", price: "R$ 650,00", type: "fisio", phone: "551334913344" },
    ],
    trimestral: [
      { id: 1, title: "Pilates - 1x por semana", price: "R$ 180,00", type: "pilates", phone: "551334913344" },
      { id: 2, title: "Pilates - 2x por semana", price: "R$ 250,00", type: "pilates", phone: "551334913344" },
      { id: 3, title: "Pilates - 3x por semana", price: "R$ 290,00", type: "pilates", phone: "551334913344" },
      { id: 4, title: "Yoga - 1x por semana", price: "R$ 180,00", type: "yoga", phone: "551334913344" },
      { id: 5, title: "Yoga - 2x por semana", price: "R$ 250,00", type: "yoga", phone: "551334913344" },
      { id: 6, title: "Yoga - 3x por semana", price: "R$ 290,00", type: "yoga", phone: "551334913344" },
      { id: 7, title: "Fisioterapia - 1 Sessão", price: "R$ 100,00", type: "fisio", phone: "551334913344" },
      { id: 8, title: "Fisioterapia - 5 Sessões", price: "R$ 400,00", type: "fisio", phone: "551334913344" },
      { id: 9, title: "Fisioterapia - 10 Sessões", price: "R$ 650,00", type: "fisio", phone: "551334913344" },
    ],
    semestral: [
      { id: 1, title: "Pilates - 1x por semana", price: "R$ 160,00", type: "pilates", phone: "551334913344" },
      { id: 2, title: "Pilates - 2x por semana", price: "R$ 230,00", type: "pilates", phone: "551334913344" },
      { id: 3, title: "Pilates - 3x por semana", price: "R$ 270,00", type: "pilates", phone: "551334913344" },
      { id: 4, title: "Yoga - 1x por semana", price: "R$ 160,00", type: "yoga", phone: "551334913344" },
      { id: 5, title: "Yoga - 2x por semana", price: "R$ 230,00", type: "yoga", phone: "551334913344" },
      { id: 6, title: "Yoga - 3x por semana", price: "R$ 270,00", type: "yoga", phone: "551334913344" },
      { id: 7, title: "Fisioterapia - 1 Sessão", price: "R$ 100,00", type: "fisio", phone: "551334913344" },
      { id: 8, title: "Fisioterapia - 5 Sessões", price: "R$ 400,00", type: "fisio", phone: "551334913344" },
      { id: 9, title: "Fisioterapia - 10 Sessões", price: "R$ 650,00", type: "fisio", phone: "551334913344" },
    ],
    anual: [
      { id: 1, title: "Pilates - 1x por semana", price: "R$ 140,00", type: "pilates", phone: "551334913344" },
      { id: 2, title: "Pilates - 2x por semana", price: "R$ 210,00", type: "pilates", phone: "551334913344" },
      { id: 3, title: "Pilates - 3x por semana", price: "R$ 240,00", type: "pilates", phone: "551334913344" },
      { id: 4, title: "Yoga - 1x por semana", price: "R$ 140,00", type: "yoga", phone: "551334913344" },
      { id: 5, title: "Yoga - 2x por semana", price: "R$ 210,00", type: "yoga", phone: "551334913344" },
      { id: 6, title: "Yoga - 3x por semana", price: "R$ 240,00", type: "yoga", phone: "551334913344" },
      { id: 7, title: "Fisioterapia - 1 Sessão", price: "R$ 100,00", type: "fisio", phone: "551334913344" },
      { id: 8, title: "Fisioterapia - 5 Sessões", price: "R$ 400,00", type: "fisio", phone: "551334913344" },
      { id: 9, title: "Fisioterapia - 10 Sessões", price: "R$ 650,00", type: "fisio", phone: "551334913344" },
    ],
  },
}

export default function Pricing() {
  const [activeLocation, setActiveLocation] = useState("sv-prices")
  const [activePlan, setActivePlan] = useState("mensal")

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="container animate-fade-in">
        <h2 className="section-title">Planos e Preços</h2>

        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <button
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-all ${
              activeLocation === "sv-prices"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
            }`}
            onClick={() => setActiveLocation("sv-prices")}
          >
            São Vicente
          </button>
          <button
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-all ${
              activeLocation === "pg-prices"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
            }`}
            onClick={() => setActiveLocation("pg-prices")}
          >
            Praia Grande
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
              activePlan === "mensal"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
            }`}
            onClick={() => setActivePlan("mensal")}
          >
            Mensal
          </button>
          <button
            className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
              activePlan === "trimestral"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
            }`}
            onClick={() => setActivePlan("trimestral")}
          >
            Trimestral
          </button>
          <button
            className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
              activePlan === "semestral"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
            }`}
            onClick={() => setActivePlan("semestral")}
          >
            Semestral
          </button>
          <button
            className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
              activePlan === "anual"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
            }`}
            onClick={() => setActivePlan("anual")}
          >
            Anual
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData[activeLocation as keyof typeof pricingData][
            activePlan as keyof (typeof pricingData)["sv-prices"]
          ].map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 ${
                plan.type === "pilates"
                  ? "border-t-4 border-pink-500"
                  : plan.type === "yoga"
                    ? "border-t-4 border-orange-500"
                    : "border-t-4 border-rose-600"
              }`}
            >
              <h3 className="text-xl font-bold mb-5 text-gray-700">{plan.title}</h3>
              <p className="text-4xl font-bold text-pink-500 my-6">{plan.price}</p>
              <Link
                href={`https://api.whatsapp.com/send?phone=${plan.phone}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20${activePlan}%20de%20${encodeURIComponent(plan.title)}`}
                className="cta-button w-full mt-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.type === "fisio" ? "Agende Agora" : "Comece Agora"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
