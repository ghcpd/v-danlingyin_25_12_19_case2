import React from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

const products = [
  { id: 1, name: 'Cozy Scarf', price: '$24.00' },
  { id: 2, name: 'Holiday Mug', price: '$12.50' },
  { id: 3, name: 'Festive Candle', price: '$18.00' },
  { id: 4, name: 'Gift Wrap Set', price: '$9.99' }
]

const Home: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} name={p.name} price={p.price} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
