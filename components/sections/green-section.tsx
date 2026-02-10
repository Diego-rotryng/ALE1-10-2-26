export function GreenSection() {
  return (
    <section className="bg-[#fff] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[#111] text-3xl md:text-4xl lg:text-5xl font-light mb-3">
              Punk Verde
            </h2>
            <p className="text-[#777] text-sm mb-6">
              Unete a nuestra lucha
            </p>
            <p className="text-[#555] text-base leading-relaxed mb-8 max-w-lg">
              En Punk Electric, nos comprometemos a preservar nuestro planeta.
              Nuestros patinetes electricos reducen las emisiones de carbono y
              promueven la movilidad urbana sostenible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-[#111] text-base font-medium mb-2">
                  Viajes Sostenibles
                </h4>
                <p className="text-[#777] text-sm leading-relaxed">
                  Conduce con proposito y contribuye a un futuro mas verde.
                </p>
              </div>
              <div>
                <h4 className="text-[#111] text-base font-medium mb-2">
                  Impacto Comunitario
                </h4>
                <p className="text-[#777] text-sm leading-relaxed">
                  Unete a una comunidad dedicada a la concienciacion y accion
                  ambiental.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="border border-[#111] text-[#111] px-6 py-2 text-sm">
                Mas informacion
              </span>
              <a
                href="https://wa.me/5491161937808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#111] text-[#fff] px-6 py-2 text-sm hover:bg-[#333] transition-colors"
              >
                Unete al movimiento
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 12H4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 17C15 17 20 13.32 20 12C20 10.68 15 7 15 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-1 gap-6">
            <div className="relative aspect-[16/9] overflow-hidden bg-green-punk">
              <div className="absolute inset-0 bg-[#000]/10" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-one-tree">
              <div className="absolute inset-0 bg-[#000]/10" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="bg-[#fff] text-[#111] px-4 py-2 text-sm font-medium">
                  One Tree Planted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
