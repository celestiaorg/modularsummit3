interface SpeakersHeroSection {
  title: string
}

interface Speaker {
  id: number
  speaker: string
  role: string
  company: string
  image: string
}

interface SpeakersData {
  title: string
  speakers: Speaker[]
  navigation: {
    target: string
    title: string
    url: string
  }
}

export interface SpeakersPageData {
  SpeakersSection: SpeakersData
  SpeakersHeroSection: SpeakersHeroSection
}
