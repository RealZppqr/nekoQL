import { Link } from 'react-router-dom'
import { Heart, Zap, Code, Star, ArrowRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const HomePage = () => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const features = [
    {
      icon: '🎲',
      title: 'Fun & Games',
      description: '8-ball, dice rolling, coin flips, and more playful endpoints'
    },
    {
      icon: '🐱',
      title: 'Animals',
      description: 'Random cat, dog, fox images and facts for your furry needs'
    },
    {
      icon: '⚡',
      title: 'Utility',
      description: 'IP lookup, UUID generation, weather, and practical tools'
    },
    {
      icon: '😂',
      title: 'Memes & Internet',
      description: 'Jokes, insults, compliments, and internet culture'
    },
    {
      icon: '✍️',
      title: 'Text & AI-ish',
      description: 'Text manipulation, encoding, and language tools'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neko-600 to-purrple-600 bg-clip-text text-transparent">
              Welcome to nekoQL
            </span>
          </h1>
          <p className="text-xl text-neko-700 mb-8 max-w-3xl mx-auto">
            A cute neko-themed public API provider with 50 endpoints. 
            No authentication required, just pure API goodness! 🐾
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/endpoints" className="neko-button flex items-center space-x-2">
              <Code size={20} />
              <span>Explore Endpoints</span>
              <ArrowRight size={20} />
            </Link>
            
            <button 
              onClick={() => copyToClipboard('curl https://api.nekoql.com/api/8ball')}
              className="neko-button-secondary flex items-center space-x-2"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              <span>{copied ? 'Copied!' : 'Copy Example'}</span>
            </button>
          </div>
        </div>

        {/* Quick API Test */}
        <div className="neko-card p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-neko-800 mb-4">Quick Test</h3>
          <div className="bg-neko-50 rounded-xl p-4 font-mono text-sm text-neko-700">
            curl https://api.nekoql.com/api/8ball?response=yaml
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-neko-800 mb-12">
          What's Included
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="neko-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neko-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-neko-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Response Formats */}
      <section className="py-16">
        <div className="neko-card p-8">
          <h2 className="text-3xl font-bold text-center text-neko-800 mb-8">
            Multiple Response Formats
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-neko-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neko-600">{}</span>
              </div>
              <h3 className="text-lg font-semibold text-neko-800 mb-2">JSON</h3>
              <p className="text-neko-600">Default format, perfect for web apps</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purrple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purrple-600">YAML</span>
              </div>
              <h3 className="text-lg font-semibold text-neko-800 mb-2">YAML</h3>
              <p className="text-neko-600">Human-readable, great for configs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-neko-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neko-600">TOML</span>
              </div>
              <h3 className="text-lg font-semibold text-neko-800 mb-2">TOML</h3>
              <p className="text-neko-600">Simple and clean format</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-neko-600 mb-4">
              Just add <code className="bg-neko-100 px-2 py-1 rounded text-neko-700">?response=yaml</code> or <code className="bg-neko-100 px-2 py-1 rounded text-neko-700">?response=toml</code> to any endpoint!
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="neko-card p-6">
            <div className="text-3xl font-bold text-neko-600 mb-2">50+</div>
            <div className="text-neko-700">Endpoints</div>
          </div>
          <div className="neko-card p-6">
            <div className="text-3xl font-bold text-neko-600 mb-2">3</div>
            <div className="text-neko-700">Response Formats</div>
          </div>
          <div className="neko-card p-6">
            <div className="text-3xl font-bold text-neko-600 mb-2">0</div>
            <div className="text-neko-700">Authentication Required</div>
          </div>
          <div className="neko-card p-6">
            <div className="text-3xl font-bold text-neko-600 mb-2">∞</div>
            <div className="text-neko-700">Possibilities</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage