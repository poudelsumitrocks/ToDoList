import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400, subject: "Math", A: 120 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210, subject: "Science", A: 98 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290, subject: "English", A: 86 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000, subject: "History", A: 99 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181, subject: "Art", A: 85 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500, subject: "Music", A: 90 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100, subject: "PE", A: 95 },
];

const Barchart = () => {
  return (
    <div className="min-h-screen flex flex-col pr-4 pt-4 gap-10 bg-gray-100">
      <div className="flex items-center justify-between w-full max-w-md mx-auto bg-white rounded shadow px-4 py-2 gap-3">
        <div className="flex items-center">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full border-none focus:outline-none"
          />
        </div>

        <div className="relative">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaBell size={20} />
          </button>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </div>
      </div>

      <hr className="border-gray-400" />

      <div className="flex flex-col md:flex-row items-stretch gap-6">
        <div className="flex-1 bg-white p-4 rounded shadow h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
              <Bar dataKey="uv" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <hr className="w-px h-96 bg-gray-300" />

        <div className="flex-1 bg-white p-4 rounded shadow h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <hr className=" border-gray-400 " />

      <div className="bg-white p-4 rounded shadow h-96">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
