import SpeakersHeroSection from '@/sections/SpeakersHeroSection'
import GallerySection from '@/sections/GallerySection'
import FooterSection from '@/sections/FooterSection'
import SpeakersSection from '@/sections/SpeakersSection'
import Header from '@/sections/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <SpeakersHeroSection />
        <SpeakersSection />
        <GallerySection />
        <FooterSection />
      </main>
    </>
  )
}
