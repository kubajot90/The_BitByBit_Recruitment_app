import { useNavigate } from "react-router-dom";
import classes from "./Card.module.css";

function Card({ icon, title, subtitle, navigatePath, width, backgroundImage }) {
  const navigate = useNavigate();

  return (
    <div
      className={`container ${classes.Card}`}
      style={{
        backgroundImage: `${backgroundImage}`,
      }}
    >
      <div className={classes.titleWrapper}>
        <span className={classes.title}>{title}</span>
        <span className={classes.subtitle}>{subtitle}</span>
        <button
          onClick={() => navigate(`${navigatePath}`)}
          className={classes.button}
        >
          More
        </button>
      </div>
      {icon}
    </div>
  );
}

export default Card;
