import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  onCardClick: () => void;
}

export function ProjectCard({ project, onCardClick }: ProjectCardProps) {
  return (
    <Card
      onClick={onCardClick}
      className="cursor-pointer transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20"
    >
      <CardHeader className="p-4">
        <CardTitle className="font-headline mb-2 text-xl">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}