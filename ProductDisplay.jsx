import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./ProductDisplay.css"

const ProductDisplay = ()=> {

  const sortBy="name";
  const limit=5;
  const  order="asc"
  const seearch="Langston"

     const [movie,setMovie]=useState([]);
      
     useEffect(()=>{
      axios.get(`https://freetestapi.com/api/v1/poets?sort=${sorBy}&order=${order}`)
          .then((res)=>{
            setMovie(res.data)
          })
     })

  return (
    
    
    <>
    <div className='body'>
        <h1 class="head">Famous Authors Biography</h1>
        {movie.map((value)=>{

          const{id,name,birth_year,death_year,nationality,notable_works,biography,genre}=value;
    
            return(

          <div className="div" key={id}>
             <h1>{name}</h1>
             <p>Date of Birth: [{birth_year}-{death_year}]</p>
             <p>Nationality: {nationality}</p>
             <p>Genre: {genre.join(", ")}</p>
             <p>Notable_works: {notable_works.join(", ")}</p>
             <p>{biography}</p>
          </div>
        )})
        }
     
    </div>
    </>
  )
}

export default ProductDisplay;