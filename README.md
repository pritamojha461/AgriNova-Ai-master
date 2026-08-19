# AgriNova AI

**Grow Smarter. Sell Better.**

A premium frontend concept for an AI-driven agriculture marketplace that combines crop insights with marketplace discovery. Built as an MCA academic project for the Acdyon Technologies Frontend Challenge — Part 2.

## Features

- **Hero Section** — Clear value proposition with dashboard preview
- **Product Preview** — Realistic dashboard mockup with crop, health, market, and AI insights
- **Key Benefits** — Four core platform benefits
- **AI Insights** — Interactive tabbed insights (Crop Health, Weather, Market Trend)
- **Marketplace** — Demo product listings with category, location, and pricing
- **How It Works** — Three-step onboarding flow
- **Final CTA** — Compelling call-to-action section
- **Responsive Design** — Optimized for 390px mobile and 1440px desktop
- **Minimal Animations** — Subtle section reveals and tab transitions using Framer Motion

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI library |
| Vite 8 | Build tool |
| Tailwind CSS 4 | Utility-first styling |
| Lucide React | Icon library |
| Framer Motion | Minimal animations |

## Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/agrinova-ai.git
cd agrinova-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Deployment

This project is deploy-ready for **Vercel**:

1. Push to GitHub
2. Import the repository in Vercel
3. Vercel auto-detects Vite and deploys

No environment variables or server configuration needed.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductPreview.jsx
│   ├── Benefits.jsx
│   ├── Insights.jsx
│   ├── Marketplace.jsx
│   ├── HowItWorks.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Disclaimer

This is a **frontend concept project** built for academic purposes. All data shown (prices, insights, listings) is sample/demo data. No real AI processing, backend, or marketplace functionality exists.
