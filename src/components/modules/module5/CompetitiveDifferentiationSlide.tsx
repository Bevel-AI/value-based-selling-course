import React from 'react';
import Slide from '@/components/Slide';
import { TrendingUp, Shield, Target, Award, Zap, Check, X, AlertCircle, Star } from 'lucide-react';

interface CompetitiveDifferentiationSlideProps {
  id: string;
}

const CompetitiveDifferentiationSlide: React.FC<CompetitiveDifferentiationSlideProps> = ({ id }) => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1528&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-teal-950/70 to-teal-950/90"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-teal-700/40 p-2 rounded-lg">
            <TrendingUp className="w-6 h-6 text-teal-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Value-Based Competitive Differentiation</h2>
        </div>
        
        <p className="text-white/80 max-w-3xl">
          A strategic approach to position your solution's unique value against competitors in a way that resonates with customer priorities.
        </p>
        
        {/* Main content area */}
        <div className="mt-6 h-[calc(100%-8rem)] flex flex-col">
          {/* Top section - Principles */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-teal-900/60 backdrop-blur-sm rounded-lg p-4 border border-teal-700/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-teal-800/80 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-teal-300" />
                </div>
                <h3 className="text-md font-semibold text-white">Focus on Value, Not Features</h3>
              </div>
              <p className="text-sm text-teal-100/90">
                Differentiate based on business outcomes and value delivery rather than feature-by-feature comparisons.
              </p>
            </div>
            
            <div className="bg-teal-900/60 backdrop-blur-sm rounded-lg p-4 border border-teal-700/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-teal-800/80 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-teal-300" />
                </div>
                <h3 className="text-md font-semibold text-white">Be Respectfully Competitive</h3>
              </div>
              <p className="text-sm text-teal-100/90">
                Present competitive differences factually without disparaging competitors, focusing on your unique strengths.
              </p>
            </div>
            
            <div className="bg-teal-900/60 backdrop-blur-sm rounded-lg p-4 border border-teal-700/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-teal-800/80 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-teal-300" />
                </div>
                <h3 className="text-md font-semibold text-white">Align With Buying Criteria</h3>
              </div>
              <p className="text-sm text-teal-100/90">
                Structure differentiation around the customer's most important criteria and business priorities.
              </p>
            </div>
          </div>
          
          {/* Main section - The Competitive Value Matrix */}
          <div className="flex-1 bg-teal-950/70 backdrop-blur-sm rounded-lg border border-teal-700/40 p-5">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-300" />
              Competitive Value Matrix Example
            </h3>
            
            <div className="overflow-auto h-[calc(100%-2rem)]">
              <table className="w-full border-collapse">
                {/* Table headers */}
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left border-b border-teal-700/30">
                      <div className="text-teal-200 font-medium">Value Criteria</div>
                    </th>
                    <th className="py-3 px-4 text-left border-b border-teal-700/30">
                      <div className="text-teal-400 font-medium flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal-800 rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-teal-200" />
                        </div>
                        Our Solution
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left border-b border-teal-700/30">
                      <div className="text-gray-400 font-medium">Competitor A</div>
                    </th>
                    <th className="py-3 px-4 text-left border-b border-teal-700/30">
                      <div className="text-gray-400 font-medium">Competitor B</div>
                    </th>
                  </tr>
                </thead>
                
                {/* Table body */}
                <tbody>
                  {/* Time to Value */}
                  <tr className="group hover:bg-teal-900/20">
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="font-medium text-white">Time to Value</div>
                      <div className="text-xs text-teal-300/80">How quickly customers realize benefits</div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-teal-100 text-sm font-medium">2-4 weeks</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                        </div>
                      </div>
                      <div className="text-xs text-teal-300/80 mt-1">
                        Rapid implementation with pre-built templates
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300 text-sm font-medium">8-12 weeks</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Requires extensive configuration
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300 text-sm font-medium">12+ weeks</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Complex customization required
                      </div>
                    </td>
                  </tr>
                  
                  {/* Total Cost of Ownership */}
                  <tr className="group hover:bg-teal-900/20">
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="font-medium text-white">Total Cost of Ownership</div>
                      <div className="text-xs text-teal-300/80">3-year cost including implementation and support</div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-teal-100 text-sm font-medium">$450K - $650K</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="text-xs text-teal-300/80 mt-1">
                        Predictable subscription model, minimal services required
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300 text-sm font-medium">$500K - $800K</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Higher ongoing services costs
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300 text-sm font-medium">$700K - $1.2M</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Significant implementation and customization fees
                      </div>
                    </td>
                  </tr>
                  
                  {/* Business Impact */}
                  <tr className="group hover:bg-teal-900/20">
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="font-medium text-white">Business Impact</div>
                      <div className="text-xs text-teal-300/80">Measurable improvements in key metrics</div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-teal-100 text-sm font-medium">30-40% improvement</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                        </div>
                      </div>
                      <div className="text-xs text-teal-300/80 mt-1">
                        Comprehensive analytics with business intelligence
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300 text-sm font-medium">20-25% improvement</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Limited reporting capabilities
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300 text-sm font-medium">15-20% improvement</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Basic features without advanced analytics
                      </div>
                    </td>
                  </tr>
                  
                  {/* Scalability */}
                  <tr className="group hover:bg-teal-900/20">
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="font-medium text-white">Scalability</div>
                      <div className="text-xs text-teal-300/80">Ability to grow with customer's business</div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-teal-100 text-sm font-medium">Enterprise-grade</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                        </div>
                      </div>
                      <div className="text-xs text-teal-300/80 mt-1">
                        Handles 10x growth without performance degradation
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300 text-sm font-medium">Mid-market focus</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Performance issues at high volumes
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b border-teal-700/20">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300 text-sm font-medium">Limited scaling</div>
                        <div className="flex">
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-amber-400" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Requires significant upgrades to scale
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Bottom section - Best Practices */}
          <div className="mt-4 bg-gradient-to-r from-teal-900/70 to-emerald-900/70 backdrop-blur-sm rounded-lg p-4 border border-teal-700/40">
            <h3 className="text-md font-semibold text-white mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-teal-300" />
              Best Practices for Using Value Differentiation
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/90">
                  Emphasize criteria where your solution delivers superior business value
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/90">
                  Back up value claims with customer success stories and metrics
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/90">
                  Avoid making unsubstantiated claims about competitors
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/90">
                  Don't lead with price as the primary differentiator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CompetitiveDifferentiationSlide; 