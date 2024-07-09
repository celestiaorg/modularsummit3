import { SovereignPageData } from '@/lib/data/interfaces/sovereign'
export const sovereignPageData: SovereignPageData = {
  HeroSection: {
    title: 'Sovereign Radio',
    event: 'Modular Summit 3.0',
    location: 'Brussels, Belgium',
    hosts: [
      {
        id: 1,
        host: 'Anna Rose',
        image: '/speakers/anna.jpg'
      },
      {
        id: 2,
        host: 'Hart Lambur',
        image: '/speakers/hart.jpg'
      },
      {
        id: 3,
        host: 'Chjango Unchained',
        image: '/speakers/chjango.jpg'
      },
      {
        id: 4,
        host: 'Laura Shin',
        image: '/speakers/laurashin.jpg'
      }
    ]
  },
  IntroData: {
    title: `<span>Sovereign Radio</span> is a limited-edition podcast featuring interviews with speakers from the Modular Summit.`,
    text: `The podcast focuses on innovative modular blockchain projects and their latest collaborations rebuilding crypto from first principles. Stay tuned for this year's interviews hosted by <a href="https://twitter.com/AnnaRRose" target="_blank" rel="noopener noreferrer">Anna Rose</a>, <a href="https://twitter.com/hal2001" target="_blank" rel="noopener noreferrer">Hart Lambur</a>, <a href="https://twitter.com/chjango" target="_blank" rel="noopener noreferrer">Chjango Unchained</a>, and <a href="https://twitter.com/laurashin" target="_blank" rel="noopener noreferrer">Laura Shin</a>.`
  },
  VideoSection: {
    title: 'Sovereign Radio 2023 Interviews',
    button: {
      target: '_blank',
      title: 'Sovereign Youtube',
      url: 'https://www.youtube.com/@CelestiaNetwork'
    },
    videos: [
      {
        title: 'Ismail Khoffi of Celestia',
        subtitle: 'Sovereign Radio Interview with Anna Rose',
        videoId: 'R5nAI-jXAgk'
      },
      {
        title: 'Chris Goes of Anoma',
        subtitle: 'Sovereign Radio Interview with Anna Rose',
        videoId: 'lgJ-AMg8cDI'
      },
      {
        title: 'Ismael Hishon-Rezaizadeh of Lagrange',
        subtitle: 'Sovereign Radio Interview with Chjango',
        videoId: 'TFVrOEhKrDA'
      },
      {
        title: 'Brian Retford of RiscZero',
        subtitle: 'Sovereign Radio Interview with Chjango',
        videoId: 'cj825pGolMc'
      },
      {
        title: 'Jill Gunter of Espresso',
        subtitle: 'Sovereign Radio Interview with Chjango',
        videoId: 'GnwLFe-fm38'
      },
      {
        title: 'Arjun Kalsy of Mantle',
        subtitle: 'Sovereign Radio Interview with Chjango',
        videoId: 'OIjO3xNJ3l4'
      },
      {
        title: 'Jon Kol of Hyperlane',
        subtitle: 'Sovereign Radio Interview with Chjango',
        videoId: 'aQ3A7Ns42hs'
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
            url: 'https://eiger.co/',
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
            url: 'https://blockworks.co/',
            title: 'Blockworks',
            logo: '/partners/blockworks.png'
          }
        ]
      }
    ]
  }
}
