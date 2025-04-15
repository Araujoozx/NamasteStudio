"use client"

import { useState } from "react"
import Link from "next/link"

export default function WhatsAppButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        className="w-16 h-16 md:w-[75px] md:h-[75px] rounded-full bg-gradient-to-r from-white to-gray-100 text-[#25d366] text-4xl flex items-center justify-center shadow-lg border-[2.5px] border-[#25d366]/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2"
        onClick={toggleMenu}
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(37,211,102,0.25)_0%,transparent_70%)] animate-pulse"></span>
        <i className="fab fa-whatsapp relative z-10 bg-gradient-to-br from-[#25d366] to-[#128C7E] bg-clip-text text-transparent drop-shadow-sm"></i>
      </button>

      <div
        className={`absolute bottom-full right-0 mb-5 w-[360px] max-w-[calc(100vw-40px)] bg-white rounded-3xl shadow-2xl border-[1.5px] border-[#25d366]/15 p-7 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-6 pointer-events-none"
        }`}
      >
        <div className="text-gray-800 text-base mb-7 pb-4 border-b-[2.5px] border-[#25d366]/15 font-medium">
          Olá! Clique em uma de nossas unidades abaixo e entraremos em contato com você o mais breve possível.
        </div>

        <Link
          href="https://api.whatsapp.com/send?phone=551333954022&text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas,%20pode%20me%20ajudar?"
          className="flex items-center p-5 rounded-2xl bg-gradient-to-r from-white to-gray-50 border-[1.5px] border-[#25d366]/10 mb-3 hover:translate-x-2 hover:shadow-md hover:border-[#25d366]/25 transition-all duration-300 relative overflow-hidden"
          target="_blank"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#25d366]/5 to-[#128C7E]/5 opacity-0 hover:opacity-100 transition-opacity"></span>
          <i className="fab fa-whatsapp text-3xl bg-gradient-to-br from-[#25d366] to-[#128C7E] bg-clip-text text-transparent mr-5 relative z-10"></i>
          <div className="flex flex-col relative z-10">
            <span className="font-semibold text-gray-900 mb-1">Studio Namaste - São Vicente</span>
            <small className="text-gray-600 text-sm">São Vicente</small>
          </div>
        </Link>

        <Link
          href="https://api.whatsapp.com/send?phone=551334913344&text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas,%20pode%20me%20ajudar?"
          className="flex items-center p-5 rounded-2xl bg-gradient-to-r from-white to-gray-50 border-[1.5px] border-[#25d366]/10 hover:translate-x-2 hover:shadow-md hover:border-[#25d366]/25 transition-all duration-300 relative overflow-hidden"
          target="_blank"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#25d366]/5 to-[#128C7E]/5 opacity-0 hover:opacity-100 transition-opacity"></span>
          <i className="fab fa-whatsapp text-3xl bg-gradient-to-br from-[#25d366] to-[#128C7E] bg-clip-text text-transparent mr-5 relative z-10"></i>
          <div className="flex flex-col relative z-10">
            <span className="font-semibold text-gray-900 mb-1">Studio Namaste - Praia Grande</span>
            <small className="text-gray-600 text-sm">Praia Grande</small>
          </div>
        </Link>

        <div className="absolute -bottom-3 right-8 w-6 h-6 bg-white transform rotate-45 border-r-[1.5px] border-b-[1.5px] border-[#25d366]/15 shadow-md"></div>
      </div>
    </div>
  )
}
