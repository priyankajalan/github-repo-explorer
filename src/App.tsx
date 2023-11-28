import React from "react";

import SearchInput from "./components/SearchInput/SearchInput";
import UsersList from "./components/UsersList/UsersList";
import UserProvider from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h1 className="mb-4">Github Users</h1>
            <SearchInput />
            <UsersList />
          </div>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
