import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


export default function Sign() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const hanldeHaveData=()=>{
     toast.info("Already have Account !");
     navigate("/login");
  }
  const handleFacebook = () => {
    window.open("https://www.facebook.com/");
  };
  const handleGoogle = () => {
    window.open("https://www.google.com");
  };


  const handleTransfer = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    toast.success("Congratulations! You have created your account.");
    reset();
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

          <p className="mt-8 text-sm animated-text">@yourscom | @designspacee</p>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center items-center p-8 md:w-1/2 bg-white">
          <h1 className="text-xl font-bold mb-6 text-center">Create Account</h1>

          {/* Social buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mb-6">
            <button
              type="button"
              onClick={handleFacebook}
              className="flex items-center justify-center gap-3 border border-blue-500 px-4 py-2 cursor-pointer rounded-md text-sm sm:text-base text-blue-600 hover:bg-blue-50 transition w-full sm:w-auto"
            >
              <FaFacebook size={20} />
              <span>Login with Facebook</span>
            </button>

            <button
              type="button"
              onClick={handleGoogle}
              className="flex items-center justify-center gap-3 cursor-pointer border border-blue-500 px-4 py-2 rounded-md text-sm sm:text-base w-full sm:w-auto"
            >
              <FaGoogle size={20} className="text-red-500" />
              <span>Login with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center w-full max-w-sm mb-6 gap-3">
            <hr className="flex-grow border border-gray-300" />
            <span className="text-gray-500 text-sm font-medium">OR</span>
            <hr className="flex-grow border border-gray-300" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleTransfer)}
            className="flex flex-col gap-5 w-full max-w-sm"
          >
            <input
              type="text"
              placeholder="Enter your Full Name"
              {...register("fullName", { required: "Full Name is required" })}
              className="border-b border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 transition"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}

            <input
              type="email"
              placeholder="Enter your Email"
              {...register("email", { required: "Email is required" })}
              className="border-b border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}

          
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Min length 8" },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                    message: "Must include uppercase, number & special character",
                  },
                })}
                className="border-b border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 p-2 text-white font-semibold rounded-md cursor-pointer"
            >
              Create Account
            </button>

            <p className="mt-4 text-sm text-gray-600 flex gap-2 justify-center font-semibold">
              Already have an account?
              <span className="text-blue-500 cursor-pointer hover:underline" onClick={hanldeHaveData}>Login</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
