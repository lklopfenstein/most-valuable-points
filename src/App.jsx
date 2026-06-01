import React, { useState } from 'react';
import { airlinesData, hotelsData } from './data/loyaltyData';
import AirlineRankingCard from './components/AirlineRankingCard';
import HotelRankingCard from './components/HotelRankingCard';
import { Plane, Building } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('airlines');

  // Sort airlines by highest milesPerPoint
  const sortedAirlines = [...airlinesData].sort((a, b) => b.milesPerPoint - a.milesPerPoint);
  
  // Sort hotels by lowest average points, putting "too expensive" (>18000) at the bottom
  const sortedHotels = [...hotelsData].sort((a, b) => {
    const aTooExpensive = a.averagePoints > 18000;
    const bTooExpensive = b.averagePoints > 18000;
    
    if (aTooExpensive && !bTooExpensive) return 1;
    if (!aTooExpensive && bTooExpensive) return -1;
    return a.averagePoints - b.averagePoints;
  });

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
            <h2 className="section-title">
              <Plane size={32} color="var(--accent-primary)" />
              Airline Rankings
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px' }}>
              Ranked by <strong>miles traveled per point</strong>. We seek the absolute furthest destinations for the least points. 
            </p>
            <div className="grid">
              {sortedAirlines.map((airline, index) => (
                <AirlineRankingCard key={airline.id} data={airline} rank={index + 1} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'hotels' && (
          <div className="animate-up">
            <h2 className="section-title">
              <Building size={32} color="var(--accent-primary)" />
              Hotel Rankings
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px' }}>
              Ranked by lowest average cost for 3-star and above properties. Programs exceeding 18,000 points per night on average are flagged as <strong>Too Freakin' Expensive</strong> and moved to the bottom.
            </p>
            <div className="grid">
              {sortedHotels.map((hotel, index) => (
                <HotelRankingCard key={hotel.id} data={hotel} rank={index + 1} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
