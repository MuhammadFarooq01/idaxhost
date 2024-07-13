import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

function PricingTable({ title, isAnnual, isExpanded, handleToggle }) {
  const getHref = () => {
    switch (title) {
      case "Standard Hosting":
        return "/purchase/standard";
      case "Professional Hosting":
        return "/purchase/professional";
      case "Unlimited Hosting":
        return "/purchase/unlimited";
      default:
        return "/purchase";
    }
  };

  return (
    <>
      <div className="flex flex-col bg-white mx-3 px-6 sm:px-7 py-12 max-w-[352px] rounded-lg shadow-md relative">
        {title === "Standard Hosting" && (
          <img
            src="/frame.svg"
            alt=""
            className="absolute -z-10 -top-14 -left-16"
          />
        )}
        <div className="flex items-center justify-between sm:w-[296px] gap-5 relative">
          <h4 className="font-extrabold text-[20px] leading-6 text-cnavy">
            {title}
          </h4>
          <span className="px-5 py-2 bg-cred rounded-md text-orange-600 text-sm absolute -right-3 sm:right-1 -top-1/2">
            {title === "Standard Hosting" ? "Save 68%" : "Save 60%"}
          </span>
          {title === "Unlimited Hosting" && (
            <span className="font-miulish px-5 py-2 bg-gradient-to-r from-pink-600 to-coral-pink text-white text-xs font-bold absolute -left-5 -top-10">
              Most Popular
            </span>
          )}
        </div>
        <div className="flex text-btn-blue-dark font-medium font-miulish text-sm mt-5">
          From Only
        </div>
        <div className="flex text-cnavy mt-4 items-end">
          <span className=" text-[28px] sm:text-[42px] leading-10 font-extra-bold">
            {title === "Standard Hosting" && (isAnnual ? "$10.95" : "$0.95")}
            {title === "Professional Hosting" &&
              (isAnnual ? "$47.95" : "$3.95")}
            {title === "Unlimited Hosting" && (isAnnual ? "$24.95" : "$9.95")}
          </span>
          <span className="font-bold text-sm">
            {title === "Standard Hosting" &&
              (isAnnual
                ? "/year (Original $35.40)"
                : "/month (Original $2.95)")}
            {title === "Professional Hosting" &&
              (isAnnual
                ? "/year (Original $119.40)"
                : "/month (Original $9.95)")}
            {title === "Unlimited Hosting" &&
              (isAnnual
                ? "/year (Original $299.40)"
                : "/month (Original $24.95)")}
          </span>
        </div>
        <div className="flex mt-5 text-gray-600 font-miulish">
          Packed with great features, such as oneclick software installs, 24/7
          support
        </div>
        <div
          className={`flex flex-col mt-3 gap-2 transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[500px]" : "max-h-[200px]"
          } overflow-hidden`}
        >
          <div className="flex gap-1 items-center">
            <span className="text-btn-blue-dark text-[18px]">
              <AiOutlineCheck />
            </span>
            <span className="text-gray-600">
              {title === "Standard Hosting" && "5 GB SSD Storage"}
              {title === "Professional Hosting" && "50 GB SSD Storage"}
              {title === "Unlimited Hosting" && "Unlimited SSD Storage"}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-btn-blue-dark text-[18px]">
              <AiOutlineCheck />
            </span>
            <span className="text-gray-600">
              {title === "Standard Hosting" && "1 MySQL Database"}
              {title === "Professional Hosting" && "10 MySQL Database"}
              {title === "Unlimited Hosting" && "Unlimited MySQL Database"}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-btn-blue-dark text-[18px]">
              <AiOutlineCheck />
            </span>
            <span className="text-gray-600">
              {title === "Standard Hosting" && "1 Website"}
              {title === "Professional Hosting" && "10 Websites"}
              {title === "Unlimited Hosting" && "Unlimited Website"}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-btn-blue-dark text-[18px]">
              <AiOutlineCheck />
            </span>
            <span className="text-gray-600">cPanel Control Panel</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-btn-blue-dark text-[18px]">
              <AiOutlineCheck />
            </span>
            <span className="text-gray-600">Auto Backup & Cloud Storage</span>
          </div>
          {isExpanded && (
            <>
              <div className="flex gap-1 items-center">
                <span className="text-btn-blue-dark text-[18px]">
                  <AiOutlineCheck />
                </span>
                <span className="text-gray-600">Free Supersonic CDN</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-btn-blue-dark text-[18px]">
                  <AiOutlineCheck />
                </span>
                <span className="text-gray-600">Free Personalised Email</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-btn-blue-dark text-[18px]">
                  <AiOutlineCheck />
                </span>
                <span className="text-gray-600">Free Domain</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-btn-blue-dark text-[18px]">
                  <AiOutlineCheck />
                </span>
                <span className="text-gray-600">Free Migration</span>
              </div>
            </>
          )}
        </div>
        <div
          className="flex items-end gap-3 cursor-pointer mt-4"
          onClick={handleToggle}
        >
          <span className="bg-gray-200 rounded-full text-xl">
            {isExpanded ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </span>
          <span className="font-bold">
            {isExpanded ? "Collapse Features" : "Expand Features"}
          </span>
        </div>
        <a
          href={getHref()}
          className={`btn-primary ${
            title === "Unlimited Hosting"
              ? "btn-gradient"
              : "bg-cnavy hover:bg-btn-blue-dark"
          }`}
        >
          <span>Purchase Plan</span>
        </a>
      </div>
    </>
  );
}

export default PricingTable;
