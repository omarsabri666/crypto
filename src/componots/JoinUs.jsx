function JoinUs() {
    return (
      <div className=" my-20 flex items-center justify-around" id="join">
        <img
          style={{ animationDuration: "2s" }}
          className=" animate-bounce  hidden md:block "
          width={100}
          height={100}
          src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png"
          alt="logo"
        />

        <div className=" text-center ">
          <h1 className="  text-white flex flex-col gap-2 font-bold  text-6xl sm:text-8xl">
            JOIN US VIA{" "}
            <span className=" bg-gradient-to-r from-[#2600fc] to-[#ff00ea]  text-transparent bg-clip-text ">
              DISCORD
            </span>
          </h1>
          <p className=" px-2 md:px-0  text-white text-lg font-semibold my-7">
            Invest and manage all your crypto at one place.
          </p>
          <a
            href="https://discord.com/"
            className=" text-white my-5  font-bold  text-lg  px-7 py-3 rounded-full  bg-gradient-to-r from-[#2600fc] to-[#ff00ea] "
          >
            Join Via Discord
          </a>
        </div>
        <img
          style={{ animationDuration: "2s" }}
          className=" animate-bounce  hidden md:block "
          width={100}
          height={100}
          src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png"
          alt="logo"
        />
      </div>
    );
}

export default JoinUs
