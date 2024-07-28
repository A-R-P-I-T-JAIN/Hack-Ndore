import React from 'react';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <nav>
      <ul>
        <li style={{fontSize:"40px",marginTop:"10px"}}><Link to="/admin">Dashboard</Link></li>
        {/* <li><Link to="/admin/">Members</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbars;
