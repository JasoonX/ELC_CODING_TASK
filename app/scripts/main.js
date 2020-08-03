/*
 * CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";

// import { StoreContext } from "storeon/react";

import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Store from "../store/store";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: [],
    };
  }

  dispatch(action, payload) {
    switch (action) {
      case "SEARCH_RESULTS:SET":
        this.setState({ searchResults: payload });
        break;
    }
  }

  render() {
    return (
      <Store.Provider
        value={{ store: this.state, dispatch: this.dispatch.bind(this) }}
      >
        <div className="App">
          <Menu />
          <Home />
        </div>
      </Store.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
