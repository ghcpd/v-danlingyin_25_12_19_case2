import React from 'react';

const ChristmasTree: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-green-800">Festive Christmas Tree</h3>
        <div className="flex justify-center">
          <div className="relative">
            {/* Tree trunk */}
            <div className="w-4 h-16 bg-amber-800 mx-auto"></div>
            {/* Tree layers */}
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-green-600 mx-auto relative top-0"></div>
            <div className="w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-green-600 mx-auto relative -top-4"></div>
            <div className="w-0 h-0 border-l-16 border-r-16 border-b-24 border-l-transparent border-r-transparent border-b-green-600 mx-auto relative -top-8"></div>
            {/* Lights */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute top-6 left-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute top-10 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute top-14 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-18 right-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChristmasTree;