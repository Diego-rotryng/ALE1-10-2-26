export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source
          src="https://storage.googleapis.com/msgsndr/AhLPEFX6foynvRbel1gk/media/680a923f4dd5ff0d3fb2d8b5.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-[#000]/35" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-[#fff] font-serif text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
          Punk Electric
        </h2>
        <h1 className="text-[#fff] text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
          Da rienda suelta a tu aventura urbana
        </h1>
      </div>
    </section>
  )
}
