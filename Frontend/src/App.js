import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Signup from './components/Signup';
import DataTable from './components/DataTable';
// import Layout from './components/Layout';
import LoginUser from './components/LoginUser';
import './css/bootstrap.css'
import SignupUser from './components/SignupUser';
import './css/signupUser.css'
import './css/loginUser.css'
import EditUser from './components/GetEditUser';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="signup" element={<SignupUser />} />
          <Route path="data-table" element={<DataTable />} />
          <Route path="edituser" element={<EditUser />} />
          <Route path="*" element={<LoginUser />} />
      </Routes>
    </Router>
  );
};

export default App;
