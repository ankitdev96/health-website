import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';

const Register = () => {
    const {handleRegistration,user,handleEmailChange,handlePasswordChange,error,signInWithGoogle} = useAuth();
    
    return (
        <div className="mt-5">
            <h1>Register Here.</h1>
            <form class="row g-3 form" onSubmit={handleRegistration} >
                <div class="col-auto">
                    <label for="staticEmail2" class="visually-hidden">Email</label>
                    <input type="email"  class="form-control" id="staticEmail2" placeholder="Email"/>
                </div>

                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                </div>

                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Register</button>
                </div>
            </form>
            <Link to ="/login"><button className="btn btn-primary rounded-pill mx-3">Already registered </button> </Link>

            <button onClick={signInWithGoogle} className="rounded-pill btn btn-primary">Google Sign In</button> 
                
        </div> 
        
    );
};

export default Register;