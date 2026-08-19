# Design Decisions — AgriNova AI

## 1. Why did you choose this approach?

I chose **React + Vite + Tailwind CSS** because it's a modern, lightweight stack that lets me build a polished UI quickly without unnecessary complexity. Vite provides fast builds and hot reload, Tailwind gives consistent styling through utility classes, and React's component model keeps the code reusable and organized.

I focused on building a **single premium homepage** rather than multiple pages to deliver quality over quantity. Each section (Hero, Dashboard Preview, Insights, Marketplace, etc.) is a self-contained component that maps data from arrays, making the code short, readable, and easy to maintain.

**Framer Motion** was used sparingly — only for hero entrance, section reveals on scroll, and the insight tab transition — to meet the meaningful animation requirement without overdoing it.

## 2. What trade-off did you make because of the time limit?

- **Light theme only** — I chose a polished light theme over implementing an incomplete dark mode. A consistent single theme is better than a half-finished dual theme.
- **No routing** — Since this is a single-page concept, I used anchor links for navigation instead of React Router. This keeps the project simpler and avoids an unnecessary dependency.
- **Demo data over complex state** — All data is hardcoded in arrays within each component. There's no backend, context, or global state because nothing in the UI requires it. This keeps the code honest and easy to explain.
- **Component count** — I created one extra component (Benefits.jsx) beyond the specified folder structure because it genuinely reduces duplication. Every other component maps directly to a page section.

## 3. Where did you use AI and what did you personally verify/change?

I used **AI assistance** for:
- Generating initial component boilerplate and demo data content
- Suggesting Tailwind class combinations for layout and spacing
- Drafting the README and this document

I **personally verified and changed**:
- Overall component structure and code organization
- All demo data to ensure it's realistic but clearly marked as sample data
- Responsive behavior at 390px and 1440px breakpoints
- Animation choices — kept only meaningful ones, removed unnecessary ones
- Ensured no fake testimonials, user counts, or fabricated statistics exist anywhere
- Code readability — simplified wherever the AI-generated code was overly abstracted
- Tailwind configuration for the custom color palette

Every line of code in this project is something I can explain and justify.
