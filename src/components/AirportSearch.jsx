import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin } from 'lucide-react';
import airportsData from '../data/airports.json';

export default function AirportSearch({ onSelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = airportsData.filter(a => {
      if (!a.iata) return false;
      return a.iata.toLowerCase().includes(lowerQuery) || 
             (a.city && a.city.toLowerCase().includes(lowerQuery)) ||
             (a.name && a.name.toLowerCase().includes(lowerQuery));
    }).slice(0, 50); // Limit to 50 for performance

    setResults(filtered);
    setIsOpen(true);
  }, [query]);

  const handleSelect = (airport) => {
    setQuery(`${airport.iata} - ${airport.city}`);
    setIsOpen(false);
    onSelect(airport);
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
          <Search size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => {
            if (query.length >= 2) setIsOpen(true);
          }}
          placeholder="Search origin airport (e.g., ATL, London, JFK...)"
          style={{
            width: '100%',
            padding: '1rem 1rem 1rem 3rem',
            fontSize: '1.25rem',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '12px',
            color: 'var(--text-primary)',
            outline: 'none',
            boxShadow: 'var(--glass-shadow)'
          }}
        />
      </div>

      {isOpen && results.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '0.5rem',
          background: '#1a1d27',
          border: '1px solid var(--glass-border)',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          maxHeight: '300px',
          overflowY: 'auto',
          zIndex: 50,
          listStyle: 'none',
          padding: '0.5rem'
        }}>
          {results.map((airport) => (
            <li
              key={airport.iata}
              onClick={() => handleSelect(airport)}
              style={{
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ flexShrink: 0 }}>
                <span className="badge" style={{ background: 'var(--accent-primary)', color: '#fff', fontSize: '0.85rem' }}>
                  {airport.iata}
                </span>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{airport.city}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{airport.name}</div>
              </div>
              <div style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }}>
                <MapPin size={16} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
