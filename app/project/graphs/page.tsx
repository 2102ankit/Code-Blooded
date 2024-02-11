// components/MyLineChart.tsx
"use client";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Gantt from "../../../components/GanttChart/GanttChart";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
function page() {
  const [yAxis, setYAxis] = useState<number[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      // fetch data from server
      const res = await axios.get("http://localhost:3000/api/storyPoints");
      const data = res.data;
      // set the data to the state

      console.log(data);
      setYAxis([200, 182, 145, 134, 140, data.totalFinalStoryPoints]);
    };

    fetchData();
  }, []);

  console.log();
  return (
    <div className="w-max">
      {/* line chart */}
      <div className="h-1/2 w-1/2">
        <div className="mb-16 ">
          <div className="py-4 text-center text-2xl font-bold text-[#0a16ff]">
            Product Burndown Chart
          </div>
          <Line
            data={{
              labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
              datasets: [
                {
                  data: yAxis,
                  backgroundColor: "purple",
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Days",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Story Points",
                  },
                },
              },
            }}
          />
        </div>
        <div className="shadow-inner">
          <div className="py-4 text-center text-2xl font-bold text-[#0a16ff]">
            Gantt Chart
          </div>
          <Gantt />
        </div>
      </div>
    </div>
  );
}

export default page;
