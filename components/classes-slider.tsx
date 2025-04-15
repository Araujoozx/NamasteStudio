"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Pilates",
    description: "Fortaleça seu core, melhore sua postura e ganhe flexibilidade com exercícios precisos.",
    image: "https://i.postimg.cc/sxNFB4zn/upscalemedia-transformed.jpg",
    fallbackImage: "https://via.placeholder.com/1200x600/c673df/ffffff?text=Pilates",
    benefits: ["Fortalecimento muscular", "Melhora da postura", "Alívio de dores crônicas"],
  },
  {
    id: 2,
    title: "Yoga",
    description: "Encontre equilíbrio entre corpo e mente através de posturas e respiração consciente.",
    image: "https://i.postimg.cc/CK39VxN2/image-remini-enhanced.jpg",
    fallbackImage: "https://via.placeholder.com/1200x600/c673df/ffffff?text=Yoga",
    benefits: ["Redução do estresse", "Aumento da flexibilidade", "Equilíbrio emocional"],
  },
  {
    id: 3,
    title: "Crosstraining",
    description: "Treinamento intenso combinando força, resistência e condicionamento físico.",
    image: "https://i.postimg.cc/2SqWBkQT/IMG-20250228-WA0101-remini-enhanced.jpg",
    fallbackImage: "https://via.placeholder.com/1920x1080/c673df/ffffff?text=Crosstraining",
    benefits: ["Ganho de força", "Condicionamento cardiovascular", "Queima calórica"],
  },
  {
    id: 4,
    title: "Massagem",
    description: "Alivie o estresse e tensão muscular com nossas técnicas especializadas de massagem.",
    image: "https://i.postimg.cc/15vkRdPd/567b9c7f-9717-4a75-b3a6-9b055809b06e-1.jpg",
    fallbackImage: "http://via.placeholder.com/1200x600/c673df/ffffff?text=Massage",
    benefits: ["Relaxamento profundo", "Alívio de tensões", "Melhora da circulação"],
  },
  {
    id: 5,
    title: "Fisioterapia",
    description: "Recupere sua mobilidade e alivie dores com tratamentos personalizados de fisioterapia.",
    image: "https://i.postimg.cc/7YLyYTYM/wmremove-transformed-remini-enhanced-1.png",
    fallbackImage: "https://via.placeholder.com/1200x600/c673df/ffffff?text=Fisioterapia",
    benefits: ["Reabilitação física", "Tratamento de lesões", "Prevenção de dores"],
  },
]

export default function ClassesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(slides.length).fill(false))
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const slideRef = useRef<HTMLDivElement>(null)

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
  }

  useEffect(() => {
    startSlideshow()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    startSlideshow()
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    startSlideshow()
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrentSlide(index)
    startSlideshow()
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleImageLoad = (index: number) => {
    const newLoaded = [...isLoaded]
    newLoaded[index] = true
    setIsLoaded(newLoaded)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev()
    }
  }

  return (
    <section id="classes" className="py-20 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container animate-fade-in">
        <h2 className="section-title relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-pink-500 after:to-pink-300">
          Nossas Aulas
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Descubra uma variedade de práticas que promovem saúde, bem-estar e equilíbrio para corpo e mente.
        </p>

        <div
          className="relative w-full h-[80vh] min-h-[600px] overflow-hidden rounded-2xl shadow-xl"
          ref={slideRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = slide.fallbackImage
                  }}
                  onLoad={() => handleImageLoad(index)}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 text-white">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-xl mb-6 max-w-xl text-white/90">{slide.description}</p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-pink-300">Benefícios:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {slide.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                          <span className="text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#pricing"
                    className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20 transition-all hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <span>Comece Agora</span>
                    <svg
                      className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 z-10">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors backdrop-blur-sm border border-white/10 transform hover:scale-110 transition-transform"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors backdrop-blur-sm border border-white/10 transform hover:scale-110 transition-transform"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-pink-500 scale-125" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium z-10">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </section>
  )
}
