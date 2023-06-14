import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./UserLogin.css"
import { Navigate } from "react-router-dom";

function SignUpForm() {
  const renderForm = (
    <div className="form">
      <form>
      <div className="categories">
        <select name="catogory" id="category" >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
        <div className="input-container">
          <input type="text" name="uname" placeholder="UserName" required />
        </div>
        <div className="input-container">
          <input type="text" name="uname" placeholder="FirstName" required />
        </div>
        <div className="input-container">
          <input type="text" name="uname" placeholder="LastName" required />
        </div>
        <div className="input-container">
          <input type="text" name="uname" placeholder="Email-ID" required />
        </div>
        <div className="input-container">
          <input type="password" name="pass" placeholder="Password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="signup-link">
            <div>
                Back To <a href="/userlogin">Login Page </a> OR <a href="/">HOME</a>
            </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up Form</div>
        {renderForm }
      </div>
    </div>
  );
}

export default SignUpForm;
