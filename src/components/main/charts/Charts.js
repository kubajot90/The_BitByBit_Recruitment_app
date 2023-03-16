import { useState, useContext, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { usersContext } from "../../../context/UsersContextProvider";
import classes from "./Charts.module.css";

function Charts() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { usersList } = useContext(usersContext);
  const [gender, setGender] = useState({});

  const genderPercent = () => {
    const userNumber = usersList.length;
    const maleNumber = usersList.filter(
      (user) => user.gender === "male"
    ).length;

    const malePercent = (100 / userNumber) * maleNumber;
    const femalePercent = 100 - malePercent;
    setGender({
      male: malePercent,
      female: femalePercent,
    });
  };

  useEffect(() => {
    usersList && genderPercent();
  }, [usersList]);

  const data = {
    labels: ["Female", "Male"],
    datasets: [
      {
        label: "Gender",
        data: [gender.female, gender.male],
        backgroundColor: ["rgba(255, 99, 132, 0.4)", "rgba(54, 162, 235, 0.4)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={classes.Charts}>
      <div className={classes.chartsWrapper}>
        <div className={`container ${classes.smallContainer}`}>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
