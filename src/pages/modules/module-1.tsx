import React, { useState, useEffect } from 'react';
import {
  TitleSlide,
  WhatIsValueBasedSellingSlide,
  WhyValueBasedSellingMattersSlide,
  ValueBasedMindsetSlide
} from '@/components/modules/module1';
import { useStore } from '@/lib/store/useStore';
import { useShallow } from 'zustand/react/shallow';

interface Module1Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Module1 = ({ containerRef }: Module1Props) => {
  const [loading, setLoading] = useState(true);
  const { setSlideIds } = useStore(useShallow((state) => ({
    setSlideIds: state.setSlideIds,
  })));
  
  // Define slide IDs for this module
  const slideIds = [
    'slide-1', 'slide-2', 'slide-3', 'slide-4'
  ];

  useEffect(() => {
    // Initialize the slide IDs in the store
    setSlideIds(slideIds);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [setSlideIds]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium">Loading presentation...</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-y-auto module-container" id="module-scroll-container" ref={containerRef}>
      {/* Title Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-1">
        <TitleSlide id="slide-1" />
      </div>
      
      {/* What is Value-Based Selling */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-2">
        <WhatIsValueBasedSellingSlide id="slide-2" />
      </div>
      
      {/* Why Value-Based Selling Matters */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-3">
        <WhyValueBasedSellingMattersSlide id="slide-3" />
      </div>
      
      {/* The Value-Based Mindset */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-4">
        <ValueBasedMindsetSlide id="slide-4" />
      </div>
    </div>
  );
};

export default Module1; 