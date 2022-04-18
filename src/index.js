import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionInfo from "./components/SectionInfo";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="Model-S"
            element={
              <SectionInfo
                title="Model S"
                description="Plaid"
                info={["396 mi", "1.99 s", "200 mph", "1,020 hp"]}
                infoDescription={[
                  "Range (EPA est.)",
                  "0-60 mph",
                  "Top Speed",
                  "Peak Power",
                ]}
                backgroundImage="model-s.jpg"
              />
            }
          ></Route>
          <Route
            path="/Model-3"
            element={
              <SectionInfo
                title="Model 3"
                info={["3.1 s", "358 mi", "AWD"]}
                infoDescription={["0-60 mph", "Range (EPA est.)", "Dual Motor"]}
                backgroundImage="model-3.jpg"
              />
            }
          ></Route>
          <Route
            path="/Model-X"
            element={
              <SectionInfo
                title="Model X"
                description="Plaid"
                info={["333 mi", "2.5 s", "9.9 s", "1,020 hp"]}
                infoDescription={[
                  "Range (EPA est.)",
                  "0-60 mph",
                  "1/4 Mile",
                  "Peak Power",
                ]}
                backgroundImage="model-x.jpg"
              />
            }
          ></Route>
          <Route
            path="/Model-Y"
            element={
              <SectionInfo
                title="Model Y"
                info={["76 cu ft", "330 mi", "AWD"]}
                infoDescription={[
                  "Cargo Space",
                  "Range (EPA est.)",
                  "Dual Motor",
                ]}
                backgroundImage="model-y.jpg"
              />
            }
          ></Route>
          <Route path="/Solar-Roof" element={<SectionInfo />}></Route>
          <Route path="/Solar-Panels" element={<SectionInfo />}></Route>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
