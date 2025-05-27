import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const DashboardGraph = ({ type, data, options, title }) => (
  <div className="w-full" style={{ height: 240 }}>
    {type === "line" && (
      <Line
        data={data}
        options={{ ...options, maintainAspectRatio: false }}
        style={{ height: 200 }}
      />
    )}
    {type === "bar" && (
      <Bar
        data={data}
        options={{ ...options, maintainAspectRatio: false }}
        style={{ height: 200 }}
      />
    )}
    {type === "pie" && (
      <Pie
        data={data}
        options={{ ...options, maintainAspectRatio: false }}
        style={{ height: 200 }}
      />
    )}
  </div>
);

export default DashboardGraph;