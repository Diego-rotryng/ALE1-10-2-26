import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ProductCardsSection } from "@/components/sections/product-cards-section"
import { UrbanSection } from "@/components/sections/urban-section"
import { GreenSection } from "@/components/sections/green-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductCardsSection />
        <UrbanSection />
        <GreenSection />
        <ReviewsSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
