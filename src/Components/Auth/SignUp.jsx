import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa] px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-8">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="logo" className="w-14 mb-2" />
          <p className="text-sm text-gray-400"></p>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
          Create your account
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Full name
          </label>
          <input
            type="text"
            placeholder="Dee"
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e66239]"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e66239]"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e66239]"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="Repeat password"
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e66239]"
          />
        </div>

        {/* Terms */}
        <div className="flex items-center mb-5">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-600">
            I agree to the terms and privacy
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-[#e66239] hover:bg-[#cf5530] text-white py-2 rounded-md transition">
          Sign up
        </button>

        {/* Footer */}
        <p className="text-center text-sm mt-5 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#e66239] hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}