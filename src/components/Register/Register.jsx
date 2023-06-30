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
    <div className="alert-class">
      {error && <Alert message={error} />}
      <div className="bg-img" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
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
              className="block text-gray-700 text-sm font-bold mb-2"
            >
            </label>
            <input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>

          <div className="password-div">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >

            </label>
            <input
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
          </div>

          <button className="register-button">
            Register
          </button>
        </form>
        <p className="my-4 text-sm flex justify-between px-3">
          Already have an Account?
          <Link to="/login" className="text-blue-700 hover:text-blue-900">
            Login
          </Link>
        </p>
      </div>
      <div>
        <div>Contact</div>
        <div>Ubication</div>
        <div>About</div>
      </div>
    </div>
  );
}