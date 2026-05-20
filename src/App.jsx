import { useState } from "react";

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {

  const [entry, setEntry] = useState("shrek");

  const [listMovies, setListMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>

      <SearchBar setEntry={setEntry} />

      <MovieList
        entry={entry}
        listMovies={listMovies}
        setListMovies={setListMovies}
        setSelectedMovie={setSelectedMovie}
        setOpenModal={setOpenModal}
      />

      {openModal && (

        <MovieDetail
          movie={selectedMovie}
          setOpenModal={setOpenModal}
        />

      )}

    </div>
  );
}

export default App;