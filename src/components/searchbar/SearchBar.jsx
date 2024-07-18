import React,{useState} from "react";
import "./SearchBar.scss";
function SearchBar() {
  const types = ["buy", "rent"];

  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery(prev=>({...prev,type:val}));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="Enter City Name" />
        <input
          type="text"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Minimum Budget"
        />
        <input
          type="text"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Maximum Budget"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
