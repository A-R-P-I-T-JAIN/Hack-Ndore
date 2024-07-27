import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// Sample data for links
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Corona Related Website Link",
  "MP High Court Indore Bench",
  "State Portal",
  "Code challenges",
  "MP Dept of Public Relation",
  "MPonline",
  "Public Grievance",
];

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between w-11/12 max-w-full mx-auto py-14">
        {/* Section 1 */}
        <div className="lg:w-full flex flex-wrap justify-between pr-5 gap-10">
          <div className="flex-1 flex flex-col gap-3 mb-7">
            <h1 className="text-xl font-semibold">HELPLINE NUMBERS</h1>
            <div className="flex flex-col gap-2">
              {[
                "Control Room : Ladli Bahna Yojana -(0731)-2462027",
                "State Women Helpline Number : 1090",
                "Collector Helpline : 2390333",
              ].map((ele, i) => (
                <div
                  key={i}
                  className="text-sm cursor-pointer hover:text-gray-300 transition-all duration-200"
                >
                  <Link to={ele.toLowerCase()}>{ele}</Link>
                </div>
              ))}
            </div>
            <div className="flex gap-3 text-lg mt-3">
              <FaFacebook className="cursor-pointer hover:text-gray-300 transition-all duration-200" />
              <FaGoogle className="cursor-pointer hover:text-gray-300 transition-all duration-200" />
              <FaTwitter className="cursor-pointer hover:text-gray-300 transition-all duration-200" />
              <FaYoutube className="cursor-pointer hover:text-gray-300 transition-all duration-200" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 mb-7">
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <div className="flex flex-col gap-2 mt-2">
              {Resources.map((ele, index) => (
                <div
                  key={index}
                  className="text-sm cursor-pointer hover:text-gray-300 transition-all duration-200"
                >
                  <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
                </div>
              ))}
            </div>
            <h1 className="text-xl font-semibold mt-7">Support</h1>
            <div className="text-sm cursor-pointer hover:text-gray-300 transition-all duration-200 mt-2">
              <Link to={"/help-center"}>Help Center</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-11/12 max-w-6xl mx-auto text-gray-400 text-sm">
          <div className="flex flex-col lg:flex-row gap-3">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={`${
                  BottomFooter.length - 1 === i
                    ? ""
                    : "border-r border-gray-700"
                } px-3 cursor-pointer hover:text-gray-300 transition-all duration-200`}
              >
                <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-3 lg:mt-0">
            Made with ❤ by XYZ © 2024 ABC
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;