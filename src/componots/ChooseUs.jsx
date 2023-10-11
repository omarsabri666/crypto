import {BiWallet} from "react-icons/bi"
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsClipboardCheck, BsCurrencyBitcoin, BsFillLayersFill, BsPhone } from "react-icons/bs";
function ChooseUs() {
    return (
      <div id="chooseUs" className=" my-10">
        <div className=" text-center">
          <h1 className=" text-5xl text-white font-bold overscroll-y-none">
            WHY{" "}
            <span className=" bg-gradient-to-r from-[#271396] to-[#ff00ea] text-transparent  bg-clip-text">
              CHOOSE US
            </span>{" "}
          </h1>
        </div>
        <div className=" px-2 md:px-0 grid grid-cols-1 md:grid-cols-3 my-11  ">
          <div className=" flex  flex-col gap-10">
            <div className=" flex   gap-10 w-[100%]  items-center  border-[1px] border-[hsla(0,0%,51%,.25)]   bg-indigo-950  shadow-lg   rounded-3xl">
              <div className=" flex  px-7 mx-4    justify-center justify-self-start self-start my-4 items-center bg-gradient-to-r    w-16 rounded-2xl    h-16  from-[#271396] to-[#ff00ea]">
                <i>
                  <BiWallet size={30} color="white" />
                </i>
              </div>
              <div className=" flex flex-col gap-2 my-4">
                <h2 className=" text-white font-bold px-1 text-3xl">
                  CONNECT YOUR WALLET
                </h2>
                <p className=" text-lg text-gray-300 mb-8 mt-1 font-medium">
                  Use Trust Wallet, Metamask or to connect to the app.
                </p>
              </div>
            </div>
            <div className=" flex   gap-10 w-[100%]  items-center  border-[1px] border-[hsla(0,0%,51%,.25)]   bg-indigo-950 shadow-lg   rounded-3xl">
              <div className=" flex  px-7 mx-4    justify-center justify-self-start self-start my-4 items-center bg-gradient-to-r    w-16 rounded-2xl    h-16  from-[#271396] to-[#ff00ea]">
                <i>
                  <HiOutlinePencilAlt size={30} color="white" />
                </i>
              </div>
              <div className=" flex flex-col gap-2 my-4">
                <h2 className=" text-white font-bold px-1 text-3xl">
                  SELECT YOUR QUANTITY
                </h2>
                <p className=" text-lg text-gray-300 mb-8 mt-1 font-medium">
                  Upload your crypto and <br />
                  set a title, description and price.
                </p>
              </div>
            </div>
            <div className=" flex   gap-10 w-[100%]  items-center  border-[1px] border-[hsla(0,0%,51%,.25)]   bg-indigo-950 shadow-lg   rounded-3xl">
              <div className=" flex  px-7 mx-4    justify-center justify-self-start self-start my-4 items-center bg-gradient-to-r    w-16 rounded-2xl    h-16  from-[#271396] to-[#ff00ea]">
                <i>
                  <BsClipboardCheck size={30} color="white" />
                </i>
              </div>
              <div className=" flex flex-col gap-2 my-4">
                <h2 className=" text-white font-bold px-1 text-3xl">
                  CONFIRM TRANSACTION
                </h2>
                <p className=" text-lg text-gray-300 mb-8 mt-1 font-medium">
                  Earn by selling your crypto <br /> on our marketplace.
                </p>
              </div>
            </div>
          </div>
          <div className=" justify-center items-center flex  mx-3 row-span-3">
            <img
              src="https://coindom-crypto-search.vercel.app/static/media/choose-main.39852b7511b28d44406f.png"
              alt="hand with coins"
            />
          </div>
          <div className=" flex  flex-col gap-10">
            <div className=" flex   gap-10 w-[100%]  items-center  border-[1px] border-[hsla(0,0%,51%,.25)]   bg-indigo-950  shadow-lg   rounded-3xl">
              <div className=" flex  px-7 mx-4    justify-center justify-self-start self-start my-4 items-center bg-gradient-to-r    w-16 rounded-2xl    h-16  from-[#271396] to-[#ff00ea]">
                <i>
                  <BsPhone size={30} color="white" />
                </i>
              </div>
              <div className=" flex flex-col gap-2 my-4">
                <h2 className=" text-white font-bold px-1 text-3xl">
                  RECEIVE YOUR OWN NFTS
                </h2>
                <p className=" text-lg text-gray-300 mb-8 mt-1 font-medium">
                  Invest all your crypto at one place on one platform.
                </p>
              </div>
            </div>
            <div className=" flex   gap-10 w-[100%]  items-center  border-[1px] border-[hsla(0,0%,51%,.25)]   bg-indigo-950 shadow-lg   rounded-3xl">
              <div className=" flex  px-7 mx-4    justify-center justify-self-start self-start my-4 items-center bg-gradient-to-r    w-16 rounded-2xl    h-16  from-[#271396] to-[#ff00ea]">
                <i>
                  <BsCurrencyBitcoin size={30} color="white" />
                </i>
              </div>
              <div className=" flex flex-col gap-2 my-4">
                <h2 className=" text-white font-bold px-1 text-3xl">
                  TAKE A MARKET TO SELL
                </h2>
                <p className=" text-lg text-gray-300 mb-8 mt-1 font-medium">
                  Discover, collect the right crypto collections to buy or sell.
                </p>
              </div>
            </div>
            <div className=" flex   gap-10 w-[100%]  items-center  border-[1px] border-[hsla(0,0%,51%,.25)]   bg-indigo-950 shadow-lg   rounded-3xl">
              <div className=" flex  px-7 mx-4    justify-center justify-self-start self-start my-4 items-center bg-gradient-to-r    w-16 rounded-2xl    h-16  from-[#271396] to-[#ff00ea]">
                <i>
                  <BsFillLayersFill size={30} color="white" />
                </i>
              </div>
              <div className=" flex flex-col gap-2 my-4">
                <h2 className=" text-white font-bold px-1 text-3xl">
                  DRIVE YOUR COLLECTION
                </h2>
                <p className=" text-lg text-gray-300 mb-8 mt-1 font-medium">
                  We make it easy to Discover, Invest and manage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ChooseUs
