import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold text-xmasGreen">XMAS SHOP</div>
          <nav className="hidden md:flex gap-4 text-gray-700">
            <a className="hover:underline" href="#">Home</a>
            <a className="hover:underline" href="#deals">Deals</a>
            <a className="hover:underline" href="#gifts">Gifts</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded bg-xmasRed text-white text-sm hover:opacity-90 transition">Sign in</button>
        </div>
      </div>
    </header>
  )
}

export default Header
