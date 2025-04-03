const socket = io("http://localhost:3000");

const statusBox = document.getElementById("statusBox");

socket.on("connect", () => {
  const socketInfo = `
    <p><strong>Connected!</strong></p>
    <p>Socket ID: <code>${socket.id}</code></p>
  `;
  statusBox.innerHTML = socketInfo;
  statusBox.classList.add("connected");
});

socket.on("connect_error", (err) => {
  statusBox.innerHTML = `<p style="color:red;">❌ Connection Failed: ${err.message}</p>`;
});
