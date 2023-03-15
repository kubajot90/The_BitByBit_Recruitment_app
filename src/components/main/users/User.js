import { FcBusinesswoman } from "react-icons/fc";
import { IoPeople } from "react-icons/io5";
import classes from "./User.module.css";

function User(props) {
  const { firstname, lastname, gender, email, birthday, address } = props.data;

  const age = Math.floor(
    (new Date() - new Date(birthday).getTime()) / 3.15576e10
  );

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
        <span className={classes.title}>Age</span>
        <span className={classes.subTitle}>{age}</span>
      </div>
      <div className={classes.category}>
        <span className={classes.title}>Gender</span>
        <span className={classes.subTitle}>{gender}</span>
      </div>
      <div className={classes.category}>
        <span className={classes.title}>Country</span>
        <span className={classes.subTitle}>{address.country}</span>
      </div>
      <button className={classes.buttonEdit}>Edit</button>
      <button className={classes.buttonDelete}>Delete</button>
    </div>
  );
}

export default User;
