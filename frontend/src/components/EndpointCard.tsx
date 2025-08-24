import { useState } from 'react'
import { Copy, Check, ExternalLink, Code, ChevronDown, ChevronUp } from 'lucide-react'

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

interface EndpointCardProps {
  endpoint: Endpoint
  onCopy: (text: string, endpoint: string) => void
  copied: boolean
}

const EndpointCard = ({ endpoint, onCopy, copied }: EndpointCardProps) => {
  const [expanded, setExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState<'json' | 'yaml' | 'toml'>('json')

  const copyUrl = () => {
    const baseUrl = window.location.origin
    onCopy(`${baseUrl}${endpoint.exampleRequest}`, endpoint.endpoint)
  }

  const copyWithFormat = (format: 'json' | 'yaml' | 'toml') => {
    const baseUrl = window.location.origin
    const url = `${baseUrl}${endpoint.exampleRequest}${endpoint.exampleRequest.includes('?') ? '&' : '?'}response=${format}`
    onCopy(url, `${endpoint.endpoint}-${format}`)
  }

  const formatResponse = (data: any, format: 'json' | 'yaml' | 'toml') => {
    const response = {
      success: true,
      data: data,
      timestamp: new Date().toISOString(),
      endpoint: endpoint.endpoint,
      format: format
    }

    switch (format) {
      case 'json':
        return JSON.stringify(response, null, 2)
      case 'yaml':
        return `success: true
data:
  ${Object.entries(data).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n  ')}
timestamp: "${response.timestamp}"
endpoint: "${response.endpoint}"
format: "${response.format}"`
      case 'toml':
        return `success = true
[data]
${Object.entries(data).map(([key, value]) => `${key} = ${JSON.stringify(value)}`).join('\n')}
timestamp = "${response.timestamp}"
endpoint = "${response.endpoint}"
format = "${response.format}"`
      default:
        return JSON.stringify(response, null, 2)
    }
  }

  return (
    <div className="neko-card p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="neko-badge">{endpoint.category}</span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
              {endpoint.method}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-neko-800 mb-2">
            {endpoint.name}
          </h3>
          <p className="text-neko-600 mb-3">
            {endpoint.description}
          </p>
          <div className="font-mono text-sm bg-neko-50 rounded-lg p-3 text-neko-700">
            {endpoint.endpoint}
          </div>
        </div>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-4 p-2 text-neko-600 hover:bg-neko-50 rounded-lg transition-colors"
        >
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={copyUrl}
          className="neko-button-secondary flex items-center space-x-2 text-sm"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>Copy URL</span>
        </button>
        
        <button
          onClick={() => copyWithFormat('yaml')}
          className="neko-button-secondary flex items-center space-x-2 text-sm"
        >
          <Copy size={16} />
          <span>Copy YAML</span>
        </button>
        
        <button
          onClick={() => copyWithFormat('toml')}
          className="neko-button-secondary flex items-center space-x-2 text-sm"
        >
          <Copy size={16} />
          <span>Copy TOML</span>
        </button>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-neko-200 pt-4 space-y-4">
          {/* Query Parameters */}
          {Object.keys(endpoint.queryParams).length > 0 && (
            <div>
              <h4 className="font-semibold text-neko-800 mb-2">Query Parameters</h4>
              <div className="bg-neko-50 rounded-lg p-3">
                {Object.entries(endpoint.queryParams).map(([key, description]) => (
                  <div key={key} className="mb-2 last:mb-0">
                    <code className="text-neko-700 font-medium">{key}</code>
                    <span className="text-neko-600 ml-2">- {description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Response Examples */}
          <div>
            <h4 className="font-semibold text-neko-800 mb-2">Response Examples</h4>
            
            {/* Format Tabs */}
            <div className="flex gap-1 mb-3">
              {(['json', 'yaml', 'toml'] as const).map(format => (
                <button
                  key={format}
                  onClick={() => setActiveTab(format)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === format
                      ? 'bg-neko-500 text-white'
                      : 'bg-neko-100 text-neko-600 hover:bg-neko-200'
                  }`}
                >
                  {format.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Response Preview */}
            <div className="bg-neko-900 text-neko-100 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm">
                <code>{formatResponse(endpoint.exampleResponse, activeTab)}</code>
              </pre>
            </div>
          </div>

          {/* Try It */}
          <div>
            <h4 className="font-semibold text-neko-800 mb-2">Try It</h4>
            <div className="bg-neko-50 rounded-lg p-3">
              <div className="font-mono text-sm text-neko-700 mb-2">
                {endpoint.exampleRequest}
              </div>
              <a
                href={endpoint.exampleRequest}
                target="_blank"
                rel="noopener noreferrer"
                className="neko-button flex items-center space-x-2 text-sm"
              >
                <ExternalLink size={16} />
                <span>Open in new tab</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EndpointCard