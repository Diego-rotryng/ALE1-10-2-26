export function UrbanSection() {
  const tiles = [
    {
      video:
        "https://punkelectric.com/wp-content/uploads/2025/04/home_learn_more.mp4",
      title: "Experimenta el futuro de la movilidad urbana y la personalizacion",
      subtitle:
        "Nuestros scooters combinan un rendimiento de vanguardia con un diseno elegante para el viaje definitivo.",
      cta: "Mas informacion",
    },
    {
      video:
        "https://punkelectric.com/wp-content/uploads/2025/04/home_explor.mp4",
      title: "Personaliza tu vehiculo con opciones de personalizacion unicas",
      subtitle:
        "Elige entre una variedad de accesorios para que tu scooter sea verdaderamente tuyo.",
      cta: "Explorar",
    },
    {
      video:
        "https://punkelectric.com/wp-content/uploads/2025/04/home_signup.mp4",
      title: "Unete a una comunidad prospera de ciclistas apasionados",
      subtitle:
        "Conecta con otros entusiastas y comparte tus aventuras en nuestra plataforma.",
      cta: "Unete",
    },
  ]

  return (
    <section className="bg-[#fff] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-[#111] text-3xl md:text-4xl lg:text-5xl font-light mb-12 md:mb-16 max-w-2xl">
          Revolucionando el transporte urbano
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile) => (
            <div key={tile.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden="true"
                >
                  <source src={tile.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#000]/20" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 text-[#fff] text-sm border border-[#fff]/50 px-4 py-2 hover:bg-[#fff] hover:text-[#000] transition-colors cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 7C9 7 4 10.68 4 12C4 13.32 9 17 9 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {tile.cta}
                  </span>
                </div>
              </div>
              <h3 className="text-[#111] text-lg md:text-xl font-light mb-2">
                {tile.title}
              </h3>
              <p className="text-[#777] text-sm leading-relaxed">
                {tile.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
