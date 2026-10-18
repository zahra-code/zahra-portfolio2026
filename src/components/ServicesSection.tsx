import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type VisualKind = 'web' | 'data' | 'scrape' | 'db';

interface ServiceCard {
  number: string;
  kind: VisualKind;
  title: string;
  description: string;
  skills: string[];
  details: string[];
}

const SERVICES: ServiceCard[] = [
  {
    number: '01',
    kind: 'web',
    title: 'Web Development',
    description:
      'Responsive websites, interactive interfaces, e-commerce features, APIs, and full-stack applications.',
    skills: ['React', 'JavaScript', 'Node.js', 'Express', 'Django','Tailwind CSS'],
    details: [
      'Mobile-first, accessible interfaces built from reusable components',
      'REST APIs and server logic with Node.js/Express or Django',
      'E-commerce features such as carts, listings, and checkout flows',
    ],
  },
  {
    number: '02',
    kind: 'data',
    title: 'Data Analysis',
    description:
      'Data cleaning, exploratory analysis, SQL queries, dashboards, and visualization.',
    skills: ['Python','Numpy','Matplotlib','Seaborn', 'Pandas', 'MySQL', 'Excel', 'Power BI', 'Tableau'],
    details: [
      'Cleaning messy datasets into reliable, analysis-ready tables',
      'Exploratory analysis that surfaces trends and outliers',
      'Dashboards and charts that make findings easy to act on',
    ],
  },
  {
    number: '03',
    kind: 'scrape',
    title: 'Web Scraping & Automation',
    description:
      'Collect publicly accessible web data, parse listings, structure datasets, and automate browser tasks.',
    skills: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas','Playwright','requests'],
    details: [
      'Parsing listings and pages into clean, structured datasets',
      'Browser automation for repetitive click-and-copy tasks',
      'Only publicly accessible data, collected responsibly',
    ],
  },
  {
    number: '04',
    kind: 'db',
    title: 'Database Solutions',
    description:
      'SQL queries, CRUD operations, data storage, retrieval, and database integration.',
    skills: ['MySQL', 'MongoDB', 'Python','PostgreSQL', 'SQLite'],
    details: [
      'Schema design and well-structured SQL queries',
      'CRUD operations wired into applications and scripts',
      'Reliable storage and retrieval, relational or document-based',
    ],
  },
];

/* ---------- Unique animated visuals (inline SVG, colour via currentColor) ---------- */

