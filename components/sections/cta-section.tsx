import Link from "next/link"

export function CtaSection() {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center bg-cta-section">
      <div className="absolute inset-0 bg-[#000]/40" />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <h2 className="text-[#fff] text-3xl md:text-4xl lg:text-5xl font-light mb-4 max-w-2xl">
          Unete a la Revolucion Electrica
        </h2>
        <p className="text-[#fff]/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
          Descubre nuestros scooters de alto rendimiento y conectate hoy mismo
          con una vibrante comunidad de ciclistas.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/productos"
            className="border border-[#fff] text-[#fff] px-8 py-3 text-sm hover:bg-[#fff] hover:text-[#000] transition-colors"
          >
            Explorar
          </Link>
          <a
            href="https://wa.me/5491161937808"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fff] text-[#000] px-8 py-3 text-sm hover:bg-[#f0f0f0] transition-colors"
          >
            Comprar
          </a>
        </div>
      </div>
    </section>
  )
}
