import React from 'react';
import Slide from '@/components/Slide';
import { 
  Lightbulb, Brain, Calculator, Users, 
  MessageSquare, Briefcase, CheckCircle2 
} from 'lucide-react';

interface KeyTakeawaysSlideProps {
  id: string;
}

export const KeyTakeawaysSlide: React.FC<KeyTakeawaysSlideProps> = ({ id }) => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-indigo-950/60 via-purple-950/60 to-indigo-950/90"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-700/40 p-2 rounded-lg">
            <Lightbulb className="w-6 h-6 text-indigo-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Key Takeaways</h2>
        </div>
        
        <p className="text-white/80 max-w-3xl mb-8">
          Critical success factors for implementing value-based selling in your organization.
        </p>
        
        {/* Takeaways grid */}
        <div className="grid grid-cols-3 gap-6 h-[calc(100%-10rem)]">
          {/* Takeaway 1 */}
          <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-950/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-700/30 hover:border-indigo-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-800/60 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Understand Before Selling</h3>
            </div>
            
            <p className="text-indigo-100/90 text-sm mb-4">
              Deeply understand your customer's business before discussing your solution. Research their industry, challenges, and strategic priorities.
            </p>
            
            <div className="bg-indigo-900/40 p-3 rounded-lg border border-indigo-700/30">
              <p className="text-xs text-white/80 italic">
                "The depth of your customer understanding directly correlates with your ability to articulate meaningful value."
              </p>
            </div>
            
            <div className="mt-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 mr-2" />
              <p className="text-sm text-white/90 font-medium">Prioritize research and discovery</p>
            </div>
          </div>
          
          {/* Takeaway 2 */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/50 backdrop-blur-sm rounded-xl p-6 border border-purple-700/30 hover:border-purple-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-800/60 rounded-full flex items-center justify-center">
                <Calculator className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Quantify Value</h3>
            </div>
            
            <p className="text-purple-100/90 text-sm mb-4">
              Transform abstract benefits into concrete numbers whenever possible. Tangible metrics and ROI calculations drive buying decisions.
            </p>
            
            <div className="bg-purple-900/40 p-3 rounded-lg border border-purple-700/30">
              <p className="text-xs text-white/80 italic">
                "What gets measured gets valued. Quantified outcomes are more compelling than general claims about benefits."
              </p>
            </div>
            
            <div className="mt-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mr-2" />
              <p className="text-sm text-white/90 font-medium">Use value calculators consistently</p>
            </div>
          </div>
          
          {/* Takeaway 3 */}
          <div className="bg-gradient-to-br from-fuchsia-900/30 to-fuchsia-950/50 backdrop-blur-sm rounded-xl p-6 border border-fuchsia-700/30 hover:border-fuchsia-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-fuchsia-800/60 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-fuchsia-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Adapt to Stakeholders</h3>
            </div>
            
            <p className="text-fuchsia-100/90 text-sm mb-4">
              Customize your value story for different stakeholders while maintaining a consistent overall narrative about business impact.
            </p>
            
            <div className="bg-fuchsia-900/40 p-3 rounded-lg border border-fuchsia-700/30">
              <p className="text-xs text-white/80 italic">
                "Value is perceived differently across an organization. Tailor your message to each stakeholder's specific priorities."
              </p>
            </div>
            
            <div className="mt-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-fuchsia-400 mr-2" />
              <p className="text-sm text-white/90 font-medium">Create stakeholder-specific messaging</p>
            </div>
          </div>
          
          {/* Takeaway 4 */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/50 backdrop-blur-sm rounded-xl p-6 border border-blue-700/30 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-800/60 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Ask Impact Questions</h3>
            </div>
            
            <p className="text-blue-100/90 text-sm mb-4">
              Use questioning techniques that uncover business impact, not just technical requirements. Listen for value cues in customer responses.
            </p>
            
            <div className="bg-blue-900/40 p-3 rounded-lg border border-blue-700/30">
              <p className="text-xs text-white/80 italic">
                "The quality of your questions determines the quality of your value conversation. Ask questions that reveal impact."
              </p>
            </div>
            
            <div className="mt-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
              <p className="text-sm text-white/90 font-medium">Develop a value discovery question set</p>
            </div>
          </div>
          
          {/* Takeaway 5 */}
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-950/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-700/30 hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-800/60 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Be a Business Advisor</h3>
            </div>
            
            <p className="text-cyan-100/90 text-sm mb-4">
              Position yourself as a business advisor, not just a vendor. Focus on customer outcomes rather than your product or quota.
            </p>
            
            <div className="bg-cyan-900/40 p-3 rounded-lg border border-cyan-700/30">
              <p className="text-xs text-white/80 italic">
                "Customers buy from salespeople who improve their business, not those who just sell products."
              </p>
            </div>
            
            <div className="mt-4 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2" />
              <p className="text-sm text-white/90 font-medium">Develop industry and business expertise</p>
            </div>
          </div>
          
          {/* Course results */}
          <div className="bg-gradient-to-br from-violet-900/30 to-violet-950/50 backdrop-blur-sm rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 text-violet-300 mr-2" />
              Implementing These Principles Leads To:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-violet-900/40 p-3 rounded-lg">
                <div className="w-10 h-10 bg-violet-800/60 rounded-full flex items-center justify-center">
                  <span className="text-violet-200 font-bold text-sm">+</span>
                </div>
                <div>
                  <p className="text-white font-medium">Larger Deal Sizes</p>
                  <p className="text-sm text-violet-200/80">5-15% increase on average</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-violet-900/40 p-3 rounded-lg">
                <div className="w-10 h-10 bg-violet-800/60 rounded-full flex items-center justify-center">
                  <span className="text-violet-200 font-bold text-sm">+</span>
                </div>
                <div>
                  <p className="text-white font-medium">Higher Win Rates</p>
                  <p className="text-sm text-violet-200/80">5-10% improvement</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-violet-900/40 p-3 rounded-lg">
                <div className="w-10 h-10 bg-violet-800/60 rounded-full flex items-center justify-center">
                  <span className="text-violet-200 font-bold text-sm">+</span>
                </div>
                <div>
                  <p className="text-white font-medium">Stronger Relationships</p>
                  <p className="text-sm text-violet-200/80">Becoming a trusted advisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom quote */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-white/90 italic">
            "Value-based selling isn't just a technique; it's a fundamental approach that aligns your success with your customer's success."
          </p>
        </div>
      </div>
    </Slide>
  );
}; 