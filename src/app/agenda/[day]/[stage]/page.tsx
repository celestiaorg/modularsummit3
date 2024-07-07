import Header from '@/sections/Header'
import HeroSectionSecondary from '@/sections/HeroSectionSecondary'
import AgendaSection from '@/sections/AgendaSection'
import FooterSection from '@/sections/FooterSection'
import { pageData, stages, EventsList } from '@/lib/data/agenda'
import { notFound, redirect } from 'next/navigation'

export default function AgendaPage({ params }: { params: { day: string; stage: string } }) {
  if (params.stage === 'stage') {
    redirect(`/agenda/${params.day}/chisel-stage`)
  }

  const dayNumber = params.day ? parseInt(params.day.replace('day', '')) : 1
  const stageName = params.stage
    ? params.stage
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Chisel Stage'

  // Check if the day and stage are valid
  const isValidDay = EventsList.hasOwnProperty(dayNumber)
  const isValidStage = stages.includes(stageName)

  // If the day or stage is invalid, throw a 404 error
  if (!isValidDay || !isValidStage) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <HeroSectionSecondary title={pageData.AgendaSection.title} />
        <AgendaSection initialDay={dayNumber} initialStage={stageName} />
        <FooterSection />
      </main>
    </>
  )
}

export function generateStaticParams() {
  const params = []
  const maxDays = Object.keys(EventsList).length

  // Generate params for all combinations of days and stages
  for (let day = 1; day <= maxDays; day++) {
    params.push({
      day: `day${day}`,
      stage: 'stage'
    })
    stages.forEach((stage) => {
      params.push({
        day: `day${day}`,
        stage: stage.toLowerCase().replace(' ', '-')
      })
    })
  }

  return params
}
