import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EndpointsPage from './pages/EndpointsPage'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neko-50 via-purrple-50 to-neko-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/endpoints" element={<EndpointsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App