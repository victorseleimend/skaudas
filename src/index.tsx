import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import MainProvider from "./components/context/MainProvider";

ReactDOM.render(
  <MainProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainProvider>,
  document.getElementById("root")
);

// send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
