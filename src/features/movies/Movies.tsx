import React, { useEffect } from 'react';
import { getMovies } from '../../services/movies';

function Movies() {
  useEffect(() => {const response = getMovies()},[]);
  return <div></div>;
}

export default Movies;
