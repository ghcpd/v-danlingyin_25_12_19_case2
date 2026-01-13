import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-500">
        <div>© 2025 Christmas Shop</div>
        <div className="hidden sm:flex gap-4">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
        </div>
      </div>
    </footer>
  )
}
