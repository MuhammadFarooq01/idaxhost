import { IoClose } from "react-icons/io5";
import {
  FaWordpress,
  FaJoomla,
  FaDrupal,
  FaShopify,
  FaMagento,
  FaTypo3,
} from "react-icons/fa";
import { SiWix, SiHubspot } from "react-icons/si";

const ServiceSidebar = ({ isServicesOpen, toggleServices }) => {
  return (
    <div
      className={`flex flex-col z-50 ${
        isServicesOpen
          ? "-translate-x-[0%] transition-all duration-500"
          : "translate-x-[120%] transition-all duration-500"
      } fixed px-7 pt-5 pb-10 bg-white w-[580px] h-[580px] max-h-screen overflow-y-scroll shadow-lg right-10 top-5 rounded-md`}
    >
      {/* close icon */}
      <div
        className="flex justify-end cursor-pointer "
        onClick={() => {
          toggleServices();
        }}
      >
        <IoClose className="fixed text-2xl hover:text-orange-600 transition-colors duration-500" />
      </div>

      <div className="flex flex-col mt-5">
        <p className="font-extrabold text-lg">Recommended Services</p>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {/* wordpress hosting */}
          <div className="flex p-2 gap-2 cursor-pointer hover:shadow-2xl duration-500 border items-center rounded-lg">
            <img
              src="/wordpress-hosting.svg"
              className="w-12 h-auto"
              alt="Wordpress Hosting"
            />
            <div className="flex flex-col">
              <p className="font-extrabold">Wordpress Hosting</p>
              <p className="text-[12px] text-gray-700 opacity-80">
                Seamlessly transform dynamic
              </p>
            </div>
          </div>
          {/* Email Hosting */}
          <div className="flex p-2 gap-2 cursor-pointer hover:shadow-2xl duration-500 border items-center rounded-lg">
            <img
              src="/email-hosting.png"
              className="w-12 h-auto"
              alt="Email Hosting"
            />
            <div className="flex flex-col">
              <p className="font-extrabold">Email Hosting</p>
              <p className="text-[12px] text-gray-700 opacity-80">
                Email Hosting has
              </p>
            </div>
          </div>
          {/* Cloud Hosting */}
          <div className="flex p-2 gap-2 cursor-pointer hover:shadow-2xl duration-500 border items-center rounded-lg">
            <img
              src="/vps-hosting.svg"
              className="w-12 h-auto"
              alt="Cloud Hosting"
            />
            <div className="flex flex-col">
              <p className="font-extrabold">Cloud Hosting</p>
              <p className="text-[12px] text-gray-700 opacity-80">
                Cloud Hosting has
              </p>
            </div>
          </div>
        </div>
        <p className="font-extrabold text-lg mt-5">Supported Scripts</p>
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div className="flex flex-col items-center justify-center py-5 gap-2 cursor-default hover:shadow-2xl duration-500 border rounded-lg">
            <FaWordpress className="text-4xl text-neutral" />
            <p className="font-extrabold text-neutral">Wordpress</p>
          </div>
          <div className="flex flex-col items-center justify-center py-5 gap-2 cursor-default hover:shadow-2xl duration-500 border rounded-lg">
            <SiHubspot className="text-4xl text-neutral" />
            <p className="font-extrabold text-neutral">HubSpot</p>
          </div>
          <div className="flex flex-col items-center justify-center py-5 gap-2 cursor-default hover:shadow-2xl duration-500 border rounded-lg">
            <FaJoomla className="text-4xl text-neutral" />
            <p className="font-extrabold text-neutral">Joomla</p>
          </div>
          <div className="flex flex-col items-center justify-center py-5 gap-2 cursor-default hover:shadow-2xl duration-500 border rounded-lg">
            <FaDrupal className="text-4xl text-neutral" />
            <p className="font-extrabold text-neutral">Drupal</p>
          </div>
          <div className="flex flex-col items-center justify-center py-5 gap-2 cursor-default hover:shadow-2xl duration-500 border rounded-lg">
            <SiWix className="text-4xl text-neutral" />
            <p className="font-extrabold text-neutral">Wix</p>
          </div>
          <div className="flex flex-col items-center justify-center py-5 gap-2 cursor-default hover:shadow-2xl duration-500 border rounded-lg">
            <FaShopify className="text-4xl text-neutral" />
            <p className="font-extrabold text-neutral">Shopify</p>
          </div>
          <div className="flex flex-col items-center justify-center py-5 gap-2 cursor-default hover:shadow-2xl duration-500 border rounded-lg">
            <FaMagento className="text-4xl text-neutral" />
            <p className="font-extrabold text-neutral">Magento</p>
          </div>
          <div className="flex flex-col items-center justify-center py-5 gap-2 cursor-default hover:shadow-2xl duration-500 border rounded-lg">
            <FaTypo3 className="text-4xl text-neutral" />
            <p className="font-extrabold text-neutral">TYPO3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
