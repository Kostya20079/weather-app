import "../../scss/components/Search.scss";

function Search() {
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search__input">
          <input type="text" name="search-city" placeholder="Search city..." />
        </div>
      </div>
    </div>
  );
}

export default Search;
