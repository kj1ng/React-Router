//MovieCard component

import React from 'react'
import Card from 'react-bootstrap/Card';

function MovieCard({id, poster, title, description, rating}) {
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title> Movie Title: {title}</Card.Title>
        <Card.Text>
          id: {id}
          Description: {description}
          Rating: {rating}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}

export default MovieCard;
