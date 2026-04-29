import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Navbar({ setOpen }) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 border-b border-gray-200">

      {/* LEFT: MENU ICON */}
      <FiMenu
        onClick={() => setOpen(true)}
        className="text-xl text-gray-600 cursor-pointer lg:hidden"
      />

      {/* RIGHT: BELL + PROFILE */}
      <div className="flex items-center gap-6 ml-auto">

        <div className="relative">
          <FaBell className="text-gray-600 text-lg cursor-pointer" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-9 h-9 rounded-full object-cover cursor-pointer"
        />
      </div>

    </div>
  );
}