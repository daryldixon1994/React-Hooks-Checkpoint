import "../styles/Banner.css";
import logo from "../RS/logo.png";
import Search from "../Components/Search";

function Banner({ updateAdd, updateSearch }) {
    return (
        <div className="tb-header">
            <div className="tb-banner">
                <img src={logo} alt="logo" className="tb-logo" />
                <h1>
                    TUNIBEST <br />
                    <span style={{ fontSize: "0.7em" }}>Home of cinema</span>
                </h1>
            </div>
            <Search updateSearch={updateSearch} />
        </div>
    );
}

export default Banner;
