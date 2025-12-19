const ChristmasTree: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-christmas-green mb-12">
          Festive Decorations
        </h2>
        <div className="flex justify-center items-end min-h-96">
          {/* Tree body */}
          <div className="relative">
            {/* Tree top */}
            <div className="mx-auto mb-2">
              <div className="w-16 h-16 bg-christmas-green transform rotate-45 mx-auto mb-2"></div>
            </div>

            {/* Tree sections */}
            {[0, 1, 2].map((index) => (
              <div key={index} className="relative mb-2">
                <div
                  className={`mx-auto bg-christmas-green transform rotate-45 transition-transform ${
                    index === 0
                      ? 'w-24 h-24 mb-4'
                      : index === 1
                      ? 'w-32 h-32 mb-4'
                      : 'w-40 h-40'
                  }`}
                >
                  {/* Blinking lights */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-christmas-red rounded-full animate-blink"></div>
                  <div
                    className="absolute top-6 right-4 w-3 h-3 bg-christmas-gold rounded-full animate-blink"
                    style={{ animationDelay: '0.5s' }}
                  ></div>
                  <div
                    className="absolute bottom-4 left-1/3 w-3 h-3 bg-white rounded-full animate-blink"
                    style={{ animationDelay: '1s' }}
                  ></div>
                  <div
                    className="absolute bottom-2 right-1/4 w-3 h-3 bg-christmas-red rounded-full animate-blink"
                    style={{ animationDelay: '0.3s' }}
                  ></div>
                </div>
              </div>
            ))}

            {/* Tree trunk */}
            <div className="w-8 h-16 bg-amber-800 mx-auto mt-4 shadow-lg"></div>

            {/* Star on top */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-glow">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="text-christmas-gold"
              >
                <polygon
                  points="20,2 24,15 38,15 27,23 31,36 20,28 9,36 13,23 2,15 16,15"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChristmasTree
