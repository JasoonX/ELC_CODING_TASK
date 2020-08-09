/*
 * CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 */
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  // const [searchResults, setSearchResults] = useState([]);

  return (
    // <Store.Provider
    //   value={{ store: this.state, dispatch: this.dispatch.bind(this) }}
    // >
    <Provider store={store}>
      <div className="App">
        <Menu />
        <Home />
      </div>
    </Provider>
    // </Store.Provider>
  );
};

// class App extends Component {
//   dispatch(action, payload) {
//     switch (action) {
//       case "SEARCH_RESULTS:SET":
//         this.setState({ searchResults: payload });
//         break;
//       case "ERROR:SET":
//         this.setState({ error: payload });
//         break;
//     }
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <Store.Provider
//           value={{ store: this.state, dispatch: this.dispatch.bind(this) }}
//         >
//           <div className="App">
//             <Menu />
//             <Home />
//           </div>
//         </Store.Provider>
//       </Provider>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
