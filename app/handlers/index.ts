import { IRequest } from "../types";

export const onConnect = (wsClient: any) => {
  console.log("new user");

  wsClient.on("message", (message: any) => {
    // convert text message to JSON
    const jsonMessage: IRequest = JSON.parse(message);
    console.log(jsonMessage);

    switch (jsonMessage.action) {
      case "JOIN_CHAT":
        wsClient.send(JSON.stringify({ text: "join chat" }));
        break;
      case "MESSAGE":
        wsClient.send(JSON.stringify({ text: "message!" }));
        break;
      case "LEAVE_CHAT":
        wsClient.send(JSON.stringify({ text: "leave chat" }));
        break;
      default:
        wsClient.send(JSON.stringify({ error: "unknown command" }));
    }
  });

  wsClient.on("close", () => {
    console.log("user disconnected");
  });
};

export const onClose = () => {
  console.log("server disconnected");
};
