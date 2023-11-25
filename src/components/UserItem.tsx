import React from "react";
import Accordion from "react-bootstrap/Accordion";
import RepositoryList from "./RepositoryList";
import { IUser } from "../@types/user";

interface UserItemProps {
  userIndex: string;
  user: IUser;
}

const UserItem = (props: UserItemProps) => {
  return (
    <Accordion.Item eventKey={props.userIndex}>
      <Accordion.Header>
        <strong>{props.user.login}</strong>
      </Accordion.Header>
      <Accordion.Body>
        <RepositoryList userLogin={props.user.login} user={props.user} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default UserItem;
