import { io } from "socket.io-client";

export const initSocket = async () =>{
    const options = {
        'force new connection' : true,
        reconnectionAttempt :'Infinity',
        timeout : 10000,
        transports : ['websocket'],

    };
    // return io("https://code-connect-production.up.railway.app/",options);
    return io("http://localhost:5000/",options);

}       
