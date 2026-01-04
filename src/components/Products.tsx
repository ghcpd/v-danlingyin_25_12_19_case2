interface ProductCardProps {
  id: number
  name: string
  price: string
  discount: string
}

interface ProductsProps {
  products?: ProductCardProps[]
}

const ProductCard: React.FC<{ product: ProductCardProps }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-christmas-green to-christmas-light-green flex items-center justify-center">
        <svg
          className="w-24 h-24 text-white opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.96l2.36-3.54z" />
        </svg>
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-christmas-green mb-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-christmas-red">{product.price}</span>
          <span className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-1 rounded">
            {product.discount}
          </span>
        </div>
        <button className="w-full bg-christmas-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

const Products: React.FC<ProductsProps> = ({
  products = [
    { id: 1, name: 'Holiday Sweater', price: '$24.99', discount: '50% off' },
    { id: 2, name: 'Gift Set Deluxe', price: '$34.99', discount: '40% off' },
    { id: 3, name: 'Scarf Collection', price: '$19.99', discount: '35% off' },
    { id: 4, name: 'Festive Lights', price: '$29.99', discount: '45% off' },
  ],
}) => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-christmas-green mb-12">
          Featured Gifts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
