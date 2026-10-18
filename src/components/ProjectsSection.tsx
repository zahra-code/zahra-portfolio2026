import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Category = 'Web Development' | 'Data Analysis' | 'Web Scraping' | 'Databases' | 'Python Apps' | 'Data Visualization';

interface Project {
  number: string;
  title: string;
  categories: Category[];
  description: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  contain?: boolean;
  imageBg?: string;
  live?: string;
  code?: string;
  note?: string;
}

const REPO = 'https://github.com/zahra-code';

const PROJECTS: Project[] = [
    {
    number: '01',
    title: 'Dubai Fabrics — E-commerce Website',
    categories: ['Web Development'],
    description:
      'A full-stack e-commerce website for Dubai Fabrics / Dubai Silk Center, featuring Ladies, Gents and Bridal categories, product browsing, customer accounts, wishlist and cart functionality. Includes a fully independent admin panel to manage products, orders, stock, and website details, with integrated email verification workflows.',
    tech: ['React', 'Node.js', 'Express.js', 'Supabase', 'Tailwind CSS', 'Brevo'],
    image: '/projects/dubai-fabrics.jpg',
    imageAlt: 'Screenshot of the Dubai Fabrics homepage showing navigation, hero banner and shopping links',
    live: 'https://dubai-fabrics.vercel.app/',
  },
  {
    number: '02',
    title: 'DentalPay — Payment Management Application',
    categories: ['Web Development'],
    description:
      'A collaborative MERN-stack payment management application built with a team for a real client. My contributions include installment plans, payment tracking and status workflows, automatic payment clearance when installments are completed, and payment analytics.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'MongoDB Aggregation'],
    image: '/projects/dentalpay.png',
    imageAlt: 'Screenshot of the DentalPay payments dashboard',
    note: 'Collaborative team project for a private client; no public demo link.',
  },
  {
    number: '03',
    title: 'Tea-Rex — Virtual Assistant',
    categories: ['Python Apps'],
    description:
      'A Python virtual assistant that supports voice interaction, email sending, alarms and reminders, task management, weather updates, web searches, website launching and music playback.',
    tech: ['Python', 'pyttsx3', 'Speech Recognition', 'Wikipedia', 'smtplib', 'datetime', 'webbrowser'],
    image: '/projects/tearex.jpg',
    imageAlt: 'Tea-Rex robot mascot used as the cover for the virtual assistant',
    contain: true,
    code: `${REPO}/PYTHON-projects/tree/main/virtual%20assistant-TeaRex`,
  },
  {
    number: '04',
    title: 'Upwork Scraper Pro — Web Scraping',
    categories: ['Web Scraping'],
    description:
      'A Python web scraping tool that collects job listing information from Upwork pages, extracts relevant fields, organizes results into structured records and exports the data to CSV for further analysis.',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'CSV'],
    image: '/projects/upwork.jpg',
    imageAlt: 'Upwork logo used as the cover for the job scraping project',
    contain: true,
    imageBg: '#14a800',
    code: `${REPO}/WEB-SCRAPING-projects/tree/main/UPWORK%20Scraping%20Project`,
  },
  {
    number: '05',
    title: 'MyAuthManager — Database Application',
    categories: ['Databases', 'Python Apps'],
    description:
      'A Python desktop account-management application built with Tkinter and MySQL. Supports creating, updating and deleting user accounts, with SQL triggers and stored procedures used for database practice.',
    tech: ['Python', 'Tkinter', 'MySQL', 'mysql.connector', 'SQL', 'Stored Procedures', 'Triggers'],
    image: '/projects/myauthmanager.jpg',
    imageAlt: 'Illustration of a person at a computer with a login form',
    contain: true,
    code: `${REPO}/DATA-ANALYSIS-projects/tree/main/MyAuthManager-mysql%2Bpython`,
  },
  {
    number: '06',
    title: 'Airbnb Data Visualization — Tableau',
    categories: ['Data Analysis', 'Data Visualization'],
    description:
      'An interactive Tableau dashboard exploring Airbnb data through price comparisons by ZIP code, bedroom and bed counts, alongside yearly revenue trends and geographic patterns.',
    tech: ['Tableau Public', 'Data Visualization', 'Exploratory Data Analysis'],
    image: '/projects/airbnb-dashboard.jpg',
    imageAlt: 'Screenshot of the Airbnb Tableau dashboard showing pricing and revenue visualizations',
    contain: true,
    live: 'https://public.tableau.com/app/profile/zahra.shahid3024/viz/AirbnbProject_17216247607370/Dashboard1',
  },
  {
    number: '07',
    title: 'Amazon Product Scraper',
    categories: ['Web Scraping', 'Python Apps'],
    description:
      'A Python web scraping project focused on extracting Amazon product information and organizing the collected results for further analysis.',
    tech: ['Python', 'Web Scraping'],
    image: '/projects/amazon.png',
    imageAlt: 'Screenshot of the Amazon product scraping project',
    contain: true,
    code: 'https://github.com/zahra-code/WEB-SCRAPING-projects/tree/main/AmazonProject',
  },
  {
    number: '08',
    title: 'Real Estate Data Analysis',
    categories: ['Data Analysis', 'Web Scraping'],
    description:
      'Collected real estate listings from Zameen.com and Lamudi.pk, stored the data in a SQL database, and prepared it for analysis and visualization in Power BI.',
    tech: ['Python', 'Web Scraping', 'SQL', 'Power BI', 'Data Cleaning'],
    image: '/projects/realestate.png',
    imageAlt: 'Screenshot of the real estate dashboard in Power BI',
    contain: true,
    code: `${REPO}/DATA-ANALYSIS-projects/tree/main/Real_Estate%20Project`,
  },
  {
    number: '09',
    title: 'Titanic Data Explorer',
    categories: ['Data Analysis', 'Data Visualization'],
    description:
      'Performed exploratory analysis of the Titanic passenger dataset, cleaning and visualizing survival patterns across passenger class, gender, age, family size and embarkation details.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    image: '/projects/titanic-analysis.png',
    imageAlt: 'Charts from the Titanic exploratory analysis notebook',
    contain: true,
    code: `${REPO}/DATA-ANALYSIS-projects/tree/main/TitanicDatasetAnalysis-Python`,
  },
  {
    number: '10',
    title: 'Data Pro Survey Analyzer — Power BI',
    categories: ['Data Analysis', 'Data Visualization'],
    description:
      'Analyzed professional survey responses in Power BI, cleaning and visualizing data to explore salary, age, gender and preferred programming-language patterns.',
    tech: ['Power BI', 'DAX', 'Data Cleaning', 'Data Visualization'],
    image: '/projects/survey.jpg',
    imageAlt: 'Survey analysis report cover',
    contain: true,
    code: `${REPO}/DATA-ANALYSIS-projects/tree/main/PowerBi-DataProcessingSurveyAnalysis`,
  },
  {
    number: '11',
    title: 'Bike Buyer Insights — Excel',
    categories: ['Data Analysis'],
    description:
      'Cleaned and analyzed a bike buyer dataset in Excel to explore purchasing patterns across customer demographics and other buyer characteristics, presenting findings through visual summaries.',
    tech: ['Microsoft Excel', 'Data Cleaning', 'Data Analysis'],
    image: '/projects/bike.jpg',
    imageAlt: 'Cover image for the Bike Buyer Insights Excel project',
    contain: true,
    imageBg: '#c78bf5',
    code: `${REPO}/DATA-ANALYSIS-projects/blob/main/Excel-BikeBuyerDatasetAnalysis.xlsx`,
  },
  {
    number: '12',
    title: 'Credit Card Transactions Dashboard',
    categories: ['Data Analysis', 'Data Visualization'],
    description:
      'Transformed raw credit card transaction CSV files into an SQL database and connected it to Power BI. Built a dashboard using DAX for revenue analysis, month-over-month comparisons, customer age and income grouping, and transaction and customer-pattern visualizations.',
    tech: ['SQL', 'Power BI', 'DAX', 'Data Transformation', 'Data Visualization'],
    image: '/projects/credit.png',
    imageAlt: 'Power BI dashboard analyzing credit card transactions and customer demographics',
    contain: true,
  },
  {
    number: '13',
    title: 'Super Sales Analysis',
    categories: ['Data Analysis', 'Data Visualization'],
    description:
      'A sales analysis project exploring sales performance, business metrics and trends through data analysis and visualizations.',
    tech: ['Data Analysis', 'Data Visualization'],
    image: '/projects/sales.png',
    imageAlt: 'Screenshot of the Super Sales Analysis project',
    contain: true,
  },
  {
    number: '14',
    title: 'PwC Switzerland — Power BI Job Simulation',
    categories: ['Data Analysis', 'Data Visualization'],
    description:
      'Completed a virtual job simulation through Forage, developing business analysis and data visualization skills through practical scenarios and Power BI dashboard work.',
    tech: ['Power BI', 'Data Visualization', 'Business Analysis'],
    image: '/projects/pwc.png',
    imageAlt: 'Screenshot of the PwC Switzerland Power BI job simulation dashboard',
    contain: true,
  },
];

