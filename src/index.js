import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import SingersList from "./SingersList";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SingersList />
    </div>
  );
}


ReactDOM.render(<App />,
  document.getElementById("root"));
