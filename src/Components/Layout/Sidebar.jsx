import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBox,
  FiPlus,
  FiFileText,
  FiAlertCircle,
  FiBook,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: FiHome, path: "/" },
    { name: "Inventory", icon: FiBox, path: "/inventory" },
    { name: "Add Product", icon: FiPlus, path: "/add" },
    { name: "Reports", icon: FiFileText, path: "/reports" },
    { name: "404 Error", icon: FiAlertCircle, path: "/error404" },
    { name: "Docs", icon: FiBook, path: "/docs" },
  ];

  const account = [
    { name: "Log in", icon: FiLogIn, path: "/login" },
    { name: "Sign up", icon: FiUserPlus, path: "/signup" },
  ];

  return (
    <div
      className={`
      fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r z-40 p-5
      transform transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0
    `}
    >

      <h1 className="text-xl font-bold mb-8">
        <span className="text-orange-500">In</span>App
      </h1>

      <p className="text-gray-400 text-sm mb-3">Main</p>

      {menu.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition
            ${
              location.pathname === item.path
                ? "bg-orange-100 text-orange-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Icon className="text-lg" />
            {item.name}
          </Link>
        );
      })}

      <p className="text-gray-400 text-sm mt-6 mb-3">Account</p>

      {account.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <Icon className="text-lg" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}