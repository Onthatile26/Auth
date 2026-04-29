import { useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function AddProduct() {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[22px] font-semibold text-gray-800">Add Inventory</h1>
          <p className="text-gray-500 text-sm">Manage your inventory items</p>
        </div>

        <button
          onClick={() => navigate("/inventory")}
          className="bg-[#e66239] text-white px-4 py-2 rounded-md text-sm"
        >
          Go to Inventory List
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-md p-6">

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="text-sm text-gray-600">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">SKU</label>
            <input
              type="text"
              placeholder="Enter SKU"
              className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Price</label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Stock Quantity</label>
            <input
              type="number"
              placeholder="0"
              className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div className="col-span-2 relative">
            <label className="text-sm text-gray-600">Category</label>

            <select className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none">
              <option>Select category</option>
              <option>Electronics</option>
              <option>Accessories</option>
            </select>

            <FiChevronDown className="absolute right-3 top-10 text-gray-400 text-[16px] pointer-events-none" />
          </div>

          <div className="col-span-2">
            <label className="text-sm text-gray-600">Product Image</label>

            <div className="mt-1 flex items-center border border-gray-200 rounded-md overflow-hidden">
              <label className="px-4 py-2 bg-gray-100 text-sm cursor-pointer">
                Choose File
                <input type="file" className="hidden" />
              </label>

              <span className="px-4 text-sm text-gray-500">
                No file chosen
              </span>
            </div>
          </div>

          <div className="col-span-2">
            <label className="text-sm text-gray-600">Description</label>

            <textarea
              rows="5"
              placeholder="Enter product description"
              className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
            ></textarea>
          </div>

        </div>

        <div className="mt-6 flex gap-3">
          <button className="bg-[#e66239] text-white px-5 py-2 rounded-md text-sm">
            Add Product
          </button>

          <button className="bg-gray-600 text-white px-5 py-2 rounded-md text-sm">
            Clear
          </button>
        </div>

      </div>

    </div>
  );
}