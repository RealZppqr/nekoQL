import { Link, useLocation } from 'react-router-dom'
import { Heart, Zap, Home, Code } from 'lucide-react'

const Header = () => {
  const location = useLocation()

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-neko-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-neko-500 to-purrple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
              🐾
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-neko-600 to-purrple-600 bg-clip-text text-transparent">
                nekoQL
              </h1>
              <p className="text-xs text-neko-600">Cute API Provider</p>
            </div>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                location.pathname === '/'
                  ? 'bg-neko-100 text-neko-700'
                  : 'text-neko-600 hover:bg-neko-50'
              }`}
            >
              <Home size={18} />
              <span className="font-medium">Home</span>
            </Link>
            
            <Link
              to="/endpoints"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                location.pathname === '/endpoints'
                  ? 'bg-neko-100 text-neko-700'
                  : 'text-neko-600 hover:bg-neko-50'
              }`}
            >
              <Code size={18} />
              <span className="font-medium">Endpoints</span>
            </Link>

            <a
              href="https://github.com/realzppqr/nekoql"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-neko-600 hover:bg-neko-50 transition-all duration-300"
            >
              <Zap size={18} />
              <span className="font-medium">GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
