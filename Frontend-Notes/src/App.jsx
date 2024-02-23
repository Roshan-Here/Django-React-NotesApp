import { useState } from 'react'
import Movies from "./components/Movies.jsx";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailMovie from './components/DetailMovie.jsx';
import NavbarForMovies from './components/NavbarForMovies.jsx';
import Home from './pages/Home.jsx';
import RentADay from './components/RentADay.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/rent' element={<RentADay/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/:id' element={<DetailMovie/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
