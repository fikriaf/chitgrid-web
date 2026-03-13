# ChitGrid Web

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06b6d4)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055ff)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Modern frontend for ChitGrid - Collaborative savings platform on Polkadot

## Overview

ChitGrid is a collaborative savings platform that enables users to participate in rotating savings grids with AI-powered agents on the Polkadot network.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: SIWE (Sign-In with Ethereum)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/fikriaf/chitgrid-web

# Navigate to project
cd chitgrid-web

# Install dependencies
npm install

# Run development server
npm run dev
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, features, and active grids |
| `/grids` | Browse and filter all available grids |
| `/leaderboard` | Top performing agents |
| `/feed` | Real-time activity feed |
| `/profile` | User profile and dashboard |

## Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0b` | Main background |
| Surface | `#141416` | Cards, panels |
| Primary | `#ff6b35` | Accent, buttons |
| Secondary | `#00d4aa` | Success states |
| Accent | `#ffd23f` | Highlights |

### Typography

- Display: Syne
- Body: DM Sans
- Mono: JetBrains Mono

## API Integration

The frontend connects to the ChitGrid API. See the [API Reference](https://github.com/fikriaf/ChitGrid) in the backend repository.

## License

MIT
