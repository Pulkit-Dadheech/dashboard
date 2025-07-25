import React, { useState, useRef } from "react";

const SupervisorNavbar = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  // Helper to format date as "MMM DD, YYYY"
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  // Close picker when clicking outside
  React.useEffect(() => {
    function handleClick(e) {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setShowPicker(false);
      }
    }
    if (showPicker) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showPicker]);

  return (
    <nav className="bg-white shadow-md w-full rounded">
      <div className="px-2 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left: Title */}
          <span className="text-xl font-bold text-gray-500">
            Supervisor
          </span>

          <span>
            Real Time
          </span>
          <span class="border-b-2 border-grey-600 font-semibold">
            Historic
          </span>

          {showPicker && (
                <div className="absolute right-0 mt-2 z-10 bg-white border rounded shadow-md p-3 flex flex-col space-y-2 min-w-[200px]">
                  <label className="text-xs text-gray-500">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border border-gray-300 px-2 py-1 text-xs rounded"
                  />
                  <label className="text-xs text-gray-500">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    min={startDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border border-gray-300 px-2 py-1 text-xs rounded"
                  />
                  <button
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded mt-2"
                    onClick={() => setShowPicker(false)}
                  >
                    OK
                  </button>
                </div>
              )}

          {/* Right: Dropdowns and Date Range */}
          <div className="flex items-center space-x-3">

          {/* Date Range Column */}
          
          <div className="relative" ref={pickerRef}>
              <button
                type="button"
                className="border border-gray-300 px-3 py-1 text-xs rounded bg-white min-w-[180px] text-left"
                onClick={() => setShowPicker((v) => !v)}
              >
                {startDate && endDate
                  ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                  : "Select date range"}
              </button>
              
            </div>
            <select className="border border-gray-300 px-2 py-1 text-xs rounded">
              <option value="">Paddington Station</option>
              <option value="electronics">option 1</option>
              <option value="fashion">option 2</option>
              <option value="grocery">optioin 3</option>
            </select>
            <select className="border text-blue-500 border-blue-500  px-2 py-1 text-xs rounded">
              <option value="">Export</option>
              <option value="electronics">option 1</option>
              <option value="fashion">option 2</option>
              <option value="grocery">optioin 3</option>
            </select>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default SupervisorNavbar;
