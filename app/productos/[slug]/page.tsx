import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { products, getProductBySlug, WHATSAPP_URL } from "@/lib/products"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Producto no encontrado" }
  return {
    title: `${product.name} | Punk Electric Argentina`,
    description: `${product.name} - ${product.subtitle}. ${product.range} de alcance, ${product.maxSpeed} velocidad maxima, ${product.power} de potencia. USD ${product.price}.`,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const bgImage =
    product.slug === "punk-rider"
      ? "https://punkelectric.com/wp-content/uploads/2025/04/home_punk_rider_pro.webp"
      : product.slug === "punk-rider-pro" ||
          product.slug === "punk-rider-pro-max"
        ? "https://punkelectric.com/wp-content/uploads/2025/04/home_punk_rider_pro_max.webp"
        : "https://punkelectric.com/wp-content/uploads/2025/04/home_punk_rebel.webp"

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative w-full min-h-[70vh] flex items-end"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#000]/30" />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-12 md:py-20">
            <h1 className="text-[#fff] text-4xl md:text-5xl lg:text-6xl font-light mb-2">
              {product.name}
            </h1>
            <p className="text-[#fff]/80 text-lg">{product.subtitle}</p>
          </div>
        </section>

        {/* Specs + Price */}
        <section className="bg-[#fff] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Specs */}
              <div>
                <h2 className="text-[#111] text-2xl md:text-3xl font-light mb-8">
                  Especificaciones
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-b border-[#e5e5e5] pb-4">
                    <p className="text-[#111] text-2xl md:text-3xl font-medium">
                      {product.range}
                    </p>
                    <p className="text-[#777] text-sm mt-1">Alcance Maximo</p>
                  </div>
                  <div className="border-b border-[#e5e5e5] pb-4">
                    <p className="text-[#111] text-2xl md:text-3xl font-medium">
                      {product.maxSpeed}
                    </p>
                    <p className="text-[#777] text-sm mt-1">
                      Velocidad Maxima
                    </p>
                  </div>
                  <div className="border-b border-[#e5e5e5] pb-4">
                    <p className="text-[#111] text-2xl md:text-3xl font-medium">
                      {product.power}
                    </p>
                    <p className="text-[#777] text-sm mt-1">Potencia Maxima</p>
                  </div>
                  <div className="border-b border-[#e5e5e5] pb-4">
                    <p className="text-[#111] text-2xl md:text-3xl font-medium">
                      {product.chargeTime}
                    </p>
                    <p className="text-[#777] text-sm mt-1">Tiempo de Carga</p>
                  </div>
                </div>
              </div>

              {/* Right: Price + CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-[#f8f8f8] p-8 md:p-12">
                  <p className="text-[#777] text-sm mb-2">Precio</p>
                  <p className="text-[#111] text-4xl md:text-5xl font-semibold mb-6">
                    USD {product.price.toLocaleString()}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#25D366] text-[#fff] text-center py-4 text-base font-medium hover:bg-[#20bd5a] transition-colors mb-4"
                  >
                    Comprar por WhatsApp
                  </a>
                  <p className="text-[#999] text-xs text-center">
                    Te contactaremos para coordinar el envio y el pago.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-[#111] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-[#fff] text-2xl md:text-3xl font-light mb-8 text-center">
              Mira el {product.name} en accion
            </h2>
            <div className="aspect-video max-w-4xl mx-auto">
              <video
                controls
                className="w-full h-full"
                preload="metadata"
                poster={bgImage}
              >
                <source src={product.heroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Other Products */}
        <section className="bg-[#fff] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-[#111] text-2xl md:text-3xl font-light mb-10">
              Otros modelos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.slug !== product.slug)
                .map((p) => {
                  const otherBg =
                    p.slug === "punk-rider"
                      ? "https://punkelectric.com/wp-content/uploads/2025/04/home_punk_rider_pro.webp"
                      : p.slug === "punk-rider-pro" ||
                          p.slug === "punk-rider-pro-max"
                        ? "https://punkelectric.com/wp-content/uploads/2025/04/home_punk_rider_pro_max.webp"
                        : "https://punkelectric.com/wp-content/uploads/2025/04/home_punk_rebel.webp"

                  return (
                    <a
                      key={p.slug}
                      href={`/productos/${p.slug}`}
                      className="group block"
                    >
                      <div
                        className="relative aspect-[4/3] overflow-hidden mb-4"
                        style={{
                          backgroundImage: `url(${otherBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="absolute inset-0 bg-[#000]/20 group-hover:bg-[#000]/30 transition-colors" />
                        <div className="absolute bottom-3 right-3 bg-[#fff] text-[#111] px-3 py-1 text-xs font-medium">
                          USD {p.price.toLocaleString()}
                        </div>
                      </div>
                      <h3 className="text-[#111] text-lg font-light">
                        {p.name}
                      </h3>
                      <p className="text-[#777] text-xs mt-1">{p.subtitle}</p>
                    </a>
                  )
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
