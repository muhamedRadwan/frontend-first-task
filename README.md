VClasses – Frontend Task

A modern, responsive landing page for a geology learning platform with bilingual (Arabic/English) support, dark/light themes, rich animations, and polished UX components.

Repository to submit: https://github.com/abdelrahman-samy-dev/frontend-first-task.git

Features
- Bilingual interface (English/Arabic) with full RTL support
- Dark/Light theme toggle with smooth transitions
- Hero section with interactive visual
- Download Here section with localized store badges (EN/AR images)
- Elegant Footer with gradient title and social links
- Back-to-top button with subtle animations
- AOS (Animate On Scroll) animations with tuned durations
- Fully responsive design (desktop, tablet, mobile)
- Clean, reorganized CSS with clear sections and comments

Tech Stack
- HTML5 semantic structure
- CSS3 with custom properties (CSS variables), gradients, glassmorphism, clip-path, masks, backdrop-filter
- Vanilla JavaScript (ES6+) for i18n, theming, interactivity
- AOS (Animate On Scroll) for section animations
- Lucide Icons for crisp, lightweight icons
- Google Fonts: Poppins (EN), Cairo / Noto Sans Arabic (AR)
- Three.js (used for Hero visual)

Project Structure
VClasses/
- assets/
  - images/                      # Logos, store badges, teacher, etc.
- index.html                      # Main HTML page
- style.css                       # Styles (logically organized with comments)
- main.js                         # JavaScript (i18n, theme, UI behaviors)
- README.md

Getting Started
1) Clone or download the project.
2) Open index.html directly in your browser (no build step required).

Optional: Serve locally for best experience (any static server):
Using Node's http-server
npx http-server -p 5173 .
or Python
python -m http.server 5173

Then open http://localhost:5173

Internationalization (EN / AR)
- Text elements include data-en and data-ar attributes.
- Language switching updates texts and layout direction.
- For store badges in the Download section, there are two images per store:
  - img.store-img.en and img.store-img.ar
  - CSS toggles their display based on [dir="rtl"] and JS syncs on language change.

Example CSS logic
.store-img.ar { display: none; }
.store-img.en { display: block; }
[dir="rtl"] .store-img.ar { display: block; }
[dir="rtl"] .store-img.en { display: none; }

How language changes are applied (excerpt from main.js)
// Update images for language
const enImages = downloadSection.querySelectorAll('.store-img.en');
const arImages = downloadSection.querySelectorAll('.store-img.ar');
if (lang === 'ar') {
  enImages.forEach(img => img.style.display = 'none');
  arImages.forEach(img => img.style.display = 'block');
} else {
  enImages.forEach(img => img.style.display = 'block');
  arImages.forEach(img => img.style.display = 'none');
}

Theme (Dark / Light)
- Theme is controlled via a data-theme attribute on documentElement.
- CSS variables handle colors for both themes.
- The toggle persists visually and updates components live.

Typography
- Global EN font: Poppins
- Arabic fonts: Cairo, Noto Sans Arabic
- Applied consistently to key headings like hero-title, footer-title, etc.

Download Here Section
- Full-width background with centered max-width container
- Localized store buttons (Windows / Huawei / Google Play / App Store)
- Language-specific logos per store (two <img> elements per store)
- AOS animations for text, buttons, and visuals

Footer
- Organized into brand, quick links, and social columns
-.footer-title uses a linear gradient clipped to text for a premium look
- Fully supports EN/AR and dark/light modes

Back to Top
- Appears after scrolling
- Smooth scrolling back to top
- Subtle hover and active states

AOS Animations
- Added to the Download and Footer sections
- data-aos-duration calibrated to faster, snappier timings as requested
- Example
<div class="download-left" data-aos="fade-right" data-aos-duration="600" data-aos-delay="100">...</div>

Hero Visual (Three.js)
- Lightweight Three.js scene to add a premium, interactive feel to the Hero area
- Transparent WebGL canvas layered within .hero-visual

Note: We intentionally removed Three.js shapes from the Features background per request to keep it clean.

Responsiveness & RTL
- Multiple media queries for desktop, tablet, and mobile
- [dir="rtl"] selectors for Arabic alignment and mirroring
- Careful spacing adjustments for smaller devices

CSS Organization
style.css is structured with clear comment blocks, for example:
- CSS Reset & Base
- Navigation Bar
- Hero
- Features
- Classrooms
- Quote
- Download Here
- Footer
- Utilities & Animations
- Responsive & RTL Sections

This makes the file easy to navigate and maintain while preserving all functionality.

Useful Links
- Repo (submission): https://github.com/abdelrahman-samy-dev/frontend-first-task.git
- AOS Docs: https://michalsnik.github.io/aos/
- Lucide Icons: https://lucide.dev/
- Three.js: https://threejs.org/
- Google Fonts: https://fonts.google.com/

Assets
- All images are stored under assets/images/.
- Store badges are provided in EN/AR pairs (e.g., windows-en.png / windows-ar.png).

Credits
- Icons: Lucide
- Fonts: Poppins, Cairo, Noto Sans Arabic
- Animations: AOS
- 3D: Three.js

License
This project is for assessment/demo purposes.