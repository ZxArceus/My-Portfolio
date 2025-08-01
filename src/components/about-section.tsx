'use client';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Image from 'next/image';
import { Download, Coffee, Database, Code, FileCode, Palette, Flame, Smartphone } from 'lucide-react'; // Importing icons from lucide-react
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import { useEffect } from 'react';

// Import the image

export function AboutSection() {
  const skills = [
    { name: 'Java', icon: Coffee }, // Using Coffee icon for Java
    { name: 'MySQL', icon: Database }, // Using Database icon for MySQL
    { name: 'python(basic)', icon: Code }, // Using Code icon for Python
    { name: 'HTML', icon: FileCode }, // Using FileCode icon for HTML
    { name: 'CSS', icon: Palette }, // Using Palette icon for CSS
    { name: 'Android', icon: Smartphone }, // Using Smartphone icon for Android
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    // Apply section-hidden and section-visible classes based on inView
    <section
      id="about"
      ref={ref} // Attach the ref to the section
      className={`container py-16 sm:py-24 ${inView ? 'section-visible' : 'section-hidden'}`}
    >
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="relative flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="/profile.png" // Reference from the public directory
              alt="About me"
              fill
              className="rounded-full object-cover"
              data-ai-hint="portrait developer"
            />
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              About Me
            </h2>
            <p className="text-muted-foreground">
              I'm Ankit Mondal, a  recent (2025)  graduate in Computer Science and enginnering and a passionate developer
              with hands on experience in Java and Android .
              Also have some knwoledge in Flask.
              Currently learning SpringBoot for backend development.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me in playground or in Local tarins,
              or enjoying a good cup of Tea with
              friends.
            </p>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="mt-8">
              <h3 className="font-headline mb-4 text-xl font-semibold">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} className="flex items-center gap-1 badge"> {/* Added badge class */}
                    <skill.icon className="h-4 w-4" /> {/* Render the icon */}
                    {skill.name} {/* Render the skill name */}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-8">
              {/* Updated href to Google Drive link */}
              <a href="https://drive.google.com/file/d/1XLx3mFEeWe5CkSsuiTvxNu8OwKHg6D9_/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button>
                  <Download className="mr-2 h-4 w-4" /> View Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
