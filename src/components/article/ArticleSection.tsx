import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface ArticleSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function ArticleSection({ id, title, children, className }: ArticleSectionProps) {
  return (
    <section id={id} className={cn("py-10 md:py-16", className)}>
      <h2 className="text-3xl font-bold tracking-tight mb-6">{title}</h2>
      {children}
    </section>
  );
}