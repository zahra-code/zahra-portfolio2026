import React, { useState } from 'react';

const PROJECT_TYPES = [
  'Full-Stack App',
  'Frontend / UI',
  'Student Collaboration',
  'Internship Opportunity',
  'Say hello ✳︎',
];

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState('Full-Stack App');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    const email = 'zahra.shahid.cs@gmail.com';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative z-20 w-full bg-cornflower py-20 sm:py-28 px-5 sm:px-8 md:px-12 border-b-2 border-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-3 rounded-full bg-rust" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-black">
            05 / Contact Me
          </span>
          <span className="h-[2px] flex-1 bg-black/20" />
          <span className="text-xs uppercase tracking-wider bg-chartreuse text-black px-3 py-1 rounded-full font-bold border border-black">
            Direct Reachout
          </span>
        </div>

        {/* Big Bold Headline */}
        <div className="mb-14 sm:mb-20">
          <h2
            className="text-[36px] sm:text-[54px] md:text-[68px] leading-[1.06] text-black font-normal tracking-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Have a project, idea, or opportunity in mind?{' '}
            <span className="bg-chartreuse px-3 py-1 rounded-xl border-2 border-black font-bold inline-block">
              Let's talk.
            </span>
          </h2>
          <p className="mt-4 text-black/85 text-lg sm:text-xl max-w-2xl leading-relaxed">
            I am always excited to discuss software engineering, creative frontend projects,
            internships, or academic collaborations.
          </p>
        </div>

        {/* Contact Layout Grid with Solid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Left Column: Direct Email & Quick Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white border-2 border-black rounded-[32px] p-7 sm:p-9 shadow-[8px_8px_0px_0px_#000]">
              <span className="text-xs font-mono uppercase text-rust tracking-wider font-bold block mb-3">
                DIRECT INBOX
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-2 break-all"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                zahra.shahid.cs@gmail.com
              </h3>
              <p className="text-sm text-black/80 font-medium mb-6">
                Copy my personal email address or click below to launch your default mail client directly.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 bg-black text-chartreuse hover:bg-rust hover:text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border-2 border-black transition-all shadow-sm cursor-pointer"
                >
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <rect x="4.5" y="4.5" width="6" height="6" rx="1" />
                    <path d="M3 7.5H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v1" />
                  </svg>
                </button>

                <a
                  href="mailto:zahra.shahid.cs@gmail.com"
                  className="inline-flex items-center gap-2 bg-chartreuse text-black hover:bg-rust hover:text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border-2 border-black transition-all shadow-sm"
                >
                  <span>Open Mail App</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* University & Location Badges */}
            <div className="bg-rust text-white border-2 border-black rounded-[32px] p-7 sm:p-8 space-y-4 shadow-[8px_8px_0px_0px_#000]">
              <div className="flex items-start gap-3">
                <span className="text-chartreuse text-lg font-bold">✳︎</span>
                <div>
                  <span className="font-bold block text-chartreuse font-mono text-xs uppercase tracking-wider">
                    Location
                  </span>
                  <span className="font-semibold text-white">Lahore, Punjab, Pakistan</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-chartreuse text-lg font-bold">✳︎</span>
                <div>
                  <span className="font-bold block text-chartreuse font-mono text-xs uppercase tracking-wider">
                    Institution
                  </span>
                  <span className="font-semibold text-white">COMSATS University Islamabad, Lahore Campus</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-chartreuse text-lg font-bold">✳︎</span>
                <div>
                  <span className="font-bold block text-chartreuse font-mono text-xs uppercase tracking-wider">
                    Program
                  </span>
                  <span className="font-semibold text-white">Bachelor of Science in Computer Science (CS '28)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form in Solid White Card */}
          <div className="lg:col-span-7 bg-white border-2 border-black rounded-[32px] p-7 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
            <h3
              className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Send a Direct Message
            </h3>
            <p className="text-sm text-black/70 mb-6 font-medium">
              Got a proposal, opportunity, or inquiry? Fill out the form below.
            </p>

            {submitted ? (
              <div className="bg-chartreuse border-2 border-black text-black p-6 rounded-2xl text-center space-y-2">
                <p className="font-bold text-lg">Thank you for reaching out!</p>
                <p className="text-sm text-black/85 font-medium">
                  Your message has been captured. I will get back to you at{' '}
                  <span className="font-mono font-bold">{formData.email || 'your email'}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project type tags */}
                <div>
                  <label className="block text-xs font-mono uppercase text-rust tracking-wider font-bold mb-2.5">
                    What are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`text-xs px-3.5 py-2 rounded-full border-2 border-black transition-all cursor-pointer font-bold ${
                          selectedType === type
                            ? 'bg-black text-chartreuse shadow-[2px_2px_0px_0px_#924B12]'
                            : 'bg-cornflower/40 text-black hover:bg-chartreuse'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-black tracking-wider mb-1.5 font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-cornflower/20 text-black border-2 border-black rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-rust"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-black tracking-wider mb-1.5 font-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-cornflower/20 text-black border-2 border-black rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-rust"
                    />
                  </div>
                </div>

                {/* Message input */}
                <div>
                  <label className="block text-xs font-mono uppercase text-black tracking-wider mb-1.5 font-bold">
                    Message / Project Brief
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about what you'd like to collaborate on..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-cornflower/20 text-black border-2 border-black rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-rust resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-chartreuse hover:bg-rust hover:text-white px-8 py-3 rounded-full text-sm font-bold border-2 border-black transition-all cursor-pointer shadow-[4px_4px_0px_0px_#924B12]"
                >
                  <span>Send Message</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
