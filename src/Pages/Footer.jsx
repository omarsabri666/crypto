import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="  flex flex-col gap-5">
      <div className=" flex justify-center gap-4 items-center">
        <i>
          <AiOutlineTwitter
            className="  text-white hover:text-[#ff00ea] cursor-pointer transition-all "
            size={30}
          />
        </i>
        <i>
          <BsDiscord
            className="  text-white hover:text-[#ff00ea] cursor-pointer transition-all "
            size={30}
          />
        </i>
        <i>
          <FaFacebookF
            className="  text-white hover:text-[#ff00ea] cursor-pointer transition-all "
            size={30}
          />
        </i>
        <i>
          <AiFillYoutube
            className="  text-white hover:text-[#ff00ea] cursor-pointer transition-all "
            size={30}
          />
        </i>
      </div>
      <div className=" flex my-5  gap-5 justify-center">
        <h3 className=" cursor-pointer text-white text-2xl font-semibold  hover:bg-gradient-to-r hover:from-[#2600fc] hover:to-[#ff00ea]  hover:text-transparent hover:bg-clip-text">
          Privacy
        </h3>
        <h3 className="  cursor-pointer text-white text-2xl font-semibold  hover:bg-gradient-to-r hover:from-[#2600fc] hover:to-[#ff00ea]  hover:text-transparent hover:bg-clip-text ">
          Terms of Use
        </h3>
      </div>

      {/* <img
        src="https://img.freepik.com/premium-photo/bitcoin-box_863013-79793.jpg"
        alt=""
      />
      <div></div>
      <img src="" alt="" /> */}
    </footer>
  );
}

export default Footer
