const socket = io("http://localhost:4000");

socket.on("connect", (response) => {
    console.log(response);
}
);