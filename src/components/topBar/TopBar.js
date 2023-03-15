import classes from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={classes.TopBar}>
      <h1 className={classes.title}>User app</h1>
      <span className={classes.divider}></span>
    </div>
  );
}

export default TopBar;
