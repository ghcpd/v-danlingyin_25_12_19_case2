import Header from './components/Header'
import Hero from './components/Hero'
import ChristmasTree from './components/ChristmasTree'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ChristmasTree />
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default App
