const MovieCard = ({ movie }) => {

  return (
    <div className="movie">
      <div>
        <p>{movie.release_date}</p>
      </div>
      <div>
        <img 
          src={movie.poster_path ? movie.poster_path : 'https://via.placeholder.com/230x360'} 
          alt={movie.title} 
        />
      </div>
      <div>
        <span>Rating: {movie.vote_average}/10</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  )
}

export default MovieCard;