import { IChat, IUser } from "../entities";

export interface IRequest {
  action: "CHANGE_USER" | "CREATE_CHAT" | "JOIN_CHAT" | "MESSAGE" | "LEAVE_CHAT";
  [propName: string]: any;
}

export interface IChatAction {
  chatId: IChat["id"];
  fromId: IUser["id"];
}

// export interface IConnect extends IRequest, IChatAction {}

// export interface IDisconnect extends IRequest, IChatAction {}

export interface IMessage extends IRequest {
  chatId: IChat["id"];
  fromId: IUser["id"];
  text: string;
  date: Date;
}
