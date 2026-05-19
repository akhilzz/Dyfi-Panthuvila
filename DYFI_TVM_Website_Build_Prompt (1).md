# DYFI Thiruvananthapuram District — Complete Website Build Guide
### Modelled on the F1 Arch Antigravity Pattern | Next.js 14 + Framer Motion

---

## TECH STACK
- Next.js 14 App Router, TypeScript, Tailwind CSS v4, Framer Motion
- Vercel deployment
- Sanity CMS (for 2–3 admin team content management)
- Bilingual: Malayalam + English

---

## DESIGN SYSTEM (Communist Minimal)

```
--dyfi-red:       #C8102E   /* DYFI/CPM primary red */
--dyfi-cream:     #F5F0E8   /* Off-white / cream */
--dyfi-darkred:   #8B0000   /* Deep accent */
--dyfi-charcoal:  #1A1A1A   /* Near-black backgrounds */
--dyfi-gold:      #C9A84C   /* Subtle gold for stars/accents */
--dyfi-paper:     #EDE8DC   /* Section backgrounds */
--font-display:   'Barlow Condensed', monospace
--font-body:      'Noto Sans Malayalam', system-ui, sans-serif
```

### Typography Rules
- Display / headings: Barlow Condensed, weight 700–900, uppercase
- Body / Malayalam text: Noto Sans Malayalam, weight 400–500
- Import both from Google Fonts in layout.tsx

---

## SECTION ARCHITECTURE

Total scroll height: **2000vh**
Each section: **~285vh** (7 sections)

| Section | ID | Range | Content |
|---|---|---|---|
| 1 | hero | 0–0.143 | Cinematic hero with hammer-sickle particle |
| 2 | history | 0.143–0.286 | Leader slideshow (Kerala communist CMs) |
| 3 | achievements | 0.286–0.429 | Programs & achievements |
| 4 | students | 0.429–0.571 | Student greetings (10th, Plus Two) |
| 5 | support | 0.571–0.714 | Old age & illness support fund |
| 6 | nivedanam | 0.714–0.857 | Public complaint / report portal |
| 7 | news | 0.857–1.0 | Live news + world articles |

---

## COMMUNIST LEADERS DATA

Kerala Communist Chief Ministers to feature in the History slideshow:

```ts
export const KERALA_CM_LEADERS = [
  {
    name: "E. M. S. Namboodiripad",
    malayalamName: "ഇ. എം. എസ്. നമ്പൂതിരിപ്പാട്",
    period: "1957–1959 | 1967–1969",
    title: "First Communist Chief Minister of Kerala",
    quote: "The real strength of a party lies in its connection with the masses.",
    party: "CPI(M)",
    imagePath: "/leaders/ems.jpg",
  },
  {
    name: "C. Achutha Menon",
    malayalamName: "സി. അച്യുതമേനോൻ",
    period: "1969–1977",
    title: "Chief Minister of Kerala",
    quote: "Progress is built on the foundation of the people's trust.",
    party: "CPI",
    imagePath: "/leaders/achutha-menon.jpg",
  },
  {
    name: "E. K. Nayanar",
    malayalamName: "ഇ. കെ. നായനാർ",
    period: "1980–1981 | 1987–1991 | 1996–2001",
    title: "Three-term Chief Minister of Kerala",
    quote: "Democracy means power to the working class.",
    party: "CPI(M)",
    imagePath: "/leaders/nayanar.jpg",
  },
  {
    name: "V. S. Achuthanandan",
    malayalamName: "വി. എസ്. അച്യുതാനന്ദൻ",
    period: "2006–2011",
    title: "Chief Minister of Kerala",
    quote: "Corruption is the enemy of the people.",
    party: "CPI(M)",
    imagePath: "/leaders/vs.jpg",
  },
  {
    name: "Pinarayi Vijayan",
    malayalamName: "പിണറായി വിജയൻ",
    period: "2016–present",
    title: "Chief Minister of Kerala",
    quote: "Development and social justice must walk hand in hand.",
    party: "CPI(M)",
    imagePath: "/leaders/pinarayi.jpg",
  },
];
```

> **Note:** Add their photos to `public/leaders/` — use official CPM/government press images.

---

## ANTIGRAVITY MESSAGE 1
### Builds: `layout.tsx`, `globals.css`, `data/sections.ts`, `data/leaders.ts`

