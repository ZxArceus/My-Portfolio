'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// Import Link from next/link
import Link from 'next/link';
// Import the icons
import { Mail, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="container py-16 sm:py-24">
      <Card className="mx-auto max-w-xl text-center">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Get in Touch</CardTitle>
          <CardDescription>
             want to say hi? I'd love to hear
            from you.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center gap-2">
          {/* Mail Icon and email address with mailto link */}
          <a href="mailto:mondalankt619@gmail.com" className="flex items-center gap-1">
            <Mail className="h-6 w-6" /> {/* Using lucide-react Mail icon */}
            <span>mondalankt619@gmail.com</span>
          </a>

          
        </CardContent>
      </Card>
    </section>
  );
}
