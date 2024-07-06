import Header from '@/sections/Header'
import HeroSectionSecondary from '@/sections/HeroSectionSecondary'
import FooterSection from '@/sections/FooterSection'

export default function Agenda() {
  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <HeroSectionSecondary />
        <FooterSection />
      </main>
    </>
  )
}