```
I am building a cinematic bilingual (Malayalam + English) political organisation
website called DYFI Thiruvananthapuram — Democratic Youth Federation of India,
Thiruvananthapuram District Committee.

Next.js 14 App Router, TypeScript, Tailwind CSS v4, Framer Motion.
Sanity CMS integration for admin content management.

ARCHITECTURE RULES — never break these:
1. One useScroll hook in page.tsx only. No other scroll hooks anywhere.
2. Total scroll height: 2000vh. Seven sections each 285vh approximately.
3. Section ranges: s1=[0,0.143] s2=[0.143,0.286] s3=[0.286,0.429]
   s4=[0.429,0.571] s5=[0.571,0.714] s6=[0.714,0.857] s7=[0.857,1.0]
4. Canvas must use devicePixelRatio scaling + object-fit cover math.
5. Sections 2 through 7 must have marginTop: -100vh always.
6. position:sticky and y transform must always be on SEPARATE elements.
7. All text must support both Malayalam (Noto Sans Malayalam) and English
   (Barlow Condensed for display, Noto Sans for body).

Generate only these 4 files now. Do not generate anything else.

FILE 1 — src/app/layout.tsx
Import Barlow_Condensed weights ['700','800','900'] variable '--font-display'
subset latin.
Import Noto_Sans_Malayalam weights ['400','500','600'] variable '--font-body'
subset malayalam, latin.
Apply both variables to html element className.
Metadata: title 'DYFI Thiruvananthapuram', description 'ജനകീയ ജനാധിപത്യം —
Democratic Youth Federation of India, Thiruvananthapuram District'.

FILE 2 — src/app/globals.css
@import "tailwindcss" at the top.
Define on :root —
  --dyfi-red:      #C8102E
  --dyfi-cream:    #F5F0E8
  --dyfi-darkred:  #8B0000
  --dyfi-charcoal: #1A1A1A
  --dyfi-gold:     #C9A84C
  --dyfi-paper:    #EDE8DC
  --font-display:  var(--font-display), 'Barlow Condensed', monospace
  --font-body:     var(--font-body), 'Noto Sans Malayalam', system-ui, sans-serif

Global reset: box-sizing border-box, margin 0, padding 0 on all elements.
html: scroll-behavior auto.
body: background var(--dyfi-charcoal), color var(--dyfi-cream),
font-family var(--font-body), overflow-x hidden.
canvas: display block.
.sr-only: position absolute width 1px height 1px overflow hidden.
.lang-ml: font-family var(--font-body) — for Malayalam text spans.
.lang-en: font-family var(--font-display) — for English display text.

FILE 3 — src/data/sections.ts
Export type ScrollPhase:
  scrollStart: number, scrollEnd: number
  headlineEn: string, headlineMl: string
  subheadlineEn: string, subheadlineMl: string
  paragraphEn: string, paragraphMl: string
  alignment: 'left' | 'right' | 'center'
  accentColor?: string

Export type SectionData:
  id: string, label: string, labelMl: string
  stickyHeight: string, accentLabel: string
  phases: ScrollPhase[]

Export const SECTIONS: SectionData[] with these 7 sections:

SECTION 1 id='hero' label='DYFI THIRUVANANTHAPURAM'
labelMl='ഡി.വൈ.എഫ്.ഐ. തിരുവനന്തപുരം'
stickyHeight='285vh' accentLabel='01 / OURS IS THE FUTURE'
Phase 1: scrollStart 0 scrollEnd 0.25 alignment 'center'
  headlineEn='' headlineMl='' (empty — hero logo only)
Phase 2: scrollStart 0.25 scrollEnd 0.7 alignment 'left'
  headlineEn='For the\npeople.' headlineMl='ജനങ്ങൾക്കായി'
  subheadlineEn='Democratic Youth Federation of India'
  subheadlineMl='ഡെമോക്രാറ്റിക് യൂത്ത് ഫെഡറേഷൻ ഓഫ് ഇന്ത്യ'
  paragraphEn='Thiruvananthapuram District Committee. Building a just,
  equal and progressive Kerala through youth power.'
  paragraphMl='തിരുവനന്തപുരം ജില്ലാ കമ്മിറ്റി. യുവശക്തിയിലൂടെ
  നീതിയുക്തവും സമത്വപൂർണ്ണവുമായ കേരളം.'
Phase 3: scrollStart 0.7 scrollEnd 1.0 alignment 'right'
  headlineEn='Organised.\nUnited.\nUnstoppable.'
  headlineMl='സംഘടിതം.\nഐക്യം.\nഅപ്രതിരോധ്യം.'
  subheadlineEn='Since 1980' subheadlineMl='1980 മുതൽ'
  paragraphEn='From the streets to the assembly. DYFI has stood for Kerala's
  youth across every generation.' paragraphMl=''

SECTION 2 id='history' label='HISTORY' labelMl='ചരിത്രം'
stickyHeight='285vh' accentLabel='02 / THE LEGACY'
Phase 1: scrollStart 0 scrollEnd 0.2 alignment 'center'
  headlineEn='LEADERS WHO\nSHAPED\nKERALA.' headlineMl='കേരളം\nകണ്ട\nനേതാക്കൾ.'
  subheadlineEn='COMMUNIST CHIEF MINISTERS' subheadlineMl='കമ്മ്യൂണിസ്റ്റ് മുഖ്യമന്ത്രിമാർ'
  paragraphEn='' paragraphMl=''
Phase 2: scrollStart 0.2 scrollEnd 0.6 alignment 'left'
  headlineEn='EMS.\nThe first.' headlineMl='ഇ.എം.എസ്.\nആദ്യത്തെ ആൾ.'
  subheadlineEn='1957 — A NEW KERALA' subheadlineMl='1957 — പുതിയ കേരളം'
  paragraphEn='E. M. S. Namboodiripad led the first elected communist
  government in the world. He proved that radical change is possible through
  democratic means.'
  paragraphMl='ജനാധിപത്യ മാർഗ്ഗത്തിലൂടെ വിപ്ലവകരമായ മാറ്റം സാദ്ധ്യമാണ്
  എന്ന് ഇ.എം.എസ്. ലോകത്തിന് കാണിച്ചുകൊടുത്തു.'
Phase 3: scrollStart 0.6 scrollEnd 1.0 alignment 'right'
  headlineEn='A living\ntradition.' headlineMl='ജീവിക്കുന്ന\nപാരമ്പര്യം.'
  subheadlineEn='CARRYING THE FLAME' subheadlineMl='ജ്വാല ഏറ്റുവാങ്ങി'
  paragraphEn='From EMS to Pinarayi. Five leaders. One unbroken commitment
  to the working class of Kerala.'
  paragraphMl='ഇ.എം.എസ്. മുതൽ പിണറായി വരെ. അഞ്ച് നേതാക്കൾ.
  ഒരൊറ്റ പ്രതിബദ്ധത.'

SECTION 3 id='achievements' label='ACHIEVEMENTS' labelMl='നേട്ടങ്ങൾ'
stickyHeight='285vh' accentLabel='03 / WHAT WE DID'
Phase 1: scrollStart 0 scrollEnd 0.3 alignment 'center'
  headlineEn='Action,\nnot words.' headlineMl='വാക്കല്ല,\nകർമ്മം.'
  subheadlineEn='OUR PROGRAMS' subheadlineMl='ഞങ്ങളുടെ പരിപാടികൾ'
  paragraphEn='' paragraphMl=''
Phase 2: scrollStart 0.3 scrollEnd 0.65 alignment 'left'
  headlineEn='Built for\ncommunity.' headlineMl='സമൂഹത്തിനായി\nനിർമ്മിച്ചത്.'
  subheadlineEn='DISTRICT PROGRAMS' subheadlineMl='ജില്ലാ പരിപാടികൾ'
  paragraphEn='Blood donation camps, literacy drives, infrastructure support,
  flood relief, pandemic response — DYFI Thiruvananthapuram at the front line.'
  paragraphMl='രക്തദാന ക്യാമ്പ്, സാക്ഷരത, അടിസ്ഥാന സൗകര്യം,
  വെള്ളപ്പൊക്ക ദുരിതാശ്വാസം — DYFI എപ്പോഴും മുന്നിൽ.'
Phase 3: scrollStart 0.65 scrollEnd 1.0 alignment 'right'
  headlineEn='Numbers\ndon\'t lie.' headlineMl='സംഖ്യകൾ\nസത്യം പറയും.'
  subheadlineEn='IMPACT THIS YEAR' subheadlineMl='ഈ വർഷത്തെ സ്വാധീനം'
  paragraphEn='50+ programs. 10,000+ beneficiaries. One district. All for
  the people.' paragraphMl=''

SECTION 4 id='students' label='STUDENTS' labelMl='വിദ്യാർത്ഥികൾ'
stickyHeight='285vh' accentLabel='04 / TOMORROW'S VOICE'
Phase 1: scrollStart 0 scrollEnd 0.28 alignment 'center'
  headlineEn='You are\nthe future.' headlineMl='നിങ്ങളാണ്\nഭാവി.'
  subheadlineEn='STUDENT GREETINGS' subheadlineMl='വിദ്യാർത്ഥി ആശംസകൾ'
  paragraphEn='' paragraphMl=''
Phase 2: scrollStart 0.28 scrollEnd 0.65 alignment 'left'
  headlineEn='10th.\nCongratulations.' headlineMl='പത്താം ക്ലാസ്.\nആശംസകൾ.'
  subheadlineEn='CLASS X ACHIEVERS' subheadlineMl='ക്ലാസ് X നേട്ടക്കാർ'
  paragraphEn='To every student who cleared their SSLC — DYFI
  Thiruvananthapuram salutes your hard work and dedication.'
  paragraphMl='SSLC ജയിച്ച ഓരോ വിദ്യാർത്ഥിക്കും DYFI
  തിരുവനന്തപുരം ആശംസകൾ നേരുന്നു.'
Phase 3: scrollStart 0.65 scrollEnd 1.0 alignment 'right'
  headlineEn='Plus Two.\nKeep going.' headlineMl='പ്ലസ് ടു.\nതുടരൂ.'
  subheadlineEn='HIGHER SECONDARY ACHIEVERS' subheadlineMl='ഹയർ സെക്കൻഡറി'
  paragraphEn='Your Plus Two result is a stepping stone. Whatever your score,
  your future is yours to define.' paragraphMl=''

SECTION 5 id='support' label='SUPPORT' labelMl='പിന്തുണ'
stickyHeight='285vh' accentLabel='05 / CARE'
Phase 1: scrollStart 0 scrollEnd 0.25 alignment 'center'
  headlineEn='Nobody\nleft behind.' headlineMl='ആരും\nഒറ്റയ്ക്കല്ല.'
  subheadlineEn='SUPPORT FUND' subheadlineMl='ആശ്വാസ നിധി'
  paragraphEn='' paragraphMl=''
Phase 2: scrollStart 0.25 scrollEnd 0.65 alignment 'left'
  headlineEn='For the\nelderly.' headlineMl='മുതിർന്നവർക്ക്\nഒപ്പം.'
  subheadlineEn='OLD AGE SUPPORT' subheadlineMl='വൃദ്ധജന പിന്തുണ'
  paragraphEn='DYFI Thiruvananthapuram provides financial assistance,
  medical support and companionship to elderly citizens in need across
  the district.'
  paragraphMl='ജില്ലയിലെ ആശ്രയമില്ലാത്ത വൃദ്ധർക്ക് സാമ്പത്തിക
  സഹായവും ആരോഗ്യ പിന്തുണയും DYFI നൽകുന്നു.'
Phase 3: scrollStart 0.65 scrollEnd 1.0 alignment 'right'
  headlineEn='Illness\nshould not\nmean poverty.' headlineMl='രോഗം\nദാരിദ്ര്യം\nആകരുത്.'
  subheadlineEn='MEDICAL AID FUND' subheadlineMl='വൈദ്യ സഹായ നിധി'
  paragraphEn='We raise funds and coordinate support for families facing
  serious illness. Apply through Nivedanam below.' paragraphMl=''

SECTION 6 id='nivedanam' label='NIVEDANAM' labelMl='നിവേദനം'
stickyHeight='285vh' accentLabel='06 / YOUR VOICE'
Phase 1: scrollStart 0 scrollEnd 0.3 alignment 'center'
  headlineEn='We listen.' headlineMl='ഞങ്ങൾ\nകേൾക്കുന്നു.'
  subheadlineEn='PUBLIC COMPLAINT PORTAL' subheadlineMl='പൊതുജന നിവേദനം'
  paragraphEn='' paragraphMl=''
Phase 2: scrollStart 0.3 scrollEnd 1.0 alignment 'center'
  headlineEn='Submit your\nnivedanam.' headlineMl='നിവേദനം\nസമർപ്പിക്കൂ.'
  subheadlineEn='REACH THE COMMITTEE' subheadlineMl='കമ്മിറ്റിയെ സമീപിക്കൂ'
  paragraphEn='Submit your grievance, request or report to DYFI
  Thiruvananthapuram District Committee. All submissions are reviewed
  within 48 hours.' paragraphMl=''

SECTION 7 id='news' label='NEWS' labelMl='വാർത്ത'
stickyHeight='285vh' accentLabel='07 / THE WORLD'
Phase 1: scrollStart 0 scrollEnd 0.3 alignment 'center'
  headlineEn='Informed\nyouth.\nStrong\nmovement.' headlineMl='അറിവുള്ള\nയുവത.\nശക്തമായ\nമുന്നേറ്റം.'
  subheadlineEn='NEWS & ARTICLES' subheadlineMl='വാർത്തകളും ലേഖനങ്ങളും'
  paragraphEn='' paragraphMl=''
Phase 2: scrollStart 0.3 scrollEnd 1.0 alignment 'left'
  headlineEn='Local.\nNational.\nGlobal.' headlineMl='പ്രാദേശികം.\nദേശീയം.\nആഗോളം.'
  subheadlineEn='LIVE REPORTING' subheadlineMl='തത്സമയ റിപ്പോർട്ടിംഗ്'
  paragraphEn='Breaking news, progressive world articles and DYFI official
  statements — curated for the politically aware youth of Thiruvananthapuram.'
  paragraphMl=''

FILE 4 — src/data/leaders.ts
Export type Leader:
  name: string, nameMl: string, period: string
  title: string, titleMl: string, quote: string
  party: string, imagePath: string

Export const LEADERS: Leader[] — include these 5 leaders:
1. E. M. S. Namboodiripad | ഇ.എം.എസ്. നമ്പൂതിരിപ്പാട്
   period '1957–1959 | 1967–1969' title 'First Communist CM of Kerala'
   titleMl 'കേരളത്തിന്റെ ആദ്യ കമ്മ്യൂണിസ്റ്റ് മുഖ്യമന്ത്രി'
   quote 'Real strength lies in connection with the masses.'
   party 'CPI(M)' imagePath '/leaders/ems.jpg'
2. C. Achutha Menon | സി. അച്യുതമേനോൻ
   period '1969–1977' title 'Chief Minister of Kerala'
   titleMl 'കേരള മുഖ്യമന്ത്രി'
   quote 'Progress is built on the people\'s trust.'
   party 'CPI' imagePath '/leaders/achutha-menon.jpg'
3. E. K. Nayanar | ഇ.കെ. നായനാർ
   period '1980–1981 | 1987–1991 | 1996–2001' title 'Three-term CM of Kerala'
   titleMl 'മൂന്നു തവണ മുഖ്യമന്ത്രി'
   quote 'Democracy means power to the working class.'
   party 'CPI(M)' imagePath '/leaders/nayanar.jpg'
4. V. S. Achuthanandan | വി.എസ്. അച്യുതാനന്ദൻ
   period '2006–2011' title 'Chief Minister of Kerala'
   titleMl 'കേരള മുഖ്യമന്ത്രി'
   quote 'Corruption is the enemy of the people.'
   party 'CPI(M)' imagePath '/leaders/vs.jpg'
5. Pinarayi Vijayan | പിണറായി വിജയൻ
   period '2016–present' title 'Chief Minister of Kerala'
   titleMl 'കേരള മുഖ്യമന്ത്രി'
   quote 'Development and social justice must walk hand in hand.'
   party 'CPI(M)' imagePath '/leaders/pinarayi.jpg'
```

