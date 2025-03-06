import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';
import { useStore } from '@/lib/store/useStore';
import { useShallow } from 'zustand/react/shallow';
import { 
  Module4TitleSlide,
  DiscoveryQuestionsSlide,
  SolutionMappingSlide,
  ValueProposalsSlide,
  HandlingObjectionsSlide
} from '@/components/modules/module4';

interface Module4Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Module4 = ({ containerRef }: Module4Props) => {
  const [loading, setLoading] = useState(true);
  const { setSlideIds } = useStore(useShallow((state) => ({
    setSlideIds: state.setSlideIds,
  })));
  
  // Define slide IDs for this module
  const slideIds = [
    'module4-title',
    'discovery-questions',
    'solution-mapping',
    'value-proposals',
    'handling-objections'
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
      {/* Module 4 Title Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-module4-title">
        <Module4TitleSlide id="module4-title" />
      </div>

      {/* Discovery Questions Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-discovery-questions">
        <DiscoveryQuestionsSlide id="discovery-questions" />
      </div>

      {/* Solution Mapping Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-solution-mapping">
        <SolutionMappingSlide id="solution-mapping" />
      </div>

      {/* Value Proposals Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-value-proposals">
        <ValueProposalsSlide id="value-proposals" />
      </div>

      {/* Handling Objections Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-handling-objections">
        <HandlingObjectionsSlide id="handling-objections" />
      </div>
    </div>
  );
};

export default Module4; 