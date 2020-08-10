import React from "react";
import { CircleLoader } from "react-spinners";
const SearchResultsView = ({
  currentCurrency,
  searchResults,
  searchStatus,
  touched,
  showSearch,
}) => {
  return (
    showSearch && (
      <>
        {searchResults.length > 0 && searchStatus !== "loading" && (
          <section className="search-results">
            {searchResults.map((result) => (
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
        )}
        {searchStatus === "loading" && (
          <div classname="search-results-loader">
            <CircleLoader size={150} />
          </div>
        )}
        {searchResults.length === 0 && searchStatus !== "loading" && touched && (
          <>
            <h1>No results found</h1>
          </>
        )}
      </>
    )
  );
};

export default SearchResultsView;
