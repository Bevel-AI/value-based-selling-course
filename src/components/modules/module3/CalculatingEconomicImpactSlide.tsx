import React from 'react';
import Slide from '@/components/Slide';
import { Calculator, LineChart, TrendingUp, DollarSign } from 'lucide-react';

interface CalculatingEconomicImpactSlideProps {
  id: string;
}

const CalculatingEconomicImpactSlide: React.FC<CalculatingEconomicImpactSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Calculating Economic Impact"
      subtitle="Transform value into concrete financial terms"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565514020179-026b92b4a0b7?q=80&w=1470&auto=format&fit=crop')",
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
                <h3 className="text-xl font-semibold text-blue-200">Value Driver Framework</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Revenue Increase</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>New customer acquisition</li>
                    <li>Increased customer retention</li>
                    <li>Higher average deal size</li>
                    <li>Faster time-to-market</li>
                    <li>Expanded market reach</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Cost Reduction</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Lower operational expenses</li>
                    <li>Reduced labor costs</li>
                    <li>Decreased error rates</li>
                    <li>Minimized downtime</li>
                    <li>Resource optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-900/30 backdrop-blur-md p-6 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-700/50 p-3 rounded-full">
                  <LineChart className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-200">Value Calculation Formulas</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Time Savings</h4>
                  <div className="bg-emerald-950/50 p-3 rounded-lg border border-emerald-800/30 mb-2">
                    <p className="text-sm text-white/90 font-mono">
                      Hours saved per employee × Number of employees × Hourly cost × Frequency
                    </p>
                  </div>
                  <p className="text-xs text-white/80 italic">
                    Example: 2 hours/week × 50 employees × $40/hour × 50 weeks = $200,000 annual savings
                  </p>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Error Reduction</h4>
                  <div className="bg-emerald-950/50 p-3 rounded-lg border border-emerald-800/30 mb-2">
                    <p className="text-sm text-white/90 font-mono">
                      Error frequency × Cost per error × Error reduction rate
                    </p>
                  </div>
                  <p className="text-xs text-white/80 italic">
                    Example: 100 errors/month × $500/error × 30% reduction = $18,000 monthly savings
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-700/50 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-purple-200">Value Quantification Process</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-7 w-7 rounded-full flex items-center justify-center text-purple-300 font-semibold">1</div>
                    <h4 className="font-medium text-white">Identify Key Value Drivers</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Determine where exactly your solution will impact the customer financially
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-7 w-7 rounded-full flex items-center justify-center text-purple-300 font-semibold">2</div>
                    <h4 className="font-medium text-white">Establish Calculation Method</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Create appropriate formulas for each value driver based on customer's metrics
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-7 w-7 rounded-full flex items-center justify-center text-purple-300 font-semibold">3</div>
                    <h4 className="font-medium text-white">Gather Customer Inputs</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Collect customer-specific data points through discovery conversations
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-7 w-7 rounded-full flex items-center justify-center text-purple-300 font-semibold">4</div>
                    <h4 className="font-medium text-white">Calculate & Validate</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Apply formulas with conservative estimates and verify with stakeholders
                  </p>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-700/50 h-7 w-7 rounded-full flex items-center justify-center text-purple-300 font-semibold">5</div>
                    <h4 className="font-medium text-white">Present Value Range</h4>
                  </div>
                  <p className="text-sm text-white/80 ml-10 mt-1">
                    Show potential outcomes with different scenarios rather than exact figures
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-900/30 backdrop-blur-md p-6 rounded-xl border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-700/50 p-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-amber-200">Best Practices</h3>
              </div>
              
              <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                <ul className="text-sm text-white/80 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Use conservative estimates:</span> Build credibility by understating potential benefits</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Distinguish hard vs. soft benefits:</span> Clearly separate immediate financial impact from indirect benefits</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Create interactive calculators:</span> Allow customers to input their own variables for personalization</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Use customer's metrics:</span> Align with their existing KPIs and measurement frameworks</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Document assumptions:</span> Clearly state what factors and variables informed your calculations</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">Key Insight</h3>
          <p className="text-white/90">
            Quantifying value transforms abstract benefits into concrete financial terms that resonate with decision-makers. The goal isn't mathematical perfection but a reasonable demonstration of economic impact that helps customers justify their investment with confidence.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default CalculatingEconomicImpactSlide; 