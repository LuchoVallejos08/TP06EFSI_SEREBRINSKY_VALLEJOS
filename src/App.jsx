import { useState, useEffect } from 'react'
import axios from 'axios'


import './App.css'

function App() {

  const [listMovies, setListMovies] = useState([])

  return(
    <>
      <SearchBar />
    </>
  )
}

export default App
