# Zahra Shahid | Portfolio

Personal portfolio of **Zahra Shahid**, a Computer Science student at COMSATS University Islamabad (Lahore Campus), showing her work as a web developer, data analyst, software engineer and data scraper.

The site is a single-page, responsive React app with a mouse- and touch-scrubbed video hero, GSAP-powered animations, an auto-playing project showcase with category filters, and a contact form.

## Sections

| Section | What it shows |
| --- | --- |
| **Hero** | Video that scrubs with the mouse or a finger swipe, a short intro and quick links |
| **About** | Short bio, downloadable CV and an interactive Skills & Tools explorer |
| **Projects** | Auto-playing carousel of projects with filters, screenshots and live or code links |
| **Services** | Web development, data analysis, web scraping and automation, and database solutions |
| **Education & Experience** | BS Computer Science (2024 to 2028) and the BinaryMind Technologies internship |
| **Contact** | Contact form (Formspree), email, GitHub and LinkedIn |

## Tech stack

- React 18 + TypeScript, built with Vite
- Tailwind CSS
- GSAP and ScrollTrigger for animation
- Formspree for the contact form

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check and build to dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/     Navbar, Hero, About, Projects, Services, Experience, Footer, ...
  hooks/          useTypewriter
public/
  projects/       project screenshots and favicon
  hero-video.mp4  hero background video
  Zahra_Shahid-Resume.pdf
```

## Editing content

- **Projects:** edit the `PROJECTS` list at the top of `src/components/ProjectsSection.tsx`. Add the screenshot to `public/projects/` and reference it as `/projects/<file>`. Only add links that work.
- **Skills:** edit `SKILL_GROUPS` in `src/components/AboutSection.tsx`.
- **SEO and social previews:** edit `index.html`. Once the site has its final domain, add `<link rel="canonical">`, `og:url`, and make the `og:image` and `twitter:image` URLs absolute (for example `https://your-domain/og-image.png`).

## Deployment

The repo includes a `netlify.toml` (build command `npm run build`, publish directory `dist`). Connect the repository to Netlify, or run the build and upload `dist/` to any static host.

## Accessibility and performance notes

- Respects `prefers-reduced-motion`: the marquee strips stop moving, entrance animations are skipped and the skills explorer stops rotating.
- Keyboard-friendly: carousel and skills tabs support arrow keys, and interactive elements have visible focus rings.
- Project screenshots are lazy-loaded.

## Contact

[zahrashahid916@gmail.com](mailto:zahrashahid916@gmail.com) · [GitHub](https://github.com/zahra-code) · [LinkedIn](https://www.linkedin.com/in/zahra-shahid-466538320/)
