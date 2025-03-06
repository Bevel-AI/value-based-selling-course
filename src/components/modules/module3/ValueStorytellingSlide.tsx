import React from 'react';
import Slide from '@/components/Slide';
import { BookOpen, MessageSquareQuote, FileText, BarChart3 } from 'lucide-react';

interface ValueStorytellingSlideProps {
  id: string;
}

const ValueStorytellingSlide: React.FC<ValueStorytellingSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Value Storytelling"
      subtitle="Making value memorable and persuasive"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)"
        }}
      />
      
      <div className="relative z-10 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-indigo-900/30 backdrop-blur-md p-6 rounded-xl border border-indigo-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-700/50 p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-200">Why Stories Work</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700/30">
                  <h4 className="font-medium text-white mb-2">The Science of Storytelling</h4>
                  <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-indigo-300">Neural coupling:</span>
                      <p className="mt-1">Stories activate brain areas that allow listeners to turn the story into their own ideas and experience</p>
                    </li>
                    <li>
                      <span className="font-medium text-indigo-300">Mirroring:</span>
                      <p className="mt-1">Listeners experience similar brain activity to the speaker, creating deeper connection</p>
                    </li>
                    <li>
                      <span className="font-medium text-indigo-300">Dopamine release:</span>
                      <p className="mt-1">Emotionally charged events in stories trigger dopamine release, making content more memorable</p>
                    </li>
                    <li>
                      <span className="font-medium text-indigo-300">Concrete vs. abstract:</span>
                      <p className="mt-1">Stories translate abstract benefits into concrete examples that feel real and relatable</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700/30">
                  <h4 className="font-medium text-white mb-2">Value Stories vs. Feature Descriptions</h4>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="bg-indigo-950/50 p-3 rounded-lg border border-indigo-800/30">
                      <h5 className="text-sm font-medium text-indigo-300 mb-1">Feature Description</h5>
                      <p className="text-xs text-white/80">
                        "Our platform offers automated workflow capabilities with customizable approval paths."
                      </p>
                    </div>
                    
                    <div className="bg-indigo-950/50 p-3 rounded-lg border border-indigo-800/30">
                      <h5 className="text-sm font-medium text-indigo-300 mb-1">Value Story</h5>
                      <p className="text-xs text-white/80">
                        "A manufacturing client reduced approval delays by 75%, allowing them to respond to customer requests in hours instead of days."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/30 backdrop-blur-md p-6 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-700/50 p-3 rounded-full">
                  <FileText className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-blue-200">Story Structure Framework</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-700/50 h-7 w-7 rounded-full flex items-center justify-center text-blue-300 font-semibold">S</div>
                    <div>
                      <h4 className="font-medium text-white">Situation</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Introduce the customer, their industry, and relevant context
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-700/50 h-7 w-7 rounded-full flex items-center justify-center text-blue-300 font-semibold">C</div>
                    <div>
                      <h4 className="font-medium text-white">Challenge</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Describe the specific business problem or pain point they faced
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-700/50 h-7 w-7 rounded-full flex items-center justify-center text-blue-300 font-semibold">A</div>
                    <div>
                      <h4 className="font-medium text-white">Approach</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Explain how your solution was implemented to address the challenge
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-900/50 p-4 rounded-lg border border-blue-700/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-700/50 h-7 w-7 rounded-full flex items-center justify-center text-blue-300 font-semibold">R</div>
                    <div>
                      <h4 className="font-medium text-white">Results</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Share specific, measurable outcomes and business impact achieved
                      </p>
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
                  <BarChart3 className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-200">Building Your Story Portfolio</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Story Types to Develop</h4>
                  <ul className="text-sm text-white/80 space-y-2 ml-4 list-disc">
                    <li>
                      <span className="font-medium text-emerald-300">Industry-specific stories:</span>
                      <p className="mt-1">Success stories relevant to your prospect's specific sector</p>
                    </li>
                    <li>
                      <span className="font-medium text-emerald-300">Challenge-specific stories:</span>
                      <p className="mt-1">Examples addressing similar pain points to those your prospect faces</p>
                    </li>
                    <li>
                      <span className="font-medium text-emerald-300">Stakeholder-specific stories:</span>
                      <p className="mt-1">Stories highlighting impacts that resonate with specific roles (CIO, CFO, end user)</p>
                    </li>
                    <li>
                      <span className="font-medium text-emerald-300">Transformation stories:</span>
                      <p className="mt-1">Examples of significant business change enabled by your solution</p>
                    </li>
                    <li>
                      <span className="font-medium text-emerald-300">Quick-win stories:</span>
                      <p className="mt-1">Cases demonstrating rapid time-to-value and early successes</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-700/30">
                  <h4 className="font-medium text-white mb-2">Gathering Story Material</h4>
                  <ul className="text-sm text-white/80 space-y-1 ml-4 list-disc">
                    <li>Interview customer success managers about recent wins</li>
                    <li>Review case studies for specific metrics and outcomes</li>
                    <li>Collect direct customer quotes about their experience</li>
                    <li>Document both expected and unexpected benefits discovered</li>
                    <li>Capture before/after comparisons with specific metrics</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-700/50 p-3 rounded-full">
                  <MessageSquareQuote className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-purple-200">Storytelling Best Practices</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300 font-bold mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-white">Match to Customer Context</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Select stories most relevant to your prospect's industry, size, and challenges
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300 font-bold mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-white">Be Specific & Concrete</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Include real metrics, timelines, and details that make the story credible
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300 font-bold mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-white">Include Human Elements</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Highlight both business and personal impact on stakeholders
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300 font-bold mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-white">Keep It Brief</h4>
                      <p className="text-sm text-white/80 mt-1">
                        Aim for 90 seconds or less to maintain interest and focus
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/50 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300 font-bold mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-white">Bridge to Prospect's Situation</h4>
                      <p className="text-sm text-white/80 mt-1">
                        End with a question that connects the story to their challenges
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">Key Insight</h3>
          <p className="text-white/90">
            Stories communicate value more memorably than facts and figures alone. An authentic, detailed story about similar customer success is often more persuasive than theoretical benefits or generic claims about your solution's capabilities. When customers can see themselves in your story, they're better able to envision the value your solution could create for their organization.
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default ValueStorytellingSlide; 