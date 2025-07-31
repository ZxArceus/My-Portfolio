import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

// Import the image

export function AboutSection() {
  const skills = [
    'Java',
    'MySQL',
    'python(basic)',
    'HTML',
    ' CSS',
    'Firebase',
    'Android',
    
  ];
  return (
    <section id="about" className="container py-16 sm:py-24">
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
            I'm Ankit Mondal,a  recent graduate in Computer Science and enginnering and a passionate developer 
            with hands on experience in Java and Android . 
            Also have some knwoledge in Flask. 
            Currently learning SpringBoot for backend development. 
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me in playground or in Local tarins,
              or enjoying a good cup of
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
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <a href="/your-resume.pdf" download>
                <Button>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
}
