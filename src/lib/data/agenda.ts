import { AgendaPageData, DayEvents, DayStreamingConfig } from '@/lib/data/interfaces/agenda'

export const stages: string[] = ['Chisel Stage', 'Canvas Stage', 'Pencil Stage', 'Palette Stage']

export const stageTypes: string[] = ['Stage 1', 'Stage 2', 'Workshop 1', 'Workshop 2']

export const EventsList: DayEvents = {
  1: {
    'Chisel Stage': [
      {
        title: 'Opening Statement',
        time: '10:00 AM - 10:10 AM',
        speakers: 'Mathijs van Esch - Maven 11',
        track: 'Data Availability'
      },
      {
        title: 'Unification: Solving L2 fragmentation with Avail Nexus',
        time: '10:10 AM - 10:30 AM',
        speakers: 'Anurag Arjun - Avail',
        track: 'Data Availability'
      },
      {
        title: 'Modular Expansion: The Celestia Technical Roadmap',
        time: '10:30 AM - 10:50 AM',
        speakers: 'Ismail Khoffi - Celestia Labs',
        track: 'Data Availability'
      },
      {
        title: 'Ensuring Data Availability in Layer 2 Scaling Solutions: L2BEAT Risk Framework',
        time: '10:50 AM - 11:10 AM',
        speakers: 'Vincenzo Furcillo - L2BEAT',
        track: 'Data Availability'
      },
      {
        title: 'Panel: The Future of Data Availability',
        time: '11:10 AM - 11:55 AM',
        speakers: 'Prabal Banerjee (Avail), Mustafa Al-Bassam (Celestia Labs), Moderator: Bartek Kiepuszewski (L2BEAT)',
        track: 'Data Availability'
      },
      {
        title: 'State of the Modular Union',
        time: '11:55 AM - 12:20 PM',
        speakers: 'Mustafa Al-Bassam - Celestia Labs',
        track: 'Data Availability'
      },
      {
        title: 'The Age of Aggregation',
        time: '12:20 PM - 12:40 PM',
        speakers: 'Sandeep Nailwal - Polygon',
        track: 'Execution'
      },
      {
        title: 'Stylus: Bringing the MultiVM to Arbitrum',
        time: '12:40 PM - 13:00 PM',
        speakers: 'Ed Felten - Offchain Labs',
        track: 'Execution'
      },
      {
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Break'
      },
      {
        title: 'How zkVMs are upgrading the modular stack',
        time: '14:00 PM - 14:20 PM',
        speakers: 'Uma Roy - Succinct',
        track: 'Execution'
      },
      {
        title: 'Client Monogamy: Settle down and marry one already',
        time: '14:20 PM - 14:40 PM',
        speakers: 'James Prestwich - init4',
        track: 'Execution'
      },
      {
        title: 'Putting the Super in Superchain: OP Stack Interoperability',
        time: '14:40 PM - 15:00 PM',
        speakers: 'Mark Tyneway - Optimism',
        track: 'Execution'
      },
      {
        title: 'Elastic Chains',
        time: '15:00 PM - 15:20 PM',
        speakers: 'Alex Gluchowski - Matter Labs',
        track: 'Execution'
      },
      {
        title: 'Blatantly Shilling Astria',
        time: '15:20 PM - 15:40 PM',
        speakers: 'Josh Bowen - Astria',
        track: 'Execution'
      },
      {
        title: 'WTF IS A REAL-TIME BLOCKCHAIN',
        time: '15:40 PM - 16:00 PM',
        speakers: 'Namik Muduroglu - megaETH',
        track: 'Execution'
      },
      {
        title: 'Panel: One big rollup OR one million rollups?',
        time: '16:00 PM - 16:40 PM',
        speakers: 'Panelists: Shuyao Kong (MegaETH), Azeem Khan (Morph), Ben Goebel (StarkWare), Marine (Optimism), Moderator: Stephy Dunbar (Fluent)',
        track: 'Execution'
      },
      {
        title: 'Vryx: Fortifying Decoupled State Machine Replication',
        time: '16:40 PM - 17:00 PM',
        speakers: "Patrick O'Grady - Ava Labs",
        track: 'Execution'
      },
      {
        title: 'Blended Execution',
        time: '17:00 PM - 17:20 PM',
        speakers: 'DinoEggs - Fluent',
        track: 'Execution'
      },
      {
        title: 'BeaconKit: A modular framework for building EVM consensus clients',
        time: '17:20 PM - 17:40 PM',
        speakers: 'Dev Bear - Berachain',
        track: 'Execution'
      },
      {
        title: 'Grug',
        time: '17:40 PM - 18:00 PM',
        speakers: 'Larry Lyu - Left Curve Software',
        track: 'Execution'
      },
      {
        title: 'Embracing Modularity: The Future of Blockchain Innovation',
        time: '18:00 PM - 18:20 PM',
        speakers: 'Rushi Manche - Movement Labs',
        track: 'Execution'
      },
      {
        title: 'Fireside chat with Mustafa',
        time: '18:20 PM - 19:00 PM',
        speakers: 'Mustafa Al-Bassam & Laura Shin',
        track: 'Execution'
      },
      {
        title: 'Happy Hour by Signature Ventures',
        time: '19:00 PM - 21:00 PM',
        speakers: '',
        track: 'Break'
      },
    ],
    'Canvas Stage': [
      {
        title: 'Unlocking Liquidity for the Modular Economy',
        time: '10:00 AM - 10:20 AM',
        speakers: 'Mitya Argunov - Drop Protocol',
        track: 'Build Whatever'
      },
      {
        title: 'Panel: Migrating to Celestia',
        time: '10:20 AM - 11:00 AM',
        speakers: 'Panelists: Mike Spain (Lyra), Kenny Li (Manta Labs), Zon (Initia), Victor Ionescu (Hashflow), Nikita Ovchinnik (Barter),  Moderator: Eshita Nandini (Astria)',
        track: 'Build Whatever'
      },
      {
        title: 'Discover the Infinite Frontier: Search the Unified Multichain & MultiVM World',
        time: '11:00 AM - 11:20 AM',
        speakers: 'Bunny - Search on Dora',
        track: 'Build Whatever'
      },
      {
        title: 'Introducing Exchange OS',
        time: '11:20 AM - 11:40 AM',
        speakers: 'Victor Ionescu - Hashflow',
        track: 'Build Whatever'
      },
      {
        title: 'Dark Rollups',
        time: '11:40 AM - 12:00 PM',
        speakers: 'Henry de Valence - Penumbra',
        track: 'Build Whatever'
      },
      {
        title: 'Rollups in the wild',
        time: '12:00 PM - 12:20 PM',
        speakers: 'Andrew Huang - Conduit',
        track: 'Build Whatever'
      },
      {
        title: 'Panel: From Apps to Chains',
        time: '12:20 PM - 13:00 PM',
        speakers: 'Panelists: Andrew Huang (Conduit), Mike Spain (Lyra), Griffin Dunaif (Halliday), Moderator: Ben Rodriguez (Coinbase)',
        track: 'Build Whatever'
      },
      {
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Break'
      },
      {
        title: 'The Sprawl',
        time: '14:00 PM - 14:20 PM',
        speakers: 'Jacob Arluck - Celestia Labs',
        track: 'Build Whatever'
      },
      {
        title: 'Solving native asset issuance in a modular ecosystem',
        time: '14:20 PM - 14:40 PM',
        speakers: 'Jelena Djuric - Noble',
        track: 'Build Whatever'
      },
      {
        title: 'Exploring Worldcoin: User Activity and the Journey to World Chain',
        time: '14:40 PM - 15:00 PM',
        speakers: 'Philipp Sippl - Worldcoin',
        track: 'Build Whatever'
      },
      {
        title: 'Learnings on Layer 2s',
        time: '15:00 PM - 15:20 PM',
        speakers: 'Hilmar Orth - Gelato',
        track: 'Build Whatever'
      },
      {
        title: 'Panel: Sovereign Rollups',
        time: '15:20 PM - 16:00 PM',
        speakers: 'Panelists: Cem Ozer (Sovereign Labs), Manav Aggarwal (Rollkit), Felipe Argento (Cartesi) ,Moderator: David Feiock (Anagram)',
        track: 'Build Whatever'
      },
      {
        title: 'Native intelligence through compute-specific networks',
        time: '16:00 PM - 16:20 PM',
        speakers: 'Matthew Wang - Valence',
        track: 'Build Whatever'
      },
      {
        title: 'Solana Throughput and Bitcoin Security: Can we have both?',
        time: '16:20 PM - 16:40 PM',
        speakers: 'Shane Vitarana - Stargaze',
        track: 'Build Whatever'
      },
      {
        title: 'Panel: Sloths and Lazy Chain',
        time: '16:40 PM - 17:20 PM',
        speakers: 'Panelists: Zaki Manian, Paco, Gjermund Garaba, Peyman Momeni, Moderator: Nick White',
        track: 'Build Whatever'
      },
      {
        title: 'MilkyWay: Modular Staking Hub',
        time: '17:20 PM - 17:40 PM',
        speakers: 'JayB - Milkyway',
        track: 'Build Whatever'
      },
      {
        title: 'Ritual Talk',
        time: '17:40 PM - 18:00 PM',
        speakers: 'Niraj Pant - Ritual',
        track: 'Build Whatever'
      },
      {
        title: 'Happy Hour by Signature Ventures',
        time: '19:00 PM - 21:00 PM',
        speakers: '',
        track: 'Break'
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
        track: 'Break'
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
      {
        title: 'Happy Hour by Signature Ventures',
        time: '19:00 PM - 21:00 PM',
        speakers: '',
        track: 'Break'
      },

    ],
    'Palette Stage': [
      {
        title: 'Building with the Astria Stack',
        time: '11:15 AM - 12:00 PM',
        speakers: 'Jordan Oroshiba - Astria',
        track: 'Workshops'
      },
      {
        title: 'Securing Rollup Interoperability with Restaking',
        time: '12:15 PM - 13:00 PM',
        speakers: 'Yorke Rhodes - Hyperlane',
        track: 'Workshops'
      },
      {
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Break'
      },
      {
        title: '10 Minute Interwoven Rollup with Initia and NewMetric',
        time: '14:00 PM - 14:45 PM',
        speakers: 'Harvey and Jesse',
        track: 'Workshops'
      },
      {
        title: 'Manta Never Stops',
        time: '15:00 PM - 15:45 PM',
        speakers: 'Kenny Li',
        track: 'Workshops'
      },
      {
        title: 'Modular Protocol Development for Modular Networks using Modular LocalNet Components',
        time: '16:00 PM - 16:45 PM',
        speakers: 'Daniel Olshansky - POKT Network',
        track: 'Workshops'
      },
      {
        title: 'Writing Secure Smart Contracts on Move VM with Formal Verification',
        time: '17:00 PM - 17:45 PM',
        speakers: 'Pratham Prasoon - Movement Labs',
        track: 'Workshops'
      },
      {
        title: 'Happy Hour by Signature Ventures',
        time: '19:00 PM - 21:00 PM',
        speakers: '',
        track: 'Break'
      },

    ]
  },
  2: {
    'Chisel Stage': [
      {
        title: 'Flashbots Track',
        time: '09:00 AM - 19:00 PM',
        speakers: 'Coming Soon',
        track: 'Flashbots Track'
      },
    ],
    'Canvas Stage': [
      {
        title: 'The Broken Record: a Framework of Music and Power',
        time: '10:00 AM - 10:20 AM',
        speakers: 'Laura Jaramillo - Sonu',
        track: 'Onchain Culture'
      },
      {
        title: 'Panel: Creator Tooling in the Modular Era',
        time: '10:20 AM - 11:00 AM',
        speakers: 'Panelists: Jana Bertram (RARI Foundation), Shane Vitarana (Stargaze), Berny (Pixel Wizards), Moderator: Achilleas Sarantaris (Celestia Labs)',
        track: 'Onchain Culture'
      },
      {
        title: 'Lens Fireside Chat',
        time: '11:00 AM - 11:40 AM',
        speakers: 'Laura Shin, Stani Kulechov',
        track: 'Onchain Culture'
      },
      {
        title: 'Tools for scaling conspiracies',
        time: '11:40 PM - 12:00 PM',
        speakers: 'Baz - Tonk',
        track: 'Onchain Culture'
      },
      {
        title: 'The Recipe',
        time: '12:00 PM - 12:20 PM',
        speakers: 'Alexander Mangel - Manada',
        track: 'Onchain Culture'
      },
      {
        title: 'From Artworks -> Artchains',
        time: '12:20 PM - 12:40 PM',
        speakers: 'Achilleas Sarantaris - Celestia Labs',
        track: 'Onchain Culture'
      },
      {
        title: 'Transforming the anime industry with AnimeChain',
        time: '12:40 PM - 13:00 PM',
        speakers: 'Liz Yang - Animechain',
        track: 'Onchain Culture'
      },
      {
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Break'
      },
      {
        title: 'Panel: Forma: the first sovereign artchain',
        time: '14:00 PM - 14:40 PM',
        speakers: 'Panelists: Sam Hart (Skip), Jordan Oroshiba (Astria), Nosleepjon (Hyperlane), Moderator: Achilleas Sarantaris (Celestia Labs)',
        track: 'Onchain Culture'
      },
      {
        title: 'Building Fully On-Chain Gaming for the Masses',
        time: '14:40 PM - 15:00 PM',
        speakers: 'Daniel - Evolute',
        track: 'Onchain Culture'
      },
      {
        title: 'Beating the Speed of Light: How Geolocalized Sharded Rollups Redefine the Future of Onchain Compute',
        time: '15:00 PM - 15:20 PM',
        speakers: 'Scott Sunarto - Argus',
        track: 'Onchain Culture'
      },
      {
        title: 'Building Compelling Composable Games',
        time: '15:20 PM - 15:40 PM',
        speakers: 'Rich | awtnmy - Archetypal Tech',
        track: 'Onchain Culture'
      },
      {
        title: 'Think Outside the Block',
        time: '15:40 PM - 16:00 PM',
        speakers: 'Tarrence - Cartridge',
        track: 'Onchain Culture'
      },
      {
        title: 'Minimum Viable Game Chain Validium',
        time: '16:00 PM - 16:20 PM',
        speakers: 'Billy Rennekamp - Trifle Labs',
        track: 'Onchain Culture'
      },

      {
        title: 'Zero Friction, happy users, happy chain — What if everyone could use the chain?',
        time: '16:20 PM - 16:40 PM',
        speakers: 'Norswap - HappyChain',
        track: 'Onchain Culture'
      },
      {
        title: 'Panel: Autonomous worlds and bespoke execution environments',
        time: '16:40 PM - 17:20 PM',
        speakers: 'Panelists: Norswap (HappyChain), Tarrence (Cartridge), Scott Sunarto (Argus Labs), Billy Rennekamp (Trifle Labs), Moderator: Bram van Roelen (Maven 11)',
        track: 'Onchain Culture'
      },
      {
        title: 'Creating a Decentralized Autonomous Artist',
        time: '17:20 PM - 17:40 PM',
        speakers: 'Simon Hudson - Botto',
        track: 'Onchain Culture'
      },
      {
        title: 'Happy Hour by Everclear',
        time: '19:00 PM - 21:00 PM',
        speakers: '',
        track: 'Break'
      },
    ],
    'Pencil Stage': [
      {
        title: 'Flashbots Whiteboarding Sessions',
        time: '10:00 AM - 18:00 PM',
        speakers: '',
        track: 'Whiteboarding Sessions'
      }
    ],
    'Palette Stage': [
      {
        title: 'NextGen dApps: building with RISC-V',
        time: '10:00 AM - 10:45 AM',
        speakers: 'Gabriel Barros & João Garcia - Cartesi',
        track: 'Workshops'
      },
      {
        title: 'LSTs for the Modular Stack',
        time: '11:00 AM - 11:45 AM',
        speakers: 'Mitya Argunov & Kai Tiurin - Drop Protocol',
        track: 'Workshops'
      },
      {
        title: 'Build a Connected Sovereign Rollup with Union Inbetween',
        time: '12:00 PM - 12:45 PM',
        speakers: 'Ben - Union',
        track: 'Workshops'
      },
      {
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Break'
      },
      {
        title: 'Native MACI-enabled Quadratic Funding for Celestia',
        time: '15:00 PM - 15:45 PM',
        speakers: 'Brian Breslow - Dorahacks',
        track: 'Workshops'
      },
      {
        title: 'Summoning Blobstream',
        time: '16:00 PM - 16:45 PM',
        speakers: 'Hector Roussille - Node Guardians',
        track: 'Workshops'
      },
      {
        title: 'Navigating the Celestia Network: Validating Apps and Direct Interactions via Celenium',
        time: '17:00 PM - 17:45 PM',
        speakers: 'Lavysh Alexander - PK Labs',
        track: 'Workshops'
      },
      {
        title: 'Happy Hour by Everclear',
        time: '19:00 PM - 21:00 PM',
        speakers: '',
        track: 'Break'
      },

    ],
   },
  3: {
    'Chisel Stage': [
	 {
	    title: 'Why Developers are building Modular, not Monolithic.',
	    time: '10:00 AM - 10:20 AM',
	    speakers: 'Mads Mathiessen - Maven 11',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Modular Anonymous Networking with Nym: Defeat AI surveillance with noise!',
	    time: '10:20 AM - 10:40 AM',
	    speakers: 'Harry Halpin - Nym Technologies',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Appliquations',
	    time: '10:40 AM - 11:00 AM',
	    speakers: 'Ethan Buchman - Informal Systems',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Sovereignty is all you need',
	    time: '11:00 AM - 11:20 AM',
	    speakers: 'Nick White - Celestia Labs',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Sovereignists vs. Globalists',
	    time: '11:20 AM - 11:40 AM',
	    speakers: 'Adrian Brink - Anoma',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Panel: EVM vs SVM vs ARM vs Blended',
	    time: '11:40 AM - 12:20 PM',
	    speakers: 'Panelists: Keone Hon (Monad), Eugene Chen (Elipsis), DinoEggs (Fluent), Chris Goes (Anoma) Moderator: Rex Kirshner (Blockworks)',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Modular Expansion: Don\'t Buy the Hype',
	    time: '12:20 PM - 12:40 PM',
	    speakers: 'Jon Kol - Hyperlane',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Rebuilding Rollups',
	    time: '12:40 PM - 13:00 PM',
	    speakers: 'Zon - Initia',
	    track: 'Modular Expansion'
	  },
{
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Break'
      },
	  {
	    title: 'Hyperbitcoinization Through Modularity',
	    time: '14:00 PM - 14:20 PM',
	    speakers: 'Orkun Kilic - Citrea',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Bitcoin Going Modular',
	    time: '14:20 PM - 14:40 PM',
	    speakers: 'Eric Wall - Taproot Wizards',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Panel: Bitcoin goes modular',
	    time: '14:40 PM - 15:20 PM',
	    speakers: 'Panelists: Orkun Kilic (Citrea), Cem Ozer (Sovereign Labs), Rena Shah (Trust Machines), Connor O\'Hara (Celestia Labs) Moderator: Andy (The Rollup)',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'MagicBlock Engine: Ephemeral Rollups for real-time onchain games on Solana',
	    time: '15:20 PM - 15:40 PM',
	    speakers: 'Andrea Fortugno - MagicBlock',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'You only need one rollup',
	    time: '15:40 PM - 16:00 PM',
	    speakers: 'Terry - Eclipse',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Panel: Is Solana going modular?',
	    time: '16:00 PM - 16:40 PM',
	    speakers: 'Panelists: Andrea Fortugno (MagicBlock Labs), Vijay Chetty (Eclipse), Anil Kumar (Rome Protocol), Swen Schaeferjohann (Light Protocol) Moderator: Mert (Helius)',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'EigenLayer: The Open Verifiable Cloud',
	    time: '16:40 PM - 17:00 PM',
	    speakers: 'Vyas Krishnan - EigenLayer',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Shared security is a psyop',
	    time: '17:00 PM - 17:20 PM',
	    speakers: 'Toghrul Maharramov - Scroll',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Panel: Is economic security a meme?',
	    time: '17:20 PM - 18:00 PM',
	    speakers: 'Panelists: Misha Putiatin (Symbiotic), Vyas Krishnan (Eigen Labs), Sunny Aggarwal (Osmosis) Moderator: Toghrul Maharramov (Scroll)',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Modular Security: Enabling custom mechanisms for decentralization with Symbiotic',
	    time: '18:00 PM - 18:20 PM',
	    speakers: 'Misha Putiatin - Symbiotic',
	    track: 'Modular Expansion'
	  },
	  {
	    title: 'Modular Roast',
	    time: '18:20 PM - 19:00 PM',
	    speakers: 'Panelists: Mert (Helius), Ansem (Bullpen), Mustafa Al-Bassam (Celestia Labs), Nick White (Celestia Labs) Moderator: Mike Ippolito (Blockworks)',
	    track: 'Modular Expansion'
	  },
      {
        title: 'Happy Hour & Closing Party by Hashflow',
        time: '19:00 PM - 02:00 AM',
        speakers: '',
        track: 'Break'
      },

	],
    'Canvas Stage': [
          {
	    title: 'The Bridge Endgame: Liquidity for Infinity Chains',
	    time: '10:00 AM - 10:20 AM',
	    speakers: 'Jim Chang - Catalyst',
	    track: 'Chain Abstraction'
	  },
	  {
	    title: 'Everclear: The First Clearing Layer',
	    time: '10:20 AM - 10:40 AM',
	    speakers: 'Arjun Bhuptani - Everclear',
	    track: 'Chain Abstraction'
	  },
	  {
	    title: 'Panel: Chain Abstraction and the Modular Mullet',
	    time: '10:40 AM - 11:20 AM',
	    speakers: 'Panelists: Chris Goes (Anoma), Karel Kubat (Union), Philipp Zentner (LiFi), Rishabh Khurana (Socket), Stan L (Initia) Moderator: Juri (Signature Ventures)',
	    track: 'Chain Abstraction'
	  },
	  {
	    title: 'Chain Abstraction: Chewing Glass to a better blockchain ecosystem',
	    time: '11:20 AM - 11:40 AM',
	    speakers: 'Zaki Manian - Iqlusion',
	    track: 'Chain Abstraction'
	  },
	  {
	    title: 'Smart Accounts and the UX Revolution',
	    time: '11:40 AM - 12:00 PM',
	    speakers: 'Sunny Aggarwal - Osmosis',
	    track: 'Chain Abstraction'
	  },
	  {
	    title: 'Skip Talk',
	    time: '12:00 PM - 12:20 PM',
	    speakers: 'Barry Plunkett - Skip',
	    track: 'Chain Abstraction'
	  },
	  {
	    title: 'Solving Interoperability with Cross-Chain Intents',
	    time: '12:20 PM - 12:40 PM',
	    speakers: 'Hart Lambur - Across',
	    track: 'Chain Abstraction'
	  },
	  {
	    title: 'The Network Layer for Interoperability',
	    time: '12:40 PM - 13:00 PM',
	    speakers: 'Bo Du - Polymer',
	    track: 'Chain Abstraction'
	  },
     {
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Break'
      },

	  {
	    title: 'Introduction',
	    time: '14:00 PM - 14:10 PM',
	    speakers: 'Anna Rose',
	    track: 'ZK'
	  },
	  {
	    title: 'Scaling Between the Layers: Unlocking Boundless Compute and the Next Generation of Verifiable Applications',
	    time: '14:10 PM - 14:30 PM',
	    speakers: 'Brett Carter',
	    track: 'ZK'
	  },
	  {
	    title: 'Fast Sync Light Clients',
	    time: '14:30 PM - 14:50 PM',
	    speakers: 'Connor O\'Hara',
	    track: 'ZK'
	  },
	  {
	    title: 'Giving a Verifiable Database to Every Smart Contract',
	    time: '14:50 PM - 15:10 PM',
	    speakers: 'Ismael Hishon-Rezaizadeh',
	    track: 'ZK'
	  },
	  {
	    title: 'NEBRA UPA: ZK Broadband Unlocks Scaling, Privacy and Interoperability',
	    time: '15:10 PM - 15:30 PM',
	    speakers: 'Shumo Chu',
	    track: 'ZK'
	  },
	  {
	    title: 'Panel: Shielded Assets in the Modular Stack',
	    time: '15:30 PM - 16:10 PM',
	    speakers: 'Panelists: Adrian Brink (Anoma), Henry (Penumbra) Moderator: Connor (Celestia Labs)',
	    track: 'ZK'
	  },
	  {
	    title: 'Break',
	    time: '16:10 PM - 16:20 PM',
	    speakers: '',
	    track: 'ZK'
	  },
	  {
	    title: 'One proof to rule them all: Mina’s Proof of Everything',
	    time: '16:20 PM - 16:40 PM',
	    speakers: 'Brandon Kase',
	    track: 'ZK'
	  },
	  {
	    title: 'Signal vs Noise: Why AI broke the internet and how cryptography is going to fix it',
	    time: '16:40 PM - 17:00 PM',
	    speakers: 'Tracy',
	    track: 'ZK'
	  },
	  {
	    title: 'ZK Accounts',
	    time: '17:00 PM - 17:20 PM',
	    speakers: 'Nashqueue',
	    track: 'ZK'
	  },
	  {
	    title: 'Panel: ZK Applications',
	    time: '17:20 PM - 18:00 PM',
	    speakers: 'Panelists: Aayush (ZK Email), Florent (Proof of Passport), Tracy (Pluto) Moderator: Anna Rose',
	    track: 'ZK'
	  },
      {
        title: 'Happy Hour & Closing Party by Hashflow',
        time: '19:00 PM - 02:00 AM',
        speakers: '',
        track: 'Break'
      },

    ],
    'Pencil Stage': [
    {
    title: 'Penumbra',
    time: '10:00 AM - 10:50 AM',
    speakers: 'Henry de Valence',
    track: 'Whiteboarding Sessions'
  },
  {
    title: 'Fast Blocks Slow Squares (FBSS)',
    time: '11:00 AM - 11:50 AM',
    speakers: 'Nashqueue',
    track: 'Whiteboarding Sessions'
  },
  {
    title: 'Anoma: Good intentions only',
    time: '12:00 PM - 12:50 PM',
    speakers: 'Chris Goes',
    track: 'Whiteboarding Sessions'
  },
{
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Break'
      },

  {
    title: 'Light Protocol: ZK compression on Solana',
    time: '14:00 PM - 14:50 PM',
    speakers: 'Swen',
    track: 'Whiteboarding Sessions'
  },
  {
    title: 'Based Rollups and Fork Choice Rules',
    time: '15:00 PM - 15:50 PM',
    speakers: 'Evan Forbes & Callum Waters',
    track: 'Whiteboarding Sessions'
  },
  {
    title: 'An Essential Guide to Declarative Blockchains',
    time: '16:00 PM - 16:50 PM',
    speakers: 'Bikem Bengisu and Simon Roberts',
    track: 'Whiteboarding Sessions'
  },
  {
    title: 'Scaling DA sampling with Shwap',
    time: '17:00 PM - 17:50 PM',
    speakers: 'Wondertan and Vlad Krinitsin',
    track: 'Whiteboarding Sessions'
  },
{
        title: 'Happy Hour & Closing Party by Hashflow',
        time: '19:00 PM - 02:00 AM',
        speakers: '',
        track: 'Break'
      },

    ],
    'Palette Stage': [
	    {
    title: 'Rollkit: Building Sovereign Rollups with Rollkit',
    time: '10:00 AM - 10:45 AM',
    speakers: 'Manav Aggarwal',
    track: 'Workshops'
  },
  {
    title: 'Morph: Decentralized Sequencers vs Centralized Sequencers: Everything about Sequencers in Layer 2s',
    time: '11:00 AM - 11:45 AM',
    speakers: 'Abril Zucchi',
    track: 'Workshops'
  },
  {
    title: 'Celestia Workshop: Arbitrum Rollups on Celestia',
    time: '12:00 PM - 12:45 PM',
    speakers: 'Diego Ferrer',
    track: 'Workshops'
  },
{
        title: 'Lunch Break',
        time: '13:00 PM - 14:00 PM',
        speakers: '',
        track: 'Break'
      },

  {
    title: 'Celestia Workshop: How to Build Whatever',
    time: '14:00 PM - 14:45 PM',
    speakers: 'Josh Stein',
    track: 'Workshops'
  },
  {
    title: 'WITNESS Protocol: Using Verifiable Data Structures to Scale Onchain Verifiability',
    time: '15:00 PM - 15:45 PM',
    speakers: 'Joe Coll',
    track: 'Workshops'
  },
{
        title: 'Happy Hour & Closing Party by Hashflow',
        time: '19:00 PM - 02:00 AM',
        speakers: '',
        track: 'Break'
      },
    ],
  }
}

export const dayDescriptions: { [key: number]: string } = {
  1: 'Day 1 explores the state of the modular stack and how new ideas around intents, shared sequencers, and ZK are bound to shape it.',
  2: 'Day 2 dives into gaming, modular cosmos, and PBS day (co-created with Flashbots).',
  3: 'Day 3 focuses on the future of blockchain technology, including sustainability, regulation, and real-world applications.'
}

export const videoStreamingConfig: DayStreamingConfig = {
  1: {
    'Chisel Stage': {
      youtubeLink: 'https://youtu.be/uBbykZgatuw'
    },
    'Canvas Stage': {
      youtubeLink: 'https://youtu.be/IvgfL_q2jdI'
    }
  },
  2: {
    'Chisel Stage': {
      youtubeLink: 'https://youtu.be/HqJ5oicJOME'
    },
    'Canvas Stage': {
      youtubeLink: 'https://youtu.be/EJi2i-WqaT0'
    }
  },
  3: {
    'Chisel Stage': {
      youtubeLink: 'https://youtu.be/ZZ9eABdKlWI'
    },
    'Canvas Stage': {
      youtubeLink: 'https://youtu.be/tfxqL1KQ4cU'
    }
  }
}

export const tracks: { [key: string]: { bg: string; text: string } } = {
  'Data Availability': { bg: '#77BFF7', text: '#77BFF7' },
  'Build Whatever': { bg: '#77BFF7', text: '#77BFF7' },
  'Execution': { bg: '#BBC04C', text: '#BBC04C' },
  'Onchain Culture': { bg: '#BBC04C', text: '#BBC04C' },
  'Break': { bg: '#E5C300', text: '#E5C300' },
  'ZK': { bg: '#EC9455', text: '#EC9455' },
  'Modular Expansion': { bg: '#EC9455', text: '#EC9455' },
  'Chain Abstraction': { bg: '#77BFF7', text: '#77BFF7' },
  'Salon Talks': { bg: '#77BFF7', text: '#77BFF7' },
  'Whiteboarding Sessions': { bg: '#BBC04C', text: '#BBC04C' },
  'Workshops': { bg: '#BBC04C', text: '#BBC04C' },
}

export const pageData: AgendaPageData = {
  AgendaSection: {
    title: 'Agenda',
    tickets: 'https://www.eventbrite.be/e/modular-summit-30-tickets-920846766467'
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
