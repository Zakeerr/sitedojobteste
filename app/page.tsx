import { ExclusiveContent } from '@/components/exclusive-content'
import { HeroSection } from '@/components/hero-section'
import { LinksSection } from '@/components/links-section'
import { PhotoGallery } from '@/components/photo-gallery'
import { PiracyWarning } from '@/components/piracy-warning'
import { Testimonials } from '@/components/testimonials'

export default function Page() {
  return (
    <main className="site-shell relative min-h-screen overflow-hidden">
      <div className="site-grid" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="relative z-10">
        <HeroSection />
        <PhotoGallery />
        <LinksSection />
        <ExclusiveContent />
        <Testimonials />
        <PiracyWarning />
      </div>
    </main>
  )
}
