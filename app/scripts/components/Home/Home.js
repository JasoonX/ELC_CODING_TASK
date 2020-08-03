import React from "react";
import SearchResults from "../SearchResults/SearchResults";

const Home = () => {
  return (
    <section id="home">
      <div className="content">
        <SearchResults />
      </div>
    </section>
  );
};

module.exports = Home;
