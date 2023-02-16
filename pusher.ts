import Pusher from "pusher";
import ClientPusher from "pusher-js";




export const serverPusher = new Pusher({
    appId: "1548112",
    key: "66c28559a4806b95a452",
    secret: "02389f37ccec8720bf39",
    cluster: "us2",
    useTLS: true

});

export const clientPusher = new ClientPusher('66c28559a4806b95a452', {
    cluster: 'us2',
    forceTLS: true
  });
