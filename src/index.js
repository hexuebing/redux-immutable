import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import ParentComponent from "./parentComponent";
import ChildComponent from "./childComponent";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ImmutableJS @ Cloudnweb</h1>
        <ParentComponent />
        <ChildComponent />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
