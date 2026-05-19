'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Member {
  init: string;
  role: string;
  roleMl: string;
  name: string;
  nameMl: string;
  image: string;
}

const MEMBERS: Member[] = [
  {
    init: 'A',
    role: 'JOINT SECRETARY',
    roleMl: 'ജോയിന്റ് സെക്രട്ടറി',
    name: 'ABHISHEK M.R.',
    nameMl: 'അഭിഷേക് എം.ആർ.',
    image: '/commit_meb/Abhishek M R.jpeg',
  },
  {
    init: 'A',
    role: 'TREASURER',
    roleMl: 'ട്രഷറർ',
    name: 'AMAL C.',
    nameMl: 'അമൽ സി.',
    image: '/commit_meb/Amal C.jpeg',
  },
  {
    init: 'A',
    role: 'CULTURAL SECRETARY',
    roleMl: 'സാംസ്കാരിക സെക്രട്ടറി',
    name: 'AKHIL C.',
    nameMl: 'അഖിൽ സി.',
    image: '/commit_meb/Akhil C.png',
  },
  {
    init: 'A',
    role: 'STUDENT WING',
    roleMl: 'സ്റ്റുഡന്റ് വിങ്',
    name: 'AROMAL',
    nameMl: 'അരോമൽ',
    image: '/commit_meb/Aromal.jpeg',
  },
  {
    init: 'D',
    role: 'SPORTS SECRETARY',
    roleMl: 'സ്പോർട്സ് സെക്രട്ടറി',
    name: 'DON BSD',
    nameMl: 'ഡോൺ ബി.എസ്.ഡി.',
    image: '/commit_meb/Don Bsd.jpeg',
  },
  {
    init: 'W',
    role: 'WOMEN SECRETARY',
    roleMl: 'വനിതാ സെക്രട്ടറി',
    name: 'TO BE UPDATED',
    nameMl: 'പിന്നീട് ചേർക്കും',
    image: '/commit_meb/women-secretary.jpg',
  },
  {
    init: 'WM',
    role: 'WARD MEMBER',
    roleMl: 'വാർഡ് മെമ്പർ',
    name: 'TO BE UPDATED',
    nameMl: 'പിന്നീട് ചേർക്കും',
    image: '/commit_meb/ward-member-1.jpg',
  },
];

interface MembersSectionProps {
  lang: 'en' | 'ml';
}

export default function MembersSection({ lang }: MembersSectionProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 90, damping: 14 },
    },
  };

  return (
    <section id="s-members">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-label">03 / LEADERSHIP</div>
        <div className="sec-title">
          BRANCH<br />
          <span style={{ color: 'var(--red)' }}>COMMITTEE</span>
        </div>
        <div className="sec-title-ml ml">നേതൃത്വം · പന്തുവിള യൂണിറ്റ്</div>
      </motion.div>

      {/* Top Secretary and President Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="members-top"
      >
        <motion.div variants={itemVariants} className="member-card leader">
          <div className="mc-photo" style={{ overflow: 'hidden', padding: 0 }}>
            <img
              src="/commit_meb/Abhinesh M R.jpeg"
              alt="Branch Secretary"
              onError={(e) => {
                // Falls back gracefully if image does not exist
                (e.target as HTMLElement).style.display = 'none';
                const parent = (e.target as HTMLElement).parentElement;
                if (parent) {
                  const fallbackText = document.createTextNode('S');
                  parent.appendChild(fallbackText);
                  parent.style.display = 'flex';
                  parent.style.alignItems = 'center';
                  parent.style.justifyContent = 'center';
                }
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="mc-role">
            {lang === 'ml' ? 'യൂണിറ്റ് സെക്രട്ടറി' : 'BRANCH SECRETARY'}
          </div>
          <div className="mc-name">{lang === 'ml' ? 'അഭിനേഷ് എം.ആർ.' : 'ABHINESH M.R.'}</div>
          <div className="mc-ml ml">യൂണിറ്റ് സെക്രട്ടറി</div>
        </motion.div>

        <motion.div variants={itemVariants} className="member-card leader">
          <div className="mc-photo" style={{ overflow: 'hidden', padding: 0 }}>
            <img
              src="/commit_meb/Aginshanth A G.jpeg"
              alt="Branch President"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
                const parent = (e.target as HTMLElement).parentElement;
                if (parent) {
                  const fallbackText = document.createTextNode('P');
                  parent.appendChild(fallbackText);
                  parent.style.display = 'flex';
                  parent.style.alignItems = 'center';
                  parent.style.justifyContent = 'center';
                }
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="mc-role">
            {lang === 'ml' ? 'യൂണിറ്റ് പ്രസിഡന്റ്' : 'BRANCH PRESIDENT'}
          </div>
          <div className="mc-name">{lang === 'ml' ? 'അജിൻഷാന്ത് എ.ജി.' : 'AGINSHANTH A.G.'}</div>
          <div className="mc-ml ml">യൂണിറ്റ് പ്രസിഡന്റ്</div>
        </motion.div>
      </motion.div>

      {/* Sub-committee Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="members-grid"
      >
        {MEMBERS.map((m, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="member-sm"
          >
            <div className="mc-photo-sm" style={{ overflow: 'hidden', padding: 0 }}>
              <img
                src={m.image}
                alt={m.name}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    const fallbackText = document.createTextNode(m.init);
                    parent.appendChild(fallbackText);
                    parent.style.display = 'flex';
                    parent.style.alignItems = 'center';
                    parent.style.justifyContent = 'center';
                  }
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="mc-role-sm">{lang === 'ml' ? m.roleMl : m.role}</div>
            <div className="mc-name-sm">{lang === 'ml' ? m.nameMl : m.name}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="admin-note"
      >
        🔒 Member profiles are managed by DYFI Panthuvila admin team. Contact branch secretary to update.
      </motion.div>
    </section>
  );
}
