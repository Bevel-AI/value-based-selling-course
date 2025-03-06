import React from 'react';
import Slide from '@/components/Slide';
import { 
  Rocket, ListChecks, CalendarCheck, Users, 
  PenTool, PlayCircle, BookOpen, CheckCircle 
} from 'lucide-react';

interface ActionPlanningSlideProps {
  id: string;
}

export const ActionPlanningSlide: React.FC<ActionPlanningSlideProps> = ({ id }) => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-cyan-950/60 via-indigo-950/60 to-purple-950/70"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-cyan-700/40 p-2 rounded-lg">
            <Rocket className="w-6 h-6 text-cyan-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Action Planning</h2>
        </div>
        
        <p className="text-white/80 max-w-3xl mb-6">
          Create your personal roadmap to implement value-based selling in your upcoming sales conversations.
        </p>
        
        {/* Main content */}
        <div className="flex gap-6 h-[calc(100%-12rem)]">
          {/* Left column - 30-Day Plan */}
          <div className="w-3/5 bg-gradient-to-br from-cyan-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-cyan-800/60 rounded-full flex items-center justify-center">
                <CalendarCheck className="w-5 h-5 text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Your 30-Day Value-Based Selling Plan</h3>
            </div>
            
            <div className="space-y-4">
              {/* Week 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 text-center">
                  <div className="w-14 h-14 bg-cyan-800/40 rounded-lg flex items-center justify-center mb-1">
                    <span className="text-cyan-300 font-bold">1</span>
                  </div>
                  <span className="text-xs text-cyan-400">Week</span>
                </div>
                
                <div className="bg-cyan-900/30 rounded-lg p-4 flex-1 border border-cyan-700/30">
                  <h4 className="text-white font-medium mb-2">Preparation & Research</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Select one upcoming customer conversation to apply value-based principles</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Research their business challenges and prepare value-focused questions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Create a value calculator relevant to this customer's industry</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Week 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 text-center">
                  <div className="w-14 h-14 bg-indigo-800/40 rounded-lg flex items-center justify-center mb-1">
                    <span className="text-indigo-300 font-bold">2</span>
                  </div>
                  <span className="text-xs text-indigo-400">Week</span>
                </div>
                
                <div className="bg-indigo-900/30 rounded-lg p-4 flex-1 border border-indigo-700/30">
                  <h4 className="text-white font-medium mb-2">Application & Practice</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>Restructure your next proposal around business outcomes rather than features</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>Practice handling a price objection with a value-based response</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>Schedule time with a colleague for role-playing these scenarios</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Week 3-4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 text-center">
                  <div className="w-14 h-14 bg-purple-800/40 rounded-lg flex items-center justify-center mb-1">
                    <span className="text-purple-300 font-bold">3-4</span>
                  </div>
                  <span className="text-xs text-purple-400">Weeks</span>
                </div>
                
                <div className="bg-purple-900/30 rounded-lg p-4 flex-1 border border-purple-700/30">
                  <h4 className="text-white font-medium mb-2">Expansion & Reflection</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Create at least one customer success story that demonstrates specific value delivery</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Review your current opportunities and identify where to elevate the conversation from features to value</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Document what worked, what didn't, and adjust your approach accordingly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Resources */}
          <div className="w-2/5 space-y-5">
            {/* Practice Resources */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-5 border border-blue-700/30 h-1/2">
              <div className="flex items-center gap-2 mb-4">
                <PlayCircle className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Practice Resources</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/70 transition-colors">
                    <Users className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Role-Play Scenarios</h4>
                    <p className="text-sm text-blue-200/80">Pre-built customer conversations to practice value-based selling techniques</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/70 transition-colors">
                    <PenTool className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Value Proposition Worksheet</h4>
                    <p className="text-sm text-blue-200/80">Template to craft your own value propositions for upcoming meetings</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/70 transition-colors">
                    <ListChecks className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Implementation Checklist</h4>
                    <p className="text-sm text-blue-200/80">Step-by-step guide to implementing value-based selling in your sales process</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Key Reminders */}
            <div className="bg-gradient-to-br from-violet-900/20 to-violet-900/20 backdrop-blur-sm rounded-xl p-5 border border-violet-700/30 h-1/2">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-violet-400" />
                <h3 className="text-lg font-semibold text-white">Key Reminders</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex gap-2 items-center text-sm text-white/90 bg-violet-900/30 p-2 rounded-lg">
                  <div className="w-6 h-6 bg-violet-800/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-violet-300 font-bold">1</span>
                  </div>
                  <p>Start small, with one opportunity, rather than changing everything at once</p>
                </li>
                
                <li className="flex gap-2 items-center text-sm text-white/90 bg-violet-900/30 p-2 rounded-lg">
                  <div className="w-6 h-6 bg-violet-800/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-violet-300 font-bold">2</span>
                  </div>
                  <p>Value-based selling is a skill that improves with deliberate practice</p>
                </li>
                
                <li className="flex gap-2 items-center text-sm text-white/90 bg-violet-900/30 p-2 rounded-lg">
                  <div className="w-6 h-6 bg-violet-800/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-violet-300 font-bold">3</span>
                  </div>
                  <p>The improvements in your results will be worth the effort</p>
                </li>
                
                <li className="flex gap-2 items-center text-sm text-white/90 bg-violet-900/30 p-2 rounded-lg">
                  <div className="w-6 h-6 bg-violet-800/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-violet-300 font-bold">4</span>
                  </div>
                  <p>Seek feedback from customers on the value conversations you're having</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom tip */}
        <div className="mt-6 bg-gradient-to-r from-cyan-900/30 via-indigo-900/30 to-purple-900/30 p-4 rounded-lg border border-cyan-700/30 max-w-4xl mx-auto">
          <p className="text-sm text-center text-white/90">
            <span className="font-bold text-cyan-300">Pro Tip:</span> Share your action plan with your manager or a peer to create accountability and receive support on your value-selling journey.
          </p>
        </div>
      </div>
    </Slide>
  );
}; 