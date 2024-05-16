interface HeroData {
  title: string
  location: string
  date: string
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
  WelcomeSection: WelcomeData
  VideoSection: VideosData
  GallerySection: GalleryData
  FooterSection: FooterData
}
