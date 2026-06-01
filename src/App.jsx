import React, { useState, useMemo } from 'react';
import { airlinesData, hotelsData } from './data/loyaltyData';
import { generateDynamicAirlines } from './utils/redemptionEngine';
import AirlineRankingCard from './components/AirlineRankingCard';
import HotelRankingCard from './components/HotelRankingCard';
import AirportSearch from './components/AirportSearch';
import { Plane, Building, MapPin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('airlines');
  const [origin, setOrigin] = useState(null);

  const dynamicAirlines = useMemo(() => {
    return generateDynamicAirlines(airlinesData, origin);
  }, [origin]);

  const airlineTiers = useMemo(() => {
    const validAirlines = dynamicAirlines.filter(a => a.typicalRtCost <= 40000).sort((a, b) => b.milesPerPoint - a.milesPerPoint);
    const expensiveAirlines = dynamicAirlines.filter(a => a.typicalRtCost > 40000).sort((a, b) => b.milesPerPoint - a.milesPerPoint);
    
    const tiers = [];
    let currentTier = [];
    let tierIndex = 1;
    
    validAirlines.forEach((airline, i) => {
      if (i === 0) {
        currentTier.push(airline);
      } else {
        const prev = validAirlines[i - 1];
        if (prev.milesPerPoint - airline.milesPerPoint >= 0.02) {
          tiers.push({ name: `Tier ${tierIndex}`, items: currentTier });
          currentTier = [airline];
          tierIndex++;
        } else {
          currentTier.push(airline);
        }
      }
    });
    if (currentTier.length > 0) {
      tiers.push({ name: `Tier ${tierIndex}`, items: currentTier });
    }

    if (expensiveAirlines.length > 0) {
      tiers.push({ name: "Too Freakin' Expensive Tier", items: expensiveAirlines, danger: true });
    }

    return tiers;
  }, [dynamicAirlines]);

  const hotelTiers = useMemo(() => {
    const validHotels = hotelsData.filter(h => h.averagePoints <= 18000).sort((a, b) => a.averagePoints - b.averagePoints);
    const expensiveHotels = hotelsData.filter(h => h.averagePoints > 18000).sort((a, b) => a.averagePoints - b.averagePoints);
    
    const tiers = [];
    let currentTier = [];
    let tierIndex = 1;

    validHotels.forEach((hotel, i) => {
      if (i === 0) {
        currentTier.push(hotel);
      } else {
        const prev = validHotels[i - 1];
        if (hotel.averagePoints - prev.averagePoints >= 2000) {
          tiers.push({ name: `Tier ${tierIndex}`, items: currentTier });
          currentTier = [hotel];
          tierIndex++;
        } else {
          currentTier.push(hotel);
        }
      }
    });
    if (currentTier.length > 0) {
      tiers.push({ name: `Tier ${tierIndex}`, items: currentTier });
    }

    if (expensiveHotels.length > 0) {
      tiers.push({ name: "Too Freakin' Expensive Tier", items: expensiveHotels, danger: true });
    }

    return tiers;
  }, []);

  return (
    <div className="container">
      <header className="header-section">
        <h1 className="title">Most Valuable Points</h1>
        <p className="subtitle">
          The definitive monthly ranking of airline and hotel loyalty programs,
          optimized for the absolute furthest distance and strict nightly point limits.
        </p>
      </header>

      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'airlines' ? 'active' : ''}`}
          onClick={() => setActiveTab('airlines')}
        >
          <Plane size={18} />
          Airlines
        </button>
        <button 
          className={`tab-btn ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => setActiveTab('hotels')}
        >
          <Building size={18} />
          Hotels
        </button>
      </div>

      <main>
        {activeTab === 'airlines' && (
          <div className="animate-up">
            <h2 className="section-title" style={{ marginBottom: '1rem', justifyContent: 'center' }}>
              <Plane size={32} color="var(--accent-primary)" />
              Airline Rankings
            </h2>
            
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                Airline math changes drastically depending on where you fly from. 
                Select an origin airport below to calculate real-time valuations.
              </p>
              <AirportSearch onSelect={(airport) => setOrigin(airport)} />
              
              {origin && (
                <div style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem 1rem', borderRadius: '99px', border: '1px solid rgba(59, 130, 246, 0.3)', color: 'var(--accent-primary)' }}>
                  <MapPin size={16} />
                  <span>Showing dynamic valuations originating from: <strong>{origin.iata} ({origin.city})</strong></span>
                  <button onClick={() => setOrigin(null)} style={{ background: 'none', border: 'none', color: 'inherit', marginLeft: '0.5rem', cursor: 'pointer', textDecoration: 'underline' }}>Clear</button>
                </div>
              )}
            </div>

            {origin ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {airlineTiers.map((tier, tIndex) => {
                  const startRank = airlineTiers.slice(0, tIndex).reduce((acc, curr) => acc + curr.items.length, 0) + 1;
                  return (
                    <div key={tier.name} className="animate-up delay-1">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.75rem', margin: 0, color: tier.danger ? 'var(--danger)' : 'inherit' }}>{tier.name}</h3>
                        <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${tier.danger ? 'var(--danger-glow)' : 'var(--glass-border)'}, transparent)` }}></div>
                      </div>
                      <div className="grid">
                        {tier.items.map((airline, index) => (
                          <AirlineRankingCard key={airline.id} data={airline} rank={startRank + index} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                <Plane size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                <h3>Waiting for Origin Selection</h3>
                <p>Type an airport code above to reveal the rankings.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'hotels' && (
          <div className="animate-up">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              <Building size={32} color="var(--accent-primary)" />
              Hotel Rankings
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '800px' }}>
              Ranked by lowest average cost for 3-star and above properties. Programs exceeding 18,000 points per night on average are flagged as <strong>Too Freakin' Expensive</strong> and relegated to the bottom.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {hotelTiers.map((tier, tIndex) => {
                const startRank = hotelTiers.slice(0, tIndex).reduce((acc, curr) => acc + curr.items.length, 0) + 1;
                return (
                  <div key={tier.name}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                      <h3 style={{ fontSize: '1.75rem', margin: 0, color: tier.danger ? 'var(--danger)' : 'inherit' }}>{tier.name}</h3>
                      <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${tier.danger ? 'var(--danger-glow)' : 'var(--glass-border)'}, transparent)` }}></div>
                    </div>
                    <div className="grid">
                      {tier.items.map((hotel, index) => (
                        <HotelRankingCard key={hotel.id} data={hotel} rank={startRank + index} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
