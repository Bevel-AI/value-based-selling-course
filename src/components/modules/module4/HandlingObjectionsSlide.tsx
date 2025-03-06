import React from 'react';
import Slide from '@/components/Slide';
import { Clock, DollarSign, Zap, RefreshCw, PieChart, ShieldCheck, MessageSquare, CheckCircle } from 'lucide-react';

interface HandlingObjectionsSlideProps {
  id: string;
}

const HandlingObjectionsSlide: React.FC<HandlingObjectionsSlideProps> = ({ id }) => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1549421263-6064833b071b?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/70 via-transparent to-cyan-950/70" />
      
      {/* Main content */}
      <div className="relative z-10 p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-cyan-700/40 p-2 rounded-lg">
            <DollarSign className="w-6 h-6 text-cyan-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Handling Price Objections with Value</h2>
        </div>
        
        <p className="text-white/80 max-w-3xl">
          When customers say "your price is too high," they're really saying they don't see enough value to justify your price.
        </p>
        
        {/* Main content - Interactive conversation scenarios */}
        <div className="mt-8 grid grid-cols-5 gap-6 h-[calc(100vh-14rem)]">
          {/* Left panel - Conversation flow */}
          <div className="col-span-3 flex flex-col">
            {/* The conversation board */}
            <div className="bg-slate-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-800/30 h-full">
              {/* Board header */}
              <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-3 border-b border-cyan-800/30">
                <h3 className="text-white font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-300" />
                  Reframing Price Conversations
                </h3>
              </div>
              
              {/* Conversation flow */}
              <div className="p-5 space-y-5">
                {/* Customer objection */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <div className="bg-slate-800/60 p-4 rounded-lg max-w-[85%]">
                    <p className="text-white font-medium">Your price is 20% higher than your competitor's solution.</p>
                  </div>
                </div>
                
                {/* Sales response - Step 1 */}
                <div className="pl-12">
                  <div className="bg-cyan-900/40 border border-cyan-700/30 rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-800/60 to-cyan-700/60 px-4 py-2 border-b border-cyan-700/30">
                      <h4 className="text-cyan-100 text-sm font-semibold">Step 1: Acknowledge the concern</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-700 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">SR</span>
                        </div>
                        <div className="p-3 bg-cyan-800/40 rounded-lg max-w-[85%]">
                          <p className="text-white">"I understand price is an important factor in your decision. Thanks for bringing this up so we can address it directly."</p>
                        </div>
                      </div>
                      <div className="border-t border-cyan-700/30 pt-3 flex items-center gap-2 px-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <p className="text-sm text-cyan-200">Validate their concern without being defensive</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sales response - Step 2 */}
                <div className="pl-12">
                  <div className="bg-blue-900/40 border border-blue-700/30 rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-800/60 to-blue-700/60 px-4 py-2 border-b border-blue-700/30">
                      <h4 className="text-blue-100 text-sm font-semibold">Step 2: Ask value-clarifying questions</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">SR</span>
                        </div>
                        <div className="p-3 bg-blue-800/40 rounded-lg max-w-[85%]">
                          <p className="text-white">"Could you share which aspects of our solution are most valuable to you? And what concerns you most about the price difference?"</p>
                        </div>
                      </div>
                      <div className="border-t border-blue-700/30 pt-3 flex items-center gap-2 px-2">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <p className="text-sm text-blue-200">Understand their specific value perception and concerns</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Customer response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <div className="bg-slate-800/60 p-4 rounded-lg max-w-[85%]">
                    <p className="text-white">
                      "We like your analytics capabilities and implementation support, but I need to justify the additional cost to our CFO."
                    </p>
                  </div>
                </div>
                
                {/* Sales response - Step 3 */}
                <div className="pl-12">
                  <div className="bg-indigo-900/40 border border-indigo-700/30 rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-800/60 to-indigo-700/60 px-4 py-2 border-b border-indigo-700/30">
                      <h4 className="text-indigo-100 text-sm font-semibold">Step 3: Revisit ROI and value differentiation</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">SR</span>
                        </div>
                        <div className="p-3 bg-indigo-800/40 rounded-lg max-w-[85%]">
                          <p className="text-white">"Let's review the ROI model we built together. With our solution, you're getting a 215% return over three years versus around 150% with the competitor. For your CFO, that's an additional $450,000 in value for a $75,000 price difference."</p>
                        </div>
                      </div>
                      <div className="border-t border-indigo-700/30 pt-3 flex items-center gap-2 px-2">
                        <CheckCircle className="w-4 h-4 text-indigo-400" />
                        <p className="text-sm text-indigo-200">Focus on additional value delivered, not just cost difference</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sales response - Step 4 */}
                <div className="pl-12">
                  <div className="bg-purple-900/40 border border-purple-700/30 rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-800/60 to-purple-700/60 px-4 py-2 border-b border-purple-700/30">
                      <h4 className="text-purple-100 text-sm font-semibold">Step 4: If needed, adjust scope without reducing price</h4>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">SR</span>
                        </div>
                        <div className="p-3 bg-purple-800/40 rounded-lg max-w-[85%]">
                          <p className="text-white">"If budget is a hard constraint, we could adjust the solution to meet your budget while keeping the core value drivers. For example, we could phase the analytics implementation over two quarters instead of deploying everything at once."</p>
                        </div>
                      </div>
                      <div className="border-t border-purple-700/30 pt-3 flex items-center gap-2 px-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <p className="text-sm text-purple-200">Maintain price integrity while showing flexibility</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right panel - Value focus points */}
          <div className="col-span-2 space-y-4">
            {/* Value point 1 */}
            <div className="bg-gradient-to-r from-cyan-900/40 to-cyan-800/40 rounded-xl p-4 border border-cyan-700/30 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-cyan-700/50">
                  <RefreshCw className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="text-white font-medium">Reframe, Don't Defend</h3>
              </div>
              <p className="text-sm text-white/80 mt-2 pl-10">
                When faced with price objections, shift the conversation from price to value. Don't just defend your pricing – help customers see the complete value picture.
              </p>
            </div>
            
            {/* Value point 2 */}
            <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-xl p-4 border border-blue-700/30 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-700/50">
                  <PieChart className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-white font-medium">Total Cost vs. Total Value</h3>
              </div>
              <p className="text-sm text-white/80 mt-2 pl-10">
                Help customers calculate the holistic ROI including implementation success, ongoing support, and long-term partnership benefits that go beyond the initial price tag.
              </p>
            </div>
            
            {/* Value point 3 */}
            <div className="bg-gradient-to-r from-indigo-900/40 to-indigo-800/40 rounded-xl p-4 border border-indigo-700/30 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-indigo-700/50">
                  <ShieldCheck className="w-5 h-5 text-indigo-300" />
                </div>
                <h3 className="text-white font-medium">Unique Value Differentiation</h3>
              </div>
              <p className="text-sm text-white/80 mt-2 pl-10">
                Remind customers of your unique value points that competitors don't offer. Focus on implementation approach, customer support model, or specialized expertise.
              </p>
            </div>
            
            {/* Value point 4 */}
            <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 rounded-xl p-4 border border-purple-700/30 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-purple-700/50">
                  <Zap className="w-5 h-5 text-purple-300" />
                </div>
                <h3 className="text-white font-medium">Value-Based Adjustments</h3>
              </div>
              <p className="text-sm text-white/80 mt-2 pl-10">
                If price pressure continues, adjust scope rather than simply reducing price. Remove or phase certain capabilities while maintaining their access to core value drivers.
              </p>
            </div>
            
            {/* Key quote */}
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-xl p-5 border border-slate-700/50 backdrop-blur-sm mt-8">
              <div className="flex gap-4">
                <div className="text-4xl text-cyan-500 font-serif">"</div>
                <div>
                  <p className="text-white/90 italic text-sm">
                    Frame your premium not as higher cost but as greater return on investment. The goal is shifting the evaluation criteria from "who has more features at lower cost" to "who delivers more meaningful business value."
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-8 h-1 bg-cyan-600/70 rounded-full"></div>
                    <p className="text-cyan-300 text-sm font-medium">Value-Based Selling Principle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default HandlingObjectionsSlide; 