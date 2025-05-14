import React ,{ useState } from 'react'
import './App.css'
import MovieList from './views/MovieList'
import Navbar from './components/Navbar/Navbar'
function App() {
 
  return (
    <>
    <Navbar />
    <MovieList />
    </>
  )
}

export default App
