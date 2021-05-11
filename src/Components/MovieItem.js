import "../styles/MovieItem.css";

import ScaleRate from "./ScaleRate.js";

function MovieItem({ title, category, rate, cover, cast, release }) {
    return (
        <div className="contour">
            <li className="tb-movie-item">
                <img className="tb-cover" src={cover} alt={`${title} cover `} />
                <h1>{title}</h1>
                <div className="tb-item-details">
                    <span className="tb-item-title"> Rate : </span>
                    <ScaleRate rate={rate} />
                    <div>
                        <span className="tb-item-title">
                            Cast :{" "}
                            <span className="tb-item-title-value">{cast} </span>
                        </span>
                    </div>
                    <div>
                        <span className="tb-item-title">
                            Category :{" "}
                            <span className="tb-item-title-value">
                                {category}
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className="tb-item-title">
                            Release Date :{" "}
                            <span className="tb-item-title-value">
                                {release}
                            </span>
                        </span>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default MovieItem;
