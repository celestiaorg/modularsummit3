interface HeroData {
  title: string
  location: string
  date: string
  tickets: string
  countDownDate: string
  button: {
    target: string
    title: string
    url: string
  }
}

interface WelcomeData {
  lead: string
  text1: string
  text2: string
}

interface VideosData {
  title: string
  button: {
    target: string
    title: string
    url: string
  }
  videos: any
}

interface WhatsNewData {
  title: string
  elements: any
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

interface SponsorsData {
  title: string
  subtitle: string
  sponsors: any
}
interface GalleryData {
  title: string
  subtitle: string
  images: any
}

interface FooterData {
  text: string
  urls: {
    celestia: string
    maven11: string
    modular: string
  }
  socials: {
    twitter: string
  }
}

export interface HomePageData {
  HeroSection: HeroData
  WhatsNewSection: WhatsNewData
  SpeakersSection: SpeakersData
  SponsorSection: SponsorsData
  WelcomeSection: WelcomeData
  VideoSection: VideosData
  GallerySection: GalleryData
  FooterSection: FooterData
}
