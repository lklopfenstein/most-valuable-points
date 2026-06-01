import { generateDynamicAirlines } from './src/utils/redemptionEngine.js';
import { airlinesData } from './src/data/loyaltyData.js';

const origin = { iata: 'SFO', country: 'US', city: 'San Francisco' };
const result = generateDynamicAirlines(airlinesData, origin);
console.log(result[0].redemptionExamples);
