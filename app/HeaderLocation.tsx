"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

function HeaderLocation() {

    const router = useSearchParams();
    let channelName = router.get("channelName");
    
  return (
    <div className={`${channelName ? '' : 'hidden'}ml-4 flex items-center justify-center`}>


    <header className=" z-50 bg-white flex justify-between items-center px-10 pt-0 pb-4 overflow-hidden">


    <div className='flex space-x-2'>

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 24 24" stroke-width="1.5" stroke="gray" className="basis-8 w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
    </div>

    <div>
    
    <p className='text-sm truncate w-[60%] text-gray-400'> {channelName} </p>

    </div>
    </div>
    </header>
    </div>
  )
}

export default HeaderLocation
