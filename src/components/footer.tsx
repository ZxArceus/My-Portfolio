import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} Visionary. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 transition-colors hover:text-primary" />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5 transition-colors hover:text-primary" />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5 transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
