import React from 'react';
import Slide from '@/components/Slide';
import { ArrowUpCircle, Clock, DollarSign, HeartHandshake } from 'lucide-react';

interface WhyValueBasedSellingMattersSlideProps {
  id: string;
}

const WhyValueBasedSellingMattersSlide: React.FC<WhyValueBasedSellingMattersSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Why Value-Based Selling Matters"
      subtitle="Benefits for both sellers and customers"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553484771-0a615f264d58?q=80&w=1740&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      <div className="relative z-10 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats Column */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">The Numbers</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-900/50 p-3 rounded-full">
                <ArrowUpCircle className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Higher Win Rates</h4>
                <p className="text-sm text-white/80">Organizations see 5-10% higher win rates with value-based selling</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-blue-900/50 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Larger Deal Sizes</h4>
                <p className="text-sm text-white/80">5-15% larger deal sizes according to Gartner research</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-amber-900/50 p-3 rounded-full">
                <Clock className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Shorter Sales Cycles</h4>
                <p className="text-sm text-white/80">Reduced time to close when value is clearly articulated</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits for Sellers */}
        <div className="bg-blue-900/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-blue-500/30">
          <h3 className="text-xl font-semibold text-blue-200 mb-4">For Sellers</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="bg-blue-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Reduces price sensitivity</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-blue-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Creates stronger competitive differentiation</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-blue-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Establishes trusted advisor status</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-blue-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Improves forecasting accuracy</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-blue-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Shortens complex sales cycles</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-blue-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Increases average deal size</span>
            </li>
          </ul>
        </div>
        
        {/* Benefits for Customers */}
        <div className="bg-purple-900/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-purple-500/30">
          <h3 className="text-xl font-semibold text-purple-200 mb-4">For Customers</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="bg-purple-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Solutions tied to meaningful business impact</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-purple-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Greater confidence in purchasing decisions</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-purple-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <span className="text-white/90">More likely to become long-term partners</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-purple-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Better alignment with business objectives</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-purple-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Clearer understanding of solution value</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-purple-700/50 p-1 rounded-full mt-1">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <span className="text-white/90">Faster time to value realization</span>
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
};

export default WhyValueBasedSellingMattersSlide; 