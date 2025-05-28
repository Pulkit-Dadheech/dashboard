import React from "react";
import RetailNavbar from "../Navbar/RetailNavbar";
import Card from "./Card";
import DashboardGraph from "./DashboardGraph";

const RetailDashboard = () => {
  const titles = [
    "Sales",
    "Customers",
    "Inventory",
    "Revenue",
    "Orders",
    "Returns",
    "Profit",
    "Visits"
  ];
  const values = [
    "$10,000",
    "150",
    "200",
    "$25,000",
    "320",
    "5",
    "$7,500",
    "1,200"
  ];
  const percentages = [5, 10, 2, 8, 12, -1, 6, 15];
  const days = [7, 30, 14, 30, 7, 14, 30, 7];

  const graphData = [
    // 1. Multi-Series Trend: Customer Footfall by Hour (5 lines, one for each day)
    {
      type: "line",
      title: "Customer Footfall by Hour",
      data: {
        labels: ["8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM"],
        datasets: [
          {
            label: "May 12",
            data: [20, 20, 40, 90, 130, 110, 70, 30],
            borderColor: "#1976d2", // blue
            backgroundColor: "rgba(25,118,210,0.2)",
            fill: false,
          },
          {
            label: "May 13",
            data: [20,20, 60, 80, 120, 100, 60, 25],
            borderColor: "#ff7043", // orange
            backgroundColor: "rgba(255,112,67,0.2)",
            fill: false,
          },
          {
            label: "May 14",
            data: [20,20, 70, 100, 140, 120, 80, 40],
            borderColor: "#43a047", // green
            backgroundColor: "rgba(67,160,71,0.2)",
            fill: false,
          },
          {
            label: "May 15",
            data: [20, 20 ,45, 85, 125, 105, 65, 20],
            borderColor: "#ab47bc", // purple
            backgroundColor: "rgba(171,71,188,0.2)",
            fill: false,
          },
          {
            label: "May 16",
            data: [20, 20, 80, 110, 190, 130, 90, 50],
            borderColor: "#ffa726", // amber
            backgroundColor: "rgba(255,167,38,0.2)",
            fill: false,
          }
        ]
      },
      options: { responsive: true, plugins: { legend: { display: true } } }
    },
    {
      type: "bar",
      title: "Total Daily Footfall",
      data: {
        labels: ["May 12", "May 13", "May 14", "May 15", "May 16"],
        datasets: [
          {
            label: "Customers",
            data: [510, 475, 570, 490, 534],
            backgroundColor: "#90caf9",
            barPercentage: 0.8,
            categoryPercentage: 0.5
          }
        ]
      },
      options: { responsive: true, plugins: { legend: { display: true } } }
    },
    {
      type: "bar",
      title: "Orders Placed Each Day",
      data: {
        labels: ["May 12", "May 13", "May 14", "May 15", "May 16"],
        datasets: [
          {
            label: "Orders",
            data: [120, 110, 135, 125, 140],
            backgroundColor: "#ffc658",
            barPercentage: 0.8,
            categoryPercentage: 0.5
          }
        ]
      },
      options: { responsive: true, plugins: { legend: { display: true } } }
    },
    {
      type: "line",
      title: "Dwell Time Distribution (May 12-16)",
      data: {
        labels: ["0-10 min", "10-20 min", "20-30 min", "30-40 min", "40-50 min", "50-60 min"],
        datasets: [
          {
            label: "May 12",
            data: [60, 80, 70, 50, 30, 10],
            borderColor: "#1976d2", // blue
            backgroundColor: "rgba(25,118,210,0.1)",
            tension: 0.4,
            fill: false,
          },
          {
            label: "May 13",
            data: [40, 60, 55, 35, 20, 8],
            borderColor: "#ff7043", // orange
            backgroundColor: "rgba(255,112,67,0.1)",
            tension: 0.4,
            fill: false,
          },
          {
            label: "May 14",
            data: [80, 90, 85, 65, 40, 15],
            borderColor: "#43a047", // green
            backgroundColor: "rgba(67,160,71,0.1)",
            tension: 0.4,
            fill: false,
          },
          {
            label: "May 15",
            data: [30, 50, 45, 28, 15, 5],
            borderColor: "#ab47bc", // purple
            backgroundColor: "rgba(171,71,188,0.1)",
            tension: 0.4,
            fill: false,
          },
          {
            label: "May 16",
            data: [100, 110, 105, 90, 60, 25],
            borderColor: "#ffa726", // amber
            backgroundColor: "rgba(255,167,38,0.1)",
            tension: 0.4,
            fill: false,
          }
        ]
      },
      options: { responsive: true, plugins: { legend: { display: true } } }
    },
    {
      type: "line",
      title: "Visitor Trend (May 12-16)",
      data: {
        labels: ["May 12", "May 13", "May 14", "May 15", "May 16"],
        datasets: [
          {
            label: "Visitors",
            data: [510, 475, 570, 490, 534],
            borderColor: "#90caf9",
            backgroundColor: "rgba(144,202,249,0.2)",
            tension: 0.4,
            fill: true,
          }
        ]
      },
      options: { responsive: true, plugins: { legend: { display: true } } }
    },
    {
      type: "line",
      title: "Returning Rate Trend (May 12-16)",
      data: {
        labels: ["May 12", "May 13", "May 14", "May 15", "May 16"],
        datasets: [
          {
            label: "Returning Rate (%)",
            data: [22, 24, 21, 25, 23],
            borderColor: "#90caf9",
            backgroundColor: "rgba(144,202,249,0.2)",
            tension: 0.4,
            fill: true,
          }
        ]
      },
      options: { responsive: true, plugins: { legend: { display: true } } }
    },
  ];

  return (
    <div className="flex flex-col h-full py-2 px-3">
      {/* Navbar */}
      <RetailNavbar />
      {/* Main Content */}
      <div className="flex-1 mt-6 overflow-auto">
        {/* Heading and line */}

        {/* Cards */}
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
          {titles.map((title, index) => (
            <Card
              key={index}
              title={title}
              value={values[index]}
              percentage={percentages[index]}
              days={days[index]}
              icon={null}
            />
          ))}
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {graphData.map((g, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg p-6 min-h-[300px] flex flex-col transition-shadow hover:shadow-2xl"
            >
              <h2 className="text-xl font-bold text-gray-400 mb-4">{g.title}</h2>
              <hr className="mb-4 border-b border-gray-300" />
              <DashboardGraph
                type={g.type}
                data={g.data}
                options={g.options}
                title={g.title}
              />
            </div>
          ))}
        </div>

        {/* Custom Section: Footfall Profile & Peak Times */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Left: Footfall Profile Pie Chart */}
          <div className="col-span-1 bg-white shadow-lg p-6 min-h-[300px] flex flex-col transition-shadow hover:shadow-2xl">
            <h2 className="text-xl font-bold text-gray-400 mb-4">Footfall Profile</h2>
            <hr className="mb-4 border-b border-gray-300" />
            <DashboardGraph
              type="pie"
              data={{
                labels: ["Morning", "Midday", "Afternoon", "Evening"],
                datasets: [
                  {
                    data: [120, 200, 160, 100],
                    backgroundColor: ["#90caf9", "#ffc658", "#00C49F", "#FF444A"]
                  }
                ]
              }}
              options={{ responsive: true }}
              title="Footfall Profile"
            />
          </div>
          {/* Right: Peak/Off-Peak Line Chart */}
          <div className="col-span-2 bg-white shadow-lg p-6 min-h-[300px] flex flex-col transition-shadow hover:shadow-2xl">
            <h2 className="text-xl font-bold text-gray-400 mb-4">Footfall Peak & Off-Peak Times</h2>
            <hr className="mb-4 border-b border-gray-300" />
            <DashboardGraph
              type="line"
              data={{
                labels: ["7AM", "9AM", "11AM", "1PM", "3PM", "5PM", "7PM", "9PM"],
                datasets: [
                  {
                    label: "Footfall",
                    data: [40, 120, 60, 80, 50, 130, 70, 30],
                    borderColor: "#8884d8",
                    backgroundColor: "rgba(136,132,216,0.2)",
                    tension: 0.4,
                    fill: true,
                  }
                ]
              }}
              options={{
                responsive: true,
                plugins: { legend: { display: false } }
              }}
              title="Footfall Peak & Off-Peak Times"
            />
            {/* Optional: Add labels for peak/off-peak */}
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Peak</span>
              <span>Off-Peak</span>
              <span>Peak</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailDashboard;