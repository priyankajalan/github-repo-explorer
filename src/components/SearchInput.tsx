import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { UserContext } from "../context/userContext";
import { UserContextType, IUser } from "../@types/user";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { users, loadUsers } = useContext(UserContext) as UserContextType;

  const fetchData = () => {
    console.log(process.env.REACT_APP_GITHUB_KEY);
    fetch(
      `https://api.github.com/search/users?q=${searchQuery} in:login&page=1&per_page=5`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((users) => {
        const fetchedUsers = users?.items?.map((user: IUser) => ({
          id: user.id,
          login: user.login,
          url: user.url,
          repos: [],
        }));
        loadUsers(fetchedUsers);
      });
  };

  return (
    <div className="mb-3">
      <Form.Group className="mb-3" controlId="username">
        <Form.Control
          placeholder="Enter username"
          as="input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      <Button as="button" variant="primary" onClick={() => fetchData()}>
        <strong>Search</strong>
      </Button>
      {users && searchQuery && (
        <p className="mt-3">
          Showing users for <strong>{searchQuery}</strong>
        </p>
      )}
    </div>
  );
};

export default SearchInput;
