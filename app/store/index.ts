import { IChat, IUser } from "../types/entities";
import { v4 as uuidv4 } from "uuid";

class Store {
  _users: Array<IUser>;
  _chats: Array<IChat>;

  get chats() {
    return this._chats;
  }

  isChatExist(chat: IChat) {
    this._chats.forEach((c) => {
      if (c.id === chat.id) {
        return true;
      }
    });
    return false;
  }

  isUserExist(user: IUser) {
    this._users.forEach((u) => {
      if (u.id === user.id) {
        return true;
      }
    });
    return false;
  }

  createUser(user: IUser) {
    if (!this.isUserExist(user)) {
      this._users.push(user);
    }
  }

  getUserById(id: string) {
    this._users.forEach((u) => {
      if (u.id === id) {
        return u;
      }
    });
  }

  createChat(user: IUser) {
    if (!this.isUserExist(user)) {
      this._users.push(user);
    }
    const newChat: IChat = {
      id: uuidv4(),
      userIds: [user.id],
    };
    this._chats.push(newChat);
    return newChat;
  }

  joinChat(chat: IChat, user: IUser) {
    if (!this.isChatExist(chat)) {
      throw "The chat with same id does not exist!";
    }
    chat.userIds.push(user.id);
  }
}

export const store = new Store();
