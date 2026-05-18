import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Philosophy } from '@/components/sections/Philosophy'
import { Capabilities } from '@/components/sections/Capabilities'
import { Immersion } from '@/components/sections/Immersion'
import { Craftsmanship } from '@/components/sections/Craftsmanship'
import { Showcase } from '@/components/sections/Showcase'
import { Closing, Footer } from '@/components/sections/Closing'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Phase 1 — Awe */}
        <Hero />

        {/* Phase 2 — Discovery */}
        <Philosophy />

        {/* Phase 3 — Immersion */}
        <Capabilities />
        <Immersion />

        {/* Phase 4 — Trust & Vision */}
        <Craftsmanship />
        <Showcase />

        {/* Phase 5 — Emotional Resolution */}
        <Closing />
      </main>
      <Footer />
    </>
  )
}
