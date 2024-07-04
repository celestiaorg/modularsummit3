import Header from '@/sections/Header'
import SovereignHeroSection from '@/sections/SovereignHeroSection'
import SovereignIntro from '@/sections/SovereignIntro'
import SovereignVideoSection from '@/sections/SovereignVideoSection'
import SovereignPartnersSection from '@/sections/SovereignPartnersSection'
import SovereignMediaPartnersSection from '@/sections/SovereignMediaPartnersSection'
import GallerySection from '@/sections/GallerySection'
import FooterSection from '@/sections/FooterSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <SovereignHeroSection />
        <SovereignIntro />
        <SovereignVideoSection />
        <SovereignPartnersSection />
        <SovereignMediaPartnersSection />
        <GallerySection />
        <FooterSection />
      </main>
    </>
  )
}
