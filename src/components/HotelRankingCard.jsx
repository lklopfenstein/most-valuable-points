import React from 'react';
import { Building2, AlertTriangle, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { transferPartnersMeta } from '../data/loyaltyData';

export default function HotelRankingCard({ data, rank }) {
  const { name, averagePoints, previousAveragePoints, cpp, explanation, transferPartners } = data;
  
  const isTooExpensive = averagePoints > 18000;
  const trend = averagePoints > previousAveragePoints ? 'down' : averagePoints < previousAveragePoints ? 'up' : 'flat';
  
  return (
    <div className={`glass-card ${isTooExpensive ? 'danger' : ''} delay-${rank % 4 + 1}`}>
      <div className="flex-between">
        <div className="flex-row">
          <Building2 size={24} color={isTooExpensive ? "var(--danger)" : "var(--accent-primary)"} />
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
            <AlertTriangle size={14} style={{ marginRight: '0.25rem' }} />
            Too Freakin' Expensive
          </span>
        </div>
      )}
      
      <div style={{ marginTop: isTooExpensive ? '1rem' : '1.5rem' }}>
        <div className="metric-highlight" style={{ color: isTooExpensive ? 'var(--danger)' : 'inherit', background: isTooExpensive ? 'none' : '' }}>
          {averagePoints.toLocaleString()}
        </div>
        <div className="metric-label">Avg. Pts / Night (3+ Stars)</div>
        <div className="cpp-val">Standard Valuation: {cpp} cpp</div>
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
    </div>
  );
}
