import React from 'react'
import MovieList from './MovieList'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {MovieData} from '../MovieData'

function Filter() {

  const [filter, setFilter] = useState("")

  const searchText = (event) =>{
    setFilter(event.target.value);
  }
  let dataSearch = MovieData.filter(item =>{
   return Object.keys(item).some(key=>
    item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
});
  return (
    <div>

<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><h4>Search</h4></Form.Label>
        <Form.Control type="text" placeholder="Search for a movie" value={filter} onChange={searchText.bind(this)}/>
      </Form.Group>
    </Form>
    {
      dataSearch.map((item, index)=>{
       return(
        <MovieList />
       ) })
    }
    </div>
  );
}

export default Filter;
