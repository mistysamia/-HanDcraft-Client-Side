import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';


const Register = () => {
    return (
     <section className='register'>

    
            <div className='mt-5'>
                <h2 className='mt-5 mb-4'>Please Register</h2>
                <form onSubmit="">
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label" >Email :</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password :</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" placeholder="Enter Your Password" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-4">Sign Up</button>
                    <br />
                    <Link to="/login">Already Registered?</Link>
                </form>
                
                {/* <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button className="btn-regular">Google Sign In</button> */}
            </div>
            </section>
      
    );
};

export default Register;