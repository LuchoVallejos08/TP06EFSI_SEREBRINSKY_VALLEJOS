import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../MovieCard";
import Loader from "../Loader";

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

      <h1 style={styles.error}>
        ❌ {error}
      </h1>

    );

  }

  return (

    <div style={styles.container}>

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

const styles = {

  container: {

    display: "flex",

    flexWrap: "wrap",

    justifyContent: "center",

    gap: "20px",

    padding: "20px"

  },

  error: {

    textAlign: "center",

    marginTop: "50px",

    color: "red"

  }

};

export default MovieList;