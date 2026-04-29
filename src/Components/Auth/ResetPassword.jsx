import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const navigate = useNavigate();

  const showMessage = (type, message) => {
    setToast({ show: true, type, message });

    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });

      if (type === "success") {
        navigate("/login");
      }
    }, 2500);
  };

  const handleReset = () => {
    if (!password || !confirm) {
      showMessage("error", "Please fill all fields");
      return;
    }

    if (password !== confirm) {
      showMessage("error", "Passwords do not match");
      return;
    }

    showMessage("success", "Your password has been successfully reset");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa] px-4">

      {toast.show && (
        <div
          className={`fixed top-5 right-5 px-5 py-3 rounded-md shadow-lg text-white z-50 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-8">
        
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="logo" className="w-14 mb-2" />
        </div>

        <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
          Reset Password
        </h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e66239]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e66239]"
          />
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-[#e66239] hover:bg-[#cf5530] text-white py-2 rounded-md transition"
        >
          Reset Password
        </button>

        <p className="text-center text-sm mt-5 text-gray-600">
          Back to{" "}
          <Link to="/login" className="text-[#e66239] hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}