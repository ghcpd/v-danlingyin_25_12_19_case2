interface NavLinkProps {
  href: string
  text: string
}

const Header: React.FC = () => {
  const navLinks: NavLinkProps[] = [
    { href: '#', text: 'Home' },
    { href: '#', text: 'Deals' },
    { href: '#', text: 'Gifts' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-christmas-red">XMAS SHOP</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-gray-700 hover:text-christmas-red transition-colors font-semibold"
              >
                {link.text}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-christmas-red">
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
