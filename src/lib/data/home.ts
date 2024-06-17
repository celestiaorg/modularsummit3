import { HomePageData } from '@/lib/data/interfaces/home'
export const pageData: HomePageData = {
  HeroSection: {
    title: 'Modular Summit 3.0',
    date: '11-13 July, 2024',
    location: 'Brussels, Belgium',
    tickets: 'https://www.eventbrite.be/e/modular-summit-30-tickets-920846766467',
    ticketButton: {
      target: '_blank',
      title: 'Tickets',
      url: 'https://www.eventbrite.be/e/modular-summit-30-tickets-920846766467'
    },
    countDownDate: '2024-07-11T01:00:00', // 2024-07-11T01:00:00
    calendarButton: {
      target: '_blank',
      title: 'Add to Calendar',
      url: '/',
      addToCalendarProps: {
        name: 'Modular Summit 3.0',
        description: 'Join Us!',
        startDate: '2024-07-11',
        startTime: '10:00',
        endDate: '2024-07-13',
        endTime: '20:00',
        timeZone: 'Europe/Brussels',
        location: 'Brussels',
        options: "'Apple','Google','iCal','Outlook.com','Yahoo'"
      }
    }
  },
  WelcomeSection: {
    lead: 'Modular Summit 2023 welcomed over 2000 attendees and featured 115 speakers in a two-day event to learn from visionary builders at the forefront of the modular blockchain revolution.',
    text1:
      'Day 1 explored the state of the modular stack and how new ideas around intents, shared sequencers, and ZK are bound to shape it. Then, day 2 dove into gaming, modular-cosmos, and PBS.day (co-created with Flashbots).',
    text2:
      'By the end, the modular community helped show that a positive-sum crypto ecosystem, free from maximalism, is possible.'
  },
  WhatsNewSection: {
    title: "What's new?",
    elements: [
      {
        icon: '/icons/book-open-check.svg',
        title: 'More Curated Tracks & Workshops',
        text: ''
      },
      {
        icon: '/icons/calendar-heart.svg',
        title: 'Official Side Events',
        text: ''
      },
      {
        icon: '/icons/boxes.svg',
        title: 'Theme : Modular Expansion',
        text: ''
      },
      {
        icon: '/icons/calendar-days.svg',
        title: '3 Days Summit',
        text: ''
      },
      {
        icon: '/icons/users.svg',
        title: 'Larger Capacity',
        text: ''
      },
      {
        icon: '/icons/ticket.svg',
        title: 'Paid Tickets: General & VIP',
        text: ''
      }
    ]
  },
  SponsorSection: {
    title: 'Sponsors',
    subtitle: '',
    sponsors: [
      {
        level: 1,
        grid: 4,
        span: 2,
        gap: 1.5,
        size: 180,
        elements: [
          {
            url: '/',
            title: 'Astria',
            logo: '/sponsors/astria.png'
          },
          {
            url: '/',
            title: 'Anoma',
            logo: '/sponsors/anoma.png'
          },
          {
            url: '/',
            title: 'Initia',
            logo: '/sponsors/initia.png'
          },
          {
            url: '/',
            title: 'Hyperlane',
            logo: '/sponsors/hyperlane.png'
          }
        ]
      },
      {
        level: 2,
        grid: 3,
        span: 1,
        gap: 1.5,
        size: 150,
        elements: [
          {
            url: '/',
            title: 'Hashflow',
            logo: '/sponsors/hashflow.png'
          },
          {
            url: '/',
            title: 'Manta Network',
            logo: '/sponsors/manta-network.png'
          },
         {
            url: '/',
            title: 'Movement',
            logo: '/sponsors/movement.png'
          },
          {
            url: '/',
            title: 'Cartesi',
            logo: '/sponsors/cartesi.png'
          },
          {
            url: '/',
            title: 'Union',
            logo: '/sponsors/union.png'
          },
          {
            url: '/',
            title: 'Morph',
            logo: '/sponsors/morph.png'
          },
          {
            url: '/',
            title: 'Li.Fi',
            logo: '/sponsors/lifi.png'
          },
          {
            url: '/',
            title: 'Drop',
            logo: '/sponsors/drop.png'
          }
        ]
      },
      {
        level: 3,
        grid: 4,
        span: 1,
        gap: 1.5,
        size: 120,
        elements: [
          {
            url: '/',
            title: 'Barter',
            logo: '/sponsors/barter.png'
          },
          {
            url: '/',
            title: 'Lagrange',
            logo: '/sponsors/lagrange.png'
          },
          {
            url: '/',
            title: 'Fluent',
            logo: '/sponsors/fluent.png'
          },
          {
            url: '/',
            title: 'Argus Labs',
            logo: '/sponsors/argus-labs.png'
          },
          {
            url: '/',
            title: 'Dora',
            logo: '/sponsors/dora.png'
          },
          {
            url: '/',
            title: 'Optimism',
            logo: '/sponsors/optimism.png'
          },
          {
            url: '/',
            title: 'Arbitrum',
            logo: '/sponsors/arbitrum.png'
          },
          {
            url: '/',
            title: 'zkSync',
            logo: '/sponsors/zksync.png'
          },
          {
            url: '/',
            title: 'Tokonomy',
            logo: '/sponsors/tokonomy.png'
          },
          {
            url: '/',
            title: 'Citrea',
            logo: '/sponsors/citrea.png'
          },
          {
            url: '/',
            title: 'Penumbra',
            logo: '/sponsors/penumbra.png'
          },
          {
            url: '/',
            title: 'Socket',
            logo: '/sponsors/socket.png'
          },
          {
            url: '/',
            title: 'Polymer',
            logo: '/sponsors/polymer.png'
          },
          {
            url: '/',
            title: 'Signature Ventures',
            logo: '/sponsors/signature-ventures.png'
          },
          {
            url: '/',
            title: 'Espresso',
            logo: '/sponsors/espresso.png'
          },
          {
            url: '/',
            title: 'Everclear',
            logo: '/sponsors/everclear.png'
          }
        ]
      },
      {
        level: 4,
        grid: 5,
        span: 1,
        gap: 1.5,
        size: 100,
        elements: [
          {
            url: '/',
            title: 'Kr1',
            logo: '/sponsors/kr1.png'
          },
          {
            url: '/',
            title: 'Envio',
            logo: '/sponsors/envio.png'
          },
          {
            url: '/',
            title: 'Spartan',
            logo: '/sponsors/spartan.png'
          },
          {
            url: '/',
            title: 'Noble',
            logo: '/sponsors/noble.png'
          },
          {
            url: '/',
            title: 'Skip',
            logo: '/sponsors/skip.png'
          },
          {
            url: '/',
            title: 'Finoa',
            logo: '/sponsors/finoa.png'
          },
          {
            url: '/',
            title: '01 Node',
            logo: '/sponsors/01Node.png'
          },
          {
            url: '/',
            title: 'DoraHacks',
            logo: '/sponsors/Dorahacks.png'
          },
          {
            url: '/',
            title: 'Gelato',
            logo: '/sponsors/gelato.png'
          },
          {
            url: '/',
            title: 'Nuffle Labs',
            logo: '/sponsors/nuffle.png'
          }
        ]
      }
    ]
  },
  VideoSection: {
    title: 'What happened at Modular Summit 2023',
    button: {
      target: '_blank',
      title: 'Celestia Youtube Channel',
      url: 'https://www.youtube.com/@CelestiaNetwork'
    },
    videos: [
      {
        title: 'The End Game',
        subtitle: 'Mustafa Al-Bassam, Anatoly Yakovenko, Vitalik Buterin, Tarun Chitra',
        videoId: '9t8JCf_XWmg'
      },
      {
        title: 'Aggregation is all you need',
        subtitle: 'Uma Roy',
        videoId: 'DX938dphios'
      },
      {
        title: 'Exploring MEV Capture in Modular Systems',
        subtitle: 'Evan Forbes',
        videoId: 'AVKS1Km2pG8'
      },
      {
        title: 'Builders and More Advanced Forms of Aggregation',
        subtitle: 'Vitalik Buterin',
        videoId: 'TSLUpOpsPF0'
      },
      {
        title: 'Modular Devrel Panel: Build Whatever',
        subtitle: 'Yaz Khoury, Camila Ramos, Henri Lieutaud, David Phelps, Daniel Helm',
        videoId: 'cYUvGwDZbs4'
      },
      {
        title: 'Celestia Light Node Tutorial',
        subtitle: 'Josh Stein',
        videoId: '3kLuHOJariY'
      },
      {
        title: 'Astria’s Vision for the Endgame',
        subtitle: 'Josh Bowen',
        videoId: '_fRsXlWyeaA'
      }
    ]
  },
  GallerySection: {
    title: 'Modular Summit 2.0',
    subtitle: 'Memories from',
    images: [
      '/gallery/_MRZ3984-min.jpg',
      '/gallery/_MRZ4214-min.jpg',
      '/gallery/_MRZ0416-min.jpg',
      '/gallery/_MRZ0791-min.jpg',
      '/gallery/_MRZ0930-min.jpg',
      '/gallery/_MRZ2780-min.jpg',
      '/gallery/_MRZ2871-min.jpg',
      '/gallery/_MRZ3353-min.jpg',
      '/gallery/_MRZ3516-min.jpg',
      '/gallery/_MRZ3626-min.jpg',
      '/gallery/_MRZ4244-min.jpg',
      '/gallery/_MRZ4302-min.jpg',
      '/gallery/_MRZ4399-min.jpg',
      '/gallery/DSC_7871-min.jpg',
      '/gallery/DSCF0225-min.jpg',
      '/gallery/DSCF0380-min.jpg',
      '/gallery/DSCF0441-min.jpg',
      '/gallery/DSCF1587-min.jpg',
      '/gallery/F1gq182aYAAAwU_-min.jpg'
    ]
  },
  FooterSection: {
    text: 'Hosted by Celestia Labs and Maven11',
    socials: {
      twitter: 'https://twitter.com/modular_summit'
    },
    urls: {
      celestia: 'https://celestia.org',
      maven11: '/',
      modular: '/'
    }
  }
}
