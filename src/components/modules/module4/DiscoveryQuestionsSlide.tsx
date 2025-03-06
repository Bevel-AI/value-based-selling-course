import React from 'react';
import Slide from '@/components/Slide';
import { MessageSquare, Search, AlertCircle, Brain, Lightbulb, Zap } from 'lucide-react';

interface DiscoveryQuestionsSlideProps {
  id: string;
}

const DiscoveryQuestionsSlide: React.FC<DiscoveryQuestionsSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      variant="default"
      className="relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900" />
      
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          backgroundSize: "200px",
          backgroundRepeat: "repeat"
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-indigo-700/40 p-2 rounded-lg">
            <MessageSquare className="w-6 h-6 text-indigo-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Discovery: Value-Focused Questions</h2>
        </div>
        
        {/* Chat interface */}
        <div className="grid grid-cols-12 gap-6 h-[calc(100%-6rem)]">
          {/* Left panel - Question categories */}
          <div className="col-span-4 bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 overflow-hidden">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-indigo-400" />
              Question Categories
            </h3>
            
            <div className="space-y-4 mt-6">
              {/* Category 1 */}
              <div className="bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-500 hover:bg-indigo-900/50 transition-colors cursor-pointer">
                <h4 className="text-indigo-300 font-medium">Context Questions</h4>
                <p className="text-sm text-slate-300 mt-1">Establish business background and objectives</p>
              </div>
              
              {/* Category 2 */}
              <div className="bg-purple-900/30 p-4 rounded-lg border-l-4 border-purple-500 hover:bg-purple-900/50 transition-colors cursor-pointer">
                <h4 className="text-purple-300 font-medium">Impact Questions</h4>
                <p className="text-sm text-slate-300 mt-1">Explore effect on teams and productivity</p>
              </div>
              
              {/* Category 3 */}
              <div className="bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-blue-900/50 transition-colors cursor-pointer">
                <h4 className="text-blue-300 font-medium">Quantification Questions</h4>
                <p className="text-sm text-slate-300 mt-1">Determine frequency, cost, and scale</p>
              </div>
              
              {/* Category 4 */}
              <div className="bg-cyan-900/30 p-4 rounded-lg border-l-4 border-cyan-500 hover:bg-cyan-900/50 transition-colors cursor-pointer">
                <h4 className="text-cyan-300 font-medium">Ripple Effect Questions</h4>
                <p className="text-sm text-slate-300 mt-1">Identify impacts across departments</p>
              </div>
            </div>
          </div>
          
          {/* Right panel - Chat interface */}
          <div className="col-span-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 flex flex-col overflow-hidden">
            {/* Chat header */}
            <div className="bg-slate-800 p-3 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-white font-medium">Value Discovery Conversation</span>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {/* Sales rep message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">SR</span>
                </div>
                <div className="bg-indigo-900/40 p-3 rounded-lg max-w-[80%]">
                  <p className="text-white">What business initiatives are driving your interest in our solution?</p>
                  <div className="mt-2 text-xs text-indigo-300 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Context Question</span>
                  </div>
                </div>
              </div>
              
              {/* Customer message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-slate-700/60 p-3 rounded-lg max-w-[80%]">
                  <p className="text-white">We're launching a new product line and need to reduce our time-to-market by at least 25%.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">C</span>
                </div>
              </div>
              
              {/* Sales rep message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">SR</span>
                </div>
                <div className="bg-indigo-900/40 p-3 rounded-lg max-w-[80%]">
                  <p className="text-white">How is your current process affecting your team's ability to meet these time-to-market goals?</p>
                  <div className="mt-2 text-xs text-purple-300 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Impact Question</span>
                  </div>
                </div>
              </div>
              
              {/* Value cue highlight */}
              <div className="flex items-center gap-2 p-2 bg-amber-900/30 border border-amber-700/30 rounded-lg">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-300">Value cue detected: Efficiency & Time-to-Market</span>
              </div>
              
              {/* Sales rep message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">SR</span>
                </div>
                <div className="bg-indigo-900/40 p-3 rounded-lg max-w-[80%]">
                  <p className="text-white">What's the approximate cost of each week of delay in your product launch?</p>
                  <div className="mt-2 text-xs text-blue-300 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Quantification Question</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key insight */}
            <div className="mt-auto p-4 bg-gradient-to-r from-indigo-800/60 to-purple-800/60 border-t border-indigo-700/50">
              <div className="flex items-start gap-3">
                <div className="bg-amber-500/20 p-2 rounded-full">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Key Insight</h4>
                  <p className="text-sm text-slate-200 mt-1">Effective discovery isn't interrogation but a collaborative exploration of where your solution can deliver meaningful value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default DiscoveryQuestionsSlide; 