interface Host {
  id: number
  host: string
  image: string
}

interface HeroData {
  title: string
  event: string
  location: string
  hosts: Host[]
}

interface IntroData {
  title: string
  text: string
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

interface PartnerData {
  title: string
  subtitle: string
  partners: any
}

interface MediaPartnerData {
  title: string
  subtitle: string
  partners: any
}

export interface SovereignPageData {
  HeroSection: HeroData
  IntroData: IntroData
  VideoSection: VideosData
  PartnerSection: PartnerData
  MediaPartnerSection: MediaPartnerData
}
