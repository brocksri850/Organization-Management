import React, { useState } from 'react';
import { signupUser } from '../services/api';

function SignupUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [orgName, setOrgName] = useState('');
  const [orgLocation, setOrgLocation] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleOrgNameChange = (e) => {
    setOrgName(e.target.value);
  };

  const handleOrgLocationChange = (e) => {
    setOrgLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name: name,
        email: email,
        password: password,
        role: role,
        organization: '65f0fda6b7b5e7ac127e8939'
      };

      // Assuming you have an API endpoint to handle user signup
      const userResponse = await signupUser(userData);

      if (userResponse.status === 200) {
        localStorage.setItem('token', userResponse.tokens)
      }

      // Optionally, you can reset the form fields after successful submission
      setEmail('');
      setPassword('');
      setName('');
      setRole('');
      setOrgName('');
      setOrgLocation('');
    } catch (error) {
      console.error('Error signing up:', error);
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
                    <div className="text-center">
                      {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" */}
                      <img src="https://scontent.fcjb5-2.fna.fbcdn.net/v/t39.30808-6/298057505_5475443585848933_6010195220853750372_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=shP4Hg0nkAAAX-o_eMe&_nc_ht=scontent.fcjb5-2.fna&oh=00_AfBxH5RSHRmkpqrVGysDc-hN6OXB-czt9dKJcW0GQW5OSQ&oe=65F658F6"
                        style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">We are The SciFlare Team</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p>Please sign up for your account</p>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Your Name"
                          value={name}
                          onChange={handleNameChange}
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
                          onChange={handleEmailChange}
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
                          onChange={handlePasswordChange}
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
                          onChange={handleRoleChange}
                        />
                        <label className="form-label" htmlFor="role">Your Role</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="orgName"
                          className="form-control"
                          placeholder="Organization Name"
                          value={orgName}
                          onChange={handleOrgNameChange}
                        />
                        <label className="form-label" htmlFor="orgName">Organization Name</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="orgLocation"
                          className="form-control"
                          placeholder="Organization Location"
                          value={orgLocation}
                          onChange={handleOrgLocationChange}
                        />
                        <label className="form-label" htmlFor="orgLocation">Organization Location</label>
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <button type="button" className="btn btn-outline-danger">Log in</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Sciflare is one of the Top Mobile App Development Company in Chennai-India,
                      Expertise in Android, iOS Apps, Cloud Apps, Analytics, Web Applications.</p>
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

export default SignupUser;
