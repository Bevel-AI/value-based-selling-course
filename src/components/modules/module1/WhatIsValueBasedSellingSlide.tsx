import React from 'react';
import Slide from '@/components/Slide';

interface WhatIsValueBasedSellingSlideProps {
  id: string;
}

const WhatIsValueBasedSellingSlide: React.FC<WhatIsValueBasedSellingSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="What is Value-Based Selling?"
      subtitle="Moving from product features to customer outcomes"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          <div className="rounded-lg bg-blue-900/50 backdrop-blur-md p-6 border border-blue-700/30 text-white">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Definition</h3>
            <p className="text-white/90">
              Value-based selling prioritizes the customer's business outcomes over your product's features or specifications.
            </p>
          </div>

          <div className="rounded-lg bg-purple-900/50 backdrop-blur-md p-6 border border-purple-700/30 text-white">
            <h3 className="text-xl font-semibold text-purple-200 mb-3">Key Question</h3>
            <p className="text-white/90">
              "What's in it for them?" Rather than leading with your solution's capabilities, you lead with the meaningful results and positive changes your customer will experience.
            </p>
          </div>

          <div className="rounded-lg bg-emerald-900/50 backdrop-blur-md p-6 border border-emerald-700/30 text-white">
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">Role Transformation</h3>
            <p className="text-white/90">
              This approach transforms you from a vendor pushing products to a trusted advisor solving business problems.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 h-full">
            <h3 className="text-xl font-semibold text-white mb-6">Key Insight</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              "Value-based selling requires understanding your customer's world deeply enough to articulate value in their terms."
            </p>
            <div className="mt-8">
              <h4 className="font-semibold text-white/80 mb-2">Components of Value-Based Selling:</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Customer-focused discovery process</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Outcome-based messaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Value quantification</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Business problem alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Long-term partnership focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default WhatIsValueBasedSellingSlide; 