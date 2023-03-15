import { BsArrowLeft } from "react-icons/bs";
import classes from "./UserFormModal.module.css";

const UserFormModal = ({ toggleAddModal, buttonText, title }) => {
  const submitHandler = () => {
    return;
  };

  return (
    <div className={classes.UserFormModal}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.header}>
          <button
            type="reset"
            onClick={toggleAddModal}
            className={classes.backButton}
          >
            <BsArrowLeft className={classes.backIcon} />
          </button>
          <span className={classes.title}>{title}</span>
        </div>
        <input
          name="firstName"
          type="text"
          pattern="[a-zA-Z]+"
          className={classes.input}
          placeholder="First name"
          required
        ></input>
        <input
          name="surname"
          type="text"
          pattern="[a-zA-Z]+"
          className={classes.input}
          placeholder="Surname"
          required
        ></input>
        <input
          name="birthday"
          type="text"
          pattern="\d{4}-\d{2}-\d{2}"
          className={classes.input}
          placeholder="Birthday (YYYY-MM-DD)"
          required
        ></input>
        <input
          name="country"
          type="text"
          className={classes.input}
          placeholder="Country"
          required
        ></input>
        <button type="submit" className={classes.submitButton}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default UserFormModal;
