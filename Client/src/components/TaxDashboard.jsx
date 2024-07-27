import React, { useState, useEffect } from "react";
import IndoreImage from "../assets/garbage.jpg"; // Import your image

let currentUsers = Math.floor(Math.random() * 1000) + 100; // Initialize with a random number
let totalTaxPaid = (Math.random() * 10000).toFixed(2); // Initialize with a random amount

const simulateTaxData = (prevTotalTaxPaid) => {
  currentUsers += Math.floor(Math.random() * 50); // Increment users randomly
  totalTaxPaid = (parseFloat(prevTotalTaxPaid) + Math.random() * 500).toFixed(2); // Ensure total tax paid only increases
  return {
    totalUsers: currentUsers,
    totalTaxPaid,
    totalTaxPending: (Math.random() * 5000).toFixed(2), // Random amount up to $5,000
  };
};

function TaxDashboard() {
  const [data, setData] = useState(simulateTaxData(totalTaxPaid));
  const [prevData, setPrevData] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevData(data);
      setData(simulateTaxData(data.totalTaxPaid));
    }, 50000); // Update every 50 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [data]);

  return (
    <div className="relative h-[50vh] bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={IndoreImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />

      {/* Container with limited height and centered content */}
      <div className="relative bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto z-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Tax Dashboard
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[200px] max-w-[300px] text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
              Total Registered Users
            </h2>
            <p
              className={`text-3xl font-bold text-blue-600 transition-all duration-500 ${
                prevData.totalUsers !== data.totalUsers ? "animate-pulse" : ""
              }`}
            >
              {data.totalUsers}
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[200px] max-w-[300px] text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
              Total Tax Paid
            </h2>
            <p
              className={`text-3xl font-bold text-green-600 transition-all duration-500 ${
                prevData.totalTaxPaid !== data.totalTaxPaid
                  ? "animate-pulse"
                  : ""
              }`}
            >
              ₹{data.totalTaxPaid}
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[200px] max-w-[300px] text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">
              Total Tax Pending
            </h2>
            <p
              className={`text-3xl font-bold text-red-600 transition-all duration-500 ${
                prevData.totalTaxPending !== data.totalTaxPending
                  ? "animate-pulse"
                  : ""
              }`}
            >
              ₹{data.totalTaxPending}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxDashboard;