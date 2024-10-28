const { useState, useEffect } = require("react")
import { Link } from 'react-router-dom';
import { fetchExchangeRates } from './api'; // Načti funkci pro API request

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
                {exchangeRates.map((rate) => (
                    <li key={rate.currency}>
                        <Link to={`/rates/${rate.currency}`}>
                            {rate.currency} - {rate.rate} {rate.unit}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExchangeRateList;