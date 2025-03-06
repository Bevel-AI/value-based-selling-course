import React from 'react';
import Slide from '@/components/Slide';
import { Users, Briefcase, LineChart, Wrench } from 'lucide-react';

interface ValuePerceptionSlideProps {
  id: string;
}

const ValuePerceptionSlide: React.FC<ValuePerceptionSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Value Perception Across Stakeholders"
      subtitle="Different roles define value through different lenses"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      <div className="relative z-10 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-900/30 backdrop-blur-md p-6 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-700/50 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-200">C-Suite Executives</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-1">Strategic Focus</h4>
                  <p className="text-sm text-white/80">Market position, competitive advantage, long-term growth</p>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-1">Key Value Metrics</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Revenue growth potential</li>
                    <li>Market share impact</li>
                    <li>Strategic alignment</li>
                    <li>Organizational transformation</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-1">Value Messaging Approach</h4>
                  <p className="text-sm text-white/80">Focus on big-picture business outcomes and strategic impact rather than features</p>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-900/30 backdrop-blur-md p-6 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-700/50 p-3 rounded-full">
                  <LineChart className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-200">Financial Decision-Makers</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-1">Financial Focus</h4>
                  <p className="text-sm text-white/80">ROI, cost reduction, risk mitigation, budget optimization</p>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-1">Key Value Metrics</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Payback period</li>
                    <li>Total cost of ownership</li>
                    <li>Cost avoidance</li>
                    <li>Resource optimization</li>
                  </ul>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-1">Value Messaging Approach</h4>
                  <p className="text-sm text-white/80">Provide detailed ROI analysis with clear financial metrics and timelines</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-700/50 p-3 rounded-full">
                  <Users className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-purple-200">End Users</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-1">User Experience Focus</h4>
                  <p className="text-sm text-white/80">Ease of use, time savings, productivity, job satisfaction</p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-1">Key Value Metrics</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Time saved per task</li>
                    <li>Reduction in errors</li>
                    <li>Improved work quality</li>
                    <li>Reduced frustration</li>
                  </ul>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-1">Value Messaging Approach</h4>
                  <p className="text-sm text-white/80">Demonstrate how solution makes daily work more productive and enjoyable</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-900/30 backdrop-blur-md p-6 rounded-xl border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-700/50 p-3 rounded-full">
                  <Wrench className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-amber-200">Technical Evaluators</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                  <h4 className="font-medium text-white mb-1">Technical Focus</h4>
                  <p className="text-sm text-white/80">Implementation requirements, integration, security, maintenance</p>
                </div>
                
                <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                  <h4 className="font-medium text-white mb-1">Key Value Metrics</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Implementation timeline</li>
                    <li>Integration complexity</li>
                    <li>Security compliance</li>
                    <li>Maintenance requirements</li>
                  </ul>
                </div>
                
                <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                  <h4 className="font-medium text-white mb-1">Value Messaging Approach</h4>
                  <p className="text-sm text-white/80">Address technical concerns while connecting to broader business outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">Key Insight</h3>
          <p className="text-white/90">
            To sell effectively, you must tailor your value messaging to each stakeholder's specific priorities while ensuring your overall value story remains consistent. The most successful value-based sellers map stakeholders and customize their approach accordingly.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default ValuePerceptionSlide; 