const FILTERS: Array<'All' | Category> = ['All', 'Web Development', 'Data Analysis', 'Web Scraping', 'Databases', 'Python Apps', 'Data Visualization'];

const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Card ---------- */

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article
    data-project-card
    aria-labelledby={`proj-title-${project.number}`}
    className="group relative bg-white text-black border-2 border-black rounded-[28px] p-4 sm:p-5 flex flex-col shadow-[8px_8px_0px_0px_#000] shrink-0 w-[86vw] sm:w-[480px] lg:w-[520px] snap-start will-change-transform"
  >
    {/* Screenshot (genuine) or honest placeholder */}
    <div
      data-reveal
      className="relative overflow-hidden rounded-2xl border-2 border-black aspect-[16/8] bg-white"
      style={project.imageBg ? { backgroundColor: project.imageBg } : undefined}
    >
      {project.image ? (
        <img
          data-parallax
          src={project.image}
          alt={project.imageAlt ?? ''}
          loading="lazy"
          width={1440}
          height={900}
          className={`absolute inset-y-0 -inset-x-[8%] w-[116%] max-w-none h-full ${
            project.contain ? 'object-contain p-2' : 'object-cover object-top'
          }`}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-6"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        >
          <span
            className="text-[96px] leading-none font-black text-black/10 select-none"
            style={{ fontFamily: 'var(--font-heading)' }}
            aria-hidden="true"
          >
            {project.number}
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/60">
            Screenshot not added yet
          </span>
        </div>
      )}
    </div>

    <div className="flex flex-col flex-1 pt-4 px-1.5 pb-1">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="font-mono text-sm font-bold tabular-nums">{project.number}</span>
        <ul className="flex flex-wrap justify-end gap-1.5" aria-label="Categories">
          {project.categories.map((c) => (
            <li
              key={c}
              className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border-2 border-black"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>

      <h3
        id={`proj-title-${project.number}`}
        className="text-2xl sm:text-[26px] font-bold tracking-tight leading-[1.1] mb-2"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {project.title.split(' ').map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
            <span data-word className="inline-block">
              {word}
              {' '}
            </span>
          </span>
        ))}
      </h3>

      <p className="text-sm leading-relaxed text-black/80 mb-3">{project.description}</p>

      {project.tech.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 mb-4" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t} className="text-xs font-medium px-2.5 py-1 rounded-lg border border-black/70">
              {t}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-1">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-full bg-black text-white text-sm font-medium border-2 border-black hover:bg-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
            aria-label={`View live project: ${project.title} (opens in a new tab)`}
          >
            View Project <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-full bg-black text-white text-sm font-medium border-2 border-black hover:bg-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
            aria-label={`View code: ${project.title} (opens in a new tab)`}
          >
            View Code <span aria-hidden="true">↗</span>
          </a>
        )}
        {!project.live && !project.code && project.note && (
          <span className="text-xs font-mono text-black/60">{project.note}</span>
        )}
      </div>
    </div>
  </article>
);

