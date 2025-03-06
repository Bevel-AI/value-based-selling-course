import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';
import { useStore } from '@/lib/store/useStore';
import { useShallow } from 'zustand/react/shallow';
import {
  Module5TitleSlide,
  ConversationModelSlide,
  FeatureToBenefitSlide,
  CompetitiveDifferentiationSlide
} from '@/components/modules/module5';

interface Module5Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Module5 = ({ containerRef }: Module5Props) => {
  const [loading, setLoading] = useState(true);
  const { setSlideIds } = useStore(useShallow((state) => ({
    setSlideIds: state.setSlideIds,
  })));
  
  // Define slide IDs for this module
  const slideIds = [
    'module5-title', 
    'conversation-model',
    'feature-to-benefit',
    'competitive-differentiation'
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
      {/* Module 5 Title Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-module5-title">
        <Module5TitleSlide id="module5-title" />
      </div>
      
      {/* Sales Conversation Model */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-conversation-model">
        <ConversationModelSlide id="conversation-model" />
      </div>
      
      {/* Feature to Benefit Framework */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-feature-to-benefit">
        <FeatureToBenefitSlide id="feature-to-benefit" />
      </div>
      
      {/* Competitive Differentiation */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-competitive-differentiation">
        <CompetitiveDifferentiationSlide id="competitive-differentiation" />
      </div>
    </div>
  );
};

export default Module5; 