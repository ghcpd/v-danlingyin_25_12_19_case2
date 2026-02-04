import React from 'react'

export default function Hero() {
  return (
    <section className="text-center py-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-xmasGreen">Christmas Sale</h1>
      <p className="mt-3 text-lg text-gray-700">Up to 50% off holiday gifts</p>
      <div className="mt-6">
        <a
          href="#products"
          className="btn-primary inline-block bg-xmasRed text-white px-6 py-3 rounded shadow-md font-semibold"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
