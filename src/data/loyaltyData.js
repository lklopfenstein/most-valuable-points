export const transferPartnersMeta = {
  Chase: { name: "Chase Ultimate Rewards", color: "#117aca", abbr: "UR" },
  Amex: { name: "Amex Membership Rewards", color: "#006fcf", abbr: "MR" },
  Citi: { name: "Citi ThankYou", color: "#004B8D", abbr: "TY" },
  CapitalOne: { name: "Capital One Miles", color: "#d62728", abbr: "C1" },
  Bilt: { name: "Bilt Rewards", color: "#000000", abbr: "Bilt" },
  Marriott: { name: "Marriott Bonvoy", color: "#b93f12", abbr: "Bonvoy" }
};

export const airlinesData = [
  {
    id: "iberia",
    name: "Iberia Plus",
    milesPerPoint: 0.22,
    previousMilesPerPoint: 0.22,
    cpp: 1.6,
    typicalRtCost: 34000,
    explanation: "Outstanding off-peak pricing. 34,000 Avios can get you a round-trip from East Coast US to Madrid.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "NY (JFK) to Madrid (MAD) Economy (RT)", cost: "34,000 pts", link: "https://www.iberia.com" }
    ]
  },
  {
    id: "flyingblue",
    name: "Air France/KLM Flying Blue",
    milesPerPoint: 0.20,
    previousMilesPerPoint: 0.19,
    cpp: 1.5,
    typicalRtCost: 30000,
    explanation: "Promo Rewards frequently drop US-Europe round-trips to 30,000 points.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "Chicago (ORD) to Paris (CDG) Economy (RT)", cost: "30,000 pts", link: "https://www.flyingblue.us" }
    ]
  },
  {
    id: "turkish",
    name: "Turkish Miles&Smiles",
    milesPerPoint: 0.19,
    previousMilesPerPoint: 0.19,
    cpp: 1.8,
    typicalRtCost: 20000,
    explanation: "Incredible sweet spots for domestic US flights on United, like 20k RT coast-to-coast.",
    transferPartners: [
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "NY (EWR) to Honolulu (HNL) Economy (RT)", cost: "30,000 pts", link: "https://www.turkishairlines.com" },
      { title: "LAX to EWR Economy (RT)", cost: "20,000 pts", link: "https://www.turkishairlines.com" }
    ]
  },
  {
    id: "virgin",
    name: "Virgin Atlantic Flying Club",
    milesPerPoint: 0.18,
    previousMilesPerPoint: 0.17,
    cpp: 1.4,
    typicalRtCost: 30000,
    explanation: "Great for non-stop Delta flights like US to Europe for 30k RT.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "JFK to London (LHR) Economy (RT)", cost: "20,000 pts", link: "https://flywith.virginatlantic.com" }
    ]
  },
  {
    id: "avios-ba",
    name: "British Airways Executive Club",
    milesPerPoint: 0.17,
    previousMilesPerPoint: 0.17,
    cpp: 1.3,
    typicalRtCost: 26000,
    explanation: "Distance-based chart is perfect for West Coast to Hawaii for 26k RT.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "LAX to Maui (OGG) Economy (RT)", cost: "26,000 pts", link: "https://www.britishairways.com" }
    ]
  },
  {
    id: "ana",
    name: "ANA Mileage Club",
    milesPerPoint: 0.16,
    previousMilesPerPoint: 0.16,
    cpp: 1.8,
    typicalRtCost: 40000,
    explanation: "Regular economy RT to Japan from the West Coast is exactly 40k in low season.",
    transferPartners: [
      { partner: "Amex", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "Seattle (SEA) to Tokyo (HND) Economy (RT)", cost: "40,000 pts", link: "https://www.ana.co.jp" }
    ]
  },
  {
    id: "aeroplan",
    name: "Air Canada Aeroplan",
    milesPerPoint: 0.15,
    previousMilesPerPoint: 0.15,
    cpp: 1.7,
    typicalRtCost: 25000,
    explanation: "Short to medium haul flights within North America offer solid value without surcharges.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "Chicago (ORD) to Vancouver (YVR) Economy (RT)", cost: "25,000 pts", link: "https://www.aircanada.com" }
    ]
  },
  {
    id: "lifemiles",
    name: "Avianca LifeMiles",
    milesPerPoint: 0.14,
    previousMilesPerPoint: 0.14,
    cpp: 1.6,
    typicalRtCost: 27000,
    explanation: "Coast to coast on United metal for 27k RT.",
    transferPartners: [
      { partner: "Amex", ratio: "1:1" },
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "NY (EWR) to San Francisco (SFO) Economy (RT)", cost: "27,000 pts", link: "https://www.lifemiles.com" }
    ]
  },
  {
    id: "krisflyer",
    name: "Singapore Airlines KrisFlyer",
    milesPerPoint: 0.13,
    previousMilesPerPoint: 0.13,
    cpp: 1.5,
    typicalRtCost: 35000,
    explanation: "Good for mainland US to Hawaii on United for 35k RT.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "Houston (IAH) to Honolulu (HNL) Economy (RT)", cost: "35,000 pts", link: "https://www.singaporeair.com" }
    ]
  },
  {
    id: "qatar",
    name: "Qatar Privilege Club",
    milesPerPoint: 0.12,
    previousMilesPerPoint: 0.12,
    cpp: 1.4,
    typicalRtCost: 35000,
    explanation: "Shares Avios with BA, offering similar great value on Oneworld partners.",
    transferPartners: [
      { partner: "Citi", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "Miami (MIA) to Lima (LIM) Economy (RT)", cost: "35,000 pts", link: "https://www.qatarairways.com" }
    ]
  },
  {
    id: "cathay",
    name: "Cathay Pacific Asia Miles",
    milesPerPoint: 0.11,
    previousMilesPerPoint: 0.11,
    cpp: 1.3,
    typicalRtCost: 40000,
    explanation: "Distance based. NY to London on partner AA just hits the 40k mark.",
    transferPartners: [
      { partner: "Amex", ratio: "1:1" },
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "JFK to London (LHR) Economy (RT)", cost: "40,000 pts", link: "https://www.cathaypacific.com" }
    ]
  },
  // --- TOO FREAKIN EXPENSIVE AIRLINES ---
  {
    id: "aadvantage",
    name: "American Airlines AAdvantage",
    milesPerPoint: 0.08,
    previousMilesPerPoint: 0.08,
    cpp: 1.5,
    typicalRtCost: 45000,
    explanation: "Most decent non-drivable long hauls easily top 40k RT due to web specials replacing saver awards.",
    transferPartners: [
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "US to Europe Economy (RT)", cost: "45,000+ pts", link: "https://www.aa.com" }
    ]
  },
  {
    id: "mileageplus",
    name: "United MileagePlus",
    milesPerPoint: 0.07,
    previousMilesPerPoint: 0.07,
    cpp: 1.2,
    typicalRtCost: 55000,
    explanation: "Dynamic pricing means almost all non-drivable long hauls are >40k.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1.1" }
    ],
    redemptionExamples: [
      { title: "Chicago (ORD) to Rome (FCO) Economy (RT)", cost: "60,000+ pts", link: "https://www.united.com" }
    ]
  },
  {
    id: "skymiles",
    name: "Delta SkyMiles",
    milesPerPoint: 0.05,
    previousMilesPerPoint: 0.05,
    cpp: 1.1,
    typicalRtCost: 70000,
    explanation: "SkyMiles are heavily devalued. Any significant distance exceeds 40k easily.",
    transferPartners: [
      { partner: "Amex", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "Atlanta (ATL) to Paris (CDG) Economy (RT)", cost: "70,000+ pts", link: "https://www.delta.com" }
    ]
  },
  {
    id: "southwest",
    name: "Southwest Rapid Rewards",
    milesPerPoint: 0.04,
    previousMilesPerPoint: 0.04,
    cpp: 1.4,
    typicalRtCost: 45000,
    explanation: "Fixed value means any far, non-drivable destination requires a massive cache of points.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ],
    redemptionExamples: [
      { title: "Dallas (DAL) to Honolulu (HNL) (RT)", cost: "45,000+ pts", link: "https://www.southwest.com" }
    ]
  },
  {
    id: "jetblue",
    name: "JetBlue TrueBlue",
    milesPerPoint: 0.04,
    previousMilesPerPoint: 0.04,
    cpp: 1.3,
    typicalRtCost: 48000,
    explanation: "Revenue-based model makes long-haul non-drivable flights consistently exceed 40k.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1.25" },
      { partner: "Citi", ratio: "1:1" }
    ],
    redemptionExamples: [
      { title: "JFK to London (LHR) Core (RT)", cost: "50,000+ pts", link: "https://www.jetblue.com" }
    ]
  }
];

