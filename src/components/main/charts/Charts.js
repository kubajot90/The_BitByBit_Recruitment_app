import { useContext } from "react";
import { usersContext } from "../../../context/UsersContextProvider";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import { BsFillPersonVcardFill } from "react-icons/bs";
import classes from "./Charts.module.css";

function Charts() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const { usersList } = useContext(usersContext);
  const usersNumber = usersList.length;

  return (
    <div className={classes.Charts}>
      <div className={`container ${classes.doughnutContainer}`}>
        <DoughnutChart usersList={usersList} />
      </div>
      <div className={classes.chartsWrapper}>
        <div className={`container ${classes.detailsContainer}`}>
          <div className={classes.titleWrapper}>
            <p className={classes.number}>{usersNumber}</p>
            <p className={classes.title}>
              {usersNumber > 1 ? "users" : "user"}
            </p>
          </div>
          <BsFillPersonVcardFill className={classes.icon} />
        </div>
        <div className={`container ${classes.smallContainer}`}>
          <LineChart usersList={usersList} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
