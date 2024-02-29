import Movies from "./components/Movies.jsx";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailMovie from './components/DetailMovie.jsx';
import Home from './pages/Home.jsx';
import RentADay from './components/RentADay.jsx';
import NotFound from './components/NotFound.jsx';
import Auth from './pages/Auth.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/rent' element={<RentADay/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/:id' element={<DetailMovie/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
