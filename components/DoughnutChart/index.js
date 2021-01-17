import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Banco de Dados", "Web", "Mobile"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const options = {
  legend: {
    labels: {
      fontSize: 14,
      fontColor: "white",
    },
  },
};

const DoughnutChart = () => (
  <Doughnut options={options} data={data} width={200} height={200} />
);

export default DoughnutChart;
