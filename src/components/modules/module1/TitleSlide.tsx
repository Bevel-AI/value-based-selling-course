import React from 'react';
import Slide from '@/components/Slide';

interface TitleSlideProps {
  id: string;
}

const TitleSlide: React.FC<TitleSlideProps> = ({ id }) => {
  return (
    <Slide 
      id={id} 
      variant="center"
      className="relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold pb-2 mb-4 text-white">
          Introduction to Value-Based Selling
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-6 max-w-3xl mx-auto">
          Selling outcomes, not features
        </p>
        
        <div className="mt-8 bg-white/10 backdrop-blur-sm inline-block px-6 py-3 rounded-lg">
          <p className="text-white font-medium">Value-Based Selling Course</p>
        </div>
      </div>
    </Slide>
  );
};

export default TitleSlide; 