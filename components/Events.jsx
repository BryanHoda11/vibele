import Image from "next/image"
import { GoPlus } from "react-icons/go";

const Events = () => {
  const Events = [
    {
      p: 'Weekly Q&A Thread – A dedicated space where users can ask questions and get answers from the community or experts.'
    },
    {
      p: 'Showcase Saturday – A weekly post where users share their personal projects, creations, or achievements.'
    },
    {
      p: 'Feedback Friday – A thread where members can post content ideas and receive constructive feedback.'
    },
    {
      p: 'Resource Drop – Where members can share useful links, tools, articles, or resources they have found helpful.'
    },
    {
      p: 'Collaboration Callout – A thread where users can find collaborators or team up on projects, events, or ideas.'
    }
  ]

  const Members = [
    {
      p: 'PixelNomad42',
      followers: '100k Followers'
    },
    {
      p: 'SnackAttack9000',
      followers: '150k Followers'
    },
    {
      p: 'BookishBandit',
      followers: '1M Followers'
    },
    {
      p: 'CoolNaman890',
      followers: '32k Followers'
    },
    {
      p: 'CoolSunita91',
      followers: '2.3M Followers'
    },
  ]
  return (
    <div className='events lg:w-[20%] py-3 hidden lg:flex flex-col items-center gap-3 sticky top-0'>
      <div className="events-box bg-[#053750] px-4 py-3 rounded-lg hidden lg:flex flex-col w-[95%] h-auto">
        <h3 className="opacity-75 text-sm pb-3">UPCOMING EVENTS!</h3>

        <ul className='flex flex-col text-xs gap-3 list-disc px-3'>
          {Events.map((e) => (
            <li key={e.p}>{e.p}</li>
          ))}
        </ul>
      </div>

      <div className="events-box bg-[#053750] px-4 py-3 rounded-lg flex flex-col w-[95%] h-auto">
        <h3 className="opacity-75 text-sm pb-3">MEMBERS</h3>

        <ul className='flex flex-col text-sm gap-3 px-3'>
          {Members.map((m) => (
            <li key={m.followers} className='flex items-center w-full justify-between gap-2'>
              <div className="flex items-center gap-2">
                <Image width='96' height='96' className="w-[20px] h-[20px] rounded-full" src='/images/profilepic.webp' alt="profile-pic" />
                <div className="flex flex-col">
                  <p className="cursor-pointer hover:underline">{m.p}</p>
                  <span className="text-xs opacity-60">{m.followers}</span>
                </div>
              </div>

              <span><GoPlus size={17} className="cursor-pointer"/></span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Events
