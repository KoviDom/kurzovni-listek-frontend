import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const ExchangeRateDetail = () => {

  const { id } = useParams();
  console.log(id);
  const [searchParams] = useSearchParams();
  const shortName = searchParams.get("shortName");
  const validFrom = searchParams.get("validFrom");
  const name = searchParams.get("name");
  const country = searchParams.get("country");
  const move = searchParams.get("move");
  const amount = searchParams.get("amount");
  const valBuy = searchParams.get("valBuy");
  const valSell = searchParams.get("valSell");
  const valMid = searchParams.get("valMid");
  const currBuy = searchParams.get("currBuy");
  const currSell = searchParams.get("currSell");
  const currMid = searchParams.get("currMid");
  const version = searchParams.get("version");
  const cnbMid = searchParams.get("cnbMid");
  const ecbMid = searchParams.get("ecbMid");

  return (
    <div className="container">
      <h2>{name} ({shortName})</h2>
      <p>Country: {country}</p>
      <p>Valid From: {validFrom}</p>
      <p>Amount: {amount}</p>
      <p>Move: {move}</p>
      <p>ValBuy: {valBuy}</p>
      <p>ValSell: {valSell}</p>
      <p>ValMid: {valMid}</p>
      <p>Current Buy Rate: {currBuy}</p>
      <p>Current Sell Rate: {currSell}</p>
      <p>Current Mid Rate: {currMid}</p>
      <p>Version: {version}</p>
      <p>CnbMid: {cnbMid}</p>
      <p>EcbMid: {ecbMid}</p>
      <Link to="/" className="btn btn-primary">Zpět</Link>
    </div>
  );
};

export default ExchangeRateDetail;
