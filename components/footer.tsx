import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#000] text-[#fff]">
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + Newsletter */}
          <div className="lg:col-span-1">
            <img
              src="https://punkelectric.com/wp-content/uploads/2024/06/Punk-Logo-Black-1-1.svg"
              alt="Punk Electric"
              className="h-4 w-auto mb-6 invert"
            />
            <p className="text-sm text-[#999] mb-6 leading-relaxed">
              Unase a nuestro boletin para mantenerse actualizado sobre las
              caracteristicas y los lanzamientos.
            </p>
            <p className="text-xs text-[#666] mt-4">
              Al suscribirse, acepta nuestra Politica de privacidad y da su
              consentimiento para recibir actualizaciones.
            </p>
          </div>

          {/* Column 2: Connect */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#fff]">
              Conectate con nosotros
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="https://wa.me/5491161937808"
                  target="_blank"
                  className="text-sm text-[#999] hover:text-[#fff] transition-colors"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-[#999] hover:text-[#fff] transition-colors"
                >
                  Productos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#fff]">
              Enlaces rapidos
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-[#999] hover:text-[#fff] transition-colors"
                >
                  Todos los Productos
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5491161937808"
                  target="_blank"
                  className="text-sm text-[#999] hover:text-[#fff] transition-colors"
                >
                  Contactenos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#fff]">
              Mantente conectado
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://www.facebook.com/p/Punk-Electric-61555987346052/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#999] hover:text-[#fff] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/punk_electric/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#999] hover:text-[#fff] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/punk-electric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#999] hover:text-[#fff] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCO-xkFXNt3sSvV2MkCx-WYg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#999] hover:text-[#fff] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#ffffff26] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666]">
            &copy; 2025 Punk Electric. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#666]">
              Politica de privacidad
            </span>
            <span className="text-xs text-[#666]">
              Condiciones de servicio
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
