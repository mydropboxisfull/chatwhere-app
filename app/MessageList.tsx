"use client";

import { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../utils/fetchMessages';
import { Message } from '../typings';
import MessageComponent from './MessageComponent';
import { useEffect } from 'react';
import { clientPusher } from '../pusher';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import ReactMapGL, {Marker, Popup, ViewState} from 'react-map-gl';
import Map from 'react-map-gl';
import { useSearchParams } from 'next/navigation';
import "mapbox-gl/dist/mapbox-gl.css";



// initialMessages is a prop for page.tsx to load messages using SSR

type Props = {
  initialMessages: Message[];
 
}





function MessageList({ initialMessages }: Props) {





  const router = useSearchParams();
  let channel = router.get("channelName")
  console.log(channel)
  const { data: messages, error, mutate } = useSWR(`/api/getMessages?channelName=${router.get('channelName')}`, () => fetcher(channel)); 
  useEffect(() => {
    window.scrollTo(0,document.body.scrollHeight);
  }, [messages]);



// Map coordinates 

  let latitude = router.get("latitude");
  let longitude = router.get("longitude");
  let lat = (parseFloat(latitude));
  let long = (parseFloat(longitude));

  console.log("Lat is" + lat);
  console.log("Long is" + long);




  

// This uses Pusher to update messages in real time
useEffect(() => {
  
  const userChannelChosen = router.get("channelName") || "";
  const channel = clientPusher.subscribe(userChannelChosen);
  channel.bind("new-message", async (data: Message) => {
    
    // If you sent the message, no need to update the UI cache
    if (messages?.find((message) => message.id === data.id))
    
    return;

    
    // if no message:
    if (!userChannelChosen) {
      mutate(fetcher);
    } else {
    mutate(fetcher, {
      optimisticData: [data, ...messages!],
      rollbackOnError: true,
    });
  }
  });


  
  return () => {



 
    
    channel.unbind_all();
    channel.unsubscribe();
  }
}, [messages, mutate, clientPusher]);

  return (
    
    <div>
      


   


    <div className='z-10 space-y-5 px-5 pt-[9rem] pb-32 max-w-2xl mx-auto relative'>
    {/* // Render messages */}
    {(messages || initialMessages).map(message => (
      <MessageComponent key={message.id} message={message} />
    ))}


        


    </div>


<div className='fixed top-0 w-[100%] h-[100%] z-0 opacity-20 blur-[1px]'
>
    <ReactMapGL
        
        mapStyle='mapbox://styles/benforest/cldr5o8xa000701lceo5nxy0k'
        mapboxAccessToken={process.env.mapbox_key}
    
          initialViewState={{

            latitude: lat,
            longitude: long,
            zoom: 16,
          }}
       > 
 

     
      <Marker
      latitude={lat}
      longitude={long}
      anchor="center"
      pitchAlignment= "map"
      offset={[-55, -51]}>

      <div className='rounded-full fixed top-0 h-[6rem] w-[6rem] border-4 border-blue-300 bg-blue-400 animate-pulse opacity-5 blur-lg'></div>
     
      </Marker>


      </ReactMapGL>
      </div>

    </div>



    
  )
};

export default MessageList