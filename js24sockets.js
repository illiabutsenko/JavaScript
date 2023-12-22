const socket = new WebSocket("wss://ws.ifelse.io/");

socket.onopen = function (event) {
  console.log("Connection established!");
};

socket.onmessage = function (event) {
  console.log("Message recieved:", event.data);
};

socket.onerror = function (event) {
  console.log("WebSocket error:", event);
};

socket.onclose = function (event) {
  console.log("Connection closed:", event);
};

socket.send("Hello, server!");

socket.close();