import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies } from '../../state/selectors/movies';
import { fetchMovies } from '../../state/slices/movies';

function Movies() {
  const dispatch = useDispatch()
  const movies = useSelector(selectMovies)
  useEffect(()=>{dispatch(fetchMovies())},[])
  useEffect(()=>{console.log({movies});},[movies])
  return <div>
    <span>{movies?.data.Title }</span>
  </div>;
}

export default Movies;
