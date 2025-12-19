import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h4 className="text-lg font-semibold mb-2">{name}</h4>
      <p className="text-gray-600 mb-4">{price}</p>
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full transition-colors">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;