---

## ANTIGRAVITY MESSAGE 2
### Builds: `Navbar.tsx`, `HeroCanvas.tsx`, `SectionOverlay.tsx`, `SectionBlock.tsx`

```
Continue building DYFI Thiruvananthapuram. Generate these 4 files in order.

FILE 5 — src/components/Navbar.tsx — 'use client'
useScroll from framer-motion to get scrollY.
useTransform scrollY [0,100] to:
  background: rgba(26,26,26,0) to rgba(26,26,26,0.95)
  backdropFilter: blur 0px to 12px

motion.nav: position fixed top-0 left-0 right-0 z-50
px-8 md:px-14 py-4 flex justify-between items-center.

Left: Two-line stack.
  Line 1: 'DYFI' — var(--font-display) 18px tracking 0.2em color var(--dyfi-red) uppercase font-weight 900.
  Line 2: 'THIRUVANANTHAPURAM' — var(--font-display) 9px tracking 0.4em
  color rgba(245,240,232,0.5) uppercase.

Centre: A red hammer-and-sickle SVG icon, 24px, color var(--dyfi-red), opacity 0.8.
Inline SVG: simple geometric hammer-sickle, not elaborate.

Right: Nav links row gap-8:
  - 'HISTORY' | 'ACHIEVEMENTS' | 'NIVEDANAM' — each as anchor href to
    their section id. var(--font-display) 10px tracking 0.3em uppercase
    color rgba(245,240,232,0.55) hover:color var(--dyfi-cream) transition 300ms.
  - 'NIVEDANAM' button: border 1px solid var(--dyfi-red) px-5 py-2 color
    var(--dyfi-red) hover:background var(--dyfi-red) hover:color white
    transition 300ms.

FILE 6 — src/components/HeroCanvas.tsx — 'use client'
Same pattern as FrameCanvas from F1 PDF but adapted:
Props: sectionProgress: MotionValue<number>, frameCount: number, framesPath: string

If no video frames are loaded (image fails to load), render a fallback:
Full-viewport canvas with:
  - Background fill: #1A1A1A
  - A large geometric star (5-pointed) centered, drawn in canvas,
    color rgba(200,16,46,0.15), rotating slowly via requestAnimationFrame.
  - This fallback runs only when images are not found.

Normal operation: identical to F1 FrameCanvas — load images, drawFrame
with devicePixelRatio + object-fit cover math.
useMotionValueEvent to update frame on scroll progress.

FILE 7 — src/components/SectionOverlay.tsx — 'use client'
Props: sectionProgress: MotionValue<number>, section: SectionData, lang: 'en' | 'ml'

TOP-LEFT LABEL:
  Flex row items-center gap-3.
  A vertical red bar: 2px wide 24px tall background var(--dyfi-red).
  Text section.accentLabel: var(--font-display) 9px tracking 0.45em
  color rgba(245,240,232,0.5) uppercase.

PHASE BLOCKS (for each phase, skip if all headline fields empty):
  mid = (phase.scrollStart + phase.scrollEnd) / 2
  opacity: useTransform over [start, start+0.07, mid, end-0.07, end] → [0,1,1,1,0]
  y: useTransform over [start, start+0.1, end-0.1, end] → [32, 0, 0, -32]

  Inside motion.div:
  subheadline: lang==='ml' ? phase.subheadlineMl || phase.subheadlineEn
               : phase.subheadlineEn
    var(--font-display) 9px tracking 0.45em rgba(245,240,232,0.45) uppercase mb-4.
  headline: lang==='ml' ? phase.headlineMl || phase.headlineEn : phase.headlineEn
    split on '\n' — each line a display:block span.
    var(--font-display) clamp(40px,6.5vw,96px) weight-900 line-height 0.95
    uppercase tracking -0.02em color var(--dyfi-cream).
  Red rule: 28px wide 1.5px tall background var(--dyfi-red) my-6.
  paragraph: lang==='ml' ? phase.paragraphMl || phase.paragraphEn : phase.paragraphEn
    var(--font-body) clamp(13px,1.2vw,16px) line-height 1.8
    rgba(245,240,232,0.5) max-w-400px.

FRAME COUNTER (bottom-right):
  Same pattern as F1 PDF — padded 3-digit counter, var(--font-display) 10px
  tracking 0.3em rgba(245,240,232,0.2).

LANG TOGGLE (top-right, always visible):
  Two buttons 'EN' | 'ML' — clicking calls a prop callback onLangChange.
  Active: color var(--dyfi-red) border-bottom 1px solid var(--dyfi-red).
  Inactive: color rgba(245,240,232,0.3).
  var(--font-display) 9px tracking 0.3em.

FILE 8 — src/components/SectionBlock.tsx — 'use client'
Identical THREE-LAYER STRUCTURE as F1 PDF SectionBlock.
Props: section: SectionData, sectionProgress, globalProgress,
       sectionIndex, isFirst, lang

entryRanges = {
  1: [0.13, 0.20], 2: [0.27, 0.34], 3: [0.41, 0.48],
  4: [0.55, 0.62], 5: [0.69, 0.76], 6: [0.83, 0.90]
}

LAYER 1: <section id={section.id}> height stickyHeight position relative
         marginTop isFirst ? 0 : '-100vh' zIndex sectionIndex+1
LAYER 2: <div> position sticky top 0 height 100vh width 100% overflow hidden
LAYER 3: <motion.div> y: isFirst ? 0 : smoothSlideY position absolute inset 0

Inside Layer 3:
  HeroCanvas — position absolute inset 0 zIndex 0
  Vignette: linear-gradient to bottom rgba(26,26,26,0.6) 0%, transparent 25%,
  transparent 65%, rgba(26,26,26,0.85) 100% — zIndex 5
  Left-fade: linear-gradient to right rgba(26,26,26,0.45) 0%, transparent 35% — zIndex 5
  SectionOverlay — position absolute inset 0 zIndex 10 — pass lang prop
```

