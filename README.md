# Portfolio

A modern, animated portfolio website showcasing software engineering projects with a warm amber and dark wood aesthetic. Built with React 19, TypeScript, Framer Motion, and Tailwind CSS v4.

## Features

- Full-screen hero section with background image and social links
- Smooth scroll navigation with glassmorphism effects
- Animated project cards with featured project highlighting
- Detailed project pages with image carousel and lightbox gallery
- Contact form with Formspree integration
- Responsive design with mobile hamburger menu
- Sophisticated animations using Framer Motion
- Hash-based routing for seamless navigation

## Tech Stack

- **React 19** - Latest React with TypeScript in strict mode
- **TypeScript** - Type-safe development
- **Vite** - Fast development server and optimized production builds
- **Tailwind CSS v4** - Utility-first CSS framework with custom color system
- **React Router DOM v7** - Client-side routing with hash navigation
- **Framer Motion** - Declarative animations and transitions
- **Formspree** - Serverless form handling for contact submissions
- **ESLint** - Code quality and consistency

## Design System

The portfolio features a warm **Amber & Dark Wood** color scheme using Tailwind's default palette:

- **amber-** (50-950): Primary accent color for highlights, buttons, and interactive elements
- **wood-** (50-950): Neutral dark tones (mapped from Tailwind's stone palette)
- **Glassmorphism**: Backdrop blur effects with semi-transparent backgrounds
- **Custom Icons**: Hand-crafted SVG icons for consistent design language

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the application.

### Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/               # Images and static assets
│   └── projects/         # Project screenshots and images
├── components/           # React components
│   ├── icons/            # SVG icon components
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ImageGallery.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectsSection.tsx
│   └── index.ts          # Component barrel exports
├── data/                 # Data and content
│   ├── projects.ts       # Project information
│   └── index.ts          # Data exports
├── pages/                # Page components
│   ├── Home.tsx          # Main landing page
│   └── ProjectDetails.tsx # Individual project page
├── types/                # TypeScript type definitions
│   └── project.ts        # Project interface
├── App.tsx               # Root component with routing
├── main.tsx              # Application entry point
└── index.css             # Global styles with Tailwind directives
```

## Path Aliases

Import from `src/` using the `@/` alias configured in `vite.config.ts`:

```tsx
import { Hero } from '@/components'
import { projects } from '@/data'
import type { Project } from '@/types/project'
```

## Animation System

The portfolio uses Framer Motion for sophisticated animations:

- **Viewport-triggered animations** - Elements animate when scrolling into view
- **Staggered children** - Sequential animation of list items
- **Hover interactions** - Scale, rotate, and lift effects on interactive elements
- **Page transitions** - Smooth entrance and exit animations
- **Scroll indicators** - Infinite bounce animations for UX guidance

Example usage:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## Contact Form

The contact form uses [Formspree](https://formspree.io) for serverless form handling:

- No backend required
- Spam protection built-in
- Email notifications
- Success/error status messages
- Form reset on successful submission

The form endpoint is configured in [ContactSection.tsx](src/components/ContactSection.tsx).

## Project Data

Projects are defined in [src/data/projects.ts](src/data/projects.ts) with the following structure:

```typescript
interface Project {
  id: string                  // Unique identifier for routing
  title: string               // Project name
  shortDescription: string    // Brief overview (shown on detail page)
  fullDescription: string     // Detailed description
  tags: string[]              // Technology tags
  images: string[]            // Image URLs for carousel
  liveUrl?: string            // Optional live demo link
  githubUrl?: string          // Optional GitHub repository
  year: string                // Year of completion
  role: string                // Your role in the project
  duration: string            // Project duration
  highlights: string[]        // Key achievements/features
  featured?: boolean          // Featured project (spans 2 columns)
}
```

## Routing

The app uses hash-based routing for compatibility with static hosting:

- `/` - Home page with hero, projects, contact sections
- `/project/:id` - Individual project detail pages

Navigation uses smooth scrolling for same-page links and React Router for project details.

## Customization

### Adding a New Project

1. Add project images to `src/assets/projects/[project-name]/`
2. Add project data to `src/data/projects.ts`
3. Images will automatically appear in the carousel and lightbox

### Changing Colors

Tailwind CSS default colors are used. To customize:

1. Edit `tailwind.config.js` to extend the theme
2. Use Tailwind's color system (e.g., `amber-500`, `stone-900`)

### Adding New Icons

1. Create a new component in `src/components/icons/`
2. Export it from `src/components/icons/index.ts`
3. Import and use in your components

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox
- CSS Backdrop Filter for glassmorphism effects

## License

This project is for portfolio purposes.
