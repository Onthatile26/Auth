import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-[#f5f6fa] min-h-screen">
      
      <Sidebar open={open} setOpen={setOpen} />

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        ></div>
      )}

      <div className="flex-1 flex flex-col">
        
        <Navbar setOpen={setOpen} />

        <div className="p-6 flex-1">
          <Outlet />
        </div>

        <Footer />

      </div>

    </div>
  );
}