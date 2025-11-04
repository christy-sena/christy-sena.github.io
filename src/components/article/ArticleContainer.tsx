import { ReactNode } from 'react';

interface ArticleContainerProps {
  children: ReactNode;
  className?: string;
}

export function ArticleContainer({ children, className = '' }: ArticleContainerProps) {
  return (
    <article className={`container mx-auto py-8 px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </article>
  );
}