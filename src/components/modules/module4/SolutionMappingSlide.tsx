import React from 'react';
import Slide from '@/components/Slide';
import { Target, MapPin, Puzzle, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SolutionMappingSlideProps {
  id: string;
}

const SolutionMappingSlide: React.FC<SolutionMappingSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      variant="default"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-700/40 p-2 rounded-lg">
            <Target className="w-6 h-6 text-purple-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Solution Mapping to Value Drivers</h2>
        </div>
        
        {/* Description */}
        <p className="text-white/80 max-w-3xl">
          Once you've identified customer value drivers, systematically map your solution's 
          capabilities to each one to ensure your presentation remains focused on what matters most.
        </p>
        
        {/* Interactive mapping visualization */}
        <div className="mt-8 h-[calc(100%-10rem)]">
          <div className="relative h-full overflow-hidden">
            {/* Map visualization - grid with connection lines */}
            <div className="h-full grid grid-cols-9 gap-4">
              {/* Customer side */}
              <div className="col-span-4 bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-5 border border-purple-800/30 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  Customer Value Drivers
                </h3>
                
                <div className="space-y-4 mt-4 flex-1">
                  {/* Priority 1 */}
                  <div className="relative group" id="customer-priority-1">
                    <div className="bg-purple-900/60 p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="text-purple-300 font-medium">Speed-to-Market</h4>
                      <p className="text-sm text-white/80 mt-1">Reducing product launch cycles by 25%</p>
                    </div>
                    <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-purple-500 transform -translate-y-1/2 translate-x-1"></div>
                  </div>
                  
                  {/* Priority 2 */}
                  <div className="relative group" id="customer-priority-2">
                    <div className="bg-indigo-900/60 p-4 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="text-indigo-300 font-medium">Cost Reduction</h4>
                      <p className="text-sm text-white/80 mt-1">Decreasing operational costs by 15%</p>
                    </div>
                    <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-indigo-500 transform -translate-y-1/2 translate-x-1"></div>
                  </div>
                  
                  {/* Priority 3 */}
                  <div className="relative group" id="customer-priority-3">
                    <div className="bg-blue-900/60 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="text-blue-300 font-medium">Quality Improvement</h4>
                      <p className="text-sm text-white/80 mt-1">Reducing defects by 30%</p>
                    </div>
                    <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-blue-500 transform -translate-y-1/2 translate-x-1"></div>
                  </div>
                  
                  {/* Priority 4 */}
                  <div className="relative group" id="customer-priority-4">
                    <div className="bg-cyan-900/60 p-4 rounded-lg border-l-4 border-cyan-500">
                      <h4 className="text-cyan-300 font-medium">Team Collaboration</h4>
                      <p className="text-sm text-white/80 mt-1">Enhancing cross-functional workflows</p>
                    </div>
                    <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-cyan-500 transform -translate-y-1/2 translate-x-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Middle connection area */}
              <div className="relative col-span-1 flex items-center justify-center">
                <div className="absolute inset-x-0 top-[20%] h-[60%] flex flex-col items-center">
                  <div className="h-full flex flex-col items-center justify-around">
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      {/* Line 1 - Speed to Workflow */}
                      <path d="M 0,18% C 50%,18% 50%,15% 100%,15%" 
                            stroke="url(#purple-gradient)" strokeWidth="2" fill="none" />
                      
                      {/* Line 2 - Cost to Analytics */}
                      <path d="M 0,38% C 50%,38% 50%,40% 100%,40%" 
                            stroke="url(#indigo-gradient)" strokeWidth="2" fill="none" />
                      
                      {/* Line 3 - Quality to Automation */}
                      <path d="M 0,60% C 50%,60% 50%,65% 100%,65%" 
                            stroke="url(#blue-gradient)" strokeWidth="2" fill="none" />
                      
                      {/* Line 4 - Team to Platform */}
                      <path d="M 0,82% C 50%,82% 50%,88% 100%,88%" 
                            stroke="url(#cyan-gradient)" strokeWidth="2" fill="none" />
                      
                      {/* Gradient definitions */}
                      <defs>
                        <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                        
                        <linearGradient id="indigo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        
                        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#0ea5e9" />
                        </linearGradient>
                        
                        <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0ea5e9" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Connection labels */}
                    <div className="z-10 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Solution side */}
              <div className="col-span-4 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-xl p-5 border border-blue-800/30 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Puzzle className="w-5 h-5 text-blue-400" />
                  Solution Capabilities
                </h3>
                
                <div className="space-y-4 mt-4 flex-1">
                  {/* Capability 1 */}
                  <div className="relative group" id="solution-capability-1">
                    <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-purple-500 transform -translate-y-1/2 -translate-x-1"></div>
                    <div className="bg-indigo-900/60 p-4 rounded-lg border-r-4 border-purple-500">
                      <div className="flex justify-between items-start">
                        <h4 className="text-indigo-300 font-medium">Automated Workflow</h4>
                        <span className="bg-purple-700/60 text-xs px-2 py-1 rounded text-white">40% ↓</span>
                      </div>
                      <p className="text-sm text-white/80 mt-1">Reduces approval cycles by 40%, directly accelerating time-to-market</p>
                    </div>
                  </div>
                  
                  {/* Capability 2 */}
                  <div className="relative group" id="solution-capability-2">
                    <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-indigo-500 transform -translate-y-1/2 -translate-x-1"></div>
                    <div className="bg-indigo-900/60 p-4 rounded-lg border-r-4 border-indigo-500">
                      <div className="flex justify-between items-start">
                        <h4 className="text-indigo-300 font-medium">Real-time Analytics</h4>
                        <span className="bg-indigo-700/60 text-xs px-2 py-1 rounded text-white">18% ↓</span>
                      </div>
                      <p className="text-sm text-white/80 mt-1">Identifies cost-saving opportunities across operations</p>
                    </div>
                  </div>
                  
                  {/* Capability 3 */}
                  <div className="relative group" id="solution-capability-3">
                    <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-blue-500 transform -translate-y-1/2 -translate-x-1"></div>
                    <div className="bg-indigo-900/60 p-4 rounded-lg border-r-4 border-blue-500">
                      <div className="flex justify-between items-start">
                        <h4 className="text-indigo-300 font-medium">Quality Automation</h4>
                        <span className="bg-blue-700/60 text-xs px-2 py-1 rounded text-white">35% ↓</span>
                      </div>
                      <p className="text-sm text-white/80 mt-1">Reduces defects through automated quality checkpoints</p>
                    </div>
                  </div>
                  
                  {/* Capability 4 */}
                  <div className="relative group" id="solution-capability-4">
                    <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-cyan-500 transform -translate-y-1/2 -translate-x-1"></div>
                    <div className="bg-indigo-900/60 p-4 rounded-lg border-r-4 border-cyan-500">
                      <div className="flex justify-between items-start">
                        <h4 className="text-indigo-300 font-medium">Integrated Platform</h4>
                        <span className="bg-cyan-700/60 text-xs px-2 py-1 rounded text-white">3x ↑</span>
                      </div>
                      <p className="text-sm text-white/80 mt-1">Enables cross-functional collaboration in a unified workspace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Best practice tip */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-900/70 to-blue-900/70 backdrop-blur-sm p-3 rounded-lg border border-purple-500/30 flex items-center gap-3 max-w-xl">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm text-white/90">
            <span className="font-medium text-white">Best Practice:</span> Be selective – highlight only capabilities relevant to their specific value drivers. Avoid the temptation to present every feature.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default SolutionMappingSlide; 