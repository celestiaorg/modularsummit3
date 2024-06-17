import HeroSection from '@/sections/HeroSection'
import WelcomeSection from '@/sections/WelcomeSection'
import VideoSection from '@/sections/VideoSection'
import GallerySection from '@/sections/GallerySection'
import FooterSection from '@/sections/FooterSection'
import WhatsNewSection from '@/sections/WhatsNewSection'
import SponsorSection from '@/sections/SponsorSection'
import SpeakersSection from '@/sections/SpeakersSection'

export default function Home() {
  return (
    <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
      <HeroSection />
      <WhatsNewSection />
      <SpeakersSection featured />
      <SponsorSection />
      <VideoSection />
      <WelcomeSection />
      <GallerySection />
      <FooterSection />
    </main>
  )
}
