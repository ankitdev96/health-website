import Button from '@restart/ui/esm/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const {user,logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" >E Health</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav nav-pills">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <NavLink as={HashLink} to="/home" className="nav-link active">Home</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" >Services</a> */}
          <NavLink as={HashLink} to="/services" className="nav-link active">Services</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" href="#">About Us</a> */}
          <NavLink as={HashLink} to="/about" className="nav-link active">About Us</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active" href="#">Doctors</a>
           */}
           <NavLink as={HashLink} to="/doctors" className="nav-link active">Doctors</NavLink>
        </li>
        {user.email && <span>Hello {user.displayName}</span>}

        <li className="nav-item">
          {/* <a className="nav-link active" href="#">LogIn</a> */}
          {
            user.email ?
              <button onClick={logOut}>LogOut</button>
            :
              <NavLink  to="/login"  className="nav-link active">Login</NavLink>
          }

          
        </li>

       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;