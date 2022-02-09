import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../state/slices/movies';

function Movies() {
  const dispatch = useDispatch()
  const [movie, setMovie] = useState<any>();
  useEffect(()=>{dispatch(fetchMovies())},[])
  return <div>
    <span>{movie?.data.Title }</span>
  </div>;
}

export default Movies;
