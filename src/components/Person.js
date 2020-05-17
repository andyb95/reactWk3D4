import React from 'react'

export default function Person({id}){
  return <div>
    <u>{id.name.first} {id.name.last}</u>
    <p class= "sub">From: 
      <p>{id.city}, {id.country}</p>
    </p>  
    <p class= "sub">Job Title: 
      <p>{id.title}</p>
    </p>
    <p class= "sub">Employer: 
      <p>{id.employer}</p>
    </p>
    <p class= "sub">Favorite Movies: 
      <ol>
        <li>{id.favoriteMovies[0]}</li>
        <li>{id.favoriteMovies[1]}</li>
        <li>{id.favoriteMovies[2]}</li>
      
      </ol>
    </p>
  </div>

}

//span tags?