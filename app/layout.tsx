import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Namaste Studio Yoga",
  description: "Encontre sua jornada para a paz interior e bem-estar físico no Studio Namaste.",
  generator: 'Araujoozx'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link
          rel="preload"
          href="/fonts/BritishCastilla-Script.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}


import './globals.css'