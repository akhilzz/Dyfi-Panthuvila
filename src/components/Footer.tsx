'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">DYFI PANTHUVILA</div>
          <div className="footer-sub">THIRUVANANTHAPURAM DISTRICT · PANTHUVILA BRANCH</div>
        </div>
        <div className="footer-links" style={{ flexWrap: 'wrap', gap: '48px' }}>
          <div className="fl-col">
            <div className="fl-col-title">NAVIGATE</div>
            <a href="#s-history">HISTORY</a>
            <a href="#s-members">MEMBERS</a>
            <a href="#s-achievements">ACHIEVEMENTS</a>
            <a href="#s-events">GALLERY</a>
            <a href="#s-support">SUPPORT</a>
            <a href="#s-niv">NIVEDANAM</a>
            <a href="#s-news">NEWS</a>
          </div>
          <div className="fl-col">
            <div className="fl-col-title">DYFI OFFICIAL</div>
            <a href="https://dyfi.in" target="_blank" rel="noopener noreferrer">DYFI.IN</a>
            <a href="https://facebook.com/dyfikerala" target="_blank" rel="noopener noreferrer">DYFI KERALA FB</a>
            <a href="https://cpimkerala.org" target="_blank" rel="noopener noreferrer">CPM KERALA</a>
          </div>
          
          {/* Creator Profile Card — Horizontal Split Redesigned by UI/UX Dev */}
          <div className="fl-col creator-profile-card" style={{ minWidth: '450px', flex: '1 1 450px' }}>
            <div className="fl-col-title" style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--red)', fontWeight: 900 }}>
              THE ENGINEER
            </div>
            
            <div 
              style={{
                background: 'rgba(253, 252, 247, 0.65)',
                border: '1px solid #d4c4a0',
                borderRadius: '8px',
                padding: '24px',
                marginTop: '12px',
                boxShadow: '0 8px 32px rgba(139, 70, 20, 0.04)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap'
              }}
              className="creator-card-hover"
            >
              {/* Left Column: Details */}
              <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div 
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%', 
                        border: '2px solid var(--red)', 
                        overflow: 'hidden',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(211, 30, 54, 0.15)',
                        background: '#FAF6EE'
                      }}
                    >
                      <img 
                        src="/commit_meb/Akhil C.png" 
                        alt="Akhil C." 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          e.currentTarget.src = "https://github.com/akhilzz.png";
                        }}
                      />
                    </div>
                    <div>
                      <div style={{ fontWeight: 900, fontSize: '16px', color: '#1a1a1a', letterSpacing: '0.02em', fontFamily: 'var(--font-display)' }}>
                        AKHIL C.
                      </div>
                      <div style={{ fontSize: '10px', color: 'var(--red)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>
                        Embedded &amp; Full Stack Engineer
                      </div>
                    </div>
                  </div>
                  
                  <p style={{ fontSize: '11px', color: 'rgba(26,26,26,0.6)', fontWeight: 600, marginTop: '12px', lineHeight: '1.5' }}>
                    Designing high-performance embedded systems &amp; modern digital web architectures with high-fidelity aesthetics.
                  </p>
                </div>

                {/* Developer Badges / Links */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                  <a 
                    href="https://github.com/akhilzz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="creator-badge"
                    style={{ 
                      flex: 1, 
                      textAlign: 'center', 
                      fontSize: '9px', 
                      fontWeight: 900, 
                      letterSpacing: '0.15em', 
                      color: '#FAF6EE', 
                      background: '#1a1a1a', 
                      padding: '8px 12px', 
                      borderRadius: '4px',
                      textDecoration: 'none'
                    }}
                  >
                    GITHUB
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/akhil-c-029376230/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="creator-badge"
                    style={{ 
                      flex: 1, 
                      textAlign: 'center', 
                      fontSize: '9px', 
                      fontWeight: 900, 
                      letterSpacing: '0.15em', 
                      color: '#FAF6EE', 
                      background: '#0a66c2', 
                      padding: '8px 12px', 
                      borderRadius: '4px',
                      textDecoration: 'none'
                    }}
                  >
                    LINKEDIN
                  </a>
                </div>
              </div>

              {/* Right Column: Aesthetic QR Scan HUD Box */}
              <div style={{ flex: '0 0 140px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: 'rgba(26,26,26,0.5)', letterSpacing: '0.1em' }}>
                    INSTAGRAM SCANNER
                  </span>
                  <span className="creator-pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2ec4b6' }}></span>
                </div>
                
                <div 
                  style={{ 
                    position: 'relative', 
                    width: '140px', 
                    height: '140px', 
                    borderRadius: '6px', 
                    background: '#FAF6EE', 
                    border: '1px solid #e8d8b0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}
                >
                  {/* Digital HUD Target corners */}
                  <div style={{ position: 'absolute', top: '6px', left: '6px', width: '8px', height: '8px', borderTop: '2px solid var(--red)', borderLeft: '2px solid var(--red)' }}></div>
                  <div style={{ position: 'absolute', top: '6px', right: '6px', width: '8px', height: '8px', borderTop: '2px solid var(--red)', borderRight: '2px solid var(--red)' }}></div>
                  <div style={{ position: 'absolute', bottom: '6px', left: '6px', width: '8px', height: '8px', borderBottom: '2px solid var(--red)', borderLeft: '2px solid var(--red)' }}></div>
                  <div style={{ position: 'absolute', bottom: '6px', right: '6px', width: '8px', height: '8px', borderBottom: '2px solid var(--red)', borderRight: '2px solid var(--red)' }}></div>

                  <img 
                    src="/instagram_qr.jpg?v=3" 
                    alt="Instagram QR Code" 
                    style={{ 
                      maxWidth: '85%', 
                      maxHeight: '85%', 
                      objectFit: 'contain', 
                      position: 'relative', 
                      zIndex: 1
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="fb-txt">FOR THE PEOPLE, BY THE PEOPLE</div>
        <div className="fb-txt">© 2025 DYFI PANTHUVILA — ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  );
}
