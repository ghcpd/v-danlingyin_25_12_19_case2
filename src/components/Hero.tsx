import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-green-700 text-white py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Christmas Sale</h2>
        <p className="text-xl mb-8">Up to 50% off holiday gifts</p>
        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;