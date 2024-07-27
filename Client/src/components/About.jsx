// src/components/About.js
import React from "react";

function About() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* About Us Section */}
          <div className="flex-1 mb-8 lg:mb-0">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
              About Us
            </h1>
            <p className="text-gray-800 leading-relaxed mb-4 text-lg">
              Welcome to the official website of XYZ Municipality. Our mission
              is to provide efficient and transparent governance, ensuring the
              well-being and development of our community. We offer a range of
              services including property tax management, water supply, garbage
              disposal, and more.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-lg">
              Our dedicated team works tirelessly to maintain the city's
              infrastructure and deliver essential services to all residents. We
              are committed to creating a safe, clean, and vibrant environment
              for everyone to thrive.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-lg">
              Established in [Year], XYZ Municipality has been at the forefront
              of urban development and public service. We believe in the power
              of community and strive to engage with our residents through
              various initiatives and programs.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-black my-8 lg:hidden"></div>

          {/* Our Services Section */}
          <div className="flex-1 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">
              Our Services
            </h2>
            <ul className="list-disc list-inside text-gray-800 mb-4 space-y-3 text-lg">
              <li>Property Tax Management</li>
              <li>Water Supply and Management</li>
              <li>Garbage Disposal and Recycling</li>
              <li>Public Safety and Emergency Services</li>
              <li>Infrastructure Development and Maintenance</li>
              <li>Parks and Recreation</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-black my-8 lg:hidden"></div>

          {/* Contact Us Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-lg">
              If you have any questions or need further assistance, please do
              not hesitate to contact us:
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-lg">
              <strong>Address:</strong> 123 Main Street, Indore, XYZ 12345
              <br />
              <strong>Phone:</strong> (9xx) 456-7890
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@xyzmunicipality.gov"
                className="text-blue-600 hover:underline"
              >
                contact@xyzmunicipality.gov
              </a>
            </p>
            <p className="text-gray-800 leading-relaxed text-lg">
              Thank you for visiting our website. We hope you find the
              information and services provided here helpful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;