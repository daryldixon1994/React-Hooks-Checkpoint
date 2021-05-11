import "../styles/Categories.css";

function Categories({ filter, setFilter, categories }) {
    
    return (
        <div className="tb-categorie">
            <div>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="tb-categorie-select"
                >
                    <option value="" className="tb-categorie-option">
                        Choose Category
                    </option>
                    {categories.map((cat) => (
                        <option
                            key={cat}
                            value={cat}
                            className="tb-categorie-option"
                        >
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
            <button className="button" onClick={() => setFilter("")}>
                Reset
            </button>
        </div>
    );
}

export default Categories;
