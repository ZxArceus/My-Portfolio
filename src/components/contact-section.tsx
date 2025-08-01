'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="container py-16 sm:py-24">
      <Card className="mx-auto max-w-xl text-center">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Get in Touch</CardTitle>
          <CardDescription>
            Have a project in mind or just want to say hi? I'd love to hear
            from you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <a href="mailto:mondalankt619@gmail.com">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
          </a>
        </CardContent>
      </Card>
    </section>
  );
}
