import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CourseProgress } from '../../types/course';
import { QuizQuestion, QuizResult } from '../../types/quiz';

interface QuizState {
  userAnswers: Record<number, number>; // questionId -> selected answer index
  currentQuestionIndex: number;
  quizResults: QuizResult | null;
}

interface SlideState {
  currentSlideIndex: number;
  slideIds: string[];
}

interface CourseStore {
  // Course progress state
  progress: CourseProgress;
  courseCompleted: boolean;
  
  // Quiz state
  quizState: QuizState;
  
  // Slide navigation state
  slideState: SlideState;
  
  // Course progress actions
  setCurrentModule: (moduleId: number) => void;
  completeModule: (moduleId: number) => void;
  resetProgress: () => void;
  setCourseCompleted: (completed: boolean) => void;
  
  // Quiz actions
  answerQuestion: (questionId: number, answerId: number) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setQuizResults: (results: QuizResult) => void;
  resetQuiz: () => void;
  
  // Slide navigation actions
  setCurrentSlideIndex: (index: number) => void;
  setSlideIds: (ids: string[]) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

export const useStore = create<CourseStore>()(
  persist(
    (set, get) => ({
      // Initial state
      progress: {
        currentModule: 1,
        completedModules: [],
      },
      courseCompleted: false,
      
      quizState: {
        userAnswers: {},
        currentQuestionIndex: 0,
        quizResults: null,
      },
      
      slideState: {
        currentSlideIndex: 0,
        slideIds: [],
      },
      
      // Course progress actions
      setCurrentModule: (moduleId) => set((state) => ({
        progress: {
          ...state.progress,
          currentModule: moduleId,
        },
        slideState: {
          ...state.slideState,
          currentSlideIndex: 0,
        }
      })),
      
      completeModule: (moduleId) => set((state) => ({
        progress: {
          ...state.progress,
          completedModules: state.progress.completedModules.includes(moduleId)
            ? state.progress.completedModules
            : [...state.progress.completedModules, moduleId],
        }
      })),
      
      resetProgress: () => set({
        progress: {
          currentModule: 1,
          completedModules: [],
        }
      }),
      
      setCourseCompleted: (completed) => set({
        courseCompleted: completed
      }),
      
      // Quiz actions
      answerQuestion: (questionId, answerId) => set((state) => ({
        quizState: {
          ...state.quizState,
          userAnswers: {
            ...state.quizState.userAnswers,
            [questionId]: answerId,
          },
        }
      })),
      
      setCurrentQuestionIndex: (index) => set((state) => ({
        quizState: {
          ...state.quizState,
          currentQuestionIndex: index,
        }
      })),
      
      setQuizResults: (results) => set((state) => ({
        quizState: {
          ...state.quizState,
          quizResults: results,
        }
      })),
      
      resetQuiz: () => set((state) => ({
        quizState: {
          userAnswers: {},
          currentQuestionIndex: 0,
          quizResults: null,
        }
      })),
      
      // Slide navigation actions
      setCurrentSlideIndex: (index) => set((state) => ({
        slideState: {
          ...state.slideState,
          currentSlideIndex: index,
        }
      })),
      
      setSlideIds: (ids) => set((state) => ({
        slideState: {
          ...state.slideState,
          slideIds: ids,
        }
      })),
      
      nextSlide: () => {
        const { slideState } = get();
        if (!slideState.slideIds || slideState.slideIds.length === 0) return;
        
        const newIndex = Math.min(slideState.currentSlideIndex + 1, slideState.slideIds.length - 1);
        
        set((state) => ({
          slideState: {
            ...state.slideState,
            currentSlideIndex: newIndex,
          }
        }));
        
        // Scroll to the slide
        const slideId = get().slideState.slideIds[newIndex];
        if (slideId) {
          const slideElement = document.getElementById(slideId);
          if (slideElement) {
            // Find the container with overflow-y-auto
            const container = document.querySelector('.overflow-y-auto');
            
            // If we have a container, use scrollIntoView with a slight delay to ensure UI has updated
            setTimeout(() => {
              slideElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }, 50);
          }
        }
      },
      
      prevSlide: () => {
        const { slideState } = get();
        if (!slideState.slideIds || slideState.slideIds.length === 0) return;
        
        const newIndex = Math.max(slideState.currentSlideIndex - 1, 0);
        
        set((state) => ({
          slideState: {
            ...state.slideState,
            currentSlideIndex: newIndex,
          }
        }));
        
        // Scroll to the slide
        const slideId = get().slideState.slideIds[newIndex];
        if (slideId) {
          const slideElement = document.getElementById(slideId);
          if (slideElement) {
            // Find the container with overflow-y-auto
            const container = document.querySelector('.overflow-y-auto');
            
            // If we have a container, use scrollIntoView with a slight delay to ensure UI has updated
            setTimeout(() => {
              slideElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }, 50);
          }
        }
      },
    }),
    {
      name: 'course-storage', // name of the item in localStorage
      partialize: (state) => ({
        progress: state.progress, // only persist progress data
        courseCompleted: state.courseCompleted, // also persist completion status
      }),
    }
  )
);
