import React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Oswald } from "next/font/google"

import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Punk Electric Argentina",
  description:
    "Scooters electricos de alto rendimiento. Punk Rider, Punk Rider Pro, Punk Rider Pro Max y Punk Rebel. Envios a toda Argentina.",
  icons: {
    icon: "https://punkelectric.com/wp-content/uploads/2023/08/cropped-Logo-dark-32x32.png",
    apple:
      "https://punkelectric.com/wp-content/uploads/2023/08/cropped-Logo-dark-180x180.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
