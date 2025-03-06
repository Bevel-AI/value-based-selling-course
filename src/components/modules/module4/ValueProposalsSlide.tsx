import React from 'react';
import Slide from '@/components/Slide';
import { LineChart, CheckCircle, XCircle, FileText, Columns, ArrowRight, Info } from 'lucide-react';

interface ValueProposalsSlideProps {
  id: string;
}

const ValueProposalsSlide: React.FC<ValueProposalsSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      variant="default"
      className="relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900" />
      
      {/* Header */}
      <div className="relative z-10 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-700/40 p-2 rounded-lg">
            <LineChart className="w-6 h-6 text-blue-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Presenting Value-Based Proposals</h2>
        </div>
        
        <p className="text-white/80 max-w-3xl">
          Structure proposals that emphasize value over features to resonate with executive buyers and drive larger deals.
        </p>
        
        {/* Main content - Document comparison */}
        <div className="mt-8 grid grid-cols-2 gap-10 h-[calc(100vh-14rem)]">
          {/* Traditional Proposal */}
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" />
              <span>Traditional Approach</span>
              <span className="ml-auto text-sm bg-red-900/50 text-red-300 px-2 py-1 rounded">AVOID THIS</span>
            </h3>
            
            {/* Document mockup */}
            <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
              {/* Document header */}
              <div className="bg-slate-100 border-b border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-slate-800 font-medium">ProductCo Proposal</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">DRAFT</span>
                  </div>
                </div>
              </div>
              
              {/* Document content */}
              <div className="flex-1 p-5 overflow-y-auto">
                {/* Section 1 */}
                <div className="mb-6">
                  <h5 className="text-slate-800 font-medium mb-3">Product Overview</h5>
                  <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
                  <div className="h-2 bg-slate-200 rounded w-4/5 mb-2"></div>
                  <div className="h-2 bg-slate-200 rounded w-11/12 mb-2"></div>
                  <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                </div>
                
                {/* Section 2 */}
                <div className="mb-6">
                  <h5 className="text-slate-800 font-medium mb-3">Features & Specifications</h5>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div>
                      <div>
                        <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
                        <div className="h-2 bg-slate-200 rounded w-11/12"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="mt-1 w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div>
                      <div>
                        <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
                        <div className="h-2 bg-slate-200 rounded w-4/5"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="mt-1 w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div>
                      <div>
                        <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
                        <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="mt-1 w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div>
                      <div>
                        <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
                        <div className="h-2 bg-slate-200 rounded w-10/12"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section 3 */}
                <div className="mb-6">
                  <h5 className="text-slate-800 font-medium mb-3">Technical Specifications</h5>
                  <div className="border border-slate-200 rounded-lg p-3">
                    <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded w-11/12 mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded w-10/12 mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded w-full mb-2"></div>
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                  </div>
                </div>
                
                {/* Section 4 */}
                <div>
                  <h5 className="text-slate-800 font-medium mb-3">Pricing</h5>
                  <div className="border border-slate-200 rounded-lg p-3">
                    <div className="flex justify-between mb-2">
                      <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                      <div className="h-2 bg-slate-300 rounded w-1/6"></div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="h-2 bg-slate-200 rounded w-1/4"></div>
                      <div className="h-2 bg-slate-300 rounded w-1/6"></div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="h-2 bg-slate-200 rounded w-2/5"></div>
                      <div className="h-2 bg-slate-300 rounded w-1/6"></div>
                    </div>
                    <div className="border-t border-slate-200 pt-2 flex justify-between">
                      <div className="h-2 bg-slate-400 rounded w-1/4"></div>
                      <div className="h-2 bg-slate-500 rounded w-1/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Problems with this approach */}
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">Leads with product features rather than customer value</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">Emphasizes specifications irrelevant to decision-makers</p>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">No connection between price and value delivered</p>
              </div>
            </div>
          </div>
          
          {/* Value-Based Proposal */}
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Value-Based Approach</span>
              <span className="ml-auto text-sm bg-green-900/50 text-green-300 px-2 py-1 rounded">RECOMMENDED</span>
            </h3>
            
            {/* Document mockup */}
            <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
              {/* Document header */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-blue-900 font-medium">Accelerating Business Growth</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-blue-500">FOR CLIENT CO</span>
                  </div>
                </div>
              </div>
              
              {/* Document content */}
              <div className="flex-1 p-5 overflow-y-auto">
                {/* Section 1 */}
                <div className="mb-6">
                  <h5 className="text-blue-800 font-medium mb-2">Executive Summary</h5>
                  <p className="text-sm text-blue-900">Your situation & desired outcomes</p>
                  <div className="h-2 bg-blue-100 rounded w-full mb-2 mt-2"></div>
                  <div className="h-2 bg-blue-100 rounded w-4/5 mb-2"></div>
                  <div className="h-2 bg-blue-100 rounded w-11/12 mb-2"></div>
                  <div className="h-2 bg-blue-100 rounded w-3/4"></div>
                </div>
                
                {/* Section 2 */}
                <div className="mb-6">
                  <h5 className="text-blue-800 font-medium mb-2">Proposed Value Outcomes</h5>
                  
                  <div className="space-y-4 mt-3">
                    <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-sm text-white font-bold">1</div>
                        <div className="text-blue-800 font-medium">Time-to-Market Acceleration</div>
                      </div>
                      <div className="h-2 bg-blue-100 rounded w-full mb-1.5"></div>
                      <div className="h-2 bg-blue-100 rounded w-4/5 mb-1.5"></div>
                      <div className="h-2 bg-blue-100 rounded w-11/12"></div>
                    </div>
                    
                    <div className="bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-400">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-indigo-400 rounded-full flex items-center justify-center text-sm text-white font-bold">2</div>
                        <div className="text-indigo-800 font-medium">Cost Optimization</div>
                      </div>
                      <div className="h-2 bg-indigo-100 rounded w-full mb-1.5"></div>
                      <div className="h-2 bg-indigo-100 rounded w-10/12 mb-1.5"></div>
                      <div className="h-2 bg-indigo-100 rounded w-4/5"></div>
                    </div>
                    
                    <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-sm text-white font-bold">3</div>
                        <div className="text-purple-800 font-medium">Quality Enhancement</div>
                      </div>
                      <div className="h-2 bg-purple-100 rounded w-full mb-1.5"></div>
                      <div className="h-2 bg-purple-100 rounded w-3/4 mb-1.5"></div>
                      <div className="h-2 bg-purple-100 rounded w-11/12"></div>
                    </div>
                  </div>
                </div>
                
                {/* ROI Analysis */}
                <div className="mb-6">
                  <h5 className="text-blue-800 font-medium mb-3">ROI Analysis</h5>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-100">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">31%</div>
                        <div className="text-xs text-blue-800">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-1">7.2</div>
                        <div className="text-xs text-indigo-800">Month payback</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-1">$1.5M</div>
                        <div className="text-xs text-purple-800">3-year value</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Investment Overview */}
                <div className="mb-6">
                  <h5 className="text-blue-800 font-medium mb-3">Investment Overview</h5>
                  <div className="border border-blue-200 rounded-lg p-3">
                    <div className="flex justify-between mb-2">
                      <div className="h-2 bg-blue-100 rounded w-1/3"></div>
                      <div className="h-2 bg-blue-200 rounded w-1/6"></div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="h-2 bg-blue-100 rounded w-1/4"></div>
                      <div className="h-2 bg-blue-200 rounded w-1/6"></div>
                    </div>
                    <div className="border-t border-blue-100 pt-2 flex justify-between">
                      <div className="h-2 bg-blue-300 rounded w-1/4"></div>
                      <div className="h-2 bg-blue-400 rounded w-1/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits of this approach */}
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">Begins with customer's business challenges and desired outcomes</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">Organizes content around value themes rather than product categories</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">Includes clear ROI analysis using the customer's metrics</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key principle */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-900/70 backdrop-blur-sm p-4 rounded-lg border border-blue-700/50 w-3/4 max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg flex-shrink-0">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Key Principle</h4>
              <p className="text-sm text-white/90">
                When presenting, start with the 'why' before the 'what' or 'how.' Engage decision-makers 
                by focusing on business outcomes first, then connect these to the enabling capabilities 
                of your solution, rather than leading with features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ValueProposalsSlide; 