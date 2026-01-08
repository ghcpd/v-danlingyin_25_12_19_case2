import React from 'react';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
  const products = [
    { name: 'Holiday Sweater', price: '$29.99', image: 'https://via.placeholder.com/300x200?text=Holiday+Sweater' },
    { name: 'Christmas Ornament', price: '$9.99', image: 'https://via.placeholder.com/300x200?text=Ornament' },
    { name: 'Gift Basket', price: '$49.99', image: 'https://via.placeholder.com/300x200?text=Gift+Basket' },
    { name: 'Festive Mug', price: '$14.99', image: 'https://via.placeholder.com/300x200?text=Festive+Mug' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-green-800">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;