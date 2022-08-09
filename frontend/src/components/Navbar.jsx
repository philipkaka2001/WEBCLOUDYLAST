import React, { useState } from "react";
import Logo from "../assets/logo.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/login");
  };

  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a className="logo">
        <img src={Logo} alt="/" />
      </a>
      <input type="checkbox" className="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="/" className="nav-link">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/upload" className="nav-link">
            UPLOAD
          </Link>
        </li>
        <li>
        <Link to="/download" className="nav-link">
            DOWNLOAD
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
        </li>
        {/* <li>
          <Link to="/post" className="nav-link">
            POST
          </Link>
        </li> */}
      </ul>

      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-6">
          <div class="form">
            {/* <i class="fa fa-search"></i>
            <input
              type="text"
              class="form-control form-input"
              placeholder="Search "
            />
            <span class="left-pan">
              <i class="fa fa-microphone"></i>
            </span> */}
            <button className="btn btn-primary" type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <ul className="search-icon">
        <li>
          {" "}
          <img src={user} alt="" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
