import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="container flex flex-col items-center justify-center py-32 text-center sm:py-48"
    >
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Visionary
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern and professional portfolio to showcase your work, skills, and
          creativity. Built with Next.js and love.
        </p>
      </div>
      <div className="mt-8 flex gap-4">
        <Link href="#contact">
          <Button>Get in Touch</Button>
        </Link>
        <Link href="#projects">
          <Button variant="outline">
            View My Work <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
