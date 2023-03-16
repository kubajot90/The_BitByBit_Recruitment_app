import React, { createContext, useState, useEffect } from "react";

const usersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("list"));

    if (!data || !data.length) {
      fetch(`https://fakerapi.it/api/v1/persons?_quantity=8`)
        .then((response) => response.json())
        .then((users) => setUsersList(users.data))
        .catch((error) => alert(error));
    } else {
      setUsersList(data);
    }
  }, []);

  useEffect(() => {
    if (usersList) {
      window.localStorage.setItem("list", JSON.stringify(usersList));
    }
  }, [usersList]);

  const addUser = (user) => {
    setUsersList((prev) => [...prev, user]);
  };

  const deleteUser = (id) => {
    setUsersList((prev) => (prev = prev.filter((user) => user.id !== id)));
  };

  const editUser = (editUser, id) => {
    const editList = usersList.map((user) => {
      if (user.id === id) {
        return editUser;
      } else {
        return user;
      }
    });
    setUsersList(editList);
  };

  const providerValue = {
    usersList,
    addUser,
    deleteUser,
    editUser,
  };

  return (
    <usersContext.Provider value={providerValue}>
      {children}
    </usersContext.Provider>
  );
};

export { UsersContextProvider, usersContext };
