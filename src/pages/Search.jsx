import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { GrApps } from "react-icons/gr";
import { LuFlaskConical } from "react-icons/lu";
import { FaArrowRight, FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Search() {
  const [searchItems, setSearchItems] = useState("");
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
    const navigate = useNavigate();

  const handleClick = (e) => {
    setSearchItems(e.target.value);
  };
  const handleProfile = () => {
    setOpen((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
    navigate(`/search?query=${searchItems}`);
    }
  };
  const handleSearch = () => {
    navigate(`/search?query=${type}`);
  };
  const handleBoard = ()=>{
    navigate(`/dashboard`)
  }
  return (
    <div className="h-screen ">
      <div className="flex justify-end  gap-8  items-center p-4 bg-gray-100">
        <span>Gmail</span>
        <span>Images</span>
        <LuFlaskConical className="text-xl" />
        <GrApps className="text-xl" />

        <div
          className="bg-stone-600 h-10 w-10 rounded-full flex justify-center items-center p-3 cursor-pointer"
          onClick={handleProfile}
        >
          S
        </div>
        {open && (
          <div className="border  w-70 bg-gray-200 absolute right-6 top-20 p-6 flex flex-col gap-4 ">
            <div className="flex items-center gap-2 ">
              <div className="bg-stone-600 h-12 w-12 rounded-full flex justify-center items-center text-white font-bold">
                S
              </div>
              <div>
                <p className="font-semibold">Sumit</p>
                <p className="text-sm text-gray-500 hover:text-blue-400">
                  sumitpoudel123@gmail.com
                </p>
              </div>
            </div>
            <hr />
            <div className="flex flex-row gap-6">
              <button className=" flex flex-row justify-center items-center gap-2 cursor-pointer">
                <FaPlus />
                Add Account
              </button>
              <button className=" flex flex-row justify-center items-center gap-2 cursor-pointer">
                Logout <FaArrowRight />
              </button>
            </div>
            <div className="flex justify-center">
              <span><button className="border bg-blue-500 text-xl text-white p-2 hover:bg-blue-800 rounded-xl" onClick={handleBoard}>DashBoard</button></span></div>
          </div>
        )}
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            className="transform scale-100 mb-4"
            alt="Google Logo"
          />
          
          <div className="h-14 w-[700px] border-1 rounded-full flex justify-start items-center p-6 text-black">
           
            <FaSearch className="text-gray-500 text-2xl" onChange={handleClick} onClick={handleSearch} value={type}/>
            <input
              type="text"
              placeholder="Search Google or type a URL"
              value={searchItems}
              onChange={handleClick}
              onKeyDown={handleKeyDown}
              className="ml-10 w-full outline-none bg-transparent text-black"
            />
       
            <img
              src="https://www.gstatic.com/images/icons/material/system_gm/1x/mic_gm_blue_24dp.png"
              alt="Voice Search"
              className="h-6 w-6 cursor-pointer mr-3"
            />
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3b/7b/de/3b7bde0f-3a08-1787-ba21-81ceb31f155d/AppIcon-0-0-1x_U007ephone-0-11-0-85-220.png/1200x600wa.png"
              alt="Google Lens"
              className=" h-10 w-20 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
