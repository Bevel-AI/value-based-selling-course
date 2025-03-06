import React from 'react';
import Slide from '@/components/Slide';
import { Book, Users, Lightbulb, GitPullRequest, Target, MessageCircle } from 'lucide-react';

interface Module5TitleSlideProps {
  id: string;
}

const Module5TitleSlide: React.FC<Module5TitleSlideProps> = ({ id }) => {
  return (
    <Slide
      id={id}
      variant="default"
      className="relative overflow-hidden"
    >
      {/* Background with mesh pattern overlay for depth */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.2) saturate(1.2)"
          }}
        />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-indigo-950/50 via-purple-950/50 to-fuchsia-950/70"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8">
        {/* Top content */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1.5 rounded-full mb-2">
            <div className="flex items-center gap-2">
              <Book className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm">Module 5</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
            Practical Application
          </h1>
          
          <p className="text-xl text-purple-100/90 max-w-2xl mx-auto">
            Applying value-based selling principles in real-world sales scenarios and conversations
          </p>
        </div>
        
        {/* 3D Card Carousel */}
        <div className="my-8 flex justify-center">
          <div className="grid grid-cols-3 gap-8 max-w-6xl w-full perspective-1000">
            {/* Card 1 - Sales Conversation Model */}
            <div className="transform-style-3d hover:rotate-y-10 hover:scale-105 transition-transform duration-500 group">
              <div className="relative h-80 w-full rounded-2xl shadow-xl border border-indigo-700/30 bg-gradient-to-br from-indigo-900/90 to-indigo-950/90 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-indigo-700/50 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-indigo-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Sales Conversation Model</h3>
                  </div>
                  
                  <p className="text-indigo-100/80 text-sm mb-4">
                    A structured approach to guide value-centered customer conversations from discovery to decision.
                  </p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="p-1 bg-indigo-800/60 rounded-full mt-0.5">
                          <Lightbulb className="w-3 h-3 text-indigo-300" />
                        </div>
                        <span className="text-sm text-white/90">Align each conversation stage with value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 bg-indigo-800/60 rounded-full mt-0.5">
                          <Lightbulb className="w-3 h-3 text-indigo-300" />
                        </div>
                        <span className="text-sm text-white/90">Practice strategic questioning techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 bg-indigo-800/60 rounded-full mt-0.5">
                          <Lightbulb className="w-3 h-3 text-indigo-300" />
                        </div>
                        <span className="text-sm text-white/90">Address objections through value lens</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl -mr-10 -mb-10"></div>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Feature to Benefit Conversion */}
            <div className="transform-style-3d hover:rotate-y-10 hover:scale-105 transition-transform duration-500 group">
              <div className="relative h-80 w-full rounded-2xl shadow-xl border border-violet-700/30 bg-gradient-to-br from-violet-900/90 to-violet-950/90 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-violet-700/50 rounded-lg">
                      <GitPullRequest className="w-6 h-6 text-violet-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Feature to Benefit Conversion</h3>
                  </div>
                  
                  <p className="text-violet-100/80 text-sm mb-4">
                    Transform technical capabilities into compelling business value statements customers care about.
                  </p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="p-1 bg-violet-800/60 rounded-full mt-0.5">
                          <Lightbulb className="w-3 h-3 text-violet-300" />
                        </div>
                        <span className="text-sm text-white/90">Connect features to business outcomes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 bg-violet-800/60 rounded-full mt-0.5">
                          <Lightbulb className="w-3 h-3 text-violet-300" />
                        </div>
                        <span className="text-sm text-white/90">Translate technical specs to value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 bg-violet-800/60 rounded-full mt-0.5">
                          <Lightbulb className="w-3 h-3 text-violet-300" />
                        </div>
                        <span className="text-sm text-white/90">Quantify benefits when possible</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl -mr-10 -mb-10"></div>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Competitive Differentiation */}
            <div className="transform-style-3d hover:rotate-y-10 hover:scale-105 transition-transform duration-500 group">
              <div className="relative h-80 w-full rounded-2xl shadow-xl border border-fuchsia-700/30 bg-gradient-to-br from-fuchsia-900/90 to-fuchsia-950/90 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-fuchsia-700/50 rounded-lg">
                      <Target className="w-6 h-6 text-fuchsia-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Competitive Differentiation</h3>
                  </div>
                  
                  <p className="text-fuchsia-100/80 text-sm mb-4">
                    Position your solution's unique value against competitors in ways that resonate with customer priorities.
                  </p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="p-1 bg-fuchsia-800/60 rounded-full mt-0.5">
                          <Lightbulb className="w-3 h-3 text-fuchsia-300" />
                        </div>
                        <span className="text-sm text-white/90">Focus on value, not feature comparison</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 bg-fuchsia-800/60 rounded-full mt-0.5">
                          <Lightbulb className="w-3 h-3 text-fuchsia-300" />
                        </div>
                        <span className="text-sm text-white/90">Highlight unique business impact</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 bg-fuchsia-800/60 rounded-full mt-0.5">
                          <Lightbulb className="w-3 h-3 text-fuchsia-300" />
                        </div>
                        <span className="text-sm text-white/90">Align differentiation with buying criteria</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-fuchsia-600/20 rounded-full blur-3xl -mr-10 -mb-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom text */}
        <div className="text-center">
          <p className="text-lg text-white/80 font-light max-w-3xl mx-auto">
            Move from theory to practice with frameworks that help you apply value-based selling in every customer interaction
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default Module5TitleSlide; 