import { useNavigate } from "react-router";
import { formatPrice } from "../api";

function Coins({coin}) {
    
     const navigate = useNavigate();
     function handleNavigate() {
       navigate(`/home/${coin.id}`);
     }

    return (
      <>
        <div
          onClick={handleNavigate}
          className="  hidden  hover:bg-blue-950 transition-all cursor-pointer   h-20 items-center   gap-24  border-b-2 border-white   md:grid grid-cols-4 text-white px-3"
        >
          <h1 className=" text-2xl  font-semibold flex items-center gap-2 ">
            <span>
              <img
                width={40}
                height={40}
                src={coin.image}
                alt={`${coin.name} logo`}
              />
            </span>
            {coin.name}
          </h1>
          <h1 className=" text-2xl  font-semibold">
            {formatPrice(coin.current_price)}
          </h1>
          <h1
            className={` ${
              coin.price_change_percentage_24h < 0
                ? "text-red-500 "
                : coin.price_change_percentage_24h === 0
                ? "text-white"
                : " text-green-600"
            } text-2xl  font-semibold  ml-20`}
          >
            {coin.price_change_percentage_24h.toFixed(3)}%
          </h1>
          <h1 className=" text-2xl ml-10  font-semibold">
            {formatPrice(coin.market_cap)}
          </h1>
        </div>
        <div
          onClick={handleNavigate}
          className="  my-5  flex flex-col  flex-wrap  hover:bg-blue-950 transition-all cursor-pointer        gap-10  border-b-2 border-white   md:hidden grid-cols-1 text-white px-3"
        >
          <div className=" flex flex-col gap-4 ">
            <div className=" text-2xl  font-semibold flex items-center gap-2 ">
              <span>
                <img
                  width={40}
                  height={40}
                  src={coin.image}
                  alt={`${coin.name} logo`}
                />
              </span>
              <h3>{coin.name}</h3>
            </div>
            <h1 className=" text-2xl flex items-center   font-semibold">
              <span className=" text-white">Price : </span> {formatPrice(coin.current_price)}
            </h1>
            <h1
              className={` ${
                coin.price_change_percentage_24h < 0
                  ? "text-red-500 "
                  : coin.price_change_percentage_24h === 0
                  ? "text-white"
                  : " text-green-600"
              } text-2xl  font-semibold  `}
            >
              <span className=" text-white ">24h change : </span> {coin.price_change_percentage_24h.toFixed(3)}%
            </h1>
            <h1 className=" text-2xl   font-semibold">
             <span>Market Cap :</span> {formatPrice(coin.market_cap)}
            </h1>
          </div>
        </div>
      </>
    );
}

export default Coins
