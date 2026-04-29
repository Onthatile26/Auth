import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/otp"); // go straight to OTP
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa] px-4">
      
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-8 text-center">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="logo" className="w-14 mb-2" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Forgot Password
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-6">
          Click below to verify your account using OTP
        </p>

        {/* Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-[#e66239] hover:bg-[#cf5530] text-white py-2 rounded-md transition"
        >
          Continue to OTP
        </button>

        {/* Back to login */}
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