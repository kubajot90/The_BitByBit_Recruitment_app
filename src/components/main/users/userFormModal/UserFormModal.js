import { BsArrowLeft } from "react-icons/bs";
import classes from "./UserFormModal.module.css";

const UserFormModal = ({
  formDataHandler,
  toggleAddModal,
  buttonText,
  title,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const searchformData = new FormData(form);
    formDataHandler(searchformData);

    toggleAddModal();
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
          name="firstname"
          type="text"
          pattern="[a-zA-Z]+"
          className={classes.input}
          placeholder="First name"
          required
        ></input>
        <input
          name="lastname"
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
        <select
          name="gender"
          className={classes.select}
          required
          defaultValue=""
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
