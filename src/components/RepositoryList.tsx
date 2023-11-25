import { useEffect, useContext } from "react";
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

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.userLogin}/repos`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((repos: IRepo[]) => {
        const fetchedRepos =
          repos && repos.length
            ? repos.map((repo: IRepo) => ({
                id: repo.id,
                name: repo.name,
                description: repo.description,
                stargazers_count: repo.stargazers_count,
              }))
            : [];
        updateUser(props.userLogin, fetchedRepos);
      });
  }, [props.userLogin]);

  return (
    <ListGroup as="ul" className="mt-3">
      {props.user && props.user.repos && props.user.repos.length ? (
        props.user.repos.map((repo: IRepo) => (
          <RepositoryItem key={repo.id} repo={repo} />
        ))
      ) : (
        <p>no repositories found</p>
      )}
    </ListGroup>
  );
};

export default RepositoryList;
