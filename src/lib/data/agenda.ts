import { AgendaPageData, DayEvents, DayStreamingConfig } from '@/lib/data/interfaces/agenda'

export const stages: string[] = ['Chisel Stage', 'Canvas Stage', 'Pencil Stage', 'Palette Stage']

export const EventsList: DayEvents = {
  1: {
    'Chisel Stage': [
      {
        title: 'Opening Statement',
        time: '10:00 AM - 10:10 AM',
        speakers: 'Mathijs van Esch - Maven 11',
        track: 'Modular Track'
      },
      {
        title: 'Unification: Solving L2 fragmentation with Avail Nexus',
        time: '10:10 AM - 10:30 AM',
        speakers: 'Anurag Arjun - Avail',
        track: 'Modular Track'
      },
      {
        title: 'Modular Expansion: The Celestia Technical Roadmap',
        time: '10:30 AM - 10:50 AM',
        speakers: 'Ismail Khoffi - Celestia Labs',
        track: 'Modular Track'
      },
      {
        title: 'Ensuring Data Availability in Layer 2 Scaling Solutions: L2BEAT Risk Framework',
        time: '10:50 AM - 11:10 AM',
        speakers: 'Vincenzo Furcillo - L2BEAT',
        track: 'Modular Track'
      },
      {
        title: 'Panel: The Future of Data Availability',
        time: '11:10 AM - 11:55 AM',
        speakers: 'Prabal Banerjee (Avail), Mustafa Al-Bassam (Celestia Labs), Moderator: Bartek Kiepuszewski (L2BEAT)',
        track: 'Modular Track'
      },
      {
        title: 'State of the Modular Union',
        time: '11:55 AM - 12:20 PM',
        speakers: 'Mustafa Al-Bassam - Celestia Labs',
        track: 'Modular Track'
      },
      {
        title: 'The Age of Aggregation',
        time: '12:20 PM - 12:40 PM',
        speakers: 'Sandeep Nailwal - Polygon',
        track: 'Execution Track'
      },
      {
        title: 'Stylus: Bringing the MultiVM to Arbitrum',
        time: '12:40 PM - 13:00 PM',
        speakers: 'Ed Felten - Offchain Labs',
        track: 'Execution Track'
      },
      {
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Lunch Break'
      },
      {
        title: 'How zkVMs are upgrading the modular stack',
        time: '14:00 PM - 14:20 PM',
        speakers: 'Uma Roy - Succinct',
        track: 'Execution Track'
      },
      {
        title: 'Client Monogamy: Settle down and marry one already',
        time: '14:20 PM - 14:40 PM',
        speakers: 'James Prestwich',
        track: 'Execution Track'
      },
      {
        title: 'Putting the Super in Superchain: OP Stack Interoperability',
        time: '14:40 PM - 15:00 PM',
        speakers: 'Mark Tyneway - Optimism',
        track: 'Execution Track'
      },
      {
        title: 'Elastic Chains',
        time: '15:00 PM - 15:20 PM',
        speakers: 'Alex Gluchowski - Matter Labs',
        track: 'Execution Track'
      },
      {
        title: 'Blatantly Shilling Astria',
        time: '15:20 PM - 15:40 PM',
        speakers: 'Josh Bowen - Astria',
        track: 'Execution Track'
      },
      {
        title: 'WTF IS A REAL-TIME BLOCKCHAIN',
        time: '15:40 PM - 16:00 PM',
        speakers: 'Namik Muduroglu',
        track: 'Execution Track'
      },
      {
        title: 'Panel: One big rollup OR one million rollups?',
        time: '16:00 PM - 16:40 PM',
        speakers: 'Panelists: Shuyao Kong (MegaETH), Azeem Khan (Morph), Ben Goebel (StarkWare), Marine (Optimism), Moderator: Stephy Dunbar (Fluent)',
        track: 'Execution Track'
      },
      {
        title: 'Vryx: Fortifying Decoupled State Machine Replication',
        time: '16:40 PM - 17:00 PM',
        speakers: "Patrick O'Grady - Ava Labs",
        track: 'Execution Track'
      },
      {
        title: 'Blended Execution',
        time: '17:00 PM - 17:20 PM',
        speakers: 'DinoEggs - Fluent',
        track: 'Execution Track'
      },
      {
        title: 'BeaconKit: A modular framework for building EVM consensus clients',
        time: '17:20 PM - 17:40 PM',
        speakers: 'Dev Bear',
        track: 'Execution Track'
      },
      {
        title: 'Grug',
        time: '17:40 PM - 18:00 PM',
        speakers: 'Larry Lyu - Left Curve Software',
        track: 'Execution Track'
      },
      {
        title: 'Embracing Modularity: The Future of Blockchain Innovation',
        time: '18:00 PM - 18:20 PM',
        speakers: 'Rushi Manche - Movement Labs',
        track: 'Execution Track'
      },
      {
        title: 'Fireside chat with Mustafa',
        time: '18:20 PM - 19:00 PM',
        speakers: 'Interviewee: Mustafa Al-Bassam, Interviewer: Laura Shin',
        track: 'Execution Track'
      },
      {
        title: 'Happy Hour',
        time: '19:00 PM - 21:00 PM',
        speakers: '',
        track: 'Happy Hour'
      },

    ],
    'Canvas Stage': [
      {
        title: 'Unlocking Liquidity for the Modular Economy',
        time: '10:00 AM - 10:20 AM',
        speakers: 'Mitya Argunov - Drop Protocol',
        track: 'Build Whatever Track'
      },
      {
        title: 'Panel: Migrating to Celestia',
        time: '10:20 AM - 11:00 AM',
        speakers: 'Panelists: Mike Spain (Lyra), Kenny Li (Manta Labs), Zon (Initia), Victor Ionescu (Hashflow), Nikita Ovchinnik (Barter),  Moderator: Eshita Nandini (Astria)',
        track: 'Build Whatever Track'
      },
      {
        title: 'Discover the Infinite Frontier: Search the Unified Multichain & MultiVM World',
        time: '11:00 AM - 11:20 AM',
        speakers: 'Bunny - Search on Dora',
        track: 'Build Whatever Track'
      },
      {
        title: 'Introducing Exchange OS',
        time: '11:20 AM - 11:40 AM',
        speakers: 'Victor Ionescu - Hashflow',
        track: 'Build Whatever Track'
      },
      {
        title: 'Dark Rollups',
        time: '11:40 AM - 12:00 PM',
        speakers: 'Henry de Valence - Penumbra',
        track: 'Build Whatever Track'
      },
      {
        title: 'Rollups in the wild',
        time: '12:00 PM - 12:20 PM',
        speakers: 'Andrew Huang - Conduit',
        track: 'Build Whatever Track'
      },
      {
        title: 'Panel: From Apps to Chains',
        time: '12:20 PM - 13:00 PM',
        speakers: 'Panelists: Andrew Huang (Conduit), Mike Spain (Lyra), Griffin Dunaif (Halliday), Moderator: Ben Rodriguez (Coinbase)',
        track: 'Build Whatever Track'
      },
      {
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Lunch Break'
      },
      {
        title: 'The Sprawl',
        time: '14:00 PM - 14:20 PM',
        speakers: 'Jacob Arluck - Celestia Labs',
        track: 'Build Whatever Track'
      },
      {
        title: 'Solving native asset issuance in a modular ecosystem',
        time: '14:20 PM - 14:40 PM',
        speakers: 'Jelena Djuric - Noble',
        track: 'Build Whatever Track'
      },
      {
        title: 'Exploring Worldcoin: User Activity and the Journey to World Chain',
        time: '14:40 PM - 15:00 PM',
        speakers: 'Philipp Sippl - Worldcoin',
        track: 'Build Whatever Track'
      },
      {
        title: 'Learnings on Layer 2s',
        time: '15:00 PM - 15:20 PM',
        speakers: 'Hilmar Orth - Gelato',
        track: 'Build Whatever Track'
      },
      {
        title: 'Panel: Sovereign Rollups',
        time: '15:20 PM - 16:00 PM',
        speakers: 'Panelists: Cem Ozer (Sovereign Labs), Manav Aggarwal (Rollkit), Felipe Argento (Cartesi) ,Moderator: David Feiock (Anagram)',
        track: 'Build Whatever Track'
      },
      {
        title: 'Native intelligence through compute-specific networks',
        time: '16:00 PM - 16:20 PM',
        speakers: 'Matthew Wang - Valence',
        track: 'Build Whatever Track'
      },
      {
        title: 'Solana Throughput and Bitcoin Security: Can we have both?',
        time: '16:20 PM - 16:40 PM',
        speakers: 'Shane Vitarana - Stargaze',
        track: 'Build Whatever Track'
      },
      {
        title: 'Panel: Sloths and Lazy Chain',
        time: '16:40 PM - 17:20 PM',
        speakers: 'Panelists: Zaki Manian, Paco, Gjermund Garaba, Peyman Momeni, Moderator: Nick White',
        track: 'Build Whatever Track'
      },
      {
        title: 'MilkyWay: Modular Staking Hub',
        time: '17:20 PM - 17:40 PM',
        speakers: 'JayB - Milkyway',
        track: 'Build Whatever Track'
      },
      {
        title: 'Ritual Talk',
        time: '17:40 PM - 18:00 PM',
        speakers: 'Niraj Pant - Ritual',
        track: 'Build Whatever Track'
      },
    ],
    'Pencil Stage': [
      {
        title: 'Modular Encryption: Make Apps Fun Again',
        time: '12:40 PM - 13:00 PM',
        speakers: 'Peyman Momeni - Fairblock',
        track: 'Salon Talks'
      },
      {
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: ''
      },
      {
        title: 'Celo Goes Modular',
        time: '14:00 PM - 14:20 PM',
        speakers: 'Mariano Cortesi - cLabs',
        track: 'Salon Talks'
      },
      {
        title: 'Creating sovereign rollups without trusted infrastructure',
        time: '14:20 PM - 14:40 PM',
        speakers: 'Manav Aggarwal - Rollkit',
        track: 'Salon Talks'
      },
      {
        title: 'A letter to the next web3 generation',
        time: '14:40 PM - 15:00 PM',
        speakers: 'Callum Waters - Celestia Labs',
        track: 'Salon Talks'
      },
      {
        title: 'On & Offchain Approaches to Chain Abstraction',
        time: '15:00 PM - 15:20 PM',
        speakers: 'Nitya Subramanian - Capsule',
        track: 'Salon Talks'
      },
      {
        title: 'Exploring DeFund - A Sovereign Rollup for the Modular Ecosystem',
        time: '15:20 PM - 15:40 PM',
        speakers: 'John DiBernardi - DeFund',
        track: 'Salon Talks'
      },
      { 
        title: 'Pessimistic Validation',
        time: '15:40 PM - 16:00 PM',
        speakers: 'Gjermund Garaba - IBC',
        track: 'Salon Talks'
      },
      {
        title: 'Stop flying blind - data for modular eocystem',
        time: '16:00 PM - 16:20 PM',
        speakers: 'Andra Fecioru - Token Flow',
        track: 'Salon Talks'
      },
      {
        title: 'Harnessing Real-World Assets with Web3 Applications in Emerging Markets',
        time: '16:20 PM - 16:40 PM',
        speakers: 'Jessica Gaubert - Haraka',
        track: 'Salon Talks'
      },
      {
        title: 'Economics of Ethereum Scaling Solutions',
        time: '16:40 PM - 17:00 PM',
        speakers: 'Tobias Schreier - growthepie.xyz',
        track: 'Salon Talks'
      },
      {
        title: 'The Search for Sustainable Yield',
        time: '17:00 PM - 17:20 PM',
        speakers: 'Andrew Lloyd - Last',
        track: 'Salon Talks'
      },
      { 
        title: 'Deimos: Fixing E2E Encryption using Celestia',
        time: '17:20 PM - 17:40 PM',
        speakers: 'distractedm1nd',
        track: 'Salon Talks'
      },
      { 
        title: 'How Sovereign Rollups *Actually* Work',
        time: '17:40 PM - 18:00 PM',
        speakers: 'Vishal Talasani',
        track: 'Salon Talks'
      },

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
  'Modular Track': { bg: '#77BFF7', text: '#77BFF7' },
  'Execution Track': { bg: '#BBC04C', text: '#BBC04C' },
  'Lunch Track': { bg: '#E5C300', text: '#E5C300' },
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
