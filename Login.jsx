import React, { useState } from 'react';
import './login.css'; // Import CSS file for styling
import image from '../src/login.jpg'
import logo from '../src/logo1.png'
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const routes=[
  "/Models"
]
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
 

  return (
    <>
    <div className='login-page'>
    <div className="login-container">
      <div className="login-form">
        <img style={{width:'100%'}}src={logo}></img>
        <h1>Advance AI Tools</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         <Link to="/Models" className="custom-link-custom-button-login">Login</Link>
        </form>
      </div>
      <div className="login-image">
        {/* Add your image here */}
        <img src={image} alt="Login" />
      </div>
    </div>
    </div>
    </>
  );
}

export default Login;
