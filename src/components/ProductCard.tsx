import React from 'react'

type Props = {
  name: string
  price: string
}

export default function ProductCard({ name, price }: Props) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center bg-white shadow-sm">
      <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center mb-4">
        <div className="text-gray-400">Image</div>
      </div>
      <div className="text-center flex-1">
        <div className="font-medium text-gray-800">{name}</div>
        <div className="text-sm text-gray-500 mt-1">{price}</div>
      </div>
      <button
        className="mt-4 w-full bg-xmasGreen text-white py-2 rounded hover:bg-green-700 transition"
        aria-label={`Add ${name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  )
}
