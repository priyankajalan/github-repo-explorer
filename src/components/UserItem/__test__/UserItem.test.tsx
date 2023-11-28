import { render } from "@testing-library/react";
import UserItem from "../UserItem";
import UserProvider from "../../../context/userContext";

const UserProp = {
  login: "priyankajalan",
  id: 13144552,
  type: "User",
  url: "https://api.github.com/users/priyankajalan",
  repos: [],
};

test("renders user item correctly for the passed props", () => {
  const { container } = render(
    <UserProvider>
      <UserItem userIndex={"12"} user={UserProp} />
    </UserProvider>
  );
  expect(container.getElementsByTagName("strong")[0]).toHaveTextContent(
    "priyankajalan"
  );
});
