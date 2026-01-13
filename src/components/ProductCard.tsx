import React from 'react'

type Props = {
  name: string
  price: string
}

export default function ProductCard({ name, price }: Props){
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col">
      <div className="w-full h-40 mb-4 flex items-center justify-center product-placeholder">
        <div className="w-28 h-20 bg-gradient-to-tr from-red-50 to-green-50 rounded-md flex items-center justify-center text-xs text-gray-400">Image</div>
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <div className="mt-2 text-sm text-xgreen font-semibold">{price}</div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
        <button className="flex-1 bg-xgreen text-white py-2 rounded-lg text-sm font-medium hover:bg-[#0a5f25] transition">Add to Cart</button>
        <button className="text-sm px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Details</button>
      </div>
    </div>
  )
}
