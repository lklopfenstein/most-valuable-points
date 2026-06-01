const https = require('https');
const fs = require('fs');
const csv = require('csv-parser');

const URL = 'https://davidmegginson.github.io/ourairports-data/airports.csv';
const OUTPUT_PATH = './src/data/airports.json';

const results = [];

https.get(URL, (res) => {
  res.pipe(csv())
    .on('data', (data) => {
      // Filter for commercial types with an IATA code
      const validTypes = ['large_airport', 'medium_airport', 'small_airport'];
      if (validTypes.includes(data.type) && data.iata_code) {
        results.push({
          iata: data.iata_code,
          name: data.name,
          city: data.municipality,
          country: data.iso_country,
          continent: data.continent // Use continent to determine value multiplier
        });
      }
    })
    .on('end', () => {
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2));
      console.log(`Successfully fetched and parsed ${results.length} commercial airports.`);
    });
});
