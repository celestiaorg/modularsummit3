import { AgendaPageData, DayEvents, DayStreamingConfig } from '@/lib/data/interfaces/agenda'

export const stages: string[] = ['Stage 1', 'Stage 2', 'Workshop 1', 'Workshop 2']

export const EventsList: DayEvents = {
  1: {
    'Stage 1': [
      {
        title: 'Introducing to Modular Summit 2',
        time: '08:10 AM - 10:00 AM',
        speakers: 'Haseeb Qureshi, John Doe, Eve',
        track: 'Track 1'
      },
      {
        title: 'Modular blockchains : Is the hype real ?',
        time: '10:15 AM - 11:45 AM',
        speakers: 'Alice Johnson, Bob Smith, Charlie Brown',
        track: 'Track 1'
      },
      {
        title: 'Scalability Solutions: Comparing Layer 2 Approaches',
        time: '01:00 PM - 02:30 PM',
        speakers: 'Sarah Lee, Michael Chen, Olivia Wang',
        track: 'Track 2'
      },
      {
        title: 'The Future of Decentralized Storage',
        time: '02:45 PM - 04:15 PM',
        speakers: 'Daniel Kim, Rachel Green, Thomas Brown',
        track: 'Track 2'
      },
      {
        title: 'Interoperability Protocols: Bridging Blockchain Networks',
        time: '04:30 PM - 06:00 PM',
        speakers: 'Emily Zhao, Alex Rodriguez, Sophia Patel',
        track: 'Track 3'
      },
      {
        title: 'Regulatory Challenges in the Modular Blockchain Era',
        time: '06:15 PM - 07:45 PM',
        speakers: 'Mark Johnson, Lisa Taylor, David Wong',
        track: 'Track 3'
      },
      {
        title: 'Decentralized Finance (DeFi) on Modular Blockchains',
        time: '08:00 PM - 09:30 PM',
        speakers: 'Jennifer Lee, Robert Chen, Aisha Patel',
        track: 'Track 4'
      },
      {
        title: 'Security Considerations in Modular Blockchain Design',
        time: '09:45 PM - 11:15 PM',
        speakers: 'Chris Anderson, Samantha Wright, Raj Mehta',
        track: 'Track 4'
      }
    ],
    'Stage 2': [
      {
        title: 'The Future of Layer 2 Solutions',
        time: '09:00 AM - 10:30 AM',
        speakers: 'David Lee, Emma Wilson, Frank Thomas',
        track: 'Track 1'
      },
      {
        title: 'Scaling Challenges and Solutions',
        time: '11:00 AM - 12:30 PM',
        speakers: 'Grace Miller, Henry Davis, Ivy Chen',
        track: 'Track 1'
      },
      {
        title: 'Decentralized Identity: The Next Frontier',
        time: '01:30 PM - 03:00 PM',
        speakers: 'Julia Roberts, Kevin Spacey, Liam Neeson',
        track: 'Track 1'
      },
      {
        title: 'NFTs and the Metaverse: A New Digital Economy',
        time: '03:30 PM - 05:00 PM',
        speakers: 'Mila Kunis, Natalie Portman, Orlando Bloom',
        track: 'Track 2'
      },
      {
        title: 'Sustainable Blockchain: Eco-Friendly Consensus Mechanisms',
        time: '05:30 PM - 07:00 PM',
        speakers: 'Paul Rudd, Queen Latifah, Ryan Reynolds',
        track: 'Track 2'
      },
      {
        title: 'Privacy in the Age of Blockchain',
        time: '07:30 PM - 09:00 PM',
        speakers: 'Scarlett Johansson, Tom Hanks, Uma Thurman',
        track: 'Track 3'
      },
      {
        title: 'The Intersection of AI and Blockchain',
        time: '09:30 PM - 11:00 PM',
        speakers: 'Vin Diesel, Will Smith, Xander Berkeley',
        track: 'Track 3'
      },
      {
        title: 'Blockchain Interoperability: Connecting Modular Networks',
        time: '11:30 PM - 01:00 AM',
        speakers: 'Zoe Saldana, Chris Pratt, Dave Bautista',
        track: 'Track 4'
      },
      {
        title: 'Governance Models for Modular Blockchains',
        time: '01:30 AM - 03:00 AM',
        speakers: 'Robert Downey Jr., Chris Evans, Mark Ruffalo',
        track: 'Track 4'
      },
      {
        title: 'The Role of Oracles in Modular Blockchain Ecosystems',
        time: '03:30 AM - 05:00 AM',
        speakers: 'Chadwick Boseman, Letitia Wright, Danai Gurira',
        track: 'Track 4'
      }
    ],
    'Workshop 1': [
      {
        title: 'Building on Celestia: A Hands-on Approach',
        time: '09:30 AM - 11:30 AM',
        speakers: 'Jack Robinson, Kate Anderson',
        track: 'Track 1'
      },
      {
        title: 'Implementing Rollups: A Step-by-Step Guide',
        time: '01:00 PM - 03:00 PM',
        speakers: 'Emma Thompson, Michael Chen',
        track: 'Track 2'
      },
      {
        title: 'Optimizing Smart Contracts for Modular Blockchains',
        time: '03:30 PM - 05:30 PM',
        speakers: 'Sarah Johnson, Alex Lee',
        track: 'Track 3'
      }
    ],
    'Workshop 2': [
      {
        title: 'ZK Proofs: From Theory to Practice',
        time: '10:00 AM - 12:00 PM',
        speakers: 'Liam Wright, Mia Garcia',
        track: 'Track 1'
      },
      {
        title: 'Implementing Sharding in Blockchain Networks',
        time: '01:00 PM - 03:00 PM',
        speakers: 'Ethan Summers, Olivia Chen',
        track: 'Track 1'
      },
      {
        title: 'Advanced Cryptography for Blockchain Developers',
        time: '03:30 PM - 05:30 PM',
        speakers: 'Dr. Alice Johnson, Prof. Robert Lee',
        track: 'Track 3'
      },
      {
        title: 'Building Scalable DApps: Best Practices',
        time: '06:00 PM - 08:00 PM',
        speakers: 'Mark Thompson, Sarah Zhang',
        track: 'Track 3'
      }
    ]
  },
  2: {
    'Stage 1': [
      {
        title: 'Advancements in Cross-Chain Interoperability',
        time: '09:00 AM - 10:30 AM',
        speakers: 'Nina Patel, Oscar Hernandez',
        track: 'Track 1'
      },
      {
        title: 'The Role of AI in Blockchain Development',
        time: '11:00 AM - 12:30 PM',
        speakers: 'Patricia Quinn, Quentin Foster',
        track: 'Track 1'
      },
      {
        title: 'Scaling Solutions for Next-Gen Blockchains',
        time: '02:00 PM - 03:30 PM',
        speakers: 'Ryan Johnson, Sophia Lee',
        track: 'Track 1'
      },
      {
        title: 'Privacy-Preserving Technologies in Blockchain',
        time: '04:00 PM - 05:30 PM',
        speakers: 'Thomas Brown, Uma Patel',
        track: 'Track 2'
      },
      {
        title: 'Decentralized Identity: The Future of Authentication',
        time: '05:45 PM - 07:15 PM',
        speakers: 'Victor Chang, Wendy Martinez',
        track: 'Track 2'
      },
      {
        title: 'Blockchain in IoT: Opportunities and Challenges',
        time: '07:30 PM - 09:00 PM',
        speakers: 'Xavier Liu, Yasmin Ahmed',
        track: 'Track 2'
      },
      {
        title: 'Quantum Computing and Blockchain: Future Implications',
        time: '09:15 PM - 10:45 PM',
        speakers: 'Zoe Wilson, Alan Turing',
        track: 'Track 3'
      },
      {
        title: 'Blockchain for Social Impact: Case Studies',
        time: '11:00 PM - 12:30 AM',
        speakers: 'Bianca Rodriguez, Chidi Okonkwo',
        track: 'Track 3'
      }
    ],
    'Stage 2': [
      {
        title: 'Decentralized Finance: Beyond the Basics',
        time: '08:30 AM - 10:00 AM',
        speakers: 'Rachel Sanders, Sam Turner',
        track: 'Track 1'
      },
      {
        title: 'Governance Models in Web3',
        time: '10:30 AM - 12:00 PM',
        speakers: 'Tina Upton, Ulysses Vance',
        track: 'Track 1'
      },
      {
        title: 'Blockchain Scalability Solutions',
        time: '01:00 PM - 02:30 PM',
        speakers: 'Vincent Lee, Wendy Zhao',
        track: 'Track 2'
      },
      {
        title: 'Interoperability Between Blockchains',
        time: '03:00 PM - 04:30 PM',
        speakers: 'Xavier Chen, Yasmin Patel',
        track: 'Track 2'
      },
      {
        title: 'Tokenomics: Designing Sustainable Ecosystems',
        time: '05:00 PM - 06:30 PM',
        speakers: 'Zack Williams, Alice Johnson',
        track: 'Track 3'
      },
      {
        title: 'Privacy in the Age of Blockchain',
        time: '07:00 PM - 08:30 PM',
        speakers: 'Bob Smith, Carol Davis',
        track: 'Track 3'
      },
      {
        title: 'The Future of Decentralized Exchanges',
        time: '09:00 PM - 10:30 PM',
        speakers: 'David Brown, Emma White',
        track: 'Track 3'
      }
    ],
    'Workshop 1': [
      {
        title: 'Smart Contract Security: Best Practices',
        time: '09:00 AM - 11:00 AM',
        speakers: 'Victor Wang, Wendy Zhao',
        track: 'Track 1'
      }
    ],
    'Workshop 2': [
      {
        title: 'Building Decentralized Applications',
        time: '10:30 AM - 12:30 PM',
        speakers: 'Xavier Young, Yolanda Zhang',
        track: 'Track 2'
      }
    ]
  },
  3: {
    'Stage 1': [
      {
        title: 'The Future of Digital Identity',
        time: '08:30 AM - 10:00 AM',
        speakers: 'Adam Baker, Bella Chen',
        track: 'Track 1'
      },
      {
        title: 'Sustainable Blockchain: Reducing Carbon Footprint',
        time: '10:30 AM - 12:00 PM',
        speakers: 'Cody Davis, Diana Evans',
        track: 'Track 1'
      },
      {
        title: 'Blockchain in Supply Chain Management',
        time: '01:30 PM - 03:00 PM',
        speakers: 'Emma Foster, Frank Garcia',
        track: 'Track 2'
      },
      {
        title: 'Decentralized Finance (DeFi) Innovations',
        time: '03:30 PM - 05:00 PM',
        speakers: 'Grace Huang, Henry Ingram',
        track: 'Track 2'
      },
      {
        title: 'Quantum Computing and Blockchain Security',
        time: '05:30 PM - 07:00 PM',
        speakers: 'Ivy Jones, Jack Wilson',
        track: 'Track 3'
      }
    ],
    'Stage 2': [
      {
        title: 'Regulatory Landscape for Cryptocurrencies',
        time: '09:00 AM - 10:30 AM',
        speakers: 'Ethan Foster, Fiona Garcia',
        track: 'Track 1'
      },
      {
        title: 'NFTs: Beyond Digital Art',
        time: '11:00 AM - 12:30 PM',
        speakers: 'George Huang, Hannah Ingram',
        track: 'Track 1'
      },
      {
        title: 'Blockchain in Healthcare: Opportunities and Challenges',
        time: '01:00 PM - 02:30 PM',
        speakers: 'Isabella Jones, Jack Wilson',
        track: 'Track 1'
      },
      {
        title: 'Decentralized Autonomous Organizations (DAOs)',
        time: '03:00 PM - 04:30 PM',
        speakers: 'Karen Lee, Liam Brown',
        track: 'Track 2'
      },
      {
        title: 'Cross-Chain Interoperability Solutions',
        time: '05:00 PM - 06:30 PM',
        speakers: 'Mia Chen, Noah Taylor',
        track: 'Track 3'
      },
      {
        title: 'AI and Blockchain: Synergies and Use Cases',
        time: '07:00 PM - 08:30 PM',
        speakers: 'Olivia Davis, Paul Rodriguez',
        track: 'Track 3'
      },
      {
        title: 'Blockchain Governance Models',
        time: '09:00 PM - 10:30 PM',
        speakers: 'Quinn Johnson, Rachel Kim',
        track: 'Track 3'
      }
    ],
    'Workshop 1': [
      {
        title: 'Implementing Zero-Knowledge Proofs',
        time: '09:30 AM - 11:30 AM',
        speakers: 'Ian Johnson, Julia Kim',
        track: 'Track 1'
      },
      {
        title: 'Advanced Cryptography in Blockchain',
        time: '12:00 PM - 2:00 PM',
        speakers: 'Lisa Wong, Mark Anderson',
        track: 'Track 1'
      },
      {
        title: 'Scalability Solutions for Blockchain Networks',
        time: '2:30 PM - 4:30 PM',
        speakers: 'Nathan Brown, Olivia Chen',
        track: 'Track 2'
      }
    ],
    'Workshop 2': [
      {
        title: 'Blockchain for Supply Chain Management',
        time: '10:00 AM - 12:00 PM',
        speakers: 'Kevin Lee, Laura Martinez',
        track: 'Track 1'
      },
      {
        title: 'Smart Contract Security Best Practices',
        time: '1:00 PM - 3:00 PM',
        speakers: 'Michael Norton, Nina Ortiz',
        track: 'Track 1'
      },
      {
        title: 'Decentralized Finance (DeFi) Deep Dive',
        time: '3:30 PM - 5:30 PM',
        speakers: 'Oscar Patel, Penny Quinn',
        track: 'Track 2'
      },
      {
        title: 'Blockchain Interoperability Solutions',
        time: '6:00 PM - 8:00 PM',
        speakers: 'Robert Smith, Sarah Thompson',
        track: 'Track 2'
      }
    ]
  }
}

