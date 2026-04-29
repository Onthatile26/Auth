import Chart from "react-apexcharts";

export default function OverviewCard() {
  const chartOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
    },
    colors: ["#10b981", "#e66239", "#facc15"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        track: {
          background: "#f1f1f1",
        },
        dataLabels: {
          show: false,
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
  };

  const series = [75, 55, 40];

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
      
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">Overall Information</h2>
        <select className="border border-gray-200 rounded px-2 py-1 text-sm">
          <option>Last 6 Months</option>
        </select>
      </div>

      <p className="text-sm text-gray-600 mb-4">Customers Overview</p>

      <div className="flex items-center justify-between">
        
        {/* 🔥 REAL MULTI ARC CHART */}
        <div className="w-40">
          <Chart options={chartOptions} series={series} type="radialBar" height={200} />
        </div>

        {/* RIGHT SIDE STATS */}
        <div className="flex gap-10 items-center">
          
          <div className="text-center">
            <h2 className="text-2xl font-bold">5.5K</h2>
            <p className="text-green-500">First Time</p>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              ↑ 25%
            </span>
          </div>

          <div className="text-center border-l pl-10">
            <h2 className="text-2xl font-bold">3.5K</h2>
            <p className="text-yellow-500">Return</p>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              ↑ 21%
            </span>
          </div>

        </div>

      </div>

      <div className="border-t border-gray-200 my-6"></div>

      <div className="grid grid-cols-3 text-center">
        <div>
          <h2 className="text-xl font-bold">6987</h2>
          <p className="text-gray-500 text-sm">Suppliers</p>
        </div>

        <div className="border-l border-r">
          <h2 className="text-xl font-bold">4896</h2>
          <p className="text-gray-500 text-sm">Customers</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">487</h2>
          <p className="text-gray-500 text-sm">Orders</p>
        </div>
      </div>

    </div>
  );
}