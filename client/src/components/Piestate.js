import "chart.js/auto";
import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";

const PieState = () => {
  const [dat, setData] = useState([]);
  const [sdat, setsData] = useState([]);
  const fetchdata = async () => {
    try {
      const response = await fetch(`/col/Collegecount`);
      const data = await response.json();
      if (data.status === "ok") {
        setData(data.result);
      } else {
        console.log(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchsdata = async () => {
    try {
      const response = await fetch(`/col/Collegecountbycourse`);
      const data = await response.json();
      if (data.status === "ok") {
        setsData(data.result);
        console.log(data.result);
      } else {
        console.log(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
    fetchsdata();
  }, []);

  const data = {
    labels: dat.map((a) => a._id),
    datasets: [
      {
        label: "# of Votes",
        data: dat.map((a) => a.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(0, 0, 89, 1)",
          "rgba(255, 20, 20, 1)",
          "rgba(100, 25, 20, 1)",
          "rgba(200, 80, 20, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(50, 25, 20, 1)",
          "rgba(130, 25, 20, 1)",
          "rgba(200, 70, 80, 1)",
          "rgba(170, 80, 22, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(0, 0, 89, 0.2)",
          "rgba(255, 20, 132, 0.2)",
          "rgba(100, 25, 20, 0.2)",
          "rgba(200, 80, 20, 0.2)",
          "rgba(255, 0, 0, 0.2)",
          "rgba(50, 25, 20, 0.2)",
          "rgba(130, 25, 20, 0.2)",
          "rgba(200, 70, 80, 0.2)",
          "rgba(170, 80, 22, 0.2)",
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const cdata = {
    labels: sdat.map((a) => a._id),
    datasets: [
      {
        label: "# of courses",
        data: sdat.map((a) => a.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(0, 0, 89, 1)",
          "rgba(255, 20, 20, 1)",
          "rgba(100, 25, 20, 1)",
          "rgba(200, 80, 20, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(50, 25, 20, 1)",
          "rgba(130, 25, 20, 1)",
          "rgba(200, 70, 80, 1)",
          "rgba(170, 80, 22, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(0, 0, 89, 0.2)",
          "rgba(255, 20, 132, 0.2)",
          "rgba(100, 25, 20, 0.2)",
          "rgba(200, 80, 20, 0.2)",
          "rgba(255, 0, 0, 0.2)",
          "rgba(50, 25, 20, 0.2)",
          "rgba(130, 25, 20, 0.2)",
          "rgba(200, 70, 80, 0.2)",
          "rgba(170, 80, 22, 0.2)",
        ],
        borderWidth: 0.5,
      },
    ],
  };
  return (
    <div className="row">
      <div className="col-md-6 justify-content-center">
        <Chart type="doughnut" data={data} />
      </div>
      <div className="col-md-6 justify-content-center">
        <Chart type="doughnut" data={cdata}  />
      </div>
    </div>
  );
};

export default PieState;
