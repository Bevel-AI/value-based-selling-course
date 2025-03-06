import React from 'react';
import Slide from '@/components/Slide';
import { FileText, PieChart, CheckSquare, AlertCircle, ArrowRight } from 'lucide-react';

interface BusinessCaseSlideProps {
  id: string;
}

const BusinessCaseSlide: React.FC<BusinessCaseSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Building Value-Based Business Cases"
      subtitle="Creating compelling justification for investment"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop')",
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
                  <FileText className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-200">Business Case Components</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Executive Summary</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Brief overview of current challenges</li>
                    <li>Proposed solution and expected outcomes</li>
                    <li>Key financial metrics and strategic benefits</li>
                    <li>Timeline for implementation and value realization</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Current State Analysis</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Detailed description of pain points and challenges</li>
                    <li>Quantification of current costs and inefficiencies</li>
                    <li>Business impact of maintaining status quo</li>
                    <li>Opportunity costs of inaction</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Proposed Solution</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Solution overview and key capabilities</li>
                    <li>How it addresses specific pain points</li>
                    <li>Implementation approach and timeline</li>
                    <li>Required resources and dependencies</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Financial Analysis</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Total cost of ownership (TCO)</li>
                    <li>Expected ROI and payback period</li>
                    <li>Net present value (NPV) and IRR</li>
                    <li>Sensitivity analysis for different scenarios</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Risk Assessment & Mitigation</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Potential implementation risks</li>
                    <li>Adoption challenges and mitigation strategies</li>
                    <li>Contingency plans for key risks</li>
                    <li>Success factors and dependencies</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-700/50 p-3 rounded-full">
                  <PieChart className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-purple-200">Value Visualization Techniques</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-2">Before & After Comparisons</h4>
                  <p className="text-sm text-white/80">
                    Side-by-side visuals showing key metrics before and after implementation, highlighting the delta.
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-2">Value Realization Timeline</h4>
                  <p className="text-sm text-white/80">
                    Visual roadmap showing when different value components will be realized over time.
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-2">Value Heat Maps</h4>
                  <p className="text-sm text-white/80">
                    Color-coded visualizations showing impact intensity across different business areas or departments.
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-2">ROI Waterfall Charts</h4>
                  <p className="text-sm text-white/80">
                    Step-by-step visualization showing how different value components contribute to overall ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-900/30 backdrop-blur-md p-6 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-700/50 p-3 rounded-full">
                  <CheckSquare className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-200">Business Case Best Practices</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <ul className="text-sm text-white/80 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-300 font-bold mt-0.5">✓</span>
                      <p><span className="font-medium text-emerald-300">Co-create with the customer:</span> Involve key stakeholders in developing assumptions and inputs</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-300 font-bold mt-0.5">✓</span>
                      <p><span className="font-medium text-emerald-300">Use customer's language:</span> Adopt their terminology, KPIs, and financial metrics</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-300 font-bold mt-0.5">✓</span>
                      <p><span className="font-medium text-emerald-300">Balance quantitative & qualitative:</span> Include both hard numbers and strategic benefits</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-300 font-bold mt-0.5">✓</span>
                      <p><span className="font-medium text-emerald-300">Be conservative:</span> Use realistic assumptions that can be defended</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-300 font-bold mt-0.5">✓</span>
                      <p><span className="font-medium text-emerald-300">Tailor for different audiences:</span> Create versions for technical, financial, and executive stakeholders</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-300 font-bold mt-0.5">✓</span>
                      <p><span className="font-medium text-emerald-300">Document assumptions:</span> Clearly state all assumptions and data sources</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-300 font-bold mt-0.5">✓</span>
                      <p><span className="font-medium text-emerald-300">Include proof points:</span> Reference similar customer successes and case studies</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-900/30 backdrop-blur-md p-6 rounded-xl border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-700/50 p-3 rounded-full">
                  <ArrowRight className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-amber-200">Business Case Process</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-700/50 h-7 w-7 rounded-full flex items-center justify-center text-amber-300 font-semibold">1</div>
                    <h4 className="font-medium text-white">Discovery & Data Collection</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Gather customer data on current costs, challenges, and strategic priorities
                  </p>
                </div>
                
                <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-700/50 h-7 w-7 rounded-full flex items-center justify-center text-amber-300 font-semibold">2</div>
                    <h4 className="font-medium text-white">Solution Mapping</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Align solution capabilities with specific customer pain points and opportunities
                  </p>
                </div>
                
                <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-700/50 h-7 w-7 rounded-full flex items-center justify-center text-amber-300 font-semibold">3</div>
                    <h4 className="font-medium text-white">Value Quantification</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Calculate financial impact using customer-specific metrics and assumptions
                  </p>
                </div>
                
                <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-700/50 h-7 w-7 rounded-full flex items-center justify-center text-amber-300 font-semibold">4</div>
                    <h4 className="font-medium text-white">Draft & Validation</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Create initial business case and validate assumptions with key stakeholders
                  </p>
                </div>
                
                <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-700/50 h-7 w-7 rounded-full flex items-center justify-center text-amber-300 font-semibold">5</div>
                    <h4 className="font-medium text-white">Refinement & Finalization</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Incorporate feedback, refine calculations, and create final presentation materials
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-rose-900/30 backdrop-blur-md p-6 rounded-xl border border-rose-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-rose-700/50 p-3 rounded-full">
                  <AlertCircle className="w-6 h-6 text-rose-300" />
                </div>
                <h3 className="text-xl font-semibold text-rose-200">Common Business Case Pitfalls</h3>
              </div>
              
              <div className="bg-rose-900/50 p-4 rounded-lg border border-rose-700/30">
                <ul className="text-sm text-white/80 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-300 font-bold mt-0.5">✖</span>
                    <p><span className="font-medium text-rose-300">Overpromising:</span> Making unrealistic claims that damage credibility</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-300 font-bold mt-0.5">✖</span>
                    <p><span className="font-medium text-rose-300">One-size-fits-all:</span> Using generic templates without customization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-300 font-bold mt-0.5">✖</span>
                    <p><span className="font-medium text-rose-300">Ignoring soft benefits:</span> Focusing only on financial metrics</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-300 font-bold mt-0.5">✖</span>
                    <p><span className="font-medium text-rose-300">Complexity overload:</span> Creating overly complicated analyses</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">Key Insight</h3>
          <p className="text-white/90">
            The most effective business cases are not one-way presentations but collaborative tools that help customers articulate and quantify value in their own terms. By co-creating the business case with your customer, you not only build a more accurate justification but also create internal champions who can advocate for your solution throughout the buying process.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default BusinessCaseSlide; 