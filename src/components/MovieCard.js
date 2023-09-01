//MovieCard component

import React from 'react'
import Card from 'react-bootstrap/Card';

function MovieCard({id, posterURL, title, description, rating}) {
  return (
    <div>
 <Card style={{ width: '20rem' }} className="container-fluid">
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title> Movie Title: {title}</Card.Title><br/>
        <Card.Text>
          id: {id}<br/>
          Description: {description}<br/>
          Rating: {rating}<br/>
  
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}

export default MovieCard;
