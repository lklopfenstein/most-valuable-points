import React from 'react';
import { TrendingUp, TrendingDown, Minus, PlaneTakeoff } from 'lucide-react';
import { transferPartnersMeta } from '../data/loyaltyData';

export default function AirlineRankingCard({ data, rank }) {
  const { name, milesPerPoint, previousMilesPerPoint, cpp, explanation, transferPartners } = data;
  
  const trend = milesPerPoint > previousMilesPerPoint ? 'up' : milesPerPoint < previousMilesPerPoint ? 'down' : 'flat';

  return (
    <div className={`glass-card delay-${rank % 4 + 1}`}>
      <div className="flex-between">
        <div className="flex-row">
          <PlaneTakeoff size={24} color="var(--accent-primary)" />
          <h3 style={{ fontSize: '1.25rem' }}>#{rank} {name}</h3>
        </div>
        <div className={`trend ${trend}`}>
          {trend === 'up' && <TrendingUp size={16} />}
          {trend === 'down' && <TrendingDown size={16} />}
          {trend === 'flat' && <Minus size={16} />}
          <span>{trend === 'flat' ? 'Flat' : trend === 'up' ? 'Up' : 'Down'}</span>
        </div>
      </div>
      
      <div style={{ marginTop: '1.5rem' }}>
        <div className="metric-highlight">{milesPerPoint.toFixed(2)}</div>
        <div className="metric-label">Miles Per Point</div>
        <div className="cpp-val">Standard Valuation: {cpp} cpp</div>
      </div>

      <div className="explanation">
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
                <a href={ex.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                  {ex.title}
                </a>
                <span style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{ex.cost}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
