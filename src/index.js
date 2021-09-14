import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
// createRoot
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// Two Components Home,Contact

// function Home() {
//   return <div>Home Works!!!</div>;
// }
// function Contact() {
//   return <div>Contact Works!!!</div>;
// }

root.render(
  <BrowserRouter>
    <App />
    {/* <Home /> */}
    {/* <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} /> */}
  </BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
