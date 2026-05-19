'use client';

import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { motion } from 'framer-motion';

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    dob: '',
    ward: '',
    house: '',
    addr: '',
    occ: '',
    edu: '',
    religion: '',
    caste: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [memberId, setMemberId] = useState('PTV — 2025');
  const [initials, setInitials] = useState('?');
  const [isGenerating, setIsGenerating] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'name') {
      const trimmed = value.trim();
      if (trimmed) {
        const pts = trimmed.split(' ');
        const ini = (pts[0]?.[0] || '') + (pts[1]?.[0] || pts[0]?.[1] || '');
        setInitials(ini.toUpperCase() || '?');
        
        // Simple hash for member ID
        const hash = Math.abs(trimmed.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % 9000 + 1000;
        setMemberId(`PTV — ${hash}`);
      } else {
        setInitials('?');
        setMemberId('PTV — 2025');
      }
    }
  };

  const clearAll = () => {
    setFormData({
      name: '', phone: '', age: '', dob: '', ward: '',
      house: '', addr: '', occ: '', edu: '', religion: '', caste: ''
    });
    setInitials('?');
    setMemberId('PTV — 2025');
    setSubmitted(false);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.age) {
      alert('Please fill Name, Mobile and Age.\nപേര്, ഫോൺ, പ്രായം നൽകൂ.');
      return;
    }

    try {
      // 1. Generate PDF
      if (cardRef.current) {
        setIsGenerating(true);
        // We need to wait a tiny bit to ensure DOM is updated before capturing
        await new Promise(r => setTimeout(r, 100));
        
        const canvas = await html2canvas(cardRef.current, {
          scale: 3, // Higher scale for better PDF quality
          useCORS: true,
          logging: false,
          backgroundColor: '#f5efe4'
        });
        
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        
        // Calculate PDF dimensions based on the card aspect ratio
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgProps = pdf.getImageProperties(imgData);
        const margin = 10;
        const width = pdfWidth - (margin * 2);
        const height = (imgProps.height * width) / imgProps.width;
        
        pdf.addImage(imgData, 'JPEG', margin, margin, width, height);
        pdf.save(`DYFI_Membership_Card_${formData.name.replace(/\s+/g, '_')}.pdf`);
      }

      // 2. Save data to server
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, memberId })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to save data to server, but your card was generated.');
      }
    } catch (error) {
      console.error('Error generating card or saving:', error);
      alert('An error occurred while generating your card.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="s-join" className="py-20 bg-[var(--dark)] relative flex justify-center">
      <style>{`
        .mem-wrap {
          max-width: 640px;
          margin: 0 auto;
          background: #f5efe4;
          font-family: 'Barlow Condensed', sans-serif;
          color: #1a1a1a;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          border-radius: 8px;
          overflow: hidden;
        }

        .site-header { background: #C8102E; padding: 0; }
        .dark-bar { background: #7a0d1e; padding: 7px 24px; display: flex; align-items: center; gap: 10px; }
        .db-txt { font-size: 7px; letter-spacing: 0.5em; color: rgba(255,255,255,0.65); text-transform: uppercase; }
        .db-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.3); }
        .red-header { padding: 22px 24px; display: flex; align-items: center; gap: 14px; }
        .rh-dyfi { font-size: 38px; font-weight: 900; color: white; letter-spacing: 0.15em; line-height: 1; }
        .rh-full { font-size: 9px; letter-spacing: 0.35em; color: rgba(255,255,255,0.7); margin-top: 2px; }
        .rh-ml { font-family: 'Noto Sans Malayalam', sans-serif; font-size: 10px; color: rgba(255,255,255,0.55); margin-top: 1px; }
        .rh-divider { width: 1.5px; height: 40px; background: rgba(255,255,255,0.25); margin: 0 10px; }
        .branch-name { font-size: 16px; font-weight: 700; color: white; letter-spacing: 0.08em; }
        .branch-ml { font-family: 'Noto Sans Malayalam', sans-serif; font-size: 10px; color: rgba(255,255,255,0.6); margin-top: 2px; }
        .branch-dist { font-size: 7px; letter-spacing: 0.4em; color: rgba(255,255,255,0.45); margin-top: 3px; }

        .card-zone { padding: 24px 20px 0; }
        .cz-label { font-size: 7px; letter-spacing: 0.5em; color: #999; text-align: center; margin-bottom: 12px; }

        /* THE HERITAGE CARD */
        .h-card {
          background: #fffdf8;
          border: 1px solid #d4c4a0;
          border-radius: 3px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 32px rgba(139,70,20,0.12), 0 1px 4px rgba(139,70,20,0.08);
        }

        .h-card-top {
          background: #C8102E;
          padding: 0;
          position: relative;
          overflow: hidden;
          height: 72px;
          display: flex;
          align-items: center;
        }

        .top-ornament { position: absolute; inset: 0; pointer-events: none; }
        .top-content {
          position: relative; z-index: 2; width: 100%; padding: 0 20px;
          display: flex; justify-content: space-between; align-items: center;
        }

        .tc-left { display: flex; align-items: center; gap: 10px; }
        .tc-dyfi { font-size: 30px; font-weight: 900; color: white; letter-spacing: 0.18em; line-height: 1; }
        .tc-org { font-size: 6px; letter-spacing: 0.35em; color: rgba(255,255,255,0.7); margin-top: 1px; }
        .tc-branch { font-size: 6px; letter-spacing: 0.3em; color: rgba(255,255,255,0.5); }

        .tc-right { text-align: right; }
        .tc-id-lbl { font-size: 5px; letter-spacing: 0.5em; color: rgba(255,255,255,0.5); }
        .tc-id-val { font-size: 14px; font-weight: 900; color: white; letter-spacing: 0.2em; font-family: 'Playfair Display', serif; }

        /* ORNAMENTAL BORDER BAND */
        .ornament-band {
          height: 14px; background: #8B0000; position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }

        /* CREAM HERITAGE SECTION */
        .cream-heritage {
          background: linear-gradient(180deg, #fdf6e8 0%, #fffdf8 100%);
          padding: 10px 20px; border-bottom: 1px solid #e8d8b0;
          display: flex; align-items: center; gap: 10px;
        }

        /* WATERMARK */
        .card-body-wrap { position: relative; overflow: hidden; }
        .watermark {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          opacity: 0.025; pointer-events: none; z-index: 0;
        }

        /* MEMBER SECTION */
        .member-section {
          padding: 18px 20px 14px; display: flex; gap: 16px; align-items: flex-start;
          position: relative; z-index: 1;
        }

        .photo-frame {
          width: 68px; height: 80px; border: 2px solid #c8a870; background: #f5efe4;
          flex-shrink: 0; display: flex; align-items: center; justify-content: center;
          flex-direction: column; position: relative; overflow: hidden;
        }
        .photo-corner { position: absolute; width: 8px; height: 8px; border-color: #C8102E; border-style: solid; }
        .pc-tl { top: 3px; left: 3px; border-width: 1.5px 0 0 1.5px; }
        .pc-tr { top: 3px; right: 3px; border-width: 1.5px 1.5px 0 0; }
        .pc-bl { bottom: 3px; left: 3px; border-width: 0 0 1.5px 1.5px; }
        .pc-br { bottom: 3px; right: 3px; border-width: 0 1.5px 1.5px 0; }
        .photo-init { font-size: 26px; font-weight: 900; color: #C8102E; font-family: 'Playfair Display', serif; }
        .photo-lbl { font-size: 5px; letter-spacing: 0.3em; color: #bba870; margin-top: 3px; }

        .member-info { flex: 1; }
        .mi-label { font-size: 5px; letter-spacing: 0.5em; color: #bba060; margin-bottom: 3px; }
        .mi-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: #1a1a1a; line-height: 1.1; border-bottom: 1px solid #e8d8b0; padding-bottom: 6px; margin-bottom: 6px; text-transform: capitalize; }
        .mi-unit-lbl { font-size: 5px; letter-spacing: 0.4em; color: #bba060; }
        .mi-unit { font-size: 9px; font-weight: 700; color: #C8102E; letter-spacing: 0.15em; margin-top: 1px; }

        .mi-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px; }
        .mif-lbl { font-size: 5px; letter-spacing: 0.4em; color: #bba060; margin-bottom: 1px; }
        .mif-val { font-size: 11px; font-weight: 700; color: #333; letter-spacing: 0.05em; }

        /* HERITAGE DETAILS BAND */
        .details-band {
          background: #fdf6e8; border-top: 1px solid #e8d8b0; border-bottom: 1px solid #e8d8b0;
          padding: 10px 20px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0;
          position: relative; z-index: 1;
        }
        .db-item { padding: 0 12px; border-right: 1px solid #e8d8b0; }
        .db-item:first-child { padding-left: 0; }
        .db-item:last-child { border-right: none; }
        .db-lbl { font-size: 5px; letter-spacing: 0.4em; color: #bba060; margin-bottom: 2px; }
        .db-val { font-size: 11px; font-weight: 700; color: #333; text-transform: uppercase; letter-spacing: 0.04em; }

        /* CARD FOOTER */
        .card-footer {
          background: #fffdf8; padding: 10px 20px; display: flex; justify-content: space-between;
          align-items: center; position: relative; z-index: 1;
        }
        .cf-valid { border: 1px solid #c8a870; padding: 4px 10px; background: #fdf6e8; }
        .cf-valid-lbl { font-size: 5px; letter-spacing: 0.45em; color: #bba060; }
        .cf-valid-val { font-size: 10px; font-weight: 700; color: #8B0000; letter-spacing: 0.15em; font-family: 'Playfair Display', serif; }
        .cf-center { display: flex; flex-direction: column; align-items: center; gap: 3px; }
        .cf-stars { display: flex; gap: 4px; }
        .cf-star { color: #c8a870; font-size: 12px; }
        .cf-issued { font-size: 5px; letter-spacing: 0.35em; color: #bba060; text-align: center; }
        .cf-right { text-align: right; }
        .cf-sign-lbl { font-size: 5px; letter-spacing: 0.35em; color: #bba060; margin-bottom: 10px; }
        .cf-sign-line { width: 80px; height: 1px; background: #c8a870; margin-left: auto; }
        .cf-sign-name { font-size: 6px; letter-spacing: 0.25em; color: #bba060; margin-top: 2px; }

        /* BOTTOM DARK BAR */
        .card-dark-foot {
          background: #7a0d1e; padding: 6px 20px; display: flex; justify-content: space-between; align-items: center;
        }
        .cdf-txt { font-size: 6px; letter-spacing: 0.4em; color: rgba(255,255,255,0.5); }
        .cdf-ml { font-family: 'Noto Sans Malayalam', sans-serif; font-size: 7px; color: rgba(255,255,255,0.4); }

        /* FORM */
        .form-zone { padding: 20px; }
        .fz-title { font-size: 8px; letter-spacing: 0.5em; color: #C8102E; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #e8d8b0; }
        .fcard { background: white; border: 1px solid #e8d8b0; border-radius: 3px; padding: 20px; margin-bottom: 14px; box-shadow: 0 1px 8px rgba(139,70,20,0.05); }
        .fcard-title { font-size: 7px; letter-spacing: 0.45em; color: #8B0000; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
        .fcard-title::after { content: ''; flex: 1; height: 1px; background: #f0e4cc; }
        .fgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 480px) { .fgrid { grid-template-columns: 1fr; } }
        .ff { margin-bottom: 2px; }
        .ff.full { grid-column: 1 / -1; }
        .flbl { font-size: 6px; letter-spacing: 0.4em; color: #aaa; display: block; margin-bottom: 5px; text-transform: uppercase; }
        .finp { background: transparent; border: none; border-bottom: 1.5px solid #e8d8b0; color: #1a1a1a; font-size: 13px; font-family: 'Barlow Condensed', sans-serif; width: 100%; padding: 7px 0; outline: none; }
        .finp:focus { border-bottom-color: #C8102E; }
        .fsel { background: white; border: none; border-bottom: 1.5px solid #e8d8b0; color: #1a1a1a; font-size: 12px; font-family: 'Barlow Condensed', sans-serif; width: 100%; padding: 7px 0; outline: none; }

        .btn-row { display: flex; gap: 10px; margin-top: 10px; }
        .btn-main { flex: 1; background: #C8102E; color: white; border: none; font-family: 'Barlow Condensed', sans-serif; font-size: 11px; letter-spacing: 0.35em; padding: 14px; cursor: pointer; text-transform: uppercase; border-radius: 2px; transition: background 0.2s; }
        .btn-main:hover { background: #8B0000; }
        .btn-main:disabled { background: #999; cursor: not-allowed; }
        .btn-clr { background: white; color: #aaa; border: 1px solid #e8d8b0; font-family: 'Barlow Condensed', sans-serif; font-size: 10px; padding: 14px 16px; cursor: pointer; border-radius: 2px; text-transform: uppercase; }

        .success-box { background: white; border: 1px solid #e8d8b0; border-radius: 3px; padding: 36px 24px; text-align: center; margin: 0 20px; box-shadow: 0 2px 16px rgba(139,70,20,0.08); }
        .s-emblem { margin: 0 auto 16px; }
        .s-title { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
        .s-ml { font-family: 'Noto Sans Malayalam', sans-serif; font-size: 12px; color: #888; line-height: 1.7; }
        .dl-btn { display: inline-flex; align-items: center; gap: 8px; background: #C8102E; color: white; border: none; font-family: 'Barlow Condensed', sans-serif; font-size: 11px; letter-spacing: 0.35em; padding: 14px 24px; cursor: pointer; margin-top: 20px; border-radius: 2px; text-transform: uppercase; }
      `}</style>

      <div className="mem-wrap w-full">
        <div className="site-header">
          <div className="dark-bar">
            <span className="db-txt">ഡി.വൈ.എഫ്.ഐ. പന്തുവിള യൂണിറ്റ്</span>
            <div className="db-dot"></div>
            <span className="db-txt">MEMBERSHIP REGISTRATION · അംഗത്വ രജിസ്ട്രേഷൻ</span>
            <div className="db-dot"></div>
            <span className="db-txt">THIRUVANANTHAPURAM</span>
          </div>
          <div className="red-header">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
              <circle cx="35" cy="62" r="20" stroke="white" strokeWidth="9" fill="none"/>
              <path d="M35 42 Q34 14 60 9 Q48 28 52 40" stroke="white" strokeWidth="9" fill="none" strokeLinecap="round"/>
              <rect x="46" y="28" width="9" height="46" rx="4" fill="white" transform="rotate(-44 50 51)"/>
              <rect x="49" y="49" width="30" height="9" rx="4" fill="white"/>
            </svg>
            <div className="rh-text">
              <div className="rh-dyfi">DYFI</div>
              <div className="rh-full">DEMOCRATIC YOUTH FEDERATION OF INDIA</div>
              <div className="rh-ml">ഡെമോക്രാറ്റിക് യൂത്ത് ഫെഡറേഷൻ ഓഫ് ഇന്ത്യ</div>
            </div>
            <div className="rh-divider"></div>
            <div className="branch-info">
              <div className="branch-name">PANTHUVILA UNIT</div>
              <div className="branch-ml">പന്തുവിള യൂണിറ്റ്</div>
              <div className="branch-dist">THIRUVANANTHAPURAM DISTRICT · KERALA</div>
            </div>
          </div>
        </div>

        <div className="card-zone">
          <p className="cz-label">MEMBERSHIP CARD PREVIEW · TYPE BELOW TO SEE YOUR CARD LIVE</p>

          <div className="h-card" ref={cardRef}>
            {/* TOP RED BAND */}
            <div className="h-card-top">
              <svg className="top-ornament" viewBox="0 0 600 72" preserveAspectRatio="xMidYMid slice">
                <circle cx="540" cy="36" r="80" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                <circle cx="540" cy="36" r="55" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                <circle cx="60" cy="36" r="60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <line x1="0" y1="68" x2="600" y2="68" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                <polygon points="280,8 290,28 270,28" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
                <polygon points="320,8 330,28 310,28" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
              </svg>
              <div className="top-content">
                <div className="tc-left">
                  <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                    <circle cx="35" cy="62" r="20" stroke="white" strokeWidth="9" fill="none"/>
                    <path d="M35 42 Q34 14 60 9 Q48 28 52 40" stroke="white" strokeWidth="9" fill="none" strokeLinecap="round"/>
                    <rect x="46" y="28" width="9" height="46" rx="4" fill="white" transform="rotate(-44 50 51)"/>
                    <rect x="49" y="49" width="30" height="9" rx="4" fill="white"/>
                  </svg>
                  <div className="tc-brand">
                    <div className="tc-dyfi">DYFI</div>
                    <div className="tc-org">DEMOCRATIC YOUTH FEDERATION OF INDIA</div>
                    <div className="tc-branch">PANTHUVILA UNIT · THIRUVANANTHAPURAM</div>
                  </div>
                </div>
                <div className="tc-right">
                  <div className="tc-id-lbl">MEMBER ID</div>
                  <div className="tc-id-val">{memberId}</div>
                </div>
              </div>
            </div>

            {/* GOLD ORNAMENT BAND */}
            <div className="ornament-band">
              <svg width="100%" height="14" viewBox="0 0 600 14" preserveAspectRatio="none">
                <rect width="600" height="14" fill="#6a0010"/>
                <line x1="0" y1="2" x2="600" y2="2" stroke="#c8a870" strokeWidth="0.5"/>
                <line x1="0" y1="12" x2="600" y2="12" stroke="#c8a870" strokeWidth="0.5"/>
                <g fill="#c8a870" opacity="0.7">
                  <rect x="20" y="5" width="12" height="4" rx="1"/>
                  <rect x="40" y="5" width="4" height="4" rx="1"/>
                  <rect x="52" y="5" width="12" height="4" rx="1"/>
                  <rect x="72" y="5" width="4" height="4" rx="1"/>
                  <rect x="84" y="5" width="12" height="4" rx="1"/>
                  <rect x="104" y="5" width="4" height="4" rx="1"/>
                  <rect x="116" y="5" width="12" height="4" rx="1"/>
                  <rect x="136" y="5" width="4" height="4" rx="1"/>
                  <rect x="148" y="5" width="12" height="4" rx="1"/>
                  <rect x="168" y="5" width="4" height="4" rx="1"/>
                  <rect x="180" y="5" width="12" height="4" rx="1"/>
                  <rect x="200" y="5" width="4" height="4" rx="1"/>
                  <rect x="212" y="5" width="12" height="4" rx="1"/>
                  <rect x="232" y="5" width="4" height="4" rx="1"/>
                  <rect x="244" y="5" width="12" height="4" rx="1"/>
                  <rect x="264" y="5" width="4" height="4" rx="1"/>
                  <polygon points="295,3 300,11 305,3" fill="#c8a870"/>
                  <rect x="316" y="5" width="12" height="4" rx="1"/>
                  <rect x="336" y="5" width="4" height="4" rx="1"/>
                  <rect x="348" y="5" width="12" height="4" rx="1"/>
                  <rect x="368" y="5" width="4" height="4" rx="1"/>
                  <rect x="380" y="5" width="12" height="4" rx="1"/>
                  <rect x="400" y="5" width="4" height="4" rx="1"/>
                  <rect x="412" y="5" width="12" height="4" rx="1"/>
                  <rect x="432" y="5" width="4" height="4" rx="1"/>
                  <rect x="444" y="5" width="12" height="4" rx="1"/>
                  <rect x="464" y="5" width="4" height="4" rx="1"/>
                  <rect x="476" y="5" width="12" height="4" rx="1"/>
                  <rect x="496" y="5" width="4" height="4" rx="1"/>
                  <rect x="508" y="5" width="12" height="4" rx="1"/>
                  <rect x="528" y="5" width="4" height="4" rx="1"/>
                  <rect x="540" y="5" width="12" height="4" rx="1"/>
                  <rect x="560" y="5" width="4" height="4" rx="1"/>
                  <rect x="572" y="5" width="12" height="4" rx="1"/>
                </g>
              </svg>
            </div>

            {/* CREAM HERITAGE ROW */}
            <div className="cream-heritage">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '12px', fontWeight: 700, color: '#8B0000', whiteSpace: 'nowrap' }}>EST. 1980</span>
              <div style={{ flex: 1, height: '1px', background: 'repeating-linear-gradient(90deg,#c8a870 0,#c8a870 3px,transparent 3px,transparent 7px)' }}></div>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.4 }}>
                  <circle cx="35" cy="62" r="20" stroke="#8B0000" strokeWidth="9" fill="none"/>
                  <path d="M35 42 Q34 14 60 9 Q48 28 52 40" stroke="#8B0000" strokeWidth="9" fill="none" strokeLinecap="round"/>
                  <rect x="46" y="28" width="9" height="46" rx="4" fill="#8B0000" transform="rotate(-44 50 51)"/>
                  <rect x="49" y="49" width="30" height="9" rx="4" fill="#8B0000"/>
                </svg>
              </div>
              <div style={{ flex: 1, height: '1px', background: 'repeating-linear-gradient(90deg,#c8a870 0,#c8a870 3px,transparent 3px,transparent 7px)' }}></div>
              <span style={{ fontFamily: "'Noto Sans Malayalam', sans-serif", fontSize: '9px', color: '#a08050', fontStyle: 'italic', whiteSpace: 'nowrap' }}>ജനങ്ങൾക്കായി · For the people</span>
              <div style={{ flex: 1, height: '1px', background: 'repeating-linear-gradient(90deg,#c8a870 0,#c8a870 3px,transparent 3px,transparent 7px)' }}></div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '12px', fontWeight: 700, color: '#8B0000', whiteSpace: 'nowrap' }}>CPI(M)</span>
            </div>

            {/* BODY */}
            <div className="card-body-wrap">
              <svg className="watermark" width="180" height="180" viewBox="0 0 100 100" fill="none">
                <circle cx="35" cy="62" r="20" stroke="#C8102E" strokeWidth="9" fill="none"/>
                <path d="M35 42 Q34 14 60 9 Q48 28 52 40" stroke="#C8102E" strokeWidth="9" fill="none" strokeLinecap="round"/>
                <rect x="46" y="28" width="9" height="46" rx="4" fill="#C8102E" transform="rotate(-44 50 51)"/>
                <rect x="49" y="49" width="30" height="9" rx="4" fill="#C8102E"/>
              </svg>

              <div className="member-section">
                <div className="photo-frame">
                  <div className="photo-corner pc-tl"></div>
                  <div className="photo-corner pc-tr"></div>
                  <div className="photo-corner pc-bl"></div>
                  <div className="photo-corner pc-br"></div>
                  <div className="photo-init">{initials}</div>
                  <div className="photo-lbl">PHOTO</div>
                </div>
                <div className="member-info">
                  <div className="mi-label">MEMBER NAME / അംഗത്തിന്റെ പേര്</div>
                  <div className="mi-name">{formData.name || 'Your Name Here'}</div>
                  <div className="mi-unit-lbl">UNIT</div>
                  <div className="mi-unit">DYFI PANTHUVILA UNIT</div>
                  <div className="mi-fields">
                    <div>
                      <div className="mif-lbl">WARD / വാർഡ്</div>
                      <div className="mif-val">{formData.ward ? formData.ward.toUpperCase() : '—'}</div>
                    </div>
                    <div>
                      <div className="mif-lbl">MOBILE</div>
                      <div className="mif-val">{formData.phone ? formData.phone.slice(-10) : '—'}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="details-band">
                <div className="db-item">
                  <div className="db-lbl">AGE / പ്രായം</div>
                  <div className="db-val">{formData.age || '—'}</div>
                </div>
                <div className="db-item">
                  <div className="db-lbl">OCCUPATION</div>
                  <div className="db-val">{formData.occ || '—'}</div>
                </div>
                <div className="db-item" style={{ borderRight: 'none' }}>
                  <div className="db-lbl">EDUCATION</div>
                  <div className="db-val">{formData.edu || '—'}</div>
                </div>
              </div>

              <div className="card-footer">
                <div className="cf-valid">
                  <div className="cf-valid-lbl">VALID PERIOD</div>
                  <div className="cf-valid-val">2025 — 2026</div>
                </div>
                <div className="cf-center">
                  <div className="cf-stars">
                    <span className="cf-star">★</span>
                    <span className="cf-star">★</span>
                    <span className="cf-star">★</span>
                  </div>
                  <div className="cf-issued">ISSUED BY DYFI PANTHUVILA UNIT COMMITTEE</div>
                </div>
                <div className="cf-right">
                  <div className="cf-sign-lbl">UNIT SECRETARY</div>
                  <div className="cf-sign-line"></div>
                  <div className="cf-sign-name">PANTHUVILA UNIT</div>
                </div>
              </div>
            </div>

            {/* BOTTOM GOLD BAND */}
            <div className="ornament-band">
              <svg width="100%" height="14" viewBox="0 0 600 14" preserveAspectRatio="none">
                <rect width="600" height="14" fill="#6a0010"/>
                <line x1="0" y1="2" x2="600" y2="2" stroke="#c8a870" strokeWidth="0.5"/>
                <line x1="0" y1="12" x2="600" y2="12" stroke="#c8a870" strokeWidth="0.5"/>
                <g fill="#c8a870" opacity="0.6">
                  <rect x="20" y="5" width="560" height="4" rx="1" fill="none" stroke="#c8a870" strokeWidth="0.3"/>
                  <rect x="30" y="5" width="8" height="4" rx="1"/>
                  <rect x="46" y="5" width="8" height="4" rx="1"/>
                  <rect x="62" y="5" width="8" height="4" rx="1"/>
                  <rect x="78" y="5" width="8" height="4" rx="1"/>
                  <rect x="94" y="5" width="8" height="4" rx="1"/>
                  <rect x="110" y="5" width="8" height="4" rx="1"/>
                  <rect x="126" y="5" width="8" height="4" rx="1"/>
                  <rect x="142" y="5" width="8" height="4" rx="1"/>
                  <rect x="158" y="5" width="8" height="4" rx="1"/>
                  <rect x="174" y="5" width="8" height="4" rx="1"/>
                  <rect x="190" y="5" width="8" height="4" rx="1"/>
                  <rect x="206" y="5" width="8" height="4" rx="1"/>
                  <rect x="222" y="5" width="8" height="4" rx="1"/>
                  <rect x="238" y="5" width="8" height="4" rx="1"/>
                  <polygon points="297,2 303,12 291,12" fill="#c8a870"/>
                  <rect x="314" y="5" width="8" height="4" rx="1"/>
                  <rect x="330" y="5" width="8" height="4" rx="1"/>
                  <rect x="346" y="5" width="8" height="4" rx="1"/>
                  <rect x="362" y="5" width="8" height="4" rx="1"/>
                  <rect x="378" y="5" width="8" height="4" rx="1"/>
                  <rect x="394" y="5" width="8" height="4" rx="1"/>
                  <rect x="410" y="5" width="8" height="4" rx="1"/>
                  <rect x="426" y="5" width="8" height="4" rx="1"/>
                  <rect x="442" y="5" width="8" height="4" rx="1"/>
                  <rect x="458" y="5" width="8" height="4" rx="1"/>
                  <rect x="474" y="5" width="8" height="4" rx="1"/>
                  <rect x="490" y="5" width="8" height="4" rx="1"/>
                  <rect x="506" y="5" width="8" height="4" rx="1"/>
                  <rect x="522" y="5" width="8" height="4" rx="1"/>
                  <rect x="538" y="5" width="8" height="4" rx="1"/>
                  <rect x="554" y="5" width="8" height="4" rx="1"/>
                </g>
              </svg>
            </div>

            <div className="card-dark-foot">
              <span className="cdf-txt">DEMOCRATIC YOUTH FEDERATION OF INDIA · PANTHUVILA UNIT</span>
              <span className="cdf-ml">ജനകീയ ജനാധിപത്യം</span>
            </div>
          </div>
        </div>

        {!submitted ? (
          <div className="form-zone" id="form-area">
            <div className="fz-title">FILL YOUR DETAILS · വിവരങ്ങൾ നൽകൂ</div>

            <div className="fcard">
              <div className="fcard-title">PERSONAL DETAILS · വ്യക്തിഗത വിവരങ്ങൾ</div>
              <div className="fgrid">
                <div className="ff">
                  <label className="flbl">FULL NAME / പൂർണ്ണ നാമം *</label>
                  <input className="finp" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter full name" />
                </div>
                <div className="ff">
                  <label className="flbl">MOBILE / ഫോൺ *</label>
                  <input className="finp" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="ff">
                  <label className="flbl">AGE / പ്രായം *</label>
                  <input className="finp" name="age" type="number" min="14" max="35" value={formData.age} onChange={handleInputChange} placeholder="Age" />
                </div>
                <div className="ff">
                  <label className="flbl">DATE OF BIRTH</label>
                  <input className="finp" name="dob" type="date" value={formData.dob} onChange={handleInputChange} />
                </div>
              </div>
            </div>

            <div className="fcard">
              <div className="fcard-title">ADDRESS · വിലാസം</div>
              <div className="fgrid">
                <div className="ff">
                  <label className="flbl">WARD / വാർഡ്</label>
                  <input className="finp" name="ward" value={formData.ward} onChange={handleInputChange} placeholder="Ward name / number" />
                </div>
                <div className="ff">
                  <label className="flbl">HOUSE NAME / വീടിന്റെ പേര്</label>
                  <input className="finp" name="house" value={formData.house} onChange={handleInputChange} placeholder="House name" />
                </div>
                <div className="ff full">
                  <label className="flbl">FULL ADDRESS / പൂർണ്ണ വിലാസം</label>
                  <input className="finp" name="addr" value={formData.addr} onChange={handleInputChange} placeholder="Street, area, pin code" />
                </div>
              </div>
            </div>

            <div className="fcard">
              <div className="fcard-title">OTHER DETAILS · മറ്റ് വിവരങ്ങൾ</div>
              <div className="fgrid">
                <div className="ff">
                  <label className="flbl">OCCUPATION / തൊഴിൽ</label>
                  <select className="fsel" name="occ" value={formData.occ} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="ff">
                  <label className="flbl">EDUCATION / വിദ്യാഭ്യാസം</label>
                  <select className="fsel" name="edu" value={formData.edu} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="SSLC">SSLC</option>
                    <option value="Plus Two">Plus Two</option>
                    <option value="Degree">Degree</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="ff">
                  <label className="flbl">RELIGION / മതം</label>
                  <select className="fsel" name="religion" value={formData.religion} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="ff">
                  <label className="flbl">CASTE (optional)</label>
                  <input className="finp" name="caste" value={formData.caste} onChange={handleInputChange} placeholder="Optional" />
                </div>
              </div>
            </div>

            <div className="btn-row">
              <button className="btn-clr" onClick={clearAll} disabled={isGenerating}>CLEAR</button>
              <button className="btn-main" onClick={handleSubmit} disabled={isGenerating}>
                {isGenerating ? 'GENERATING...' : 'GENERATE MEMBERSHIP CARD + DOWNLOAD PDF →'}
              </button>
            </div>
            <p style={{ fontSize: '7px', letterSpacing: '0.2em', color: '#bbb', textAlign: 'center', marginTop: '10px', textTransform: 'uppercase' }}>
              * Unit secretary will contact you within 48 hours · വിവരങ്ങൾ സുരക്ഷിതം
            </p>
          </div>
        ) : (
          <div className="success-box" id="suc">
            <svg className="s-emblem" width="56" height="56" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" fill="#C8102E"/>
              <polyline points="28,52 44,68 72,36" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <div className="s-title">Welcome to DYFI!</div>
            <p className="s-ml">നിങ്ങൾ DYFI പന്തുവിള യൂണിറ്റ് അംഗമായി!<br/>You have joined DYFI Panthuvila Unit.<br/><br/>Member ID: <strong style={{ color: '#C8102E' }}>{memberId}</strong></p>
            <button className="dl-btn" onClick={() => {
              setSubmitted(false);
              clearAll();
            }}>
              START NEW REGISTRATION
            </button>
            <p style={{ fontSize: '7px', letterSpacing: '0.2em', color: '#bbb', marginTop: '14px', textTransform: 'uppercase' }}>
              Unit secretary will contact you within 48 hours to complete your registration.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
