import React from 'react'

type Props = {
  name: string
  price: string
}

const ProductCard: React.FC<Props> = ({ name, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col">
      <div className="bg-gradient-to-tr from-green-100 to-red-50 rounded-md h-40 flex items-center justify-center">
        <div className="text-gray-400">Image</div>
      </div>

      <div className="mt-4 flex-1">
        <div className="font-medium text-gray-800">{name}</div>
        <div className="text-sm text-gray-500 mt-1">{price}</div>
      </div>

      <div className="mt-4">
        <button className="w-full btn-cta bg-xmasGreen text-white py-2 rounded hover:bg-green-700">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
