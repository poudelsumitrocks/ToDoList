import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function Forgotpass() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const [localaction, setLocalAction] = useState("");

  const handleUpdate = (formData) => {
    localStorage.setItem("data", JSON.stringify(formData));
    setLocalAction("Update");
    navigate("/login");
  };

  return (
    <div className="bg-blue-700 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-5xl flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        {/* Left */}
        <div className="bg-blue-200 flex flex-col justify-center items-center text-center md:text-left p-10 md:w-1/2">
          <h2 className="font-semibold mb-4 text-2xl animated-text">
            New webdesign <br /> For your Business?
          </h2>
          <h1 className="text-blue-700 font-bold text-3xl mb-2 animated-text">
            Design Space
          </h1>
          <p className="animated-text">will help you.</p>
          <div className="flex justify-center mt-6">
            <div className="w-32 h-32 bg-blue-700 flex justify-center items-center rounded-3xl animated-logo">
              <span className="text-9xl font-bold text-blue-200">S</span>
            </div>
          </div>
          <p className="mt-8 text-sm animated-text">
            @yourscom | @designspacee
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center items-center p-8 md:w-1/2 bg-white">
          <form
            className="flex flex-col gap-5 w-full max-w-sm"
            onSubmit={handleSubmit((data) => {
              if (data.password !== data.confirmPassword) {
                alert("Passwords do not match!");
                return;
              }
              alert("Password updated successfully!");
              handleUpdate(data);
            })}
          >
            {/* Email */}
            <input
              type="email"
              placeholder="Enter your Email"
              {...register("email", { required: true })}
              className="border-b border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 transition"
            />

            {/* Password */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                {...register("password", { required: true })}
                className="border-b border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 transition"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Your Password"
                {...register("confirmPassword", { required: true })}
                className="border-b border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 transition"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 p-2 text-white font-semibold rounded-md cursor-pointer"
            >
              Change password
            </button>

            {/* Remember me */}
            <div className="flex flex-row gap-2 text-md items-center">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}