import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store/useStore";
import { useShallow } from 'zustand/react/shallow';

interface ModuleNavigationProps {
  onComplete: () => void;
}

export function ModuleNavigation({ onComplete }: ModuleNavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  const { 
    slideState,
    progress,
    nextSlide, 
    prevSlide 
  } = useStore(useShallow((state) => ({
    slideState: state.slideState,
    progress: state.progress,
    nextSlide: state.nextSlide,
    prevSlide: state.prevSlide
  })));
  
  const currentSlideIndex = slideState.currentSlideIndex;
  const totalSlides = slideState.slideIds?.length || 0;
  const isLastSlide = currentSlideIndex === totalSlides - 1;

  // Add keyboard navigation
  useEffect(() => {
    if (!slideState.slideIds || slideState.slideIds.length === 0) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, slideState.slideIds]);

  // If no slideIds provided, don't render the navigation
  if (!slideState.slideIds || slideState.slideIds.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0.2, 
        y: isVisible ? 0 : 10,
        translateY: isVisible ? "0%" : "60%"
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-0 right-0 w-full flex justify-center items-center hover:cursor-pointer"
    >
      <div className="max-w-xl w-full flex px-2 py-2 gap-4 bg-background/30 backdrop-blur-md border border-border/20 rounded-full">
        {/* Left: Home button */}
        <div className="flex-1">
          <Link to="/course">
            <Button 
              variant="outline" 
              className="rounded-full opacity-90 hover:opacity-100 bg-background/50 border-border/20 backdrop-blur-md"
            >
              <Icon icon="lucide:home" />
              Home
            </Button>
          </Link>
        </div>

        {/* Middle: Previous | Slide counter | Next */}
        <div className="flex items-center gap-4 flex-1 justify-center">
          <Button
            variant="outline"
            className="rounded-full p-3 opacity-90 hover:opacity-100 bg-background/50 border-border/20 backdrop-blur-md"
            disabled={currentSlideIndex <= 0}
            onClick={prevSlide}
          >
            <Icon icon="lucide:arrow-left" />
          </Button>
          
          <span className="text-sm font-medium">
            {currentSlideIndex + 1} / {totalSlides}
          </span>
          
          <Button
            variant="outline"
            className="rounded-full p-3 opacity-90 hover:opacity-100 bg-background/50 border-border/20 backdrop-blur-md"
            disabled={currentSlideIndex >= totalSlides - 1}
            onClick={nextSlide}
          >
            <Icon icon="lucide:arrow-right" />
          </Button>
        </div>

        {/* Right: Complete Module button */}
        <div className="flex-1 flex justify-end">
          <Link to="/course">
            <Button
              variant="outline"
              className="rounded-full opacity-90 hover:opacity-100 bg-background/50 border-border/20 backdrop-blur-md"
              onClick={onComplete}
              disabled={!isLastSlide}
            >
              Complete
              <Icon icon="lucide:check" />
            </Button>
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
