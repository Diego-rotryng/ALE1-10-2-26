import Link from "next/link"
import { products } from "@/lib/products"

function ProductCard({
  product,
  bgClass,
}: {
  product: (typeof products)[0]
  bgClass: string
}) {
  return (
    <section
      className={`relative w-full min-h-[90vh] flex items-end ${bgClass}`}
    >
      <div className="absolute inset-0 bg-[#000]/20" />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left: Title + Subtitle */}
          <div>
            <h2 className="text-[#fff] text-3xl md:text-4xl lg:text-5xl font-light mb-2">
              {product.name}
            </h2>
            <p className="text-[#fff]/80 text-sm md:text-base">
              {product.subtitle}
            </p>
          </div>

          {/* Center: Stats */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            <div>
              <p className="text-[#fff] text-xl md:text-2xl font-medium">
                {product.range}
              </p>
              <p className="text-[#fff]/70 text-xs mt-1">Alcance Maximo</p>
            </div>
            <div>
              <p className="text-[#fff] text-xl md:text-2xl font-medium">
                {product.maxSpeed}
              </p>
              <p className="text-[#fff]/70 text-xs mt-1">Velocidad Maxima</p>
            </div>
            <div>
              <p className="text-[#fff] text-xl md:text-2xl font-medium">
                {product.power}
              </p>
              <p className="text-[#fff]/70 text-xs mt-1">Potencia Maxima</p>
            </div>
            <div>
              <p className="text-[#fff] text-xl md:text-2xl font-medium">
                {product.chargeTime}
              </p>
              <p className="text-[#fff]/70 text-xs mt-1">Tiempo de Carga</p>
            </div>
          </div>

          {/* Right: Button */}
          <div className="flex items-center gap-4">
            <span className="text-[#fff] text-xl md:text-2xl font-semibold">
              USD {product.price.toLocaleString()}
            </span>
            <Link
              href={`/productos/${product.slug}`}
              className="inline-block border border-[#fff] text-[#fff] px-6 py-2 text-sm hover:bg-[#fff] hover:text-[#000] transition-colors"
            >
              Mas informacion
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProductCardsSection() {
  const bgClasses = [
    "bg-punk-rider",
    "bg-punk-rider-pro",
    "bg-punk-rider-pro",
    "bg-punk-rebel",
  ]

  return (
    <>
      {products.map((product, index) => (
        <ProductCard
          key={product.slug}
          product={product}
          bgClass={bgClasses[index]}
        />
      ))}
    </>
  )
}
