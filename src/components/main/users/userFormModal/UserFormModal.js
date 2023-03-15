import { useContext } from "react";
import { usersContext } from "../../../../context/UsersContextProvider";
import { BsArrowLeft } from "react-icons/bs";
import classes from "./UserFormModal.module.css";

const UserFormModal = ({
  addNewUser,
  onEditUser,
  toggleModal,
  buttonText,
  title,
  editUserId,
}) => {
  const { usersList } = useContext(usersContext);

  const currentUserData = editUserId
    ? usersList.filter((user) => user.id === editUserId)
    : "";

  const { firstname, lastname, birthday, gender, address } = currentUserData
    ? currentUserData[0]
    : "";

  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const searchformData = new FormData(form);
    addNewUser(searchformData);

    toggleModal();
  };

  return (
    <div className={classes.UserFormModal}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.header}>
          <button onClick={toggleModal} className={classes.backButton}>
            <BsArrowLeft className={classes.backIcon} />
          </button>
          <span className={classes.title}>{title}</span>
        </div>
        <input
          defaultValue={currentUserData ? firstname : ""}
          name="firstname"
          type="text"
          pattern="[a-zA-Z]+"
          className={classes.input}
          placeholder="First name"
          required
        ></input>
        <input
          defaultValue={currentUserData ? lastname : ""}
          name="lastname"
          type="text"
          pattern="[a-zA-Z]+"
          className={classes.input}
          placeholder="Surname"
          required
        ></input>
        <input
          defaultValue={currentUserData ? birthday : ""}
          name="birthday"
          type="text"
          pattern="\d{4}-\d{2}-\d{2}"
          className={classes.input}
          placeholder="Birthday (YYYY-MM-DD)"
          required
        ></input>
        <input
          defaultValue={currentUserData ? address.country : ""}
          name="country"
          type="text"
          className={classes.input}
          placeholder="Country"
          required
        ></input>
        <select
          defaultValue={currentUserData ? gender : ""}
          name="gender"
          className={classes.select}
          required
        >
          <option value="" disabled hidden>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit" className={classes.submitButton}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default UserFormModal;
