import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import "./assets/scss/main.scss";
import "./assets/scss/header.scss";
import "./assets/scss/asidebar.scss";
import "./assets/scss/footer.scss";
import "./assets/js/script.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
