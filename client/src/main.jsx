import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { CreateBattle, Home } from "./page";
import { GlobalContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-battle" element={<CreateBattle />} />
      </Routes>
    </GlobalContextProvider>
  </BrowserRouter>
);
