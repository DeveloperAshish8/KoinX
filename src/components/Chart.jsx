import React, { useState, useEffect } from "react";
import { Baseurl } from "../baseURL";
import axios from "axios";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState([]);
  const CoinChartData = async () => {
    try {
      const { data } = await axios.get(
        `${Baseurl}/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`
      );
      setChartData(data.prices);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CoinChartData();
  }, [days]);

  let x = "1",
    y = 0.3;

  if (window.innerWidth <= 600) {
    x = "1";
    y = 0.1;
  }

  const myData = {
    labels: chartData.map((value) => {
      const date = new Date(value[0]);
      const time =
        date.getHours() > 12
          ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
          : `${date.getHours()} : ${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: `Price in Past Days ${days} in USD`,
        data: chartData.map((value) => value[1]),
        borderColor: "#0000FF",
        borderWidth: x,
      },
    ],
  };

  return (
    <>
      <div className="line w-[100%]">
        <h2 className="font-medium text-lg mt-2">Bitcoin Price Chart (USD)</h2>
        {/* <Line data={myData} />  */}
        <Line
          className="md:mt-12 md:w-[60rem] h-[40rem] "
          data={myData}
          options={{
            elements: {
              point: {
                radius: y,
              },
            },
            // label font properties
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 10,
                  },
                },
              },
              y: {
                ticks: {
                  font: {
                    size: 10,
                  },
                },
              },
            },
          }}
          style={{ strokewidth: "20" }}
        />
      </div>
    </>
  );
};

export default Chart;
