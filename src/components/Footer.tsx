import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Initialize Formspree with your Form ID
  const [state, handleSubmit] = useForm('xkjoezod');

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer
      id="footer"
      className="relative z-20 w-full bg-black text-white pt-16 sm:pt-20 pb-12 px-5 sm:px-8 md:px-12 border-t-2 border-chartreuse scroll-mt-20"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b-2 border-white/20">
          {/* Left Column: Heading, CTA, and Email */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-chartreuse">
              <span className="text-xl" aria-hidden="true">✳︎</span>
              <span className="text-xs font-mono uppercase tracking-widest font-bold">
                Get in Touch
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-[1.15]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Have an idea? Let's make it happen.
            </h2>

            <p className="text-white/90 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
              Whether you want to discuss a software project, explore a student collaboration,
              or chat about work opportunities—my inbox is always open.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="mailto:zahrashahid916@gmail.com"
                className="inline-flex items-center gap-2 bg-chartreuse text-black hover:bg-white hover:text-black font-bold text-sm sm:text-base px-6 py-3 rounded-full border-2 border-black transition-all shadow-[4px_4px_0px_0px_#94B6EF] hover:translate-x-[-1px] hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Send an email to Zahra Shahid (Let's talk)"
              >
                <span>Let's talk</span>
                <span className="text-base" aria-hidden="true">↗</span>
              </a>

              <a
                href="mailto:zahrashahid916@gmail.com"
                className="inline-block py-2.5 text-sm sm:text-base text-chartreuse hover:text-white underline underline-offset-4 font-mono font-bold transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chartreuse rounded px-1"
                aria-label="Direct email address: zahrashahid916@gmail.com"
              >
                zahrashahid916@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Social Links + Short Direct Message Box */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-chartreuse font-bold block">
                  Social Profiles
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/zahra-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-1.5 rounded-full bg-white/10 hover:bg-chartreuse hover:text-black text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zahra-shahid-466538320/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-1.5 rounded-full bg-white/10 hover:bg-chartreuse hover:text-black text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6 1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/zahra-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 inline-flex items-center justify-between bg-black text-white hover:bg-chartreuse hover:text-black border-2 border-white/40 px-4 py-2.5 rounded-xl transition-all shadow-[3px_3px_0px_0px_#E6E279] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="View Zahra Shahid's GitHub profile (opens in a new tab)"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span className="font-mono text-sm font-bold">GitHub</span>
                  </div>
                  <span className="text-xs text-chartreuse group-hover:text-black transition-colors" aria-hidden="true">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/zahra-shahid-466538320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 inline-flex items-center justify-between bg-black text-white hover:bg-chartreuse hover:text-black border-2 border-white/40 px-4 py-2.5 rounded-xl transition-all shadow-[3px_3px_0px_0px_#E6E279] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="View Zahra Shahid's LinkedIn profile (opens in a new tab)"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6 1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                    <span className="font-mono text-sm font-bold">LinkedIn</span>
                  </div>
                  <span className="text-xs text-chartreuse group-hover:text-black transition-colors" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Short Direct Message Form */}
            <div className="bg-white text-black border-2 border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000]">
              <span className="text-xs font-mono uppercase tracking-wider text-cornflower-deep font-bold block mb-3">
                Send a Direct Message
              </span>

              {/* Formspree Success State */}
              {state.succeeded ? (
                <div className="bg-chartreuse text-black border-2 border-black p-3.5 rounded-xl text-center text-xs font-bold">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full bg-cornflower/20 text-black placeholder-black/60 border-2 border-black rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:border-rust"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-[10px] mt-1 font-bold" />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your email"
                        className="w-full bg-cornflower/20 text-black placeholder-black/60 border-2 border-black rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:border-rust"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1 font-bold" />
                    </div>
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      rows={2}
                      required
                      placeholder="Short message or brief hello..."
                      className="w-full bg-cornflower/20 text-black placeholder-black/60 border-2 border-black rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:border-rust resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-1 font-bold" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-black text-chartreuse hover:bg-rust hover:text-white font-bold py-2 rounded-lg text-xs transition-colors cursor-pointer border-2 border-black shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                    {!state.submitting && <span>→</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Big Name Typography Banner */}
        <div className="py-8 select-none overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span
              className="text-[40px] sm:text-[64px] md:text-[88px] lg:text-[110px] font-black tracking-tighter text-white leading-none block"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              ZAHRA SHAHID
            </span>
            <span className="text-chartreuse text-3xl sm:text-5xl select-none" aria-hidden="true">
              ✳︎
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/zahra-code"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-black text-chartreuse hover:bg-white hover:text-black border-2 border-white/40 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/zahra-shahid-466538320/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-black text-chartreuse hover:bg-white hover:text-black border-2 border-white/40 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6 1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 bg-chartreuse text-black hover:bg-white hover:text-black px-4 py-2.5 rounded-full border-2 border-black text-xs font-bold cursor-pointer transition-all shadow-[3px_3px_0px_0px_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Scroll back to the top of the page"
            >
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t-2 border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/80">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {currentYear} Zahra Shahid.</span>
            <span className="hidden sm:inline text-chartreuse" aria-hidden="true">•</span>
            <span className="text-chartreuse font-bold">Designed & built with curiosity.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-chartreuse" aria-hidden="true">✳︎</span>
            <span>Web Developer • Data Analyst • Software Engineer • Data Scraper</span>
            <span className="text-chartreuse" aria-hidden="true">✳︎</span>
            <span className="bg-chartreuse text-black px-2 py-0.5 rounded text-[11px] font-bold border border-black">
              CS '28
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};