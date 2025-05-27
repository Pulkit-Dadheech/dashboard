import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiBell, FiUser, FiFilter, FiHelpCircle, FiMonitor } from 'react-icons/fi';

const MainNavbar = () => {
    const location = useLocation();
    const now = new Date();
    const dateStr = now.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    const timeStr = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

    const navItems = [
        { name: "Map", path: "/map" },
        { name: "Dashboard", path: "/" },
        { name: "Video", path: "/video" },
        { name: "Settings", path: "/settings" }
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Company Branding */}
                    <div className="">
                        <span className="text-gray-600 font-bold text-sm leading-tight">HITACHI</span>
                        <span> | </span>
                        <span className="text-gray-400 text-sm leading-tight -mt-1">Hitachi Visualization Suite</span>
                    </div>
                    {/* Center: Navigation */}
                    <div className="flex items-center space-x-4 h-full">
                        {navItems.map(item => (
                            <Link
                            key={item.name}
                            to={item.path}
                            className={`h-full flex items-center text-sm font-semibold min-h-max px-2 py-1 transition ${
                                location.pathname === item.path
                                    ? "border-b-2 border-gray-800 text-gray-400 "
                                    : "text-gray-400 hover:cursor-pointer"
                            }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    {/* Right: Date, Time, Icons */}
                    <div className="flex items-center space-x-4">
                        <div className="flex flex-col items-end mr-4">
                            <span className="text-xs text-gray-500">{dateStr}</span>
                            <span className="text-base font-semibold text-gray-700">{timeStr}</span>
                        </div>
                        <FiBell className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" title="Alarm" />
                        <FiUser className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" title="Profile" />
                        <FiFilter className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" title="Filter" />
                        <span className="relative">
                            <FiHelpCircle className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" title="Help" />
                            <span className="absolute top-0 right-0 block w-2 h-2 bg-blue-500 rounded-full"></span>
                        </span>
                        <FiMonitor className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" title="Screen" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;