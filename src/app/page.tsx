import HeroSection from '@/sections/HeroSection'
import WelcomeSection from '@/sections/WelcomeSection'
import VideoSection from '@/sections/VideoSection'
import GallerySection from '@/sections/GallerySection'
import FooterSection from '@/sections/FooterSection'
import WhatsNewSection from '@/sections/WhatsNewSection'
import SponsorSection from '@/sections/SponsorSection'
import SovereignPartnersSection from '@/sections/SovereignPartnersSection'
import SovereignMediaPartnersSection from '@/sections/SovereignMediaPartnersSection'
import SpeakersSection from '@/sections/SpeakersSection'
import Header from '@/sections/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <HeroSection />
        <WhatsNewSection />
        <SpeakersSection featured />
        <SponsorSection />
        <SovereignPartnersSection />
        <SovereignMediaPartnersSection className={'mb-[100px]'} />
        <VideoSection />
        <WelcomeSection />
        <GallerySection />
        <FooterSection />
      </main>
    </>
  )
}
