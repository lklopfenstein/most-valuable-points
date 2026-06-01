import React from 'react';
import { transferPartnersMeta } from '../data/loyaltyData';
import { Filter } from 'lucide-react';

export default function TransferPartnerFilter({ activeFilters, onToggle }) {
  const partners = Object.keys(transferPartnersMeta);

  return (
    <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <Filter size={16} />
        <span>Filter by Transfer Partner</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
        {partners.map(key => {
          const isActive = activeFilters.includes(key);
          const meta = transferPartnersMeta[key];
          return (
            <button
              key={key}
              onClick={() => onToggle(key)}
              style={{
                background: isActive ? meta.color : 'var(--glass-bg)',
                border: `1px solid ${isActive ? meta.color : 'var(--glass-border)'}`,
                color: isActive ? '#fff' : 'var(--text-primary)',
                padding: '0.5rem 1rem',
                borderRadius: '99px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? `0 0 10px ${meta.color}80` : 'none'
              }}
            >
              {meta.abbr}
            </button>
          );
        })}
      </div>
    </div>
  );
}
