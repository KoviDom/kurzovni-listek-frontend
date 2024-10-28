import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchExchangeRates } from './api';

const ExchangeRateDetail = () => {
  const { currency } = useParams();
  const [rateDetail, setRateDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRateDetail = async () => {
      try {
        const response = await fetchExchangeRates();
        const rate = response.data.find((r) => r.currency === currency);
        if (rate) setRateDetail(rate);
        else setError('Currency not found');
        setLoading(false);
      } catch (err) {
        setError('Failed to load exchange rate detail');
        setLoading(false);
      }
    };

    getRateDetail();
  }, [currency]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!rateDetail) return null;

  return (
    <div>
      <h2>Details for {rateDetail.currency}</h2>
      <p>Rate: {rateDetail.rate}</p>
      <p>Unit: {rateDetail.unit}</p>
      <p>Country: {rateDetail.country}</p>
      <p>Move: {rateDetail.move}</p>
    </div>
  );
};

export default ExchangeRateDetail;
