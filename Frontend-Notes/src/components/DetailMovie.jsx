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
        {
            reqmoviedetail.map(k=>(
            <>
                <p className='text-2xl'>Name : {k.title}</p>
                <p className='text-xl'>Geners : {k.genre.name}</p>
                <p className='text-xl'>inStoc : {k.numberInStock}</p>
                <p className='text-xl'>Daily Rentel Rate : {k.dailyRentalRate}</p>
            </>
            ))
        }
        <button className='mt-6 p-4 bg-green-400 text-orange-500 border border-red-700 hover:bg-slate-700'>
            <Link to={'/movies'}>Save</Link>
        </button>
        </div>
    </>
  )
}

export default DetailMovie
