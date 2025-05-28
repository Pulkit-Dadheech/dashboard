import React from 'react';
import SupervisorNavbar from './SupervisorNavbar';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import SupervisorCard from './SupervisorCard';
import { MdWarning, MdErrorOutline } from 'react-icons/md';
import { FaCloud, FaSun, FaMoon } from 'react-icons/fa';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    annotationPlugin
);

const overallFootfallData = {
    labels: ['May 12', 'May 13', 'May 14', 'May 15', 'May 16'],
    datasets: [
        {
            label: 'Overall',
            data: [580, 200, 320, 350, 570],
            borderColor: '#7ea6f7',
            backgroundColor: 'rgba(126,166,247,0.1)',
            tension: 0,
            pointRadius: 0,
            borderWidth: 2,
        },
        {
            label: 'Outbound',
            data: [290, 120, 160, 180, 280],
            borderColor: '#f7a67e',
            backgroundColor: 'rgba(247,166,126,0.1)',
            tension: 0,
            pointRadius: 0,
            borderWidth: 2,
        },
        {
            label: 'Inbound',
            data: [370, 200, 240, 260, 350],
            borderColor: '#7ed6a6',
            backgroundColor: 'rgba(126,214,166,0.1)',
            tension: 0,
            pointRadius: 0,
            borderWidth: 2,
        },
        {
            label: 'Threshold',
            data: [480, 480, 480, 480, 480],
            borderColor: '#e57373',
            borderDash: [6, 4],
            pointRadius: 0,
            tension: 0.7,
            borderWidth: 2,
            fill: false,
        },
    ],
};

const overallFootfallOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                usePointStyle: true,
                boxWidth: 16,
                font: { size: 14 },
            },
        },
        title: { display: false },
    },
    scales: {
        y: {
            min: 0,
            max: 600,
            ticks: { stepSize: 150 },
            grid: { color: '#e5e7eb' },
        },
        x: {
            grid: { color: '#e5e7eb' },
        },
    },
};



const incidentLog = [
    {
        timestamp: "2025-05-18 17:42",
        type: "Overcrowding",
        station: "Paddington",
        zone: "Concourse A",
        description: "Footfall exceeded safety threshold for >5 min",
        status: "Resolved",
        severity: "Resolved",
        response: "4 min",
    },
    {
        timestamp: "2025-05-18 08:15",
        type: "Loitering",
        station: "Paddington",
        zone: "Platform 3",
        description: "Unusual dwell time detected (avg. > 10 min)",
        status: "In progress",
        severity: "In progress",
        response: "6 min",
    },
    {
        timestamp: "2025-05-17 19:30",
        type: "Crowd Surge",
        station: "Paddington",
        zone: "Concourse B",
        description: "Sudden 200+ increase in footfall in 2 minutes",
        status: "Resolved",
        severity: "Resolved",
        response: "3 min",
    },
    {
        timestamp: "2025-05-17 14:10",
        type: "Entry Spike",
        station: "Paddington",
        zone: "Ticket Hall",
        description: "Abnormal entry rate detected compared to...",
        status: "Resolved",
        severity: "Resolved",
        response: "2 min",
    },
    {
        timestamp: "2025-05-17 09:45",
        type: "Sensor Dropout",
        station: "Paddington",
        zone: "Platform 1",
        description: "Footfall sensor not reporting for 4 minutes",
        status: "Auto-recovered",
        severity: "Auto-recovered",
        response: "N/A",
    },
    {
        timestamp: "2025-05-16 18:55",
        type: "Overcrowding",
        station: "Paddington",
        zone: "Concourse A",
        description: "Second overcrowding incident in same zone...",
        status: "Escalated",
        severity: "Escalated",
        response: "7 min",
    },
    {
        timestamp: "2025-05-16 12:25",
        type: "Loitering",
        station: "Paddington",
        zone: "Retail Zone South",
        description: "Repeat loitering pattern detected near exit ...",
        status: "Resolved",
        severity: "Resolved",
        response: "5 min",
    },
    {
        timestamp: "2025-05-16 07:30",
        type: "Unusual Flow Pattern",
        station: "Paddington",
        zone: "Platform 4",
        description: "Reverse movement trend detected",
        status: "Resolved",
        severity: "Resolved",
        response: "4 min",
    },
    {
        timestamp: "2025-05-15 16:50",
        type: "Crowd Surge",
        station: "Paddington",
        zone: "Concourse C",
        description: "Traffic 3× higher than expected vs forecast",
        status: "Resolved",
        severity: "Resolved",
        response: "3 min",
    },
    {
        timestamp: "2025-05-15 11:10",
        type: "Entry Spike",
        station: "Paddington",
        zone: "Main Entrance",
        description: "Peak entry time triggered early vs normal...",
        status: "Resolved",
        severity: "Resolved",
        response: "2 min",
    },
];

