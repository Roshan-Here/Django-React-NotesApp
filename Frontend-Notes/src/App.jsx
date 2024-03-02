import Movies from "./components/Movies.jsx";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailMovie from './components/DetailMovie.jsx';
import RentADay from './components/RentADay.jsx';
import NotFound from './components/NotFound.jsx';
import AuthHome from "./containers/AuthHome.jsx";
import AuthLogin from "./containers/AuthLogin.jsx";
import AuthSignup from "./containers/AuthSignup.jsx";
import AuthAcitvate from "./containers/AuthAcitvate.jsx";
import AuthResetPassword from "./containers/AuthResetPassword.jsx";
import AuthRestPassowordConfirm from "./containers/AuthRestPassowordConfirm.jsx";
import AuthNavbar from "./components/AuthNavbar.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Provider store={store}>
          <Route path='/login' element={<AuthLogin/>}/>
          <Route path='/signup' element={<AuthSignup/>}/>
          <Route path='/rent' element={<RentADay/>}/>
          <Route path='/activate/:uid/:token' element={<AuthAcitvate/>}/>
          <Route path='/reset-password' element={<AuthResetPassword/>}/>
          <Route path='/password/reset/confirm/:uid/:token' element={<AuthRestPassowordConfirm/>}/>
          <Route path='/' element={<AuthHome/>}/>
          <Route path='/movies/:id' element={<DetailMovie/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Provider>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
