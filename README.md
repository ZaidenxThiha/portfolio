# Thiha Aung — Portfolio

An interactive personal portfolio for **Thiha Aung** — AI Engineer & Data Analyst and final-year Computer Science student at Ton Duc Thang University, Ho Chi Minh City.

Built as a polished single-page experience with an interactive WebGL liquid background, Apple-style "Liquid Glass" cards, and an animated tab explorer for browsing About, Education, Experience, Projects, Skills, and Contact. Includes an "Ask me anything" chat with mock responses.

## Tech stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** + shadcn/ui design tokens
- **Lucide** icons
- **WebGL** fluid-simulation background (pointer-driven + ambient motion)

## Features

- 🌊 Realistic, pointer-reactive **liquid background** with on-brand colors
- 🧊 **Liquid Glass** UI — frosted, translucent cards with a sliding indicator that morphs between tabs
- 🗂️ **Tab explorer** — switch between Me / Projects / Skills / Fun / Contact with animated glass transitions
- 💬 **Ask me anything** chat (`/chat`) with mock responses
- 📱 Fully responsive, with reduced-motion support

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run check    # lint + typecheck + build
```

## Project structure

```
src/
  app/            # routes: / (portfolio) and /chat
  components/     # FluidCursor, PortfolioShell, Explorer, Hero, chat/, ui/
  lib/            # portfolio data, quick actions, chat responses
  types/          # shared TypeScript types
public/           # images, videos, favicon
```

## Contact

- ✉️ gghex645@gmail.com
- 🐙 [github.com/ZaidenxThiha](https://github.com/ZaidenxThiha)
- 💼 [LinkedIn](https://www.linkedin.com/in/thiha-aung-726384330)
