import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

const data = [
  { name: "Jan", thisYear: 42000, lastYear: 38000 },
  { name: "Feb", thisYear: 53000, lastYear: 45000 },
  { name: "Mar", thisYear: 48000, lastYear: 47000 },
  { name: "Apr", thisYear: 61000, lastYear: 56000 },
  { name: "May", thisYear: 72000, lastYear: 65000 },
  { name: "Jun", thisYear: 69000, lastYear: 63000 },
  { name: "Jul", thisYear: 74000, lastYear: 68000 },
  { name: "Aug", thisYear: 82000, lastYear: 70000 },
  { name: "Sep", thisYear: 78000, lastYear: 69000 },
  { name: "Oct", thisYear: 86000, lastYear: 75000 },
  { name: "Nov", thisYear: 91000, lastYear: 80000 },
  { name: "Dec", thisYear: 97000, lastYear: 84000 },
];

const Label = ({ x, y, value, color }) => (
  <g>
    <rect x={x - 22} y={y - 28} width="44" height="20" rx="4" fill={color} />
    <text x={x} y={y - 14} fill="#fff" fontSize="11" textAnchor="middle">
      {value}
    </text>
  </g>
);

export default function ReportChart() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Sales Overview
        </h2>

        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border rounded-md bg-gray-100 text-gray-600">
            Randomize Data
          </button>

          <button className="px-3 py-1 text-sm bg-[#e66239] text-white rounded-md">
            Show This Year Only
          </button>
        </div>
      </div>

      <div className="flex justify-end gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#e66239] rounded-full"></span>
          This Year
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#1f7a5c] rounded-full"></span>
          Last Year
        </div>
      </div>

      <div className="h-[340px] bg-[#f9fafb] rounded-md p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="bgFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f9fafb" stopOpacity={0} />
                <stop offset="100%" stopColor="#e5e7eb" stopOpacity={0.8} />
              </linearGradient>

              <linearGradient id="orange" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e66239" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#e66239" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1f7a5c" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#1f7a5c" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#e5e7eb" vertical={false} />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `₹${v.toLocaleString()}`}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="thisYear"
              fill="url(#bgFade)"
              stroke="none"
            />

            <Area type="monotone" dataKey="thisYear" fill="url(#orange)" stroke="none" />
            <Area type="monotone" dataKey="lastYear" fill="url(#green)" stroke="none" />

            <Line
              type="monotone"
              dataKey="thisYear"
              stroke="#e66239"
              strokeWidth={4}
              dot={false}
              strokeLinecap="round"
              label={(p) => <Label {...p} color="#e66239" />}
            />

            <Line
              type="monotone"
              dataKey="lastYear"
              stroke="#1f7a5c"
              strokeWidth={4}
              dot={false}
              strokeLinecap="round"
              label={(p) => <Label {...p} color="#1f7a5c" />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-right text-sm text-gray-500 mt-4">
        View detailed report
      </p>

    </div>
  );
}