import React, { createContext, useState, useEffect } from "react";

const usersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/persons?_quantity=4")
      .then((response) => response.json())
      .then((users) => setUsersList(users.data))
      .catch((error) => alert(error));
  }, []);

  useEffect(() => {
    console.log("userList: ", usersList);
  }, [usersList]);

  const addUser = (user) => {
    setUsersList((prev) => [...prev, user]);
  };

  const providerValue = {
    usersList,
    addUser,
  };

  return (
    <usersContext.Provider value={providerValue}>
      {children}
    </usersContext.Provider>
  );
};

export { UsersContextProvider, usersContext };
