import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from './components/Headers';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';


function App() {

  return (
    <>
    <BrowserRouter>
      <Headers/>
        <Routes>
          <Route path='/' element={<NotesListPage />}/>
          <Route path='/note/:id' element={<NotePage />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
