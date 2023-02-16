'use client'
import { useState, FormEvent } from "react";
import { v4 as uuid } from 'uuid';
import { Message } from "../typings";
import useSWR from 'swr'
import fetcher from "../utils/fetchMessages";
import { getServerSession } from 'next-auth/next';
import { useSearchParams } from 'next/navigation';


// ?
type Props = {
session: Awaited<ReturnType<typeof getServerSession>>;
};

// takes username and scrambles it. can be unscrambled if neccessary
function scrambleName(name) {
    let result = '';
    for (let i = 0; i < name.length; i++) {
      let letter = name.charAt(i).toUpperCase();
      if (letter >= 'A' && letter <= 'Z') {
        result += (letter.charCodeAt(0) - 64) * 454345;
      }
    }
  
    result = result.toString().slice(0, 6);
    return "user: " + result;
  }



  
function ChatInput({ session }: Props) {

    const router = useSearchParams();

    // Function to change the input field to what user types
    const [input, setInput] = useState("");
      let channel = router.get("channelName")
  // const { data: messages, error, mutate } = useSWR<Message[]>(channel); 

    const { data: messages, error, mutate } = useSWR(`/api/getMessages?channelName=${router.get('channelName')}`, () => fetcher(channel)); 

    console.log(messages);
    
    // Function to send message 
    const addMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //  Checks if the value of the "input" variable is false. If it is, the function immediately returns and execution stops.
        if (!input || !session) return;
        // Assigns input field to new variable and resets after submit event is handled
        const messagetoSend = input;
        setInput('');

        // npm package that generates a unique ID
        const id = uuid();

        const originalName = (session?.user?.name!)
        const anonName = scrambleName(originalName);
        // Type 'Message' found in 'typings.d.ts' file to keep it all consistant and avoid adding/missing props and arguments across endpoints 
        const message: Message = {
            id,
            message: messagetoSend,
            vote_ups: 0,
            vote_downs: 0,
            created_at: '',
            username: anonName,
            email: session?.user?.email!,
        };


        
        // ------------------------------------------- 
        // REFACTOR THIS OUT FOR PRODUCTION :)
        // ------------------------------------------- 

        // Makes call to api end point to add message

        

        const uploadMessageToUpstash  = async () => {
            const data = await fetch(`/api/addMessage?channelName=${router.get("channelName")}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                }),
            }).then(res => res.json());

            return [data.message, ...messages!]
            
        };
        // ------------------------------------------- 

       

        await mutate(uploadMessageToUpstash, {
            optimisticData: [message, ...messages!],
            rollbackOnError: true,
        });

    };

  return (
<form onSubmit={e => addMessage(e)} className="bg-[#171717] fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 shadow-sm">
<input
type="text"
value={input}
disabled={!session}
onChange={e => setInput(e.target.value)}
placeholder="Enter a message..."
className="bg-[#2c2c2e] flex-1 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"/>
<button
type="submit"
disabled={!input}
className='bg-[#0fa9ee] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed w-12 h-12'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" className="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>

</button>

</form>
  )
}

export default ChatInput
