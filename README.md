# Balu R — Portfolio

Personal portfolio for **Balu R**, Data Engineer (Python & SQL).

Built with **Vite + React + Tailwind CSS + Three.js + GSAP**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
balu-portfolio/
├── public/
│   └── favicon.svg           # Site icon
│
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   └── ThreeCanvas.jsx   # Three.js animation + boot sequence
│   │   ├── ui/
│   │   │   ├── Ico.jsx           # Inline SVG icon library (no API calls)
│   │   │   ├── LoadingOverlay.jsx
│   │   │   └── Navigation.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Experience.jsx
│   │       ├── Projects.jsx
│   │       ├── Education.jsx
│   │       └── Footer.jsx
│   │
│   ├── data/
│   │   └── clientData.js     # ← Edit all portfolio content here
│   │
│   ├── hooks/
│   │   └── useSpotlight.js   # Cursor glow effect hook
│   │
│   ├── styles/
│   │   └── index.css         # Global styles + CSS variables
│   │
│   ├── App.jsx               # Root component + GSAP ScrollTrigger setup
│   └── main.jsx              # Entry point
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## ✏️ Customising Content

All portfolio data lives in **`src/data/clientData.js`** — edit name, title, experience, projects, skills etc. there. No need to touch any component files.

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| Vite | Build tool & dev server |
| React 18 | UI framework |
| Tailwind CSS v4 | Utility styling |
| Three.js | 3D background animation |
| GSAP + ScrollTrigger | Scroll-driven animations |

---

## 🌐 Deployment

### Netlify (drag & drop)
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Netlify CLI
```bash
npm run build
npx netlify deploy --prod --dir=dist
```

### Vercel
```bash
npm i -g vercel
vercel --prod
```
