import React, { useEffect, useState } from 'react';

const GITHUB_URL = 'https://github.com/zahra-code';
const LINKEDIN_URL = 'https://www.linkedin.com/in/zahra-shahid-466538320/';
const RESUME_URL = '/Zahra_Shahid-Resume.pdf';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Education' },
];

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6 1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  // Scroll-spy: highlight the link of the section nearest the middle of the screen
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const mid = window.innerHeight * 0.4;
      let current = '';
      for (const { id } of LINKS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-3 sm:top-4 inset-x-3 sm:inset-x-6 z-50 pointer-events-none">
        <nav
          aria-label="Main navigation"
          className={`pointer-events-auto mx-auto max-w-6xl flex items-center justify-between gap-3 rounded-full border border-white/15 pl-5 pr-2.5 py-2 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? 'bg-black/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]' : 'bg-black/70'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 no-underline select-none group shrink-0">
            <span
              className="text-[28px] sm:text-[32px] text-white leading-none group-hover:text-chartreuse transition-colors -rotate-1 font-bold"
              style={{ fontFamily: 'var(--font-cursive)' }}
            >
              Zahra Shahid
            </span>
            <span
              className="text-[18px] text-chartreuse leading-none inline-block group-hover:rotate-90 transition-transform duration-300"
              aria-hidden="true"
            >
              ✳︎
            </span>
          </a>

          {/* Desktop links with active-section pill */}
          <ul className="hidden md:flex items-center gap-1 text-[15px] lg:text-[16px] font-medium select-none">
            {LINKS.map((l) => {
              const active = activeId === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={active ? 'true' : undefined}
                    className={`block px-3.5 py-1.5 rounded-full transition-colors duration-200 ${
                      active ? 'bg-white text-black' : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-1.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-chartreuse transition-colors p-2 rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chartreuse"
              aria-label="Zahra Shahid GitHub Profile"
            >
              <GithubIcon />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-chartreuse transition-colors p-2 rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chartreuse"
              aria-label="Zahra Shahid LinkedIn Profile"
            >
              <LinkedinIcon />
            </a>
            <a
              href={RESUME_URL}
              download="Zahra_Shahid-Resume.pdf"
              className="inline-flex items-center gap-1.5 text-[14px] lg:text-[15px] text-white border border-white/40 hover:bg-white hover:text-black px-4 py-2 rounded-full font-medium transition-colors"
              aria-label="Download resume (PDF)"
            >
              <span>Resume</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#footer"
              className="inline-flex items-center gap-1.5 text-[14px] lg:text-[15px] text-black bg-chartreuse hover:bg-white px-4 py-2 rounded-full font-bold transition-colors"
            >
              <span>Get in touch</span>
              <span className="text-xs" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-chartreuse cursor-pointer rounded-full bg-white/10"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-5 h-[2px] bg-white duration-300 transition-all origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-white duration-300 transition-opacity ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-white duration-300 transition-all origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black md:hidden flex flex-col justify-center px-8 gap-5 transition-opacity duration-300 text-white ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <span className="text-xs uppercase tracking-widest text-chartreuse font-mono font-bold">Menu</span>
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={() => setMobileMenuOpen(false)}
            className="text-[30px] font-bold text-white hover:text-chartreuse transition-colors"
          >
            {l.label}
          </a>
        ))}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#footer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-2 text-base text-black bg-chartreuse px-5 py-2.5 rounded-full font-bold"
          >
            Get in touch ↗
          </a>
          <a
            href={RESUME_URL}
            download="Zahra_Shahid-Resume.pdf"
            className="inline-flex items-center gap-2 text-base text-white border border-white/50 px-5 py-2.5 rounded-full font-medium"
          >
            Resume ↓
          </a>
        </div>

        <div className="flex items-center gap-5 pt-4 border-t-2 border-white/20">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-chartreuse"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-chartreuse"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
        </div>
        <p className="text-sm text-white/70">Web Developer • Data Analyst • Software Engineer • Data Scraper</p>
      </div>
    </>
  );
};
