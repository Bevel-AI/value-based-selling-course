import React from 'react';
import Slide from '@/components/Slide';
import { Globe, ShieldCheck, Heart, Lightbulb } from 'lucide-react';

interface BeyondFinancialValueSlideProps {
  id: string;
}

const BeyondFinancialValueSlide: React.FC<BeyondFinancialValueSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Beyond Financial Value"
      subtitle="Capturing intangible benefits that drive buying decisions"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.2)"
        }}
      />
      
      <div className="relative z-10 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-900/30 backdrop-blur-md p-6 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-700/50 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-200">Strategic Value</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Long-Term Objectives</h4>
                  <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-blue-300">Market positioning:</span>
                      <p className="mt-1">Strengthening competitive advantage in key markets</p>
                    </li>
                    <li>
                      <span className="font-medium text-blue-300">Innovation enablement:</span>
                      <p className="mt-1">Creating foundation for future product or service development</p>
                    </li>
                    <li>
                      <span className="font-medium text-blue-300">Strategic alignments:</span>
                      <p className="mt-1">Supporting broader organizational initiatives and roadmaps</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Competitive Advantage</h4>
                  <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-blue-300">First-mover benefits:</span>
                      <p className="mt-1">Advantage gained by early adoption of innovative solutions</p>
                    </li>
                    <li>
                      <span className="font-medium text-blue-300">Differentiation:</span>
                      <p className="mt-1">Unique capabilities that competitors cannot easily replicate</p>
                    </li>
                    <li>
                      <span className="font-medium text-blue-300">Market perception:</span>
                      <p className="mt-1">Enhanced brand image as industry leader or innovator</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-900/30 backdrop-blur-md p-6 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-700/50 p-3 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-200">Operational Value</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Business Agility</h4>
                  <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-emerald-300">Adaptability:</span>
                      <p className="mt-1">Increased ability to respond to market changes</p>
                    </li>
                    <li>
                      <span className="font-medium text-emerald-300">Scalability:</span>
                      <p className="mt-1">Capability to grow without proportional cost increases</p>
                    </li>
                    <li>
                      <span className="font-medium text-emerald-300">Resource flexibility:</span>
                      <p className="mt-1">Improved allocation of resources based on business needs</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Enhanced Decision-Making</h4>
                  <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-emerald-300">Data-driven insights:</span>
                      <p className="mt-1">Better information for strategic and tactical decisions</p>
                    </li>
                    <li>
                      <span className="font-medium text-emerald-300">Process optimization:</span>
                      <p className="mt-1">Streamlined workflows that improve operational efficiency</p>
                    </li>
                    <li>
                      <span className="font-medium text-emerald-300">Collaboration:</span>
                      <p className="mt-1">Improved knowledge sharing across teams and departments</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-700/50 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-purple-200">Personal Value</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-2">Individual Benefits</h4>
                  <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-purple-300">Reduced stress:</span>
                      <p className="mt-1">Lower anxiety through simplified processes and reduced friction</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-300">Professional growth:</span>
                      <p className="mt-1">Opportunities to develop new skills and capabilities</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-300">Reputation enhancement:</span>
                      <p className="mt-1">Personal recognition for championing successful initiatives</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-2">Workplace Satisfaction</h4>
                  <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-purple-300">Meaningful work:</span>
                      <p className="mt-1">Focus on value-added activities rather than routine tasks</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-300">Work-life balance:</span>
                      <p className="mt-1">Less overtime and emergency work through improved systems</p>
                    </li>
                    <li>
                      <span className="font-medium text-purple-300">Team cohesion:</span>
                      <p className="mt-1">Stronger relationships through better collaboration tools</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-rose-900/30 backdrop-blur-md p-6 rounded-xl border border-rose-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-rose-700/50 p-3 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-rose-300" />
                </div>
                <h3 className="text-xl font-semibold text-rose-200">Risk Reduction Value</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-rose-900/50 p-4 rounded-lg border border-rose-700/30">
                  <h4 className="font-medium text-white mb-2">Risk Mitigation</h4>
                  <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-rose-300">Compliance improvements:</span>
                      <p className="mt-1">Reduced regulatory risks and potential penalties</p>
                    </li>
                    <li>
                      <span className="font-medium text-rose-300">Security enhancements:</span>
                      <p className="mt-1">Protection against data breaches and cyber threats</p>
                    </li>
                    <li>
                      <span className="font-medium text-rose-300">Business continuity:</span>
                      <p className="mt-1">Improved ability to maintain operations during disruptions</p>
                    </li>
                    <li>
                      <span className="font-medium text-rose-300">Quality assurance:</span>
                      <p className="mt-1">Fewer defects and higher consistency in outputs</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-amber-700/50 p-3 rounded-full">
              <Lightbulb className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="text-xl font-semibold text-white">Making Intangibles Tangible</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="font-medium text-amber-200 mb-1">Use Specific Examples</h4>
              <p className="text-sm text-white/80">
                Provide concrete examples of how other customers experienced these intangible benefits
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="font-medium text-amber-200 mb-1">Customer Testimonials</h4>
              <p className="text-sm text-white/80">
                Share direct quotes from stakeholders who experienced these value dimensions
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="font-medium text-amber-200 mb-1">Indirect Metrics</h4>
              <p className="text-sm text-white/80">
                Use proxies like employee retention rates to quantify previously intangible benefits
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default BeyondFinancialValueSlide; 