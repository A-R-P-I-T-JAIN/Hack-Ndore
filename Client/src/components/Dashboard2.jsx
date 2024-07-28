import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard2() {
  return (
    <div class="dashboard">
      <h1>Revenue Reporting System</h1>
      <p>Welcome to the admin dashboard!</p>
      <div className='user-analysis-info'>
        <div class='info'>
            <h1>Property Tax</h1>
            <div class="test">
                {/* <a><Link to="/admin/">Analysis</Link></a> */}
                <a><Link to="/admin/members">List </Link></a>
            </div>
        </div>

        <div class='info'>
            <h1>Water Tax</h1>
            <div class="test">
                {/* <a><Link to="/admin/">Analysis</Link></a> */}
                <a><Link to="/admin/membersW">List </Link></a>
            </div>
        </div>

        <div class='info'>
            <h1>Garbage Tax</h1>
            <div class="test">
                {/* <a><Link to="/admin/">Analysis</Link></a> */}
                <a><Link to="/admin/membersG">List</Link></a>
            </div>
        </div>

        <div class='info'>
            <h1>Sewage Tax</h1>
            <div class="test">
                {/* <a><Link to="/admin/">Analysis</Link></a> */}
                <a><Link to="/admin/membersS">List </Link></a>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard2;