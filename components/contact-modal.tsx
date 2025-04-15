"use client"

import type React from "react"

import { useState } from "react"

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [location, setLocation] = useState("sv")

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = ""
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <>
      <button
        className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg hover:bg-pink-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        onClick={openModal}
        aria-label="Contact Form"
      >
        <i className="fas fa-envelope text-xl"></i>
      </button>

      <div
        className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOutsideClick}
      >
        <div
          className={`bg-white w-[90%] max-w-lg rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-12"
          }`}
        >
          <button
            className="absolute top-4 right-5 text-3xl text-gray-600 hover:text-pink-500 transition-colors"
            onClick={closeModal}
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-6 text-center">Contate-nos</h2>
          <form
            action={`https://formsubmit.co/${
              location === "sv" ? "studionamastesaovicente@gmail.com" : "studionamaste2pg@gmail.com"
            }`}
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Unidade
              </label>
              <select
                id="location"
                name="unidade"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 transition-all"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              >
                <option value="sv">São Vicente</option>
                <option value="pg">Praia Grande</option>
              </select>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="nome"
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 transition-all"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="mensagem"
                required
                rows={4}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring focus:ring-pink-200 transition-all resize-y"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>
            <input type="hidden" name="_next" value="https://namastestudioyoga.com.br" />
            <input type="hidden" name="_subject" value="Nova mensagem do site!" />
            <button type="submit" className="w-full cta-button mt-4">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
