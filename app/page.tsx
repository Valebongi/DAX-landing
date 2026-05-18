import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Philosophy } from '@/components/sections/Philosophy'
import { Capabilities } from '@/components/sections/Capabilities'
import { Immersion } from '@/components/sections/Immersion'
import { Craftsmanship } from '@/components/sections/Craftsmanship'
import { Showcase } from '@/components/sections/Showcase'
import { Closing, Footer } from '@/components/sections/Closing'

function SectionBridge({ from, to, height = 400 }: { from: string; to: string; height?: number }) {
  return (
    <div
      aria-hidden
      style={{
        height,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        pointerEvents: 'none',
      }}
    />
  )
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SectionBridge from="#061528" to="#F2F4F8" height={420} />
        <Philosophy />
        <SectionBridge from="#F2F4F8" to="#E8ECF2" height={80} />
        <Capabilities />
        <SectionBridge from="#E8ECF2" to="#061528" height={420} />
        <Immersion />
        <SectionBridge from="#061528" to="#F2F4F8" height={420} />
        <Craftsmanship />
        <SectionBridge from="#F2F4F8" to="#0E2138" height={420} />
        <Showcase />
        <SectionBridge from="#0E2138" to="#061528" height={120} />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
