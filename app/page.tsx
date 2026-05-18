import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { ProofRow } from '@/components/sections/ProofRow'
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
        <SectionBridge from="#061528" to="#FFFFFF" height={420} />
        <ProofRow />
        <Capabilities />
        <SectionBridge from="#FFFFFF" to="#FAFBFC" height={60} />
        <Immersion />
        <SectionBridge from="#FAFBFC" to="#FFFFFF" height={60} />
        <Craftsmanship />
        <SectionBridge from="#FFFFFF" to="#F0F8FE" height={60} />
        <Showcase />
        <SectionBridge from="#F0F8FE" to="#061528" height={420} />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
