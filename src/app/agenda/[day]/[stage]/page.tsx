import Header from '@/sections/Header'
import HeroSectionSecondary from '@/sections/HeroSectionSecondary'
import AgendaSection from '@/sections/AgendaSection'
import FooterSection from '@/sections/FooterSection'
import { pageData } from '@/lib/data/agenda'
import { notFound, redirect } from 'next/navigation'
import { stages, EventsList } from '@/lib/data/agenda'

export default function AgendaPage({ params }: { params: { day: string; stage: string } }) {
  if (params.stage === 'stage') {
    redirect(`/agenda/${params.day}/stage1`)
  }
  if (params.stage === 'workshop') {
    redirect(`/agenda/${params.day}/workshop1`)
  }

  const dayNumber = params.day ? parseInt(params.day.replace('day', '')) : 1
  const stageName = params.stage ? params.stage.replace('stage', 'Stage ').replace('workshop', 'Workshop ') : 'Stage 1'

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
  const maxDays = 5 // Adjust this number based on your maximum number of days
  const maxStages = 10 // Adjust this number based on your maximum number of stages and workshops combined

  // Generate params for all combinations of days and stages/workshops
  for (let day = 1; day <= maxDays; day++) {
    params.push({
      day: `day${day}`,
      stage: 'stage'
    })
    params.push({
      day: `day${day}`,
      stage: 'workshop'
    })
    for (let i = 1; i <= maxStages; i++) {
      params.push({
        day: `day${day}`,
        stage: `stage${i}`
      })
      params.push({
        day: `day${day}`,
        stage: `workshop${i}`
      })
    }
  }

  return params
}
