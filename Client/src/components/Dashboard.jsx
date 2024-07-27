import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MembersList from './MembersList';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>REVENUE Reporting System</h1>
      <p >Welcome to the admin dashboard!</p>

      <div className="contain">

      <div className="info">
        Property Tax
        <div className="test">
      <a><Link to="/admin/analysis">Analysis</Link></a>
      <a><Link to="/admin/members">List</Link></a>
      </div>
      </div>

      <div className="info">Water Tax
      <div className="test">
      <a><Link to="/admin/analysis">Analysis</Link></a>
      <a><Link to="/admin/membersW">List</Link></a>
      </div>
      </div>

      <div className="info">Garbage Tax
      <div className="test">
      <a><Link to="/admin/analysis">Analysis</Link></a>
      <a><Link to="/admin/membersG">List</Link></a>
      </div>

      </div>
      <div className="info">Sewage Tax
      <div className="test">
      <a><Link to="/admin/analysis">Analysis</Link></a>
      <a><Link to="/admin/membersS">List</Link></a>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;