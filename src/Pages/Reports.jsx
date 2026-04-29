import ReportCards from "../Components/UI/ReportCards";
import ReportChart from "../Components/Charts/ReportChart";
import TopProducts from "../Components/UI/TopProducts";

export default function Reports() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Reports
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          View your inventory analytics and reports
        </p>
      </div>

      <ReportCards />

      <ReportChart />

      <TopProducts />

    </div>
  );
}