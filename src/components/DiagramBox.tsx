
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface DiagramBoxProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const DiagramBox: React.FC<DiagramBoxProps> = ({ 
  children, 
  className,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-3 md:p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-border shadow-sm transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default DiagramBox;
