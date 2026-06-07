import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Welcome() {

  // to keep the page on top
  useEffect(() => {
    document.title = "Landing page | PopX";
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-center items-center h-screen overflow-hidden">
      <div className="h-full w-93.75 border border-[#CBCBCB] bg-[#F7F8F9] p-4 pb-0 flex flex-col overflow-hidden">
        {/* Logo or Image Area */}
        <div className="flex justify-center flex-shrink-0">
          <div className="w-full rounded-lg">
            {/* Placeholder for logo or image */}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end mb-8 p-0 overflow-hidden">
          {/* Text for Headings */}
          <div className="text-center space-y-2 mb-6 flex-shrink-0">
            <p className="text-[28px] font-medium Rubik text-[#1D2226] text-left">
              Welcome to PopX
            </p>
            <p className="text-[18px] opacity-[0.6] font-normal Rubik text-[#1D2226] text-left">
              Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,
            </p>
          </div>

          <div className="space-y-2 place-items-end flex-shrink-0">
            {/* Button for creating new account */}
            <button
              onClick={() => navigate("/create-account")}
              className="cursor-pointer w-full bg-[#6C25FF] font-medium Rubik text-white h-11 px-6 Box-Radius focus:outline-none"
            >
              Create Account
            </button>

            {/* Button for log into existing account */}
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer w-full bg-[#6C25FF4B] font-medium Rubik text-[#1D2226] h-11 px-6 mb-0 Box-Radius focus:outline-none"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;