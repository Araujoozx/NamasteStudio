"use client"

import { useState } from "react"

// Schedule data
const scheduleData = {
  sv: {
    yoga: [
      {
        time: "08:00",
        monday: "Hatha Yoga",
        tuesday: "",
        wednesday: "Hatha Yoga",
        thursday: "",
        friday: "",
        saturday: "Yoga na Kurunta",
      },
      { time: "09:00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "Yoga na Kurunta" },
      {
        time: "16:00",
        monday: "",
        tuesday: "Hatha Yoga",
        wednesday: "",
        thursday: "Hatha Yoga",
        friday: "",
        saturday: "",
      },
      { time: "17:00", monday: "", tuesday: "Yoga na Kurunta", wednesday: "", thursday: "", friday: "", saturday: "" },
      {
        time: "19:00",
        monday: "Hatha Yoga",
        tuesday: "Hatha Yoga",
        wednesday: "Hatha Yoga",
        thursday: "Hatha Yoga",
        friday: "Yoga Restaurativa",
        saturday: "",
      },
      {
        time: "20:00",
        monday: "Hatha Yoga",
        tuesday: "Hatha Yoga",
        wednesday: "Hatha Yoga",
        thursday: "Meditação",
        friday: "Hatha Yoga",
        saturday: "",
      },
    ],
    crosstraining: [
      {
        time: "07:00",
        monday: "Prof. Jorge",
        tuesday: "Prof. Jorge",
        wednesday: "Prof. Jorge",
        thursday: "Prof. Jorge",
        friday: "Prof. Jorge",
        saturday: "Prof. Alessandra",
      },
      {
        time: "08:00",
        monday: "Prof. Jorge",
        tuesday: "Prof. Jorge",
        wednesday: "Prof. Jorge",
        thursday: "Prof. Jorge",
        friday: "Prof. Jorge",
        saturday: "Prof. Alessandra",
      },
      {
        time: "09:00",
        monday: "Prof. Jorge",
        tuesday: "Prof. Jorge",
        wednesday: "Prof. Jorge",
        thursday: "Prof. Jorge",
        friday: "Prof. Jorge",
        saturday: "Prof. Alessandra",
      },
      {
        time: "17:00",
        monday: "Prof. Bruno",
        tuesday: "Prof. Bruno",
        wednesday: "Prof. Bruno",
        thursday: "Prof. Bruno",
        friday: "Prof. Bruno",
        saturday: "",
      },
      {
        time: "18:00",
        monday: "Prof. Bruno",
        tuesday: "Prof. Bruno",
        wednesday: "Prof. Bruno",
        thursday: "Prof. Bruno",
        friday: "Prof. Bruno",
        saturday: "",
      },
      {
        time: "19:00",
        monday: "Prof. Bruno",
        tuesday: "Prof. Bruno",
        wednesday: "Prof. Bruno",
        thursday: "Prof. Bruno",
        friday: "Prof. Bruno",
        saturday: "",
      },
      {
        time: "20:00",
        monday: "Prof. Bruno",
        tuesday: "Prof. Bruno",
        wednesday: "Prof. Bruno",
        thursday: "Prof. Bruno",
        friday: "Prof. Bruno",
        saturday: "",
      },
    ],
    pilates: Array(13)
      .fill(null)
      .map((_, index) => {
        const time = index < 5 ? `0${index + 7}:00` : index === 5 ? "13:00" : `${index + 8}:00`
        return {
          time,
          monday: "Pilates",
          tuesday: index === 5 ? "" : "Pilates",
          wednesday: "Pilates",
          thursday: index === 5 ? "" : "Pilates",
          friday: "Pilates",
          saturday: index < 5 ? "Pilates" : "",
        }
      }),
  },
  pg: {
    yoga: [
      {
        time: "07:00",
        monday: "Hatha Yoga",
        tuesday: "",
        wednesday: "Hatha Yoga",
        thursday: "",
        friday: "",
        saturday: "",
      },
      {
        time: "19:00",
        monday: "Hatha Yoga",
        tuesday: "",
        wednesday: "Hatha Yoga",
        thursday: "",
        friday: "Yoga Restaurativa",
        saturday: "",
      },
    ],
    meditacao: [
      { time: "20:00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "Meditação", saturday: "" },
    ],
  },
}

export default function Schedule() {
  const [activeLocation, setActiveLocation] = useState("sv")
  const [activeTab, setActiveTab] = useState(activeLocation === "sv" ? "yoga-sv" : "yoga-pg")

  const handleLocationChange = (location: string) => {
    setActiveLocation(location)
    setActiveTab(location === "sv" ? "yoga-sv" : "yoga-pg")
  }

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="container animate-fade-in">
        <h2 className="section-title">Horários</h2>

        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <button
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-all ${
              activeLocation === "sv"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
            }`}
            onClick={() => handleLocationChange("sv")}
          >
            São Vicente
          </button>
          <button
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-all ${
              activeLocation === "pg"
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
            }`}
            onClick={() => handleLocationChange("pg")}
          >
            Praia Grande
          </button>
        </div>

        <div className="mb-10">
          {activeLocation === "sv" && (
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                  activeTab === "yoga-sv"
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
                }`}
                onClick={() => setActiveTab("yoga-sv")}
              >
                Yoga
              </button>
              <button
                className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                  activeTab === "crosstraining-sv"
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
                }`}
                onClick={() => setActiveTab("crosstraining-sv")}
              >
                Crosstraining
              </button>
              <button
                className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                  activeTab === "pilates-sv"
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
                }`}
                onClick={() => setActiveTab("pilates-sv")}
              >
                Pilates
              </button>
            </div>
          )}

          {activeLocation === "pg" && (
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                  activeTab === "yoga-pg"
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
                }`}
                onClick={() => setActiveTab("yoga-pg")}
              >
                Yoga
              </button>
              <button
                className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                  activeTab === "meditacao-pg"
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:-translate-y-1 shadow-md"
                }`}
                onClick={() => setActiveTab("meditacao-pg")}
              >
                Meditação
              </button>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg min-w-[800px] lg:min-w-0">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-pink-500 text-white py-4 px-3 uppercase text-sm tracking-wider rounded-tl-lg">
                    Horário
                  </th>
                  <th className="bg-pink-500 text-white py-4 px-3 uppercase text-sm tracking-wider">Segunda</th>
                  <th className="bg-pink-500 text-white py-4 px-3 uppercase text-sm tracking-wider">Terça</th>
                  <th className="bg-pink-500 text-white py-4 px-3 uppercase text-sm tracking-wider">Quarta</th>
                  <th className="bg-pink-500 text-white py-4 px-3 uppercase text-sm tracking-wider">Quinta</th>
                  <th className="bg-pink-500 text-white py-4 px-3 uppercase text-sm tracking-wider">Sexta</th>
                  <th className="bg-pink-500 text-white py-4 px-3 uppercase text-sm tracking-wider rounded-tr-lg">
                    Sábado
                  </th>
                </tr>
              </thead>
              <tbody>
                {activeTab === "yoga-sv" &&
                  scheduleData.sv.yoga.map((row, index) => (
                    <tr key={index} className="hover:bg-pink-50/50 transition-colors">
                      <td className="py-4 px-3 text-pink-500 font-semibold border-b border-gray-100">{row.time}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.monday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.tuesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.wednesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.thursday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.friday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.saturday}</td>
                    </tr>
                  ))}

                {activeTab === "crosstraining-sv" &&
                  scheduleData.sv.crosstraining.map((row, index) => (
                    <tr key={index} className="hover:bg-pink-50/50 transition-colors">
                      <td className="py-4 px-3 text-pink-500 font-semibold border-b border-gray-100">{row.time}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.monday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.tuesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.wednesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.thursday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.friday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.saturday}</td>
                    </tr>
                  ))}

                {activeTab === "pilates-sv" &&
                  scheduleData.sv.pilates.map((row, index) => (
                    <tr key={index} className="hover:bg-pink-50/50 transition-colors">
                      <td className="py-4 px-3 text-pink-500 font-semibold border-b border-gray-100">{row.time}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.monday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.tuesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.wednesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.thursday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.friday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.saturday}</td>
                    </tr>
                  ))}

                {activeTab === "yoga-pg" &&
                  scheduleData.pg.yoga.map((row, index) => (
                    <tr key={index} className="hover:bg-pink-50/50 transition-colors">
                      <td className="py-4 px-3 text-pink-500 font-semibold border-b border-gray-100">{row.time}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.monday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.tuesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.wednesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.thursday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.friday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.saturday}</td>
                    </tr>
                  ))}

                {activeTab === "meditacao-pg" &&
                  scheduleData.pg.meditacao.map((row, index) => (
                    <tr key={index} className="hover:bg-pink-50/50 transition-colors">
                      <td className="py-4 px-3 text-pink-500 font-semibold border-b border-gray-100">{row.time}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.monday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.tuesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.wednesday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.thursday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.friday}</td>
                      <td className="py-4 px-3 text-gray-700 border-b border-gray-100">{row.saturday}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
