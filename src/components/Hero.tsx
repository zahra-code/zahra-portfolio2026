import React, { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const TYPEWRITER_TEXT =
  'I turn ideas and messy data into software that works. Got something worth building?';

const PILLS = [
  { label: 'About me', href: '#about' },
  { label: 'What i can do', href: '#services' },
  { label: 'Get in touch', href: '#footer' },
];

export const Hero: React.FC = () => {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 38, 600);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = async () => {
    const email = 'zahrashahid916@gmail.com';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col justify-end pb-8 sm:pb-10 md:pb-12 px-5 sm:px-8 md:px-12 overflow-hidden">
      {/* Content container - max-w-[445px], anchored down near bottom */}
      <div className="max-w-[445px] w-full relative z-10">
        {/* 1. Blurred intro label */}
        <div
          className="pointer-events-none select-none mb-3 sm:mb-4 text-black font-normal"
          style={{
            fontSize: 'clamp(17px, 3.8vw, 24px)',
            lineHeight: 1.3,
            filter: 'blur(3.5px)',
            WebkitFilter: 'blur(3.5px)',
          }}
        >
          Hey there, I'm Zahra Shahid,
          <br />
          CS '28 at COMSATS University Islamabad, Lahore Campus
        </div>

        {/* 2. Typewriter text */}
        <p
          className="text-black font-normal mb-4 sm:mb-5"
          style={{
            fontSize: 'clamp(17px, 3.8vw, 24px)',
            lineHeight: 1.35,
            minHeight: '50px',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-cursor-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className="flex flex-wrap gap-y-1.5 items-center"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {PILLS.map((pill) => (
            <a
              key={pill.label}
              href={pill.href}
              className="inline-flex items-center justify-center bg-white text-black border border-black/20 rounded-full text-[13px] sm:text-[14px] px-4 sm:px-5 py-[0.55em] sm:py-[0.35em] mx-[0.2em] mb-[0.3em] whitespace-nowrap hover:bg-black hover:text-chartreuse transition-colors duration-200 cursor-pointer select-none no-underline shadow-sm"
            >
              {pill.label}
            </a>
          ))}

          {/* 1 outline pill button with email */}
          <button
            type="button"
            onClick={handleCopyEmail}
            title={copied ? 'Copied to clipboard!' : 'Copy email address'}
            className="inline-flex items-center justify-center text-black bg-white/90 border border-black/30 rounded-full text-[13px] sm:text-[14px] px-4 sm:px-5 py-[0.55em] sm:py-[0.35em] mx-[0.2em] mb-[0.3em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-rust hover:text-white hover:border-rust transition-colors duration-200 cursor-pointer select-none relative shadow-sm"
          >
            <span>
              Reach me:{' '}
              <span className="underline underline-offset-1 font-bold">
                zahrashahid916@gmail.com
              </span>
            </span>

            {/* 12x12 copy icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
              aria-hidden="true"
            >
              <rect x="4.5" y="4.5" width="6" height="6" rx="1" />
              <path d="M3 7.5H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v1" />
            </svg>

            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-rust text-white text-[11px] px-2.5 py-0.5 rounded-full pointer-events-none transition-opacity shadow-md font-mono">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
