import "../styles/AddMovie.css";
import { useState } from "react";

function AddMovie({ updateAdd, addMovie }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [rate, setRate] = useState("");
    const [cover, setCover] = useState("");
    const [cast, setCast] = useState("");
    const [release, setRelease] = useState("");

    function checkInput(e) {
        return title === "" ||
            category === "" ||
            rate === "" ||
            cover === "" ||
            cast === "" ||
            release === ""
            ? alert("One or more missing datas")
            : handelSubmit(e);
    }

    const handelSubmit = (e) => {
        let addedMovie = {
            title,
            category,
            rate,
            cover,
            cast,
            release,
        };
        addMovie(e, addedMovie);
        updateAdd(true);
        setTitle("");
        setCategory("");
        setRate("");
        setCover("");
        setCast("");
        setRelease("");
    };
    console.log(title, category, rate, cover, cast, release);
    return (
        <div className="tb-add-container">
            <div className="tb-add-box">
                <div>
                    <button
                        className="tb-bt-add-close"
                        onClick={() => updateAdd(true)}
                    >
                        Close
                    </button>
                </div>
                <form className="tb-addmovie">
                    <div className="tb-countour-form">
                        <label>Movie Title</label>
                        <input
                            type="text"
                            placeholder="Movie Name..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            /* onBlur={handelBlur}> */
                        />
                        <label>Category</label>
                        <input
                            type="text"
                            placeholder="Action, Comedy, Drama..."
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <label>Rate</label>
                        <input
                            type="number"
                            name="rate_value"
                            min="1"
                            max="10"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                        />
                        <label>Cover Image</label>
                        <input
                            type="text"
                            placeholder="Enter a poster URL"
                            value={cover}
                            onChange={(e) => setCover(e.target.value)}
                        />
                        <label>Cast</label>
                        <input
                            type="text"
                            placeholder="Cast..."
                            value={cast}
                            onChange={(e) => setCast(e.target.value)}
                        />
                        <label>Release Date</label>
                        <input
                            type="date"
                            name="release_date"
                            value={release}
                            onChange={(e) => setRelease(e.target.value)}
                        />
                    </div>
                </form>
                <div>
                    <button
                        className="tb-bt-add-submit"
                        onClick={(e) => checkInput(e)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;
