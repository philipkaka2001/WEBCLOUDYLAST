import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "../Login/Login.css";
export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const generateError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );

      // if (data) {
      if (data.errors) {
        const { email, password } = data.errors;
        if (email) generateError(email);
        else if (password) generateError(password);
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p class="lead fw-normal mb-0 me-3">Sign in with</p>
              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-linkedin-in"></i>
              </button>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4" htmlFor="email">
              <input
                type="email"
                name="email"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
            </div>
            {/* Password input */}
            <div className="form-outline mb-3" htmlFor="password">
              <input
                name="password"
                type="password"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              {/* Checkbox */}
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  defaultValue
                  id="form2Example3"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              >
                Login
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <a href="#!" className="link-danger">
                  Register <Link to="/register">REGISTER</Link>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="containner">
    //   <h2>Login Account</h2>
    //   <form onSubmit={(e) => handleSubmit(e)}>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email"
    //         onChange={(e) =>
    //           setValues({ ...values, [e.target.name]: e.target.value })
    //         }
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         onChange={(e) =>
    //           setValues({ ...values, [e.target.name]: e.target.value })
    //         }
    //       />
    //     </div>
    //     <button type="submit">Submit</button>
    // <span>
    //   Already have a account? <Link to="/register">REGISTER</Link>
    // </span>
    //   </form>
    // </div>
  );
}
