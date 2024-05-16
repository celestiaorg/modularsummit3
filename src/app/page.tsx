import HeroSection from '@/sections/HeroSection'
import WelcomeSection from '@/sections/WelcomeSection'
import VideoSection from '@/sections/VideoSection'
import GallerySection from '@/sections/GallerySection'
import FooterSection from '@/sections/FooterSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <VideoSection />
      <GallerySection />
      <FooterSection />
    </main>
  )
}
