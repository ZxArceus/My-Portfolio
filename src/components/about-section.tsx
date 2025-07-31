import Image from 'next/image';
import { Badge } from './ui/badge';

export function AboutSection() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Firebase',
    'GenAI',
    'UI/UX Design',
  ];
  return (
    <section id="about" className="container py-16 sm:py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              About Me
            </h2>
            <p className="text-muted-foreground">
              I'm a passionate full-stack developer with a keen eye for design
              and user experience. I love building modern, responsive, and
              performant web applications that solve real-world problems. My
              journey in tech started with a curiosity for how things work, and
              it has evolved into a career where I get to create and innovate
              every day.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee.
            </p>
          </div>
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
        </div>
        <div className="relative">
          <Image
            src="https://placehold.co/600x600.png"
            alt="About me"
            width={600}
            height={600}
            className="rounded-lg object-cover"
            data-ai-hint="portrait developer"
          />
        </div>
      </div>
    </section>
  );
}
