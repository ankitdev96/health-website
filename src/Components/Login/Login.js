import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {handleSignIn,signInWithGoogle} = useAuth();
    return (
        <div className="mt-5">
            <h1>Login Here.</h1>
            {/* <button ></button> */}
            <form class="row g-3 form" onSubmit={handleSignIn} >
                <div class="col-auto">
                    <label for="staticEmail2" class="visually-hidden">Email</label>
                    <input type="email"  class="form-control" id="staticEmail2" placeholder="Email"/>
                </div>

                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                </div>

                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Login</button>
                </div>
            </form>
            {/* <Link to="/register">New User ? </Link>
             */}
           <Link to ="/register"><Button className="btn btn-primary mx-3">New User </Button> </Link>
           <button onClick={signInWithGoogle} className="rounded-pill btn btn-primary">Google Sign In</button> 

        </div>
    );
};

export default Login;