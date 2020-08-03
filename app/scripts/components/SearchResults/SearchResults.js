import React, { useContext } from "react";
import Store from "../../../store/store";

const currentCurrency = "$";

const SearchResults = () => {
  const { store } = useContext(Store);

  return (
    store.searchResults.length > 0 && (
      <section className="search-results">
        {store.searchResults.map((result) => (
          <div className="search-result" key={result._id}>
            <img src={`${result.picture}`} />
            <div className="search-result-description">
              <h3>{result.name}</h3>
              <h4>{result.tags.join(", ")}</h4>
              <h4>
                {currentCurrency} {result.price}
              </h4>
            </div>
          </div>
        ))}
      </section>
    )
  );
};

module.exports = SearchResults;
