import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

import Home from './paginas/Home'
import MinhaEstante from './paginas/Minha-estante'
import CadastreSe from './paginas/Cadastre-se'
import Comprar from './paginas/Comprar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = { <App /> }>
          <Route path='/' element = { <Home /> } />
          <Route path='cadastrar' element = { <CadastreSe /> } />
          <Route path='minhaestante' element = { <MinhaEstante/> } />
          <Route path='comprar' element = { <Comprar /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
