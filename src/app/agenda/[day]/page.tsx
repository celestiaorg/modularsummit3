import Header from '@/sections/Header'
import HeroSectionSecondary from '@/sections/HeroSectionSecondary'
import AgendaSection from '@/sections/AgendaSection'
import FooterSection from '@/sections/FooterSection'
import { pageData } from '@/lib/data/agenda'
import { redirect } from 'next/navigation'
import { EventsList } from '@/lib/data/agenda'

export default function AgendaDayPage({ params }: { params: { day: string } }) {
  // Redirect /agenda/day to /agenda/day1
  if (params.day === 'day') {
    redirect('/agenda/day1')
  }

  const dayNumber = params.day ? parseInt(params.day.replace('day', '')) : 1

  // Check if the day is valid
  const isValidDay = EventsList.hasOwnProperty(dayNumber)

  // If the day is invalid, redirect to day1
  if (!isValidDay) {
    redirect('/agenda/day1')
  }
  // Default to the first stage for the day
  const firstStage = Object.keys(EventsList[dayNumber])[0]

  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <HeroSectionSecondary title={pageData.AgendaSection.title} />
        <AgendaSection initialDay={dayNumber} initialStage={firstStage} />
        <FooterSection />
      </main>
    </>
  )
}

export function generateStaticParams() {
  const maxDays = 5 // Adjust this number based on your maximum number of days
  return [
    { day: 'day' },
    ...Array.from({ length: maxDays }, (_, i) => ({
      day: `day${i + 1}`
    }))
  ]
}
