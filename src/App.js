import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import {MovieData} from './MovieData'
import Description from './components/Description';



function App() {
  const valueToPass = MovieData[0].description
  const valueToPass2 = MovieData[0].trailer
  return (
    <div className="App">
   
   <Link to="/"> Home </Link> 
   <Link to="/Description"> Description </Link> 
   
  <Routes>
  <Route path="/" element = {<MovieList />} />
  <Route path="/Description" element = {<Description description={valueToPass} trailer={valueToPass2}/>} />

  </Routes>

<h1 className = "text-center text-info"> Movie App </h1>
<Filter />

    </div>
  );
}

export default App;
