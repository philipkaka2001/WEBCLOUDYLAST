import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    lop: "",
    phone: "",
  });

  const generateError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );

      if (data) {
        if (data.errors) {
          const { email, password, name, lop, phone } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form
                      className="mx-1 mx-md-4"
                      onSubmit={(e) => handleSubmit(e)}
                    > 
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c">
                          User Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="form3Example1c"
                          className="form-control"
                          placeholder="name"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="form3Example1c"
                          className="form-control"
                          placeholder="Email"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="form3Example1c"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="form3Example1c"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="text-center text-lg-start mt-4 pt-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          style={{
                            paddingLeft: "2.5rem",
                            paddingRight: "2.5rem",
                          }}
                        >
                          Submit
                        </button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                        Already have a account?  
                          <a href="#!" className="link-danger">
                              Go to page <Link to="/login">LOGIN</Link>
                          </a>
                        </p>
                      </div>
                      
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
