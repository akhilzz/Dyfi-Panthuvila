'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LeaderSlideshow from '@/components/LeaderSlideshow';
import MembersSection from '@/components/MembersSection';
import AchievementsGrid from '@/components/AchievementsGrid';
import EventsGallery from '@/components/EventsGallery';
import SupportSection from '@/components/SupportSection';
import NivedanamForm from '@/components/NivedanamForm';
import NewsGrid from '@/components/NewsGrid';
import MembershipForm from '@/components/MembershipForm';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ml'>('ml');

  return (
    <main 
      className="relative min-height-screen overflow-x-hidden selection:bg-[var(--dyfi-red)] selection:text-white"
      style={{ 
        background: 'var(--dyfi-charcoal)', 
        minHeight: '100vh'
      }}
    >
      {/* Top Fixed Navigation Bar */}
      <Navbar lang={lang} onLangChange={setLang} />
      
      {/* Section 1: Hero Cover */}
      <HeroSection lang={lang} />

      {/* Section 2: Kerala Communist Leaders History Grid */}
      <LeaderSlideshow lang={lang} />

      {/* Section 3: Branch Committee Members List */}
      <MembersSection lang={lang} />

      {/* Section 4: Achievements Statistics and Program Grid */}
      <AchievementsGrid lang={lang} />

      {/* Section 5: Filterable Events Gallery */}
      <EventsGallery lang={lang} />

      {/* Section 6: Care Cards support details */}
      <SupportSection lang={lang} />

      {/* Section 7: Nivedanam Grievance Form */}
      <NivedanamForm lang={lang} />

      {/* Section 8: Local, State and Global News Grid */}
      <NewsGrid lang={lang} />

      {/* Section 9: Join Membership Form and Card */}
      <MembershipForm />
      
      {/* Footer Block */}
      <Footer />
    </main>
  );
}
