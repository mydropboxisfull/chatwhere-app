// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../redis';
import { Message } from '../../typings';



type Data = {
  messages: Message[];
};

type ErrorData = {
    body: string;
}

// make endpoint asyncronous 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>,

) {

 
    // let channel = "messages";

    // This grabs the channelName param from URI passed from searchBox
    let channel =  req.query.channelName;
    


    // console.log(channel || "Nothing here");
    console.log(channel);



    // Specifies that we can only accept a post request from the client else display error
    if (req.method !== 'GET') {
        res.status(405).json({ body: 'Method Not Allowed' })
        return;
    }

    

    // Fetches messages from DB
    const messagesRes = await redis.hvals(channel)
    
    // Maps message to an array and sorts them by date
    const messages: Message[] = messagesRes.map((channel) => JSON.parse(channel)).sort((b, a) => b.created_at - a.created_at)

  res.status(200).json({ messages });
};
