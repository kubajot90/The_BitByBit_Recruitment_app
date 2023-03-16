import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = ({ usersList }) => {
  const [age, setAge] = useState({});

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const ageCounter = (gender) => {
    const ages = [];
    usersList.forEach((user) => {
      if (user.gender === gender) {
        const years = Math.floor(
          (new Date() - new Date(user.birthday).getTime()) / 3.15576e10
        );
        Number.isInteger(years) && ages.push(years);
      }
    });
    setAge((prev) => (prev = { ...prev, [gender]: ages }));
    console.log(age);
  };

  useEffect(() => {
    ageCounter("male");
    ageCounter("female");
  }, [usersList]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Female & Male age ",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Female",
        data: age.female,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Male",
        data: age.male,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
