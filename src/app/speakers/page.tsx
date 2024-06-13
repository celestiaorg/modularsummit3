import HeroSection from '@/sections/HeroSection'
import GallerySection from '@/sections/GallerySection'
import FooterSection from '@/sections/FooterSection'
import SpeakersSection from '@/sections/SpeakersSection'

export default function Home() {
  return (
    <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
      <HeroSection />
      <SpeakersSection />
      <GallerySection />
      <FooterSection />
    </main>
  )
}
