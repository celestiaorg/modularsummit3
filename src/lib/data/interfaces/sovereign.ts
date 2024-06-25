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

// interface IntroData {
//   title: string
//   text: string
// }

// interface VideosData {
//   title: string
//   button: {
//     target: string
//     title: string
//     url: string
//   }
//   videos: any
// }

// interface PartnerData {
//   title: string
//   subtitle: string
//   sponsors: any
// }

// interface GalleryData {
//   title: string
//   subtitle: string
//   images: any
// }

// interface FooterData {
//   text: string
//   urls: {
//     celestia: string
//     maven11: string
//     modular: string
//   }
//   socials: {
//     twitter: string
//   }
// }

export interface SovereignPageData {
  HeroSection: HeroData
  // IntroData: IntroData
  // VideoSection: VideosData
  // PartnerSection: PartnerData
  // GallerySection: GalleryData
  // FooterSection: FooterData
}
