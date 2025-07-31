'use client';

import type { Project } from '@/lib/types';
import { useState } from 'react';
import { ProjectCard } from './project-card';
import { ProjectDetailsModal } from './project-details-modal';

const projects: Project[] = [
  {
    id: 1,
    title: 'Heart Disease Prediction System',
    description: 'A heart disease prediction system  with a modern UI.',
    longDescription: 'Developed a web application using Flask, SQLAlchemy, Html , CSS and Gradient Boosting Classifier algorithm to predict a persons heart disease risk percentage',

    tags: ['Flask', 'SQLAlchemy', 'Html', 'Machine Learning'],
    link: '#',
    github: 'https://github.com/ZxArceus/Heart_Disease_Prediction',
    image: ''
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A weather app to fetch location data',
    longDescription: 'Designed a weather app in Android Studio with a modern UI using openweathermap API ',

    tags: ['Java', 'Android studio', 'XML', 'API Integration'],
    link: '#',
    github: 'https://github.com/ZxArceus/weather-App',
    image: ''
  },
  {
    id: 3,
    title: 'quizz App',
    description: 'A quiz app to test your general knowledge',
    longDescription: 'Created a quizz app to test your general knwoledge by integrating Trivia Api',

    tags: ['Java', 'XML', 'API Integration'],
    link: '#',
    github: 'https://github.com/ZxArceus/Quiz-App',
    image: ''
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'A  portfolio website built with Next.js and Firebase Studio',
    longDescription: '',

    tags: [ 'Firebase Studio'],
    link: '#',
    github: 'https://github.com/ZxArceus/My-Portfolio',
    image: ''
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
