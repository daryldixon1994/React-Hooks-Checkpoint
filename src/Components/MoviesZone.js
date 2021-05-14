import MovieItem from "./MovieItem";
/* import Categories from "../Components/Categories";
 */
import "../styles/MoviesZone.css";
import { useState, useEffect } from "react";
/* import RateFilter from "../Components/RateFilter";
 */
import { FaPlus } from "react-icons/fa";
import StarRate from "./StarRate";

function MoviesZone({
    filter,
    setFilter,
    search,
    rateFilter,
    setRateFilter,
    movies,
    updateAdd,
}) {
    /*  const categories = movieList.reduce(
        (arr, movie) =>
            arr.includes(movie.category) ? arr : arr.concat(movie.category),
        []
    ); */

    /*  const rateTab = movieList
        .reduce(
            (arr, movie) =>
                arr.includes(movie.rate) ? arr : arr.concat(movie.rate),
            []
        )
        .sort(); */

    const [filteredMovies, setFilteredMovies] = useState([]);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    useEffect(() => {
        setFilteredMovies(
            movies.filter((elt) =>
                elt.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, movies]);

    return (
        <div className="tb-zone">
            <StarRate
                rating={rating}
                setRating={setRating}
                hover={hover}
                setHover={setHover}
            />
            {/* <RateFilter rateFilter={rateFilter} setRateFilter={setRateFilter} /> */}
            {/*   <Categories
                categories={categories}
                filter={filter}
                setFilter={setFilter}
            /> */}

            <ul className="tb-zone-movies">
                {filteredMovies.map(
                    ({ id, title, category, rate, cover, cast, release }) =>
                        !rating || rating === rate ? (
                            <div key={id}>
                                <MovieItem
                                    title={title}
                                    category={category}
                                    rate={rate}
                                    cover={cover}
                                    cast={cast}
                                    release={release}
                                />
                            </div>
                        ) : null
                )}
                <div>
                    <button
                        className="tb-baner-add-btn"
                        onClick={() => updateAdd(false)}
                    >
                        <FaPlus size={100} color={"red"} />
                    </button>
                </div>
            </ul>
        </div>
    );
}

export default MoviesZone;
