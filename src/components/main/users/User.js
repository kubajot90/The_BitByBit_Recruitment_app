import { useContext } from "react";
import { usersContext } from "../../../context/UsersContextProvider";
import { IoPeople } from "react-icons/io5";
import classes from "./User.module.css";

function User(props) {
  const { deleteUser } = useContext(usersContext);
  const { firstname, lastname, gender, birthday, address, id } = props.data;
  const { showButtons } = props;

  // const age = Math.floor(
  //   (new Date() - new Date(birthday).getTime()) / 3.15576e10
  // );

  const editHandler = () => {
    props.editUserId(id);
    props.toggleModal();
  };

  const deleteHandler = () => {
    deleteUser(id);
  };

  return (
    <div className={classes.User}>
      <div className={classes.iconContainer}>
        <IoPeople className={classes.icon} />
      </div>
      <div className={classes.categoryName}>
        <span className={classes.title}>Name</span>
        <span className={classes.subTitle}>{`${firstname} ${lastname}`}</span>
      </div>
      <div className={classes.category}>
        <span className={classes.title}>Birthday</span>
        <span className={classes.subTitle}>{birthday}</span>
      </div>
      <div className={classes.category}>
        <span className={classes.title}>Gender</span>
        <span className={classes.subTitle}>{gender}</span>
      </div>
      <div className={classes.category}>
        <span className={classes.title}>Country</span>
        <span className={classes.subTitle}>{address.country}</span>
      </div>
      {showButtons && (
        <>
          <button
            onClick={editHandler}
            className={`${classes.buttonEdit} button`}
          >
            Edit
          </button>
          <button
            onClick={deleteHandler}
            className={`${classes.buttonDelete} button`}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default User;
