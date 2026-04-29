import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOtp(value);
  };

  const handleVerify = () => {
    navigate("/reset");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa] px-4">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-8">

        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="logo" className="w-14 mb-2" />
        </div>

        <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
          Enter OTP
        </h2>

        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={handleChange}
          placeholder="Enter 6 digit OTP"
          className="w-full px-4 py-2 border border-gray-200 rounded-md text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-[#e66239]"
        />

        <button
          onClick={handleVerify}
          className="w-full mt-5 bg-[#e66239] text-white py-2 rounded-md"
        >
          Verify OTP
        </button>

      </div>
    </div>
  );
}