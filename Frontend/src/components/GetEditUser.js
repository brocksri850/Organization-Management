// EditUser.js

import React, { useState, useEffect } from 'react';
import { getUserById, updateUser } from '../services/api';
import { useLocation } from "react-router-dom";

function EditUser() {
  const route = useLocation();
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserById(route.state.edit_id);
        setEmail(userData.email);
        setName(userData.name);
        setRole(userData.role);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [route.state.edit_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name: name,
        email: email,
        password: password,
        role: role,
        organization: "65f0fda6b7b5e7ac127e8939"
      };
      await updateUser(route.state.edit_id, userData);

    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <h2>Edit User</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="name">Your Name</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="email">Email address</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="role"
                          className="form-control"
                          placeholder="Your Role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        />
                        <label className="form-label" htmlFor="role">Your Role</label>
                      </div>
                      {/* 
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="orgName"
                          className="form-control"
                          placeholder="Organization Name"
                          value={orgName}
                          onChange={(e) => setOrgName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="orgName">Organization Name</label>
                      </div> */}
                      {/* <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="orgLocation"
                          className="form-control"
                          placeholder="Organization Location"
                          value={orgLocation}
                          onChange={(e) => setOrgLocation(e.target.value)}
                        />
                        <label className="form-label" htmlFor="orgLocation">Organization Location</label>
                    
                      </div> */}
                      <button className="btn btn-primary btn-block" type="submit">Save Changes</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditUser;
