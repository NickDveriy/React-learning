import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const users = [
    // { name: "Default User", age: 100, key: "1" },
    // { name: "Default User 2", age: 102, key: "2" },
  ];

  const [usersList, setUsers] = useState(users);

  const addUserHandler = (addedUser) => {
    setUsers((prevUsersList) => {
      return [...prevUsersList, { ...addedUser, key: Math.random() }];
    });
  };

  return (
    // same as <React.Fragment> or <Fragment> which is basically return props.children
    <>
      <AddUser onAddUser={addUserHandler} />
      {!!usersList.length && <UsersList users={usersList} />}
    </>
  );
}

export default App;
