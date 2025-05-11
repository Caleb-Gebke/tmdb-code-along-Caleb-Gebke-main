import React from 'react'
import './movie-grid.css' // Optional: Add CSS for styling

const MovieGrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'placeholder.jpg'
              }
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  )
}

export default MovieGrid
