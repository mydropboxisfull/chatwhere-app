import MessageList from './MessageList';
import ChatInput from './ChatInput'
import { Message } from '../typings';
import { getServerSession } from 'next-auth'
import { Providers } from './providers';





// async function HomePage() {
async function Homepage() {

  
  
  
  // Enable SSR
  // Makes call to getMessages and gives it to us
 
 
  const data = await fetch(`${process.env.VERCEL_URL || 'https://localhost:3000'}/api/getMessages`).then((res) => res.json());
  const messages: Message[] = data.messages; 
  const session = await getServerSession();

  
  return (
    

    <div className='bg-[#09090b]'>


    <Providers session={session}>
    
    <main>



      {/* Message List */}
      <MessageList initialMessages={messages}/>
      {/* Chat Input */}
      <ChatInput session={session}/>


    

    </main>
       </Providers>
       </div>

  );
}

export default Homepage;
