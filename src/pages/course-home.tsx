import { useState, useEffect } from "react";
import { CourseProgress } from "../components/course-progress";
import { ModuleCard } from "../components/module-card";
import { PageTransition } from "../components/page-transition";
import { courseModules } from "../data/course-modules";
import { motion } from "framer-motion";
import { useStore } from "../lib/store/useStore";
import { useShallow } from 'zustand/react/shallow';
import { BookOpen, GraduationCap, BookMarked, BookmarkCheck } from 'lucide-react';
import Confetti from "react-confetti"
import { useWindowSize } from "@/hooks/use-window-size";

export default function CourseHome() {
  const { progress, courseCompleted, setCourseCompleted } = useStore(useShallow((state) => ({
    progress: state.progress,
    courseCompleted: state.courseCompleted,
    setCourseCompleted: state.setCourseCompleted,
  })));
  const [isConfettiActive, setIsConfettiActive] = useState(false)
  const { width, height } = useWindowSize()

  const completedCount = progress.completedModules.length;
  const totalModules = courseModules.length;

  // Check if all modules are completed and trigger confetti
  useEffect(() => {
    // If we already marked the course as completed, do nothing
    if (courseCompleted) return;
    
    // Check if we just completed all modules
    if (completedCount === totalModules && completedCount > 0) {
      // Mark the course as completed in the store
      setCourseCompleted(true);
      // Trigger confetti
      triggerConfetti();
    }
  }, [completedCount, totalModules, courseCompleted, setCourseCompleted]);

  // Watch for courseCompleted state changes
  useEffect(() => {
    if (courseCompleted) {
      triggerConfetti();
    }
  }, [courseCompleted]);

  const triggerConfetti = () => {
    setIsConfettiActive(true)

    // Stop confetti after 5 seconds
    setTimeout(() => {
      setIsConfettiActive(false)
    }, 5000)
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="mx-auto px-4 sm:px-6 py-16 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute right-1/4 bottom-0 w-60 h-60 bg-indigo-500/20 rounded-full blur-xl"></div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-center justify-between gap-6 ml-16 mr-16"
              >
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 opacity-90">Value-Based Selling</h1>
                  <p className="text-xl text-indigo-100 mb-6">
                    Master the art of selling based on customer value rather than product features
                  </p>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <GraduationCap className="w-5 h-5" />
                    <span>6 Modules • Interactive Learning</span>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="text-center mb-2">
                    <div className="font-bold text-3xl">{Math.round((completedCount / totalModules) * 100)}%</div>
                    <div className="text-indigo-200 text-sm">Course Progress</div>
                  </div>
                  <div className="w-36 h-36 rounded-full flex items-center justify-center relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="8" 
                      />
                      <circle 
                        cx="50" cy="50" r="45" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="8" 
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * (completedCount / totalModules))}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <BookMarked className="w-8 h-8 mb-1" />
                      <div className="text-sm font-medium">{completedCount}/{totalModules}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Progress Bar Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-10 border border-gray-100 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Your Learning Journey
            </h2>
            <CourseProgress
              currentModule={progress.currentModule}
              completedModules={progress.completedModules}
            />
            <div className="flex gap-4 mt-4 flex-wrap text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                <span>Completed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <span>Current</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <span>Upcoming</span>
              </div>
            </div>
          </div>

          {/* Module Grid */}
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookmarkCheck className="w-6 h-6 text-indigo-600" />
            Course Modules
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {courseModules.map((module, index) => (
              <ModuleCard
                key={module.id}
                module={module}
                isCompleted={progress.completedModules.includes(module.id)}
                isActive={module.id === progress.currentModule}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {isConfettiActive && (
        <Confetti width={width} height={height} recycle={false} numberOfPieces={500} gravity={0.2} />
      )}
    </PageTransition>
  );
}
