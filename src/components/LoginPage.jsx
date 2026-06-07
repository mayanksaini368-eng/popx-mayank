import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  // to keep the page on top
  useEffect(() => {
    document.title = "Login page | PopX";
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="max-w-md h-203 w-93.75 bg-[#F7F8F9] p-4 flex flex-col">
        {/* Heading */}
        <h1 className="text-[28px] leading-9 font-medium Rubik text-[#1D2226] mt-4">
          <span className="block">Signin to your</span>
          <span className="block mt-1">PopX account</span>
        </h1>

        <p className="text-[18px] leading-6 Rubik font-normal opacity-[0.6] text-[#1D2226] mt-3 mb-6.5">
          <span className="block">Lorem ipsum dolor sit amet, </span>
          <span className="block mt-1">consectetur adipiscing elit,</span>
        </p>

        {/* Form */}
        <form className="space-y-4.5">
          
          <div className="relative">
            <input
              type="email"
              id="login-email"
              placeholder="Enter email address"
              readOnly
              className="peer w-full px-4 py-3 h-10 border border-[#CBCBCB] Box-Radius focus:outline-none focus:border-[#CBCBCB]"
            />
            <label
              htmlFor="login-email"
              className="absolute font-normal Rubik text-[13px] left-3 -top-2.5 bg-[#F7F8F9] px-1 text-[#6C25FF]"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="login-password"
              placeholder="Enter password"
              readOnly
              className="peer w-full px-4 py-3 h-10 border border-[#CBCBCB] Box-Radius focus:outline-none focus:border-[#CBCBCB]"
            />
            <label
              htmlFor="login-password"
              className="absolute font-normal Rubik text-[13px] w-23.25 left-3 -top-2.5 bg-[#F7F8F9] px-1 text-[#6C25FF]"
            >
              Password
            </label>
          </div>

          <button
            type="button"
            onClick={() => navigate("/account-setting")}
            className="w-full h-11 mt-2 bg-[#CBCBCB] text-white Rubik font-medium Box-Radius cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
