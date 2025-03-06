import React from 'react';
import { Slide } from '@/components/Slide';
import { Briefcase, Wrench, BookOpen, FileCheck, ClipboardList, Info } from 'lucide-react';

interface Module6TitleSlideProps {
  id: string;
}

export const Module6TitleSlide: React.FC<Module6TitleSlideProps> = ({ id }) => {
  return (
    <Slide id={id} className="bg-black text-white">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-slate-900/90 z-10" />
      
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full p-16">
        <div className="mb-4 flex items-center justify-center">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Module 6
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-center mb-2">
          Implementation & Next Steps
        </h1>
        
        <p className="text-xl text-gray-200 text-center max-w-3xl mb-12">
          Equipping you with practical tools and strategies to implement value-based selling in your daily sales activities
        </p>
        
        {/* Toolkit Items */}
        <div className="grid grid-cols-3 gap-8 max-w-4xl w-full mt-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20 group">
            <div className="h-12 w-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Value-Based Tools</h3>
            <p className="text-gray-300">Practical resources to help you quantify and communicate value effectively</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20 group">
            <div className="h-12 w-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Key Takeaways</h3>
            <p className="text-gray-300">Essential principles for mastering the art and science of value-based selling</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20 group">
            <div className="h-12 w-12 bg-emerald-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ClipboardList className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Action Planning</h3>
            <p className="text-gray-300">Create your personal roadmap for implementing value-based selling strategies</p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center text-sm text-gray-300">
          <Info className="h-4 w-4 mr-2" />
          <span>Apply what you've learned to transform your sales conversations</span>
        </div>
      </div>
    </Slide>
  );
}; 