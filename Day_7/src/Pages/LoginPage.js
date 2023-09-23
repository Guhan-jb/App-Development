import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/CSS/App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { login } from "../redux/userSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [password, setPassword] = useState("");
  let [authMode, setAuthMode] = useState(true);
  const nav=useNavigate()
  const changeAuthMode = () => {
    setAuthMode(!authMode);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !phn || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Sign Up successful!");
    dispatch(login({
      email:email
    }))
  };
  const handleSignIn=(e)=>{
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Sign in successful!");
    dispatch(login({
      email :email
    }))
    if(email==="admin@gmail.com")
    {
      nav("/AdminDashBoard")
    }
    else
    {
    nav("/")
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="background-container">
      {authMode ? (
        <div className="Auth-form-container">
          <div className="Auth-form">
            <div className="Auth-form-content">
              <form>
                <h3 className="Auth-form-title">Welcome Back!!</h3>
                <div className="text-center">
                  New User ?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control mt-1"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary" onClick={handleSignIn}>
                    Sign In
                  </button>
                </div>
              </form>
              <p className="text-center mt-2">
                Forgot password?
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleFormSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Hello there new around here, fill this form!</h3>
              <div className="text-center">
                Wanna go back?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="form-control mt-1"
                  placeholder="e.g 987654321"
                  value={phn}
                  onChange={(e) => setPhn(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      </div>
    </>
  );
}
