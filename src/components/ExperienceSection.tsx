import React from 'react';

const EXPERIENCE_POINTS = [
  'Worked in a software development internship environment.',
  'Worked with AI-assisted development workflows and web application development.',
  'Gained exposure to a project involving a Django backend and React frontend.',
  'Worked on improving website UI and understanding application workflows.',
];

const EDUCATION_FACTS: Array<[string, string]> = [
  ['Degree', 'BS Computer Science'],
  ['University', 'COMSATS University Islamabad'],
  ['Campus', 'Lahore Campus'],
  ['Duration', '2024 – 2028'],
  ['CGPA', '3.56 / 4.00'],
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-20 w-full bg-cornflower py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b-2 border-black scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-3 rounded-full bg-rust" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-black">
            04 / Education & Experience
          </span>
          <span className="h-[2px] flex-1 bg-black/20" />
        </div>

        <h2
          id="experience-heading"
          className="text-[34px] sm:text-[48px] md:text-[58px] leading-[1.1] text-black font-normal tracking-tight max-w-3xl mb-10 sm:mb-14"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Where I'm{' '}
          <span className="bg-chartreuse px-2.5 py-0.5 rounded-lg inline-block border-2 border-black font-bold">
            learning
          </span>{' '}
          and where I've started working.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Education */}
          <article
            aria-labelledby="education-title"
            className="bg-white border-2 border-black rounded-[32px] p-7 sm:p-9 shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs uppercase tracking-wider font-mono font-bold px-3 py-1 rounded-full border-2 border-black text-black">
                Education
              </span>
              <span className="text-xs font-mono font-bold text-black/60">2024 – 2028</span>
            </div>
            <h3
              id="education-title"
              className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              BS Computer Science
            </h3>
            <dl className="divide-y-2 divide-black/10 border-t-2 border-black/10">
              {EDUCATION_FACTS.map(([label, value]) => (
                <div key={label} className="flex flex-wrap items-baseline justify-between gap-x-4 py-3">
                  <dt className="text-xs font-mono font-bold uppercase tracking-wider text-black/60">
                    {label}
                  </dt>
                  <dd className="text-sm sm:text-base font-semibold text-black text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Experience */}
          <article
            aria-labelledby="experience-title"
            className="bg-white border-2 border-black rounded-[32px] p-7 sm:p-9 shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs uppercase tracking-wider font-mono font-bold px-3 py-1 rounded-full border-2 border-black text-black">
                Internship
              </span>
              <span className="text-xs font-mono font-bold text-black/60">2026</span>
            </div>
            <h3
              id="experience-title"
              className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Software Engineer Intern
            </h3>
            <p className="text-sm font-semibold text-black/70 mb-6">BinaryMind Technologies</p>
            <ul className="space-y-3 pt-5 border-t-2 border-black/10">
              {EXPERIENCE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-black/85 leading-relaxed">
                  <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-black shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