// Helper for status badge color
const statusBadge = (status) => {
    switch (status) {
        case "Resolved":
            return "bg-green-100 text-green-700";
        case "In progress":
            return "bg-yellow-100 text-yellow-700";
        case "Auto-recovered":
            return "bg-blue-100 text-blue-700";
        case "Escalated":
            return "bg-red-100 text-red-700";
        default:
            return "bg-gray-100 text-gray-700";
    }
};

const SupervisorDashboard = () => {
    const titles = [
        "Total Football",
        "Anomalies",
        "Avg. visit Duration",
        "Return Rate",
    ];
    const values = [
        "5423",
        "2",
        "35s",
        "28%",
    ];
    return (
        <>
            <div className='p-2'>
                <SupervisorNavbar />
            </div>
            <div class="grid grid-cols-[60%_40%] h-100 w-full gap-2 p-4">
                <div>
                    <div class="grid grid-cols-4">
                        {titles.map((title, index) => (
                            <SupervisorCard
                                key={index}
                                title={title}
                                value={values[index]}
                                icon={null}
                            />
                        ))}

                    </div>
                    <div className='shadow p-2 mt-3'>
                        <div className='flex justify-between items-center'>
                            <div className="font-bold text-xs mb-2 p-2">Station KPI Comparison</div>
                            <p className='text-xs mb-2'>Compare key performance metrics between any two stations to identify patterns</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-4">
                            {/* Station 1 */}
                            <div className="bg-white rounded ">
                                <select className="border border-gray-300 ml-3 my-3 px-2 py-1 text-xs rounded">
                                    <option value="">Paddington </option>
                                    <option value="electronics">option 1</option>
                                    <option value="fashion">option 2</option>
                                    <option value="grocery">optioin 3</option>
                                </select>
                                <div className="grid grid-cols-2 gap-2 p-2">
                                    <SupervisorCard title="Total Footfall" value="485,200" />
                                    <SupervisorCard title="Anomalies" value="54" />
                                    <SupervisorCard title="Avg Dwell time" value="5M32s" />
                                    <SupervisorCard title="Peak Hour" value="8-9" />

                                </div>
                            </div>
                            {/* Station 2 */}
                            <div className="bg-white rounded ">
                                <select className="border border-gray-300 ml-3 my-3 px-2 py-1 text-xs rounded">
                                    <option value="">King Cross </option>
                                    <option value="electronics">option 1</option>
                                    <option value="fashion">option 2</option>
                                    <option value="grocery">optioin 3</option>
                                </select>
                                <div className="grid grid-cols-2 gap-2 p-2">
                                    <SupervisorCard title="Total Footfall" value="623,500" />
                                    <SupervisorCard title="Anomalies" value="68" />
                                    <SupervisorCard title="Avg Dwell time" value="6M10s" />
                                    <SupervisorCard title="Peak Hour" value="6-7" />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div class=" p-2 text-gray-400 bg-white rounded shadow">
                    <span className='flex justify-between align-center p-2'><h1 className='font-bold'>Anomalies</h1> <p className='text-center text-xs'>Shows active anomalies by station</p></span>
                    <hr />
                    <br />
                    <div className=' p-2 bg-gray-200 rounded mb-3'>
                        <div className='flex justify-between bg-white items-center'>
                            <div className='p-1 text-xs text-gray-400 font-bold rounded bg-white flex items-center'>
                                <MdWarning className='text-red-500 text-xl mr-2' />
                                <span>Paddington Station: Overcrowding Detected{"  "}</span>
                            </div>
                            <div className='p-1 text-xs text-gray-500 font-semibold'> 2hrs ago</div>
                        </div>
                        <p className='text-xs text-gray-800 p-2'>Platform 8 occupancy exceeded 95% for over 3 minutes -risk of congestion and saftey incident.</p>
                    </div>
                    <div className=' p-2 bg-gray-200 rounded'>
                        <div className='flex justify-between bg-white items-center'>

                            <div className='p-1 text-xs text-gray-400 font-bold rounded bg-white flex items-center'>
                                <MdErrorOutline className='text-orange-500 text-xl mr-2' />
                                <span>Paddington Station: Deactivation Detected{"  "}</span>
                            </div>
                            <div className='p-1 text-xs text-gray-500 font-semibold'> 2hrs ago</div>
                        </div>
                        <p className='text-xs text-gray-800 p-2'>Footfall sensor 3A reporting 28% lower counts vs adjacent sensors calibration check adviced</p>
                    </div>
                </div>

            </div>


            {/* overall football data*/}

            <div className="bg-white rounded border p-4 shadow flex flex-col justify-center items-center h-100 m-3">
                <div className="flex items-center mb-2 w-full">
                    <h2 className="font-bold text-lg mr-4">Overall Footfall</h2>
                    <span className="text-gray-400 text-sm">Footfall trends for selected days</span>
                </div>
                <hr className="mb-4 w-full" />
                <div className="w-full" style={{ minHeight: 260 }}>
                    <Line data={overallFootfallData} options={overallFootfallOptions} width={"700%"} height={220} />
                </div>
            </div>


            {/* Zonewise Occupancy */}
            <div className="bg-white rounded border p-4 mt-4 m-3">
                <div className="flex items-center mb-2">
                    <h2 className="font-bold text-lg mr-4">Zone-wise Occupancy</h2>
                    <span className="text-gray-400 text-sm">Additional description if needed.</span>
                </div>
                <hr className="mb-4" />
                <div className="flex w-full">
                    {/* Vertical color scale with High/Low labels */}
                    <div className="flex flex-col items-center mr-4">
                        <span className="text-xs text-gray-400 mb-1">High</span>
                        <div
                            className="w-3 h-48 rounded"
                            style={{
                                background: "linear-gradient(to bottom, #00cfff 0%, #e0f7fa 100%)",
                            }}
                        />
                        <span className="text-xs text-gray-400 mt-1">Low</span>
                    </div>
                    {/* Map image */}
                    <div className="relative flex-1 overflow-hidden rounded">
                        <img
                            src="/zone-map.png.png"
                            alt="Zone-wise Occupancy Map"
                            className="w-full object-cover"
                            style={{ minHeight: 180, maxHeight: 220 }}
                        />
                        {/* Optional: Add zoom controls */}
                        <div className="absolute bottom-2 right-2 flex gap-2">
                            <button className="bg-white rounded-full p-1 shadow border hover:bg-gray-100">
                                <span className="text-lg">+</span>
                            </button>
                            <button className="bg-white rounded-full p-1 shadow border hover:bg-gray-100">
                                <span className="text-lg">−</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Peak hours and Asset Usage charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Peak hours line chart */}
                <div className="bg-white rounded border p-4">
                    <div className="flex items-center mb-2">
                        <h2 className="font-bold text-lg mr-4">Peak hours</h2>
                        <span className="text-gray-400 text-sm">Additional description if needed.</span>
                    </div>
                    <hr className="mb-4" />
                    <div className="w-full" style={{ minHeight: 220, maxHeight: 260, overflow: 'hidden' }}>
                        <Line data={peakHoursData} options={peakHoursOptions} height={180} />
                    </div>
                </div>
                {/* Asset Usage bar chart */}
                <div className="bg-white rounded border p-4">
                    <div className="flex items-center mb-2">
                        <h2 className="font-bold text-lg mr-4">Asset Usage</h2>
                    </div>
                    <hr className="mb-4" />
                    <div className="w-full" style={{ minHeight: 220, maxHeight: 260, overflow: 'hidden' }}>
                        <Bar data={assetUsageData} options={assetUsageOptions} height={180} />
                    </div>
                </div>
            </div>

            {/* Footfall: Current vs Predicted and System Health charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Footfall: Current vs Predicted */}
                <div className="bg-white rounded border p-4">
                    <div className="flex items-center mb-2">
                        <h2 className="font-bold text-lg mr-4">Footfall: Current vs Predicted</h2>
                        <span className="text-gray-400 text-sm">Additional description if needed.</span>
                    </div>
                    <hr className="mb-4" />
                    <div className="relative w-full" style={{ minHeight: 260 }}>
                        <Line data={footfallCurrentPredictedData} options={footfallCurrentPredictedOptions} height={180} />
                        {/* Weather icons and background regions */}
                        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                            {/* Weather icons */}
                            <div className="absolute left-[30%] top-4 text-2xl text-gray-400"><FaCloud /></div>
                            <div className="absolute left-[60%] top-4 text-2xl text-yellow-400"><FaSun /></div>
                            <div className="absolute left-[85%] top-4 text-2xl text-gray-400"><FaMoon /></div>
                        </div>
                        {/* Service interval and peak/off-peak labels */}
                        <div className="absolute left-0 bottom-0 w-full flex justify-between text-xs text-gray-400 px-2 pb-2">
                            
                        </div>
                    </div>
                    {/* Slider (visual only) */}
                    <div className="w-full mt-2 flex flex-col items-center">
                        <div className="w-11/12 h-6 bg-blue-100 rounded relative flex items-center">
                            <div className="absolute left-1/4 w-1/2 h-4 bg-blue-200 rounded opacity-60"></div>
                            <div className="absolute left-1/4 w-1/12 h-4 bg-blue-400 rounded"></div>
                        </div>
                    </div>
                </div>
                {/* System Health Bar Chart */}
                <div className="bg-white rounded border p-4">
                    <div className="flex items-center mb-2">
                        <h2 className="font-bold text-lg mr-4">System Health</h2>
                        <span className="text-gray-400 text-sm">Additional description if needed.</span>
                    </div>
                    <hr className="mb-4" />
                    <Bar data={systemHealthData} options={systemHealthOptions} height={180} />
                </div>
            </div>

            {/* Incident Log table */}
            <div className="bg-white rounded border p-4 m-3">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="font-bold text-lg">Incident Log</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">Filters 0/12</span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded px-2 py-1 text-sm"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-2 py-2 text-left font-semibold">Timestamp</th>
                                <th className="px-2 py-2 text-left font-semibold">Incident Type</th>
                                <th className="px-2 py-2 text-left font-semibold">Station</th>
                                <th className="px-2 py-2 text-left font-semibold">Zone</th>
                                <th className="px-2 py-2 text-left font-semibold">Description</th>
                                <th className="px-2 py-2 text-left font-semibold">Status</th>
                                <th className="px-2 py-2 text-left font-semibold">Severity</th>
                                <th className="px-2 py-2 text-left font-semibold">Response time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incidentLog.map((row, idx) => (
                                <tr key={idx} className="border-b last:border-b-0">
                                    <td className="px-2 py-2">{row.timestamp}</td>
                                    <td className="px-2 py-2">{row.type}</td>
                                    <td className="px-2 py-2">{row.station}</td>
                                    <td className="px-2 py-2">{row.zone}</td>
                                    <td className="px-2 py-2 truncate max-w-xs">{row.description}</td>
                                    <td className="px-2 py-2">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${statusBadge(row.status)}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-2 py-2">

                                    </td>
                                    <td className="px-2 py-2">{row.response}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <select className="border rounded px-1 py-0.5 text-xs">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <span className="text-xs text-gray-500">of 120</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                        <button className="px-1">&lt;&lt;</button>
                        <button className="px-1">&lt;</button>
                        <span className="px-2">5 / 24</span>
                        <button className="px-1">&gt;</button>
                        <button className="px-1">&gt;&gt;</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SupervisorDashboard;

const peakHoursData = {
  labels: ['1 AM', '4 AM', '7 AM', '10 AM', '1 PM', '4 PM', '7 PM', '10 PM'],
  datasets: [
    {
      label: 'May 12',
      data: [0, 0, 4200, 3200, 3500, 3700, 5000, 4500],
      borderColor: '#8fa5f7',
      backgroundColor: '#8fa5f733',
      fill: false,
      tension: 0,
      pointRadius: 0,
    },
    {
      label: 'May 13',
      data: [0, 0, 2000, 1500, 1800, 2000, 4300, 4000],
      borderColor: '#f7a98f',
      backgroundColor: '#f7a98f33',
      fill: false,
      tension: 0,
      pointRadius: 0,
    },
    {
      label: 'May 14',
      data: [0, 0, 1500, 1200, 1400, 1600, 3200, 3000],
      borderColor: '#8fd7b3',
      backgroundColor: '#8fd7b333',
      fill: false,
      tension: 0,
      pointRadius: 0,
    },
    {
      label: 'May 15',
      data: [0, 0, 1700, 1400, 1600, 1800, 3500, 3200],
      borderColor: '#4b5c8f',
      backgroundColor: '#4b5c8f33',
      fill: false,
      tension: 0,
      pointRadius: 0,
    },
    {
      label: 'May 16',
      data: [0, 0, 1100, 900, 1200, 1400, 2500, 2200],
      borderColor: '#b38fa5',
      backgroundColor: '#b38fa533',
      fill: false,
      tension: 0,
      pointRadius: 0,
    },
  ],
};

const peakHoursOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: { boxWidth: 16, font: { size: 14 } },
    },
    title: { display: false },
    annotation: {
      annotations: {
        peakLine: {
          type: 'line',
          xMin: 6,
          xMax: 6,
          borderColor: 'red',
          borderWidth: 2,
          borderDash: [4, 4],
          label: {
            content: ['6:42 PM'],
            enabled: true,
            position: 'start',
            color: 'red',
            font: { weight: 'bold', size: 14 },
            yAdjust: -20,
          },
        },
        peakCircle: {
          type: 'point',
          xValue: 6,
          yValue: 5000,
          backgroundColor: 'white',
          borderColor: 'red',
          borderWidth: 2,
          radius: 8,
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return value.toLocaleString();
        },
        stepSize: 2000,
      },
      max: 10000,
    },
  },
};

