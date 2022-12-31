import { IChat, IUser } from "../types/entities";
import { v4 as uuidv4 } from "uuid";

class Store {
  _users: Array<IUser>;
  _chats: Array<IChat>;

  getChatsByUserId(id: string) {
    let chats: Array<IChat>;
    this._chats.forEach(chat => {
      if (chat.userIds.indexOf(id) != -1) {
        chats.push(chat);
      }
    });
    return this._chats;
  }

  isUserExist(userId: string) {
    this._users.forEach((u) => {
      if (u.id === userId) {
        return true;
      }
    });
    return false;
  }

  getUserById(id: string) {
    this._users.forEach((u) => {
      if (u.id === id) {
        return u;
      }
    });
  }

  createUser(user: IUser) {
    if (!this.isUserExist(user.id)) {
      this._users.push(user);
    }
  }

  isChatExist(chatId: string) {
    this._chats.forEach((c) => {
      if (c.id === chatId) {
        return true;
      }
    });
    return false;
  }

  getChatById(id: string): IChat | null {
    this._chats.forEach((c) => {
      if (c.id === id) {
        return c;
      }
    });
    return null;
  }

  createChat(user: IUser) {
    // add new user if this one doesn't exist
    if (!this.isUserExist(user.id)) {
      this._users.push(user);
    }

    const newChat: IChat = {
      id: uuidv4(),
      lastMessage: "Start chating...",
      userIds: [user.id],
    };
    this._chats.push(newChat);
    return newChat;
  }

  joinChat(chatId: string, userId: string) {
    const chat = this.getChatById(chatId);
    if (chat === null) {
      throw "The chat with same id does not exist!";
    }
    chat.userIds.push(userId);
    return chat;
  }

  leaveChat(chatId: string, userId: string) {
    const chat = this.getChatById(chatId);
    if (chat === null) {
      throw "The chat with same id does not exist!";
    }
    chat.userIds.splice(chat.userIds.indexOf(userId), 1);
  }
}

export const store = new Store();
