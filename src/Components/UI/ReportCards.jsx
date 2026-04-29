export default function ReportCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <p className="text-sm text-gray-600">Total Revenue</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          $45,231
        </h2>

        <p className="text-sm text-green-500 mt-2">
          ↑ 12% from last month
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <p className="text-sm text-gray-600">Products Sold</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          1,234
        </h2>

        <p className="text-sm text-green-500 mt-2">
          ↑ 8% from last month
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <p className="text-sm text-gray-600">Low Stock Items</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          23
        </h2>

        <p className="text-sm text-red-500 mt-2">
          ↓ 3% from last month
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <p className="text-sm text-gray-600">Out of Stock</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          5
        </h2>

        <p className="text-sm text-red-500 mt-2">
          ↓ 2% from last month
        </p>
      </div>

    </div>
  );
}