// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../redis';
import { Message } from '../../typings';

type Data = {
  message: Message;
};

type ErrorData = {
    body: string;
}

// make endpoint asyncronous 
export default async function updateVote(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
    // Specifies that we can only accept a post request from the client else display error
    if (req.method !== 'PUT') {
        res.status(405).json({ body: 'Method Not Allowed' })
        return;
    }

    const { message } = req.body; 


    // Changed Date Method due to error (Compare typings.d.ts the schema template, and Chatinput.txt)
    // After production check if different time zones are reflecting the server time rather than client
    // Uses spread operator to take all elements of the message object and put them into a new object with the addition of changing the Date.now() to reflect the server's date rather than the client's specific timezone
    const newUpVote = {
        ...message, 
        vote_ups: (message.vote_ups + 1)
    }

    // push to upstash redis db
    // pass in object and key then stringify the message itself into that value
    await redis.hset('messages' , message.id, JSON.stringify(newUpVote));


  res.status(200).json({ message: newUpVote });
}
