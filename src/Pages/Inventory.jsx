import { useNavigate } from "react-router-dom";
import { FiEdit2, FiTrash2, FiFilter } from "react-icons/fi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BsFileEarmarkText } from "react-icons/bs";

import gaming from "../assets/images/Gming.png";
import air from "../assets/images/Air.png";
import smart from "../assets/images/Smart.png";
import usb from "../assets/images/usb.png";
import port from "../assets/images/port.png";
import keyboard from "../assets/images/keybord.png";
import mac from "../assets/images/Mac.png";
import wire from "../assets/images/Wire.png";

export default function Inventory() {
  const navigate = useNavigate();

  const products = [
    { name: "Gaming Joy Stick", img: gaming, code: "PRD001", price: "$99.99", qty: 150 },
    { name: "Wireless Earphones", img: air, code: "PRD002", price: "$89.99", qty: 320 },
    { name: "Smart Watch Pro", img: smart, code: "PRD003", price: "$98.00", qty: 200 },
    { name: "USB-C Fast Charger", img: usb, code: "PRD004", price: "$86.00", qty: 80 },
    { name: "Portable Bluetooth Speaker", img: port, code: "PRD005", price: "$32.00", qty: 110 },
    { name: "Magic Keyboard", img: keyboard, code: "PRD006", price: "$49.00", qty: 10 },
    { name: "MacBook Pro 16\"", img: mac, code: "PRD007", price: "$99.00", qty: 10 },
    { name: "Wireless Earphones", img: wire, code: "PRD008", price: "$109.00", qty: 200 },
  ];

  return (
    <div className="space-y-5">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[22px] font-semibold text-gray-800">Inventory</h1>
          <p className="text-gray-500 text-sm">Manage your product inventory</p>
        </div>

        <button
          onClick={() => navigate("/add")}
          className="bg-[#e66239] text-white px-4 py-2 rounded-md text-sm"
        >
          Add Product
        </button>
      </div>

      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-200 rounded-md px-4 py-2 w-72 text-sm focus:outline-none"
        />

        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md text-sm text-gray-600">
            <FiFilter className="text-[14px]" />
            Filter
          </button>

          <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md text-sm text-gray-600">
            <HiOutlineDocumentDownload className="text-[15px]" />
            Excel
          </button>

          <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md text-sm text-gray-600">
            <BsFileEarmarkText className="text-[14px]" />
            PDF
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-md overflow-hidden">

        <table className="w-full text-sm">
          <thead className="bg-[#f5f5f5] text-gray-600">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Image</th>
              <th className="text-left font-medium">Code</th>
              <th className="text-left font-medium">Category</th>
              <th className="text-left font-medium">Brand</th>
              <th className="text-left font-medium">Price</th>
              <th className="text-left font-medium">Unit</th>
              <th className="text-left font-medium">Quantity</th>
              <th className="text-left font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="border-t border-gray-200">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img src={p.img} className="w-10 h-10 rounded-md bg-gray-100 p-1" />
                  <span className="text-gray-800">{p.name}</span>
                </td>

                <td className="text-gray-600">{p.code}</td>
                <td className="text-gray-600">Electronics</td>
                <td className="text-gray-600">Tech Pro</td>
                <td className="text-gray-800">{p.price}</td>
                <td className="text-gray-600">pcs</td>
                <td className="text-gray-800">{p.qty}</td>

                <td className="flex items-center gap-3">
                  <FiEdit2 className="text-gray-500 cursor-pointer text-[15px]" />
                  <FiTrash2 className="text-red-500 cursor-pointer text-[15px]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-500 border-t">
          <span>Showing product per page</span>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border rounded-md">Previous</button>
            <button className="px-3 py-1 bg-[#e66239] text-white rounded-md">1</button>
            <button className="px-3 py-1 border rounded-md">2</button>
            <button className="px-3 py-1 border rounded-md">3</button>
            <button className="px-3 py-1 border rounded-md">Next</button>
          </div>
        </div>

      </div>

    </div>
  );
}