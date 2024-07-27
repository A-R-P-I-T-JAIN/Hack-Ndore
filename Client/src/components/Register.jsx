import './Register.css'
import { Link } from 'react-router-dom'
export default function Register(){
    return(
        <div class="boxi">
            <p class="head"> Register</p>
        <input placeholder="Enter Property ID" type="text" class="input" ></input>
        <br></br>
        <input placeholder="Enter AADHAR No." type="number"class="input"  ></input>
        <br></br>
        <input placeholder="Enter Registered Phone No." type="number"class="input"  ></input>
        <br></br>
        <input placeholder="Enter Username" class="input" ></input>
        <br></br>
        <button className="submit">Submit</button>
       <div className="loginTag">
       {/* <Route path="/login" element={<PhoneOtpForm/>} /> */}
      <br></br>
       <Link to="/login">Already registered? Click here to <span>login</span></Link>
       </div>
        </div>
    )
}