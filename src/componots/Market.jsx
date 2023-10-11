import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api";
import Coins from "./Coins";
import { useEffect, useState } from "react";
import Loader from "../Pages/Loader";
import { UseData } from "../context/ContextP";

function Market() {
  const {page,setPage} = UseData()
   
    const {data,isLoading ,isError,error,refetch} = useQuery({queryFn: ()=> fetchData(page),queryKey:["coinsTable",page],keepPreviousData:true}
    )
console.log(page)
useEffect(()=>{
  refetch()

},[page])
 
 
    return (
      <div id="market" className="     my-20">
        <h1 className=" font-semibold text-3xl  text-center md:text-left text-white">
          Market Update
        </h1>
        <div className=" bg-purple-600  px-3 mt-4 hidden  text-white bg-gradient-to-r from-[#2600fc] to-[#ff00ea]  gap-32  md:grid grid-cols-4 rounded-lg py-2 ">
          <h1 className="  font-semibold text-3xl">Name</h1>
          <h1 className=" font-semibold text-3xl">Price</h1>
          <h1 className=" font-semibold text-3xl">24h Change</h1>
          <h1 className=" font-semibold text-3xl">Market Cap</h1>
        </div>
       {/* { data?.map((coin) => <Coins key={coin.id} coin={coin} />} */}
        {isLoading ? (
          <div className=" col-span-4 justify-center items-center flex">
            <Loader />
          </div>
        ) : isError ? (
          <div className=" text-3xl col-span-4 flex justify-center items-center  text-red-500">
            {" "}
            {error.message}
          </div>
        ) : (
          data?.map((coin) => <Coins key={coin.id} coin={coin} />)
        )}
        {!isError && (
          <div className=" space-x-4   text-center my-10">
            <button
              disabled={page == 1 || !data}
              onClick={() => {
                setPage((s) => s - 1);
               
              }}
              className="bg-gradient-to-r disabled:opacity-50 disabled:cursor-not-allowed from-[#2600fc] to-[#ff00ea]  hover:text-white transition-all hover:from-[#371bd3] hover:to-[#ae02a0]  px-6 py-3 rounded-full"
            >
              Prev Page
            </button>
            <button
              disabled={page === 3 || !data}
              onClick={() => {
                setPage((s) => s + 1);
               
              }}
              className="bg-gradient-to-r from-[#271396] to-[#ff00ea] disabled:opacity-50 disabled:cursor-not-allowed hover:text-white transition-all hover:from-[#371bd3] hover:to-[#ae02a0]  px-6 py-3 rounded-full"
            >
              Next Page
            </button>
          </div>
        )}
      </div>
    );
}

export default Market
