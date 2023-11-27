import { render } from "@testing-library/react";
import UsersList from "./UsersList";
import UserProvider from "../context/userContext";

test("renders userlist", () => {
  render(
    <UserProvider>
      <UsersList />
    </UserProvider>
  );
});
