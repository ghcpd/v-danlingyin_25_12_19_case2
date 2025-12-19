import React from 'react'

export default function Header(){
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-extrabold text-xgreen">XMAS SHOP</div>
          <nav className="hidden sm:flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800">Home</a>
            <a href="#products" className="hover:text-gray-800">Deals</a>
            <a href="#products" className="hover:text-gray-800">Gifts</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Sign in</button>
          <button className="text-sm bg-xgreen text-white px-3 py-2 rounded-lg shadow hover:bg-[#0a5f25] transition">Cart</button>
        </div>
      </div>
    </header>
  )
}
