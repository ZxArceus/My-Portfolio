'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { generateVariationsAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Copy, Wand2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export function AboutMeGenerator() {
  const [originalText, setOriginalText] = useState(
    "I'm a passionate full-stack developer with a keen eye for design and user experience. I love building modern, responsive, and performant web applications that solve real-world problems."
  );
  const [style, setStyle] = useState('professional');
  const [length, setLength] = useState('medium');
  const [isLoading, setIsLoading] = useState(false);
  const [variations, setVariations] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setVariations([]);

    const result = await generateVariationsAction({
      originalAboutMe: originalText,
      style,
      length,
      numVariations: 3,
    });

    setIsLoading(false);
    if (result.success && result.variations) {
      setVariations(result.variations);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: 'About Me variation copied to clipboard.',
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          <span>AI-Powered About Me Generator</span>
        </CardTitle>
        <CardDescription>
          Can't find the right words? Let AI help you craft the perfect bio.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="original-text">Your "About Me" text</Label>
            <Textarea
              id="original-text"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              rows={5}
              placeholder="Write a few sentences about yourself..."
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="style">Style</Label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger id="style">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="humorous">Humorous</SelectItem>
                  <SelectItem value="concise">Concise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="length">Length</Label>
              <Select value={length} onValueChange={setLength}>
                <SelectTrigger id="length">
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="long">Long</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
            {isLoading ? 'Generating...' : 'Generate Variations'}
          </Button>
        </form>

        {(isLoading || variations.length > 0) && (
          <div className="mt-8 space-y-4">
            <h3 className="font-headline text-lg font-semibold">
              Generated Variations:
            </h3>
            {isLoading && (
              <>
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </>
            )}
            {variations.map((text, index) => (
              <Card key={index} className="bg-secondary">
                <CardContent className="flex items-start justify-between gap-4 p-4">
                  <p className="text-secondary-foreground">{text}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(text)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
