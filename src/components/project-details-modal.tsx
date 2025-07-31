'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Link as LinkIcon } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectDetailsModalProps {
  project: Project;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ProjectDetailsModal({
  project,
  isOpen,
  onOpenChange,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="relative mb-4 aspect-video w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded-md object-cover"
              data-ai-hint="website screenshot"
            />
          </div>
          <DialogTitle className="font-headline text-2xl">
            {project.title}
          </DialogTitle>
          <DialogDescription>{project.longDescription}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h3 className="mb-2 font-semibold">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {project.link && (
            <Link href={project.link} target="_blank" rel="noreferrer">
              <Button>
                <LinkIcon className="mr-2 h-4 w-4" />
                Live Site
              </Button>
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank" rel="noreferrer">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
