import { v4 as uuidv4 } from "uuid";
import { IRequest } from "../types/actions";
import { store } from "../store";
import { IUser } from "../types/entities";

export const onConnect = (wsClient: any) => {
  let user: IUser = {
    id: uuidv4()
  }
  store.createUser(user);
  console.log("new user", user);

  wsClient.on("message", (message: any) => {
    // convert text message to JSON
    const jsonMessage: IRequest = JSON.parse(message);
    console.log(jsonMessage);

    switch (jsonMessage.action) {
      case "CREATE_CHAT":
        const newChat = store.createChat(user);
        wsClient.send(JSON.stringify(newChat));
        break;

      case "JOIN_CHAT":
        const chat = store.joinChat(jsonMessage.chatId, user.id);
        wsClient.send(JSON.stringify(chat));
        break;

      case "MESSAGE":
        wsClient.send(JSON.stringify({ text: "message!" }));
        break;

      case "LEAVE_CHAT":
        store.leaveChat(jsonMessage.chatId, user.id);
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
