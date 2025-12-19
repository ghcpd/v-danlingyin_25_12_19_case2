import React from 'react'
import Header from './components/Header'
import Tree from './components/Tree'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

const products = [
  { id: 1, name: 'Cozy Knit Scarf', price: '$24.00' },
  { id: 2, name: 'Holiday Mug Set', price: '$18.50' },
  { id: 3, name: 'Scented Candle', price: '$12.99' },
  { id: 4, name: 'Mini String Lights', price: '$9.99' },
]

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-amber-50 to-white">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-xgreen">Christmas Sale</h1>
            <p className="mt-4 text-lg text-gray-600">Up to <span className="text-xred font-semibold">50% off</span> holiday gifts</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="inline-block bg-xred hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition transform hover:-translate-y-0.5">Shop Now</a>
              <button className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition">Learn more</button>
            </div>

            <div className="mt-10 text-sm text-gray-500">Limited time only. While stocks last. No backend required — demo store.</div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:order-last order-first">
            <div className="bg-white rounded-2xl p-6 product-placeholder">
              <Tree />
            </div>
          </div>
        </section>

        <section id="products" className="mt-14">
          <h2 className="text-2xl font-bold text-gray-800">Featured Gifts</h2>
          <p className="text-sm text-gray-500 mt-2">Handpicked holiday favorites — perfect for gifting.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} name={p.name} price={p.price} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
