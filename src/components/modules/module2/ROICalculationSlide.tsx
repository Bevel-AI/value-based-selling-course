import React from 'react';
import Slide from '@/components/Slide';
import { Calculator, TrendingUp, Clock, BarChart3 } from 'lucide-react';

interface ROICalculationSlideProps {
  id: string;
}

const ROICalculationSlide: React.FC<ROICalculationSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="ROI Calculation Methods"
      subtitle="Quantifying value to build compelling business cases"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1472&auto=format&fit=crop')",
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
                  <Calculator className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-200">Core ROI Metrics</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Return on Investment (ROI)</h4>
                  <div className="bg-blue-950/50 p-3 rounded-lg border border-blue-800/30 mb-2">
                    <p className="text-sm text-white/90 font-mono">
                      ROI = (Net Benefit / Cost) × 100%
                    </p>
                  </div>
                  <p className="text-sm text-white/80">
                    Measures the percentage return relative to the investment cost. Higher percentages indicate better returns.
                  </p>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Net Present Value (NPV)</h4>
                  <div className="bg-blue-950/50 p-3 rounded-lg border border-blue-800/30 mb-2">
                    <p className="text-sm text-white/90 font-mono">
                      NPV = Σ (Benefits<sub>t</sub> - Costs<sub>t</sub>) / (1 + r)<sup>t</sup>
                    </p>
                  </div>
                  <p className="text-sm text-white/80">
                    Accounts for the time value of money. Positive NPV indicates a profitable investment.
                  </p>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Payback Period</h4>
                  <div className="bg-blue-950/50 p-3 rounded-lg border border-blue-800/30 mb-2">
                    <p className="text-sm text-white/90 font-mono">
                      Payback Period = Initial Investment / Annual Cash Flow
                    </p>
                  </div>
                  <p className="text-sm text-white/80">
                    Time required to recover the cost of investment. Shorter periods are generally preferred.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-700/50 p-3 rounded-full">
                  <BarChart3 className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-purple-200">Value Categories to Measure</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-2">Hard Benefits (Tangible)</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Direct cost savings</li>
                    <li>Revenue increases</li>
                    <li>Labor cost reduction</li>
                    <li>Inventory optimization</li>
                    <li>Reduced downtime</li>
                    <li>Decreased error rates</li>
                  </ul>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-2">Soft Benefits (Intangible)</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Improved customer satisfaction</li>
                    <li>Enhanced brand reputation</li>
                    <li>Better employee morale</li>
                    <li>Reduced compliance risk</li>
                    <li>Increased agility/flexibility</li>
                    <li>Improved decision-making</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-900/30 backdrop-blur-md p-6 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-700/50 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-200">ROI Calculation Process</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-700/50 h-7 w-7 rounded-full flex items-center justify-center text-emerald-300 font-semibold">1</div>
                    <h4 className="font-medium text-white">Identify All Costs</h4>
                  </div>
                  <ul className="text-sm text-white/80 space-y-1 ml-10 mt-2 list-disc">
                    <li>Initial purchase/implementation</li>
                    <li>Training and onboarding</li>
                    <li>Ongoing maintenance</li>
                    <li>Support and upgrades</li>
                    <li>Internal resource allocation</li>
                  </ul>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-700/50 h-7 w-7 rounded-full flex items-center justify-center text-emerald-300 font-semibold">2</div>
                    <h4 className="font-medium text-white">Quantify Benefits</h4>
                  </div>
                  <ul className="text-sm text-white/80 space-y-1 ml-10 mt-2 list-disc">
                    <li>Estimate direct financial gains</li>
                    <li>Calculate cost reductions</li>
                    <li>Measure productivity improvements</li>
                    <li>Assess risk mitigation value</li>
                    <li>Determine revenue impact</li>
                  </ul>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-700/50 h-7 w-7 rounded-full flex items-center justify-center text-emerald-300 font-semibold">3</div>
                    <h4 className="font-medium text-white">Apply Appropriate Formulas</h4>
                  </div>
                  <ul className="text-sm text-white/80 space-y-1 ml-10 mt-2 list-disc">
                    <li>Select metrics relevant to customer</li>
                    <li>Use conservative estimates</li>
                    <li>Account for time value of money</li>
                    <li>Consider risk factors</li>
                  </ul>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-700/50 h-7 w-7 rounded-full flex items-center justify-center text-emerald-300 font-semibold">4</div>
                    <h4 className="font-medium text-white">Create Compelling Visualization</h4>
                  </div>
                  <ul className="text-sm text-white/80 space-y-1 ml-10 mt-2 list-disc">
                    <li>Develop clear charts and graphs</li>
                    <li>Show before/after comparisons</li>
                    <li>Highlight key metrics for each stakeholder</li>
                    <li>Include timeline for realizing benefits</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-900/30 backdrop-blur-md p-6 rounded-xl border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-700/50 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-amber-200">ROI Best Practices</h3>
              </div>
              
              <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                <ul className="text-sm text-white/80 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Be conservative:</span> Underestimate benefits and overestimate costs to build credibility</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Co-create with customer:</span> Involve customer in developing assumptions and inputs</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Document assumptions:</span> Clearly state all assumptions used in calculations</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Use customer metrics:</span> Align with the KPIs and metrics the customer already uses</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Include sensitivity analysis:</span> Show how results change with different assumptions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">Key Insight</h3>
          <p className="text-white/90">
            Effective ROI calculations transform abstract value into concrete financial terms that resonate with decision-makers. The most persuasive ROI analyses combine rigorous financial methodology with customer-specific metrics and transparent assumptions. Remember that ROI is both a quantitative tool and a collaborative discussion framework.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default ROICalculationSlide; 