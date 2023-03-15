import { useNavigate } from "react-router-dom";
import { BiSearchAlt, BiUserCircle, BiChart, BiHomeAlt } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import classes from "./SideBar.module.css";

function SideBar() {
  const navigate = useNavigate();

  const setPath = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.SideBar}>
      <ul className={classes.list}>
        <li className={classes.searchItem}>
          <button
            onClick={() => setPath("search")}
            className={classes.navButton}
          >
            <BiSearchAlt className={classes.icon} />
            Search
            <MdKeyboardArrowRight className={classes.iconArrow} />
          </button>
        </li>
        <li>
          <button onClick={() => setPath("/")} className={classes.navButton}>
            <BiHomeAlt className={classes.icon} />
            Home
            <MdKeyboardArrowRight className={classes.iconArrow} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPath("users")}
            className={classes.navButton}
          >
            <BiUserCircle className={classes.icon} />
            Users
            <MdKeyboardArrowRight className={classes.iconArrow} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPath("charts")}
            className={classes.navButton}
          >
            <BiChart className={classes.icon} />
            Charts
            <MdKeyboardArrowRight className={classes.iconArrow} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
