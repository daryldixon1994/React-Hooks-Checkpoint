import Banner from "./Banner";
import MoviesZone from "./MoviesZone";
import { useState } from "react";
import AddMovie from "./AddMovie";
import { movieList } from "../datas/movieList";

function App() {
    const [filter, setFilter] = useState("");
    const [rateFilter, setRateFilter] = useState(0);
    const [add, updateAdd] = useState(true);
    const [search, updateSearch] = useState("");
    const [movies, setMovies] = useState(movieList);

    const addMovie = (e, addedMovie) => {
        e.preventDefault();
        setMovies([...movies, addedMovie]);
    };

    console.log(search);
    return (
        <div className="App">
            <Banner
                updateSearch={updateSearch}
            />
            {add ? null : (
                <AddMovie addMovie={addMovie} add={add} updateAdd={updateAdd} />
            )}
            <MoviesZone
                filter={filter}
                setFilter={setFilter}
                add={add}
                updateAdd={updateAdd}
                search={search}
                rateFilter={rateFilter}
                setRateFilter={setRateFilter}
                movies={movies}
            />
        </div>
    );
}

export default App;
