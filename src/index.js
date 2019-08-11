import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="App">
      <ProgressBar steps={5} current={2} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
