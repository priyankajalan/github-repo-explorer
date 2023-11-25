import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IRepo } from "../@types/user";

interface RepositoryItemProps {
  repo: IRepo;
}

const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start mb-3"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.repo?.name}</div>
        <small>{props.repo?.description}</small>
      </div>
      <div>
        <strong style={{ marginRight: "5px" }}>
          {props.repo?.stargazers_count}
        </strong>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </ListGroup.Item>
  );
};

export default RepositoryItem;
