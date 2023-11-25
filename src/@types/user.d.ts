export interface IRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

export interface IUser {
  id: number;
  login: string;
  url: string;
  repos: IRepo[];
}

export type UserContextType = {
  users: IUser[] | null;
  loadUsers: (users: IUser[]) => void;
  updateUser: (login: string, repos: IRepo[]) => void;
};
