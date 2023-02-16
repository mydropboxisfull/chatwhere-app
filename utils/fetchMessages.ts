import { Message } from "../typings";

const fetcher = async (channel: string) => {
    const res = await fetch(`/api/getMessages?channelName=${channel}`);
    const data = await res.json();
    const messages: Message[] = data.messages;

    return messages;
}

export default fetcher;
