'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NivedanamFormProps {
  lang: 'en' | 'ml';
}

export default function NivedanamForm({ lang }: NivedanamFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [category, setCategory] = useState('Old Age Support');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="s-niv">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-label">08 / YOUR VOICE</div>
        <div className="sec-title">
          NIVE<span style={{ color: 'var(--red)' }}>DANAM</span>
        </div>
        <div className="sec-title-ml ml">നിവേദനം</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: 'spring' as const, stiffness: 80, damping: 15 }}
        className="niv-card"
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="niv-success ml"
          >
            <div className="niv-check">✓</div>
            <div className="niv-ok">നിവേദനം സ്വീകരിച്ചു</div>
            <div className="niv-ok-sub">
              Received. We will respond within 48 hours.<br />
              48 മണിക്കൂറിനുള്ളിൽ ഞങ്ങൾ ബന്ധപ്പെടും.
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="niv-submit"
              style={{ marginTop: '24px' }}
            >
              SUBMIT ANOTHER GRIEVANCE
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="niv-title">SUBMIT GRIEVANCE</div>
            <div className="niv-sub">
              Submit your grievance to DYFI Panthuvila Branch. We respond within 48 hours. / നിങ്ങളുടെ പ്രശ്നം സമർപ്പിക്കൂ.
            </div>

            <div className="niv-field">
              <label className="niv-label">FULL NAME / പൂർണ്ണ നാമം</label>
              <input type="text" className="niv-input" required placeholder="Your name" />
            </div>

            <div className="niv-field">
              <label className="niv-label">MOBILE / ഫോൺ</label>
              <input type="tel" className="niv-input" required placeholder="+91" />
            </div>

            <div className="niv-field">
              <label className="niv-label">WARD / വാർഡ്</label>
              <input type="text" className="niv-input" required placeholder="Ward name or number" />
            </div>

            <div className="niv-field">
              <label className="niv-label">CATEGORY / വിഭാഗം</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="niv-select"
              >
                <option value="Old Age Support">Old Age Support</option>
                <option value="Medical Aid">Medical Aid</option>
                <option value="Education">Education</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="niv-field">
              <label className="niv-label">MESSAGE / സന്ദേശം</label>
              <textarea
                className="niv-textarea"
                required
                placeholder="Describe your issue..."
              ></textarea>
            </div>

            <button type="submit" className="niv-submit">
              SUBMIT NIVEDANAM →
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
