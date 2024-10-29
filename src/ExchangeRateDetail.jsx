import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ExchangeRateDetail = () => {

  const { id } = useParams();
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/exchangerates/${id}`)
      .then(response => setExchangeRate(response.data))
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <div className="alert alert-danger">Chyba: {error}</div>;
  }

  if (!exchangeRate) return <p>Loading...</p>;

  return (
    <div>
      <h2>{exchangeRate.name} ({exchangeRate.shortName})</h2>
      <p>Country: {exchangeRate.country}</p>
      <p>Valid From: {exchangeRate.validFrom}</p>
      <p>Amount: {exchangeRate.amount}</p>
      <p>ValBuy: {exchangeRate.valbuy}</p>
      <p>ValSell: {exchangeRate.valsell}</p>
      <p>Current Buy Rate: {exchangeRate.currBuy}</p>
      <p>Current Sell Rate: {exchangeRate.currSell}</p>
      <p>Current Mid Rate: {exchangeRate.currMid}</p>
      <p>Version: {exchangeRate.version}</p>
      <p>CnbMid: {exchangeRate.cnbMid}</p>
      <p>EcbMid: {exchangeRate.ecbMid}</p>
    </div>
  );
};

export default ExchangeRateDetail;
