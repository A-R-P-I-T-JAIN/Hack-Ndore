import React from "react";
import Property_tax from "../assets/Property_Tax.jpg";
import Water_tax from "../assets/Water.jpg";
import Garbage_tax from "../assets/garbage.jpg";

const properties = [
  {
    id: 1,
    value: "500",
    area: "2000 sq ft",
    location: "Indore",
    type: "Property-Tax",
    imageUrl: Property_tax,
  },
  {
    id: 2,
    value: "750",
    area: "100 liter",
    location: "Indore",
    type: "Water-Tax",
    imageUrl: Water_tax,
  },
  {
    id: 3,
    value: "1,000",
    area: "3500 sq ft",
    location: "Indore",
    type: "Garbage-Tax",
    imageUrl: Garbage_tax,
  },
  // Add more properties as needed
];

function PropertyGallery() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {properties.map((property) => (
        <div
          key={property.id}
          className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <img
            src={property.imageUrl}
            alt={`Property ${property.id}`}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{property.type}</h3>
            <p className="text-gray-700 mb-1">
              <strong>Value:</strong> {property.value}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Area:</strong> {property.area}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Location:</strong> {property.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyGallery;