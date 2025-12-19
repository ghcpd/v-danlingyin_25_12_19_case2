import React from 'react'
import ChristmasTree from './ChristmasTree'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 via-white to-red-50 rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Christmas Sale</h1>
        <p className="mt-3 text-lg text-gray-700">Up to 50% off holiday gifts</p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a href="#" className="btn-cta inline-block bg-xmasRed text-white px-6 py-3 rounded-lg shadow hover:bg-red-600">Shop Now</a>
          <a href="#deals" className="inline-block px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50">Browse deals</a>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <ChristmasTree />
      </div>
    </section>
  )
}

export default Hero
