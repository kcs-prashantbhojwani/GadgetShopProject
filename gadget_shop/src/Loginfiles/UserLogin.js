import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { AuthContext } from "./Authenticate";

import "./UserLogin.css"
import { Navigate } from "react-router-dom";

function UserLogin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useContext(AuthContext);


  // User Login info
  const userdatabase = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  const admindatabase = [
    {
      username: "admin",
      password: "admin"
    }
  ]
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    // var { uname, pass, catogory } = document.forms[0];
    const { uname, pass, category } = event.target.elements;
    setSelectedCategory(category.value);

    // Find user login info
    // const userData = userdatabase.find((user) => user.username === uname.value);
    // const adminData = admindatabase.find((admin) => admin.username === uname.value);
  //   if (category.value === "admin") 
  //   {
  //     const adminData = admindatabase.find((admin) => admin.username === uname.value);
  
  //     if (adminData) {
  //       if (adminData.password !== pass.value) {
  //         setErrorMessages({ name: "pass", message: errors.pass });
  //       } else {
  //         setIsSubmitted(true);
  //       }
  //     } else {
  //       setErrorMessages({ name: "uname", message: errors.uname });
  //     }
  //   } else if (category.value === "user") {
  //     const userData = userdatabase.find((user) => user.username === uname.value);
  
  //     if (userData) {
  //       if (userData.password !== pass.value) {
  //         setErrorMessages({ name: "pass", message: errors.pass });
  //       } else {
  //         setIsSubmitted(true);
  //       }
  //     } else {
  //       setErrorMessages({ name: "uname", message: errors.uname });
  //     }
  //   }
  // };
  let userData;
  let adminData;

    if (category.value === "user") {
      userData = userdatabase.find((user) => user.username === uname.value);
    } else if (category.value === "admin") {
      adminData = admindatabase.find((admin) => admin.username === uname.value);
    }

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        login();
      }
    } else if (adminData) {
      if (adminData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        login();
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add any additional logout logic here
  };


  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="categories">
        {/* <label>Choose a Criteria</label> */}
        <select name="catogory" id="category" >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

        <div className="input-container">
          {/* <label>Username </label> */}
          <input type="text" name="uname" placeholder="Username" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label> </label>
          <input type="password" name="pass" placeholder="Password" required />
          {renderErrorMessage("pass")}
        </div>

        <div className="cart-heading grid grid-two-column">
          <div className="forgot"><a href="/userforgotpass">Forgot password?</a></div> 
          <div className="home"><a href="/">HOME</a></div>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="signup-link">
        Not a member? <a href="/signupform">Signup now</a>
        </div>
      </form>
    </div>
  );

  const renderLogoutButton = (
    <div className="logout-button">
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>
            Welcome to the Gadget Shop
            {selectedCategory === "user" && <Navigate to="/" replace />}
            {selectedCategory === "admin" && <Navigate to="/admin" replace />}
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
};

export default UserLogin;
