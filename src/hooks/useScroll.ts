import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/lib/store/useStore';
import { useShallow } from 'zustand/react/shallow';

interface UseScrollOptions {
  containerRef: React.MutableRefObject<HTMLDivElement>;
}

export function useScroll({ containerRef }: UseScrollOptions) {
  const { 
    slideState,
    setCurrentSlideIndex,
  } = useStore(useShallow((state) => ({
    slideState: state.slideState,
    setCurrentSlideIndex: state.setCurrentSlideIndex,
  })));
  
  const currentSlideIndex = slideState.currentSlideIndex;
  // Keep track of whether we're currently handling a programmatic scroll
  const isManualIndexChangeRef = useRef(false);
  // Keep track of the previous slide index to detect changes
  const previousSlideIndexRef = useRef(currentSlideIndex);
  // Cache slide elements to avoid repeated DOM queries
  const slideElementsRef = useRef<HTMLElement[]>([]);
  // Use a ref for the last scroll timestamp to implement proper throttling
  const lastScrollTimeRef = useRef(0);

  // Initialize slide elements cache - only once when slides change
  useEffect(() => {
    // Skip if no slides
    if (!slideState.slideIds || slideState.slideIds.length === 0) return;
    
    // Delay element lookup to ensure DOM is ready
    const timer = setTimeout(() => {
      slideElementsRef.current = slideState.slideIds
        .map(id => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
    }, 200);
    
    return () => clearTimeout(timer);
  }, [slideState.slideIds]);

  // Handle scrolling when slide index changes programmatically
  useEffect(() => {
    // Skip if no slides
    if (!slideState.slideIds || slideState.slideIds.length === 0) return;
    // Skip if the index hasn't actually changed
    if (previousSlideIndexRef.current === currentSlideIndex) return;
    
    // Set flag to prevent the scroll handler from changing the index while we're scrolling
    isManualIndexChangeRef.current = true;
    previousSlideIndexRef.current = currentSlideIndex;
    
    const targetId = slideState.slideIds[currentSlideIndex];
    const targetElement = targetId ? document.getElementById(targetId) : null;
    
    if (targetElement && containerRef.current) {
      // Simple, performant scrolling
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Reset the flag after scrolling completes
      setTimeout(() => {
        isManualIndexChangeRef.current = false;
      }, 600); // Match the scroll duration
    } else {
      // If no element found, just reset the flag
      isManualIndexChangeRef.current = false;
    }
  }, [currentSlideIndex, slideState.slideIds, containerRef]);

  // Track scroll position and update the current slide index
  useEffect(() => {
    if (!slideState.slideIds || slideState.slideIds.length === 0 || !containerRef.current) return;
    
    // More efficient scroll handler with proper throttling
    const handleScroll = () => {
      // Skip if we're currently handling a programmatic scroll
      if (isManualIndexChangeRef.current) return;
      
      // Get cached elements or update cache if empty
      let elements = slideElementsRef.current;
      if (elements.length === 0) {
        elements = slideState.slideIds
          .map(id => document.getElementById(id))
          .filter(Boolean) as HTMLElement[];
        slideElementsRef.current = elements;
      }
      
      if (elements.length === 0) return;
      
      // Get container dimensions once
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;
      
      // Find which slide is closest to the center of the viewport
      let closestSlide = 0;
      let minDistance = Infinity;
      
      // Process all elements in one loop to minimize layout thrashing
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - containerCenter);
        
        // Check visibility more efficiently
        if (rect.top < containerRect.bottom && 
            rect.bottom > containerRect.top && 
            distance < minDistance) {
          minDistance = distance;
          closestSlide = i;
        }
      }
      
      // Only update if different from current index
      if (closestSlide !== currentSlideIndex) {
        previousSlideIndexRef.current = closestSlide;
        setCurrentSlideIndex(closestSlide);
      }
    };

    // Improved throttling mechanism using timestamps
    const scrollListener = () => {
      const now = Date.now();
      if (now - lastScrollTimeRef.current > 100) { // 100ms throttle
        lastScrollTimeRef.current = now;
        handleScroll();
      }
    };

    containerRef.current.addEventListener('scroll', scrollListener, { passive: true });
    
    // Run once on mount
    setTimeout(handleScroll, 300);
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', scrollListener);
      }
    };
  }, [slideState.slideIds, currentSlideIndex, setCurrentSlideIndex, containerRef]);
} 