import React from "react";
import "../styles/RateFilter.css"
function RateFilter({ rateFilter, setRateFilter }) {
    const tabRate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="tb-rate">
            <div>
                <select
                    value={rateFilter}
                    onChange={(e) => setRateFilter(e.target.value)}
                    className="tb-rate-select"
                >
                    <option value="" className="tb-rate-option">
                        Choose Rate
                    </option>
                    {tabRate.map((rat) => (
                        <option
                            key={rat}
                            value={rat}
                            className="tb-rate-option"
                        >
                            {rat} ⭐
                        </option>
                    ))}
                </select>
            </div>
            <button className="button-rate" onClick={() => setRateFilter(0)}>
                Reset
            </button>
        </div>
    );
}

export default RateFilter;
