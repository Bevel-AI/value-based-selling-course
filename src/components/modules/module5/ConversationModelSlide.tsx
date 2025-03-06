import React from 'react';
import Slide from '@/components/Slide';
import { Users, MessageCircle, Sparkles, FlaskConical, CheckSquare, GitMerge, DollarSign, Handshake, ArrowRight, Lightbulb } from 'lucide-react';

interface ConversationModelSlideProps {
  id: string;
}

const ConversationModelSlide: React.FC<ConversationModelSlideProps> = ({ id }) => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.1)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-700/40 p-2 rounded-lg">
            <Users className="w-6 h-6 text-emerald-300" />
          </div>
          <h2 className="text-3xl font-bold text-white">Value-Based Sales Conversation Model</h2>
        </div>
        
        <p className="text-white/80 max-w-3xl">
          A practical framework for structuring conversations that maintain focus on value throughout customer interactions.
        </p>
        
        {/* Interactive Conversation Flow */}
        <div className="mt-10 h-[calc(100%-10rem)] flex items-center justify-center">
          <div className="w-full max-w-6xl relative">
            {/* Connection lines - outer frame */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
              </defs>
              
              {/* Context to Exploration */}
              <path d="M 180,110 C 190,110 200,160 220,160" 
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              
              {/* Exploration to Illumination */}
              <path d="M 390,160 C 410,160 420,110 440,110" 
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              
              {/* Illumination to Value Hypothesis */}
              <path d="M 610,110 C 630,110 640,160 660,160" 
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              
              {/* Value Hypothesis to Validation */}
              <path d="M 830,160 C 850,160 860,250 440,250" 
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              
              {/* Validation to Solution Presentation */}
              <path d="M 270,250 C 250,250 240,300 260,300" 
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              
              {/* Solution Presentation to Investment */}
              <path d="M 440,300 C 460,300 470,250 600,250" 
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              
              {/* Investment to Success Plan */}
              <path d="M 770,250 C 790,250 800,300 820,300" 
                    stroke="url(#flow-gradient)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
            </svg>
            
            {/* Conversation steps */}
            <div className="grid grid-cols-8 gap-4">
              {/* Row 1 */}
              <div className="col-span-2">
                <div className="group bg-gradient-to-br from-emerald-900/70 to-emerald-950/70 backdrop-blur-sm border border-emerald-700/40 rounded-xl p-4 h-full hover:border-emerald-500/60 transition-colors relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-emerald-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-emerald-800/80 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-emerald-300" />
                      </div>
                      <div>
                        <div className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">Step 1</div>
                        <h3 className="text-lg font-semibold text-white">Context-Setting</h3>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-100/90">
                      Establish business background and customer objectives to frame the conversation.
                    </p>
                    <div className="mt-3 bg-emerald-800/40 rounded-lg p-2">
                      <div className="text-xs text-emerald-300 font-medium mb-1">Key Questions:</div>
                      <ul className="text-xs text-white/80 space-y-1 ml-4 list-disc">
                        <li>What business initiatives are driving your interest?</li>
                        <li>What outcomes are you hoping to achieve?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                {/* Spacer for layout */}
              </div>
              
              <div className="col-span-2">
                <div className="group bg-gradient-to-br from-emerald-900/70 to-emerald-950/70 backdrop-blur-sm border border-emerald-700/40 rounded-xl p-4 h-full hover:border-emerald-500/60 transition-colors relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-emerald-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-emerald-800/80 rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-emerald-300" />
                      </div>
                      <div>
                        <div className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">Step 3</div>
                        <h3 className="text-lg font-semibold text-white">Illumination</h3>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-100/90">
                      Help customers see problems or opportunities they hadn't fully recognized.
                    </p>
                    <div className="mt-3 bg-emerald-800/40 rounded-lg p-2">
                      <div className="text-xs text-emerald-300 font-medium mb-1">Key Techniques:</div>
                      <ul className="text-xs text-white/80 space-y-1 ml-4 list-disc">
                        <li>Share relevant industry benchmarks</li>
                        <li>Highlight hidden costs and implications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                {/* Spacer for layout */}
              </div>
              
              {/* Row 2 */}
              <div className="col-span-2">
                {/* Spacer for layout */}
              </div>
              
              <div className="col-span-2">
                <div className="group bg-gradient-to-br from-teal-900/70 to-teal-950/70 backdrop-blur-sm border border-teal-700/40 rounded-xl p-4 h-full hover:border-teal-500/60 transition-colors relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-teal-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-teal-800/80 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-teal-300" />
                      </div>
                      <div>
                        <div className="text-xs text-teal-400 uppercase tracking-wider font-semibold">Step 2</div>
                        <h3 className="text-lg font-semibold text-white">Exploration</h3>
                      </div>
                    </div>
                    <p className="text-sm text-teal-100/90">
                      Ask progressive questions about current challenges, their impact, and desired outcomes.
                    </p>
                    <div className="mt-3 bg-teal-800/40 rounded-lg p-2">
                      <div className="text-xs text-teal-300 font-medium mb-1">Key Questions:</div>
                      <ul className="text-xs text-white/80 space-y-1 ml-4 list-disc">
                        <li>How is this challenge affecting your team?</li>
                        <li>What would success look like if solved?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                {/* Spacer for layout */}
              </div>
              
              <div className="col-span-2">
                <div className="group bg-gradient-to-br from-teal-900/70 to-teal-950/70 backdrop-blur-sm border border-teal-700/40 rounded-xl p-4 h-full hover:border-teal-500/60 transition-colors relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-teal-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-teal-800/80 rounded-full flex items-center justify-center">
                        <FlaskConical className="w-5 h-5 text-teal-300" />
                      </div>
                      <div>
                        <div className="text-xs text-teal-400 uppercase tracking-wider font-semibold">Step 4</div>
                        <h3 className="text-lg font-semibold text-white">Value Hypothesis</h3>
                      </div>
                    </div>
                    <p className="text-sm text-teal-100/90">
                      Propose specific ways your solution delivers meaningful outcomes based on their unique situation.
                    </p>
                    <div className="mt-3 bg-teal-800/40 rounded-lg p-2">
                      <div className="text-xs text-teal-300 font-medium mb-1">Key Components:</div>
                      <ul className="text-xs text-white/80 space-y-1 ml-4 list-disc">
                        <li>Quantified business impacts</li>
                        <li>Tailored to specific stakeholder interests</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="col-span-2">
                {/* Spacer for layout */}
              </div>
              
              <div className="col-span-2">
                <div className="group bg-gradient-to-br from-cyan-900/70 to-cyan-950/70 backdrop-blur-sm border border-cyan-700/40 rounded-xl p-4 h-full hover:border-cyan-500/60 transition-colors relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-cyan-800/80 rounded-full flex items-center justify-center">
                        <CheckSquare className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <div className="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Step 5</div>
                        <h3 className="text-lg font-semibold text-white">Validation</h3>
                      </div>
                    </div>
                    <p className="text-sm text-cyan-100/90">
                      Confirm your understanding of their priorities and the value they seek to ensure alignment.
                    </p>
                    <div className="mt-3 bg-cyan-800/40 rounded-lg p-2">
                      <div className="text-xs text-cyan-300 font-medium mb-1">Key Techniques:</div>
                      <ul className="text-xs text-white/80 space-y-1 ml-4 list-disc">
                        <li>Summarize key priorities in their words</li>
                        <li>Validate importance and urgency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                {/* Spacer for layout */}
              </div>
              
              <div className="col-span-2">
                {/* Spacer for layout */}
              </div>
              
              {/* Row 4 */}
              <div className="col-span-2">
                <div className="group bg-gradient-to-br from-cyan-900/70 to-cyan-950/70 backdrop-blur-sm border border-cyan-700/40 rounded-xl p-4 h-full hover:border-cyan-500/60 transition-colors relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-cyan-800/80 rounded-full flex items-center justify-center">
                        <GitMerge className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <div className="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Step 6</div>
                        <h3 className="text-lg font-semibold text-white">Solution Presentation</h3>
                      </div>
                    </div>
                    <p className="text-sm text-cyan-100/90">
                      Present your solution through a value lens, connecting capabilities directly to business outcomes.
                    </p>
                    <div className="mt-3 bg-cyan-800/40 rounded-lg p-2">
                      <div className="text-xs text-cyan-300 font-medium mb-1">Key Components:</div>
                      <ul className="text-xs text-white/80 space-y-1 ml-4 list-disc">
                        <li>Value-driven presentation structure</li>
                        <li>Outcome-focused capability discussions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                {/* Spacer for layout */}
              </div>
              
              <div className="col-span-2">
                <div className="group bg-gradient-to-br from-blue-900/70 to-blue-950/70 backdrop-blur-sm border border-blue-700/40 rounded-xl p-4 h-full hover:border-blue-500/60 transition-colors relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-800/80 rounded-full flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-blue-300" />
                      </div>
                      <div>
                        <div className="text-xs text-blue-400 uppercase tracking-wider font-semibold">Step 7</div>
                        <h3 className="text-lg font-semibold text-white">Investment Justification</h3>
                      </div>
                    </div>
                    <p className="text-sm text-blue-100/90">
                      Address investment with a clear value justification based on ROI and business impact.
                    </p>
                    <div className="mt-3 bg-blue-800/40 rounded-lg p-2">
                      <div className="text-xs text-blue-300 font-medium mb-1">Key Elements:</div>
                      <ul className="text-xs text-white/80 space-y-1 ml-4 list-disc">
                        <li>Customer-specific ROI calculation</li>
                        <li>Value-to-investment ratio</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                <div className="group bg-gradient-to-br from-blue-900/70 to-blue-950/70 backdrop-blur-sm border border-blue-700/40 rounded-xl p-4 h-full hover:border-blue-500/60 transition-colors relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-800/80 rounded-full flex items-center justify-center">
                        <Handshake className="w-5 h-5 text-blue-300" />
                      </div>
                      <div>
                        <div className="text-xs text-blue-400 uppercase tracking-wider font-semibold">Step 8</div>
                        <h3 className="text-lg font-semibold text-white">Mutual Success Plan</h3>
                      </div>
                    </div>
                    <p className="text-sm text-blue-100/90">
                      Close with a plan that extends beyond the purchase, ensuring ongoing value realization.
                    </p>
                    <div className="mt-3 bg-blue-800/40 rounded-lg p-2">
                      <div className="text-xs text-blue-300 font-medium mb-1">Key Components:</div>
                      <ul className="text-xs text-white/80 space-y-1 ml-4 list-disc">
                        <li>Implementation milestones</li>
                        <li>Value realization checkpoints</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key insight */}
            <div className="mt-8 mx-auto max-w-2xl text-center border border-emerald-700/30 bg-gradient-to-r from-emerald-950/80 to-teal-950/80 rounded-lg p-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Lightbulb className="w-5 h-5 text-emerald-300" />
                <h3 className="text-lg font-semibold text-white">Key Insight</h3>
              </div>
              <p className="text-sm text-white/90">
                Throughout this process, listen more than you speak, validate assumptions, and 
                continuously refine your understanding of what constitutes value for this specific customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ConversationModelSlide; 