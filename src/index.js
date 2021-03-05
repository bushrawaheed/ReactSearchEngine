import React from "react";
import ReactDOM from "react-dom";

import SearchEngine from "./SearchEngine";
function App() {
  return <SearchEngine temperature={19} />;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
