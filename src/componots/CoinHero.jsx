import { useNavigate } from "react-router";
import { formatPrice } from "../api";

function CoinHero({coin}) {
    const navigate = useNavigate()
    function handleNavigate(){
        navigate(`/home/${coin.id}`);
    }
  
    return (
      <div>
        <div  onClick={handleNavigate}  className=" flex flex-col cursor-pointer   gap-1 items-center">
          <img width={70} height={70} src={coin.image} alt="" />
          <div className=" text-white gap-2 flex items-center">
            <h1 className=" text-2xl font-semibold">{coin.name}</h1>
            <h2
              className={` ${
                coin.price_change_percentage_24h < 0
                  ? "text-red-500 "
                  : coin.price_change_percentage_24h === 0
                  ? "text-white"
                  : " text-green-600"
              } text-2xl  font-semibold`}
            >
              {coin.price_change_percentage_24h.toFixed(3)}%
            </h2>
          </div>
          <h2 className=" text-2xl text-white font-semibold">
            {formatPrice(coin.market_cap)}
          </h2>
        </div>
      </div>
    );
}

export default CoinHero
