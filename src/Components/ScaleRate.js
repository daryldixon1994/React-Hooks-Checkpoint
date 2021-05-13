import star from "../RS/star.svg";
import blankstar from "../RS/blankstar.svg";
import "../styles/Scale.css";

function ScaleRate({ rate }) {
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="tb-scale">
            <div>
                {range.map((rangeElem) =>
                    rate >= rangeElem ? (
                        <span key={rangeElem.toString()}>
                            <img src={star} alt="star" width="20" />
                        </span>
                    ) : (
                        <span key={rangeElem.toString()}>
                            <img src={blankstar} alt="star" width="20" />
                        </span>
                    )
                )}
            </div>
            <div className="tb-rate-value">{rate}/10 </div>
        </div>
    );
}
export default ScaleRate;
