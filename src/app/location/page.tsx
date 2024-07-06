import Header from '@/sections/Header'
import HeroSectionSecondary from '@/sections/HeroSectionSecondary'
import LocationSection from '@/sections/LocationSection'
import BusSchedule from '@/sections/BusSchedule'
import BoatSchedule from '@/sections/BoatSchedule'
import FooterSection from '@/sections/FooterSection'
import { locationPageData } from '@/lib/data/location'

export default function Location() {
  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <HeroSectionSecondary title={locationPageData.HeroSectionSecondary.title} />
        <LocationSection />
        <BusSchedule />
        <BoatSchedule />
        <FooterSection />
      </main>
    </>
  )
}
