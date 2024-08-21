import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <ToastContainer
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="colored"
    />
  </React.StrictMode>
);
