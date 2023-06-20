import * as React from "react";
import "./../assets/scss/App.scss";
import post from "../util";

import reactLogo from "./../assets/img/react_logo.svg";

const App = () => (
  <div className="app">
    <h1>Hello World!</h1>
    <p>{JSON.stringify(post)}</p>
    <img src={reactLogo} height="480" />
  </div>
);

export default App;
