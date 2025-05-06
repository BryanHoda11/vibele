import Image from "next/image"
import { FiCornerDownLeft } from "react-icons/fi";
import { PiShareFatLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { TbMessageReport } from "react-icons/tb";

const Comments = () => {
    return (
        <>
            <div className="comment-wrapper flex flex-col gap-6">
                <div className="comment w-full sm:w-[85%] px-3 sm:px-7">
                    <div className="header flex w-full justify-between items-center">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Image width='96' height='96' className="w-[30px] h-[30px] rounded-full" src='/images/profilepic.webp' alt="profile-pic" />
                            <p className="text-sm text-gray-400 hover:text-blue-300 transition-all duration-500">Bryan_11</p>
                        </div>
                        <span className="text-sm text-gray-400 px-3">2h ago</span>
                    </div>
                    <p className="opacity-85 text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, doloribus!</p>
                    <div className="btns flex items-center gap-5">
                        <button className="flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer rounded-full"><FaRegHeart className="hover:text-pink-500 transition-all duration-500" size={15} /> <span className="max-sm:hidden">Like</span> </button>
                        <button className="flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer  rounded-full"><FiCornerDownLeft size={15} /> <span className="max-sm:hidden">10 replies</span></button>
                        <button className="flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer  rounded-full"><PiShareFatLight size={15} /> <span className="max-sm:hidden">Share</span></button>
                        <button className="flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer  rounded-full"><TbMessageReport size={15} /> <span className="max-sm:hidden">Report</span></button>
                    </div>
                </div>

                <div className="comment sm:w-[85%] px-3 sm:px-7">
                    <div className="header flex w-full justify-between items-center">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Image width='96' height='96' className="w-[30px] h-[30px] rounded-full" src='/images/profilepic.webp' alt="profile-pic" />
                            <p className="text-sm text-gray-400 hover:text-blue-300 transition-all duration-500">JamesJameson_88</p>
                        </div>
                        <span className="text-sm text-gray-400 px-3">2h ago</span>
                    </div>
                    <p className="opacity-85 text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, doloribus!</p>
                    <div className="btns flex items-center gap-5">
                        <button className="flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer rounded-full"><FaRegHeart className="hover:text-pink-500 transition-all duration-500" size={15} /> <span className="max-sm:hidden">Like</span> </button>
                        <button className="flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer  rounded-full"><FiCornerDownLeft size={15} /> <span className="max-sm:hidden">10 replies</span></button>
                        <button className="flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer  rounded-full"><PiShareFatLight size={15} /> <span className="max-sm:hidden">Share</span></button>
                        <button className="flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer  rounded-full"><TbMessageReport size={15} /> <span className="max-sm:hidden">Report</span></button>
                    </div>
                </div>

                <span className="text-center text-gray-300 cursor-pointer hover:underline">See more comments...</span>
            </div>
        </>
    )
}

export default Comments
