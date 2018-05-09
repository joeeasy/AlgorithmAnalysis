import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, hashHistory } from "react-router-dom";
import  AppRouter  from "./routes/AppRouter";


const App = () => (
  <BrowserRouter history={hashHistory}>
    <AppRouter />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("root"));
