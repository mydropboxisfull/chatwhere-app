import React from 'react'
import LogoutButton from './LogoutButton';
import Link from 'next/link'
import { getServerSession } from 'next-auth';
import HeaderLocation from './HeaderLocation';
import { useRouter } from 'next/navigation';



async function Header() {

  

const session = await getServerSession();


if (session) return (
  <div className='fixed z-20 top-0 w-[100%]'>

 
  <header className=' z-50 bg-[#171717] flex justify-between items-center p-10 '>
  <div className='flex space-x-2'>
  <img className="w-14 object-contain cursor-pointer h-10 mt-1"
        src="/pin.png"
        alt=""
        />
    <div>
      <p className='text-[#61dca1]' >Logged in as:</p>
      <p className='font-bold text-lg text-white'>{session.user?.name}</p>
    </div>

  </div>
  <div className='flex space-x-2'>


  <Link href="/" >

    <button className='bg-[#0fa9ee] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
    <div className='flex space-x-2'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="basis-8 w-5 h5 pr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
      Search
      </div>
      
      </button>
      </Link>

  <LogoutButton/>



  



  </div>

  </header>
  {/* <div className=''>


  
<HeaderLocation/>
</div> */}
  </div>
  
)

  return (
    <header className='fixed top-0 z-50 bg-[#09090b] flex justify-center items-center p-10 shadow-sm '>
      <div className='flex flex-col items-center space-y-5'>
        <div className='flex space-x-2 items-center'>
        <img className="w-14 object-contain cursor-pointer"
        src="/pin.png"
        alt=""
        />
        <p className='text-blue-400' >Welcome to BestChat</p>
        </div>
        <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' href="/auth/signin">Sign in</Link>

      </div>

    </header>
  )
}

export default Header
