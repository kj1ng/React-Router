
//MovieList component6

import React from 'react'
import {MovieData} from '../MovieData'
import MovieCard from './MovieCard'


function MovieList() {
  return (
    <div>
{
  MovieData.map((movie, key)=>{
    return(
      <MovieCard key={movie.id} {...movie}/>
    )
  })
}
    </div>
  );
}

export default MovieList;
