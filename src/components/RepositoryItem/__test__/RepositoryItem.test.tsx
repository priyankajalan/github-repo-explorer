import { render } from "@testing-library/react";
import RepositoryItem from "../RepositoryItem";

const RepoProp = {
  id: 61774518,
  name: "AngularJs",
  description: "AngularJs Test",
  stargazers_count: 12,
};

test("renders repository item correctly for the passed props", () => {
  const { container } = render(<RepositoryItem repo={RepoProp} />);
  expect(container.getElementsByClassName("fw-bold")[0]).toHaveTextContent(
    "AngularJs"
  );
  expect(container.getElementsByTagName("small")[0]).toHaveTextContent(
    "AngularJs Test"
  );
  expect(container.getElementsByTagName("strong")[0]).toHaveTextContent("12");
});
