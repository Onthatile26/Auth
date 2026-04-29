import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "28 Jan", sales: 40, purchase: 75 },
  { name: "29 Jan", sales: 55, purchase: 85 },
  { name: "30 Jan", sales: 58, purchase: 100 },
  { name: "31 Jan", sales: 56, purchase: 98 },
  { name: "1 Feb", sales: 60, purchase: 87 },
  { name: "2 Feb", sales: 58, purchase: 105 },
  { name: "3 Feb", sales: 63, purchase: 90 },
  { name: "4 Feb", sales: 60, purchase: 115 },
  { name: "5 Feb", sales: 65, purchase: 95 },
];

export default function SalesChart() {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
      
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">Sales vs Purchase</h2>
        <select className="border border-gray-200 rounded px-2 py-1 text-sm">
          <option>This Year</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#eee" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="sales" fill="#f4a58a" radius={[4, 4, 0, 0]} />
            <Bar dataKey="purchase" fill="#e66239" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-4 text-sm">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-[#f4a58a] inline-block"></span>
          Sales
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-[#e66239] inline-block"></span>
          Purchase
        </span>
      </div>
    </div>
  );
}