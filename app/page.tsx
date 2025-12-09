import { HeroSection } from "@/components/hero-section"
import { ExecutiveSummary } from "@/components/executive-summary"
import { TableOfContents } from "@/components/table-of-contents"
import { IntroductionSection } from "@/components/introduction-section"
import { SystemModelSection } from "@/components/system-model-section"
import { ParameterIdentificationSection } from "@/components/parameter-identification-section"
import { OptimizationSection } from "@/components/optimization-section"
import { ManufacturingSection } from "@/components/manufacturing-section"
import { ExperimentalSection } from "@/components/experimental-section"
import { ResultsSection } from "@/components/results-section"
import { FutureWorkSection } from "@/components/future-work-section"
import { ConclusionsSection } from "@/components/conclusions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ExecutiveSummary />
      <TableOfContents />
      <IntroductionSection />
      <SystemModelSection />
      <ParameterIdentificationSection />
      <OptimizationSection />
      <ManufacturingSection />
      <ExperimentalSection />
      <ResultsSection />
      <FutureWorkSection />
      <ConclusionsSection />
      <Footer />
    </main>
  )
}
