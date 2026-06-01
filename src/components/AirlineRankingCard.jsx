import React from 'react';
import { TrendingUp, TrendingDown, Minus, PlaneTakeoff } from 'lucide-react';
import { transferPartnersMeta } from '../data/loyaltyData';

export default function AirlineRankingCard({ data, rank }) {
  const { name, milesPerPoint, previousMilesPerPoint, cpp, typicalRtCost, explanation, transferPartners } = data;
  
  const isTooExpensive = typicalRtCost > 40000;
  const trend = milesPerPoint > previousMilesPerPoint ? 'up' : milesPerPoint < previousMilesPerPoint ? 'down' : 'flat';

  return (
    <div className={`glass-card ${isTooExpensive ? 'danger' : ''} delay-${rank % 4 + 1}`}>
      <div className="flex-between">
        <div className="flex-row">
          <PlaneTakeoff size={24} color={isTooExpensive ? "var(--danger)" : "var(--accent-primary)"} />
          <h3 style={{ fontSize: '1.25rem' }}>#{rank} {name}</h3>
        </div>
        {!isTooExpensive && (
          <div className={`trend ${trend}`}>
            {trend === 'up' && <TrendingUp size={16} />}
            {trend === 'down' && <TrendingDown size={16} />}
            {trend === 'flat' && <Minus size={16} />}
            <span>{trend === 'flat' ? 'Flat' : trend === 'up' ? 'Up' : 'Down'}</span>
          </div>
        )}
      </div>

      {isTooExpensive && (
        <div style={{ marginTop: '1rem' }}>
          <span className="badge badge-danger">
            Too Freakin' Expensive
          </span>
        </div>
      )}
      
      <div style={{ marginTop: isTooExpensive ? '1rem' : '1.5rem', display: 'flex', gap: '2rem' }}>
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, color: isTooExpensive ? 'var(--danger)' : 'inherit' }} className={isTooExpensive ? '' : 'metric-highlight'}>
            {milesPerPoint.toFixed(2)}
          </div>
          <div className="metric-label">Miles Per Point</div>
        </div>
        
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, color: isTooExpensive ? 'var(--danger)' : 'var(--success, #10b981)' }}>
            {data.dynamicCpp ? `${data.dynamicCpp.toFixed(1)}¢` : (data.cpp ? `${data.cpp.toFixed(1)}¢` : 'N/A')}
          </div>
          <div className="metric-label">Dollar Value (CPP)</div>
        </div>
      </div>
      <div className="cpp-val" style={{ marginTop: '0.75rem' }}>
        Typical RT Cost: {typicalRtCost >= 999999 ? 'N/A (Drivable)' : `${typicalRtCost.toLocaleString()} pts`}
      </div>

      <div className={`explanation ${isTooExpensive ? 'danger' : ''}`}>
        <strong>MoM Note:</strong> {explanation}
      </div>

      <div className="partners-container">
        {transferPartners.map((pt) => {
          const meta = transferPartnersMeta[pt.partner];
          return (
            <div key={pt.partner} className="partner-tag" title={meta.name}>
              <div className="partner-dot" style={{ backgroundColor: meta.color }}></div>
              {meta.abbr} <span style={{ opacity: 0.6, fontSize: '0.65rem' }}>({pt.ratio})</span>
            </div>
          );
        })}
      </div>

      {data.redemptionExamples && data.redemptionExamples.length > 0 && (
        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Example Redemptions</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
            {data.redemptionExamples.map((ex, i) => (
              <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <a href={ex.link} target="_blank" rel="noopener noreferrer" style={{ color: isTooExpensive ? 'var(--danger)' : 'var(--accent-primary)', textDecoration: 'none' }}>
                  {ex.title}
                </a>
                <span style={{ fontWeight: 600, whiteSpace: 'nowrap', color: isTooExpensive ? 'var(--danger)' : 'inherit' }}>{ex.cost}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
