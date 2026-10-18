import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface SkillGroup {
  title: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  { title: 'Programming Languages', skills: ['Python', 'JavaScript', 'C', 'C++', 'Java', 'SQL'] },
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS', 'Responsive UI development','Figma'],
  },
  {
    title: 'Backend Development & APIs',
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: [
      'MySQL',
      'MongoDB',
      'MongoDB Compass',
      'Supabase',
      'SQL queries',
      'CRUD operations',
      'Database integration',
    ],
  },
  {
    title: 'Data Analysis',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'SQL queries',
      'Data cleaning',
      'Exploratory data analysis',
      'Data manipulation',
      'Excel',
      'Power BI',
      'Tableau Public',
      'Dashboard creation',
      'Data visualization',
    ],
  },
  {
    title: 'Web Scraping & Automation',
    skills: [
      'requests',
      'Selenium',
      'Playwright',
      'BeautifulSoup',
      'Web data extraction',
      'HTML parsing',
      'Structured data collection',
      'Browser automation',
      'CSV/data export',
      'make.com'
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'MATLAB',
      'Jupyter Notebook',
      'Google Colab',
      'Vercel',
      'Netlify',
    ],
  },
  {
    title: 'Libraries & Additional Tools',
    skills: ['Tkinter', 'mysql.connector', 'Relevant Python data libraries'],
  },
  {
    title: 'Computer Science Foundations',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database concepts',
      'Problem-solving',
      'Software engineering fundamentals',
    ],
  },
];


/* ---------- Compact, animated skills explorer ---------- */

const SkillsExplorer: React.FC = () => {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Auto-rotate until the visitor interacts; paused on hover/focus
  useEffect(() => {
    if (!auto || paused || reduced) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % SKILL_GROUPS.length), 4500);
    return () => window.clearInterval(id);
  }, [auto, paused, reduced]);

  // Badges pop in whenever the group changes
  useLayoutEffect(() => {
    if (reduced || !panelRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-badge]',
        { y: 14, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.035, ease: 'back.out(1.6)' },
      );
      gsap.fromTo('[data-panel-title]', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' });
    }, panelRef);
    return () => ctx.revert();
  }, [active, reduced]);

  const select = useCallback((i: number) => {
    setAuto(false);
    setActive(i);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const n = SKILL_GROUPS.length;
    let next = -1;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (active + 1) % n;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (active - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      select(next);
      tabRefs.current[next]?.focus();
    }
  };

  const group = SKILL_GROUPS[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-end justify-between gap-4 mb-4">
        <h3
          className="text-2xl sm:text-3xl text-black font-medium tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Skills & Tools
        </h3>
        <p className="text-xs sm:text-sm text-black/70 font-mono">Tools I use and keep learning</p>
      </div>

      <div className="bg-white border-2 border-black rounded-[28px] shadow-[8px_8px_0px_0px_#000] overflow-hidden">
        {/* Tabs: scrollable chips on mobile, vertical list on md+ */}
        <div
          role="tablist"
          aria-label="Skill groups"
                    onKeyDown={onKeyDown}
          className="flex md:flex-wrap gap-1.5 overflow-x-auto md:overflow-visible p-3 sm:p-4 border-b-2 border-black bg-white [scrollbar-width:none]"
        >
          {SKILL_GROUPS.map((g, i) => {
            const selected = i === active;
            return (
              <button
                key={g.title}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`skill-tab-${i}`}
                aria-selected={selected}
                aria-controls="skill-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                className={`relative shrink-0 flex items-center gap-2 text-left px-3.5 py-1.5 rounded-full border-2 border-black text-[13px] sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                  selected ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5'
                }`}
              >
                <span>{g.title}</span>
                <span className={`font-mono text-[11px] ${selected ? 'text-white/80' : 'text-black/65'}`}>
                  {String(g.skills.length).padStart(2, '0')}
                </span>
                {selected && auto && !paused && !reduced && (
                  <span
                    key={active}
                    aria-hidden="true"
                    className="absolute left-4 right-4 bottom-[3px] h-[2px] rounded-full bg-white/60 origin-left"
                    style={{ animation: 'skill-timer 4.5s linear forwards' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          ref={panelRef}
          role="tabpanel"
          id="skill-panel"
          aria-labelledby={`skill-tab-${active}`}
          className="p-5 sm:p-6 min-h-[170px]"
        >
          <div data-panel-title className="flex items-baseline justify-between gap-3 mb-4 pb-3 border-b-2 border-black/10">
            <h4
              className="text-xl sm:text-2xl font-bold text-black tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {group.title}
            </h4>
            <span className="text-xs font-mono text-black/65">
              {String(active + 1).padStart(2, '0')} / {String(SKILL_GROUPS.length).padStart(2, '0')}
            </span>
          </div>
          <ul className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                data-badge
                className="text-[13px] sm:text-sm font-medium text-black px-3 py-1.5 rounded-xl border-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`@keyframes skill-timer{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-20 w-full bg-cornflower pt-24 sm:pt-32 pb-10 sm:pb-12 px-5 sm:px-8 md:px-12 border-b-2 border-black scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-3 rounded-full bg-rust" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-black">
            01 / About Me
          </span>
          <span className="h-[2px] flex-1 bg-black/20" />
          <span className="text-xs uppercase tracking-wider bg-chartreuse text-black px-3 py-1 rounded-full font-bold border border-black">
            Zahra Shahid • CS '28
          </span>
        </div>

        {/* About statement */}
        <div className="bg-white border-2 border-black rounded-[32px] p-8 sm:p-12 mb-8 sm:mb-10 shadow-[8px_8px_0px_0px_#000]">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-black/60 block mb-3">
            Who I am
          </span>
          <h2
            id="about-heading"
            className="text-[26px] sm:text-[38px] md:text-[48px] leading-[1.15] text-black font-normal tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            I'm a Computer Science student interested in building useful web applications, working
            with data, and solving practical problems through code.
          </h2>
          <p className="mt-6 text-[17px] sm:text-[20px] text-black/80 leading-relaxed max-w-3xl">
            I enjoy exploring different technologies, learning by building projects, and improving my
            software development skills.
          </p>
        </div>

        <SkillsExplorer />
      </div>
    </section>
  );
};
