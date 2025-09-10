# Frontend Task 1

## Live Demo & Repository

- **Live Demo**: [https://mr-islam.vercel.app/](https://mr-islam.vercel.app/)
- **Repository**: [https://github.com/abdelrahman-samy-dev/frontend-first-task](https://github.com/abdelrahman-samy-dev/frontend-first-task)

## Features

- **Bilingual Interface**: Full English/Arabic support with RTL layout
- **Dark/Light Theme**: Smooth theme transitions with visual persistence
- **Three.js Hero Visual**: Lightweight, interactive 3D background effect
- **Smooth Animations**: AOS (Animate On Scroll) with staggered reveals
- **Responsive Design**: Mobile-first approach (mobile, tablet, desktop)
- **Back-to-Top Button**: Smooth scrolling navigation enhancement
- **Modern UI/UX**: Clean navigation, refined spacing, and visual hierarchy
- **Accessible**: Semantic HTML, proper focus states, and screen reader support

## Technologies Used

### Core Technologies

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Custom properties, gradients, glassmorphism, clip-path, masks, backdrop-filter
- **Vanilla JavaScript (ES6+)**: Internationalization, theming, and UI interactions

### Animations & 3D

- **AOS (Animate On Scroll)**: Section entrance animations
- **Three.js**: Lightweight hero canvas with 3D effects

### Assets & Typography

- **Lucide Icons**: Crisp vector icons
- **Google Fonts**:
  - Poppins (English)
  - Cairo / Noto Sans Arabic (Arabic)

## Project Structure

```
VClasses/
├─ assets/
│  └─ images/           # Logos, store badges (EN/AR), hero visuals
├─ index.html           # Main HTML document
├─ style.css            # Modular styles with clear organization
├─ main.js              # i18n, theme toggle, UI interactions
└─ README.md           # Project documentation
```

## CSS Architecture

The `style.css` file is organized into clear, modular sections:

1. **Reset & Base**: Normalize and base styles
2. **Navigation Bar**: Header and navigation styling
3. **Hero Section**: Main banner and Three.js integration
4. **Features**: Feature showcase styling
5. **Classrooms**: Classroom section layout
6. **Quote**: Testimonial/quote styling
7. **Download Here**: App download section
8. **Footer**: Footer layout and styling
9. **Utilities & Animations**: Helper classes and transitions
10. **Responsive & RTL**: Media queries and RTL support

## Internationalization (i18n)

### Text Content

- Text nodes use `data-en` and `data-ar` attributes
- Language switching updates content and document direction (`dir="rtl"` for Arabic)

### Store Badges

Dual image system for app store badges:

- Default: Show `.store-img.en`, hide `.store-img.ar`
- RTL mode: Show `.store-img.ar`, hide `.store-img.en`

## Theme System

### Implementation

- Theme controlled by `data-theme` attribute on `documentElement`
- Color tokens managed via CSS custom properties
- Smooth transitions for all theme-aware components

### Theme Variables

```css
:root {
  --primary-color: #your-color;
  --background-color: #your-bg;
  /* More theme variables */
}

[data-theme="dark"] {
  --primary-color: #dark-color;
  --background-color: #dark-bg;
  /* Dark theme overrides */
}
```

## Accessibility Features

- **Semantic HTML**: Proper landmarks (`header`, `nav`, `main`, `footer`)
- **Color Contrast**: Sufficient contrast ratios in both themes
- **Keyboard Navigation**: Full keyboard accessibility with focus styles
- **Screen Readers**: Descriptive alt text and ARIA labels
- **Focus Management**: Visible focus indicators throughout

## Performance Optimizations

- **Lightweight Three.js**: Minimal WebGL setup with transparent overlay
- **Deferred Scripts**: Non-blocking JavaScript loading
- **Optimized Images**: Appropriate sizes and formats
- **Efficient DOM Handling**: Minimal thrashing in scroll/interaction handlers

## Installation & Setup

### Option A: Direct Open (Simplest)

```bash
# Clone the repository
git clone https://github.com/abdelrahman-samy-dev/frontend-first-task.git
cd frontend-first-task

# Open in browser
# Double-click index.html OR use "Open with Live Server" in VS Code
```

### Option B: Local Server (Recommended)

```bash
# Using Node.js
npx http-server -p 5173 .

# Or using Python
python -m http.server 5173

# Then open: http://localhost:5173
```

## Deployment

The project is hosted via **GitHub Pages** from the main branch.

### To Redeploy:

1. Push changes to the `main` branch
2. Ensure GitHub Pages is enabled in repository settings
3. Changes will be automatically deployed

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features Used**:
  - CSS Custom Properties
  - CSS Grid & Flexbox
  - ES6+ JavaScript
  - WebGL (Three.js)

## Useful Resources

- **AOS Documentation**: [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)
- **Lucide Icons**: [https://lucide.dev/](https://lucide.dev/)
- **Three.js Documentation**: [https://threejs.org/](https://threejs.org/)
- **Google Fonts**: [https://fonts.google.com/](https://fonts.google.com/)

## Future Enhancements

- **LocalStorage Persistence**: Save theme and language preferences
- **Reduced Motion Support**: Respect `prefers-reduced-motion` media query
- **Lazy Loading**: Implement IntersectionObserver for images
- **Component Architecture**: Extract sections for framework migration
- **Service Worker**: Add offline capabilities
- **Performance Monitoring**: Add analytics and performance tracking

## Project Highlights

### Technical Achievements

- **Zero Framework Dependencies**: Pure vanilla JavaScript implementation
- **Bilingual RTL Support**: Complete Arabic language integration
- **Theme System**: Comprehensive dark/light mode with smooth transitions
- **Performance Focused**: Optimized loading and rendering
- **Accessibility First**: WCAG compliant design and implementation

### Design Achievements

- **Modern Aesthetics**: Contemporary design with glassmorphism effects
- **Responsive Excellence**: Seamless experience across all devices
- **Interactive Elements**: Engaging Three.js visuals and smooth animations
- **User Experience**: Intuitive navigation and clear information hierarchy

## License

This project is submitted for assessment and demonstration purposes.

## Developer

**Abdelrahman Samy**

- **Live Demo**: [https://mr-islam.vercel.app/](https://mr-islam.vercel.app/)
- **Repository**: [https://github.com/abdelrahman-samy-dev/frontend-first-task](https://github.com/abdelrahman-samy-dev/frontend-first-task)

---

## Submission Information

- **Task**: Frontend Developer First Task
- **Deadline**: September 3, 2025
- **Status**: Complete and ready for review

---

_Built with modern web technologies_