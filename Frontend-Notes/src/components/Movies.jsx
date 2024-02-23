import React, { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService.js";
import {getGenres} from '../services/fakeGenreService.js'
import Like from "./Like.jsx";
import Pagination from "./Pagination.jsx";
import NavbarForMovies from "./NavbarForMovies.jsx";
import Sortby from "./SortBy.jsx";
import { Link } from "react-router-dom";


function Movies() {
  const genereslist = getGenres()
  // const nice = v.map(m=>(console.log(m.name)))
  const [moview, setmovies] = useState([]);
  useEffect(() => {
    const fechedMoview = getMovies();
    setmovies(fechedMoview);
  }, []); // empty dependency ensure that this only run once

// for pagination
  const [currentPage,setCurrentPage] = useState(1)
  const recordsPerPage = 5
  const lastIndex = recordsPerPage * currentPage // 1*5,2*5
  const firstIndex = lastIndex - recordsPerPage //5-5,10-5,15-5
  const records = moview.slice(firstIndex,lastIndex)
  const npage = Math.ceil(moview.length / recordsPerPage)
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] if npage=20
  const numbers = [...Array(npage+1).keys()].slice(1)

  const handledelete = (MovieID) => {
    deleteMovie(MovieID);
    // filter out all except Delted movieid
    const remaining = moview.filter((m) => m._id !== MovieID);

    setmovies(remaining);
  };

  // console.log(moview)

  const handleLike = (moviee) => {
    const wow = records.map((m) => {
      if (m._id === moviee._id) {
        return { ...m, liked: !m.liked };
      }
      return m;
    });
    setmovies(wow);
  };

  const trmoviedetails = () => {
    if (moview.length === 0) {
      return <tr className="font-extrabold text-green-700">
          <td>
            Nothing to show
          </td>
        </tr>;
    } else {
      const wow = records.map((movie) => (
        <tr className="border-b border-blue-gray-200" key={movie._id}>
          <Link to={`/movies/${movie._id}`}>
            <td className="py-3 px-3 text-blue-600">{movie.title}</td>
          </Link>
          <td className="py-3 px-3">{movie.genre.name}</td>
          <td className="py-3 px-3">{movie.numberInStock}</td>
          <td className="py-3 px-3">{movie.dailyRentalRate}</td>
          <th
            className="py- px-3"
            onClick={() => {
              handleLike(movie);
            }}
          >
            <Like liked={movie.liked} />
          </th>
          <td className="py-3 px-3">
            <a
              onClick={() => handledelete(movie._id)}
              className="font-extrabold text-blue-600 hover:text-red-700"
              href="#"
            >
              Delete
            </a>
          </td>
        </tr>
      ));
      return wow;
    }
  };

  // pagination functions
  const prevPage=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }
  const nextPage=()=>{
    if(currentPage<npage){
      setCurrentPage(currentPage+1)
    }
  }
  const changeCpage=(id)=>{
    setCurrentPage(id)
  }

// Sortby Geners:
  const handleonAction = (generename) =>{
    // console.log(moview.filter(k=>k.genre.name ===generename))
    const moview = getMovies()
    const generemovielist = moview.filter(k=>k.genre.name === generename)
    setmovies(generemovielist)
  } 

  const handleReset = () =>{
    const moview = getMovies()
    setmovies(moview)
  }


  return (
    <>
    <NavbarForMovies/>
    <div className="mt-16">
      <h1 className="m-2 bg-black text-red-700 font-extrabold">
        Movies database of {moview.length === 0 ? "Zero" : moview.length}
      </h1>
      <div className="grid gap-2 m-2 sm:grid-cols-12">
{/*  */}
        <Sortby
        Genereslist = {genereslist}
        HandleonAction = {handleonAction}
        HandleReset = {handleReset}
        />
{/*  */}
        <div className="sm:col-span-8 ">
          {/* table.table>thead>tr>th*4  */}
            <table className="w-full bg-white shadow-md rounded-xl">
                <thead>
                  <tr className='bg-blue-gray-100 text-gray-700"'>
                    <th className="py-3 px-3 ">Title</th>
                    <th className="py-3 px-3 ">Genere</th>
                    <th className="py-3 px-3 ">stock</th>
                    <th className="py-3 px-3 ">Rate</th>
                    <th className="py-3 px-3">like</th>
                    <th className="py-3 px-3 ">d</th>
                  </tr>
                </thead>
              <tbody className="text-blue-gray-900">{trmoviedetails()}</tbody>
            </table>
        </div>
      </div>
      <Pagination
      Numbers = {numbers}
      PrevPage = {prevPage}
      NextPage = {nextPage}
      ChangeCpage = {changeCpage}
      />
    </div>
    </>
  )
}

export default Movies;
