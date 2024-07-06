import Header from '@/sections/Header'
import HeroSectionSecondary from '@/sections/HeroSectionSecondary'
import GallerySection from '@/sections/GallerySection'
import SpeakersSection from '@/sections/SpeakersSection'
import FooterSection from '@/sections/FooterSection'
import { speakersPageData } from '@/lib/data/speakers'

export default function Home() {
  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <HeroSectionSecondary title={speakersPageData.HeroSectionSecondary.title} />
        <SpeakersSection />
        <GallerySection />
        <FooterSection />
      </main>
    </>
  )
}
