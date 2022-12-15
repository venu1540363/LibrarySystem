import './LLogin.css'
import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <body>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a href="# " >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Link to='/Branches'>Submit</Link>
          </a>
        </form>
      </div>
    </body>
  )
}


export default Login;