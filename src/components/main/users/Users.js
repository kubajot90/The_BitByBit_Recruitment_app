import { useContext, useEffect, useState } from "react";
import { usersContext } from "../../../context/UserListContextProvider";
import User from "./User";
import UserFormModal from "./userFormModal/UserFormModal";

import classes from "./Users.module.css";

const Users = () => {
  const { usersList, addUser } = useContext(usersContext);
  const [showAddUser, setShowAddUser] = useState(false);

  const clickHandler = () => {
    const user = { id: usersList.length + 1, firstname: "Melepetto" };

    addUser(user);
  };

  const toggleAddModal = () => {
    setShowAddUser((prev) => (prev = !prev));
  };

  return (
    <>
      <div className={classes.Users}>
        <div className={`${classes.buttonsContainer} container`}>
          <button onClick={toggleAddModal} className={classes.addUserButton}>
            Add new user
          </button>
        </div>
        <div className="container">
          <span className="container-title">Users list</span>
          <ul className={classes.list}>
            {/* <ul className={`${classes.list} container`}> */}
            {usersList.map((data) => (
              <User data={data} key={data.id} />
            ))}
          </ul>
        </div>
      </div>
      {showAddUser && (
        <UserFormModal
          buttonText="SUBMIT"
          title="Add new user"
          toggleAddModal={toggleAddModal}
        />
      )}
    </>
  );
};

export default Users;
