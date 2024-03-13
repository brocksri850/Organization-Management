import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const credentials = { email, password };
      const result = await loginUser(credentials);
      if (result.status === 200) {
        localStorage.setItem('token', result.token);
        navigate("/data-table");
      }
      console.log(result);
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone" />
</div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>

              <div className="form-outline mb-4">
              <label className="form-label mb-2" htmlFor="form1Example13">Email address</label>
                <input type="email" id="form1Example13" className="form-control form-control-lg" value={email} onChange={handleEmailChange} />
                
              </div>
    

              <div className="form-outline mb-4">
              <label className="form-label mb-2" htmlFor="form1Example23">Password</label>
                <input type="password" id="form1Example23" className="form-control form-control-lg" value={password} onChange={handlePasswordChange} />
              </div>
    
              <div className="d-flex justify-content-around align-items-center mb-4">

                {/* <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                </div> */}
                {/* <a href="#!">Forgot password?</a> */}
              </div>
    
              <button type="submit" className="btn btn-primary btn-lg btn-block">Log in</button>
    
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted"> </p>
              </div>
    
              <button type="button" onClick={()=> navigate('/signup')} className="btn btn-secondary btn-lg btn-block">Sign up</button>

              {/* <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: '#3b5998'}} href="#!" role="button">
                <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
              </a>
              <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: '#55acee'}} href="#!" role="button">
                <i className="fab fa-twitter me-2"></i>Continue with Twitter
              </a> */}
    
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginUser;
