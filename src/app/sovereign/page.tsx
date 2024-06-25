import SovereignHeroSection from '@/sections/SovereignHeroSection'
import SovereignIntro from '@/sections/SovereignIntro'
import SovereignVideoSection from '@/sections/SovereignVideoSection'
import SovereignPartnersSection from '@/sections/SovereignPartnersSection'
import GallerySection from '@/sections/GallerySection'
import FooterSection from '@/sections/FooterSection'
import Header from '@/sections/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <SovereignHeroSection />
        <SovereignIntro />
        <SovereignVideoSection />
        <SovereignPartnersSection />
        <GallerySection />
        <FooterSection />
      </main>
    </>
  )
}
