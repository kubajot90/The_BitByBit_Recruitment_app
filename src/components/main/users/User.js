import classes from "./User.module.css";

function User({ data }) {
  return (
    <div className={classes.User}>
      <h1>{data.firstname}</h1>
    </div>
  );
}

export default User;
