import "../styles/Search.css";

function Search({ updateSearch }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search.."
                onChange={(e) => updateSearch(e.target.value)}
                className="tb-search-bar"
            />
        </div>
    );
}

export default Search;
