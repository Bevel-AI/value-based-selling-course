import React from 'react';
import Slide from '@/components/Slide';
import { Target, Lightbulb, CheckCircle, AlertTriangle } from 'lucide-react';

interface ValuePropositionSlideProps {
  id: string;
}

const ValuePropositionSlide: React.FC<ValuePropositionSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Value Proposition Development"
      subtitle="Crafting compelling value statements that resonate with customers"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      <div className="relative z-10 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-indigo-900/30 backdrop-blur-md p-6 rounded-xl border border-indigo-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-700/50 p-3 rounded-full">
                  <Target className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-200">Value Proposition Framework</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700/30">
                  <h4 className="font-medium text-white mb-2">Core Components</h4>
                  <ul className="text-sm text-white/80 space-y-3 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-indigo-300">Problem Statement:</span>
                      <p className="mt-1">Clear articulation of the customer's pain point or challenge</p>
                    </li>
                    <li>
                      <span className="font-medium text-indigo-300">Solution Overview:</span>
                      <p className="mt-1">How your offering specifically addresses the identified problem</p>
                    </li>
                    <li>
                      <span className="font-medium text-indigo-300">Unique Value:</span>
                      <p className="mt-1">What makes your solution distinctly valuable compared to alternatives</p>
                    </li>
                    <li>
                      <span className="font-medium text-indigo-300">Quantifiable Benefits:</span>
                      <p className="mt-1">Specific, measurable outcomes the customer can expect</p>
                    </li>
                    <li>
                      <span className="font-medium text-indigo-300">Proof Points:</span>
                      <p className="mt-1">Evidence that validates your claims (case studies, testimonials, data)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-rose-900/30 backdrop-blur-md p-6 rounded-xl border border-rose-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-rose-700/50 p-3 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-rose-300" />
                </div>
                <h3 className="text-xl font-semibold text-rose-200">Common Pitfalls</h3>
              </div>
              
              <div className="bg-rose-900/50 p-4 rounded-lg border border-rose-700/30">
                <ul className="text-sm text-white/80 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-300 font-bold mt-0.5">✖</span>
                    <p><span className="font-medium text-rose-300">Feature-focused:</span> Emphasizing product features without connecting to customer outcomes</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-300 font-bold mt-0.5">✖</span>
                    <p><span className="font-medium text-rose-300">Generic claims:</span> Making broad statements that could apply to any solution</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-300 font-bold mt-0.5">✖</span>
                    <p><span className="font-medium text-rose-300">Jargon-heavy:</span> Using technical language that obscures the actual value</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-300 font-bold mt-0.5">✖</span>
                    <p><span className="font-medium text-rose-300">Unsubstantiated:</span> Making claims without evidence or proof points</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-300 font-bold mt-0.5">✖</span>
                    <p><span className="font-medium text-rose-300">One-size-fits-all:</span> Not tailoring to specific customer segments or stakeholders</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-900/30 backdrop-blur-md p-6 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-700/50 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-200">Value Proposition Template</h3>
              </div>
              
              <div className="bg-emerald-900/50 p-5 rounded-lg border border-emerald-700/30">
                <p className="text-white/90 italic">
                  For <span className="text-emerald-300 font-medium">[target customer]</span> 
                  who <span className="text-emerald-300 font-medium">[statement of need or opportunity]</span>, 
                  our <span className="text-emerald-300 font-medium">[product/service name]</span> 
                  is a <span className="text-emerald-300 font-medium">[product category]</span> 
                  that <span className="text-emerald-300 font-medium">[key benefit statement/promise]</span>. 
                  Unlike <span className="text-emerald-300 font-medium">[competing alternative]</span>, 
                  our product <span className="text-emerald-300 font-medium">[key differentiator]</span>.
                </p>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Example</h4>
                  <p className="text-sm text-white/90">
                    For <span className="text-emerald-300">enterprise sales teams</span> 
                    who <span className="text-emerald-300">struggle with long sales cycles and low conversion rates</span>, 
                    our <span className="text-emerald-300">ValueSell Pro platform</span> 
                    is a <span className="text-emerald-300">sales enablement solution</span> 
                    that <span className="text-emerald-300">reduces sales cycles by 30% while increasing win rates by 25%</span>. 
                    Unlike <span className="text-emerald-300">traditional CRM systems</span>, 
                    our product <span className="text-emerald-300">provides AI-driven value quantification tools that automatically calculate and visualize customer-specific ROI</span>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-900/30 backdrop-blur-md p-6 rounded-xl border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-700/50 p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-amber-200">Value Proposition Best Practices</h3>
              </div>
              
              <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                <ul className="text-sm text-white/80 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Customer-centric:</span> Start with customer needs, not your product features</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Specific & measurable:</span> Include concrete metrics and outcomes</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Differentiated:</span> Clearly articulate what makes your solution unique</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Concise:</span> Keep it clear and memorable (aim for 30-60 seconds spoken)</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Tailored:</span> Adapt for different stakeholders while maintaining core message</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">Key Insight</h3>
          <p className="text-white/90">
            A strong value proposition is the foundation of value-based selling. It transforms features into outcomes, articulates why your solution is uniquely valuable, and provides a consistent framework that can be tailored to different stakeholders. Regularly refine your value proposition based on customer feedback and evolving market conditions.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default ValuePropositionSlide; 