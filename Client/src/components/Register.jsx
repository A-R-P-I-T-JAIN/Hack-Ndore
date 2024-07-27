import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { addProperty } from '../redux/propertySlice';
import { useState } from 'react';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [propertyId, setPropertyId] = useState("");
  const [ownedBy, setOwnedBy] = useState("");
  const [mobile, setMobile] = useState("");
  const [aadhar, setAadhar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const propertyData = {
      propertyId,
      ownedBy,
      aadhar,
      mobile,
      area: "Downtown",
      size: 2000,
      type: "Residential",
      propertyTax: true,
      waterTax: true,
      garbageTax: false,
      propertyMonths: 1,
      waterMonths: 1,
      garbageMonths: 1,
      totalPayment: 0
    };

    try {
      // Await the dispatch to ensure the action is complete
      const result = await dispatch(addProperty(propertyData));

      if (addProperty.fulfilled.match(result)) {
        // After successful addition, navigate to the dashboard with property data
        navigate('/dashboard', { state: { property: result.payload } });
      } else {
        console.error('Failed to add property:', result.error.message);
        alert('Failed to register property. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="boxi">
      <p className="head">Register</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Property ID"
          type="text"
          className="input"
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
        />
        <br />
        <input
          placeholder="Enter AADHAR No."
          type="number"
          className="input"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
        <br />
        <input
          placeholder="Enter Registered Phone No."
          type="number"
          className="input"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <input
          placeholder="Enter Username"
          className="input"
          value={ownedBy}
          onChange={(e) => setOwnedBy(e.target.value)}
        />
        <br />
        <button type="submit" className="submit">Submit</button>
      </form>
      <div className="loginTag">
        <br />
        <Link to="/login">Already registered? Click here to <span>login</span></Link>
      </div>
    </div>
  );
}
