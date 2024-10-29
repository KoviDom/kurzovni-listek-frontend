import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExchangeRateList from "./ExchangeRateList";
import ExchangeRateDetail from "./ExchangeRateDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExchangeRateList />} />
        <Route path="/rates/:id" element={<ExchangeRateDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
