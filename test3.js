import { generateDynamicAirlines } from './src/utils/redemptionEngine.js';
import { airlinesData } from './src/data/loyaltyData.js';

const origin = { iata: 'CLE', country: 'US', city: 'Cleveland' };
const result = generateDynamicAirlines(airlinesData, origin);
const iberia = result.find(a => a.id === 'iberia');
console.log('dynamicCpp:', iberia.dynamicCpp);
console.log('type:', typeof iberia.dynamicCpp);
