import React from "react";
import "../styles/StarRate.css";
import { FaStar, FaUndo } from "react-icons/fa";

function StarRate({ rating, setRating, hover, setHover }) {
    return (
        <div className="starrate-contour">
            <div className="tb-star-rate">
                {[...Array(10)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                                color={
                                    ratingValue <= (hover || rating)
                                        ? "#ffc107"
                                        : "#e4e5e9"
                                }
                                className="star"
                                size={50}
                            />
                            {}
                        </label>
                    );
                })}{" "}
                <button
                    onClick={() => setRating(null)}
                    className="tb-button-reset"
                >
                    Reset <FaUndo />
                </button>
            </div>{" "}
            <div className="tb-show-rating">{hover}</div>
        </div>
    );
}

export default StarRate;
