import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">XMAS SHOP</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Deals</a></li>
            <li><a href="#" className="hover:underline">Gifts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;