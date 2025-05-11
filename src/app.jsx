import Header from './components/header'
import MovieGrid from './components/movie-grid'
import { useState, useEffect } from 'react'

const options = {
  method: 'GET',

  // `headers` notify the API that we want JSON data
  headers: {
    accept: 'application/json',

    /**
     * * THIS IS NOT SECURE! DO NOT USE IN PRODUCTION!
     * * This is just for demonstration purposes.
     * * In a real-world application, you should use a secure method
     * to store and access your API key.
     */
    Authorization: import.meta.env.VITE_API_KEY,
  },
}

export default function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        /**
         * Following the TMDB API documentation,
         * we are using the `/trending/movie/week` endpoint.
         *
         * https://developer.themoviedb.org/reference/discover-movie
         */
        `${import.meta.env.VITE_API_URL}/trending/movie/week`,
        options,
      )
      // this fetches the data from the API
      const data = await response.json()
      setMovies(data.results)
    }
    fetchMovies()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <Header />
    </main>
  )
}
