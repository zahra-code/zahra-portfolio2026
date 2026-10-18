import React from 'react';

interface MarqueeTickerProps {
  items?: string[];
  bgClass?: string;
  textClass?: string;
  /** Tailwind text-color classes cycled across items so the line keeps changing colour */
  colors?: string[];
  starClass?: string;
  reverse?: boolean;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = ['WEB DEVELOPER', 'DATA ANALYST', 'SOFTWARE ENGINEER', 'DATA SCRAPER'],
  bgClass = 'bg-black border-y-2 border-black',
  textClass = 'text-[11px] sm:text-[13px] font-semibold tracking-[0.18em] uppercase',
  colors = ['text-white', 'text-chartreuse', 'text-cornflower', 'text-white'],
  starClass = 'text-rust-soft',
  reverse = false,
}) => {
  const group = (key: string, hidden: boolean) => (
    <ul
      key={key}
      className={`flex items-center shrink-0 ${textClass}`}
      aria-hidden={hidden || undefined}
    >
      {[...items, ...items].map((item, i) => (
        <li key={`${key}-${i}`} className="flex items-center">
          <span className={`${colors[i % colors.length]} px-3.5 sm:px-5`}>{item}</span>
          <span className={`${starClass} select-none`} aria-hidden="true">
            ✳︎
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`group relative w-full overflow-hidden py-2 sm:py-2.5 select-none z-20 ${bgClass}`}
      role="marquee"
      aria-label={items.join(', ')}
    >
      <div
        className={`flex w-max whitespace-nowrap motion-reduce:animate-none group-hover:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {group('a', false)}
        {group('b', true)}
      </div>
    </div>
  );
};
