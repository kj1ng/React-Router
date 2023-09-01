import React from 'react'
import {Link} from 'react-router-dom'


const Description = ({description, trailer }) => {
  return (
    <div>
        <h2> Full Description </h2>
      <p>
      {description}
      </p>
  <p>{trailer}
  </p>
  <Link to="/"> Go Home </Link> 
    </div>
  )
}

export default Description
