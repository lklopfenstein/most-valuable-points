import React, { useState, useMemo } from 'react';
import { airlinesData, hotelsData } from './data/loyaltyData';
import AirlineRankingCard from './components/AirlineRankingCard';
import HotelRankingCard from './components/HotelRankingCard';
import { Plane, Building } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('airlines');

  // Group airlines into Tiers
  const airlineTiers = useMemo(() => {
    const sorted = [...airlinesData].sort((a, b) => b.milesPerPoint - a.milesPerPoint);
    const tiers = [];
    let currentTier = [];
    let tierIndex = 1;
    
    sorted.forEach((airline, i) => {
      if (i === 0) {
        currentTier.push(airline);
      } else {
        const prev = sorted[i - 1];
        // Significant drop-off threshold for airlines is 0.02
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
    return tiers;
  }, []);

  // Group hotels into Tiers
  const hotelTiers = useMemo(() => {
    // Separate valid vs too expensive
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
        // Significant drop-off threshold for hotels is 2000 points
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
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              <Plane size={32} color="var(--accent-primary)" />
              Airline Rankings
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '800px' }}>
              Ranked by <strong>miles traveled per point</strong>. We seek the absolute furthest destinations for the least points. 
              Tiers highlight significant drop-offs in relative value.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {airlineTiers.map((tier, tIndex) => {
                // Calculate starting rank for this tier
                const startRank = airlineTiers.slice(0, tIndex).reduce((acc, curr) => acc + curr.items.length, 0) + 1;
                
                return (
                  <div key={tier.name}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                      <h3 style={{ fontSize: '1.75rem', margin: 0 }}>{tier.name}</h3>
                      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--glass-border), transparent)' }}></div>
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
                // Calculate starting rank for this tier
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
