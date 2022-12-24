interface IRequest {
  action: "JOIN_CHAT" | "MESSAGE" | "LEAVE_CHAT";
}

interface IChatAction {
  chatId: string;
  fromId: string;
}

interface IConnect extends IRequest, IChatAction {}

interface IDisconnect extends IRequest, IChatAction {}

interface IMessage extends IRequest {
  chatId: string;
  fromId: string;
  text: string;
  date: Date;
}

export { IRequest, IConnect, IMessage, IDisconnect };
