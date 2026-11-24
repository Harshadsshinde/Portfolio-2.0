# Portfolio-2.0

An animated, full-stack developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, GSAP, Lenis and Three.js.

## Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4**, Framer Motion, GSAP, Lenis
- **Three.js** / React Three Fiber for the WebGL hero
- Client-side routing with React Router

## Commands

```bash
npm install
npm run dev      # local development
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Deployment

Deployed on Vercel. `vercel.json` pins the framework, build command and output
directory, and rewrites all routes to `index.html` for client-side routing.

## Routes

- `/` — home
- `/work` and `/work/:id` — projects and case studies
- `/about`, `/contact` — about and contact
