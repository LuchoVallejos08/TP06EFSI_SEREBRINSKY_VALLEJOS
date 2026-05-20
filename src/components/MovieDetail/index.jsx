import { useEffect, useState } from "react";
import axios from "axios";

import Loader from "../Loader";
import noPoster from "../../assets/noPoster.png";
const MovieDetail = ({ movie, setOpenModal }) => {

  const [movieDetail, setMovieDetail] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    getMovieDetail();

  }, []);

  const getMovieDetail = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=60045419&i=${movie.imdbID}`
      );

      setMovieDetail(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div style={styles.overlay}>

      <div style={styles.modal}>

        <button
          style={styles.closeButton}
          onClick={() => setOpenModal(false)}
        >
          ✖
        </button>

        {loading || !movieDetail ? (

          <Loader />

        ) : (

          <>

            <h1 style={styles.title}>
              {movieDetail.Title}
            </h1>

            <img
              src={movieDetail.Poster}
              alt={movieDetail.Title}
              style={styles.poster}
              onError={(e) => {
                e.target.src = noPoster;
              }}
            />

            <p>
              <strong>Año:</strong> {movieDetail.Year}
            </p>

            <p>
              <strong>Género:</strong> {movieDetail.Genre}
            </p>

            <p>
              <strong>Director:</strong> {movieDetail.Director}
            </p>

            <p>
              <strong>Actores principales:</strong> {movieDetail.Actors}
            </p>

            <p>
              <strong>Sinopsis:</strong> {movieDetail.Plot}
            </p>

            <p>
              <strong>Duración:</strong> {movieDetail.Runtime}
            </p>

            <p>
              <strong>Idioma:</strong> {movieDetail.Language}
            </p>

            <p>
              <strong>País:</strong> {movieDetail.Country}
            </p>

            {
              movieDetail.imdbRating !== "N/A" && (

                <p>
                  <strong>Puntaje IMDb:</strong> {movieDetail.imdbRating}
                </p>

              )
            }

          </>

        )}

      </div>

    </div>

  );

};

const styles = {

  overlay: {

    position: "fixed",

    top: 0,
    left: 0,

    width: "100%",
    height: "100vh",

    backgroundColor: "rgba(0,0,0,0.7)",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    zIndex: 1000

  },

  modal: {

    backgroundColor: "white",

    padding: "25px",

    borderRadius: "12px",

    width: "500px",

    maxHeight: "90vh",

    overflowY: "auto",

    position: "relative"

  },

  closeButton: {

    position: "absolute",

    top: "10px",

    right: "10px",

    border: "none",

    background: "none",

    fontSize: "20px",

    cursor: "pointer"

  },

  poster: {

    width: "100%",

    borderRadius: "10px",

    marginBottom: "15px"

  },

  title: {

    fontSize: "32px",

    textAlign: "center",

    marginBottom: "20px",

    lineHeight: "1.1",

    wordBreak: "break-word"

  }

};

export default MovieDetail;