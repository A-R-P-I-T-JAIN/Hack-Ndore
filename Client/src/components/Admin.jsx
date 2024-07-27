import './Admin.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import MembersList from './MembersList';
import MembersListW from './MembersListW';
import MembersListG from './MembersListG';
import MembersListS from './MembersListS';
import Navbars from './Navbars';

export default function Admin() {
  return (
    
      <div>
        <Navbars/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/members" element={<MembersList />} />
          <Route path="/membersW" element={<MembersListW/>}/>
          <Route path="/membersG" element={<MembersListG/>}/>
          <Route path="/membersS" element={<MembersListS/>}/>
        </Routes>
      </div>
 
  );
}
