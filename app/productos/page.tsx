import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { products, comparisonTable } from "@/lib/products"

export const metadata: Metadata = {
  title: "Productos | Punk Electric Argentina",
  description:
    "Explora nuestra linea completa de scooters electricos: Punk Rider, Punk Rider Pro, Punk Rider Pro Max y Punk Rebel.",
}

export default function ProductosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#111] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 text-center">
            <h1 className="text-[#fff] text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              Nuestros Productos
            </h1>
            <p className="text-[#fff]/70 text-base max-w-xl mx-auto">
              Descubre nuestra linea de scooters electricos de alto rendimiento
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="bg-[#fff] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/productos/${product.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5] mb-6">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{
                        backgroundImage: `url(https://punkelectric.com/wp-content/uploads/2025/04/home_punk_${
                          product.slug === "punk-rider"
                            ? "rider_pro"
                            : product.slug === "punk-rider-pro"
                              ? "rider_pro_max"
                              : product.slug === "punk-rider-pro-max"
                                ? "rider_pro_max"
                                : "rebel"
                        }.webp)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-[#000]/20 group-hover:bg-[#000]/30 transition-colors" />
                    <div className="absolute bottom-4 right-4 z-10">
                      <span className="bg-[#fff] text-[#111] px-4 py-2 text-sm font-medium">
                        USD {product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[#111] text-xl md:text-2xl font-light mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#777] text-sm">{product.subtitle}</p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <span className="text-xs text-[#555] border border-[#ddd] px-3 py-1">
                      {product.range} alcance
                    </span>
                    <span className="text-xs text-[#555] border border-[#ddd] px-3 py-1">
                      {product.maxSpeed} vel. max
                    </span>
                    <span className="text-xs text-[#555] border border-[#ddd] px-3 py-1">
                      {product.power}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-[#f8f8f8] py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-[#111] text-2xl md:text-3xl lg:text-4xl font-light mb-10 text-center">
              Comparar Modelos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="border-b-2 border-[#111]">
                    {comparisonTable.headers.map((header) => (
                      <th
                        key={header || "label"}
                        className="text-left py-4 px-4 text-[#111] font-semibold text-sm"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.rows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-[#e5e5e5]"
                    >
                      <td className="py-3 px-4 text-[#111] font-medium">
                        {row.label}
                      </td>
                      {row.values.map((value, i) => (
                        <td
                          key={`${row.label}-${comparisonTable.headers[i + 1]}`}
                          className="py-3 px-4 text-[#555]"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA Row */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="hidden md:block" />
              {products.map((product) => (
                <a
                  key={product.slug}
                  href="https://wa.me/5491161937808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#111] text-[#fff] text-center py-3 text-sm hover:bg-[#333] transition-colors"
                >
                  Comprar {product.name.replace("Punk ", "")}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