export const dayDescriptions: { [key: number]: string } = {
  1: 'Day 1 explores the state of the modular stack and how new ideas around intents, shared sequencers, and ZK are bound to shape it.',
  2: 'Day 2 dives into gaming, modular cosmos, and PBS day (co-created with Flashbots).',
  3: 'Day 3 focuses on the future of blockchain technology, including sustainability, regulation, and real-world applications.'
}

export const videoStreamingConfig: DayStreamingConfig = {
  1: {
    'Stage 1': {
      youtubeLink: 'https://www.youtube.com/watch?v=day1stage1'
    },
    'Stage 2': {
      youtubeLink: 'https://www.youtube.com/watch?v=day1stage2'
    }
  },
  2: {
    'Stage 1': {
      youtubeLink: 'https://www.youtube.com/watch?v=day2stage1'
    },
    'Stage 2': {
      youtubeLink: 'https://www.youtube.com/watch?v=day2stage2'
    }
  },
  3: {
    'Stage 1': {
      youtubeLink: 'https://www.youtube.com/watch?v=day3stage1'
    },
    'Stage 2': {
      youtubeLink: 'https://www.youtube.com/watch?v=day3stage2'
    }
  }
}

export const tracks: { [key: string]: { bg: string; text: string } } = {
  'Track 1': { bg: '#77BFF7', text: '#77BFF7' },
  'Track 2': { bg: '#BBC04C', text: '#BBC04C' },
  'Track 3': { bg: '#E5C300', text: '#E5C300' },
  'Track 4': { bg: '#EC9455', text: '#EC9455' }
}

export const pageData: AgendaPageData = {
  AgendaSection: {
    title: 'Agenda'
  },
  AgendaItemProps: {
    title: '',
    time: '',
    speakers: '',
    track: ''
  },
  DayButtonProps: {
    day: 1,
    isActive: false,
    onClick: () => {}
  },
  StageButtonProps: {
    stage: '',
    isActive: false,
    onClick: () => {}
  },
  SearchResultProps: {
    result: {
      title: '',
      day: 1,
      stage: ''
    },
    onClick: () => {},
    isActive: false
  },
  Event: {
    title: '',
    time: '',
    speakers: '',
    track: ''
  },
  Stage: {},
  DayEvents: {},
  VideoStreamingConfig: {
    youtubeLink: ''
  },
  StageStreamingConfig: {},
  DayStreamingConfig: videoStreamingConfig
}
