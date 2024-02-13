import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Headers from './components/Headers.jsx'
import './index.css'
import Button from './components/Button.jsx'
import Count from './components/Count.jsx'
import RandomImage from './components/RandomImage.jsx'
import List from './components/List.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Headers/>
    <Button/>
    <Count/>
    <RandomImage/>
    <List/>
  </React.StrictMode>,
)
