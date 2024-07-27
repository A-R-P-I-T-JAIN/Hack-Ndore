import {useState} from "react";
import OtpInput from "./otp-input";
import './phone-login.css';

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlePropertyId = (event) => {
    setPropertyId(event.target.value);
  };

  // const onOtpSubmit = () => {
  //   const enteredOtp = otp.join("");
  //   if (enteredOtp === generatedOtp) {
  //     alert("Login Successful");
  //   } else {
  //     alert("Invalid OTP");
  //   }
  // };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }


    // Call BE API
    // show OTP Field
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  return (
    <div>
      <div >
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit} class="form">
          <input
          class="id"
            type="text"
            value={propertyId}
            onChange={handlePropertyId}
            placeholder="Enter Property Id"
          />
          <br></br>
          <input
          class="num"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <br></br>
          <button type="submit" class="submit">Get OTP</button>
        </form>
      ) : (
        <div class="box">
          <p class="text">Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          <button onClick={onOtpSubmit} class="verify"> Verify OTP</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default PhoneOtpForm;