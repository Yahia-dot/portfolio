import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'stimulator',
    title: 'Stimulator',
    shortDescription: 'Web-based testing and evaluation platform for FlexiCharge (Electric Vehicle charging system).',
    fullDescription: 'A comprehensive web-based testing and evaluation platform for FlexiCharge, an Electric Vehicle charging system, developed in collaboration with Knowit IT Consult. Built using an agile methodology, the platform enables extensive integration, end-to-end, and performance testing across all system components. The solution is containerized with Docker and deployed on AWS using CI/CD pipelines, providing a reliable, scalable, and automated testing infrastructure.',
    tags: ['Python', 'React', 'TypeScript', 'Docker', 'GitHub Actions', 'AWS', 'Pytest', 'Playwright', 'Locust'],
    images: [
      new URL('../assets/projects/Stimulator/1.png', import.meta.url).href,
      new URL('../assets/projects/Stimulator/2.png', import.meta.url).href,
      new URL('../assets/projects/Stimulator/3.png', import.meta.url).href,
      new URL('../assets/projects/Stimulator/4.png', import.meta.url).href,
      new URL('../assets/projects/Stimulator/5.png', import.meta.url).href,
    ],
    year: '2025',
    role: 'Full-Stack Developer & QA Engineer',
    featured: true,
  },
  {
    id: 'urban-research',
    title: 'Urban Research',
    shortDescription: 'Web-based visualization tool for analyzing research data on built environment and human behavior.',
    fullDescription: 'A web-based visualization tool developed in collaboration with an Architecture Professor at Jönköping University to analyze research data on the built environment and human behavior. The platform uses geolocation data with heatmap integration to provide spatial insights, featuring a React frontend connected to a MySQL database for interactive data exploration. It is containerized with Docker and deployed using automated GitHub Actions for streamlined updates and maintenance.',
    tags: ['React', 'JavaScript', 'MySQL', 'Docker', 'GitHub Actions'],
    images: [
      new URL('../assets/projects/UrbanResearch/1.png', import.meta.url).href,
      new URL('../assets/projects/UrbanResearch/2.png', import.meta.url).href,
      new URL('../assets/projects/UrbanResearch/3.png', import.meta.url).href,
    ],
    year: '2024',
    role: 'Full-Stack Developer',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    shortDescription: 'Full-stack luxury fragrance e-commerce platform with complete shopping experience, admin dashboard, and payment integration.',
    fullDescription: 'A full-stack e-commerce project built from the ground up to strengthen my ability to design, develop, and deliver a complete production-ready application. The goal of the project was to master modern web technologies and gain hands-on experience across the entire development lifecycle, from architecture and backend logic to frontend design, payments, and deployment. The platform served as a practical environment to deepen my understanding of scalable system design, database modeling, authentication, and containerized workflows using industry-standard tools.',
    tags: ['Next.js', 'TypeScript', 'React', 'Express.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker', 'Stripe'],
    images: [
      new URL('../assets/projects/E-commerce/1.png', import.meta.url).href,
      new URL('../assets/projects/E-commerce/2.png', import.meta.url).href,
      new URL('../assets/projects/E-commerce/3.png', import.meta.url).href,
      new URL('../assets/projects/E-commerce/4.png', import.meta.url).href,
      new URL('../assets/projects/E-commerce/5.png', import.meta.url).href,
      new URL('../assets/projects/E-commerce/6.png', import.meta.url).href,
      new URL('../assets/projects/E-commerce/7.png', import.meta.url).href,

    ],
    year: '2025',
    role: 'Full-Stack Developer',
  },
  {
    id: 'multiplayer-battleship',
    title: 'Multiplayer Battleship Game',
    shortDescription: 'Online multiplayer Battleship game for Android with real-time gameplay and Firebase synchronization.',
    fullDescription: 'An engaging online multiplayer Battleship game developed for Android as part of the Android Development course at Jönköping University, where the project received a top grade. The application features real-time multiplayer gameplay with user data synchronization via Firebase and a modern, responsive UI built entirely with Jetpack Compose, following Android development best practices and Material Design principles.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    images: [
      new URL('../assets/projects/Android/1.png', import.meta.url).href,
      new URL('../assets/projects/Android/2.png', import.meta.url).href,
      new URL('../assets/projects/Android/3.png', import.meta.url).href,
      new URL('../assets/projects/Android/4.png', import.meta.url).href,
      new URL('../assets/projects/Android/5.png', import.meta.url).href,
    ],
    year: '2024',
    role: 'Android Developer',
  },
  {
    id: 'workout-nutrition-tracker',
    title: 'Workout & Nutrition Tracker',
    shortDescription: 'iOS app for tracking workouts and nutrition with personalized routines and meal plans.',
    fullDescription: 'A comprehensive iOS application developed as part of the iOS Development course at Jönköping University, where the project received a top grade. The app helps users track workouts and nutrition plans, logging progress, and monitoring performance over time. It integrates external APIs for enhanced functionality and uses SwiftData for efficient local data persistence, following iOS development best practices.',
    tags: ['Swift', 'SwiftData', 'APIs'],
    images: [
      new URL('../assets/projects/IOS/1.png', import.meta.url).href,
      new URL('../assets/projects/IOS/2.png', import.meta.url).href,
      new URL('../assets/projects/IOS/3.png', import.meta.url).href,
      new URL('../assets/projects/IOS/4.png', import.meta.url).href,
      new URL('../assets/projects/IOS/5.png', import.meta.url).href,
    ],
    year: '2024',
    role: 'iOS Developer',
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}
