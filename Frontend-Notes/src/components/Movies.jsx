import React, { useEffect, useState } from 'react'
import { getMovies,deleteMovie } from '../services/fakeMovieService.js'
import Like from './Like.jsx'

function Movies() {
  const [moview, setmovies] = useState([])
  useEffect(()=>{
    const fechedMoview = getMovies();
    setmovies(fechedMoview);
  },[]) // empty dependency ensure that this only run once

  const handledelete = (MovieID) =>{
    deleteMovie(MovieID)
// filter out all except Delted movieid
    const remaining = moview.filter(m=> m._id!==MovieID)

    setmovies(remaining)
  }

  // console.log(moview)

  const handleLike = (moviee) =>{
    const wow = moview.map(m=>{
        if(m._id===moviee._id){
        return {...m,liked:!m.liked}
      }
      return m
    })
    setmovies(wow)     
  }

  const trmoviedetails = () =>{
    if (moview.length ===0){
     return <p className='font-extrabold text-green-700'>Nothing to show</p>
    }
    else{ 
    const wow = moview.map(movie=>(
      <tr className='border-b border-blue-gray-200' key={movie._id}>
        <td className='py-3 px-3' >{movie.title}</td>
        <td className='py-3 px-3'>{movie.genre.name}</td>
        <td className='py-3 px-3'>{movie.numberInStock}</td>
        <td className='py-3 px-3'>{movie.dailyRentalRate}</td>
        <th 
            className='py- px-3' 
            onClick={()=>{handleLike(movie)}}
            >
            <Like
              liked = {movie.liked}
            />
        </th>
        <td className='py-3 px-3'>
          <a onClick={() => handledelete(movie._id)} className='font-extrabold text-blue-600 hover:text-red-700' href="#">Delete</a>
          </td>
      </tr>
    ))
    return wow
  }
  }

  return (
    <div>
      <h1 className='bg-black text-red-700 font-extrabold'>Movies database of {moview.length===0? "Zero":moview.length }</h1>
      <div className='overflow-x-auto'>
        {/* table.table>thead>tr>th*4  */}
        <table className='min-w-full bg-white shadow-md rounded-xl'>
          <thead>
            <tr className='bg-blue-gray-100 text-gray-700"'>
              <th className='py-3 px-3 '>Title</th>
              <th className='py-3 px-3 '>Genere</th>
              <th className='py-3 px-3 '>stock</th>
              <th className='py-3 px-3 '>Rate</th>
              <th className='py-3 px-3'>like</th>
              <th className='py-3 px-3 '>d</th>
            </tr>
          </thead>
          <tbody className='text-blue-gray-900'>
            {trmoviedetails()}
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default Movies