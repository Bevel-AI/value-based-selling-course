import React from 'react';
import Slide from '@/components/Slide';
import { Target, Check, X, Hammer, Sparkles } from 'lucide-react';

interface ValuePropositionsSlideProps {
  id: string;
}

const ValuePropositionsSlide: React.FC<ValuePropositionsSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Crafting Compelling Value Propositions"
      subtitle="Articulating the 'why' behind purchasing decisions"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop')",
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
                  <Target className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-200">Value Proposition Formula</h3>
              </div>
              
              <div className="bg-blue-900/50 p-5 rounded-lg border border-blue-700/30">
                <p className="text-white/90 text-sm">
                  For <span className="text-blue-300 font-medium">[specific customer type]</span> 
                  who <span className="text-blue-300 font-medium">[key pain point]</span>, 
                  our <span className="text-blue-300 font-medium">[solution]</span> 
                  provides <span className="text-blue-300 font-medium">[key benefit]</span> 
                  unlike <span className="text-blue-300 font-medium">[alternative approaches]</span> 
                  because <span className="text-blue-300 font-medium">[unique differentiator]</span>.
                </p>
              </div>
              
              <div className="mt-4 bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                <h4 className="font-medium text-white mb-3">Example</h4>
                <p className="text-sm text-white/90">
                  For <span className="text-blue-300">enterprise sales teams</span> 
                  who <span className="text-blue-300">struggle with long sales cycles and low win rates</span>, 
                  our <span className="text-blue-300">ValueSellPro platform</span> 
                  provides <span className="text-blue-300">a systematic approach to quantify and communicate customer value</span> 
                  unlike <span className="text-blue-300">traditional CRM tools</span> 
                  because <span className="text-blue-300">it includes AI-powered ROI calculators and value visualization tools that customers can easily understand and trust</span>.
                </p>
              </div>
            </div>
            
            <div className="bg-emerald-900/30 backdrop-blur-md p-6 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-700/50 p-3 rounded-full">
                  <Check className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-200">What Makes It Effective</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-emerald-700/50 h-6 w-6 rounded-full flex items-center justify-center text-emerald-300 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Customer-Centric</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Focuses on customer needs rather than product features; speaks their language
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-emerald-700/50 h-6 w-6 rounded-full flex items-center justify-center text-emerald-300 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Specific & Measurable</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Includes concrete outcomes and metrics rather than vague promises
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-emerald-700/50 h-6 w-6 rounded-full flex items-center justify-center text-emerald-300 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Differentiated</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Clearly explains what makes your approach uniquely valuable
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-emerald-700/50 h-6 w-6 rounded-full flex items-center justify-center text-emerald-300 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Concise</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Communicates value clearly and memorably in a brief format
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-emerald-700/50 h-6 w-6 rounded-full flex items-center justify-center text-emerald-300 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Verifiable</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Makes claims that can be substantiated with evidence and examples
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-rose-900/30 backdrop-blur-md p-6 rounded-xl border border-rose-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-rose-700/50 p-3 rounded-full">
                  <X className="w-6 h-6 text-rose-300" />
                </div>
                <h3 className="text-xl font-semibold text-rose-200">Common Pitfalls</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-rose-900/50 p-4 rounded-lg border border-rose-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-rose-700/50 h-6 w-6 rounded-full flex items-center justify-center text-rose-300 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Feature-Focused</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Emphasizing what your product does rather than outcomes it delivers
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-rose-900/50 p-4 rounded-lg border border-rose-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-rose-700/50 h-6 w-6 rounded-full flex items-center justify-center text-rose-300 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Generic Claims</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Using vague statements that could apply to any company in your industry
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-rose-900/50 p-4 rounded-lg border border-rose-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-rose-700/50 h-6 w-6 rounded-full flex items-center justify-center text-rose-300 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Too Technical</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Using industry jargon or technical language that obscures the value
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-rose-900/50 p-4 rounded-lg border border-rose-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-rose-700/50 h-6 w-6 rounded-full flex items-center justify-center text-rose-300 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Overreaching</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Making claims that aren't credible or can't be substantiated
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-rose-900/50 p-4 rounded-lg border border-rose-700/30">
                  <div className="flex items-start gap-2">
                    <div className="bg-rose-700/50 h-6 w-6 rounded-full flex items-center justify-center text-rose-300 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">One-Size-Fits-All</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Not adapting your value proposition for different stakeholders or use cases
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-700/50 p-3 rounded-full">
                  <Hammer className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-purple-200">Development Process</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-6 w-6 rounded-full flex items-center justify-center text-purple-300 font-semibold text-xs">1</div>
                    <h4 className="font-medium text-white">Understand Customer Needs</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-9 mt-1">
                    Research pain points, desired outcomes, and decision criteria
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-6 w-6 rounded-full flex items-center justify-center text-purple-300 font-semibold text-xs">2</div>
                    <h4 className="font-medium text-white">Map Solution Benefits</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-9 mt-1">
                    Connect your capabilities to specific customer outcomes
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-6 w-6 rounded-full flex items-center justify-center text-purple-300 font-semibold text-xs">3</div>
                    <h4 className="font-medium text-white">Identify Differentiators</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-9 mt-1">
                    Determine what makes your approach uniquely valuable
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-6 w-6 rounded-full flex items-center justify-center text-purple-300 font-semibold text-xs">4</div>
                    <h4 className="font-medium text-white">Draft & Test</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-9 mt-1">
                    Create initial proposition and test with colleagues
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-6 w-6 rounded-full flex items-center justify-center text-purple-300 font-semibold text-xs">5</div>
                    <h4 className="font-medium text-white">Refine & Customize</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-9 mt-1">
                    Adjust based on feedback and tailor for different stakeholders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-amber-700/50 p-3 rounded-full">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="text-xl font-semibold text-white">Key Insight</h3>
          </div>
          
          <p className="text-white/90">
            An effective value proposition is not static—it evolves throughout the sales process as you learn more about your customer's unique situation and priorities. The most successful value propositions are co-created with customers, incorporating their language, metrics, and business context to create a compelling case for change.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default ValuePropositionsSlide; 