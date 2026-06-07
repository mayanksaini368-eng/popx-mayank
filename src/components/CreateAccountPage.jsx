import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccountPage() {

  // to keep the page on top
  useEffect(() => {
    document.title = "Signup page | PopX";
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="max-w-md bg-[#F7F8F9] p-4 h-203 w-93.75 flex flex-col">
        <h1 className="text-[28px] font-medium Rubik text-[#1D2226] mb-6 mt-4">
          Create your <br /> PopX account
        </h1>

        <form className="flex flex-col grow space-y-6">
          
          <div className="relative">
            <input
              type="text"
              id="fullname"
              value="Marry Doe"
              readOnly
              required
              className="peer w-full px-4 py-3 h-10 border border-[#CBCBCB] rounded-md focus:outline-none focus:border-[#CBCBCB]"
            />
            <label
              htmlFor="fullname"
              className="absolute w-21.5 font-normal Rubik text-[13px] left-3 -top-2.5 bg-[#F7F8F9] px-1 text-[#6C25FF]"
            >
              Full Name<span className="text-[#DD4A3D]">*</span>
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone"
              value="Marry Doe"
              readOnly
              required
              className="peer w-full px-4 py-3 h-10 border border-[#CBCBCB] rounded-md focus:outline-none focus:border-[#CBCBCB]"
            />
            <label
              htmlFor="phone"
              className="absolute font-normal Rubik text-[13px] left-3 -top-2.5 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]"
            >
              Phone number<span className="text-[#DD4A3D]">*</span>
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              value="Marry Doe"
              readOnly
              required
              className="peer w-full px-4 py-3 h-10 border border-[#CBCBCB] rounded-md focus:outline-none focus:border-[#CBCBCB]"
            />
            <label
              htmlFor="email"
              className="absolute font-normal Rubik text-[13px] left-3 -top-2.5 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]"
            >
              Email address<span className="text-[#DD4A3D]">*</span>
            </label>
          </div>

          <div className="relative">
            <input
              type="input"
              id="password"
              value="Marry Doe"
              readOnly
              required
              className="peer w-full px-4 py-3 h-10 border border-[#CBCBCB] rounded-md focus:outline-none focus:border-[#CBCBCB]"
            />
            <label
              htmlFor="password"
              className="absolute w-21.5 font-normal Rubik text-[13px] left-3 -top-2.5 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]"
            >
              Password<span className="text-[#DD4A3D]">*</span>
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="company"
              value="Marry Doe"
              readOnly
              required
              className="peer w-full px-4 py-3 h-10 border border-[#CBCBCB] rounded-md focus:outline-none focus:border-[#CBCBCB]"
            />
            <label
              htmlFor="company"
              className="absolute font-normal Rubik text-[13px] left-3 -top-2.5 bg-[#F7F8F9] px-1 text-sm text-[#6C25FF]"
            >
              Company name
            </label>
          </div>

          <div>
            <p className="font-normal Rubik text-[13px] text-[#1D2226] mb-2">
              Are you an Agency?<span className="text-[#DD4A3D]">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex font-normal Rubik text-[14px] items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  required
                  defaultChecked
                  className="accent-[#642AF5] scale-150"
                />
                Yes
              </label>
              <label className="flex font-normal Rubik text-[14px] items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  required
                  disabled
                  className="accent-[#642AF5] scale-150"
                />
                No
              </label>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/account-setting")}
            className="w-full h-11 mt-auto mb-6 text-[16px] bg-[#6C25FF] font-medium Rubik text-[#F7F8F9] Box-Radius cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
