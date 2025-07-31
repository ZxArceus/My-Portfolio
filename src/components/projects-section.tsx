'use client';

import type { Project } from '@/lib/types';
import { useState } from 'react';
import { ProjectCard } from './project-card';
import { ProjectDetailsModal } from './project-details-modal';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with a modern UI.',
    longDescription:
      'Developed a responsive and scalable e-commerce platform using React, Node.js, and a microservices architecture. Features include product catalog, shopping cart, user authentication, and a payment gateway integration.',
    image: 'https://placehold.co/600x450.png',
    tags: ['React', 'Node.js', 'TypeScript', 'Microservices'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Project Management Tool',
    description: 'A collaborative tool to manage tasks and projects.',
    longDescription:
      'Designed and built a web-based project management application that helps teams organize their work. It includes features like task boards, calendars, file sharing, and real-time collaboration.',
    image: 'https://placehold.co/600x450.png',
    tags: ['Vue.js', 'Firebase', 'Sass'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'A lightweight and fast blog built with a static site generator.',
    longDescription:
      'Created a personal blog to share insights on web development and technology. Optimized for performance and SEO, using a static site generator and a headless CMS for content management.',
    image: 'https://placehold.co/600x450.png',
    tags: ['Gatsby', 'GraphQL', 'Contentful', 'SEO'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets.',
    longDescription:
      'Built a powerful data visualization dashboard using D3.js and React. It allows users to explore and analyze large datasets through interactive charts and graphs, providing valuable insights.',
    image: 'https://placehold.co/600x450.png',
    tags: ['React', 'D3.js', 'Python', 'Flask'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Mobile Fitness App',
    description: 'A cross-platform app to track workouts and nutrition.',
    longDescription:
      'Developed a mobile fitness application for both iOS and Android using React Native. The app helps users track their workouts, monitor their nutrition, and set fitness goals, featuring a clean and intuitive user interface.',
    image: 'https://placehold.co/600x450.png',
    tags: ['React Native', 'Expo', 'GraphQL', 'Supabase'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'AI Chatbot Assistant',
    description: 'An intelligent chatbot for customer support.',
    longDescription:
      'Implemented an AI-powered chatbot using natural language processing to provide instant customer support. The chatbot is integrated into a web application and can handle a wide range of user queries.',
    image: 'https://placehold.co/600x450.png',
    tags: ['AI', 'NLP', 'Python', 'Dialogflow'],
    link: '#',
    github: '#',
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="container py-16 sm:py-24">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          My Work
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed">
          A selection of my projects. Click to see more details.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onCardClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setSelectedProject(null);
            }
          }}
        />
      )}
    </section>
  );
}
