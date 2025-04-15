import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container animate-fade-in">
        <h2 className="section-title">Nossas Unidades</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-50/30 to-white p-8 rounded-xl shadow-lg border-2 border-pink-100/50 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-pink-500 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-pink-500 after:to-transparent">
              Unidade de São Vicente
            </h3>
            <address className="not-italic">
              <p className="flex items-start mb-5 p-3 rounded-xl hover:bg-pink-50/50 transition-all hover:translate-x-1">
                <i className="fas fa-map-marker-alt text-pink-500 mr-4 mt-1 text-xl"></i>
                <span>
                  <Link
                    href="https://maps.app.goo.gl/ZR6Y7waDED2jcnkL6"
                    target="_blank"
                    className="hover:text-pink-500 transition-colors"
                  >
                    R. Messia Assú, 397 - Boa Vista
                    <br />
                    São Vicente - 11320-130
                    <br />
                    São Paulo, Brasil
                  </Link>
                </span>
              </p>
              <p className="flex items-start mb-5 p-3 rounded-xl hover:bg-pink-50/50 transition-all hover:translate-x-1">
                <i className="fas fa-phone text-pink-500 mr-4 mt-1 text-xl"></i>
                <span>+55 13 3395-4022</span>
              </p>
              <p className="flex items-start mb-5 p-3 rounded-xl hover:bg-pink-50/50 transition-all hover:translate-x-1">
                <i className="fas fa-envelope text-pink-500 mr-4 mt-1 text-xl"></i>
                <span>
                  <Link
                    href="mailto:studionamastesaovicente@gmail.com"
                    className="text-pink-500 hover:opacity-80 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-pink-500 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                  >
                    studionamastesaovicente@gmail.com
                  </Link>
                </span>
              </p>
            </address>
          </div>

          <div className="bg-gradient-to-br from-pink-50/30 to-white p-8 rounded-xl shadow-lg border-2 border-pink-100/50 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-pink-500 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-pink-500 after:to-transparent">
              Unidade de Praia Grande
            </h3>
            <address className="not-italic">
              <p className="flex items-start mb-5 p-3 rounded-xl hover:bg-pink-50/50 transition-all hover:translate-x-1">
                <i className="fas fa-map-marker-alt text-pink-500 mr-4 mt-1 text-xl"></i>
                <span>
                  <Link
                    href="https://maps.app.goo.gl/qRyEJ7TDjRbcZ3jG8"
                    target="_blank"
                    className="hover:text-pink-500 transition-colors"
                  >
                    R. Fumio Mizayi, 1242 - Boqueirão
                    <br />
                    Praia Grande - 11701-715
                    <br />
                    São Paulo, Brasil
                  </Link>
                </span>
              </p>
              <p className="flex items-start mb-5 p-3 rounded-xl hover:bg-pink-50/50 transition-all hover:translate-x-1">
                <i className="fas fa-phone text-pink-500 mr-4 mt-1 text-xl"></i>
                <span>+55 13 3491-3344</span>
              </p>
              <p className="flex items-start mb-5 p-3 rounded-xl hover:bg-pink-50/50 transition-all hover:translate-x-1">
                <i className="fas fa-envelope text-pink-500 mr-4 mt-1 text-xl"></i>
                <span>
                  <Link
                    href="mailto:studionamaste2pg@gmail.com"
                    className="text-pink-500 hover:opacity-80 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-pink-500 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                  >
                    studionamaste2pg@gmail.com
                  </Link>
                </span>
              </p>
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}
