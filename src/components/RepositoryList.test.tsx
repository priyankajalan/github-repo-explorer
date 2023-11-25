import { render } from "@testing-library/react";
import RepositoryList from "./RepositoryList";
import UserProvider from "../context/userContext";

const UserInfo = {
  login: "priyankajalan",
  id: 13144552,
  type: "User",
  url: "https://api.github.com/users/priyankajalan",
  repos: [
    {
      id: 61774518,
      name: "AngularJs",
      description: "AngularJs Test",
      stargazers_count: 12,
    },
    {
      id: 61809758,
      name: "canvas",
      description: "Beautiful React Web Components",
      stargazers_count: 0,
    },
  ],
};

test("renders repository list", () => {
  const { container } = render(
    <UserProvider>
      <RepositoryList userLogin="priyankajalan" user={UserInfo} />
    </UserProvider>
  );

  // Render two repositories
  expect(container.getElementsByClassName("fw-bold")[0]).toHaveTextContent(
    "AngularJs"
  );
  expect(container.getElementsByTagName("small")[0]).toHaveTextContent(
    "AngularJs Test"
  );
  expect(container.getElementsByTagName("strong")[0]).toHaveTextContent("12");

  expect(container.getElementsByClassName("fw-bold")[1]).toHaveTextContent(
    "canvas"
  );
  expect(container.getElementsByTagName("small")[1]).toHaveTextContent(
    "Beautiful React Web Components"
  );
  expect(container.getElementsByTagName("strong")[1]).toHaveTextContent("0");
});
