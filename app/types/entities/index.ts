export interface IChat {
  id: string;
  lastMessage: string;
  userIds: Array<string>;
}

export interface IUser {
  id: string;
  name: string;
  description: string;
}