---

## ANTIGRAVITY MESSAGE 3
### Builds: `LeaderSlideshow.tsx`, `NivedanamForm.tsx`, `NewsGrid.tsx`

```
Continue building DYFI Thiruvananthapuram. Generate these 3 files.

FILE 9 — src/components/LeaderSlideshow.tsx — 'use client'
This renders INSIDE Section 2 (History) as a sticky overlay component.
Props: leaders: Leader[], sectionProgress: MotionValue<number>, lang: 'en' | 'ml'

Show 5 leader cards as a horizontal scroll driven by sectionProgress.
activeIndex = useTransform(sectionProgress, [0,1],
  [0, leaders.length - 1]) then round to integer.

Each card (only show active card, crossfade transition 0.6s):
  Full-viewport overlay, position absolute inset 0 zIndex 12.
  Left 55%: text block — position absolute left 10% bottom 15%.
    Party badge: 'CPI(M)' or 'CPI' — var(--font-display) 9px tracking 0.4em
      color var(--dyfi-red) border 1px solid var(--dyfi-red) px-3 py-1 mb-4.
    Leader name: lang==='ml' ? leader.nameMl : leader.name
      var(--font-display) clamp(36px,5vw,72px) weight-900 color var(--dyfi-cream)
      line-height 1.0 uppercase.
    Period: leader.period — var(--font-display) 11px tracking 0.3em
      rgba(245,240,232,0.4) mt-3.
    Title: lang==='ml' ? leader.titleMl : leader.title
      var(--font-body) 14px rgba(245,240,232,0.55) mt-2 max-w-320px.
    Quote: leader.quote — var(--font-body) 13px italic rgba(200,16,46,0.8) mt-4
      border-left 2px solid var(--dyfi-red) pl-4 max-w-340px.
  Right 45%: leader image — position absolute right 0 top 0 bottom 0 width 45%
    object-fit cover. If image not found, show a geometric red placeholder.
  Bottom: progress dots — 5 dots, active dot: color var(--dyfi-red) width 24px,
    inactive: rgba(245,240,232,0.2) width 8px. Transition width 300ms.
    position absolute bottom 28px left 50% translateX(-50%).

FILE 10 — src/components/NivedanamForm.tsx — 'use client'
A public complaint/report form rendered inside Section 6.
Position: centered in viewport, position absolute inset 0 zIndex 20
flex items-center justify-center.

Form card: background rgba(26,26,26,0.92) border 1px solid rgba(200,16,46,0.3)
max-w-540px width 90% padding 48px backdrop-blur 16px.

Heading: 'നിവേദനം / NIVEDANAM' — var(--font-display) 28px weight-900
color var(--dyfi-cream) uppercase tracking 0.04em mb-2.
Subheading: 'Submit your grievance to DYFI Thiruvananthapuram District Committee'
var(--font-body) 13px rgba(245,240,232,0.45) mb-8.

Fields (all with label above, red-border-bottom on focus):
  1. Full Name / പൂർണ്ണ നാമം — text input
  2. Mobile / ഫോൺ — tel input
  3. Ward / വാർഡ് — text input
  4. Category / വിഭാഗം — select:
     Options: 'Old Age Support' | 'Medical Aid' | 'Education' |
     'Infrastructure' | 'Other'
  5. Your Message / സന്ദേശം — textarea 4 rows
  6. Preferred Language / ഭാഷ — radio: Malayalam | English

Input style: background transparent border-bottom 1px solid rgba(245,240,232,0.2)
color var(--dyfi-cream) font-family var(--font-body) py-3 width 100% mb-6
focus:border-bottom-color var(--dyfi-red) outline none transition 300ms.

Submit button: full-width background var(--dyfi-red) color white
var(--font-display) 12px tracking 0.35em uppercase py-4 hover:background
var(--dyfi-darkred) transition 300ms. Text: 'SUBMIT NIVEDANAM →'

On submit: show success state — red checkmark + text 'നിവേദനം സ്വീകരിച്ചു /
Received. We will respond within 48 hours.' useState for form/success toggle.
Wire to a POST /api/nivedanam endpoint (stub only).

FILE 11 — src/components/NewsGrid.tsx — 'use client'
Props: lang: 'en' | 'ml'
A news feed rendered below the cinematic scroll as a static section.
Background var(--dyfi-charcoal) padding 96px vertical 56px horizontal md+.

Top row: Heading 'വാർത്ത / NEWS' — var(--font-display) 11px tracking 0.5em
color var(--dyfi-red) uppercase mb-2.
Sub: 'Live updates from Thiruvananthapuram, Kerala and the World'
var(--font-body) 14px rgba(245,240,232,0.4) mb-12.

Filter tabs: 'ALL' | 'LOCAL' | 'NATIONAL' | 'WORLD' | 'ARTICLES'
Active: color var(--dyfi-red) border-bottom 1px solid var(--dyfi-red).
Inactive: rgba(245,240,232,0.3). var(--font-display) 10px tracking 0.3em.

Grid: 3 columns md+, 1 column mobile. gap-6.
News card: background rgba(245,240,232,0.04) border 1px solid rgba(245,240,232,0.08)
hover:border-color rgba(200,16,46,0.4) transition 300ms p-6.
  Category badge top-left: 10px uppercase tracking 0.3em color var(--dyfi-red).
  Headline: var(--font-display) 18px weight-700 color var(--dyfi-cream) mt-3 mb-2
    line-height 1.2 uppercase.
  Excerpt: var(--font-body) 13px rgba(245,240,232,0.4) line-height 1.7 mb-4.
  Date + source row: 10px var(--font-display) rgba(245,240,232,0.25).
  'READ MORE →' link: var(--font-display) 9px tracking 0.3em color var(--dyfi-red).

Show 6 placeholder news cards with realistic DYFI/Kerala content.
Real content will come from Sanity CMS — stub the data type.
Export type NewsItem: id, category, headline, headlineMl, excerpt, date, source, url.
```

