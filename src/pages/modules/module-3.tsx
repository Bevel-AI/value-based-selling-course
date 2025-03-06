import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';
import { useStore } from '@/lib/store/useStore';
import { useShallow } from 'zustand/react/shallow';
import {
  Module3TitleSlide,
  CalculatingEconomicImpactSlide,
  BeyondFinancialValueSlide,
  ValuePropositionsSlide,
  ValueStorytellingSlide
} from '@/components/modules/module3';

interface Module3Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Module3 = ({ containerRef }: Module3Props) => {
  const [loading, setLoading] = useState(true);
  const { setSlideIds } = useStore(useShallow((state) => ({
    setSlideIds: state.setSlideIds,
  })));
  
  // Define slide IDs for this module
  const slideIds = [
    'module3-title',
    'calculating-economic-impact',
    'beyond-financial-value',
    'value-propositions',
    'value-storytelling'
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
      {/* Module 3 Title Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-module3-title">
        <Module3TitleSlide id="module3-title" />
      </div>

      {/* Calculating Economic Impact Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-calculating-economic-impact">
        <CalculatingEconomicImpactSlide id="calculating-economic-impact" />
      </div>

      {/* Beyond Financial Value Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-beyond-financial-value">
        <BeyondFinancialValueSlide id="beyond-financial-value" />
      </div>

      {/* Value Propositions Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-value-propositions">
        <ValuePropositionsSlide id="value-propositions" />
      </div>

      {/* Value Storytelling Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-value-storytelling">
        <ValueStorytellingSlide id="value-storytelling" />
      </div>
    </div>
  );
};

export default Module3; 