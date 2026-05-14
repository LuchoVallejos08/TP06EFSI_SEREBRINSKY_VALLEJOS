import { useState, useEffect } from 'react'
import axios from 'axios'

const MovieList = ({entry, listMovies, setListMovies}) => {

    useEffect(async () => {
    const allMovies = await axios.get(`http://www.omdbapi.com/?t=${entry}`);
    setListMovies(allMovies.data);
  }, []);
}