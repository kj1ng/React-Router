import React from 'react'
// import MovieCard from './MovieCard'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {MovieData} from '../MovieData'
import MovieList from './MovieList';

// import {MovieData} from '../MovieData'

function Filter() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(MovieData);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const filteredMovies = MovieData.filter((movie) =>
      movie.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setFilteredMovies(filteredMovies);
  };



  return (
    <div>

<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><h4>Search</h4></Form.Label>
        <Form.Control type="text" placeholder="Search for a movie" value={searchTerm} onChange={handleSearchChange}/>
      </Form.Group>
    </Form>
    {/* {
      filterCards.map((card, index)=>{
       return(
        <MovieCard {...card} />
       ) })
    } */}
    <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Filter;
