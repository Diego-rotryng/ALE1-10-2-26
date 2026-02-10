"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-colors duration-300 ${
          scrolled ? "bg-[#ffffff] shadow-sm" : "bg-[#ffffff]/90 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="block">
              <img
                src="https://punkelectric.com/wp-content/uploads/2023/08/Logo-dark.png"
                alt="Punk Electric"
                className="h-5 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#222] text-sm font-medium hover:text-[#111] transition-colors"
            >
              Inicio
            </Link>
            <div className="relative group">
              <button
                type="button"
                className="text-[#222] text-sm font-medium hover:text-[#111] transition-colors"
              >
                Productos
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-[#fff] border border-[#dedede] min-w-[200px] py-2">
                  <Link
                    href="/productos/punk-rider"
                    className="block px-5 py-2 text-sm text-[#616161] hover:text-[#111] transition-colors"
                  >
                    Punk Rider
                  </Link>
                  <Link
                    href="/productos/punk-rider-pro"
                    className="block px-5 py-2 text-sm text-[#616161] hover:text-[#111] transition-colors"
                  >
                    Punk Rider Pro
                  </Link>
                  <Link
                    href="/productos/punk-rider-pro-max"
                    className="block px-5 py-2 text-sm text-[#616161] hover:text-[#111] transition-colors"
                  >
                    Punk Rider Pro Max
                  </Link>
                  <Link
                    href="/productos/punk-rebel"
                    className="block px-5 py-2 text-sm text-[#616161] hover:text-[#111] transition-colors"
                  >
                    Punk Rebel
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/productos"
              className="text-[#222] text-sm font-medium hover:text-[#111] transition-colors"
            >
              Todos los Productos
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden text-[#000]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-[#000]/50"
            onClick={() => setMobileMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setMobileMenuOpen(false)
            }}
            role="button"
            tabIndex={0}
            aria-label="Cerrar menu"
          />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-[#fff] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-[#dedede]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="https://punkelectric.com/wp-content/uploads/2023/08/Logo-dark.png"
                  alt="Punk Electric"
                  className="h-4 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menu"
                className="text-[#000]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="py-4">
              <Link
                href="/"
                className="block px-5 py-3 text-sm text-[#222] font-medium border-b border-[#f0f0f0]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <div className="border-b border-[#f0f0f0]">
                <p className="px-5 py-3 text-sm text-[#222] font-medium">Productos</p>
                <Link
                  href="/productos/punk-rider"
                  className="block px-8 py-2 text-sm text-[#616161]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Punk Rider
                </Link>
                <Link
                  href="/productos/punk-rider-pro"
                  className="block px-8 py-2 text-sm text-[#616161]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Punk Rider Pro
                </Link>
                <Link
                  href="/productos/punk-rider-pro-max"
                  className="block px-8 py-2 text-sm text-[#616161]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Punk Rider Pro Max
                </Link>
                <Link
                  href="/productos/punk-rebel"
                  className="block px-8 py-2 text-sm text-[#616161] pb-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Punk Rebel
                </Link>
              </div>
              <Link
                href="/productos"
                className="block px-5 py-3 text-sm text-[#222] font-medium border-b border-[#f0f0f0]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Todos los Productos
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
