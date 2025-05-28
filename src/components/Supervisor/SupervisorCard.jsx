import React from "react";
import { AiOutlineAreaChart } from "react-icons/ai";

const SupervisorCard = (props) => {
  const title = props.title || "Default Title";
  const days = props.days || 5;
  const percentage = props.percentage || 10;
  const value = props.value || 100;
  const Icon = props.icon || AiOutlineAreaChart;

  return (
    <div className="text-gray-400 bg-gray-100 rounded w-33 h-18 px-2 py-1.5 flex flex-col space-x-4 border-x border-r border-b border-gray-300 border-t-2 border-t-black">
      <div className="flex flex-1">
        <h3 className="text-xs font-bold">{title}</h3>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <span className="text-gray-500 text-md font-semibold">{value}</span>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex">
            {/* Icon aligned at bottom */}
            <Icon className="text-gray-400" />
          </div>
          <div className="flex flex-col justify-end ml-1">
            <h3 className="text-xs text-right text-gray-400">12%</h3>
            <h3 className="text-xs text-gray-400">Last 24hr</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorCard;