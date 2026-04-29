import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logos/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // TEMP login success
    alert("Login successful");

    // redirect to dashboard
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa] px-4">
      
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-8">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="logo" className="w-14 mb-2" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
          Sign in to your account
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e66239]"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <label className="text-gray-600">Password</label>
            <Link
              to="/forgot"
              className="text-[#e66239] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e66239]"
          />
        </div>

        {/* Remember */}
        <div className="flex items-center mb-5">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-600">Remember me</span>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-[#e66239] hover:bg-[#cf5530] text-white py-2 rounded-md transition"
        >
          Sign in
        </button>

        {/* Footer */}
        <p className="text-center text-sm mt-5 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#e66239] hover:underline"
          >
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}