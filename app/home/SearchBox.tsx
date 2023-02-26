"use client"

import { useState } from 'react'
import UseInput from "./UseInput";
import { useRouter } from 'next/navigation';
import Typewriter from './Typewriter'








const SearchBox = () => {
  const words = ['Walmart Tennessee 3950 Austin P...', 'Publix Florida 10500 Ulmerto...', 'Target Minnesota 900 Nicollet...', 'Best Buy North Dakota 2800 S...', 'Olive Garden Virginia 1603 W...', 'Taco Bell California 1234 Elm St...'];

  
  const router = useRouter();
  const address = UseInput("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  
  
  
  const handleUserLocSelected = async (userPicks) => {

    address.setValue(userPicks.place_name);
    address.setSuggestions([]);
    let userLocSelected = [userPicks.place_name, userPicks.center[0], userPicks.center[1]];
    console.log(userLocSelected);

    const channelName = (userLocSelected[0]);
    const latitude = (userLocSelected[2]).toFixed(4);
    const longitude = (userLocSelected[1]).toFixed(4);

    router.push(`/auth/signin?channelName=${channelName}&latitude=${latitude}&longitude=${longitude}`);
          // router.push(`/auth/signin`);

    // try {
    //   router.push(`/`);
    // } catch (error) {
    //   console.error("THE ERRORRRR" + error);


    // };
    
    // router.push(`/auth/signin/?channelName=${channelName}&latitude=${latitude}&longitude=${longitude}`);

    






  };

  return (

    <div>


{!isInputFocused && <Typewriter words={words} />}

    
    <div className='mb-20 mx-10 bg-gray-400 rounded-full'>
      <div className='flex'>
        <div className='ml-2 mt-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        </div>



        <input className='bg-gray-400 rounded-full py-3 w-full px-2 text-truncate overflow-hidden  focus:outline-none'
          placeholder="Where do you work?..."
          {...address}
          isTyping={address.value !== ""}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />

        {/* <button type="submit" href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 scale-[.9]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
        </button> */}

      </div>
      <div>
      {address.suggestions?.length > 0 && (
        <div className='bg-gray-400 px-2 pb-3 w-full pt-20 mt-[-3rem] rounded-t-md'>
          {address.suggestions.map((suggestion, index) => {
            return (
              <div className='py-1 flex'
                key={index}
                onClick={() => handleUserLocSelected(suggestion)}
              >
                <div className='basis-4 px-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="basis-8 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>

                </div>
                <p className='truncate overflow-hidden'>{suggestion.place_name}</p>
              </div>
            );
          })}
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default SearchBox;