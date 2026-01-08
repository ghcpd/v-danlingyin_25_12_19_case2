import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChristmasTree from './components/ChristmasTree';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ChristmasTree />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;