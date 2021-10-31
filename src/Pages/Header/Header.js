import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <div className="naved">
                <div>
                    <Link to ="/"><img className="logoname" src={logo} alt=""/></Link>
                </div>
                <nav>
                    <Link to ="/home">Home</Link>
                    <Link to ="/myBooking">MyBooking</Link>
                    <Link to ="/addService">AddService</Link>
                    <Link to ="/manageServices">ManageServices</Link>
                    <Link to ="/login">Login</Link>
                    <span>{user.displayName} </span>
                    {user?.email && <button onClick={logout} className="btn btn-success" >Logout</button>}
                </nav>
            </div>
        </div>
    );
};


export default Header;
