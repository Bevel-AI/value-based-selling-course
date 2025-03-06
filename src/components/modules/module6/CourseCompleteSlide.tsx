import React from 'react';
import { Slide } from '@/components/Slide';
import { 
  Award, Sparkles, GraduationCap, BadgeCheck, 
  PartyPopper, Trophy, Rocket, Zap, Star
} from 'lucide-react';

interface CourseCompleteSlideProps {
  id: string;
}

export const CourseCompleteSlide: React.FC<CourseCompleteSlideProps> = ({ id }) => {
  return (
    <Slide
      id={id}
      variant="default"
      className="relative overflow-hidden"
    >
      {/* Background with particles */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1374&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-blue-950/50 via-purple-950/60 to-pink-950/70"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <div className="absolute w-3 h-3 bg-blue-400 rounded-full top-1/4 left-1/4 animate-float-slow"></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-1/3 left-1/2 animate-float-medium"></div>
        <div className="absolute w-4 h-4 bg-pink-400 rounded-full top-2/3 left-1/3 animate-float-fast"></div>
        <div className="absolute w-2 h-2 bg-indigo-400 rounded-full top-1/4 right-1/4 animate-float-medium"></div>
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full bottom-1/4 right-1/3 animate-float-slow"></div>
        <div className="absolute w-2 h-2 bg-teal-400 rounded-full bottom-1/3 left-1/4 animate-float-fast"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-10">
        {/* Decorative top element */}
        <div className="mb-4">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-70 animate-pulse rounded-full"></div>
            <div className="relative w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <PartyPopper className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Congratulations!
          </h1>
          
          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">Course Complete</h2>
            <GraduationCap className="w-8 h-8 text-purple-400" />
          </div>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            You've completed the Value-Based Selling course and are now equipped with 
            the mindset, skills, and tools to create meaningful value for your customers.
          </p>
          
          {/* Achievement badges */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-2 border border-blue-500/50">
                <BadgeCheck className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-blue-300 text-sm font-medium">Value Expert</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mb-2 border border-purple-500/50">
                <Trophy className="w-8 h-8 text-purple-400" />
              </div>
              <span className="text-purple-300 text-sm font-medium">Course Mastery</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-pink-900/50 rounded-full flex items-center justify-center mb-2 border border-pink-500/50">
                <Rocket className="w-8 h-8 text-pink-400" />
              </div>
              <span className="text-pink-300 text-sm font-medium">Value Champion</span>
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 p-5 rounded-xl border border-purple-500/30 max-w-3xl">
          <div className="flex items-start">
            <Sparkles className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" />
            <p className="text-white/90 text-left italic">
              "The true measure of your success will be the business impact you help your customers achieve. 
              Remember that value-based selling isn't just a technique—it's a better way to serve your customers 
              and grow your business relationships."
            </p>
          </div>
        </div>
        
        {/* Bottom actions */}
        <div className="mt-10 flex gap-4">
          <div className="bg-gradient-to-r from-blue-800/50 to-blue-900/50 backdrop-blur-sm rounded-lg p-3 border border-blue-700/30 flex items-center gap-2 group hover:border-blue-500/50 transition-colors">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Download Certificate</span>
          </div>
          
          <div className="bg-gradient-to-r from-purple-800/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-3 border border-purple-700/30 flex items-center gap-2 group hover:border-purple-500/50 transition-colors">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">Get Additional Resources</span>
          </div>
        </div>
        
        {/* Star rating */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-white/80 mb-2">How was your learning experience?</p>
          <div className="flex gap-1">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      </div>
    </Slide>
  );
}; 