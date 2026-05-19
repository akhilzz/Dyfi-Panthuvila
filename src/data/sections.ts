export type ScrollPhase = {
  scrollStart: number;
  scrollEnd: number;
  headlineEn: string;
  headlineMl: string;
  subheadlineEn: string;
  subheadlineMl: string;
  paragraphEn: string;
  paragraphMl: string;
  alignment: 'left' | 'right' | 'center';
  accentColor?: string;
};

export type SectionData = {
  id: string;
  label: string;
  labelMl: string;
  stickyHeight: string;
  accentLabel: string;
  phases: ScrollPhase[];
};

export const SECTIONS: SectionData[] = [
  {
    id: 'hero',
    label: 'DYFI PANTHUVILA',
    labelMl: 'ഡി.വൈ.എഫ്.ഐ. പന്തുവിള',
    stickyHeight: '285vh',
    accentLabel: '01 / PANTHUVILA BRANCH',
    phases: [
      {
        scrollStart: 0,
        scrollEnd: 0.25,
        headlineEn: '',
        headlineMl: '',
        subheadlineEn: '',
        subheadlineMl: '',
        paragraphEn: '',
        paragraphMl: '',
        alignment: 'center'
      },
      {
        scrollStart: 0.25,
        scrollEnd: 0.7,
        headlineEn: 'For the\npeople.',
        headlineMl: 'ജനങ്ങൾക്കായി',
        subheadlineEn: 'Democratic Youth Federation of India',
        subheadlineMl: 'ഡെമോക്രാറ്റിക് യൂത്ത് ഫെഡറേഷൻ ഓഫ് ഇന്ത്യ',
        paragraphEn: 'Panthuvila Branch · Thiruvananthapuram. Building a just, equal and progressive Kerala through youth power.',
        paragraphMl: 'പന്തുവിള യൂണിറ്റ് · തിരുവനന്തപുരം. യുവശക്തിയിലൂടെ നീതിയുക്തവും സമത്വപൂർണ്ണവുമായ കേരളം.',
        alignment: 'left'
      },
      {
        scrollStart: 0.7,
        scrollEnd: 1.0,
        headlineEn: 'Organised.\nUnited.\nUnstoppable.',
        headlineMl: 'സംഘടിതം.\nഐക്യം.\nഅപ്രതിരോധ്യം.',
        subheadlineEn: 'Since 1980',
        subheadlineMl: '1980 മുതൽ',
        paragraphEn: 'From the streets to the assembly. DYFI has stood for Kerala\'s youth across every generation.',
        paragraphMl: '',
        alignment: 'right'
      }
    ]
  },
  {
    id: 'history',
    label: 'HISTORY',
    labelMl: 'ചരിത്രം',
    stickyHeight: '285vh',
    accentLabel: '02 / THE LEGACY',
    phases: [
      {
        scrollStart: 0,
        scrollEnd: 0.2,
        headlineEn: 'LEADERS WHO\nSHAPED\nKERALA.',
        headlineMl: 'കേരളം\nകണ്ട\nനേതാക്കൾ.',
        subheadlineEn: 'COMMUNIST CHIEF MINISTERS',
        subheadlineMl: 'കമ്മ്യൂണിസ്റ്റ് മുഖ്യമന്ത്രിമാർ',
        paragraphEn: '',
        paragraphMl: '',
        alignment: 'center'
      },
      {
        scrollStart: 0.2,
        scrollEnd: 0.6,
        headlineEn: 'EMS.\nThe first.',
        headlineMl: 'ഇ.എം.എസ്.\nആദ്യത്തെ ആൾ.',
        subheadlineEn: '1957 — A NEW KERALA',
        subheadlineMl: '1957 — പുതിയ കേരളം',
        paragraphEn: 'E. M. S. Namboodiripad led the first elected communist government in the world. He proved that radical change is possible through democratic means.',
        paragraphMl: 'ജനാധിപത്യ മാർഗ്ഗത്തിലൂടെ വിപ്ലവകരമായ മാറ്റം സാദ്ധ്യമാണ് എന്ന് ഇ.എം.എസ്. ലോകത്തിന് കാണിച്ചുകൊടുത്തു.',
        alignment: 'left'
      },
      {
        scrollStart: 0.6,
        scrollEnd: 1.0,
        headlineEn: 'A living\ntradition.',
        headlineMl: 'ജീവിക്കുന്ന\nപാരമ്പര്യം.',
        subheadlineEn: 'CARRYING THE FLAME',
        subheadlineMl: 'ജ്വാല ഏറ്റുവാങ്ങി',
        paragraphEn: 'From EMS to Pinarayi. Five leaders. One unbroken commitment to the working class of Kerala.',
        paragraphMl: 'ഇ.എം.എസ്. മുതൽ പിണറായി വരെ. അഞ്ച് നേതാക്കൾ. ഒരൊറ്റ പ്രതിബദ്ധത.',
        alignment: 'right'
      }
    ]
  },
  {
    id: 'achievements',
    label: 'ACHIEVEMENTS',
    labelMl: 'നേട്ടങ്ങൾ',
    stickyHeight: '285vh',
    accentLabel: '03 / WHAT WE DID',
    phases: [
      {
        scrollStart: 0,
        scrollEnd: 0.3,
        headlineEn: 'Action,\nnot words.',
        headlineMl: 'വാക്കല്ല,\nകർമ്മം.',
        subheadlineEn: 'OUR PROGRAMS',
        subheadlineMl: 'ഞങ്ങളുടെ പരിപാടികൾ',
        paragraphEn: '',
        paragraphMl: '',
        alignment: 'center'
      },
      {
        scrollStart: 0.3,
        scrollEnd: 0.65,
        headlineEn: 'Built for\ncommunity.',
        headlineMl: 'സമൂഹത്തിനായി\nനിർമ്മിച്ചത്.',
        subheadlineEn: 'BRANCH PROGRAMS',
        subheadlineMl: 'യൂണിറ്റ് പരിപാടികൾ',
        paragraphEn: 'Blood donation camps, literacy drives, infrastructure support, flood relief, pandemic response — DYFI Panthuvila at the front line.',
        paragraphMl: 'രക്തദാന ക്യാമ്പ്, സാക്ഷരത, അടിസ്ഥാന സൗകര്യം, വെള്ളപ്പൊക്ക ദുരിതാശ്വാസം — DYFI പന്തുവിള എപ്പോഴും മുന്നിൽ.',
        alignment: 'left'
      },
      {
        scrollStart: 0.65,
        scrollEnd: 1.0,
        headlineEn: 'Numbers\ndon\'t lie.',
        headlineMl: 'സംഖ്യകൾ\nസത്യം പറയും.',
        subheadlineEn: 'IMPACT THIS YEAR',
        subheadlineMl: 'ഈ വർഷത്തെ സ്വാധീനം',
        paragraphEn: '50+ programs. 10,000+ beneficiaries. One district. All for the people.',
        paragraphMl: '',
        alignment: 'right'
      }
    ]
  },
  {
    id: 'students',
    label: 'STUDENTS',
    labelMl: 'വിദ്യാർത്ഥികൾ',
    stickyHeight: '285vh',
    accentLabel: '04 / TOMORROW\'S VOICE',
    phases: [
      {
        scrollStart: 0,
        scrollEnd: 0.28,
        headlineEn: 'You are\nthe future.',
        headlineMl: 'നിങ്ങളാണ്\nഭാവി.',
        subheadlineEn: 'STUDENT GREETINGS',
        subheadlineMl: 'വിദ്യാർത്ഥി ആശംസകൾ',
        paragraphEn: '',
        paragraphMl: '',
        alignment: 'center'
      },
      {
        scrollStart: 0.28,
        scrollEnd: 0.65,
        headlineEn: '10th.\nCongratulations.',
        headlineMl: 'പത്താം ക്ലാസ്.\nആശംസകൾ.',
        subheadlineEn: 'CLASS X ACHIEVERS',
        subheadlineMl: 'ക്ലാസ് X നേട്ടക്കാർ',
        paragraphEn: 'To every student who cleared their SSLC — DYFI Panthuvila salutes your hard work and dedication.',
        paragraphMl: 'SSLC ജയിച്ച ഓരോ വിദ്യാർത്ഥിക്കും DYFI പന്തുവിള യൂണിറ്റ് ആശംസകൾ നേരുന്നു.',
        alignment: 'left'
      },
      {
        scrollStart: 0.65,
        scrollEnd: 1.0,
        headlineEn: 'Plus Two.\nKeep going.',
        headlineMl: 'പ്ലസ് ടു.\nതുടരൂ.',
        subheadlineEn: 'HIGHER SECONDARY ACHIEVERS',
        subheadlineMl: 'ഹയർ സെക്കൻഡറി',
        paragraphEn: 'Your Plus Two result is a stepping stone. Whatever your score, your future is yours to define.',
        paragraphMl: '',
        alignment: 'right'
      }
    ]
  },
  {
    id: 'support',
    label: 'SUPPORT',
    labelMl: 'പിന്തുണ',
    stickyHeight: '285vh',
    accentLabel: '05 / CARE',
    phases: [
      {
        scrollStart: 0,
        scrollEnd: 0.25,
        headlineEn: 'Nobody\nleft behind.',
        headlineMl: 'ആരും\nഒറ്റയ്ക്കല്ല.',
        subheadlineEn: 'SUPPORT FUND',
        subheadlineMl: 'ആശ്വാസ നിധി',
        paragraphEn: '',
        paragraphMl: '',
        alignment: 'center'
      },
      {
        scrollStart: 0.25,
        scrollEnd: 0.65,
        headlineEn: 'For the\nelderly.',
        headlineMl: 'മുതിർന്നവർക്ക്\nഒപ്പം.',
        subheadlineEn: 'OLD AGE SUPPORT',
        subheadlineMl: 'വൃദ്ധജന പിന്തുണ',
        paragraphEn: 'DYFI Panthuvila provides financial assistance, medical support and companionship to elderly citizens in need.',
        paragraphMl: 'ആശ്രയമില്ലാത്ത വൃദ്ധർക്ക് സാമ്പത്തിക സഹായവും ആരോഗ്യ പിന്തുണയും DYFI പന്തുവിള നൽകുന്നു.',
        alignment: 'left'
      },
      {
        scrollStart: 0.65,
        scrollEnd: 1.0,
        headlineEn: 'Illness\nshould not\nmean poverty.',
        headlineMl: 'രോഗം\nദാരിദ്ര്യം\nആകരുത്.',
        subheadlineEn: 'MEDICAL AID FUND',
        subheadlineMl: 'വൈദ്യ സഹായ നിധി',
        paragraphEn: 'We raise funds and coordinate support for families facing serious illness. Apply through Nivedanam below.',
        paragraphMl: '',
        alignment: 'right'
      }
    ]
  },
  {
    id: 'nivedanam',
    label: 'NIVEDANAM',
    labelMl: 'നിവേദനം',
    stickyHeight: '285vh',
    accentLabel: '06 / YOUR VOICE',
    phases: [
      {
        scrollStart: 0,
        scrollEnd: 0.3,
        headlineEn: 'We listen.',
        headlineMl: 'ഞങ്ങൾ\nകേൾക്കുന്നു.',
        subheadlineEn: 'PUBLIC COMPLAINT PORTAL',
        subheadlineMl: 'പൊതുജന നിവേദനം',
        paragraphEn: '',
        paragraphMl: '',
        alignment: 'center'
      },
      {
        scrollStart: 0.3,
        scrollEnd: 1.0,
        headlineEn: 'Submit your\nnivedanam.',
        headlineMl: 'നിവേദനം\nസമർപ്പിക്കൂ.',
        subheadlineEn: 'REACH THE COMMITTEE',
        subheadlineMl: 'കമ്മിറ്റിയെ സമീപിക്കൂ',
        paragraphEn: 'Submit your grievance, request or report to DYFI Panthuvila Branch Committee. All submissions are reviewed within 48 hours.',
        paragraphMl: 'നിങ്ങളുടെ പ്രശ്നങ്ങൾ പന്തുവിള യൂണിറ്റ് കമ്മിറ്റി മുൻപാകെ സമർപ്പിക്കൂ. 48 മണിക്കൂറിനുള്ളിൽ ഞങ്ങൾ ബന്ധപ്പെടും.',
        alignment: 'center'
      }
    ]
  },
  {
    id: 'news',
    label: 'NEWS',
    labelMl: 'വാർത്ത',
    stickyHeight: '285vh',
    accentLabel: '07 / THE WORLD',
    phases: [
      {
        scrollStart: 0,
        scrollEnd: 0.3,
        headlineEn: 'Informed\nyouth.\nStrong\nmovement.',
        headlineMl: 'അറിവുള്ള\nയുവത.\nശക്തമായ\nമുന്നേറ്റം.',
        subheadlineEn: 'NEWS & ARTICLES',
        subheadlineMl: 'വാർത്തകളും ലേഖനങ്ങളും',
        paragraphEn: '',
        paragraphMl: '',
        alignment: 'center'
      },
      {
        scrollStart: 0.3,
        scrollEnd: 1.0,
        headlineEn: 'Local.\nNational.\nGlobal.',
        headlineMl: 'പ്രാദേശികം.\nദേശീയം.\nആഗോളം.',
        subheadlineEn: 'LIVE REPORTING',
        subheadlineMl: 'തത്സമയ റിപ്പോർട്ടിംഗ്',
        paragraphEn: 'Breaking news, progressive world articles and DYFI official statements — curated for the politically aware youth of Panthuvila.',
        paragraphMl: 'പ്രാദേശികവും ആഗോളവുമായ പ്രധാന വാർത്തകൾ — പന്തുവിളയിലെ യുവജനങ്ങൾക്കായി തത്സമയം.',
        alignment: 'left'
      }
    ]
  }
];
