import React from 'react'

export default function Person({id}){
  return <div>
    <h1>{id.name.first} {id.name.last}</h1>
    <p>From: {id.city}, {id.country}</p>  
    <p>Job Title: {id.title}</p>
    <p>Employer: {id.employer}</p>
    <p>Favorite Movies: {id.favoriteMovies}</p>
  </div>

}

//span tags?