//MovieCard component

import React from 'react'
import Card from 'react-bootstrap/Card';

function MovieCard({id, posterURL, title, description, rating}) {
  return (
    <div>
 <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={posterURL} />
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
