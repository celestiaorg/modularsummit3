import { HomePageData } from '@/lib/data/interfaces/home'
export const pageData: HomePageData = {
  HeroSection: {
    title: 'Modular Summit 3.0',
    date: '11-13 July, 2024',
    location: 'Brussels, Belgium',
    countDownDate: '2024-07-11T01:00:00',
    button: {
      target: '_blank',
      title: 'Add to Calendar',
      url: '/'
    }
  },
  WelcomeSection: {
    lead: 'Modular Summit 2023 welcomed over 2000 attendees and featured 115 speakers in a two-day event to learn from visionary builders at the forefront of the modular blockchain revolution.',
    text1:
      'Day 1 explored the state of the modular stack and how new ideas around intents, shared sequencers, and ZK are bound to shape it. Then, day 2 dove into gaming, modular-cosmos, and PBS.day (co-created with Flashbots).',
    text2:
      'By the end, the modular community helped show that a positive-sum crypto ecosystem, free from maximalism, is possible.'
  },
  VideoSection: {
    title: 'Modular Summit 2023, Paris',
    button: {
      target: '_blank',
      title: 'Celestia Youtube Channel',
      url: 'https://www.youtube.com/@CelestiaNetwork'
    },
    videos: [
      {
        title: 'The End Game',
        subtitle: 'Dev Bear',
        videoId: '9t8JCf_XWmg'
      },
      {
        title: 'Aggregation is all you need - Uma Roy',
        subtitle: 'Ethan Buchman',
        videoId: 'DX938dphios'
      }
    ]
  },
  GallerySection: {
    title: 'Modular Summit 2.0',
    subtitle: 'Memories from',
    images: [
      '/gallery/image1.png',
      '/gallery/image2.png',
      '/gallery/image3.png',
      '/gallery/image1.png',
      '/gallery/image2.png',
      '/gallery/image3.png'
    ]
  },
  FooterSection: {
    text: 'Hosted by Celestia Labs and Maven11',
    socials: {
      twitter: ''
    },
    urls: {
      celestia: 'https://celestia.org',
      maven11: '/',
      modular: '/'
    }
  }
}
