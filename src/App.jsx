import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Pokedex from './pages/Pokedex'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pokedex' element={<Pokedex />} />
    </Routes>
  )
}

export default App