---

## ANTIGRAVITY MESSAGE 4
### Builds: `AchievementsGrid.tsx`, `StudentsSection.tsx`, `SupportSection.tsx`, `Footer.tsx`

```
Continue building DYFI Thiruvananthapuram. Generate these 4 files.

FILE 12 — src/components/AchievementsGrid.tsx
Static server component. No 'use client'.
Background var(--dyfi-charcoal) border-top 1px solid rgba(245,240,232,0.06)
padding 80px vertical 56px horizontal md+.

Heading row: 'നേട്ടങ്ങൾ' in Malayalam large + 'ACHIEVEMENTS' small below.
Big number stats grid — 4 columns md+, 2 mobile. gap-8. Items:
  '50+' | 'Programs' | 'This year'
  '10,000+' | 'People helped' | 'Across the district'
  '5' | 'Blood donation camps' | '2024'
  '200+' | 'Volunteers' | 'Active members'
Each: number in var(--font-display) clamp(48px,6vw,80px) weight-900
color var(--dyfi-red). Label below in var(--font-display) 11px tracking 0.3em
color rgba(245,240,232,0.5). Sub in var(--font-body) 12px rgba(245,240,232,0.3).

Below stats: Programs list — 2-column grid of program cards.
Each card: left red bar 2px + program name + description. Red bar 28px height
var(--dyfi-red). Program name: var(--font-display) 16px weight-700 var(--dyfi-cream).
Description: var(--font-body) 13px rgba(245,240,232,0.45).

Program data to use:
  'Blood Donation Camp' | 'Annual district-wide drive. 500+ units collected.'
  'Literacy Mission Support' | 'Adult literacy volunteers across 15 wards.'
  'Flood Relief 2024' | 'Emergency kits distributed to 800 families.'
  'Free Medical Camp' | 'Health screening for 1,200 residents.'
  'Infrastructure Aid' | 'Road, drain repair petitions and follow-ups.'
  'Scholarship Guidance' | 'Career counselling for 300+ students.'

FILE 13 — src/components/StudentsSection.tsx
Static server component. No 'use client'.
Background: a deep red-to-charcoal gradient rgba(139,0,0,0.15) to transparent.
Padding 80px vertical 56px horizontal md+. border-top same as above.

Left column (60%): Large greeting text.
  'അഭിനന്ദനങ്ങൾ' — var(--font-display) clamp(48px,7vw,96px) weight-900
  color var(--dyfi-red) uppercase line-height 0.9.
  'CONGRATULATIONS' below it — var(--font-display) 12px tracking 0.5em
  rgba(245,240,232,0.3) uppercase mt-4.
  Body: var(--font-body) 15px rgba(245,240,232,0.55) line-height 1.8 mt-8 max-w-500px.
  Text: 'DYFI Thiruvananthapuram congratulates every student who completed
  their SSLC and Plus Two examinations. Your achievement is a victory for
  your family and our district. The future belongs to you. — ഡി.വൈ.എഫ്.ഐ.
  തിരുവനന്തപുരം ജില്ലാ കമ്മിറ്റി'

Right column (40%): Two cards stacked.
  Card 1 — SSLC / 10th: red border-left 3px. Big '10' + 'ആം ക്ലാസ്'
  Card 2 — Plus Two: same. Big '+2' + 'ഹയർ സെക്കൻഡറി'
  Card style: background rgba(245,240,232,0.04) p-8.

FILE 14 — src/components/SupportSection.tsx
Static server component. No 'use client'.
Background var(--dyfi-charcoal) padding 80px vertical 56px horizontal md+
border-top same.

Heading: 'ആശ്വാസ നിധി' large + 'SUPPORT FUND' small tracking 0.5em.
Subtext: 'DYFI Thiruvananthapuram provides support to elderly and
seriously ill residents across the district. No one is left behind.'

Two cards side by side md+, stacked mobile. gap-8.
Card 1 — Old Age: icon (outline person with cane, use Unicode ♿ or draw simple).
  Title: 'വൃദ്ധജന പിന്തുണ / Old Age Support'
  List of support types: Monthly visits | Medical escort | Financial aid |
  Govt scheme guidance.
  Apply button: 'APPLY VIA NIVEDANAM →' — links to #nivedanam.
Card 2 — Medical Aid: 
  Title: 'വൈദ്യ സഹായ നിധി / Medical Aid Fund'
  List: Emergency funds | Hospital coordination | Medicine support |
  Post-treatment care.
  Apply button same.

Card style: background rgba(200,16,46,0.06) border 1px solid rgba(200,16,46,0.2)
p-8 hover:border-color rgba(200,16,46,0.5) transition 300ms.
List items: before content '→' color var(--dyfi-red). var(--font-body) 14px
rgba(245,240,232,0.55) py-2 border-bottom 1px solid rgba(245,240,232,0.06).

FILE 15 — src/components/Footer.tsx
Static server component. No 'use client'.
Background var(--dyfi-charcoal) border-top 1px solid rgba(200,16,46,0.2)
padding 80px vertical 56px horizontal md+.

Top row: 'DYFI' large + hammer-sickle inline SVG (same as Navbar).
  var(--font-display) clamp(48px,7vw,96px) weight-900 color var(--dyfi-red) uppercase.
  Below: 'ഡെമോക്രാറ്റിക് യൂത്ത് ഫെഡറേഷൻ ഓഫ് ഇന്ത്യ'
  var(--font-body) 14px rgba(245,240,232,0.35) mt-2.
  'THIRUVANANTHAPURAM DISTRICT COMMITTEE'
  var(--font-display) 10px tracking 0.4em rgba(245,240,232,0.25) mt-1.

Middle row: 3 columns md+ gap-16.
  Column 1 — Contact:
    'REACH US' heading 9px tracking 0.4em var(--dyfi-red) uppercase mb-4.
    Phone, Email, Address placeholders — var(--font-body) 13px rgba(245,240,232,0.4).
  Column 2 — Quick Links:
    'NAVIGATE' heading same style.
    Links: History | Achievements | Students | Support | Nivedanam | News.
    var(--font-display) 11px tracking 0.2em rgba(245,240,232,0.4) hover:var(--dyfi-cream).
  Column 3 — DYFI Links:
    'DYFI OFFICIAL' heading same style.
    Links: dyfi.in | DYFI Kerala Facebook | CPM Kerala Website.
    External link icon (→) after each. var(--font-display) 11px.

Bottom row: 'ജനകീയ ജനാധിപത്യം — FOR THE PEOPLE, BY THE PEOPLE'
  var(--font-display) 10px tracking 0.35em rgba(245,240,232,0.18) uppercase.
  Right side: '© 2025 DYFI THIRUVANANTHAPURAM — ALL RIGHTS RESERVED'
  same style.
```

