"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import {RiBarChart2Line, RiStore3Line, RiStarLine, RiMessage3Line, RiCalendarCheckLine, RiSpeakLine, RiLogoutCircleRLine, RiArrowRightSLine, RiMenuFill,RiCloseFill} from 'react-icons/ri'

const SideBar = () => {
  const [showMenu,setShowMenu] = useState(false)
  const [showSubmenu,setShowSubmenu] = useState(false)
  return (
    <>
        <div className={`xl:h-[100vh] overflow-y-scroll fixed xl:static md:w-[40%] ls:w-[30%] xl:w-auto w-[80%] h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"} transition-all`}>
          <div>
            <h1 className='text-center text-2xl font-bold mb-10'>
              Admin<span className='text-primary text-4xl'>.</span>
            </h1>
            <ul>
              <li>
                  <Link href='' className='flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-secondary-900 transition-colors'>
                    <RiStore3Line className='text-primary'/> My Tattoo Shop
                  </Link>
              </li>
              <li>
                  <button href='' onClick={()=>setShowSubmenu(!showSubmenu)} className='w-full flex items-center justify-between gap-4 px-4 py-2 rounded-lg hover:bg-secondary-900 transition-colors'>
                    <span className='flex items-center gap-4'>
                        <RiSpeakLine className='text-primary'/> Social Histories
                    </span>
                    <RiArrowRightSLine className={`mt-1 ${showSubmenu && "rotate-90"}`}/>
                  </button>
                  <ul className={`my-2 ${!showSubmenu && "hidden"}`}>
                    <li>
                      <Link href='' className='px-4 py-2 border-l border-primary ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6px] before:top-1/2 before:-translate-y-1/2 before:border-2 before:border-secondary-100 hover:text-white transition-colors'>
                          Create Post
                      </Link>
                    </li>
                    <li>
                      <Link href='' className='px-4 py-2 border-l border-primary ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600/80 before:rounded-full before:-left-[6px] before:top-1/2 before:-translate-y-1/2 before:border-2 before:border-secondary-100 hover:text-white transition-colors'>
                          View Posts
                      </Link>
                    </li>
                  </ul>
              </li>
              <li>
                  <Link href='' className='flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-secondary-900 transition-colors'>
                    <RiBarChart2Line className='text-primary'/> Analytic
                  </Link>
              </li>
              <li>
                  <Link href='' className='flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-secondary-900 transition-colors'>
                    <RiStarLine className='text-primary'/> Reviews
                  </Link>
              </li>
              <li>
                  <Link href='' className='flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-secondary-900 transition-colors'>
                    <RiMessage3Line className='text-primary'/> Message
                  </Link>
              </li>
              <li>
                  <Link href='' className='flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-secondary-900 transition-colors'>
                    <RiCalendarCheckLine className='text-primary'/> Calendar
                  </Link>
              </li>
            </ul>
          </div>
          <nav>
              <Link href='' className='flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiLogoutCircleRLine className='text-primary'/> Logout
              </Link>
          </nav>
        </div>
        <button onClick={()=>setShowMenu(!showMenu)} className=' xl:hidden fixed bottom-4 right-4 bg-primary text-black p-4 rounded-full z-50'>
            {
              showMenu
              ?<RiCloseFill/>
              :<RiMenuFill/>
            }
        </button>
    </>
  )
}

export default SideBar