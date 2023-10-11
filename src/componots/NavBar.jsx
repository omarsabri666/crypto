import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {AiOutlineMenu, AiOutlineTwitter} from "react-icons/ai"
import { BsDiscord } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function NavBar() {
  
    const navA = [{
        name : "Home",
        h : "#home",
        id:1,
    },
{
    name : "Market",
    h:"#market",
    id:2
},{
    name : "Choose Us",
    h:"#chooseUs",
    id:3,
},{
    name : "Join",
    h:"#join",
    id:4
}]
const [toggle,setToggle] = useState(false)
toggle
  ? (document.body.style.overflow = "hidden")
  : (document.body.style.overflow = "auto");
    return (
      <>
        <nav className=" md:flex justify-between  hidden     items-center">
          <NavLink
            to="home"
            className=" text-3xl hover:bg-gradient-to-r   text-white  font-bold hover:from-[#2600fc] hover:to-[#ff00ea]  hover:text-transparent hover:bg-clip-text transition-all "
          >
            CryptoWizard
          </NavLink>
          <ul className="  text-white pr-10 flex gap-20">
            {navA.map((link) => (
              <li key={link.id}>
                <a
                  className=" hover:bg-gradient-to-r  text-xl  font-semibold hover:from-[#2600fc] hover:to-[#ff00ea]  hover:text-transparent hover:bg-clip-text transition-all"
                  href={link.h}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className=" flex  text-white    gap-6 items-center">
            <div className=" text-white  ">
              <AiOutlineTwitter
                className="  hover:text-[#ff00ea] cursor-pointer transition-all "
                size={30}
              />
            </div>
            <BsDiscord
              className=" hover:text-[#ff00ea] cursor-pointer transition-all "
              size={30}
            />
          </div>
        </nav>
        <header className="    sticky top-0 ">
          <nav className=" md:hidden justify-around  flex     gap-8    shadow-lg z-20  items-center">
            <NavLink
              to="home"
              className=" text-3xl hover:bg-gradient-to-r   text-white  font-bold hover:from-[#2600fc] hover:to-[#ff00ea]  hover:text-transparent hover:bg-clip-text transition-all "
            >
              CryptoWizard
            </NavLink>
            <div className=" flex items-center gap-6">
              <div className=" text-white  ">
                <AiOutlineTwitter
                  className="  hover:text-[#ff00ea] cursor-pointer transition-all "
                  size={30}
                />
              </div>
              <BsDiscord
                className="  text-white hover:text-[#ff00ea] cursor-pointer transition-all "
                size={30}
              />

              <button
                onClick={() => setToggle(true)}
                className=" text-white text-3xl"
              >
                <AiOutlineMenu />
              </button>
            </div>
            <AnimatePresence>
              {toggle && (
                <>
                  {" "}
                  <motion.ul
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    exit={{ x: 1000 }}
                    className="  -top-5 -right-1 z-20 text-black           flex justify-start items-center flex-col absolute bg-white w-[101vw] h-[101vh] gap-20"
                  >
                    <button
                      onClick={() => setToggle(false)}
                      className=" text-6xl self-end px-3 text-black"
                    >
                      &times;
                    </button>
                    {navA.map((link) => (
                      <li className="" key={link.id}>
                        <a
                          onClick={() => setToggle(false)}
                          className=" hover:bg-gradient-to-r  text-3xl  font-bold hover:from-[#2600fc] hover:to-[#ff00ea]  hover:text-transparent hover:bg-clip-text transition-all"
                          href={link.h}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                </>
              )}
            </AnimatePresence>
          </nav>
        </header>
      </>
    );
}

export default NavBar
