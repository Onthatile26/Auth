import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

// Pages
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import AddProduct from "./Pages/AddProduct";
import Reports from "./Pages/Reports";

// Auth
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import OTP from "./Components/Auth/OTP";
import ResetPassword from "./Components/Auth/ResetPassword";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* AUTH PAGES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset" element={<ResetPassword />} />

      </Routes>
    </BrowserRouter>
  );
}