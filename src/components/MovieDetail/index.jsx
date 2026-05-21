import { useEffect, useState } from "react";
import axios from "axios";

import Loader from "../Loader";
import noPoster from "../../assets/noPoster.png";

import "./MovieDetail.css";

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

    <div className="detail-overlay">

      <div className="detail-modal">

        <button
          className="detail-close"
          onClick={() => setOpenModal(false)}
        >
          ✖
        </button>

        {
          loading || !movieDetail
            ? (
              <Loader />
            )
            : (

              <>

                <h1 className="detail-title">
                  {movieDetail.Title}
                </h1>

                <div className="detail-content">

                  <img
                    src={movieDetail.Poster}
                    alt={movieDetail.Title}
                    className="detail-poster"
                    onError={(e) => {
                      e.target.src = noPoster;
                    }}
                  />

                  <div className="detail-info">

                    <p className="detail-text">
                      <strong>Año:</strong> {movieDetail.Year}
                    </p>

                    <p className="detail-text">
                      <strong>Género:</strong> {movieDetail.Genre}
                    </p>

                    <p className="detail-text">
                      <strong>Director:</strong> {movieDetail.Director}
                    </p>

                    <p className="detail-text">
                      <strong>Actores principales:</strong> {movieDetail.Actors}
                    </p>

                    <p className="detail-text">
                      <strong>Sinopsis:</strong> {movieDetail.Plot}
                    </p>

                    <p className="detail-text">
                      <strong>Duración:</strong> {movieDetail.Runtime}
                    </p>

                    <p className="detail-text">
                      <strong>Idioma:</strong> {movieDetail.Language}
                    </p>

                    <p className="detail-text">
                      <strong>País:</strong> {movieDetail.Country}
                    </p>

                    {
                      movieDetail.imdbRating !== "N/A" && (

                        <p className="detail-text">
                          <strong>Puntaje IMDb:</strong> {movieDetail.imdbRating}
                        </p>

                      )
                    }

                  </div>

                </div>

              </>

            )
        }

      </div>

    </div>

  );

};

export default MovieDetail;