const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-christmas-light-green to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-christmas-green mb-4 animate-pulse">
          Christmas Sale
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Up to 50% off holiday gifts
        </p>
        <button className="bg-christmas-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all hover:scale-105 shadow-lg">
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero
