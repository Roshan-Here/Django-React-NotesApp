import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMovies} from "../services/fakeMovieService.js";
import NavbarForMovies from './NavbarForMovies.jsx';

function DetailMovie() {
    const id = useParams()
    // console.log(id)
    const movielist = getMovies()
    console.log(movielist)
    const reqmoviedetail = movielist.filter(m=>m._id===id.id)
    // console.log(reqmoviedetail)
    return (
    <>
        <NavbarForMovies/>
        <div className='mt-16 text-gray-700 m-3'>
        <p className='text-2xl'>Name : {reqmoviedetail[0].title}</p>
        <p className='text-xl'>Geners : {reqmoviedetail[0].genre.name}</p>
        <p className='text-xl'>inStoc : {reqmoviedetail[0].numberInStock}</p>
        <p className='text-xl'>Daily Rentel Rate : {reqmoviedetail[0].dailyRentalRate}</p>
        <button className='mt-6 p-4 bg-green-400 text-orange-500 border border-red-700 hover:bg-slate-700'>
            <Link to={'/Movies'}>Save</Link>
        </button>
        </div>
    </>
  )
}

export default DetailMovie
