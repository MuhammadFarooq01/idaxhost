import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import PricingTable from "./PricingTable";
import FeatureCard from "./FeatureCard";

function PricingSection() {
  const [isAnnualWindows, setIsAnnualWindows] = useState(false);
  const [isAnnualLinux, setIsAnnualLinux] = useState(false);
  const [expandedWindowsTable, setExpandedWindowsTable] = useState(null);
  const [expandedLinuxTable, setExpandedLinuxTable] = useState(null);

  const handleToggleWindows = (table) => {
    setExpandedWindowsTable(expandedWindowsTable === table ? null : table);
  };

  const handleToggleLinux = (table) => {
    setExpandedLinuxTable(expandedLinuxTable === table ? null : table);
  };

  return (
    <>
      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center p-6 -mt-70">
        <FeatureCard
          iconSrc="/support-icon.svg"
          iconAlt="Support Icon"
          title="Professional Support 24/7"
          description="Expert technical support available all day everyday by phone or live chat."
        />
        <FeatureCard
          iconSrc="/features-performence.svg"
          iconAlt="Features Icon"
          title="Free Site Builder"
          description="Moving to idaxhost is easy, we'll take care of the migration for you for FREE"
        />
        <div className="md:col-span-2 xl:col-span-1">
          <FeatureCard
            iconSrc="/money-g.svg"
            iconAlt="Money Back Icon"
            title="30 Day Money Back"
            description="Your money back if you change your mind. No quibble, just simple and fair."
          />
        </div>
      </div>

      {/* Windows Pricing section starts */}
      <div className="flex justify-center mt-32">
        <div className="flex flex-col lg:w-5/12 text-center gap-12">
          <h2 className="text-5xl font-bold leading-[50px] text-cnavy">
            We Have Perfect Web Hosting Packages For You
          </h2>
          <h2 className="text-5xl font-bold leading-[50px] text-cnavy">
            Windows Web Hosting
          </h2>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-8 mb-8">
        <ToggleButton
          leftLabel="Monthly"
          rightLabel="Annual"
          isChecked={isAnnualWindows}
          onToggle={setIsAnnualWindows}
        />
      </div>

      {/* Pricing Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center place-content-center lg:px-28 py-14 gap-5 lg:gap-0">
        <PricingTable
          title="Standard Hosting"
          isAnnual={isAnnualWindows}
          isExpanded={expandedWindowsTable === "standard"}
          handleToggle={() => handleToggleWindows("standard")}
        />
        <PricingTable
          title="Professional Hosting"
          isAnnual={isAnnualWindows}
          isExpanded={expandedWindowsTable === "professional"}
          handleToggle={() => handleToggleWindows("professional")}
        />
        <div className="md:col-span-2 md:mt-5 xl:mt-0 xl:col-span-1">
          <PricingTable
            title="Unlimited Hosting"
            isAnnual={isAnnualWindows}
            isExpanded={expandedWindowsTable === "unlimited"}
            handleToggle={() => handleToggleWindows("unlimited")}
          />
        </div>
      </div>

      {/* Linux Pricing section starts */}
      <div className="flex justify-center text-center mt-24">
        <h2 className="text-5xl font-bold leading-[50px] text-cnavy">
          Linux Web Hosting
        </h2>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-8 mb-8">
        <ToggleButton
          leftLabel="Monthly"
          rightLabel="Annual"
          isChecked={isAnnualLinux}
          onToggle={setIsAnnualLinux}
        />
      </div>

      {/* Pricing Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center place-content-center lg:px-28 py-14 gap-5 lg:gap-0">
        <PricingTable
          title="Standard Hosting"
          isAnnual={isAnnualLinux}
          isExpanded={expandedLinuxTable === "standard"}
          handleToggle={() => handleToggleLinux("standard")}
        />
        <PricingTable
          title="Professional Hosting"
          isAnnual={isAnnualLinux}
          isExpanded={expandedLinuxTable === "professional"}
          handleToggle={() => handleToggleLinux("professional")}
        />
        <div className="md:col-span-2 md:mt-5 xl:mt-0 xl:col-span-1">
          <PricingTable
            title="Unlimited Hosting"
            isAnnual={isAnnualLinux}
            isExpanded={expandedLinuxTable === "unlimited"}
            handleToggle={() => handleToggleLinux("unlimited")}
          />
        </div>
      </div>
      {/* Money Back gurrentee card */}
      <div className="py-5">
        <div className="flex py-6 lg:mx-10  bg-white">
          <div className="-mt-6">
            <img src="/mb-circle-left.png" alt="" />
          </div>
          <div className="flex flex-col items-center gap-3 justify-center w-full">
            <div className="text-cnavy text-3xl font-extra-bold font-urbanist">
              30 day Money-back Guarantee
            </div>
            <div className="text-black text-opacity-55 font-miulish">
              Packed with great features, such as one-click software installs,
              24/7 support.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
              <div className="flex col-span-1 items-center gap-5 font-miulish text-cnavy">
                <img src="/up-down.svg" alt="" />
                <p className="">Easily Upgrade or Downgrade</p>
              </div>
              <div className="flex  col-span-1 items-center gap-5 font-miulish text-cnavy">
                <img src="/calendar.svg" alt="" />
                <p className="">99.9% Uptime Guarantee</p>
              </div>
              <div className="flex col-span-1 md:col-span-2 lg:col-span-1 md:justify-center items-center gap-5 font-miulish text-cnavy">
                <img src="/stop-watch.svg" alt="" />
                <p className="">Instant prorated refund</p>
              </div>
            </div>
          </div>
          <div className="self-end -mr-6 -mb-10">
            <img src="/mb-circle-right.png" alt="" />
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

export default PricingSection;
