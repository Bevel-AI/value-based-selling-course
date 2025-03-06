import React from 'react';
import Slide from '@/components/Slide';
import { ArrowRight, Clock, Target, MessageSquare, LineChart } from 'lucide-react';

interface Module4TitleSlideProps {
  id: string;
}

const Module4TitleSlide: React.FC<Module4TitleSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      variant="default"
      className="relative w-full h-full overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-radial from-indigo-900/60 to-transparent"
      />
      
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Module number with animated effect */}
        <div className="relative">
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-lg opacity-75 animate-pulse"></span>
          <span className="relative bg-indigo-800 text-white px-6 py-2 rounded-full text-lg font-bold">
            Module 4
          </span>
        </div>
        
        {/* Title with gradient text */}
        <h1 className="mt-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
          The Value-Based Sales Process
        </h1>
        
        {/* Interactive timeline */}
        <div className="mt-16 w-full max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-300/60 via-purple-400/60 to-indigo-300/60 transform -translate-y-1/2 rounded-full"></div>
            
            {/* Timeline nodes with interactive elements */}
            <div className="relative flex justify-between">
              {/* First node */}
              <div className="flex flex-col items-center">
                <div className="relative z-10 bg-indigo-700 w-12 h-12 rounded-full flex items-center justify-center border-2 border-white transform transition-all hover:scale-110 hover:bg-indigo-500">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <p className="mt-3 text-white font-medium text-center max-w-[150px]">Value-Focused Discovery</p>
              </div>
              
              {/* Second node */}
              <div className="flex flex-col items-center">
                <div className="relative z-10 bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center border-2 border-white transform transition-all hover:scale-110 hover:bg-purple-500">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="mt-3 text-white font-medium text-center max-w-[150px]">Solution Mapping</p>
              </div>
              
              {/* Third node */}
              <div className="flex flex-col items-center">
                <div className="relative z-10 bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center border-2 border-white transform transition-all hover:scale-110 hover:bg-blue-500">
                  <LineChart className="w-6 h-6 text-white" />
                </div>
                <p className="mt-3 text-white font-medium text-center max-w-[150px]">Value-Based Proposals</p>
              </div>
              
              {/* Fourth node */}
              <div className="flex flex-col items-center">
                <div className="relative z-10 bg-cyan-700 w-12 h-12 rounded-full flex items-center justify-center border-2 border-white transform transition-all hover:scale-110 hover:bg-cyan-500">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="mt-3 text-white font-medium text-center max-w-[150px]">Handling Price Objections</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtitle with animated arrow */}
        <div className="mt-16 flex items-center gap-3">
          <span className="text-xl text-white font-light italic">From features to outcomes</span>
          <ArrowRight className="w-5 h-5 text-indigo-300 animate-pulse" />
          <span className="text-xl text-white font-light italic">From products to value</span>
        </div>
      </div>
    </Slide>
  );
};

export default Module4TitleSlide; 