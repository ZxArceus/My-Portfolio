import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        
        <div className="flex items-center gap-4">
          <Link href="https://github.com/ZxArceus" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 transition-colors hover:text-primary" />
          </Link>
          
          <Link href="https://www.linkedin.com/in/ankit-mondal-37599924a" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5 transition-colors hover:text-primary" />
          </Link>
          <a href="mailto:mondalankt619@gmail.com">
            <Mail className="h-5 w-5 transition-colors hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
