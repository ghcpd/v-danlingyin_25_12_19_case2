import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Tree from './components/Tree'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

const products = [
  { id: 1, name: 'Cozy Sweater', price: '$49' },
  { id: 2, name: 'Gingerbread Candle', price: '$19' },
  { id: 3, name: 'Wintry Scarf', price: '$29' },
  { id: 4, name: 'Holiday Mug', price: '$12' }
]

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-10">
        <Hero />

        <section className="my-12 flex flex-col items-center">
          <div className="tree-container">
            <Tree />
          </div>
          <p className="mt-6 text-center text-gray-700 max-w-xl">
            Enjoy festive savings across our curated holiday picks — bright lights, warm gifts,
            and joyful deals for everyone on your list.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Featured Gifts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} name={p.name} price={p.price} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
