"use client"

import { GoHomeFill } from "react-icons/go";
import { BiTrendingUp } from "react-icons/bi";
import { MdEventNote } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";
import { HiMiniCpuChip } from "react-icons/hi2";
import { PiFilmSlate } from "react-icons/pi";
import { TbBusinessplan } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { IoHeadsetSharp } from "react-icons/io5";
import { FaPlane } from "react-icons/fa";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { IoHelpCircle } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoIosThumbsUp } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='sidebar custom-scrollbar sticky top-0 hidden xl:flex flex-col overflow-y-scroll border-r-[1px] border-[#ffffff33]'>
      <ul className="flex flex-col gap-2 mx-5 my-3">
        <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><GoHomeFill /> Home</li>
        <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><BiTrendingUp /> Popular</li>
        <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><MdEventNote /> Events</li>
      </ul>

      <hr className="my-sm border-[1px] w-[85%] mx-auto my-3 border-[#75747433]" />

      <div className="mx-5 my-3 flex flex-col gap-2">
        <h3 className="text-gray-500 opacity-85 text-sm font-bold pb-3">GENRE</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><IoGameController /> Games</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><FaQuestion /> Q&As</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><HiMiniCpuChip /> Technology</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><PiFilmSlate /> Movies</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><FaQuestion /> Q&As</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><TbBusinessplan /> Business</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><ImSpoonKnife /> Food & Drinks</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><IoHeadsetSharp /> Music</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><FaPlane /> Places & Travel</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><MdOutlineSportsBaseball /> Sports</li>
        </ul>
      </div>

      <hr className="my-sm border-[1px] w-[85%] mx-auto my-3 border-[#75747433]" />

      <div className="mx-5 my-3 flex flex-col gap-2">
        <h3 className="text-gray-500 opacity-85 text-sm font-bold pb-3">RESOURCES</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><IoIosInformationCircle /> About Vibele</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><IoHelpCircle /> Help</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><IoBookSharp /> Blogs</li>
          <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><BsPersonWorkspace /> Careers</li>
        </ul>
      </div>

      <hr className="my-sm border-[1px] w-[85%] mx-auto my-3 border-[#75747433]" />

      <ul className="flex flex-col gap-2 mx-5 my-3">
        <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><RiUserCommunityFill /> Communities</li>
        <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><IoMdSettings /> Settings</li>
        <li className="flex items-center px-3 py-2 rounded-lg gap-2 cursor-pointer hover:bg-[#24353d]"><IoIosThumbsUp /> Best of Vibele</li>
      </ul>

    </div>
  )
}

export default Sidebar
