// index.js or index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Import Ant Design styles (choose one based on your Ant Design version)
// import 'antd/dist/antd.css';  // If using Ant Design v4
import "antd/dist/reset.css"; // If using Ant Design v5
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as any);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
