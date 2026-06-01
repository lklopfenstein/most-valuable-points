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
    id: "alaska",
    name: "Alaska Airlines Mileage Plan",
    milesPerPoint: 0.23,
    previousMilesPerPoint: 0.23,
    cpp: 1.8,
    primaryHub: "SEA",
    primaryRegion: "NA",
    bookingUrl: "https://www.alaskaair.com",
    explanation: "Excellent distance-based partner award chart.",
    transferPartners: [
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "HND",
        region: "AS",
        desc: "Tokyo (Sweet Spot)"
      },
      maxDistance: {
        iata: "SYD",
        region: "OC",
        desc: "Sydney (Max Distance)"
      }
    }
  },
  {
    id: "iberia",
    name: "Iberia Plus",
    milesPerPoint: 0.22,
    previousMilesPerPoint: 0.22,
    cpp: 1.6,
    primaryHub: "MAD",
    primaryRegion: "EU",
    bookingUrl: "https://www.iberia.com",
    explanation: "Outstanding off-peak pricing on Avios.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "ORD",
        region: "NA",
        desc: "Chicago (Sweet Spot)"
      },
      maxDistance: {
        iata: "EZE",
        region: "SA",
        desc: "Buenos Aires (Max Distance)"
      }
    }
  },
  {
    id: "flyingblue",
    name: "Air France/KLM Flying Blue",
    milesPerPoint: 0.2,
    previousMilesPerPoint: 0.19,
    cpp: 1.5,
    primaryHub: "CDG",
    primaryRegion: "EU",
    bookingUrl: "https://www.flyingblue.us",
    explanation: "Promo Rewards offer consistent value.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "JFK",
        region: "NA",
        desc: "New York (Promo Reward)"
      },
      maxDistance: {
        iata: "NRT",
        region: "AS",
        desc: "Tokyo (Max Distance)"
      }
    }
  },
  {
    id: "turkish",
    name: "Turkish Miles&Smiles",
    milesPerPoint: 0.19,
    previousMilesPerPoint: 0.19,
    cpp: 1.8,
    primaryHub: "IST",
    primaryRegion: "EU",
    bookingUrl: "https://www.turkishairlines.com",
    explanation: "Great Star Alliance partner sweet spots.",
    transferPartners: [
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "HNL",
        region: "NA",
        desc: "Hawaii (Sweet Spot)"
      },
      maxDistance: {
        iata: "CPT",
        region: "AF",
        desc: "Cape Town (Max Distance)"
      }
    }
  },
  {
    id: "virgin",
    name: "Virgin Atlantic Flying Club",
    milesPerPoint: 0.18,
    previousMilesPerPoint: 0.17,
    cpp: 1.4,
    primaryHub: "LHR",
    primaryRegion: "EU",
    bookingUrl: "https://flywith.virginatlantic.com",
    explanation: "Great for Delta non-stop flights.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "JFK",
        region: "NA",
        desc: "New York (Sweet Spot)"
      },
      maxDistance: {
        iata: "HND",
        region: "AS",
        desc: "Tokyo (Max Distance)"
      }
    }
  },
  {
    id: "avios-ba",
    name: "British Airways Executive Club",
    milesPerPoint: 0.17,
    previousMilesPerPoint: 0.17,
    cpp: 1.3,
    primaryHub: "LHR",
    primaryRegion: "EU",
    bookingUrl: "https://www.britishairways.com",
    explanation: "Distance-based chart is perfect for short-hauls.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "JFK",
        region: "NA",
        desc: "New York (Sweet Spot)"
      },
      maxDistance: {
        iata: "SIN",
        region: "AS",
        desc: "Singapore (Max Distance)"
      }
    }
  },
  {
    id: "ana",
    name: "ANA Mileage Club",
    milesPerPoint: 0.16,
    previousMilesPerPoint: 0.16,
    cpp: 1.8,
    primaryHub: "HND",
    primaryRegion: "AS",
    bookingUrl: "https://www.ana.co.jp",
    explanation: "Amazing value but fuel surcharges apply.",
    transferPartners: [
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "LAX",
        region: "NA",
        desc: "Los Angeles (Sweet Spot)"
      },
      maxDistance: {
        iata: "LHR",
        region: "EU",
        desc: "London (Max Distance)"
      }
    }
  },
  {
    id: "aeroplan",
    name: "Air Canada Aeroplan",
    milesPerPoint: 0.15,
    previousMilesPerPoint: 0.15,
    cpp: 1.7,
    primaryHub: "YYZ",
    primaryRegion: "NA",
    bookingUrl: "https://www.aircanada.com",
    explanation: "No carrier surcharges on massive partner network.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "FRA",
        region: "EU",
        desc: "Frankfurt (Sweet Spot)"
      },
      maxDistance: {
        iata: "SYD",
        region: "OC",
        desc: "Sydney (Max Distance)"
      }
    }
  },
  {
    id: "lifemiles",
    name: "Avianca LifeMiles",
    milesPerPoint: 0.14,
    previousMilesPerPoint: 0.14,
    cpp: 1.6,
    primaryHub: "BOG",
    primaryRegion: "SA",
    bookingUrl: "https://www.lifemiles.com",
    explanation: "Quirky routing rules but cheap Star Alliance awards.",
    transferPartners: [
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "LIS",
        region: "EU",
        desc: "Lisbon (Sweet Spot)"
      },
      maxDistance: {
        iata: "HND",
        region: "AS",
        desc: "Tokyo (Max Distance)"
      }
    }
  },
  {
    id: "krisflyer",
    name: "Singapore Airlines KrisFlyer",
    milesPerPoint: 0.13,
    previousMilesPerPoint: 0.13,
    cpp: 1.5,
    primaryHub: "SIN",
    primaryRegion: "AS",
    bookingUrl: "https://www.singaporeair.com",
    explanation: "Great premium cabin access on SQ metal.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "FRA",
        region: "EU",
        desc: "Frankfurt (Sweet Spot)"
      },
      maxDistance: {
        iata: "JFK",
        region: "NA",
        desc: "New York (Max Distance)"
      }
    }
  },
  {
    id: "qatar",
    name: "Qatar Privilege Club",
    milesPerPoint: 0.12,
    previousMilesPerPoint: 0.12,
    cpp: 1.4,
    primaryHub: "DOH",
    primaryRegion: "ME",
    bookingUrl: "https://www.qatarairways.com",
    explanation: "Shares Avios with BA and Iberia.",
    transferPartners: [
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "MLE",
        region: "AS",
        desc: "Maldives (Sweet Spot)"
      },
      maxDistance: {
        iata: "JFK",
        region: "NA",
        desc: "New York (Max Distance)"
      }
    }
  },
  {
    id: "cathay",
    name: "Cathay Pacific Asia Miles",
    milesPerPoint: 0.11,
    previousMilesPerPoint: 0.11,
    cpp: 1.3,
    primaryHub: "HKG",
    primaryRegion: "AS",
    bookingUrl: "https://www.cathaypacific.com",
    explanation: "Distance-based Oneworld chart.",
    transferPartners: [
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "LHR",
        region: "EU",
        desc: "London (Sweet Spot)"
      },
      maxDistance: {
        iata: "JFK",
        region: "NA",
        desc: "New York (Max Distance)"
      }
    }
  },
  {
    id: "hawaiian",
    name: "HawaiianMiles",
    milesPerPoint: 0.08,
    previousMilesPerPoint: 0.08,
    cpp: 1.1,
    primaryHub: "HNL",
    primaryRegion: "OC",
    bookingUrl: "https://www.hawaiianairlines.com",
    explanation: "Limited value outside of direct Hawaii routes.",
    transferPartners: [
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "LAX",
        region: "NA",
        desc: "Los Angeles (Sweet Spot)"
      },
      maxDistance: {
        iata: "JFK",
        region: "NA",
        desc: "New York (Max Distance)"
      }
    }
  },
  {
    id: "aadvantage",
    name: "American Airlines AAdvantage",
    milesPerPoint: 0.08,
    previousMilesPerPoint: 0.08,
    cpp: 1.5,
    primaryHub: "DFW",
    primaryRegion: "NA",
    bookingUrl: "https://www.aa.com",
    explanation: "Web specials often devalue standard awards.",
    transferPartners: [
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "LHR",
        region: "EU",
        desc: "London (Sweet Spot)"
      },
      maxDistance: {
        iata: "SYD",
        region: "OC",
        desc: "Sydney (Max Distance)"
      }
    }
  },
  {
    id: "jal",
    name: "Japan Airlines Mileage Bank",
    milesPerPoint: 0.07,
    previousMilesPerPoint: 0.07,
    cpp: 1.4,
    primaryHub: "NRT",
    primaryRegion: "AS",
    bookingUrl: "https://www.jal.co.jp",
    explanation: "Strict award charts limit flexibility.",
    transferPartners: [
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "SFO",
        region: "NA",
        desc: "San Francisco (Sweet Spot)"
      },
      maxDistance: {
        iata: "LHR",
        region: "EU",
        desc: "London (Max Distance)"
      }
    }
  },
  {
    id: "mileageplus",
    name: "United MileagePlus",
    milesPerPoint: 0.07,
    previousMilesPerPoint: 0.07,
    cpp: 1.2,
    primaryHub: "ORD",
    primaryRegion: "NA",
    bookingUrl: "https://www.united.com",
    explanation: "Massive recent dynamic pricing devaluations.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1.1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "FRA",
        region: "EU",
        desc: "Frankfurt (Sweet Spot)"
      },
      maxDistance: {
        iata: "SYD",
        region: "OC",
        desc: "Sydney (Max Distance)"
      }
    }
  },
  {
    id: "emirates",
    name: "Emirates Skywards",
    milesPerPoint: 0.06,
    previousMilesPerPoint: 0.06,
    cpp: 1,
    primaryHub: "DXB",
    primaryRegion: "ME",
    bookingUrl: "https://www.emirates.com",
    explanation: "High point requirements and brutal surcharges.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Bilt",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "MXP",
        region: "EU",
        desc: "Milan (Sweet Spot)"
      },
      maxDistance: {
        iata: "JFK",
        region: "NA",
        desc: "New York (Max Distance)"
      }
    }
  },
  {
    id: "etihad",
    name: "Etihad Guest",
    milesPerPoint: 0.06,
    previousMilesPerPoint: 0.06,
    cpp: 1.1,
    primaryHub: "AUH",
    primaryRegion: "ME",
    bookingUrl: "https://www.etihad.com",
    explanation: "Recent devaluations effectively killed partner sweet spots.",
    transferPartners: [
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "LHR",
        region: "EU",
        desc: "London (Sweet Spot)"
      },
      maxDistance: {
        iata: "JFK",
        region: "NA",
        desc: "New York (Max Distance)"
      }
    }
  },
  {
    id: "qantas",
    name: "Qantas Frequent Flyer",
    milesPerPoint: 0.05,
    previousMilesPerPoint: 0.05,
    cpp: 1,
    primaryHub: "SYD",
    primaryRegion: "OC",
    bookingUrl: "https://www.qantas.com",
    explanation: "Distance-based chart penalizes long routes.",
    transferPartners: [
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Citi",
        ratio: "1:1"
      },
      {
        partner: "CapitalOne",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "LAX",
        region: "NA",
        desc: "Los Angeles (Sweet Spot)"
      },
      maxDistance: {
        iata: "LHR",
        region: "EU",
        desc: "London (Max Distance)"
      }
    }
  },
  {
    id: "skymiles",
    name: "Delta SkyMiles",
    milesPerPoint: 0.05,
    previousMilesPerPoint: 0.05,
    cpp: 1.1,
    primaryHub: "ATL",
    primaryRegion: "NA",
    bookingUrl: "https://www.delta.com",
    explanation: "SkyPesos. Highly dynamic and heavily devalued.",
    transferPartners: [
      {
        partner: "Amex",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "chart",
    customDestinations: {
      sweetSpot: {
        iata: "CUN",
        region: "NA",
        desc: "Cancun (Sweet Spot)"
      },
      maxDistance: {
        iata: "SYD",
        region: "OC",
        desc: "Sydney (Max Distance)"
      }
    }
  },
  {
    id: "southwest",
    name: "Southwest Rapid Rewards",
    milesPerPoint: 0.04,
    previousMilesPerPoint: 0.04,
    cpp: 1.4,
    primaryHub: "DAL",
    primaryRegion: "NA",
    bookingUrl: "https://www.southwest.com",
    explanation: "Fixed value means any far destination requires a massive cache of points.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "revenue",
    customDestinations: {
      sweetSpot: {
        iata: "AUS",
        region: "NA",
        desc: "Austin (Sweet Spot)"
      },
      maxDistance: {
        iata: "SJO",
        region: "NA",
        desc: "Costa Rica (Max Distance)"
      }
    }
  },
  {
    id: "jetblue",
    name: "JetBlue TrueBlue",
    milesPerPoint: 0.04,
    previousMilesPerPoint: 0.04,
    cpp: 1.3,
    primaryHub: "JFK",
    primaryRegion: "NA",
    bookingUrl: "https://www.jetblue.com",
    explanation: "Revenue-based model makes long-hauls extremely expensive.",
    transferPartners: [
      {
        partner: "Chase",
        ratio: "1:1"
      },
      {
        partner: "Amex",
        ratio: "1:1.25"
      },
      {
        partner: "Citi",
        ratio: "1:1"
      }
    ],
    model: "revenue",
    customDestinations: {
      sweetSpot: {
        iata: "CUN",
        region: "NA",
        desc: "Cancun (Sweet Spot)"
      },
      maxDistance: {
        iata: "LHR",
        region: "EU",
        desc: "London (Max Distance)"
      }
    }
  },
  {
    id: "spirit",
    name: "Free Spirit",
    milesPerPoint: 0.03,
    previousMilesPerPoint: 0.03,
    cpp: 1,
    primaryHub: "FLL",
    primaryRegion: "NA",
    bookingUrl: "https://www.spirit.com",
    explanation: "Revenue-based. Low cash cost means you fly zero distance per point.",
    transferPartners: [],
    model: "revenue",
    customDestinations: {
      sweetSpot: {
        iata: "LAS",
        region: "NA",
        desc: "Las Vegas (Sweet Spot)"
      },
      maxDistance: {
        iata: "BOG",
        region: "SA",
        desc: "Bogota (Max Distance)"
      }
    }
  },
  {
    id: "frontier",
    name: "Frontier Miles",
    milesPerPoint: 0.03,
    previousMilesPerPoint: 0.03,
    cpp: 0.9,
    primaryHub: "DEN",
    primaryRegion: "NA",
    bookingUrl: "https://www.flyfrontier.com",
    explanation: "Revenue-based budget carrier. Abysmal distance per point.",
    transferPartners: [
      {
        partner: "Marriott",
        ratio: "3:1"
      }
    ],
    model: "revenue",
    customDestinations: {
      sweetSpot: {
        iata: "MCO",
        region: "NA",
        desc: "Orlando (Sweet Spot)"
      },
      maxDistance: {
        iata: "CUN",
        region: "NA",
        desc: "Cancun (Max Distance)"
      }
    }
  },
  {
    id: "allegiant",
    name: "Allegiant Allways Rewards",
    milesPerPoint: 0.02,
    previousMilesPerPoint: 0.02,
    cpp: 1,
    primaryHub: "LAS",
    primaryRegion: "NA",
    bookingUrl: "https://www.allegiantair.com",
    explanation: "Points are fixed cash equivalents. You get nowhere fast.",
    transferPartners: [],
    model: "revenue",
    customDestinations: {
      sweetSpot: {
        iata: "PIE",
        region: "NA",
        desc: "St. Pete (Sweet Spot)"
      },
      maxDistance: {
        iata: "LAS",
        region: "NA",
        desc: "Las Vegas (Max Distance)"
      }
    }
  },
  {
    id: "airasia",
    name: "AirAsia BIG Rewards",
    milesPerPoint: 0.02,
    previousMilesPerPoint: 0.02,
    cpp: 0.5,
    primaryHub: "KUL",
    primaryRegion: "AS",
    bookingUrl: "https://www.airasia.com",
    explanation: "Extreme budget carrier in Asia. Points are largely worthless.",
    transferPartners: [],
    model: "revenue",
    customDestinations: {
      sweetSpot: {
        iata: "DPS",
        region: "AS",
        desc: "Bali (Sweet Spot)"
      },
      maxDistance: {
        iata: "SYD",
        region: "OC",
        desc: "Sydney (Max Distance)"
      }
    }
  },
  {
    id: "pegasus",
    name: "Pegasus BolBol",
    milesPerPoint: 0.02,
    previousMilesPerPoint: 0.02,
    cpp: 0.6,
    primaryHub: "SAW",
    primaryRegion: "EU",
    bookingUrl: "https://www.flypgs.com",
    explanation: "Budget airline covering EU/ME. Revenue-based system.",
    transferPartners: [],
    model: "revenue",
    customDestinations: {
      sweetSpot: {
        iata: "DXB",
        region: "ME",
        desc: "Dubai (Sweet Spot)"
      },
      maxDistance: {
        iata: "LHR",
        region: "EU",
        desc: "London (Max Distance)"
      }
    }
  }
];

export const hotelsData = [
  {
    id: "accor",
    name: "Accor Live Limitless (ALL)",
    averagePoints: 6000,
    previousAveragePoints: 6000,
    cpp: 2.2,
    explanation: "Fixed value (2000 pts = €40). A standard €120 3-star room is only 6,000 points. Massive value here.",
    transferPartners: [
      { partner: "CapitalOne", ratio: "2:1" }
    ],
    redemptionExamples: [
      { title: "Mercure Paris Centre Tour Eiffel", cost: "8,000 pts", link: "https://all.accor.com" }
    ]
  },
  {
    id: "lhw",
    name: "Leading Hotels of the World",
    averagePoints: 10000,
    previousAveragePoints: 10000,
    cpp: 3.5,
    explanation: "Points are hard to earn, but redemptions start as low as 4,000 pts for incredibly luxurious 5-star properties.",
    transferPartners: [
      { partner: "Citi", ratio: "1000:200" } 
    ],
    redemptionExamples: [
      { title: "The Ritz London", cost: "14,000 pts", link: "https://www.lhw.com" }
    ]
  },
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
    id: "redroof",
    name: "RediRewards",
    averagePoints: 14000,
    previousAveragePoints: 14000,
    cpp: 0.5,
    explanation: "Red Roof Inns are cheap, but strictly budget (1-2 star). Points stretch far if you don't mind the quality.",
    transferPartners: [],
    redemptionExamples: [
      { title: "Red Roof PLUS+ Chicago", cost: "14,000 pts", link: "https://www.redroof.com" }
    ]
  },
  {
    id: "motel6",
    name: "My6",
    averagePoints: 10000,
    previousAveragePoints: 10000,
    cpp: 0.5,
    explanation: "Extreme budget. You get what you pay for.",
    transferPartners: [],
    redemptionExamples: [
      { title: "Motel 6 Los Angeles", cost: "10,000 pts", link: "https://www.motel6.com" }
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
    id: "sonesta",
    name: "Sonesta Travel Pass",
    averagePoints: 22000,
    previousAveragePoints: 22000,
    cpp: 0.7,
    explanation: "Most 3+ star properties sit firmly in the 20,000 - 30,000 point tier.",
    transferPartners: [],
    redemptionExamples: [
      { title: "The Royal Sonesta New Orleans", cost: "25,000 pts", link: "https://www.sonesta.com" }
    ]
  },
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
