import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';
import { useStore } from '@/lib/store/useStore';
import { useShallow } from 'zustand/react/shallow';
import { 
  Module2TitleSlide,
  IdentifyingPainPointsSlide,
  ValuePerceptionSlide,
  CompetitiveValueSlide,
  ROICalculationSlide,
  BusinessCaseSlide,
  ValuePropositionSlide
} from '@/components/modules/module2';

interface Module2Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Module2 = ({ containerRef }: Module2Props) => {
  const [loading, setLoading] = useState(true);
  const { setSlideIds } = useStore(useShallow((state) => ({
    setSlideIds: state.setSlideIds,
  })));
  
  // Define slide IDs for this module
  const slideIds = [
    'module2-title',
    'identifying-pain-points',
    'value-perception',
    'competitive-value',
    'roi-calculation',
    'business-case',
    'value-proposition'
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
      {/* Module 2 Title Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-module2-title">
        <Module2TitleSlide id="module2-title" />
      </div>

      {/* Identifying Pain Points Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-identifying-pain-points">
        <IdentifyingPainPointsSlide id="identifying-pain-points" />
      </div>

      {/* Value Perception Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-value-perception">
        <ValuePerceptionSlide id="value-perception" />
      </div>

      {/* Competitive Value Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-competitive-value">
        <CompetitiveValueSlide id="competitive-value" />
      </div>

      {/* ROI Calculation Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-roi-calculation">
        <ROICalculationSlide id="roi-calculation" />
      </div>

      {/* Business Case Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-business-case">
        <BusinessCaseSlide id="business-case" />
      </div>

      {/* Value Proposition Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-value-proposition">
        <ValuePropositionSlide id="value-proposition" />
      </div>
    </div>
  );
};

export default Module2; 