export const hotelsData = [
  {
    id: "hyatt",
    name: "World of Hyatt",
    averagePoints: 12000,
    previousAveragePoints: 12000,
    cpp: 1.8,
    explanation: "Standard fixed award chart means 3+ star properties remain highly accessible well under 18k/night.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" }
    ],
    redemptionExamples: [
      { title: "Hyatt Regency Tokyo (Category 4)", cost: "15,000 pts", link: "https://www.hyatt.com" },
      { title: "Hyatt Place Waikiki Beach (Category 4)", cost: "15,000 pts", link: "https://www.hyatt.com" }
    ]
  },
  {
    id: "wyndham",
    name: "Wyndham Rewards",
    averagePoints: 15000,
    previousAveragePoints: 15000,
    cpp: 1.1,
    explanation: "Tiered chart at 7.5k, 15k, and 30k. Most decent properties fall into the 15k tier.",
    transferPartners: [
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" }
    ],
    redemptionExamples: [
      { title: "Wyndham Grand Clearwater Beach", cost: "15,000 pts", link: "https://www.wyndhamhotels.com" }
    ]
  },
  {
    id: "choice",
    name: "Choice Privileges",
    averagePoints: 16000,
    previousAveragePoints: 16000,
    cpp: 0.8,
    explanation: "Many 3-star Ascend and Cambria properties fit comfortably under the 18k limit.",
    transferPartners: [
      { partner: "Citi", ratio: "1:2" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" }
    ],
    redemptionExamples: [
      { title: "Cambria Hotel New York - Chelsea", cost: "16,000 pts", link: "https://www.choicehotels.com" }
    ]
  },
  {
    id: "bestwestern",
    name: "Best Western Rewards",
    averagePoints: 16000,
    previousAveragePoints: 16000,
    cpp: 0.6,
    explanation: "Offers solid mid-tier hotels in Europe and NA for under 18k.",
    transferPartners: [],
    redemptionExamples: [
      { title: "Best Western Plus Paris", cost: "16,000 pts", link: "https://www.bestwestern.com" }
    ]
  },
  // --- TOO FREAKIN EXPENSIVE HOTELS ---
  {
    id: "ihg",
    name: "IHG One Rewards",
    averagePoints: 28000,
    previousAveragePoints: 27000,
    cpp: 0.6,
    explanation: "Holiday Inn Express and higher properties usually start well above 20k per night.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" }
    ],
    redemptionExamples: [
      { title: "InterContinental Paris Le Grand", cost: "85,000 pts", link: "https://www.ihg.com" }
    ]
  },
  {
    id: "marriott",
    name: "Marriott Bonvoy",
    averagePoints: 35000,
    previousAveragePoints: 34000,
    cpp: 0.7,
    explanation: "Dynamic pricing pushes almost all 3+ star properties far above the 18k threshold.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" }
    ],
    redemptionExamples: [
      { title: "The Ritz-Carlton, Maui", cost: "100,000 pts", link: "https://www.marriott.com" }
    ]
  },
  {
    id: "hilton",
    name: "Hilton Honors",
    averagePoints: 45000,
    previousAveragePoints: 45000,
    cpp: 0.5,
    explanation: "Hyper-inflated point currency means 18k points gets you almost nothing.",
    transferPartners: [
      { partner: "Amex", ratio: "1:2" }
    ],
    redemptionExamples: [
      { title: "Conrad Bora Bora Nui", cost: "120,000 pts", link: "https://www.hilton.com" }
    ]
  },
  {
    id: "radisson",
    name: "Radisson Rewards",
    averagePoints: 50000,
    previousAveragePoints: 50000,
    cpp: 0.4,
    explanation: "Massive inflation on points required for any decent stay.",
    transferPartners: [],
    redemptionExamples: [
      { title: "Radisson Blu London", cost: "70,000 pts", link: "https://www.radissonhotels.com" }
    ]
  }
];
