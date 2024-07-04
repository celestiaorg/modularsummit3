import Header from '@/sections/Header'
import HeroSectionSecondary from '@/sections/HeroSectionSecondary'
import AgendaSection from '@/sections/AgendaSection'
import FooterSection from '@/sections/FooterSection'
import { pageData } from '@/lib/data/agenda'

export default function Agenda() {
  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <HeroSectionSecondary title={pageData.AgendaSection.title} />
        <AgendaSection />
        <FooterSection />
      </main>
    </>
  )
}
