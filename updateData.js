import fs from 'fs';

let content = fs.readFileSync('src/data/loyaltyData.js', 'utf8');

const airlineMap = {
  'alaska': { model: 'chart', customDestinations: { sweetSpot: { iata: 'HND', region: 'AS', desc: 'Tokyo (Sweet Spot)' }, maxDistance: { iata: 'SYD', region: 'OC', desc: 'Sydney (Max Distance)' } } },
  'iberia': { model: 'chart', customDestinations: { sweetSpot: { iata: 'ORD', region: 'NA', desc: 'Chicago (Sweet Spot)' }, maxDistance: { iata: 'EZE', region: 'SA', desc: 'Buenos Aires (Max Distance)' } } },
  'flyingblue': { model: 'chart', customDestinations: { sweetSpot: { iata: 'JFK', region: 'NA', desc: 'New York (Promo Reward)' }, maxDistance: { iata: 'NRT', region: 'AS', desc: 'Tokyo (Max Distance)' } } },
  'turkish': { model: 'chart', customDestinations: { sweetSpot: { iata: 'HNL', region: 'NA', desc: 'Hawaii (Sweet Spot)' }, maxDistance: { iata: 'CPT', region: 'AF', desc: 'Cape Town (Max Distance)' } } },
  'virgin': { model: 'chart', customDestinations: { sweetSpot: { iata: 'JFK', region: 'NA', desc: 'New York (Sweet Spot)' }, maxDistance: { iata: 'HND', region: 'AS', desc: 'Tokyo (Max Distance)' } } },
  'avios-ba': { model: 'chart', customDestinations: { sweetSpot: { iata: 'JFK', region: 'NA', desc: 'New York (Sweet Spot)' }, maxDistance: { iata: 'SIN', region: 'AS', desc: 'Singapore (Max Distance)' } } },
  'ana': { model: 'chart', customDestinations: { sweetSpot: { iata: 'LAX', region: 'NA', desc: 'Los Angeles (Sweet Spot)' }, maxDistance: { iata: 'LHR', region: 'EU', desc: 'London (Max Distance)' } } },
  'aeroplan': { model: 'chart', customDestinations: { sweetSpot: { iata: 'FRA', region: 'EU', desc: 'Frankfurt (Sweet Spot)' }, maxDistance: { iata: 'SYD', region: 'OC', desc: 'Sydney (Max Distance)' } } },
  'lifemiles': { model: 'chart', customDestinations: { sweetSpot: { iata: 'LIS', region: 'EU', desc: 'Lisbon (Sweet Spot)' }, maxDistance: { iata: 'HND', region: 'AS', desc: 'Tokyo (Max Distance)' } } },
  'krisflyer': { model: 'chart', customDestinations: { sweetSpot: { iata: 'FRA', region: 'EU', desc: 'Frankfurt (Sweet Spot)' }, maxDistance: { iata: 'JFK', region: 'NA', desc: 'New York (Max Distance)' } } },
  'qatar': { model: 'chart', customDestinations: { sweetSpot: { iata: 'MLE', region: 'AS', desc: 'Maldives (Sweet Spot)' }, maxDistance: { iata: 'JFK', region: 'NA', desc: 'New York (Max Distance)' } } },
  'cathay': { model: 'chart', customDestinations: { sweetSpot: { iata: 'LHR', region: 'EU', desc: 'London (Sweet Spot)' }, maxDistance: { iata: 'JFK', region: 'NA', desc: 'New York (Max Distance)' } } },
  'hawaiian': { model: 'chart', customDestinations: { sweetSpot: { iata: 'LAX', region: 'NA', desc: 'Los Angeles (Sweet Spot)' }, maxDistance: { iata: 'JFK', region: 'NA', desc: 'New York (Max Distance)' } } },
  'aadvantage': { model: 'chart', customDestinations: { sweetSpot: { iata: 'LHR', region: 'EU', desc: 'London (Sweet Spot)' }, maxDistance: { iata: 'SYD', region: 'OC', desc: 'Sydney (Max Distance)' } } },
  'jal': { model: 'chart', customDestinations: { sweetSpot: { iata: 'SFO', region: 'NA', desc: 'San Francisco (Sweet Spot)' }, maxDistance: { iata: 'LHR', region: 'EU', desc: 'London (Max Distance)' } } },
  'mileageplus': { model: 'chart', customDestinations: { sweetSpot: { iata: 'FRA', region: 'EU', desc: 'Frankfurt (Sweet Spot)' }, maxDistance: { iata: 'SYD', region: 'OC', desc: 'Sydney (Max Distance)' } } },
  'emirates': { model: 'chart', customDestinations: { sweetSpot: { iata: 'MXP', region: 'EU', desc: 'Milan (Sweet Spot)' }, maxDistance: { iata: 'JFK', region: 'NA', desc: 'New York (Max Distance)' } } },
  'etihad': { model: 'chart', customDestinations: { sweetSpot: { iata: 'LHR', region: 'EU', desc: 'London (Sweet Spot)' }, maxDistance: { iata: 'JFK', region: 'NA', desc: 'New York (Max Distance)' } } },
  'qantas': { model: 'chart', customDestinations: { sweetSpot: { iata: 'LAX', region: 'NA', desc: 'Los Angeles (Sweet Spot)' }, maxDistance: { iata: 'LHR', region: 'EU', desc: 'London (Max Distance)' } } },
  'skymiles': { model: 'chart', customDestinations: { sweetSpot: { iata: 'CUN', region: 'NA', desc: 'Cancun (Sweet Spot)' }, maxDistance: { iata: 'SYD', region: 'OC', desc: 'Sydney (Max Distance)' } } },
  'southwest': { model: 'revenue', customDestinations: { sweetSpot: { iata: 'AUS', region: 'NA', desc: 'Austin (Sweet Spot)' }, maxDistance: { iata: 'SJO', region: 'NA', desc: 'Costa Rica (Max Distance)' } } },
  'jetblue': { model: 'revenue', customDestinations: { sweetSpot: { iata: 'CUN', region: 'NA', desc: 'Cancun (Sweet Spot)' }, maxDistance: { iata: 'LHR', region: 'EU', desc: 'London (Max Distance)' } } },
  'spirit': { model: 'revenue', customDestinations: { sweetSpot: { iata: 'LAS', region: 'NA', desc: 'Las Vegas (Sweet Spot)' }, maxDistance: { iata: 'BOG', region: 'SA', desc: 'Bogota (Max Distance)' } } },
  'frontier': { model: 'revenue', customDestinations: { sweetSpot: { iata: 'MCO', region: 'NA', desc: 'Orlando (Sweet Spot)' }, maxDistance: { iata: 'CUN', region: 'NA', desc: 'Cancun (Max Distance)' } } },
  'allegiant': { model: 'revenue', customDestinations: { sweetSpot: { iata: 'PIE', region: 'NA', desc: 'St. Pete (Sweet Spot)' }, maxDistance: { iata: 'LAS', region: 'NA', desc: 'Las Vegas (Max Distance)' } } },
  'airasia': { model: 'revenue', customDestinations: { sweetSpot: { iata: 'DPS', region: 'AS', desc: 'Bali (Sweet Spot)' }, maxDistance: { iata: 'SYD', region: 'OC', desc: 'Sydney (Max Distance)' } } },
  'pegasus': { model: 'revenue', customDestinations: { sweetSpot: { iata: 'DXB', region: 'ME', desc: 'Dubai (Sweet Spot)' }, maxDistance: { iata: 'LHR', region: 'EU', desc: 'London (Max Distance)' } } }
};

// parse the file
let match = content.match(/export const airlinesData = (\[[\s\S]*?\]);\n\nexport const hotelsData/);
if (match) {
  let airlines = eval(match[1]); // bad practice but safe for this static data
  
  airlines = airlines.map(a => {
    if (airlineMap[a.id]) {
      return {
        ...a,
        ...airlineMap[a.id]
      };
    }
    return a;
  });
  
  const serialized = JSON.stringify(airlines, null, 2).replace(/"([^"]+)":/g, '$1:');
  const newContent = content.replace(/export const airlinesData = \[[\s\S]*?\];\n\nexport const hotelsData/, `export const airlinesData = ${serialized};\n\nexport const hotelsData`);
  fs.writeFileSync('src/data/loyaltyData.js', newContent);
  console.log("Updated loyaltyData.js");
}
