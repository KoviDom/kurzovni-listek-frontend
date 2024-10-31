import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchExchangeRates } from './utils/api'; // funkce pro API request

const ExchangeRateList = () => {

    const [exchangeRates, setExchangeRates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getExchangeRates = async () => {
            try {
                const response = await fetchExchangeRates();
                setExchangeRates(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load exchange rates');
                setLoading(false);
            }
        };

        getExchangeRates();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Exchange Rates</h1>
            <ul>
                {exchangeRates.map((rate, index) => (
                    <li key={index + 1}>
                        <Link to={`/exchange-rate/${rate.shortName}?shortName=${rate.shortName}&validFrom=${rate.validFrom}&amount=${rate.amount}&name=${rate.name}&country=${rate.country}&move=${rate.move.toString()}&valBuy=${rate.valBuy}&valSell=${rate.valSell}&valMid=${rate.valMid}&currBuy=${rate.currBuy}&currSell=${rate.currSell}&currMid=${rate.currMid.toString()}&version=${rate.version}&cnbMid=${rate.cnbMid}&ecbMid=${rate.ecbMid}`}>
                        {rate.name} - {rate.shortName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExchangeRateList;