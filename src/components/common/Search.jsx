import "../../scss/components/Search.scss";
import { searchPlaces } from "../../api";
import { useContext, useState } from "react";
import WeatherContext from "../../context/weather.context";

function Search() {
  const { setPlace } = useContext(WeatherContext);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  async function onSearch(e) {
    const providedText = e.target.value;
    providedText.trim().toLowerCase();

    setText(providedText);
    const data = await searchPlaces(providedText);
    setSearchResults(data);

    setOpenSearchResults(data.length > 0);
  }

  const changePlace = (place) => {
    setPlace(place);

    localStorage.setItem("place", JSON.stringify(place));

    setText("");
    setOpenSearchResults(false);
  };

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search__input">
          <input
            type="text"
            name="search-city"
            placeholder="Search city..."
            value={text}
            onChange={onSearch}
          />
        </div>
        {openSearchResults && (
          <div className="search-results">
            <div className="results-container">
              {searchResults.map((place) => (
                <div
                  className="result"
                  key={place.place_id}
                  onClick={() => changePlace(place)}
                >
                  {place.name}, {place.adm_area1}, {place.country}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