---

## ANTIGRAVITY MESSAGE 5 — FINAL
### Builds: `page.tsx` — The Master File

```
Create src/app/page.tsx — 'use client'.
This file contains the ONLY useScroll call in the entire project.

Imports:
  useState, useRef from 'react'
  useScroll, useTransform from 'framer-motion'
  SECTIONS from '@/data/sections'
  LEADERS from '@/data/leaders'
  Navbar, SectionBlock, LeaderSlideshow, NivedanamForm,
  AchievementsGrid, StudentsSection, SupportSection, NewsGrid, Footer
  from their component paths.

const [lang, setLang] = useState<'en' | 'ml'>('ml')
containerRef = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ['start start', 'end end']
})

Section progresses — one per section:
s1Progress = useTransform(scrollYProgress, [0, 0.143], [0, 1])
s2Progress = useTransform(scrollYProgress, [0.143, 0.286], [0, 1])
s3Progress = useTransform(scrollYProgress, [0.286, 0.429], [0, 1])
s4Progress = useTransform(scrollYProgress, [0.429, 0.571], [0, 1])
s5Progress = useTransform(scrollYProgress, [0.571, 0.714], [0, 1])
s6Progress = useTransform(scrollYProgress, [0.714, 0.857], [0, 1])
s7Progress = useTransform(scrollYProgress, [0.857, 1.0], [0, 1])
progresses = [s1Progress, s2Progress, s3Progress, s4Progress,
              s5Progress, s6Progress, s7Progress]

Return JSX:
<main style={{ background:'var(--dyfi-charcoal)', position:'relative',
  minHeight:'100vh' }}>
  <Navbar />
  
  <div ref={containerRef} style={{ height:'2000vh', position:'relative' }}>
    {SECTIONS.map((section, i) => (
      <SectionBlock
        key={section.id}
        section={section}
        sectionProgress={progresses[i]}
        globalProgress={scrollYProgress}
        sectionIndex={i}
        isFirst={i === 0}
        lang={lang}
        onLangChange={setLang}
      />
    ))}
    
    {/* Leader slideshow overlaid on section 2 */}
    {/* Note: LeaderSlideshow must be positioned inside SectionBlock id='history'
        via a portal or passed as a child prop — handle in SectionBlock */}
  </div>
  
  <div style={{ position:'relative', zIndex:20,
    background:'var(--dyfi-charcoal)' }}>
    <AchievementsGrid />
    <StudentsSection />
    <SupportSection />
    {/* NivedanamForm is inside the cinematic section 6 */}
    <NewsGrid lang={lang} />
    <Footer />
  </div>
</main>

After creating this file, run: npm run build
Report any TypeScript or build errors.
```

