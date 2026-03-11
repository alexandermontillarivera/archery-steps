import { HeroSection } from "@/components/hero-section"
import { TechniqueSteps } from "@/components/technique-steps"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TechniqueSteps />
      <Footer />
    </main>
  )
}
