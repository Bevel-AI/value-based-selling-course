import React from 'react';
import Slide from '@/components/Slide';
import { Layers, ArrowRight, CheckCircle, MessageSquarePlus, Award, Zap, BarChart4 } from 'lucide-react';

interface FeatureToBenefitSlideProps {
  id: string;
}

const FeatureToBenefitSlide: React.FC<FeatureToBenefitSlideProps> = ({ id }) => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1606765962248-7ff437ea92e7?q=80&w=1374&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-violet-950/90"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-violet-700/40 p-2 rounded-lg">
            <Layers className="w-6 h-6 text-violet-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Feature-to-Benefit Conversion Framework</h2>
        </div>
        
        <p className="text-white/80 max-w-3xl">
          A systematic approach to transform technical features into compelling business value propositions.
        </p>
        
        {/* Main content area */}
        <div className="mt-8 h-[calc(100%-8rem)] flex flex-col">
          {/* The framework diagram */}
          <div className="relative flex-1 grid grid-cols-3 gap-6">
            {/* Column 1: Features */}
            <div className="flex flex-col">
              <div className="bg-violet-900/70 backdrop-blur-sm rounded-lg p-4 mb-4 border border-violet-700/50">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <div className="bg-violet-700/50 p-1 rounded-full">
                    <Layers className="h-5 w-5 text-violet-300" />
                  </div>
                  Features
                </h3>
                <p className="text-violet-100/90 text-sm mt-1">
                  Technical specifications and capabilities
                </p>
              </div>
              
              {/* Feature examples */}
              <div className="space-y-4 flex-1 overflow-auto pr-2">
                <div className="bg-violet-950/80 backdrop-blur-sm rounded-lg p-4 border border-violet-700/30 group hover:border-violet-500/60 transition-all">
                  <h4 className="font-medium text-white">256-bit Encryption</h4>
                  <p className="text-sm text-violet-200/80 mt-1">
                    Industry-standard secure encryption protocol
                  </p>
                </div>
                
                <div className="bg-violet-950/80 backdrop-blur-sm rounded-lg p-4 border border-violet-700/30 group hover:border-violet-500/60 transition-all">
                  <h4 className="font-medium text-white">Automated Workflow Engine</h4>
                  <p className="text-sm text-violet-200/80 mt-1">
                    Configurable system for process automation
                  </p>
                </div>
                
                <div className="bg-violet-950/80 backdrop-blur-sm rounded-lg p-4 border border-violet-700/30 group hover:border-violet-500/60 transition-all">
                  <h4 className="font-medium text-white">Real-time Analytics Dashboard</h4>
                  <p className="text-sm text-violet-200/80 mt-1">
                    Visual presentation of data with minimal latency
                  </p>
                </div>
                
                <div className="bg-violet-950/80 backdrop-blur-sm rounded-lg p-4 border border-violet-700/30 group hover:border-violet-500/60 transition-all">
                  <h4 className="font-medium text-white">Multi-tenant Architecture</h4>
                  <p className="text-sm text-violet-200/80 mt-1">
                    Shared infrastructure with logical separation
                  </p>
                </div>
              </div>
            </div>
            
            {/* Column 2: Benefits */}
            <div className="flex flex-col">
              <div className="bg-fuchsia-900/70 backdrop-blur-sm rounded-lg p-4 mb-4 border border-fuchsia-700/50">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <div className="bg-fuchsia-700/50 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-fuchsia-300" />
                  </div>
                  Benefits
                </h3>
                <p className="text-fuchsia-100/90 text-sm mt-1">
                  How features improve the customer's situation
                </p>
              </div>
              
              {/* Benefit examples */}
              <div className="space-y-4 flex-1 overflow-auto pr-2">
                <div className="bg-fuchsia-950/80 backdrop-blur-sm rounded-lg p-4 border border-fuchsia-700/30 group hover:border-fuchsia-500/60 transition-all">
                  <h4 className="font-medium text-white">Secure Data Protection</h4>
                  <p className="text-sm text-fuchsia-200/80 mt-1">
                    Protect sensitive information from unauthorized access and breaches
                  </p>
                </div>
                
                <div className="bg-fuchsia-950/80 backdrop-blur-sm rounded-lg p-4 border border-fuchsia-700/30 group hover:border-fuchsia-500/60 transition-all">
                  <h4 className="font-medium text-white">Reduced Manual Tasks</h4>
                  <p className="text-sm text-fuchsia-200/80 mt-1">
                    Less time spent on repetitive work, fewer human errors
                  </p>
                </div>
                
                <div className="bg-fuchsia-950/80 backdrop-blur-sm rounded-lg p-4 border border-fuchsia-700/30 group hover:border-fuchsia-500/60 transition-all">
                  <h4 className="font-medium text-white">Improved Decision Making</h4>
                  <p className="text-sm text-fuchsia-200/80 mt-1">
                    Faster access to insights for better business decisions
                  </p>
                </div>
                
                <div className="bg-fuchsia-950/80 backdrop-blur-sm rounded-lg p-4 border border-fuchsia-700/30 group hover:border-fuchsia-500/60 transition-all">
                  <h4 className="font-medium text-white">Simplified Administration</h4>
                  <p className="text-sm text-fuchsia-200/80 mt-1">
                    Manage multiple clients efficiently from a single interface
                  </p>
                </div>
              </div>
            </div>
            
            {/* Column 3: Business Value */}
            <div className="flex flex-col">
              <div className="bg-pink-900/70 backdrop-blur-sm rounded-lg p-4 mb-4 border border-pink-700/50">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <div className="bg-pink-700/50 p-1 rounded-full">
                    <BarChart4 className="h-5 w-5 text-pink-300" />
                  </div>
                  Business Value
                </h3>
                <p className="text-pink-100/90 text-sm mt-1">
                  Measurable impact on business outcomes
                </p>
              </div>
              
              {/* Value examples */}
              <div className="space-y-4 flex-1 overflow-auto pr-2">
                <div className="bg-pink-950/80 backdrop-blur-sm rounded-lg p-4 border border-pink-700/30 group hover:border-pink-500/60 transition-all">
                  <h4 className="font-medium text-white">Regulatory Compliance & Reduced Risk</h4>
                  <p className="text-sm text-pink-200/80 mt-1">
                    <span className="text-pink-400">$</span> Avoid fines from non-compliance and costly data breaches
                  </p>
                </div>
                
                <div className="bg-pink-950/80 backdrop-blur-sm rounded-lg p-4 border border-pink-700/30 group hover:border-pink-500/60 transition-all">
                  <h4 className="font-medium text-white">Staff Productivity & Cost Savings</h4>
                  <p className="text-sm text-pink-200/80 mt-1">
                    <span className="text-pink-400">$</span> 20-30% reduction in operational costs and faster processing
                  </p>
                </div>
                
                <div className="bg-pink-950/80 backdrop-blur-sm rounded-lg p-4 border border-pink-700/30 group hover:border-pink-500/60 transition-all">
                  <h4 className="font-medium text-white">Revenue Growth & Competitive Edge</h4>
                  <p className="text-sm text-pink-200/80 mt-1">
                    <span className="text-pink-400">$</span> 15% increase in response to market opportunities
                  </p>
                </div>
                
                <div className="bg-pink-950/80 backdrop-blur-sm rounded-lg p-4 border border-pink-700/30 group hover:border-pink-500/60 transition-all">
                  <h4 className="font-medium text-white">Operational Scalability</h4>
                  <p className="text-sm text-pink-200/80 mt-1">
                    <span className="text-pink-400">$</span> Support 2x business growth without proportional cost increase
                  </p>
                </div>
              </div>
            </div>
            
            {/* Arrows between columns */}
            <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500/80 to-fuchsia-500/80 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/25">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500/80 to-pink-500/80 rounded-full flex items-center justify-center shadow-lg shadow-fuchsia-500/25">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          {/* Conversion Tips */}
          <div className="mt-6">
            <div className="bg-gradient-to-r from-violet-900/70 via-fuchsia-900/70 to-pink-900/70 backdrop-blur-sm rounded-lg p-4 border border-violet-600/30">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-violet-300" />
                Tips for Effective F2B Conversion
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-violet-300 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/90">
                    Use customer's industry language, not your technical jargon
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-fuchsia-300 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/90">
                    Focus benefits on their expressed priorities and challenges
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-pink-300 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/90">
                    Quantify business value with specific metrics whenever possible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default FeatureToBenefitSlide; 