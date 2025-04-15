"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  // Modifique o useEffect para inicializar corretamente o activeSection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      // Detectar qual seção está visível na tela
      if (pathname === "/") {
        const sections = ["home", "classes", "yoga-types", "schedule", "pricing", "contact"]
        let foundActive = false

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            // Considerar uma seção visível se estiver ocupando uma parte significativa da tela
            const isVisible = rect.top < window.innerHeight / 2 && rect.bottom >= 0

            if (isVisible) {
              setActiveSection(section)
              foundActive = true
              break
            }
          }
        }

        // Se estiver no topo da página, ativar a seção "home"
        if (!foundActive && window.scrollY < 100) {
          setActiveSection("home")
        } else if (!foundActive) {
          setActiveSection("")
        }
      }
    }

    // Executar uma vez ao carregar para definir a seção inicial
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest(".nav-menu") && !target.closest(".menu-toggle")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  // Fechar o menu quando a rota mudar
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Modifique a função isActive para corrigir o comportamento do botão "Inicio"
  const isActive = (path: string) => {
    // Para links normais de página
    if (!path.startsWith("#")) {
      // Caso especial para a página inicial
      if (path === "/") {
        // Só considerar ativo se estiver na página inicial E na seção home ou no topo da página
        return pathname === "/" && (activeSection === "home" || activeSection === "")
      }
      return pathname === path
    }

    // Para links de âncora na página inicial
    if (pathname === "/") {
      const sectionId = path.substring(1) // Remove o # do início
      return activeSection === sectionId
    }

    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      } bg-white`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-4 ml-4 md:ml-0 transition-transform duration-300 hover:translate-y-[-2px]"
        >
          <Image
            src="https://i.ibb.co/1cyCGnN/logo-Namaste.png"
            alt="Namaste Studio Yoga Logo"
            width={80}
            height={80}
            className="transition-transform duration-300 hover:rotate-5"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-british-castilla text-gray-800 leading-none mb-1 tracking-wide">Namaste</h1>
            <span className="text-sm tracking-wider text-gray-600">Studio</span>
          </div>
        </Link>

        <button
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 mr-4 z-50 ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "mb-1.5"}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        <nav
          className={`nav-menu fixed md:relative top-[80px] md:top-0 left-0 w-full md:w-auto h-[calc(100vh-80px)] md:h-auto bg-white md:bg-transparent transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } transition-transform duration-300 md:transition-none overflow-y-auto md:overflow-visible z-40 md:z-auto`}
        >
          <ul className="flex flex-col md:flex-row items-center md:items-center gap-5 md:gap-8 p-6 md:p-0">
            <li>
              <Link
                href="/"
                className={`block py-3 px-4 md:py-2 md:px-3 rounded-xl text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors ${
                  isActive("/") ? "text-pink-500 bg-pink-50 font-semibold" : ""
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className={`block py-3 px-4 md:py-2 md:px-3 rounded-xl text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors ${
                  isActive("/sobre") ? "text-pink-500 bg-pink-50 font-semibold" : ""
                }`}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/#classes"
                className={`block py-3 px-4 md:py-2 md:px-3 rounded-xl text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors ${
                  isActive("#classes") ? "text-pink-500 bg-pink-50 font-semibold" : ""
                }`}
              >
                Aulas
              </Link>
            </li>
            <li>
              <Link
                href="/#yoga-types"
                className={`block py-3 px-4 md:py-2 md:px-3 rounded-xl text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors ${
                  isActive("#yoga-types") ? "text-pink-500 bg-pink-50 font-semibold" : ""
                }`}
              >
                Tipos de Yoga
              </Link>
            </li>
            <li>
              <Link
                href="/#schedule"
                className={`block py-3 px-4 md:py-2 md:px-3 rounded-xl text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors ${
                  isActive("#schedule") ? "text-pink-500 bg-pink-50 font-semibold" : ""
                }`}
              >
                Agenda
              </Link>
            </li>
            <li>
              <Link
                href="/#pricing"
                className={`block py-3 px-4 md:py-2 md:px-3 rounded-xl text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors ${
                  isActive("#pricing") ? "text-pink-500 bg-pink-50 font-semibold" : ""
                }`}
              >
                Preço
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className={`block py-3 px-4 md:py-2 md:px-3 rounded-xl text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors ${
                  isActive("#contact") ? "text-pink-500 bg-pink-50 font-semibold" : ""
                }`}
              >
                Contate-nos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
