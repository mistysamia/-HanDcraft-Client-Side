import React from 'react';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiSnapcraft} from "react-icons/si";


const googleProvider = new GoogleAuthProvider();
initializeAuthentication();

function Login() {
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';


  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const processLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {   // to prevent error when trying to sign in multiple times 
        console.log(error.message);
      })
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {   // to prevent error when trying to sign in multiple times 
        console.log(error.message);
      })
  }

  const handleRegistration = (e) => { // if I pass e as a parameter then the page is not going to reload 

    e.preventDefault();
    console.log(password);
    // if (!/(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/.test(password)) {
    //   setError('Password must contains two uppercase letters, one special case letter, two digits,three lowercase letters and must be of length 8.');
    //   return;
    // }
    if (isLogin) {
      loginUser(email, password);
    }
    else {
      createNewUser(email, password);
    }
  }

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        history.push(redirect_uri);
        console.log(user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleRegisterChange = (e) => {
    setIsLogin(e.target.checked);
    console.log(e.target.checked)
  }


  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then((result) => {
        history.push(redirect_uri);
        console.log(result)
      });
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result)
      });
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then((result) => {
      console.log(result)
    });
  }
  return (
    <div>
      <section className='loginRegister'>
        <div className='designPart'>
          <h1><span  className='mx-2'><SiSnapcraft></SiSnapcraft></span><span className='title'>Han<span className='titleDay'>D</span>Craft</span></h1>

          <ul class="squares">
            <li for="item in 11"></li>
            <li for="item in 11"></li>
            <li for="item in 11"></li>
            <li for="item in 11"></li>
            <li for="item in 11"></li>
            <li for="item in 11"></li>
            <li for="item in 11"></li>
            <li for="item in 11"></li>
            <li for="item in 11"></li>
            <li for="item in 11"></li>
            <li for="item in 11"></li>
          </ul>
        </div>
        <div className='loginResSection'>
          <article className='loginResPart'>
            <form onSubmit={handleRegistration} className='mx-5 mt-5 '>
              <h3 className='mb-5'>{isLogin ? 'Login' : 'Register'}</h3>
              {!isLogin &&
                <div className='d-flex'>
                  <div className='loginLogo mt-2 mx-2'>
                    <FaUserAlt></FaUserAlt>
                  </div>
                  <div class="user-box">
                    <input type="text" title="Enter Username" onBlur={handleNameChange} required />
                    <label>Username</label>
                  </div>
                </div>
              }
              <div className='d-flex'>
                <div className='loginLogo mt-2 mx-2'>
                  <MdEmail></MdEmail>
                </div>
                <div class="user-box">
                  <input type="email" title="Enter Email" onBlur={handleEmailChange} required />
                  <label>Email</label>
                </div>
              </div>


              <div className='d-flex'>
                <div className='loginLogo mt-2 mx-2'>
                  <FaUnlockAlt></FaUnlockAlt>
                </div>
                <div class="user-box">
                  <input type="password" title="Enter Password" onBlur={handlePasswordChange} required />
                  <label>Password</label>
                </div>
              </div>

              <div class="box">
                <input id="one" type="checkbox" onChange={handleRegisterChange} />
                <span class="check"></span>
                <label for="one">Already Registered?</label>
              </div>

              <div>
                <p className='text-danger'>{error}</p>
              </div>
              <button className='btnSection ' >{isLogin ? 'Sign In' : 'Sign Up'}</button>
            </form>
            <button className='btnSection mt-3' onClick={handleGoogleLogin}  >Google</button>
            {/* <button type="button" className="btn btn-primary mx-5" onClick={handleResetPassword}>Reset Password</button> */}
          </article>
        </div>
      </section>
    </div>
  );
}


export default Login;