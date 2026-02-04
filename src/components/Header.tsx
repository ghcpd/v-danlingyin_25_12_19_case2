import React from 'react'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold text-xmasGreen">XMAS SHOP</span>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-gray-700">
          <a className="hover:text-xmasRed transition" href="#">Home</a>
          <a className="hover:text-xmasRed transition" href="#">Deals</a>
          <a className="hover:text-xmasRed transition" href="#">Gifts</a>
        </nav>
      </div>
    </header>
  )
}
