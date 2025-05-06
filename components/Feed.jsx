import Image from "next/image"
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import { IoBookmarkSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import Comments from "./Comments";

const Feed = () => {
  const Posts = [
    {
      username: 'Bryan_11',
      time: '4 days ago',
      caption: 'My car was stolen; i got it back and this stuff was in it throughout the car—what is it?',
      img: '/images/sedan.webp',
      likes: '1.4k'
    },
    {
      username: 'CrazyDude87',
      time: '7 days ago',
      caption: 'This dog is being injected but I am not the owner, what I should do?',
      img: '/images/dogpic.webp',
      likes: '35k'
    },
    {
      username: 'Businessguy_101',
      time: '1 month ago',
      caption: 'Building a Rubber powered Plane!',
      img: '/images/rubberbandplane.webp',
      likes: '990k'
    },
  ]
  return (
    <div className='feed px-2 sm:px-5 py-3 w-full lg:w-[60%] overflow-y-scroll'>
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl font-semibold">FEED</h1>

        <div className="addpost flex items-center gap-2 cursor-pointer">Add Your Post<GoPlus size={17} className="cursor-pointer" /></div>
      </div>

      {Posts.map((p) => (
        <div key={p.username} className="post w-full overflow-hidden sm:min-w-[500px] h-auto mx-auto my-4 py-5 px-3 border-[1px] border-[#ffffff33] rounded-lg">

          <div className="header flex w-full justify-between items-center">
            <div className="flex max-sm:flex-col items-center gap-2 cursor-pointer">
              <div className="user flex gap-2 items-center">
                <Image width='96' height='96' className="w-[30px] h-[30px] rounded-full" src='/images/profilepic.webp' alt="profile-pic" />
                <p className="text-sm text-gray-400 hover:text-blue-300 transition-all duration-500">{p.username}</p>
              </div>
              <span className="text-xs sm:text-sm text-gray-400 sm:px-3">{p.time}</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <button className="bg-[#11445f] hover:bg-[#06354f] w-fit text-xs transition-all duration-500 cursor-pointer px-4 py-2 rounded-lg">Join</button>
              <HiDotsHorizontal />
            </div>
          </div>

          <div className="info flex flex-col gap-2 py-3">
            <p className="text-md sm:text-xl font-semibold">{p.caption}</p>
            <Image width={600} height={400} className="w-full sm:max-w-[600px] object-cover mx-auto h-auto rounded-lg" src={p.img} alt="sedan" />
          </div>

          <div className="buttons flex flex-wrap items-center justify-between gap-3 mt-3">
            <div className="btns flex items-center gap-2">
              <button className="bg-[#11445f] hover:bg-[#06354f] flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer px-4 py-2 rounded-full"><IoMdThumbsUp className="hover:text-green-500 transition-all duration-500" size={20} /> <span>{p.likes}</span></button>
              <button className="bg-[#11445f] hover:bg-[#06354f] w-fit text-xs transition-all duration-500 cursor-pointer px-4 py-2 rounded-full"><IoMdThumbsDown className="hover:text-red-500 transition-all duration-500" size={20} /></button>
              <button className="bg-[#11445f] hover:bg-[#06354f] flex items-center gap-1 w-fit text-xs transition-all duration-500 cursor-pointer px-4 py-2 rounded-full"><FaComment size={20} /> <span>103</span></button>
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-[#11445f] hover:bg-[#06354f] w-fit text-xs transition-all duration-500 cursor-pointer px-4 py-2 rounded-full"><PiShareFatFill size={20} /></button>
              <button className="bg-[#11445f] hover:bg-[#06354f] w-fit text-xs transition-all duration-500 cursor-pointer px-4 py-2 rounded-full"><IoBookmarkSharp size={20} /></button>
            </div>
          </div>

          <div className="comments mt-5">
            <h3 className="text-lg font-semibold pb-3">Comments</h3>

            <Comments />
          </div>
        </div>
      ))}

    </div>
  )
}

export default Feed
