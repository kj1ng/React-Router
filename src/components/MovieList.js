
//MovieList component

import React from 'react'
import {MovieData} from '../MovieData'
import MovieCard from './MovieCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from './Filter'


function MovieList() {
  return (
    <div>
<section id="movie-list" className='block movie-block'>
<Filter />
<Container fluid>
  <div className = "title">
    <h2> Welcome to My Movie Website </h2>
    <div className = "sub-title">Check out our latest movies </div>
     </div>
      <Row>
        <Col>   {
  MovieData.map((movie)=>{
    return(
      <MovieCard {...movie}/>
    
    )
  })
}   </Col>
      
      </Row>
    </Container>

   </section>
    </div>
  );
}

export default MovieList;
