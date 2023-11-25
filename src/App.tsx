import React from "react";

import SearchInput from "./components/SearchInput";
import UsersList from "./components/UsersList";
import UserProvider from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <div style={{ width: "60%", margin: "auto" }} className="mt-5">
        <h1 className="mb-4">Github Users</h1>
        <SearchInput />
        <UsersList />
      </div>
    </UserProvider>
  );
}

export default App;
