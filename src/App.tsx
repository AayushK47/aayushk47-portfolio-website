import './App.css'
import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Components
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Blogs from './components/Blogs'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entry
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Blogs />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
