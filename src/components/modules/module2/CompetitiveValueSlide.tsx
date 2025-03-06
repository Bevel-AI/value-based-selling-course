import React from 'react';
import Slide from '@/components/Slide';
import { Fingerprint, Shield, Zap, Award, Crosshair } from 'lucide-react';

interface CompetitiveValueSlideProps {
  id: string;
}

const CompetitiveValueSlide: React.FC<CompetitiveValueSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Competitive Value Differentiation"
      subtitle="Positioning your unique value against alternatives"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1506&auto=format&fit=crop')",
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
                  <Fingerprint className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-200">Value Differentiation Framework</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Three Levels of Differentiation</h4>
                  
                  <div className="space-y-3 mt-3">
                    <div className="bg-blue-950/50 p-3 rounded-lg border border-blue-800/30">
                      <h5 className="text-sm font-medium text-blue-300 mb-1">1. Solution Differentiation</h5>
                      <p className="text-xs text-white/80">
                        Unique features, capabilities, and technical advantages that competitors cannot match
                      </p>
                    </div>
                    
                    <div className="bg-blue-950/50 p-3 rounded-lg border border-blue-800/30">
                      <h5 className="text-sm font-medium text-blue-300 mb-1">2. Outcome Differentiation</h5>
                      <p className="text-xs text-white/80">
                        Superior results, ROI, or business impact compared to alternative approaches
                      </p>
                    </div>
                    
                    <div className="bg-blue-950/50 p-3 rounded-lg border border-blue-800/30">
                      <h5 className="text-sm font-medium text-blue-300 mb-1">3. Experience Differentiation</h5>
                      <p className="text-xs text-white/80">
                        Better customer experience, implementation process, support, or relationship
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <h4 className="font-medium text-white mb-2">Value Differentiation Matrix</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-white/90">
                      <thead>
                        <tr>
                          <th className="text-left p-2 border-b border-blue-700/50"></th>
                          <th className="text-center p-2 border-b border-blue-700/50">Your Solution</th>
                          <th className="text-center p-2 border-b border-blue-700/50">Competitor A</th>
                          <th className="text-center p-2 border-b border-blue-700/50">Competitor B</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border-b border-blue-700/30 font-medium text-blue-300">Key Value Driver 1</td>
                          <td className="p-2 border-b border-blue-700/30 text-center">★★★★★</td>
                          <td className="p-2 border-b border-blue-700/30 text-center">★★★☆☆</td>
                          <td className="p-2 border-b border-blue-700/30 text-center">★★☆☆☆</td>
                        </tr>
                        <tr>
                          <td className="p-2 border-b border-blue-700/30 font-medium text-blue-300">Key Value Driver 2</td>
                          <td className="p-2 border-b border-blue-700/30 text-center">★★★★☆</td>
                          <td className="p-2 border-b border-blue-700/30 text-center">★★★★☆</td>
                          <td className="p-2 border-b border-blue-700/30 text-center">★★★☆☆</td>
                        </tr>
                        <tr>
                          <td className="p-2 border-b border-blue-700/30 font-medium text-blue-300">Key Value Driver 3</td>
                          <td className="p-2 border-b border-blue-700/30 text-center">★★★★★</td>
                          <td className="p-2 border-b border-blue-700/30 text-center">★★☆☆☆</td>
                          <td className="p-2 border-b border-blue-700/30 text-center">★★★★☆</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-700/50 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-purple-200">Handling Competitive Objections</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="font-medium text-white mb-2">The FEBA Method</h4>
                  
                  <div className="space-y-3 mt-3">
                    <div className="flex items-start gap-2">
                      <div className="bg-purple-700/50 h-6 w-6 rounded-full flex items-center justify-center text-purple-300 font-semibold text-xs mt-0.5">F</div>
                      <div>
                        <h5 className="text-sm font-medium text-purple-300">Feel</h5>
                        <p className="text-xs text-white/80">Acknowledge the concern: "I understand why that's important to you..."</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="bg-purple-700/50 h-6 w-6 rounded-full flex items-center justify-center text-purple-300 font-semibold text-xs mt-0.5">E</div>
                      <div>
                        <h5 className="text-sm font-medium text-purple-300">Explore</h5>
                        <p className="text-xs text-white/80">Ask questions to understand the underlying need: "What specific aspect is most critical?"</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="bg-purple-700/50 h-6 w-6 rounded-full flex items-center justify-center text-purple-300 font-semibold text-xs mt-0.5">B</div>
                      <div>
                        <h5 className="text-sm font-medium text-purple-300">Bridge</h5>
                        <p className="text-xs text-white/80">Connect to your value: "While we approach this differently, our solution delivers the outcome by..."</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="bg-purple-700/50 h-6 w-6 rounded-full flex items-center justify-center text-purple-300 font-semibold text-xs mt-0.5">A</div>
                      <div>
                        <h5 className="text-sm font-medium text-purple-300">Advantage</h5>
                        <p className="text-xs text-white/80">Highlight your unique value: "This approach actually provides additional benefits like..."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-900/30 backdrop-blur-md p-6 rounded-xl border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-700/50 p-3 rounded-full">
                  <Crosshair className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-200">Competitive Positioning Strategies</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Direct Comparison</h4>
                  <p className="text-sm text-white/80 mb-2">
                    When to use: When you have clear, demonstrable advantages in areas the customer values highly.
                  </p>
                  <div className="bg-emerald-950/50 p-3 rounded-lg border border-emerald-800/30">
                    <p className="text-xs text-white/80 italic">
                      "Unlike Competitor X's solution that requires 6 weeks to implement, our platform can be fully operational in just 2 weeks, allowing you to realize value 67% faster."
                    </p>
                  </div>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Reframing the Conversation</h4>
                  <p className="text-sm text-white/80 mb-2">
                    When to use: When competitors are strong in certain areas, but you can shift focus to different value drivers.
                  </p>
                  <div className="bg-emerald-950/50 p-3 rounded-lg border border-emerald-800/30">
                    <p className="text-xs text-white/80 italic">
                      "While many solutions focus only on initial cost savings, our approach delivers long-term strategic value by also addressing your expansion into new markets."
                    </p>
                  </div>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Elevating the Conversation</h4>
                  <p className="text-sm text-white/80 mb-2">
                    When to use: When you want to move beyond feature comparisons to higher-level business outcomes.
                  </p>
                  <div className="bg-emerald-950/50 p-3 rounded-lg border border-emerald-800/30">
                    <p className="text-xs text-white/80 italic">
                      "Rather than comparing individual features, let's discuss how each solution impacts your three strategic priorities: market expansion, operational efficiency, and customer experience."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-900/30 backdrop-blur-md p-6 rounded-xl border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-700/50 p-3 rounded-full">
                  <Zap className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-amber-200">Value Differentiation Best Practices</h3>
              </div>
              
              <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-700/30">
                <ul className="text-sm text-white/80 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Focus on customer priorities:</span> Differentiate in areas that matter most to this specific customer</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Use proof points:</span> Support differentiation claims with evidence (case studies, testimonials, data)</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Quantify the difference:</span> Express your advantage in measurable terms whenever possible</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Stay professional:</span> Focus on your strengths rather than attacking competitors</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-300 font-bold mt-0.5">✓</span>
                    <p><span className="font-medium text-amber-300">Anticipate objections:</span> Prepare for competitive comparisons the customer might raise</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-rose-900/30 backdrop-blur-md p-6 rounded-xl border border-rose-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-rose-700/50 p-3 rounded-full">
                  <Award className="w-6 h-6 text-rose-300" />
                </div>
                <h3 className="text-xl font-semibold text-rose-200">Competitive Intelligence Gathering</h3>
              </div>
              
              <div className="bg-rose-900/50 p-4 rounded-lg border border-rose-700/30">
                <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                  <li>Review competitor websites, case studies, and marketing materials</li>
                  <li>Analyze third-party review sites and industry analyst reports</li>
                  <li>Gather feedback from customers who evaluated competitors</li>
                  <li>Monitor social media and online communities for sentiment</li>
                  <li>Track competitive wins/losses and document reasons</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">Key Insight</h3>
          <p className="text-white/90">
            Effective competitive differentiation isn't about claiming superiority in every area, but rather about aligning your unique strengths with the customer's highest priorities. The most successful value-based sellers don't just react to competitive comparisons—they proactively shape the evaluation criteria to highlight their distinctive value.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default CompetitiveValueSlide; 