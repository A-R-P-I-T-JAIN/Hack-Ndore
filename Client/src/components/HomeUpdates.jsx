// src/components/HomeUpdates.js
import React from "react";

const updates = [
  {
    title: "New Water Supply System Launch",
    date: "July 15, 2024",
    description:
      "The municipal corporation has successfully launched a new water supply system to ensure a more reliable and efficient distribution of water across the city. This upgrade is expected to significantly improve water availability and reduce leakage issues.",
  },
  {
    title: "Enhanced Garbage Collection Services",
    date: "July 20, 2024",
    description:
      "Starting this month, we have introduced a new garbage collection schedule and enhanced services to improve waste management and keep our city clean. Residents are encouraged to follow the new schedule for timely waste disposal.",
  },
  {
    title: "Upcoming City Infrastructure Projects",
    date: "August 1, 2024",
    description:
      "Several new infrastructure projects are set to commence in the coming months, including road repairs and park renovations. These projects aim to improve the overall quality of life in Indore and enhance public spaces.",
  },
];

const notices = [
  {
    title: "Public Hearing on New Tax Regulations",
    date: "July 30, 2024",
    description:
      "A public hearing will be held to discuss upcoming changes to tax regulations. Residents are invited to attend and provide feedback on the proposed changes.",
  },
  {
    title: "Temporary Water Supply Disruption",
    date: "August 5, 2024",
    description:
      "Due to maintenance work on the new water supply system, there will be a temporary disruption in water supply on August 5, 2024. We apologize for the inconvenience and will strive to complete the work as quickly as possible.",
  },
  {
    title: "Community Clean-Up Day",
    date: "August 12, 2024",
    description:
      "Join us for a community clean-up day on August 12, 2024. Volunteers will help clean public spaces and contribute to a cleaner, greener Indore. All are welcome to participate.",
  },
];

const HomeUpdates = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* What's New Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">What's New</h2>
          <div className="space-y-6">
            {updates.map((update, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-800">
                  {update.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{update.date}</p>
                <p className="text-gray-800">{update.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notice Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Notice</h2>
          <div className="space-y-6">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="bg-yellow-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-yellow-800">
                  {notice.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{notice.date}</p>
                <p className="text-gray-800">{notice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeUpdates;