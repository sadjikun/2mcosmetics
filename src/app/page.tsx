import { Navigation } from '@/components/layout/Navigation'
import { HeroSection } from '@/components/layout/HeroSection'
import { OriginSection } from '@/components/layout/OriginSection'
import { ExpertiseSection } from '@/components/layout/ExpertiseSection'
import { ProductsSection } from '@/components/layout/ProductsSection'
import { Footer } from '@/components/layout/Footer'
import { TestimonialsSection } from '@/components/layout/TestimonialsSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OriginSection />
      <ProductsSection />
      <ExpertiseSection />
      <TestimonialsSection/>
      <Footer />
    </main>
  )
}