/* ---------- Section ---------- */

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | Category>('All');
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const goToRef = useRef<(i: number) => void>(() => undefined);

  const visible = PROJECTS.filter((p) => filter === 'All' || p.categories.includes(filter));
  const count = visible.length;

  const [playing, setPlaying] = useState(true);
  const activeRef = useRef(0);
  const hoverRef = useRef(false);
  const inViewRef = useRef(false);
  const lastUserRef = useRef(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const inner = innerRef.current;
    if (!section || !track || !inner) return;

    const cards = Array.from(inner.querySelectorAll<HTMLElement>('[data-project-card]'));
    const mm = gsap.matchMedia();
    setActive(0);
    track.scrollLeft = 0;

    const padLeft = () => parseFloat(getComputedStyle(inner).paddingLeft) || 0;

    goToRef.current = (i) => {
      const card = cards[i];
      if (!card) return;
      track.scrollTo({
        left: card.offsetLeft - padLeft(),
        behavior: prefersReduced() ? 'auto' : 'smooth',
      });
    };

    const ctx = gsap.context(() => {
      /* Title + screenshot reveal as each card slides into view */
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        cards.forEach((card) => {
          const reveal = card.querySelector('[data-reveal]');
          const words = card.querySelectorAll('[data-word]');
          const st = { trigger: card, scroller: track, horizontal: true, start: 'left 92%', once: true };
          gsap.fromTo(
            reveal,
            { clipPath: 'inset(0 100% 0 0)' },
            { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.out', scrollTrigger: st },
          );
          gsap.from(words, {
            yPercent: 110,
            duration: 0.7,
            stagger: 0.04,
            ease: 'power3.out',
            scrollTrigger: st,
          });
        });
      });

      /* Subtle 3D tilt: fine pointers only */
      mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
        const cleanups: Array<() => void> = [];
        cards.forEach((card) => {
          gsap.set(card, { transformPerspective: 900 });
          const rx = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power3' });
          const ry = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power3' });
          const move = (e: PointerEvent) => {
            const r = card.getBoundingClientRect();
            ry(((e.clientX - r.left) / r.width - 0.5) * 6);
            rx((0.5 - (e.clientY - r.top) / r.height) * 6);
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

    /* Keep the indicator and the image parallax in sync with the scrolling track */
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        let best = 0;
        let bestD = Infinity;
        cards.forEach((c, i) => {
          const d = Math.abs(c.offsetLeft - padLeft() - track.scrollLeft);
          if (d < bestD) {
            bestD = d;
            best = i;
          }
        });
        const max = track.scrollWidth - track.clientWidth;
        setActive(max > 0 && track.scrollLeft >= max - 2 ? cards.length - 1 : best);
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${max > 0 ? track.scrollLeft / max : 1})`;
        }
        if (!prefersReduced()) {
          const tr = track.getBoundingClientRect();
          const mid = tr.left + tr.width / 2;
          cards.forEach((c) => {
            const img = c.querySelector('[data-parallax]');
            if (!img) return;
            const r = c.getBoundingClientRect();
            const rel = (r.left + r.width / 2 - mid) / tr.width;
            gsap.set(img, { xPercent: Math.max(-5, Math.min(5, -rel * 6)) });
          });
        }
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener('scroll', onScroll);
      mm.revert();
      ctx.revert();
    };
  }, [filter]);

  // Autoplay: advance every few seconds; pauses on hover, focus, touch and manual use
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(([e]) => (inViewRef.current = e.isIntersecting), { threshold: 0.15 });
    io.observe(section);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || count < 2) return;
    const id = window.setInterval(() => {
      const idle = Date.now() - lastUserRef.current > 7000;
      if (!inViewRef.current || hoverRef.current || document.hidden || !idle) return;
      goToRef.current((activeRef.current + 1) % count);
    }, 4200);
    return () => window.clearInterval(id);
  }, [playing, count, filter]);

  // Keep ScrollTrigger measurements right once the screenshot has loaded
  useEffect(() => {
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => window.clearTimeout(t);
  }, [filter]);

  const markUser = () => {
    lastUserRef.current = Date.now();
  };

  const step = (dir: 1 | -1) => {
    markUser();
    goToRef.current((active + dir + count) % count);
  };

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        step(e.key === 'ArrowRight' ? 1 : -1);
      }
    },
    [active, count], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="relative z-20 w-full bg-cornflower pt-8 sm:pt-10 pb-12 sm:pb-16 border-b-2 border-black scroll-mt-16 overflow-x-clip"
    >
      <div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-rust" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-black">
              02 / Projects
            </span>
            <span className="h-[2px] flex-1 bg-black/20" />
            <span className="text-xs uppercase tracking-wider bg-chartreuse text-black px-3 py-1 rounded-full font-bold border border-black">
              {count} {count === 1 ? 'project' : 'projects'}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h2
                id="projects-heading"
                className="text-[34px] sm:text-[44px] md:text-[52px] leading-[1.05] text-black font-normal tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Things I've{' '}
                <span className="bg-chartreuse px-2.5 py-0.5 rounded-lg inline-block border-2 border-black font-bold">
                  Built
                </span>
              </h2>
              <p className="mt-2 text-black/80 text-base sm:text-[17px] max-w-2xl leading-snug">
                From web applications to data analysis and automation, here's what I've been building and
                learning.
              </p>
            </div>

            <div role="group" aria-label="Filter projects by category" className="flex flex-wrap lg:justify-end gap-2 lg:max-w-[520px]">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                  className={`min-h-[40px] px-4 rounded-full border-2 border-black text-xs sm:text-sm font-bold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black ${
                    filter === f ? 'bg-black text-white' : 'bg-white text-black hover:bg-chartreuse'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects. Use the left and right arrow keys to move between projects."
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
          onFocus={(e) => {
            if (e.target.matches(':focus-visible')) hoverRef.current = true;
          }}
          onBlur={() => (hoverRef.current = false)}
          onPointerDown={markUser}
          onTouchStart={markUser}
          onWheel={markUser}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
        >
          <div
            ref={trackRef}
            data-track
            className="overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [scroll-padding-left:1.25rem] sm:[scroll-padding-left:2rem] lg:[scroll-padding-left:max(3rem,calc((100vw-72rem)/2+3rem))]"
          >
            <div
              ref={innerRef}
              className="relative flex w-max gap-5 sm:gap-8 px-5 sm:px-8 lg:px-[max(3rem,calc((100vw-72rem)/2+3rem))] pt-2 pb-8"
            >
              {visible.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Active-card + progress indicator */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-sm font-bold tabular-nums whitespace-nowrap" aria-live="polite">
            {String(Math.min(active + 1, count)).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <span className="relative h-[3px] flex-1 bg-black/20 rounded-full overflow-hidden" aria-hidden="true">
            <span
              ref={progressRef}
              className="absolute inset-0 bg-black origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous project"
              className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next project"
              className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              onClick={() => setPlaying((v) => !v)}
              aria-pressed={playing}
              aria-label={playing ? 'Pause automatic slideshow' : 'Play automatic slideshow'}
              className="h-11 sm:h-9 px-4 sm:px-3 rounded-full border-2 border-black bg-black text-white text-xs font-mono font-bold hover:bg-white hover:text-black transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black mr-2"
            >
              {playing ? 'Pause' : 'Play'}
            </button>
            {visible.map((p, i) => (
              <button
                key={p.number}
                type="button"
                onClick={() => {
                  markUser();
                  goToRef.current(i);
                }}
                aria-label={`Go to project ${p.number}: ${p.title}`}
                aria-current={i === active}
                className="w-6 h-6 hidden md:flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full"
              >
                <span
                  className={`block rounded-full border-2 border-black transition-all ${
                    i === active ? 'w-3.5 h-3.5 bg-black' : 'w-2.5 h-2.5 bg-white'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
