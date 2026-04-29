import TopCard from "../Components/UI/TopCard";
import InfoCard from "../Components/UI/InfoCard";
import SalesChart from "../Components/Charts/SalesChart";
import OverviewCard from "../Components/UI/OverviewCard";
import TopSelling from "../Components/UI/TopSelling";
import LowStock from "../Components/UI/LowStock";
import RecentSales from "../Components/UI/RecentSales";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500 text-sm">
          Your main content goes here...
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <TopCard title="Total Sales" amount="$25,000" change="+5%" color="bg-[#fbe9e7]" iconBg="bg-[#e66239]" />
        <TopCard title="Total Purchase" amount="$18,000" change="+22%" color="bg-[#e8f5e9]" iconBg="bg-green-500" />
        <TopCard title="Total Expenses" amount="$9,000" change="+10%" color="bg-[#e3f2fd]" iconBg="bg-blue-500" />
        <TopCard title="Invoice Due" amount="$25,000" change="+35%" color="bg-[#fff8e1]" iconBg="bg-yellow-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard amount="$25,458" title="Total Profit" change="+35% vs Last Month" />
        <InfoCard amount="$45,458" title="Total Payment Returns" change="-20% vs Last Month" />
        <InfoCard amount="$34,458" title="Total Expenses" change="-20% vs Last Month" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <OverviewCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopSelling />
        <LowStock />
        <RecentSales />
      </div>

    </div>
  );
}