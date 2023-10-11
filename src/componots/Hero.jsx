import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api";
import CoinHero from "./CoinHero";
import Loader from "../Pages/Loader";

function Hero() {
  const {data,isLoading,isError,error}  = useQuery({queryFn:fetchData,queryKey:["coinsHero"]})


  
  
    return (
      <div className=" h-screen md:h-auto justify-center md:justify-start flex flex-col">
        <div className="  flex justify-between   items-center  my-20 ">
          <img
            style={{ animationDuration: "2s" }}
            className=" animate-bounce  hidden md:flex "
            width={50}
            height={50}
            src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png"
            alt="logo"
          />
          <div className=" text-center">
            <h1 className="sm:text-8xl   text-6xl    font-semibold text-white  text-center">
              TRACK AND TRADE{" "}
              <span className="bg-gradient-to-r from-[#2600fc] to-[#ff00ea]  text-transparent bg-clip-text">
                CRYPTO CURRENCIES
              </span>
            </h1>
          </div>
          <img
            style={{ animationDuration: "2s" }}
            className=" animate-bounce  hidden md:flex "
            width={50}
            height={50}
            src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png"
            alt="logo"
          />
        </div>

        <div className=" justify-around hidden   md:flex">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <div className=" hidden md:flex text-3xl   justify-center items-center  text-red-500">
              {" "}
              {error.message}
            </div>
          ) : (
            data
              ?.slice(0, 4)
              .map((coin) => <CoinHero key={coin.id} coin={coin} />)
          )}
        </div>
        <div className="  text-center flex justify-center items-center">
          <a
            href="#market"
            className="    md:hidden   text-white my-5  font-semibold  text-2xl  px-10 py-4 rounded-full  bg-gradient-to-r from-[#2600fc] to-[#ff00ea]"
          >
            see Prices
          </a>
        </div>
      </div>
    );
}

export default Hero
