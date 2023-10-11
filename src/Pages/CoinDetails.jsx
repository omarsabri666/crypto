import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { formatPrice, getId } from "../api";
import Loader from "./Loader";

function CoinDetails() {
    const {id} = useParams()
    const {data,isLoading} = useQuery({
        queryFn : ()=> getId(id),
        queryKey : ["coinDetails",id]
    })
    if(isLoading) return <Loader/>
    console.log(data)
   
    return (
      <div className=" grid grid-cols-1 md:grid-cols-3 my-20">
        <div className=" flex flex-col md:flex-row  h-64 md:h-auto  md:justify-around ">
          <div className=" flex flex-col md:gap-5  gap-2 items-center">
            <img
              width={100}
              height={100}
              src={data?.image.large}
              alt={`${data?.name}img`}
            />
            <h1 className=" text-white font-semibold text-3xl">{data?.name}</h1>
            <h1 className=" text-white text-3xl">
              {" "}
              Rank : #{data?.market_cap_rank}
            </h1>
          </div>
          <div className="  md:justify-end md:justify-self-end md:self-end bg-white w-[1px]  mb-36 h-80"></div>
        </div>
        <div className=" md:col-span-2 col-span-1 text-center md:text-left flex flex-col">
          <div className=" flex  flex-col md:flex-row justify-around">
            <h2
              className={` text-3xl font-semibold ${
                data?.market_data.price_change_percentage_24h < 0
                  ? " text-red-500"
                  : " text-green-500"
              }`}
            >
              <span className=" text-white font-semibold text-3xl">
                24h Change :{" "}
              </span>{" "}
              {+data?.market_data.price_change_percentage_24h.toFixed(2)}%
            </h2>
            <h2 className=" text-green-500  font-semibold text-3xl">
              {" "}
              <span className=" text-white text-3xl font-semibold">
                Price:{" "}
              </span>
              {formatPrice(data?.market_data.current_price.usd)}
            </h2>
            <h2 className="text-white text-3xl font-semibold">
              <span className=" text-white text-3xl font-semibold">
                Symbol:{" "}
              </span>
              {data?.symbol}
            </h2>
          </div>
          <div
            style={{ maxHeight: "300px", overflowY: "scroll" }}
            className="  my-10   text-white "
          >
            <p
              className="  text-lg   speicaltext"
              dangerouslySetInnerHTML={{ __html: data?.description.en }}
            ></p>
          </div>
        </div>
      </div>
    );
}

export default CoinDetails
