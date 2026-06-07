import React, { useEffect } from "react";

function AccountSettingsPage() {

  // to keep the page on top
  useEffect(() => {
    document.title = "Profile page | PopX";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="max-w-md h-203 w-93.75 bg-[#F7F8F9] flex flex-col">
        {/* Header */}
        <div className="pl-3 pt-5.5 pb-4 bg-white">
          <h1 className="text-[18px] font-normal Rubik text-[#1D2226]">
            Account Settings
          </h1>
        </div>

        {/* Profile Section */}
        <div className="pl-4 py-6 flex gap-4 items-start">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src="\assets\Ellipse114.png"
              alt="profile"
              className="rounded-full object-cover"
            />
            {/* Camera Icon */}
            <div className="absolute bottom-0 -right-0.5 rounded-full flex items-center justify-center">
              <img
                src="\assets\Group1585.png"
                alt="profile"
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* User's Name & Email */}
          <div>
            <p className="text-[15px] font-medium Rubik text-[#1D2226]">
              Marry Doe
            </p>
            <p className="text-[14px] font-normal Rubik text-[#1D2226]">
              Marry@gmail.com
            </p>
          </div>
        </div>

        {/* Desc.. */}
        <div className="px-4 pb-4 border-b border-dashed border-[#CBCBCB]">
          <p className="text-[13px] font-normal leading-4.5 Rubik text-[#1D2226]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        {/* Divider at bottom */}
        <div className="mt-122.25 border-t border-dashed border-[#CBCBCB]" />
      </div>
    </div>
  );
}

export default AccountSettingsPage;
