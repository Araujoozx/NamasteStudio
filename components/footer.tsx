import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-gradient-to-b from-white to-pink-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-pink-500 rounded-b-xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* About column */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="https://i.ibb.co/1cyCGnN/logo-Namaste.png"
                alt="Namaste Studio Logo"
                width={70}
                height={70}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-british-castilla text-gray-800 mb-1">Namaste</h3>
                <span className="text-sm tracking-wider text-gray-600">Studio</span>
              </div>
            </div>
            <p className="text-gray-600 mb-8 max-w-xs leading-relaxed">
              Desde 2016, o Namaste Studio tem sido um santuário para
              aqueles que buscam bem-estar físico e mental através do yoga e pilates.
            </p>
            <div className="flex gap-5">
              <Link
                href="https://www.facebook.com/namastestudioyogaom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-pink-100 group"
              >
                <Facebook className="w-5 h-5 text-pink-500 group-hover:text-pink-600 transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/studionamastesv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-pink-100 group"
              >
                <Instagram className="w-5 h-5 text-pink-500 group-hover:text-pink-600 transition-colors" />
              </Link>
            </div>
          </div>

          {/* São Vicente column */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-pink-50 h-full">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-pink-500">
              Namaste São Vicente
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <Link 
                  href="https://maps.app.goo.gl/ZR6Y7waDED2jcnkL6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  R. Messia Assú, 397 - Boa Vista, São Vicente - 11320-130
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">+55 13 3395-4022</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <Link
                  href="mailto:studionamastesaovicente@gmail.com"
                  className="text-gray-600 hover:text-pink-500 transition-colors text-sm break-words"
                >
                  studionamaste<wbr/>saovicente<wbr/>@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <div className="text-gray-600 text-sm">
                  <p>Seg-Sex: 7h às 21h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Praia Grande column */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-pink-50 h-full">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-pink-500">
              Namaste Praia Grande
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <Link 
                  href="https://maps.app.goo.gl/qRyEJ7TDjRbcZ3jG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  R. Fumio Mizayi, 1242 - Boqueirão, Praia Grande - 11701-715
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">+55 13 3491-3344</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <Link
                  href="mailto:studionamaste2pg@gmail.com"
                  className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  studionamaste2pg@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <div className="text-gray-600 text-sm">
                  <p>Seg-Sex: 7h às 21h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Links column */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-pink-50 h-full">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-pink-500">
              Links Rápidos
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/#classes" className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                  Nossas Aulas
                </Link>
              </li>
              <li>
                <Link href="/#yoga-types" className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                  Tipos de Yoga
                </Link>
              </li>
              <li>
                <Link href="/#schedule" className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                  Horários
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-pink-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Namaste Studio. Todos os direitos
              reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-500">
              <Link href="/privacidade" className="hover:text-pink-500 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="hover:text-pink-500 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-6 opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#ff69b4"
            fillOpacity="0.5"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  )
}
