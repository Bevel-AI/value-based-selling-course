import React, { useState, useEffect } from 'react';
import { useStore } from '@/lib/store/useStore';
import { useShallow } from 'zustand/react/shallow';
import { 
  Module6TitleSlide,
  ValueBasedToolsSlide, 
  KeyTakeawaysSlide, 
  ActionPlanningSlide,
  CourseCompleteSlide
} from '@/components/modules/module6';

interface Module6Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Module6 = ({ containerRef }: Module6Props) => {
  const [loading, setLoading] = useState(true);
  const { setSlideIds } = useStore(useShallow((state) => ({
    setSlideIds: state.setSlideIds,
  })));
  
  // Define slide IDs for this module
  const slideIds = [
    'module6-title',
    'value-based-tools',
    'key-takeaways',
    'action-planning',
    'course-complete'
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
      {/* Module 6 Title Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-module6-title">
        <Module6TitleSlide id="module6-title" />
      </div>

      {/* Value Based Tools Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-value-based-tools">
        <ValueBasedToolsSlide id="value-based-tools" />
      </div>

      {/* Key Takeaways Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-key-takeaways">
        <KeyTakeawaysSlide id="key-takeaways" />
      </div>

      {/* Action Planning Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-action-planning">
        <ActionPlanningSlide id="action-planning" />
      </div>

      {/* Course Complete Slide */}
      <div className="snap-start w-full overflow-hidden" id="slide-container-course-complete">
        <CourseCompleteSlide id="course-complete" />
      </div>
    </div>
  );
};

export default Module6; 