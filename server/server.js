import { Socket } from "socket.io";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const socket = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5500",
    }
});

socket.on("connection", (socket) => {
    console.log("Connected");
    console.log(socket);
    
   
}   );

httpServer.listen(4000, () => {
    console.log("Server is running on port 4000");
}
);
