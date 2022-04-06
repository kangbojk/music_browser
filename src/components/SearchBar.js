function SearchBar({ query, setQuery }) {

    return (
        <div className="search-wrapper">
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </label>
        </div>
    )
}

export default SearchBar