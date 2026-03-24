# lifeHRMS — Website

> The complete cloud HRMS platform by [Leanmo Software (Pvt) Ltd](https://leanmo.com)

![License](https://img.shields.io/badge/license-proprietary-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## Overview

Marketing website for **lifeHRMS** — a cloud-based Human Resource Management System offering payroll, attendance, leave management, performance reviews, recruitment, onboarding, and employee self-service.

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Markup     | HTML5 (semantic, accessible)        |
| Styling    | Tailwind CSS (CDN) + custom CSS     |
| JavaScript | Vanilla JS (no framework required)  |
| Fonts      | DM Sans, JetBrains Mono (Google)    |
| SEO        | JSON-LD structured data, Open Graph |

## Project Structure

```
lifehrms-website/
├── index.html              # Main page
├── css/
│   └── styles.css          # Custom styles (buttons, cards, animations)
├── js/
│   ├── tailwind.config.js  # Tailwind theme configuration
│   └── main.js             # Interactions (scroll, nav, FAQ, form)
├── assets/
│   └── favicon.svg         # SVG favicon
├── img/                    # Images (add your own)
│   └── (place og-image.jpg, twitter-card.jpg, screenshots here)
├── .gitignore
├── LICENSE
└── README.md
```

## Quick Start

### Option 1 — Open directly

```bash
# Just open in your browser
open index.html
```

### Option 2 — Local dev server

```bash
# Using Python
python3 -m http.server 8000

# Using Node (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Deployment

### GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

### Netlify / Vercel

1. Connect your GitHub repo
2. Build command: *(leave empty — static site)*
3. Publish directory: `.` or `/`
4. Deploy

### Custom Domain

1. Add a `CNAME` file with your domain: `leanmo.com`
2. Configure DNS A/CNAME records per your hosting provider

## SEO Features

- **Meta tags**: Title, description, keywords, robots, canonical
- **Open Graph**: Facebook/LinkedIn sharing cards
- **Twitter Cards**: Large image summary cards
- **JSON-LD Structured Data**:
  - `Organization` — company info, contact, logo
  - `SoftwareApplication` — product with pricing offers & ratings
  - `FAQPage` — 3 frequently asked questions
  - `BreadcrumbList` — navigation hierarchy
- **Semantic HTML5**: Proper heading hierarchy, landmarks, ARIA labels
- **Accessibility**: Focus states, label associations, contrast ratios

## Customization

### Colors

Edit `js/tailwind.config.js` to change the color palette:
- `brand` — primary blues
- `accent` — green highlights
- `surface` — neutral grays

### Content

All content is in `index.html`. Key sections:
- Hero, Features, Solutions, Workflow, Testimonial, Pricing, FAQ, Contact, Footer

### Images

Replace placeholder references in `img/` with your actual assets:
- `og-image.jpg` — 1200×630px for social sharing
- `twitter-card.jpg` — 1200×600px for Twitter
- Product screenshots for Solutions section

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari / Chrome (iOS/Android)

## License

Proprietary — © 2026 Leanmo Software (Pvt) Ltd. All rights reserved.
