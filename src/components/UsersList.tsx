import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import UserItem from "./UserItem";

import { UserContext } from "../context/userContext";
import { UserContextType } from "../@types/user";

const UsersList = () => {
  const { users } = useContext(UserContext) as UserContextType;

  if (!users) {
    return <p>Start searching user information and their repos</p>;
  }

  return (
    <Accordion>
      {users && users.length !== 0 ? (
        users.map((user) => {
          return (
            <UserItem key={user?.id} userIndex={user?.login} user={user} />
          );
        })
      ) : (
        <p>no users found</p>
      )}
    </Accordion>
  );
};

export default UsersList;