const assetUsageData = {
  labels: ['Escalator', 'Lifts', 'Ticket Kiosks'],
  datasets: [
    {
      label: 'Asset Usage',
      data: [32, 72, 20],
      backgroundColor: '#8fa5f7',
      borderRadius: 6,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
  ],
};

const assetUsageOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 80,
      ticks: {
        stepSize: 15,
      },
    },
  },
};

const footfallCurrentPredictedData = {
  labels: ['5 AM', '9 AM', '4 PM', '7 PM', '10 PM'],
  datasets: [
    {
      label: 'Current',
      data: [0, 3500, 2500, 4000, 3500],
      borderColor: '#7ea6f7',
      backgroundColor: 'rgba(126,166,247,0.1)',
      tension: 0,
      pointRadius: 0,
      borderWidth: 2,
      fill: false,
    },
  ],
};

const footfallCurrentPredictedOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    y: {
      min: 0,
      max: 11000,
      ticks: { stepSize: 2000 },
      grid: { color: '#e5e7eb' },
    },
    x: {
      grid: { color: '#e5e7eb' },
    },
  },
};

const systemHealthData = {
  labels: ['Station A', 'Station B', 'Station C', 'Station D', 'Station E'],
  datasets: [
    {
      label: 'Active',
      data: [2000, 3200, 1000, 1800, 2800],
      backgroundColor: '#7ed6a6',
      borderRadius: 6,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
    {
      label: 'Inactive',
      data: [1300, 1100, 900, 1200, 1400],
      backgroundColor: '#e57373',
      borderRadius: 6,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
  ],
};

const systemHealthOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: { boxWidth: 16, font: { size: 14 } },
    },
    title: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 5500,
      ticks: {
        stepSize: 1000,
      },
    },
  },
};