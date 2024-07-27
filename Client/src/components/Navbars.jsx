import React from 'react';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <nav>
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/members">Members</Link></li>
      </ul>
    </nav>
  );
}

export default Navbars;