const Visual: React.FC<{ kind: VisualKind }> = ({ kind }) => {
  const common = {
    viewBox: '0 0 240 130',
    className: 'w-full h-full',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (kind === 'web') {
    return (
      <svg {...common}>
        <rect x="20" y="12" width="200" height="106" rx="10" />
        <path d="M20 34h200" />
        <circle cx="34" cy="23" r="2.5" fill="currentColor" />
        <circle cx="46" cy="23" r="2.5" fill="currentColor" />
        <circle cx="58" cy="23" r="2.5" fill="currentColor" />
        <path className="svc-line svc-l1" d="M36 52h90" />
        <path className="svc-line svc-l2" d="M36 68h128" />
        <path className="svc-line svc-l3" d="M36 84h70" />
        <path d="M150 90l-10 10 10 10M178 90l10 10-10 10" className="svc-bracket" />
        <path className="svc-caret" d="M114 82v14" strokeWidth={3} />
      </svg>
    );
  }
  if (kind === 'data') {
    return (
      <svg {...common}>
        <path d="M24 108h196M24 16v92" />
        <rect className="svc-bar svc-b1" x="40" y="70" width="22" height="38" rx="3" fill="currentColor" fillOpacity={0.25} />
        <rect className="svc-bar svc-b2" x="76" y="50" width="22" height="58" rx="3" fill="currentColor" fillOpacity={0.25} />
        <rect className="svc-bar svc-b3" x="112" y="62" width="22" height="46" rx="3" fill="currentColor" fillOpacity={0.25} />
        <rect className="svc-bar svc-b4" x="148" y="34" width="22" height="74" rx="3" fill="currentColor" fillOpacity={0.25} />
        <rect className="svc-bar svc-b5" x="184" y="44" width="22" height="64" rx="3" fill="currentColor" fillOpacity={0.25} />
        <path className="svc-trend" d="M32 78L75 54l36 12 38-34 48 10" pathLength={1} />
      </svg>
    );
  }
  if (kind === 'scrape') {
    return (
      <svg {...common}>
        <rect x="26" y="12" width="188" height="106" rx="10" />
        {[0, 1, 2].map((i) => (
          <g key={i} className={`svc-row svc-r${i + 1}`}>
            <rect x="38" y={24 + i * 30} width="30" height="22" rx="4" />
            <path d={`M80 ${31 + i * 30}h80M80 ${41 + i * 30}h50`} />
            <path d={`M182 ${35 + i * 30}h20`} strokeWidth={4} />
          </g>
        ))}
        <path className="svc-scan" d="M20 20h200" strokeWidth={3.5} />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <g>
        <ellipse cx="100" cy="26" rx="46" ry="12" />
        <path d="M54 26v26c0 7 20 12 46 12s46-5 46-12V26" />
        <path d="M54 52v26c0 7 20 12 46 12s46-5 46-12V52" />
        <path d="M54 78v26c0 7 20 12 46 12s46-5 46-12V78" />
      </g>
      <path d="M150 64h40" strokeDasharray="3 6" />
      <rect className="svc-doc svc-d1" x="190" y="30" width="32" height="22" rx="4" />
      <rect className="svc-doc svc-d2" x="190" y="58" width="32" height="22" rx="4" />
      <rect className="svc-doc svc-d3" x="190" y="86" width="32" height="22" rx="4" />
      <circle className="svc-packet" cx="100" cy="64" r="4.5" fill="currentColor" />
    </svg>
  );
};

/* ---------- Card ---------- */

interface CardProps {
  service: ServiceCard;
  index: number;
  open: boolean;
  onToggle: () => void;
}

const ServiceCardView: React.FC<CardProps> = ({ service, index, open, onToggle }) => {
  const panelId = `svc-panel-${service.number}`;
  const btnId = `svc-btn-${service.number}`;
  const tilt = [-1.5, 1.2, -1, 1.5][index % 4];

  return (
    <article
      data-svc-card
      data-tilt={tilt}
      aria-labelledby={`svc-title-${service.number}`}
      className="svc-card group relative bg-white text-black border-2 border-black rounded-[32px] p-6 sm:p-9 grid md:grid-cols-[1.35fr_1fr] gap-6 md:gap-10 shadow-[8px_8px_0px_0px_#000] will-change-transform"
      style={{ ['--tilt' as string]: `${tilt}deg` }}
    >
      {/* cursor-following glare */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(300px circle at var(--mx,50%) var(--my,50%), rgba(0,0,0,0.06), transparent 60%)',
        }}
      />

      <div className="flex flex-col relative">
        <div className="flex items-center gap-3 mb-4">
          <span
            data-svc-number
            data-final={service.number}
            className="font-mono text-sm font-bold tabular-nums text-black"
            aria-label={`Service ${Number(service.number)}`}
          >
            {service.number}
          </span>
          <span className="h-[2px] w-10 bg-black/30" aria-hidden="true" />
        </div>

        <h3
          id={`svc-title-${service.number}`}
          className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight leading-[1.05] mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {service.title}
        </h3>
        <p className="text-sm sm:text-base leading-relaxed text-black/75 mb-4 max-w-xl">
          {service.description}
        </p>

        {/* Skills: hover/focus-revealed on pointer devices, always visible on touch */}
        <ul
          aria-label={`${service.title} skills`}
          className="flex flex-wrap gap-1.5 mb-4 transition-all duration-300 [@media(hover:hover)]:opacity-30 [@media(hover:hover)]:translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
        >
          {service.skills.map((skill) => (
            <li
              key={skill}
              className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white text-black border-2 border-black"
            >
              {skill}
            </li>
          ))}
        </ul>

        {/* Expandable details */}
        <div
          id={panelId}
          role="region"
          aria-labelledby={btnId}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 invisible'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-2 pb-4 text-sm leading-relaxed">
              {service.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span aria-hidden="true" className="font-bold">
                    →
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="mt-auto self-start inline-flex items-center gap-2 min-h-[44px] px-6 rounded-full bg-black text-white text-sm font-medium cursor-pointer transition-colors hover:bg-white hover:text-black border-2 border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
        >
          <span>{open ? 'show less' : 'more information'}</span>
          <span
            aria-hidden="true"
            className={`inline-block transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          >
            +
          </span>
        </button>
      </div>

      <div
        className="relative flex items-center justify-center text-black/70 order-first md:order-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
        style={{ transform: 'translateZ(40px)' }}
      >
        <div className="w-full max-w-[220px] md:max-w-[300px] aspect-[240/130]">
          <Visual kind={service.kind} />
        </div>
      </div>
    </article>
  );
};

/* ---------- Section ---------- */

export const ServicesSection: React.FC = () => {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const stack = stackRef.current;
    if (!section || !stage || !stack) return;

    const cards = Array.from(stack.querySelectorAll<HTMLElement>('[data-svc-card]'));
    const tiltOf = (c: HTMLElement) => Number(c.dataset.tilt ?? 0);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      /* Animated numbers: count up when each card enters */
      const countUp = (card: HTMLElement) => {
        const el = card.querySelector<HTMLElement>('[data-svc-number]');
        if (!el || el.dataset.done) return;
        el.dataset.done = '1';
        const counter = { v: 0 };
        gsap.to(counter, {
          v: Number(el.dataset.final),
          duration: 1,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = String(Math.round(counter.v)).padStart(2, '0');
          },
          onComplete: () => {
            el.textContent = el.dataset.final ?? '';
          },
        });
      };

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        cards.forEach((card) => {
          const el = card.querySelector<HTMLElement>('[data-svc-number]');
          if (el) el.textContent = '00';
        });
        return () => {
          cards.forEach((card) => {
            const el = card.querySelector<HTMLElement>('[data-svc-number]');
            if (el) {
              el.textContent = el.dataset.final ?? '';
              delete el.dataset.done;
            }
          });
        };
      });

      /* Desktop: pinned stack. Cards fly in, tilt and pile on top of each other */
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        stage.classList.add('svc-stacked');
        const n = cards.length;
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        cards.forEach((card, i) => {
          gsap.set(card, { zIndex: i + 1, transformPerspective: 1000 });
          if (i === 0) {
            gsap.set(card, { rotation: tiltOf(card), y: 0 });
            return;
          }
          tl.fromTo(
            card,
            { y: () => window.innerHeight * 0.9, rotation: tiltOf(card) * 5 },
            { y: 0, rotation: tiltOf(card), duration: 1, immediateRender: true },
            i - 1,
          );
          // cards beneath settle back, peeking out from under the new card
          for (let j = 0; j < i; j++) {
            tl.to(
              cards[j],
              { scale: 1 - 0.035 * (i - j), y: -18 * (i - j), duration: 1 },
              i - 1,
            );
          }
        });
        tl.to({}, { duration: 0.5 }); // short hold at the end

        const setActive = (idx: number) => {
          cards.forEach((c, i) => {
            const active = i === idx;
            (c as HTMLElement & { inert: boolean }).inert = !active;
            c.setAttribute('aria-hidden', active ? 'false' : 'true');
          });
          countUp(cards[idx]);
        };
        setActive(0);
        let last = 0;

        const st = ScrollTrigger.create({
          animation: tl,
          trigger: stage,
          start: 'top top+=72',
          end: () => `+=${window.innerHeight * 0.75 * (n - 1) + window.innerHeight * 0.4}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`;
            const idx = Math.min(n - 1, Math.floor(tl.time() + 0.6));
            if (idx !== last) {
              last = idx;
              setActive(idx);
            }
          },
        });

        return () => {
          st.kill();
          tl.kill();
          stage.classList.remove('svc-stacked');
          cards.forEach((c) => {
            (c as HTMLElement & { inert: boolean }).inert = false;
            c.removeAttribute('aria-hidden');
            gsap.set(c, { clearProps: 'all' });
          });
        };
      });

      /* Mobile / tablet: plain list, reveal on scroll */
      mm.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
        cards.forEach((card) => {
          gsap.set(card, { rotation: tiltOf(card) * 0.6 });
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
              onEnter: () => countUp(card),
            },
          });
        });
      });

      /* Cursor-following blob + 3D tilt: fine pointers only */
      mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
        const cursor = cursorRef.current;
        const label = cursorLabelRef.current;
        const cleanups: Array<() => void> = [];

        if (cursor && label) {
          const cx = gsap.quickTo(cursor, 'x', { duration: 0.45, ease: 'power3' });
          const cy = gsap.quickTo(cursor, 'y', { duration: 0.45, ease: 'power3' });
          const onMove = (e: PointerEvent) => {
            const r = section.getBoundingClientRect();
            cx(e.clientX - r.left);
            cy(e.clientY - r.top);
          };
          const onEnter = () => gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3 });
          const onLeave = () => gsap.to(cursor, { opacity: 0, scale: 0.4, duration: 0.3 });
          section.addEventListener('pointermove', onMove);
          section.addEventListener('pointerenter', onEnter);
          section.addEventListener('pointerleave', onLeave);
          cleanups.push(() => {
            section.removeEventListener('pointermove', onMove);
            section.removeEventListener('pointerenter', onEnter);
            section.removeEventListener('pointerleave', onLeave);
          });
          cards.forEach((card) => {
            const over = () => {
              label.textContent = 'Explore';
              gsap.to(cursor, { scale: 1.3, duration: 0.3 });
            };
            const out = () => {
              label.textContent = 'Scroll';
              gsap.to(cursor, { scale: 1, duration: 0.3 });
            };
            card.addEventListener('pointerenter', over);
            card.addEventListener('pointerleave', out);
            cleanups.push(() => {
              card.removeEventListener('pointerenter', over);
              card.removeEventListener('pointerleave', out);
            });
          });
        }

        cards.forEach((card) => {
          const rx = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power3' });
          const ry = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power3' });
          const move = (e: PointerEvent) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            ry((px - 0.5) * 6);
            rx((0.5 - py) * 6);
            card.style.setProperty('--mx', `${px * 100}%`);
            card.style.setProperty('--my', `${py * 100}%`);
          };
          const leave = () => {
            rx(0);
            ry(0);
          };
          card.addEventListener('pointermove', move);
          card.addEventListener('pointerleave', leave);
          cleanups.push(() => {
            card.removeEventListener('pointermove', move);
            card.removeEventListener('pointerleave', leave);
          });
        });

        return () => cleanups.forEach((fn) => fn());
      });
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  const toggle = (num: string) => setOpenMap((m) => ({ ...m, [num]: !m[num] }));

  return (
    <section
      id="services"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="relative z-20 w-full bg-cornflower text-black py-16 sm:py-24 px-5 sm:px-8 md:px-12 border-b-2 border-black overflow-x-clip"
    >
      <style>{`
        .svc-stacked .svc-stack{position:relative;height:min(600px,calc(100vh - 300px));min-height:470px}
        .svc-stacked [data-svc-card]{position:absolute;left:0;right:0;top:0}
        .svc-line{stroke-dasharray:100;animation:svc-draw 3.2s ease-in-out infinite}
        .svc-l2{animation-delay:.3s}.svc-l3{animation-delay:.6s}
        .svc-caret{animation:svc-blink 1s step-end infinite}
        .svc-bracket{animation:svc-float 2.4s ease-in-out infinite}
        .svc-bar{transform-box:fill-box;transform-origin:bottom;animation:svc-grow 2.6s ease-in-out infinite}
        .svc-b2{animation-delay:.15s}.svc-b3{animation-delay:.3s}.svc-b4{animation-delay:.45s}.svc-b5{animation-delay:.6s}
        .svc-trend{stroke-dasharray:1;stroke-dashoffset:1;animation:svc-trend 3.2s ease-in-out infinite}
        .svc-scan{animation:svc-scan 2.8s ease-in-out infinite}
        .svc-row{animation:svc-row 2.8s ease-in-out infinite;opacity:.45}
        .svc-r2{animation-delay:.45s}.svc-r3{animation-delay:.9s}
        .svc-doc{animation:svc-doc 2.4s ease-in-out infinite;opacity:.4}
        .svc-d2{animation-delay:.3s}.svc-d3{animation-delay:.6s}
        .svc-packet{animation:svc-packet 2.4s ease-in-out infinite}
        @keyframes svc-draw{0%{stroke-dashoffset:100}50%,100%{stroke-dashoffset:0}}
        @keyframes svc-blink{50%{opacity:0}}
        @keyframes svc-float{50%{transform:translateY(-4px)}}
        @keyframes svc-grow{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}
        @keyframes svc-trend{0%{stroke-dashoffset:1}60%,100%{stroke-dashoffset:0}}
        @keyframes svc-scan{0%,100%{transform:translateY(0)}50%{transform:translateY(88px)}}
        @keyframes svc-row{0%,100%{opacity:.45}50%{opacity:1}}
        @keyframes svc-doc{0%,100%{opacity:.3}50%{opacity:1}}
        @keyframes svc-packet{0%{transform:translate(0,0)}100%{transform:translate(90px,0)}}
        @media (prefers-reduced-motion: reduce){
          .svc-line,.svc-caret,.svc-bracket,.svc-bar,.svc-trend,.svc-scan,.svc-row,.svc-doc,.svc-packet{animation:none!important}
          .svc-trend{stroke-dashoffset:0}.svc-line{stroke-dashoffset:0}
        }
      `}</style>

      {/* Cursor-following indicator (decorative, pointer devices only) */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-[60] hidden [@media(hover:hover)_and_(pointer:fine)]:flex items-center justify-center -ml-8 -mt-8 w-16 h-16 rounded-full bg-black text-chartreuse opacity-0"
      >
        <span ref={cursorLabelRef} className="text-[10px] font-mono font-bold uppercase tracking-wider">
          Scroll
        </span>
      </div>

      <div ref={stageRef} className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 rounded-full bg-rust" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-black">
            03 / Services
          </span>
          <span className="h-[2px] flex-1 bg-black/20" />
          <span
            className="hidden lg:block relative h-[3px] w-32 bg-black/20 rounded-full overflow-hidden"
            aria-hidden="true"
          >
            <span
              ref={progressRef}
              className="absolute inset-0 bg-black origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </span>
        </div>

        <h2
          id="services-heading"
          className="max-w-4xl text-[32px] sm:text-[46px] md:text-[56px] leading-[1.1] text-black font-normal tracking-tight mb-8 sm:mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Four ways I turn{' '}
          <span className="bg-chartreuse px-2.5 py-0.5 rounded-lg inline-block border-2 border-black font-bold">
            code and data
          </span>{' '}
          into something useful.
        </h2>

        <div ref={stackRef} className="svc-stack flex flex-col gap-8 [perspective:1200px]">
          {SERVICES.map((service, i) => (
            <ServiceCardView
              key={service.number}
              service={service}
              index={i}
              open={!!openMap[service.number]}
              onToggle={() => toggle(service.number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
