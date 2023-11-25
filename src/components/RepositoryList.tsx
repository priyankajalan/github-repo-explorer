import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import RepositoryItem from "./RepositoryItem";
import { UserContext } from "../context/userContext";
import { IRepo, IUser, UserContextType } from "../@types/user";

interface RepositoryProps {
  userLogin: string;
  user: IUser;
}

const RepositoryList = (props: RepositoryProps) => {
  const { updateUser } = useContext(UserContext) as UserContextType;

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${props.userLogin}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        const fetchedRepos =
          repos &&
          repos.length &&
          repos.map((repo: IRepo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
          }));
        updateUser(props.userLogin, fetchedRepos);
      });
  }, [props.userLogin]);

  return (
    <ListGroup as="ul" className="mt-3">
      {props.user && props.user.repos && props.user.repos.length ? (
        props.user.repos.map((repo) => <RepositoryItem repo={repo} />)
      ) : (
        <p>no repositories found</p>
      )}
    </ListGroup>
  );
};

export default RepositoryList;
