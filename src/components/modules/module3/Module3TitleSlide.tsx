import React from 'react';
import Slide from '@/components/Slide';

interface Module3TitleSlideProps {
  id: string;
}

const Module3TitleSlide: React.FC<Module3TitleSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      title="Quantifying and Communicating Value"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-6">Module 3</h1>
        <h2 className="text-3xl font-semibold text-white mb-8">Quantifying and Communicating Value</h2>
        <p className="text-xl text-white/90 max-w-3xl">
          Transforming abstract benefits into compelling business cases
        </p>
      </div>
    </Slide>
  );
};

export default Module3TitleSlide; 