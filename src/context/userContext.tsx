import * as React from "react";
import { UserContextType, IUser, IRepo } from "../@types/user";

interface props {
  children: React.ReactNode;
}

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider: React.FC<props> = ({ children }) => {
  const [users, setUsers] = React.useState<IUser[] | null>(null);

  const loadUsers = (users: IUser[]) => {
    setUsers(users);
  };

  const updateUser = (login: string, repos: IRepo[]) => {
    const updatedUsers =
      users && users.length
        ? users?.map((user: IUser) => {
            if (user.login == login) {
              user.repos = repos;
            }
            return user;
          })
        : [];

    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ users, loadUsers, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
