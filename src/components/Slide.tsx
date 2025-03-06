import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'center' | 'split' | 'code';
}

export const Slide: React.FC<SlideProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  variant = 'default',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id={id}
      className={cn(
        "min-h-screen h-full w-full flex flex-col",
        {
          "justify-center items-center text-center": variant === 'center',
          "items-start justify-start": variant === 'default' || variant === 'split' || variant === 'code',
        },
        className
      )}
    >
      {title && (
        <div className={cn("slide-transition p-8", isVisible ? 'slide-visible' : 'slide-hidden')}>
          <div className="inline-block px-3 py-1 mb-2 text-xs font-medium tracking-wider text-primary-foreground bg-primary rounded-full animate-fade-in">
            Value-Based Selling
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      
      <div 
        className={cn(
          "w-full flex-1 p-8 flex flex-col slide-transition",
          {
            "mx-auto": variant === 'center' // Add mx-auto for center variant to ensure horizontal centering
          },
          isVisible ? 'slide-visible' : 'slide-hidden'
        )}
        style={{ transitionDelay: '100ms' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Slide;
