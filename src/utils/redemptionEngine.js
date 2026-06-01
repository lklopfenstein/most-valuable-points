function getOriginRegion(countryCode) {
  const eu = ['GB', 'FR', 'DE', 'ES', 'IT', 'NL', 'CH', 'IE', 'PT', 'SE', 'NO', 'DK', 'FI'];
  const as = ['JP', 'KR', 'CN', 'SG', 'HK', 'TW', 'TH', 'VN', 'MY', 'ID'];
  const me = ['AE', 'QA', 'SA', 'IL', 'TR', 'EG'];
  const oc = ['AU', 'NZ', 'FJ'];
  const sa = ['BR', 'AR', 'CO', 'CL', 'PE'];
  
  if (['US', 'CA', 'MX'].includes(countryCode)) return 'NA';
  if (eu.includes(countryCode)) return 'EU';
  if (as.includes(countryCode)) return 'AS';
  if (me.includes(countryCode)) return 'ME';
  if (oc.includes(countryCode)) return 'OC';
  if (sa.includes(countryCode)) return 'SA';
  return 'OTHER';
}

function calculateCost(originRegion, destRegion, airline, isDrivable) {
  if (isDrivable) return 999999; // Force into Too Freakin Expensive

  if (airline.model === 'revenue') {
    const cashCost = generateCashCost(originRegion, destRegion);
    return Math.round(cashCost / (airline.cpp / 100));
  }

  const airlineId = airline.id;

  // Base regional logic approximations
  if (originRegion === destRegion) {
    if (['avios-ba', 'iberia', 'flyingblue', 'alaska', 'aeroplan', 'turkish'].includes(airlineId)) return 20000;
    if (['skymiles', 'mileageplus', 'aadvantage'].includes(airlineId)) return 45000;
    return 30000;
  }

  // Intercontinental
  const pair = [originRegion, destRegion].sort().join('-');
  if (pair === 'EU-NA') {
    if (['flyingblue', 'virgin'].includes(airlineId)) return 30000;
    if (['iberia', 'avios-ba'].includes(airlineId)) return 34000;
    if (['skymiles', 'mileageplus'].includes(airlineId)) return 65000;
    if (['aadvantage'].includes(airlineId)) return 45000;
    return 50000;
  }

  if (pair === 'AS-NA') {
    if (['ana', 'jal'].includes(airlineId)) return 40000;
    if (['cathay'].includes(airlineId)) return 45000;
    if (['skymiles', 'mileageplus'].includes(airlineId)) return 80000;
    return 70000;
  }

  if (pair === 'ME-NA') {
    if (['qatar'].includes(airlineId)) return 70000;
    if (['emirates'].includes(airlineId)) return 85000;
    if (['etihad'].includes(airlineId)) return 80000;
    return 75000;
  }

  // Default fallback for other intercontinental
  return 55000;
}

function generateCashCost(originRegion, destRegion) {
  if (originRegion === destRegion) return 350; // Domestic/short-haul average RT
  const pair = [originRegion, destRegion].sort().join('-');
  if (pair === 'EU-NA') return 900;
  if (pair === 'AS-NA') return 1200;
  if (pair === 'ME-NA') return 1100;
  return 800; // Fallback
}

function generateDeepLink(originIata, destIata) {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  const depDate = d.toISOString().split('T')[0];
  d.setDate(d.getDate() + 7);
  const retDate = d.toISOString().split('T')[0];

  return `https://www.google.com/travel/flights?q=Flights%20to%20${destIata}%20from%20${originIata}%20on%20${depDate}%20through%20${retDate}`;
}

export function generateDynamicAirlines(baseData, origin) {
  if (!origin) return baseData;
  
  const originRegion = getOriginRegion(origin.country);

  return baseData.map(airline => {
    let multiplier = 1.0;
    let newExplanation = airline.explanation;
    
    // Check if Drivable
    // Very naive drivable logic: same country and very close hub
    const isDrivable = origin.country === 'US' && origin.iata === airline.primaryHub;

    // Calculate dynamic RT cost and dynamic CPP
    const generatedRtCost = calculateCost(originRegion, airline.primaryRegion, airline, isDrivable);
    const generatedCashCost = generateCashCost(originRegion, airline.primaryRegion);
    
    // cpp = (cash / points) * 100
    const dynamicCpp = isDrivable ? 0 : (generatedCashCost / generatedRtCost) * 100;
    
    // Adjust value multipliers based on the calculated cost relative to the program's base power
    if (generatedRtCost <= 25000) multiplier = 1.5;
    else if (generatedRtCost <= 35000) multiplier = 1.2;
    else if (generatedRtCost > 60000) multiplier = 0.5;
    else if (generatedRtCost > 40000) multiplier = 0.8;

    if (isDrivable) {
      newExplanation = `Origin ${origin.iata} is too close to hub ${airline.primaryHub}. Flying this is drivable and a terrible use of points!`;
    } else if (originRegion === airline.primaryRegion) {
      newExplanation = `Originating in the same region (${originRegion}) gives a massive home-field advantage.`;
    } else if (generatedRtCost > 50000) {
      newExplanation = `Originating from ${originRegion} means exorbitant long-haul rates or surcharges on this program.`;
    }

    // Generate 3 Examples
    const destinations = [
      { iata: airline.primaryHub, region: airline.primaryRegion, type: 'Primary Hub' },
      { iata: airline.customDestinations.sweetSpot.iata, region: airline.customDestinations.sweetSpot.region, type: airline.customDestinations.sweetSpot.desc },
      { iata: airline.customDestinations.maxDistance.iata, region: airline.customDestinations.maxDistance.region, type: airline.customDestinations.maxDistance.desc }
    ];

    const dynamicExamples = destinations.map(dest => {
      const isDrivableDest = origin.country === 'US' && origin.iata === dest.iata;
      const destPoints = calculateCost(originRegion, dest.region, airline, isDrivableDest);
      const destCash = generateCashCost(originRegion, dest.region);
      
      const title = isDrivableDest 
        ? `Too close to fly: ${origin.iata} to ${dest.iata}`
        : `${origin.iata} to ${dest.iata} - ${dest.type}`;
        
      const costString = destPoints >= 999999 
        ? "N/A (Drivable)" 
        : `${destPoints.toLocaleString()} pts (~$${destCash} value)`;
        
      return {
        title,
        cost: costString,
        link: isDrivableDest ? airline.bookingUrl : generateDeepLink(origin.iata, dest.iata)
      };
    });

    return {
      ...airline,
      milesPerPoint: airline.milesPerPoint * multiplier,
      typicalRtCost: generatedRtCost,
      dynamicCpp: dynamicCpp,
      cashEquivalent: generatedCashCost,
      explanation: newExplanation,
      redemptionExamples: dynamicExamples
    };
  });
}
