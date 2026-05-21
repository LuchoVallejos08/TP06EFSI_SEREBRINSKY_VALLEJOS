import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../MovieCard";
import Loader from "../Loader";

import "./MovieList.css";

const MovieList = ({
  entry,
  listMovies,
  setListMovies,
  setSelectedMovie,
  setOpenModal
}) => {

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {

    getMovies();

  }, [entry]);

  const getMovies = async () => {

    try {

      setLoading(true);

      setError("");

      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=60045419&s=${entry}`
      );

      if (response.data.Response === "False") {

        setError(response.data.Error);

        setListMovies([]);

      } else {

        setListMovies(response.data.Search);

      }

    } catch (error) {

      console.log(error);

      setError("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return <Loader />;
  }

  if (error) {

    return (

      <h1 className="error">
       No hay resultados para tu búsqueda
      </h1>

    );

  }

  return (
  
    <div className="movies">

      {listMovies.map((movie) => (

        <MovieCard
          key={movie.imdbID}
          movie={movie}
          setSelectedMovie={setSelectedMovie}
          setOpenModal={setOpenModal}
        />

      ))}

    </div>

  );

};

export default MovieList;