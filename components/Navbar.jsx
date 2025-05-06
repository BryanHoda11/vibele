"use client"
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  const [subnotification, setsubnotification] = useState(false);

  const handleSubNotification = () => {
    setsubnotification(!subnotification)
  }

  return (
    <>
      <nav className='w-full bg-[#182024] px-3 py-3 border-b-[1px] border-[#ffffff33] h-auto sticky top-0 z-20'>
        <div className="flex items-center justify-between w-full">
          <div className="logo text-2xl font-bold">Vibele</div>

          <div className="flex items-center gap-3">
            <button onClick={handleSubNotification} className="cursor-pointer relative"><IoNotifications className="hover:text-[#5390b0]" size={20} />
              {subnotification && <div className="notifications absolute z-10 right-0 top-6 bg-[#053750] px-4 py-3 rounded-lg min-w-[300px] h-auto">
                <ul className="flex flex-col gap-3 text-sm">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"></span><p><span className="hover:underline">@Bryan_11</span> just posted a video!</p></li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"></span><p><span className="hover:underline">@GauriSharma_19</span> joined a community!</p></li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"></span><p><span className="hover:underline">@Max_Austin</span> just posted a thread!</p></li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"></span><p><span className="hover:underline">@Catherine003</span> just liked a post!</p></li>
                </ul>
              </div>}
            </button>
            <button className="bg-[#11445f] hover:bg-[#06354f] text-sm transition-all duration-500 cursor-pointer px-4 py-2 rounded-lg">Log in</button>
            <button className="bg-[#11445f] hover:bg-[#06354f] text-sm transition-all duration-500 cursor-pointer px-4 py-2 rounded-lg">Get App</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
