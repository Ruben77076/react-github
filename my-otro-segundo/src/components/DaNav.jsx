import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/logo-yellow.png'

function DaNav() {
    const [thisGuy]=useState({
        firstName: "Unknown",
        lastName: "User",
        isLoggedIn: false,
        
    });
    

    const onLogoutClick = () =>{
        console.log("i do a clicky");
    }
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sabio"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button"
                  to="/home"
                  id="goHome"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button"
                  to="/friends"
                >
                  Friends
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button"
                  to="/techcompanies"
                >
                  Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button"
                  to="/events"
                >
                  Events
                </Link>
              </li>
            </ul>
            <div className="text-end">
              <Link
                to="/home"
                className="d-inline-block align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
              >
                {thisGuy.firstName} {thisGuy.lastName}
              </Link>
              {thisGuy.isLoggedIn ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onLogoutClick}
                >
                  Logout
                </button>
              ) : (
                <Link type="button" className="btn btn-success" to="/login">
                  Login
                </Link>
              )}{" "}
              <Link type="button" className="btn btn-info" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default DaNav;