import React from 'react';
import Slide from '@/components/Slide';
import { 
  Calculator, FileSpreadsheet, LineChart, MessageSquare, 
  BookText, Presentation, ArrowRightLeft, Download 
} from 'lucide-react';

interface ValueBasedToolsSlideProps {
  id: string;
}

export const ValueBasedToolsSlide: React.FC<ValueBasedToolsSlideProps> = ({ id }) => {
  return (
    <Slide
      id={id}
      variant="default"
      className="relative overflow-hidden"
    >
      {/* Background with circuit pattern */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541726260-e6b6a6048f13?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-blue-950/70 via-sky-950/50 to-blue-900/70"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-700/40 p-2 rounded-lg">
            <ArrowRightLeft className="w-6 h-6 text-blue-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Value-Based Selling Tools</h2>
        </div>
        
        <p className="text-white/80 max-w-3xl">
          Practical resources to help you implement value-based selling in your daily sales activities.
        </p>
        
        {/* Tools grid */}
        <div className="mt-10 grid grid-cols-4 gap-5 h-[calc(100%-12rem)]">
          {/* Tool 1: Value Calculator */}
          <div className="group bg-gradient-to-br from-blue-900/40 to-blue-950/60 backdrop-blur-sm rounded-xl border border-blue-700/30 p-5 hover:border-blue-500/60 transition-colors relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-800/60 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-white">Value Calculator</h3>
              </div>
              
              <p className="text-sm text-blue-100/90 mb-3">
                Interactive tools that quantify economic impact based on customer-specific variables.
              </p>
              
              <div className="space-y-2">
                <div className="text-xs text-white/70 bg-blue-900/50 rounded-md p-2">
                  ✓ ROI projection templates
                </div>
                <div className="text-xs text-white/70 bg-blue-900/50 rounded-md p-2">
                  ✓ TCO comparison models
                </div>
                <div className="text-xs text-white/70 bg-blue-900/50 rounded-md p-2">
                  ✓ Value-gap analysis forms
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 p-2">
                <Download className="w-4 h-4 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          {/* Tool 2: Value Discovery Templates */}
          <div className="group bg-gradient-to-br from-sky-900/40 to-sky-950/60 backdrop-blur-sm rounded-xl border border-sky-700/30 p-5 hover:border-sky-500/60 transition-colors relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-sky-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-sky-800/60 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-sky-300" />
                </div>
                <h3 className="text-lg font-bold text-white">Discovery Templates</h3>
              </div>
              
              <p className="text-sm text-sky-100/90 mb-3">
                Structured frameworks for uncovering value drivers with different stakeholder types.
              </p>
              
              <div className="space-y-2">
                <div className="text-xs text-white/70 bg-sky-900/50 rounded-md p-2">
                  ✓ C-suite questioning guides
                </div>
                <div className="text-xs text-white/70 bg-sky-900/50 rounded-md p-2">
                  ✓ Technical evaluation templates
                </div>
                <div className="text-xs text-white/70 bg-sky-900/50 rounded-md p-2">
                  ✓ Pain-point assessment tools
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 p-2">
                <Download className="w-4 h-4 text-sky-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          {/* Tool 3: Success Story Library */}
          <div className="group bg-gradient-to-br from-indigo-900/40 to-indigo-950/60 backdrop-blur-sm rounded-xl border border-indigo-700/30 p-5 hover:border-indigo-500/60 transition-colors relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-indigo-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-indigo-800/60 rounded-lg flex items-center justify-center">
                  <BookText className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="text-lg font-bold text-white">Success Stories</h3>
              </div>
              
              <p className="text-sm text-indigo-100/90 mb-3">
                Categorized customer success stories that demonstrate specific value delivery.
              </p>
              
              <div className="space-y-2">
                <div className="text-xs text-white/70 bg-indigo-900/50 rounded-md p-2">
                  ✓ Industry-specific case studies
                </div>
                <div className="text-xs text-white/70 bg-indigo-900/50 rounded-md p-2">
                  ✓ Before/after comparisons
                </div>
                <div className="text-xs text-white/70 bg-indigo-900/50 rounded-md p-2">
                  ✓ Customer testimonial database
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 p-2">
                <Download className="w-4 h-4 text-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          {/* Tool 4: Value Proposition Builder */}
          <div className="group bg-gradient-to-br from-purple-900/40 to-purple-950/60 backdrop-blur-sm rounded-xl border border-purple-700/30 p-5 hover:border-purple-500/60 transition-colors relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-purple-800/60 rounded-lg flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-bold text-white">Proposition Builder</h3>
              </div>
              
              <p className="text-sm text-purple-100/90 mb-3">
                Templates for creating compelling, customer-specific value propositions.
              </p>
              
              <div className="space-y-2">
                <div className="text-xs text-white/70 bg-purple-900/50 rounded-md p-2">
                  ✓ Value statement formulas
                </div>
                <div className="text-xs text-white/70 bg-purple-900/50 rounded-md p-2">
                  ✓ Buyer persona templates
                </div>
                <div className="text-xs text-white/70 bg-purple-900/50 rounded-md p-2">
                  ✓ Value messaging frameworks
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 p-2">
                <Download className="w-4 h-4 text-purple-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          {/* Tool 5: Value Tracking Spreadsheets */}
          <div className="group bg-gradient-to-br from-cyan-900/40 to-cyan-950/60 backdrop-blur-sm rounded-xl border border-cyan-700/30 p-5 hover:border-cyan-500/60 transition-colors relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-cyan-800/60 rounded-lg flex items-center justify-center">
                  <FileSpreadsheet className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-bold text-white">Value Tracking</h3>
              </div>
              
              <p className="text-sm text-cyan-100/90 mb-3">
                Tools for monitoring and measuring the actual value delivered post-implementation.
              </p>
              
              <div className="space-y-2">
                <div className="text-xs text-white/70 bg-cyan-900/50 rounded-md p-2">
                  ✓ Business impact dashboards
                </div>
                <div className="text-xs text-white/70 bg-cyan-900/50 rounded-md p-2">
                  ✓ Success metric trackers
                </div>
                <div className="text-xs text-white/70 bg-cyan-900/50 rounded-md p-2">
                  ✓ Customer value realization logs
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 p-2">
                <Download className="w-4 h-4 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          {/* Tool 6: Value Benchmarking */}
          <div className="group bg-gradient-to-br from-teal-900/40 to-teal-950/60 backdrop-blur-sm rounded-xl border border-teal-700/30 p-5 hover:border-teal-500/60 transition-colors relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-teal-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-teal-800/60 rounded-lg flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="text-lg font-bold text-white">Benchmarking Tools</h3>
              </div>
              
              <p className="text-sm text-teal-100/90 mb-3">
                Industry-specific data and comparisons to establish value context for customers.
              </p>
              
              <div className="space-y-2">
                <div className="text-xs text-white/70 bg-teal-900/50 rounded-md p-2">
                  ✓ Industry performance metrics
                </div>
                <div className="text-xs text-white/70 bg-teal-900/50 rounded-md p-2">
                  ✓ Competitive comparison charts
                </div>
                <div className="text-xs text-white/70 bg-teal-900/50 rounded-md p-2">
                  ✓ Performance gap visualizations
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 p-2">
                <Download className="w-4 h-4 text-teal-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom tip */}
        <div className="mt-8 bg-gradient-to-r from-blue-900/40 to-sky-900/40 p-4 rounded-lg border border-blue-700/30 max-w-3xl mx-auto">
          <p className="text-sm text-center text-white/90">
            <span className="font-bold text-blue-300">Pro Tip:</span> Customize these tools for your specific product, industry, and customer segments to maximize their effectiveness.
          </p>
        </div>
      </div>
    </Slide>
  );
}; 