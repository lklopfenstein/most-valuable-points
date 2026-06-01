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
    id: "ana",
    name: "ANA Mileage Club",
    milesPerPoint: 0.18,
    previousMilesPerPoint: 0.18,
    cpp: 2.8,
    explanation: "Consistently top-tier for extreme distance per point on premium cabins, especially round-trip awards.",
    transferPartners: [
      { partner: "Amex", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ]
  },
  {
    id: "flyingblue",
    name: "Air France/KLM Flying Blue",
    milesPerPoint: 0.15,
    previousMilesPerPoint: 0.14,
    cpp: 1.5,
    explanation: "Value increased slightly due to recent promo awards allowing 25% off long-haul routes.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ]
  },
  {
    id: "aeroplan",
    name: "Air Canada Aeroplan",
    milesPerPoint: 0.14,
    previousMilesPerPoint: 0.14,
    cpp: 1.7,
    explanation: "Steady value, excellent partner network without fuel surcharges for long distances.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ]
  },
  {
    id: "virgin",
    name: "Virgin Atlantic Flying Club",
    milesPerPoint: 0.16,
    previousMilesPerPoint: 0.17,
    cpp: 1.4,
    explanation: "Slight decrease due to partner award chart devaluations, specifically on Delta metal.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ]
  },
  {
    id: "avios-ba",
    name: "British Airways Executive Club",
    milesPerPoint: 0.08,
    previousMilesPerPoint: 0.08,
    cpp: 1.3,
    explanation: "Poor for extreme distance due to distance-based award chart, but decent for short hauls.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ]
  },
  {
    id: "lifemiles",
    name: "Avianca LifeMiles",
    milesPerPoint: 0.15,
    previousMilesPerPoint: 0.15,
    cpp: 1.6,
    explanation: "Great for long-haul Star Alliance bookings with minimal fees.",
    transferPartners: [
      { partner: "Amex", ratio: "1:1" },
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ]
  },
  {
    id: "krisflyer",
    name: "Singapore Airlines KrisFlyer",
    milesPerPoint: 0.13,
    previousMilesPerPoint: 0.13,
    cpp: 1.5,
    explanation: "Only way to book Singapore premium cabins, standard distance valuations.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Amex", ratio: "1:1" },
      { partner: "Citi", ratio: "1:1" },
      { partner: "CapitalOne", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ]
  },
  {
    id: "skymiles",
    name: "Delta SkyMiles",
    milesPerPoint: 0.06,
    previousMilesPerPoint: 0.06,
    cpp: 1.2,
    explanation: "Dynamic pricing severely limits extreme distance value on long-haul flights.",
    transferPartners: [
      { partner: "Amex", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ]
  },
  {
    id: "mileageplus",
    name: "United MileagePlus",
    milesPerPoint: 0.09,
    previousMilesPerPoint: 0.10,
    cpp: 1.3,
    explanation: "Continued unannounced dynamic pricing tweaks reducing long-haul partner award value.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1.1" }
    ]
  },
  {
    id: "aadvantage",
    name: "American Airlines AAdvantage",
    milesPerPoint: 0.11,
    previousMilesPerPoint: 0.11,
    cpp: 1.5,
    explanation: "Fixed partner charts still offer good distance-based value, though harder to earn.",
    transferPartners: [
      { partner: "Bilt", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
    ]
  },
  {
    id: "southwest",
    name: "Southwest Rapid Rewards",
    milesPerPoint: 0.05,
    previousMilesPerPoint: 0.05,
    cpp: 1.4,
    explanation: "Points tied to cash value; no outsized distance possibilities.",
    transferPartners: [
      { partner: "Chase", ratio: "1:1" },
      { partner: "Marriott", ratio: "3:1" }
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
    ]
  }
];
