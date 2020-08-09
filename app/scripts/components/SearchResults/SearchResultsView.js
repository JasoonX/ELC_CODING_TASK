import React from "react";

const SearchResultsView = ({ currentCurrency, searchResults, status }) => {
  return (
    <>
      {searchResults.length > 0 && (
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
      {status === "loading" && <></>}
    </>
  );
};

module.exports = SearchResultsView;
