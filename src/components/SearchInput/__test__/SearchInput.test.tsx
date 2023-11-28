import { render, screen, act, fireEvent } from "@testing-library/react";

import SearchInput from "../SearchInput";
import UserProvider from "../../../context/userContext";

const usersListResponse = {
  total_count: 4,
  incomplete_results: false,
  items: [
    {
      login: "priyankajalan",
      id: 13144552,
      type: "User",
      url: "https://api.github.com/users/priyankajalan",
    },
    {
      login: "PriyankaJalan14",
      id: 50579589,
      type: "User",
      url: "https://api.github.com/users/PriyankaJalan14",
    },
  ],
};

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementation(
    jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            ok: true,
            status: 200,
            json: async () => usersListResponse,
          }),
      })
    ) as jest.Mock
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders search input component", async () => {
  await act(async () =>
    render(
      <UserProvider>
        <SearchInput />
      </UserProvider>
    )
  );
  const inputElement = screen.getByPlaceholderText(
    /Enter username/i
  ) as HTMLInputElement;
  expect(inputElement).toHaveValue("");
  expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
});

test("should be able to search a username", async () => {
  await act(async () =>
    render(
      <UserProvider>
        <SearchInput />
      </UserProvider>
    )
  );
  const inputElement = screen.getByPlaceholderText(
    /Enter username/i
  ) as HTMLInputElement;
  await act(async () => {
    fireEvent.change(inputElement, { target: { value: "priyankajalan" } });
  });

  const buttonElement = screen.getByRole("button", { name: "Search" });
  await act(async () => {
    expect(buttonElement).toBeEnabled();
    fireEvent.click(buttonElement);
  });
});
