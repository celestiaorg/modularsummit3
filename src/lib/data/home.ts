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
        description:
          '[p]Website: [url]https://modularsummit.dev/|https://modularsummit.dev/[/url][/p][p]Venue: Silo Brussels[/p][p]Tickets: [url]https://www.eventbrite.be/e/modular-summit-30-tickets-920846766467|https://www.eventbrite.be/e/modular-summit-30-tickets-920846766467[/url][/p][p]Day 1 Livestream:[/p][p]Chisel stage: [url]https://youtu.be/uBbykZgatuw|https://youtu.be/uBbykZgatuw[/url][/p][p]Canvas stage: [url]https://youtu.be/IvgfL_q2jdI|https://youtu.be/IvgfL_q2jdI[/url][/p][p]Day 2 Livestream:[/p][p]Chisel stage: [url]https://youtu.be/HqJ5oicJOME|https://youtu.be/HqJ5oicJOME[/url][/p][p]Canvas stage: [url]https://youtu.be/EJi2i-WqaT0|https://youtu.be/EJi2i-WqaT0[/url][/p][p]Day 3 Livestream:[/p][p]Chisel stage: [url]https://youtu.be/ZZ9eABdKlWI|https://youtu.be/ZZ9eABdKlWI[/url][/p][p]Canvas stage: [url]https://youtu.be/tfxqL1KQ4cU|https://youtu.be/tfxqL1KQ4cU[/url][/p]',
        startDate: '2024-07-11',
        startTime: '10:00',
        endDate: '2024-07-13',
        endTime: '20:00',
        timeZone: 'Europe/Brussels',
        location: 'Rue de Meudon 54, 1120 Bruxelles, Belgium',
        options: "'Apple','Google','iCal','Outlook.com','Yahoo'"
      }
    }
  },
  WelcomeSection: {
    lead: 'Modular Summit 2023 welcomed over 2000 attendees and featured 115 speakers in a two-day event to learn from visionary builders at the forefront of the modular blockchain revolution.',
    text1:
      'Day 1 explored the state of the modular stack and how new ideas around intents, shared sequencers, and ZK are bound to shape it. Then, day 2 dove into gaming, modular-cosmos, and PBS.day (co-created with Flashbots).',
    text2: 'By the end, the modular community helped show that a positive-sum crypto ecosystem, free from maximalism, is possible.'
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
        title: 'Theme: Modular Expansion',
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
            url: 'https://www.astria.org/',
            title: 'Astria',
            logo: '/sponsors/astria.png'
          },
          {
            url: 'https://anoma.net/',
            title: 'Anoma',
            logo: '/sponsors/anoma.png'
          },
          {
            url: 'https://initia.xyz/',
            title: 'Initia',
            logo: '/sponsors/initia.png'
          },
          {
            url: 'https://www.hyperlane.xyz/',
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
            url: 'https://www.hashflow.com/',
            title: 'Hashflow',
            logo: '/sponsors/hashflow.png'
          },
          {
            url: 'https://manta.network/',
            title: 'Manta Network',
            logo: '/sponsors/manta-network.png'
          },
          {
            url: 'https://movementlabs.xyz/',
            title: 'Movement',
            logo: '/sponsors/movement.png'
          },
          {
            url: 'https://cartesi.io/',
            title: 'Cartesi',
            logo: '/sponsors/cartesi.png'
          },
          {
            url: 'https://union.build/',
            title: 'Union',
            logo: '/sponsors/union.png'
          },
          {
            url: 'https://www.morphl2.io/',
            title: 'Morph',
            logo: '/sponsors/morph.png'
          },
          {
            url: 'https://li.fi/',
            title: 'Li.Fi',
            logo: '/sponsors/lifi.png'
          },
          {
            url: 'https://www.drop.money/',
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
            url: 'https://barterswap.xyz/',
            title: 'Barter',
            logo: '/sponsors/barter.png'
          },
          {
            url: 'https://www.lagrange.dev/',
            title: 'Lagrange',
            logo: '/sponsors/lagrange.png'
          },
          {
            url: 'https://fluentlabs.xyz/',
            title: 'Fluent',
            logo: '/sponsors/fluent.png'
          },
          {
            url: 'https://argus.gg/',
            title: 'Argus Labs',
            logo: '/sponsors/argus-labs.png'
          },
          {
            url: 'https://www.ondora.xyz/',
            title: 'Dora',
            logo: '/sponsors/dora.png'
          },
          {
            url: 'https://www.optimism.io/',
            title: 'Optimism',
            logo: '/sponsors/optimism.png'
          },
          {
            url: 'https://arbitrum.io/',
            title: 'Arbitrum',
            logo: '/sponsors/arbitrum.png'
          },
          {
            url: 'https://zksync.io/',
            title: 'zkSync',
            logo: '/sponsors/zksync.png'
          },
          {
            url: 'https://tokonomy.co/',
            title: 'Tokonomy',
            logo: '/sponsors/tokonomy.png'
          },
          {
            url: 'https://citrea.xyz/',
            title: 'Citrea',
            logo: '/sponsors/citrea.png'
          },
          {
            url: 'https://penumbra.zone/',
            title: 'Penumbra',
            logo: '/sponsors/penumbra.png'
          },
          {
            url: 'https://www.socket.tech/',
            title: 'Socket',
            logo: '/sponsors/socket.png'
          },
          {
            url: 'https://www.polymerlabs.org/',
            title: 'Polymer',
            logo: '/sponsors/polymer.png'
          },
          {
            url: 'https://www.signatureventures.com/',
            title: 'Signature Ventures',
            logo: '/sponsors/signature-ventures.png'
          },
          {
            url: 'https://www.espressosys.com/',
            title: 'Espresso',
            logo: '/sponsors/espresso.png'
          },
          {
            url: 'https://catalyst.exchange/',
            title: 'Catalyst',
            logo: '/sponsors/catalyst.png'
          },
          {
            url: 'https://www.conduit.xyz/',
            title: 'Conduit',
            logo: '/sponsors/conduit.png'
          },
          {
            url: 'https://www.everclear.org/',
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
            url: 'https://kr1.io/',
            title: 'Kr1',
            logo: '/sponsors/kr1.png'
          },
          {
            url: 'https://envio.dev/',
            title: 'Envio',
            logo: '/sponsors/envio.png'
          },
          {
            url: 'https://www.spartangroup.io/',
            title: 'Spartan',
            logo: '/sponsors/spartan.png'
          },
          {
            url: 'https://nobleassets.xyz/',
            title: 'Noble',
            logo: '/sponsors/noble.png'
          },
          {
            url: 'https://skip.money/',
            title: 'Skip',
            logo: '/sponsors/skip.png'
          },
          {
            url: 'https://www.finoa.io/',
            title: 'Finoa',
            logo: '/sponsors/finoa.png'
          },
          {
            url: 'https://01node.com/',
            title: '01 Node',
            logo: '/sponsors/01Node.png'
          },
          {
            url: 'https://dorahacks.io/',
            title: 'DoraHacks',
            logo: '/sponsors/Dorahacks.png'
          },
          {
            url: 'https://tokenflow.live/',
            title: 'TokenFlow',
            logo: '/sponsors/tokenflow.png'
          },
          {
            url: 'https://particle.network/',
            title: 'Particle Network',
            logo: '/sponsors/particle.png'
          },
          {
            url: 'https://www.stride.zone/',
            title: 'Stride',
            logo: '/sponsors/stride.png'
          },
          {
            url: 'https://informal.systems/',
            title: 'Informal',
            logo: '/sponsors/informal.png'
          },
          {
            url: 'https://www.gelato.network/',
            title: 'Gelato',
            logo: '/sponsors/gelato.png'
          },
          {
            url: 'https://nuff.tech/',
            title: 'Nuffle Labs',
            logo: '/sponsors/nuffle.png'
          },
          {
            url: 'https://romeprotocol.com',
            title: 'Rome Protocol',
            logo: '/sponsors/rome.svg'
          }
        ]
      }
    ]
  },
  PartnerSection: {
    title: 'Partners',
    subtitle: '',
    partners: [
      {
        level: 3,
        grid: 4,
        span: 1,
        gap: 1.5,
        size: 120,
        elements: [
          {
            url: 'https://mm.therollup.co/',
            title: 'The Rollup',
            logo: '/partners/therollup.png'
          },
          {
            url: 'https://unchainedcrypto.com/',
            title: 'Unchained',
            logo: '/partners/unchained.png'
          },
          {
            url: 'https://zeroknowledge.fm/',
            title: 'ZKPodcast',
            logo: '/partners/zk.png'
          },
          {
            url: 'https://celenium.io/',
            title: 'Celenium',
            logo: '/partners/celenium.png'
          },
          {
            url: 'https://zkv.xyz/',
            title: 'ZKValidator',
            logo: '/partners/zkv.png'
          },
          {
            url: 'https://dev.lumina.eiger.co/',
            title: 'Eiger',
            logo: '/partners/eiger.png'
          },
          {
            url: 'https://www.flashbots.net/',
            title: 'Flashbots',
            logo: '/partners/flashbots.png'
          },
          {
            url: 'https://l2beat.com/scaling/summary',
            title: 'L2BEAT',
            logo: '/partners/l2beat.png'
          },
          {
            url: 'https://blockworks.co/',
            title: 'Blockworks',
            logo: '/partners/blockworks.png'
          }
        ]
      }
    ]
  },
  MediaPartnerSection: {
    title: 'Media Partners',
    subtitle: '',
    partners: [
      {
        level: 3,
        grid: 4,
        span: 1,
        gap: 1.5,
        size: 120,
        elements: [
          {
            url: 'https://mm.therollup.co/',
            title: 'The Rollup',
            logo: '/media-partners/placeholder.png'
          },
          {
            url: 'https://unchainedcrypto.com/',
            title: 'Unchained',
            logo: '/media-partners/placeholder.png'
          },
          {
            url: 'https://zeroknowledge.fm/',
            title: 'ZKPodcast',
            logo: '/media-partners/placeholder.png'
          },
          {
            url: 'https://celenium.io/',
            title: 'Celenium',
            logo: '/media-partners/placeholder.png'
          },
          {
            url: 'https://zkv.xyz/',
            title: 'ZKValidator',
            logo: '/media-partners/placeholder.png'
          },
          {
            url: 'https://dev.lumina.eiger.co/',
            title: 'Eiger',
            logo: '/media-partners/placeholder.png'
          },
          {
            url: 'https://www.flashbots.net/',
            title: 'Flashbots',
            logo: '/media-partners/placeholder.png'
          },
          {
            url: 'https://l2beat.com/scaling/summary',
            title: 'L2BEAT',
            logo: '/media-partners/placeholder.png'
          },
          {
            url: 'https://blockworks.co/',
            title: 'Blockworks',
            logo: '/media-partners/placeholder.png'
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
