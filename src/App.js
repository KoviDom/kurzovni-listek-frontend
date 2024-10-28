import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import ExchangeRateList from "./ExchangeRateList";
import ExchangeRateDetail from "./ExchangeRateDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExchangeRateList />} />
        <Route path="/rates/:currency" element={<ExchangeRateDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
