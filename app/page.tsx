import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { ProofRow } from '@/components/sections/ProofRow'
import { Capabilities } from '@/components/sections/Capabilities'
import { Immersion } from '@/components/sections/Immersion'
import { Craftsmanship } from '@/components/sections/Craftsmanship'
import { Showcase } from '@/components/sections/Showcase'
import { Projects } from '@/components/sections/Projects'
import { Closing, Footer } from '@/components/sections/Closing'

function SectionBridge({
  from,
  to,
  height = 400,
  gradient,
}: {
  from: string
  to: string
  height?: number
  gradient?: string
}) {
  return (
    <div
      aria-hidden
      style={{
        height,
        background: gradient ?? `linear-gradient(to bottom, ${from}, ${to})`,
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
        <SectionBridge
          from="#091D38"
          to="#FFFFFF"
          height={280}
          gradient="linear-gradient(to bottom, #091D38 0%, #0e2b50 18%, #163c66 34%, #2a5580 50%, #4e7898 64%, #88a8c0 78%, #c6d8e4 90%, #FFFFFF 100%)"
        />
        <ProofRow />
        <Capabilities />
        <SectionBridge from="#FFFFFF" to="#FAFBFC" height={60} />
        <Immersion />
        <SectionBridge from="#FAFBFC" to="#FFFFFF" height={60} />
        <Craftsmanship />
        <SectionBridge from="#FFFFFF" to="#F0F8FE" height={60} />
        <Showcase />
        <SectionBridge
          from="#F0F8FE"
          to="#0E2B50"
          height={360}
          gradient="linear-gradient(to bottom, #F0F8FE 0%, #c6d8e4 10%, #88a8c0 20%, #4e7898 30%, #2a5580 42%, #163c66 54%, #0e2b50 66%, #091D38 80%, #0E2B50 100%)"
        />
        <Projects />
        <SectionBridge from="#0E2B50" to="#091D38" height={80} />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
