// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { Alert } from "../Alert";



// import React from 'react'
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBRow,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// } from 'mdb-react-ui-kit';
// import { Logout1 } from '../Logout';

// export const Login = () => {
//   const [user, setUser] = useState({
//         email: "",
//         password: "",   
//       });

//       const { login, loginWithGoogle, resetPassword } = useAuth();
//       const [error, setError] = useState("");
//       const navigate = useNavigate();



//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");
//         try {
//           await login(user.email, user.password);
//           navigate("/");
//         } catch (error) {
//           setError(error.message);
//         }
//       };

//       const handleChange = ({ target: { value, name } }) =>
//         setUser({ ...user, [name]: value });

//       const handleGoogleSignin = async () => {
//         try {
//           await loginWithGoogle();
//           navigate("/");
//         } catch (error) {
//           setError(error.message);
//         }
//       };

//       const handleResetPassword = async (e) => {
//         e.preventDefault();
//         if (!user.email) return setError("Write an email to reset password");
//         try {
//           await resetPassword(user.email);
//           setError('We sent you an email. Check your inbox')
//         } catch (error) {
//           setError(error.message);
//         }
//       };



//   return (
//     <div>
//     <MDBContainer fluid>

//     <div className="w-full max-w-xs m-auto">
//        {error && <Alert message={error} />}

//        <form
//          onSubmit={handleSubmit}
//         //  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//        >

//       <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

//       <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
//         <MDBCardBody className='p-5 text-center'>

//           <h2 className="fw-bold mb-5">Sign up now</h2>

//           <MDBRow>
//             <MDBCol col='6'>
//               <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
//             </MDBCol>

//             <MDBCol col='6'>
//               <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
//             </MDBCol>
//           </MDBRow>

//           <MDBInput 
//           wrapperClass='mb-4' 
//           label='Email' 
//           id='form1' 
//           type='email'
//           name="email"
//           onChange={handleChange}          
//           />
//           <MDBInput 
//           wrapperClass='mb-4' 
//           label='Password' 
//           id='form1' 
//           type='password'
//           onChange={handleChange}
//           placeholder="*******"
//           />

//           <div className='d-flex justify-content-center mb-4'>
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//           </div>

//           <MDBBtn 
//           className='w-100 mb-4' 
//           size='md' 
//           type="submit"         
//           >
//           <Link to="/">
//             Sign Up
//            </Link>            
//             </MDBBtn>

//           <a
//              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//              href="#!"
//              onClick={handleResetPassword}>
//              Forgot Password?
//            </a>

//           <div className="text-center">

//             <p>or sign up with:</p>

//             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//               <MDBIcon fab icon='facebook-f' size="sm"/>
//             </MDBBtn>

//             <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} onClick={handleGoogleSignin}>
//               <MDBIcon fab icon='google' size="sm"/>
//             </MDBBtn>

//             <p className="my-4 text-sm flex justify-between px-3">
//          Don't have an account?
//          <Link to="/register" className="text-blue-700 hover:text-blue-900">
//            Register
//          </Link>
//        </p>

//          <div className="w-full max-w-xs m-auto text-black">
//          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//            <p className="text-xl mb-4">welcome {user.displayName || user.email}</p>
//           </div>
//           </div>
//           </div>
//         </MDBCardBody>
//       </MDBCard>
//       </form>
//           </div>
//     </MDBContainer>
//           <><Logout1 /></>
//   );

//     </div>
//   )
// }





import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../Alert";
import { Logout1 } from "../Logout";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Login.css"


export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div className="alert-className">
      {error && <Alert message={error} />}
      <img className="bg-img" src="img/fondologin.jpg"></img>

      <div className="form-div">
        <form
          onSubmit={handleSubmit}
          className="form-login-css"
        >
          <div className="signin-now">
            SIGN UP NOW
          </div>
          <div className="email-div">
            <label
              htmlFor="email"
              className="label-email"
            >
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="input-email"
              placeholder="Email"
            />
          </div>
          <div className="password-div">
            <label
              htmlFor="password"
              className="label-password"
            >
            </label>
            <input
              type='password'
              name="password"
              id="password"
              onChange={handleChange}
              className="input-password"
              placeholder="Password"
            />

          </div>
          <div className="forgot-password-div">
            <a
              className="forgot-password"
              href="#!"
              onClick={handleResetPassword}
            >
              Forgot Password?
            </a>
          </div>
          <div className="signin-div">
            <button
              id="loginButton"
              className="signin-button"
              type="submit"
            >
              Sign In
            </button>

          </div>

        </form>

        <div className="button-google">
          sign in with
          <button
            className='cap-button fa-brands fa-google migoogleclassName' style={{ color: '#1266f8' }}
            fab icon='google' size="sm"
            onClick={handleGoogleSignin}
          ></button>
        </div>

        <p className="register-p">
          Don't have an account?
          <Link to="/register" className="register-button-acces">
            Register
          </Link>
        </p>

        <div className="div-className1">
          <p className="welcome-p">Welcome: {user.displayName || user.email}</p>
          <div className="logout-div">
            <Link to='/register' className="logout-button">
              <Logout1 />
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}
