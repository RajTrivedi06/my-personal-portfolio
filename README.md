# My React Portfolio

A modern, single-page-scrolling React portfolio featuring a dynamic landing page and stitched sections (Home, About, Skills, Projects, Connect). Uses Tailwind CSS for styling, Framer Motion (optional) for animations, and a fixed NavDock for intuitive navigation. Perfect for showcasing skills, experience, and projects.

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)

---

## Features

- **Landing Page** at the root (`/`) with a stylish background animation and a “Get Started” button.
- **Single-Scroll Layout** for Home, About, Skills, Projects, Connect (and optional Experience) pages. Users can scroll or click on the NavDock icons to jump to a specific section.
- **NavDock** (a fixed top navigation) that routes between `/Home`, `/About`, `/Skills`, `/Projects`, and `/Connect`, smoothly scrolling to those sections in one continuous page.
- **Responsive Design** courtesy of Tailwind CSS breakpoints, ensuring the site looks great on mobile, tablet, and desktop.
- **Animations and Eye Candy**:
  - **Background gradient animations** on the landing page.
  - **ShineBorder**, **WobbleCard**, and **Ripple** effects.
  - Potential usage of **Framer Motion** or ShadCN UI for transitions and tooltips.
- **Projects Section** showcases a grid of project cards with images and descriptions.
- **Skills Section** outlines technical and soft skills.
- **About Section** details personal story, values, and motivations.
- **Connect Section** for contact info, GitHub, and LinkedIn links.

---

## Project Structure

```
MY-WEBSITE
├── public/
├── src/
│   ├── assets/                # Images, icons, logos
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   ├── pages/                 # "Pages" or "Sections"
│   │   ├── LandingPage.tsx    # Root landing page
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── SkillsPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── ConnectPage.tsx
│   │   ├── SingleScrollPage.tsx   # The big container for Home/About/etc.
│   ├── lib/
│   │   └── utils.ts           # Helper functions
│   ├── App.tsx                # Defines React Router paths
│   ├── main.tsx               # Entry point
│   ├── index.css              # Global Tailwind imports
│   └── vite-env.d.ts          # Type definitions
├── package.json
├── README.md                  # This file
├── postcss.config.js          # PostCSS config
├── tailwind.config.js         # Tailwind config
├── tsconfig.json
└── vite.config.ts             # Vite config (if using Vite)
```

**Key Files**:

- **`App.tsx`**: Sets up routing for `"/"`, `"/Home"`, `"/About"`, etc.
- **`SingleScrollPage.tsx`**: The master container that displays sections in a continuous scroll.
- **`LandingPage.tsx`**: The root landing page with an animated button that leads to `/Home`.

---

## Getting Started

1. **Clone** the repository:

   ```bash
   git clone https://github.com/RajTrivedi06/my-personal-portfolio.git
   cd my-personal-portfolio
   ```

2. **Install** dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn
   ```

3. **Run** the development server:

   ```bash
   npm run dev
   ```

   - Open your browser at [http://localhost:5173](http://localhost:5173) (Vite’s default) or [http://localhost:3000](http://localhost:3000) if using Create React App.
   - The site auto-reloads on file changes.

4. **Explore** the code:
   - Update **`LandingPage.tsx`** for the landing screen.
   - Customize **`SingleScrollPage.tsx`** to add or remove sections (Home, About, Skills, Projects, Connect).
