import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom';
// import useFirebase from '../Hooks/useFirebase';


const Header = () => {
    // const {user, logout} = useFirebase();
    return (
        <div>
            <div className="naved">
                <div>
                    <Link to ="/"><img className="logoname" src={logo} alt=""/></Link>
                </div>
                <nav>
                    <Link to ="/home">Home</Link>
                    <Link to ="/departments">My Orders</Link>
                    <Link to ="/doctors">Manage All Orders</Link>
                    <Link to ="/blog">Add A New Service</Link>
                    <Link to ="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    {/* {user?.email && <button onClick={logout} className="btn btn-success" >Logout</button>} */}
                </nav>
            </div>
        </div>
    );
};


export default Header;
