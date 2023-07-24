import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../Alert";
import './Register.css'

export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="alert-className">
      {error && <Alert message={error} />}
      <img className="bg-img" src="img/fondologin.jpg"></img>
      <div className="register-div">
        <form
          onSubmit={handleSubmit}
          className="form-register-css"
        >
          <div className="register-now">
            REGISTER NOW
          </div>
          <div className="email-div">
            <label
              htmlFor="email"
              className="email-register"
            >
            </label>
            <input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="email-register"
              placeholder="Email"
            />
          </div>

          <div className="password-div">
            <label
              htmlFor="password"
              className="password-register"
            >

            </label>
            <input
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="password-register"
              placeholder="Password"
            />
          </div>

          <button className="register-button">
            Register
          </button>
        </form>
        <p className="haveaccount-p">
          Already have an Account?
          <Link to="/login" className="login-button-acces">
            Login
          </Link>
        </p>
      </div>

    </div>
  );
}