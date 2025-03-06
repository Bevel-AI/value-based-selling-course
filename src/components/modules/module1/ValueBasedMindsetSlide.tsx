import React from 'react';
import Slide from '@/components/Slide';
import { BrainCircuit, GitCompareArrows, Goal, UserCheck } from 'lucide-react';

interface ValueBasedMindsetSlideProps {
  id: string;
}

const ValueBasedMindsetSlide: React.FC<ValueBasedMindsetSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="The Value-Based Mindset"
      subtitle="Shifting from 'selling products' to 'delivering value'"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=1469&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.2)"
        }}
      />
      
      <div className="relative z-10 mt-10 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-indigo-900/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-indigo-500/30 h-full">
            <h3 className="text-xl font-semibold text-indigo-200 mb-6 flex items-center gap-2">
              <BrainCircuit className="w-6 h-6 text-indigo-400" />
              <span>The Mindset Shift</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-lg bg-amber-900/30 border border-amber-500/30">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-semibold">
                  FROM
                </div>
                <div>
                  <h4 className="font-semibold text-white">Product-focused Seller</h4>
                  <p className="text-sm text-white/80">"I need to sell my product"</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <GitCompareArrows className="w-8 h-8 text-indigo-300 rotate-90" />
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg bg-emerald-900/30 border border-emerald-500/30">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center font-semibold">
                  TO
                </div>
                <div>
                  <h4 className="font-semibold text-white">Business Advisor</h4>
                  <p className="text-sm text-white/80">"I need to improve my customer's business"</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
              <p className="text-sm text-white/90 italic">
                "The value-based mindset also means being willing to walk away when your solution doesn't deliver sufficient value – because long-term relationships matter more than short-term sales."
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="bg-purple-900/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-purple-500/30 flex-1">
            <h3 className="text-xl font-semibold text-purple-200 mb-5 flex items-center gap-2">
              <Goal className="w-6 h-6 text-purple-400" />
              <span>Key Principles</span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-purple-700/50 p-2 rounded-full mt-0.5">
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">See yourself as a business advisor first</h4>
                  <p className="text-sm text-white/80">Prioritize customer's success over transaction</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-purple-700/50 p-2 rounded-full mt-0.5">
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">Understand what success means for customer</h4>
                  <p className="text-sm text-white/80">Define value from their perspective</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-purple-700/50 p-2 rounded-full mt-0.5">
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">Create collaborative relationships</h4>
                  <p className="text-sm text-white/80">Move beyond transactional interactions</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-purple-700/50 p-2 rounded-full mt-0.5">
                  <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">Align your objectives with customer's</h4>
                  <p className="text-sm text-white/80">Your success depends on their success</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-indigo-300" />
              <span>Expected Outcome</span>
            </h3>
            <p className="text-white/90">
              When you adopt a value-based mindset, you position yourself as a strategic partner rather than just another vendor. This transforms the customer conversation from "Why should I buy your product?" to "How can we work together to achieve my business goals?"
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ValueBasedMindsetSlide; 