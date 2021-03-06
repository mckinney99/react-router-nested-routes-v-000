import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = movies.map(movie =>
    <div>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      <br></br>
    </div>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;