---

## STEP 3 — SANITY CMS SETUP

```bash
# In your project root:
npm create sanity@latest -- --project-id YOUR_ID --dataset production

# Schemas to create in sanity/schemaTypes/:
# - achievement.ts (title, description, date, imageUrl, category)
# - newsItem.ts (headline, headlineMl, excerpt, category, date, source, url)
# - meeting.ts (date, title, location, agenda)
# - nivedanam.ts (name, phone, ward, category, message, status, createdAt)
# - leader.ts (name, nameMl, period, title, titleMl, quote, party, image)
```

---

## STEP 4 — LOCAL TEST CHECKLIST

```bash
npm run dev  # Open localhost:3000
```

Check these on scroll:
- [ ] DYFI logo + hammer-sickle visible in Navbar
- [ ] Section 1 hero text fades in on scroll
- [ ] Section 2 (History) slides UP and covers Section 1
- [ ] Leader slideshow advances as you scroll through Section 2
- [ ] Sections 3–7 each slide and cover the previous
- [ ] Malayalam text renders correctly (Noto Sans Malayalam loaded)
- [ ] Language toggle switches EN ↔ ML
- [ ] Nivedanam form submits and shows success state
- [ ] AchievementsGrid, StudentsSection, SupportSection visible below scroll
- [ ] NewsGrid with filter tabs working
- [ ] Footer links correct
- [ ] Mobile responsive (test at 390px width)

---

## STEP 5 — DEPLOY TO VERCEL

```bash
cd dyfi-tvm
git init
git add .
git commit -m "DYFI Thiruvananthapuram initial build"
git remote add origin https://github.com/YOUR_USERNAME/dyfi-tvm.git
git branch -M main
git push -u origin main
```

Then: vercel.com → Import → dyfi-tvm → Deploy.

Add environment variables in Vercel dashboard:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## FUTURE SECTIONS (Phase 2)

These can be added after launch:
- **Meeting Calendar** — live meeting dates from Sanity, Google Calendar embed
- **Member Portal** — login for branch members, internal notices
- **Photo Gallery** — program photos, events
- **Donation Gateway** — UPI QR for support fund
- **WhatsApp Integration** — auto-reply to Nivedanam submissions

---

*Developed for DYFI Thiruvananthapuram District Committee*
*Pattern inspired by F1 Arch Animated Website (Funk Tech School)*
