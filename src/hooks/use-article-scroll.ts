import { useCallback, useState, useEffect } from 'react';

interface UseArticleScrollOptions {
  offset?: number;
}

export function useArticleScroll({ offset = 100 }: UseArticleScrollOptions = {}) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(Math.round((currentProgress / scrollHeight) * 100));
    };

    window.addEventListener('scroll', updateReadingProgress);
    updateReadingProgress();

    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  }, [offset]);

  return {
    readingProgress,
    scrollToSection
  };
}