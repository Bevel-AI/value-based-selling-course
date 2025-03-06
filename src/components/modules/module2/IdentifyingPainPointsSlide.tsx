import React from 'react';
import Slide from '@/components/Slide';
import { Search, AlertCircle, TrendingUp, HeartPulse } from 'lucide-react';

interface IdentifyingPainPointsSlideProps {
  id: string;
}

const IdentifyingPainPointsSlide: React.FC<IdentifyingPainPointsSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Identifying Customer Pain Points"
      subtitle="Uncovering the challenges that drive buying decisions"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      <div className="relative z-10 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-300" />
                <span>Discovery Techniques</span>
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-full mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Research Industry Trends</h4>
                    <p className="text-sm text-white/80">Understand common challenges in their sector before meetings</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-full mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Ask Powerful Questions</h4>
                    <p className="text-sm text-white/80">"What's preventing you from reaching your goals?" and "What happens if this challenge isn't addressed?"</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="bg-blue-900/50 p-2 rounded-full mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Listen for Emotional Signals</h4>
                    <p className="text-sm text-white/80">Frustration, concern, or urgency often indicate significant pain points</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-200 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-purple-300" />
                <span>Common Pain Categories</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-1">Operational</h4>
                  <p className="text-sm text-white/80">Inefficiencies, bottlenecks, manual processes</p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-1">Financial</h4>
                  <p className="text-sm text-white/80">Revenue limitations, high costs, budget constraints</p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-1">Competitive</h4>
                  <p className="text-sm text-white/80">Market pressures, falling behind rivals</p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-1">Growth</h4>
                  <p className="text-sm text-white/80">Barriers to scaling, expansion challenges</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-900/30 backdrop-blur-md p-6 rounded-xl border border-emerald-500/30">
              <h3 className="text-xl font-semibold text-emerald-200 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-300" />
                <span>Effective Pain Point Questions</span>
              </h3>
              
              <div className="space-y-3">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <p className="text-white/90 italic">"What are your biggest challenges related to [relevant area]?"</p>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <p className="text-white/90 italic">"How is this issue impacting your business financially?"</p>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <p className="text-white/90 italic">"What have you tried in the past to solve this problem?"</p>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <p className="text-white/90 italic">"Who else in your organization is affected by this issue?"</p>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <p className="text-white/90 italic">"What would success look like if we solved this problem?"</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-900/30 backdrop-blur-md p-6 rounded-xl border border-amber-500/30">
              <h3 className="text-xl font-semibold text-amber-200 mb-4 flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-amber-300" />
                <span>Key Insight</span>
              </h3>
              
              <p className="text-white/90 mb-4">
                The most powerful pain points aren't always the ones customers mention first. Systematic questioning that explores both business and personal impacts will reveal the value opportunities that your solution can address.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-white/90 italic text-sm">
                  "Remember, customers buy solutions to problems, not products or services. Your ability to identify and articulate their pain points better than they can themselves positions you as a trusted advisor."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default IdentifyingPainPointsSlide; 