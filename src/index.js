import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const codeInfo = {
  name: "ken",
  age: 25,
};

const codeContext = createContext(codeInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <codeContext.Provider value={codeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </codeContext.Provider>
);

export default codeContext;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
