import { useState, useEffect } from 'react'
import { Copy, Check, ExternalLink, Code, Filter } from 'lucide-react'
import EndpointCard from '../components/EndpointCard'

interface Endpoint {
  name: string
  description: string
  endpoint: string
  method: string
  queryParams: Record<string, string>
  exampleRequest: string
  exampleResponse: any
  category: string
}

const EndpointsPage = () => {
  const [endpoints, setEndpoints] = useState<Endpoint[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    fetchEndpoints()
  }, [])

  const fetchEndpoints = async () => {
    try {
      const response = await fetch('/api/docs')
      const data = await response.json()
      setEndpoints(data.endpoints || [])
    } catch (error) {
      console.error('Failed to fetch endpoints:', error)
      // Fallback to sample data
      setEndpoints([
        {
          name: "8-Ball",
          description: "Get a random 8-ball response to your question",
          endpoint: "/api/8ball",
          method: "GET",
          queryParams: { question: "string (optional) - The question you want to ask the 8-ball" },
          exampleRequest: "/api/8ball?question=Will I win the lottery?",
          exampleResponse: { question: "Will I win the lottery?", answer: "It is certain", type: "8ball" },
          category: "Fun & Games"
        },
        {
          name: "Dice Roll",
          description: "Roll dice with customizable sides and count",
          endpoint: "/api/roll",
          method: "GET",
          queryParams: { sides: "number (optional, default: 6) - Number of sides on the dice" },
          exampleRequest: "/api/roll?sides=20&count=3",
          exampleResponse: { sides: 20, count: 3, rolls: [15, 7, 19], total: 41, type: "dice" },
          category: "Fun & Games"
        },
        {
          name: "Random Cat",
          description: "Get a random cat image",
          endpoint: "/api/cat",
          method: "GET",
          queryParams: {},
          exampleRequest: "/api/cat",
          exampleResponse: { id: "abc123", url: "https://cdn2.thecatapi.com/images/abc123.jpg", width: 800, height: 600, type: "cat" },
          category: "Animals"
        },
        {
          name: "IP Address",
          description: "Get the client's IP address and request information",
          endpoint: "/api/ip",
          method: "GET",
          queryParams: {},
          exampleRequest: "/api/ip",
          exampleResponse: { ip: "192.168.1.1", userAgent: "Mozilla/5.0...", language: "en-US,en;q=0.9", type: "ip" },
          category: "Utility"
        },
        {
          name: "UUID Generator",
          description: "Generate random UUIDs (v4)",
          endpoint: "/api/uuid",
          method: "GET",
          queryParams: { count: "number (optional, default: 1) - Number of UUIDs to generate" },
          exampleRequest: "/api/uuid?count=3",
          exampleResponse: { count: 3, uuids: ["550e8400-e29b-41d4-a716-446655440000", "6ba7b810-9dad-11d1-80b4-00c04fd430c8", "6ba7b811-9dad-11d1-80b4-00c04fd430c8"], type: "uuid" },
          category: "Utility"
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text)
    setCopied(endpoint)
    setTimeout(() => setCopied(null), 2000)
  }

  const categories = ['all', ...Array.from(new Set(endpoints.map(ep => ep.category)))]

  const filteredEndpoints = selectedCategory === 'all' 
    ? endpoints 
    : endpoints.filter(ep => ep.category === selectedCategory)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neko-500 mx-auto mb-4"></div>
          <p className="text-neko-600">Loading endpoints...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neko-800 mb-4">
          API Endpoints
        </h1>
        <p className="text-xl text-neko-600 mb-8">
          Explore all {endpoints.length} endpoints available in nekoQL
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-neko-500 text-white'
                  : 'bg-white/80 text-neko-600 hover:bg-neko-50 border border-neko-200'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => copyToClipboard('curl https://api.nekoql.com/api/8ball?response=yaml', 'base')}
            className="neko-button-secondary flex items-center space-x-2"
          >
            {copied === 'base' ? <Check size={16} /> : <Copy size={16} />}
            <span>Copy Example</span>
          </button>
          
          <a
            href="/api/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="neko-button-secondary flex items-center space-x-2"
          >
            <ExternalLink size={16} />
            <span>API Docs</span>
          </a>
        </div>
      </div>

      {/* Endpoints Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredEndpoints.map((endpoint, index) => (
          <EndpointCard
            key={index}
            endpoint={endpoint}
            onCopy={copyToClipboard}
            copied={copied === endpoint.endpoint}
          />
        ))}
      </div>

      {filteredEndpoints.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🐾</div>
          <h3 className="text-xl font-semibold text-neko-800 mb-2">
            No endpoints found
          </h3>
          <p className="text-neko-600">
            Try selecting a different category or check back later!
          </p>
        </div>
      )}
    </div>
  )
}

export default EndpointsPage