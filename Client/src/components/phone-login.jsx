import React, { useState } from "react";
import OtpInput from "./otp-input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./phone-login.css";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState(""); // Initialize as an empty string
  const [generatedOtp, setGeneratedOtp] = useState("");
  const[property,setProperty] = useState({});

  const navigate = useNavigate();

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePropertyId = (event) => {
    setPropertyId(event.target.value);
  };

  const handlePhoneSubmit = async (event) => {
    event.preventDefault();

    // Phone number validation
    const regex = /^[0-9]{10}$/;
    if (!regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    try {
      // Call backend to verify property ID and generate OTP
      const response = await axios.post("http://localhost:3000/verifyPropertyAndSendOtp", {
        phoneNumber,
        propertyId,
      });

      if (response.data.success) {
        setGeneratedOtp(response.data.otp); // Save generated OTP from the backend
        setProperty(response.data.property)
        console.log("Generated OTP (for testing):", response.data.otp);
        setShowOtpInput(true); // Show OTP input
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error verifying property or sending OTP", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const onOtpSubmit = () => {
    console.log("Entered OTP:", otp); // Log entered OTP
    console.log("Generated OTP:", generatedOtp); // Log generated OTP
    if (otp === generatedOtp) {
      alert("Login Successful");

      // Navigate to dashboard
      navigate("/dashboard", { state: { property } });
      // navigate('/dashboard', { state: { property: result.payload } });
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit} className="form">
          <input
            className="id"
            type="text"
            value={propertyId}
            onChange={handlePropertyId}
            placeholder="Enter Property Id"
          />
          <br />
          <input
            className="num"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <br />
          <button type="submit" className="submit">
            Get OTP
          </button>
        </form>
      ) : (
        <div className="box">
          <p className="text">Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpChange={handleOtpChange} />
          <button onClick={onOtpSubmit} className="verify">
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
